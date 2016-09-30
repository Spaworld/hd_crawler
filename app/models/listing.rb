class Listing < ActiveRecord::Base

  validates_presence_of :hd_id
  validates_uniqueness_of :hd_id

  def self.create_from_hash(product_data)
    return if product_data.nil? || Listing.find_by(hd_id: product_data[:itemId].to_i).present?
    puts "--- storing listing number: #{product_data[:itemId]}"
    listing = new(
      hd_id:             product_data[:itemId].to_i,
      sku:               product_data[:info][:modelNumber],
      title:             product_data[:info][:productLabel],
      source_url:        product_data[:webUrl],
      category:          product_data[:itemExtension][:categoryName],
      description:       product_data[:info][:description],
      bullets:           product_data[:attributeGroups][3][:entries].map { |x| x[:value] },
      image_urls:        product_data[:media][:mediaList].select { |image| image[:height] === '1000' }.map{ |node| node[:location] },
      specifications:    product_data[:attributeGroups][4][:entries].map { |x| Hash[x[:name], x[:value]] }.reduce { |parent, h| parent.merge(h) },
      functional_vars:   product_data[:itemExtension][:functionalDetailsAttributes].map { |x| Hash[x[:name], x[:value]] }.reduce { |parent, h| parent.merge(h) }

    )
    unless product_data[:attributeGroups][2][:entries][1].nil?
      begin
        listing.installation_url  = product_data[:attributeGroups][2][:entries][1][:url]
      rescue
        binding.pry
      end
    end
    unless product_data[:attributeGroups][2][:entries][2].nil?
      begin
        listing.specification_url = product_data[:attributeGroups][2][:entries][2][:url]
      rescue
        binding.pry
      end
    end
    unless product_data[:attributeGroups][2][:entries][3].nil?
      begin
        listing.warranty_url =  product_data[:attributeGroups][2][:entries][3][:url]
      rescue
        binding
      end
    end
    listing.save
    puts 'OK!'
    puts
  end

  def formatted_image_urls
    image_urls.join(',')
  end

  def formatted_specs
    if specifications.class == Array
      specifications.map { |x| Hash[x['name'], x['value']] }.reduce {|acc, h| acc.merge(h) }
    else
      specifications
    end
  end

  def formatted_bullets
    bullets.join(',')
  end

  def color
    functional_vars['Color Family']
  end

  def drain_side
    return 'N/A' unless bathtub?
    functional_vars['Drain Location']
  end

  def therapy
    return 'N/A' unless bathtub?
    title_nodes = title.split(' ').map(&:downcase)
    if  title_nodes.include?('whirlpool') &&
        title_nodes.include?('air')
      'Whirlpool & Air jets'
    elsif title_nodes.include?('air')
      'Air Jets'
    elsif title_nodes.include?('whirlpool')
      'Whirlpool Jets'
    else
      'Soaker'
    end
  end

  def bathtub?
    true unless functional_vars['Drain Location'].nil?
  end

  def collection
    if category == 'Walk-in Bathtubs'
      sku[0..1] = ''
      if title.split(' ').include?('Nova')
        title.split(" ")[0..3].join(' ')
      elsif sku.include?('WCA')
        sku[0..6]
      else
        sku[0..1] + 'x' + sku[2..3]
      end
    else
      title.split(' ').first
    end
  end

  scope :by_hd_id, -> { uniq { |l| l.hd_id } }

  def self.to_csv
    attributes = %w(id hd_id sku source_url title category collection color drain_side therapy description bullets formatted_image_urls installation_url specification_url warranty_url)
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |listing|
        csv << [
          listing.id,
          listing.hd_id,
          listing.sku,
          listing.source_url,
          listing.title,
          listing.category,
          listing.collection,
          listing.color,
          listing.drain_side,
          listing.therapy,
          listing.description,
          listing.formatted_bullets,
          listing.formatted_image_urls,
          listing.installation_url,
          listing.specification_url,
          listing.warranty_url
        ]
      end
    end
  end
end
