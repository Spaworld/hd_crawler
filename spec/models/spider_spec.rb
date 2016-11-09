require 'rails_helper'

RSpec.describe Spider, type: :model do

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:style) }
  it { should validate_presence_of(:instructions) }
  it { should validate_presence_of(:entry_point) }
  it { should have_many(:pages) }

  context 'driver' do

    let(:subject) { Spider.new.driver }
    it { is_expected.to respond_to(:page) }
    it { is_expected.to respond_to(:doc) }

  end

  context 'instructions' do

    it 'should interpret .click instructions' do
      standard_page = File.read("#{Rails.root}/spec/fixtures/pages/standard_page.html")
      spider = build(:spider, instructions: { click: '/' })
      allow_any_instance_of(Crawler).to receive(:find)
        .and_return { standard_page }
      spider.click_link('#some-link')
    end

  end

  context 'crawler' do

    before do
      standard_page = File.open("#{Rails.root}/spec/fixtures/pages/standard_page.html")
      sample_doc = Nokogiri::HTML(standard_page)
      allow_any_instance_of(Crawler).to receive(:doc)
        .and_return(sample_doc)
    end

    it 'should access entry point URL' do
      spider = build(:spider)
      spider.access_entry_point
      expect(spider.driver.doc).to_not be_nil
    end

  end

end
