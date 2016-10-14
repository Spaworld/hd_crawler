require 'listing'
require 'crawler'

ids = FileParser.get_ids('lib/ids.csv')
crawler = Crawler.new

ids.each_with_index do |id, index|
  next if Listing.find_by(hd_id: id)
  crawler.fetch_listing_attributes(id)
  if (index + 1 ) % 100 == 0
    puts '--- resetting sessions'
    crawler.reset_session
  end
end

