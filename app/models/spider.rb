class Spider < ApplicationRecord

  validates_presence_of :name,
                        :style,
                        :entry_point,
                        :instructions

  has_many :pages

end
