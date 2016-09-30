class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :hd_id
      t.string  :sku
      t.string  :category
      t.text    :description
      t.text    :bullets, array: true, default: []
      t.jsonb   :specifications, default:  {}
      t.text    :image_urls, array: true, default: []
      t.string  :installation_url
      t.string  :specification_url
      t.string  :warranty_url

      t.timestamps null: false
    end
  end
end
