require_relative 'file_parser'
require_relative 'poltergeist_crawler'

class Crawler < PoltergeistCrawler

  def fetch_listing_attributes(id)
    puts "=== Parsing listing number: #{id}" unless Rails.env.test?
    fetch_listing_page(id)
    fetch_listing_data
    Listing.create_from_hash(@product_data)
  end

  def fetch_listing_page(id)
    puts "--- Querying #{ENV['TARGET_DOMAIN']}"
    visit ENV['TARGET_DOMAIN']
    # humanize_session
    fill_in('What can we help you find?', with: id)
    find('#headerSearch').native.send_keys(:return)
    humanize_session # randomize post request frequency
    #Guarding nil dump
    return if doc.at('#pip-server-data').nil?
  end

  def fetch_listing_data
    puts "--- fetching raw data"
    return if doc.at('#pip-server-data').nil?
    raw_data = doc.at('#pip-server-data').text.strip.squish
    @product_data = eval(
      raw_data
      .match(/\s{"b*(.*?)\}\]};/m)
      .to_s
    )
    path = 'spec/dump.txt'
    content = raw_data
    File.open(path, "w+") do |f|
      f.write(content)
    end
    puts 'OK!'
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

end
