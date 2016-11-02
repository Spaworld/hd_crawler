require 'rails_helper'

RSpec.describe Spider, type: :model do

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:style) }
  it { should validate_presence_of(:instructions) }
  it { should validate_presence_of(:entry_point) }

  it { should have_many(:pages) }

end
