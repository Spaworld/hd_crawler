class DataSerializer

  attr_accessor :data,
                :hd_id,
                :sku,
                :title,
                :source_url,
                :price,
                :sale_price,
                :category,
                :description,
                :bullets,
                :image_urls,
                :functional_vars,
                :installation_url,
                :specification_url,
                :warranty_url

  def initialize(raw_data)
    @data = parse(raw_data)
  end

  def sku;               @data.dig('info', 'modelNumber')  end
  def title;             @data.dig('info', 'productLabel') end
  def source_url;        @data.dig('webUrl')  end
  def price;             @data.dig('itemExtension', 'pricing','originalPrice') end
  def sale_price;        @data.dig('itemExtension', 'pricing','specialPrice')  end
  def category;          @data.dig('itemExtension', 'categoryName')            end
  def description;       @data.dig('info', 'description')  end
  def installation_url;  @data.dig('attributeGroups', 2, 'entries', 1, 'url')  end
  def specification_url; @data.dig('attributeGroups', 2, 'entries', 2, 'url')  end
  def warranty_url;      @data.dig('attributeGroups', 2, 'entries', 3, 'url')  end

  def hd_id
    @data.dig('itemId').to_i
  end

  def bullets
    @data.dig('attributeGroups', 3, 'entries')
      .map { |bullet| bullet['value'] }
  end

  def image_urls
    @data.dig('media', 'mediaList')
      .select { |image| image['height'] == '1000' }
      .map { |node| node['location'] }
  end

  def functional_vars
    @data.dig('itemExtension', 'functionalDetailsAttributes')
      .map { |var| Hash[var['name'], var['value']] }
      .reduce { |k, v| k.merge(v) }
  end

  private

  def parse(raw_data)
    return if raw_data.nil? || raw_data.empty?
    matched_data = raw_data.match(/\s{"b*(.*?)\}\]};/m)
      .to_s
      .strip
      .gsub(';','')
    @raw_data = JSON.parse(matched_data)
  end

  def snapshot_output(raw_data)
    path = 'log/snapshots/dump.txt'
    File.open(path, 'w+') do |f|
      f.write(raw_data)
    end
    Notifier.log('notify',
                 'problem fetching raw data,/
                  storing dump in log/snapshots')
  end

end
