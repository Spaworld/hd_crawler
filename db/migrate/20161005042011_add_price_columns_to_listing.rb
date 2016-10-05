class AddPriceColumnsToListing < ActiveRecord::Migration[5.0]
  def change
    add_column :listings, :price, :string
    add_column :listings, :sale_price, :string
  end
end
