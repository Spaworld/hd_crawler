require 'poltergeist_crawler'
require 'pry-rails'
require 'csv'

class Krawler < PoltergeistCrawler

  def crawl
    @ids = []
    csv  = CSV.read('lib/ids.csv', {headers: true, header_converters: :symbol})
    csv.each do |row|
      @ids.push(row[:id])
    end

    @ids.each_with_index do |id, index|
      next if Listing.find_by(hd_id: id).nil?
      search_for_product_id(id)
      page.all('body script', visible: false).each do |el|
        if el.text(:all).start_with?("define('server-data")
          @server_data = el.text(:all)
        end
      end
      product_data = eval(@server_data.match(/\s{\"b*(.*?)\}}\]};/m).to_s)
      Listing.create(
        hd_id:             product_data[:itemId],
        sku:               product_data[:info][:modelNumber],
        category:          product_data[:dimensions][0][:ancestors].last[:name],
        description:       product_data[:info][:description],
        bullets:           product_data[:attributeGroups][3][:entries].map {|x| x[:value] },
        image_urls:       product_data[:media][:mediaList].select {|x| x[:height] == '1000' }.map {|s| s[:location]},
        specifications:    product_data[:attributeGroups][4][:entries],
        installation_url:  product_data[:attributeGroups][2][:entries][1][:url],
        specification_url: product_data[:attributeGroups][2][:entries][2][:url],
        warranty_url:      product_data[:attributeGroups][2][:entries][3][:url]
      )
      puts "---created listing number #{index}"
    end

  end

  def search_for_product_id(product_id)
    sleep(rand(3.0...6.0))
    visit 'http://www.homedepot.com'
    fill_in('What can we help you find?', with: product_id)
    find('#headerSearch').native.send_keys(:return)
    sleep(rand(3.0...7.0))
  end

end
