class Listing < ActiveRecord::Base

  validates :hd_id, presence: true, uniqueness: true

  def self.create_from_hash(product_data)
    return if product_data.nil? ||
      Listing.find_by(hd_id: product_data.hd_id).present?
    Notifier.log('notify',"storing listing # #{ product_data.hd_id }")
    listing = new(
      hd_id:             product_data.hd_id,
      sku:               product_data.sku,
      title:             product_data.title,
      source_url:        product_data.source_url,
      price:             product_data.price,
      sale_price:        product_data.sale_price,
      category:          product_data.category,
      description:       product_data.description,
      bullets:           product_data.bullets,
      image_urls:        product_data.image_urls,
      functional_vars:   product_data.functional_vars,
      installation_url:  product_data.installation_url,
      specification_url: product_data.specification_url,
      warranty_url:      product_data.warranty_url
    )
    listing.save
    Notifier.log('status','ok')
  end

  def formatted_image_urls
    image_urls.join(',')
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
    attributes = %w(id hd_id sku source_url price sale_price title category collection color drain_side therapy description bullets formatted_image_urls installation_url specification_url warranty_url)
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |listing|
        csv << [
          listing.id,
          listing.hd_id,
          listing.sku,
          listing.source_url,
          listing.price,
          listing.sale_price,
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
