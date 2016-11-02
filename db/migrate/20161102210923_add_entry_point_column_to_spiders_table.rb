class AddEntryPointColumnToSpidersTable < ActiveRecord::Migration[5.0]
  def change
    add_column :spiders, :entry_point, :text
  end
end
