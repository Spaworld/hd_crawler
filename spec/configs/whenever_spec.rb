require 'rails_helper'
require 'whenever'

RSpec.describe Whenever do

  let(:whenever) do
    Whenever::JobList.new(file: Rails.root.join('config', 'schedule.rb').to_s)
  end

  it 'should schedule the crawling process to run every 7 days' do
    puts whenever.inspect
    expect(whenever).to schedule_rake('crawler:run')
      .every(7.days)
      .at('3:00am')
  end

end
