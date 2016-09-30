require 'krawler'
require 'listing'
require 'crawler'

# Crawler.new.launch('lib/ids.csv')
# Krawler.new.crawl
ids = FileParser.get_ids('lib/ids.csv')

ids.each_with_index do |id, index|
  next unless Listing.find_by(hd_id: id).nil? || Listing.find_by(hd_id: id).functional_vars.nil?
  puts
  puts "== uupdating listing hd_id #{id} =="
  Crawler.new.fetch_listing_attributes(id)
  puts '**************************************'
end

