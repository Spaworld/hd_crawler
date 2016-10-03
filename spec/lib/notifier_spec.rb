require 'rails_helper'
RSpec.describe Notifier do

  before do
    allow(Rails)
      .to receive(:env)
      .and_return(ActiveSupport::StringInquirer.new("production"))
  end

  it 'should return process init message' do
    expect { Notifier.log('init', 'foo', 1) }
      .to output { '=== Foo process started for listing 1' }
      .to_stdout
  end

  it 'should return notification message' do
    expect { Notifier.log('notify', 'foo') }
      .to output { '--- Foo' }
      .to_stdout
  end

  it 'should return status message' do
    expect { Notifier.log('status', 'ok') }
      .to output { '... OK!' }
      .to_stdout
  end

end
