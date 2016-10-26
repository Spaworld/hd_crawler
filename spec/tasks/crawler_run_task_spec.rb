require 'rails_helper'

RSpec.describe 'crawler:run', type: :rake do

  it 'should handle empty ids array' do
    subject_with_empty_args = subject
    expect { subject_with_empty_args.execute }
      .to_not raise_error
  end

  it 'should trigger the crawling process for id args' do
    crawler = double(
      'crawler', fetch_listing_attributes: true)
    allow(Crawler)
      .to receive(:new)
      .and_return(crawler)
    expect(crawler)
      .to receive(:fetch_listing_attributes)
      .with(instance_of(Fixnum))
      .at_least(3).times
    subject.execute([1,2,3])
  end

end

