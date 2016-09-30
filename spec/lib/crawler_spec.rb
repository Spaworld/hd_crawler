require 'rails_helper'

RSpec.describe Crawler do

  context 'standard results' do

    before do
      standard_page = File.open("#{Rails.root}/spec/fixtures/pages/standard_page.html")
      sample_doc = Nokogiri::HTML(standard_page)
      allow(subject).to receive(:fetch_listing_page).with(204766736)
      allow_any_instance_of(PoltergeistCrawler).to receive(:doc).and_return(sample_doc)
    end

    it 'should store new listings' do
      expect {
        subject.fetch_listing_attributes(204766736)
      }. to change {
        Listing.count
      }.by (1)
    end

    it 'should skip existing listings' do
      create(:listing, hd_id: 204766736)
      expect {
        subject.fetch_listing_attributes(204766736)
      }. to change {
        Listing.count
      }.by (0)
    end

  end

  context 'non-standard results' do

    before do
      no_category_page = File.open("#{Rails.root}/spec/fixtures/pages/no_category_page.html")
      sample_doc = Nokogiri::HTML(no_category_page)
      allow(subject).to receive(:fetch_listing_page).with(204766736)
      allow_any_instance_of(PoltergeistCrawler).to receive(:doc).and_return(sample_doc)
    end

    it 'should get stored with correct category names' do
      subject.fetch_listing_attributes(204766736)
      expect(Listing.last.category).to_not eq('Special Values')
    end

  end

  context 'when parsing raw data' do

    before do
      standard_page = File.open("#{Rails.root}/spec/fixtures/pages/standard_page.html")
      sample_doc = Nokogiri::HTML(standard_page)
      allow(subject).to receive(:fetch_listing_page).with(204766736)
      allow_any_instance_of(PoltergeistCrawler).to receive(:doc).and_return(sample_doc)
      subject.fetch_listing_attributes(204766736)
    end

    it 'should return image urls in correct format' do
      expect(Listing.last.image_urls).to_not be_empty
    end

    it 'should correctly interpret specifications from raw data hash' do
      expect(Listing.last.specifications).to_not be_empty
    end

    it 'should trim the the raw hash to contain core k/v pairs' do
    end

  end

end
