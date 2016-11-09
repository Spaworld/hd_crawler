require 'rails_helper'

RSpec.describe Page, type: :model do

  it { should validate_presence_of(:content) }

  it { should belong_to(:spider) }

end