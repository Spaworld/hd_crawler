require 'poltergeist_crawler'

class Krawler < PoltergeistCrawler

  def crawl
    @ids = []
    csv  = CSV.read('lib/ids.csv', {headers: true, header_converters: :symbol})
    csv.each do |row|
      @ids.push(row[:id])
    end

    @ids.each_with_index do |id, index|
      next unless Listing.find_by(hd_id: id.to_i).nil?
      puts ">>> creating listing #{id} | number #{index + 1}"
      search_for_product_id(id)
      puts "Page content empty? #{page.nil?}"
      page.all('body script', visible: false).each do |el|
        if el.text(:all).start_with?("define('server-data")
          @server_data = el.text(:all).strip
        end
      end
      puts ">>> @server_data.nil?: #{@server_data.nil?}"
      next if @server_data.nil?
      product_data = eval(@server_data.match(/\s{\"b*(.*?)\}\]};/).to_s)
      puts "-=-=-=-=-#{product_data}"
      next if product_data.nil?
      puts 'product_data not nil'
      Listing.create_from_hash(product_data)
      puts "!<<< created listing #{id} | number #{index + 1}"
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
