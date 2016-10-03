require 'rails_helper'

RSpec.describe Listing, type: :model do

  it { should validate_presence_of(:hd_id) }
  it { should validate_uniqueness_of(:hd_id) }

end
