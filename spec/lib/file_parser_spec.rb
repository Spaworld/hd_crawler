require 'file_parser'

RSpec.describe FileParser, startegy: :null do

  let(:file_path) { 'spec/fixtures/files/10_product_ids.csv' }

  it 'should return ids from a CSV file' do
    expect(FileParser.get_ids(file_path).count).to eq(10)
  end

end
