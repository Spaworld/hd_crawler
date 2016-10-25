namespace :crawler do

  desc 'runs crawler'
  task :run, [:ids] do |task, ids|
    return if ids.nil?
    ids.each_with_index do |id, index|
      Crawler.new.fetch_listing_attributes(id)
    end
  end

end
