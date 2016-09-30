class AddSourceUrlColumnToListings < ActiveRecord::Migration[5.0]
  def change
    add_column :listings, :source_url, :string
  end
end
