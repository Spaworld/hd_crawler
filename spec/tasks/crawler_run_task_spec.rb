require 'rails_helper'

RSpec.describe 'crawler:run', type: :rake do

  let(:ids)   { %w(1,2,3) }
  let(:id)    { ids.sample }

  it 'should handle empty ids array' do
    subject_with_empty_args = subject
    expect { subject_with_empty_args.execute }
      .to_not raise_error
  end

  it 'triggers Crawler#fetch_listing_attributes' do
    crawler = Crawler.new
    # allow_any_instance_of(Crawler)
    allow(crawler)
      .to receive(:fetch_listing_attributes)
      .with(1)
      .and_return('foo')
    # crawler = Crawler.new
    expect(crawler).to receive(:fetch_listing_attributes)
    subject.execute([1])
  end

end
