require_relative 'file_parser'
require_relative 'poltergeist_crawler'

class Crawler < PoltergeistCrawler

  def fetch_listing_attributes(id)
    puts '---a'
    Notifier.log('init', 'crawling', id)
    fetch_listing_page(id)
    fetch_listing_data
    Listing.create_from_hash(@product_data)
    Notifier.log('terminate')
  end

  def fetch_listing_page(id)
    Notifier.log('notify', "querying #{ENV['TARGET_DOMAIN']}")
    visit ENV['TARGET_DOMAIN']
    search_bar = find('#headerSearch')
    fill_in(search_bar[:name], with: id)
    find('#headerSearch').native.send_keys(:return)
    humanize_session
    return if doc.at('#pip-server-data').nil?
    Notifier.log('status', 'ok')
  end

  def fetch_listing_data
    Notifier.log('notify', "fetching data from #{ENV['TARGET_DOMAIN']}")
    return if doc.at('#pip-server-data').nil?
    raw_data = doc.at('#pip-server-data').text.strip.squish
    @product_data = DataSerializer.new(raw_data)
    Notifier.log('status', 'ok')
  end

  def reset_session
    super
    visit 'http://google.com'
    humanize_session
  end

  private

  def humanize_session
    sleep(rand(3.0...8.99))
  end

  def snapshot_output(source)
    path = 'log/snapshots/dump.txt'
    content = raw_data
    File.open(path, "w+") do |f|
      f.write(content)
    end
  end

end
