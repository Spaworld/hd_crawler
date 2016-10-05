require 'rails_helper'

RSpec.describe DataSerializer do

  let(:sample_data) { File.open('spec/fixtures/files/sample_dump.txt').read }
  subject { DataSerializer.new(sample_data) }

  it 'should convert raw JS object string to JSON' do
    expect(sample_data.class).to eq(String)
    expect(subject.data.class).to eq(Hash)
  end

  it 'should handle empty init arg' do
    expect { DataSerializer.new('') }.to_not raise_error
  end

  it 'should return hd_id' do
    expect(subject.hd_id).to_not be_nil
  end

  it 'should return sku' do
    expect(subject.hd_id).to_not be_nil
  end

  it 'should return title' do
    expect(subject.title).to_not be_nil
  end

  it 'should return source_url' do
    expect(subject.source_url).to_not be_nil
  end

  it 'should retturn price' do
    expect(subject.price).to_not be_nil
  end

  it 'should return sale price' do
    expect(subject.sale_price).to_not be_nil
  end

  it 'should return category' do
    expect(subject.category).to_not be_nil
  end

  it 'should return description' do
    expect(subject.description).to_not be_nil
  end

  it 'should return bullets' do
    expect(subject.bullets).to_not be_nil
  end

  it 'should return image_urls' do
    expect(subject.image_urls).to_not be_nil
  end

  it 'should return functional_vars' do
    expect(subject.functional_vars).to_not be_nil
  end

  context 'when fetching empty / nil values from raw data' do

    it 'should not raise error on sale_price' do
      expect { subject.sale_price }.to_not raise_error
    end

    it 'should not raise error on installation_url' do
      expect { subject.installation_url }.to_not raise_error
    end

    it 'should not raise error on specification_url' do
      expect { subject.specification_url }.to_not raise_error
    end

    it 'should not raise error on specification_url' do
      expect { subject.warranty_url }.to_not raise_error
    end

  end

end
