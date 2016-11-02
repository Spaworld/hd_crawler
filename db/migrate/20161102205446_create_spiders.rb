class CreateSpiders < ActiveRecord::Migration[5.0]
  def change
    create_table :spiders do |t|
      t.string :name
      t.text :description
      t.string :style
      t.json :instructions

      t.timestamps
    end
  end
end
