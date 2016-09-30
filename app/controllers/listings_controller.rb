class ListingsController < ApplicationController
  require 'csv'

  def index
    @listings = Listing.by_hd_id

    respond_to do |format|
      format.html
      format.csv { send_data @listings.to_csv }
    end

  end

end
