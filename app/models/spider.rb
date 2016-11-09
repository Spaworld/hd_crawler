class Spider < ApplicationRecord
  attr_accessor :driver
  after_initialize :set_driver

  validates_presence_of :name,
                        :style,
                        :entry_point,
                        :instructions

  has_many :pages

  def access_entry_point
    @driver.visit entry_point
  end

  def click_link(css_path)
    @driver.find(css_path).click
  end

  def foo
    visit 'http://www.homedepot.com/b/Independent-Living-Bathroom-Safety-Walk-in-Tubs/American-Standard/Universal-Tubs/N-5yc1vZc8kaZ5aZbwj?NCNI-5'
  end

  private

  def set_driver
    @driver = Crawler.new
  end

end
