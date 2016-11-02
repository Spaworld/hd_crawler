class Page < ApplicationRecord

  validates_presence_of :content

  belongs_to :spider


end
