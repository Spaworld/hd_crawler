require 'rails_helper'

RSpec.describe Driver do

  it { should respond_to(:doc) }
  it { should respond_to(:page) }

  context 'navigation' do

    before do
      standard_page = File.open("#{Rails.root}/spec/fixtures/pages/standard_page.html")
      sample_doc = Nokogiri::HTML(standard_page)
      allow(subject).to receive(:access_page)
      allow(subject).to receive(:doc).and_return(sample_doc)
    end

    it 'should be able to interpret instructions' do
    end

    it 'should access page by url and store the doc' do
      subject.access_page('xyz')
      expect(subject.doc).to_not be_nil
    end

    it 'should find elements on page' do
      expect(subject.find_element('body')).to_not be_nil
    end

   it 'should click links' do
      allow_any_instance_of(Capybara::Session).to receive(:click)
      expect(subject.page).to receive(:find).with('expandMediaView')
        .with('.expandMediaView')
      subject.click_link('.expandMediaView')
    end

  end

end
