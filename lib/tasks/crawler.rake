namespace :crawler do

  desc 'runs crawler'
  task :run, [:ids] do |task, ids|
    return if ids.nil?
    crawler = Crawler.new
    ids.each_with_index do |id, index|
      crawler.fetch_listing_attributes(id)
    end
  end

end
