class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer  'hd_id'
      t.string   'sku'
      t.string   'category'
      t.text     'description'
      t.text     'bullets',           default: [],              array: true
      t.jsonb    'specifications',    default: {}
      t.text     'image_urls',        default: [],              array: true
      t.string   'installation_url'
      t.string   'specification_url'
      t.string   'warranty_url'
      t.datetime 'created_at',                     null: false
      t.datetime 'updated_at',                     null: false
      t.string   'title'
      t.string   'source_url'
      t.jsonb    'functional_vars'
      t.string   'price'
      t.string   'sale_price'
      t.index    :hd_id, unique: true
      t.timestamps null: false
    end
  end
end
