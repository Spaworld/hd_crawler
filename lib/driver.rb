class Driver < PoltergeistCrawler

  def access_page(url)
    visit url
  end

  def click_link(css_path)
    page.find(css_path).click
  end

  def find_element(css_path)
    doc.css(css_path).text
  end

  def select_checkbox(css_path)
    find(css_path).set(:true)
  end

end
