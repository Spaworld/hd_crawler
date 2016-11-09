class ChangeInstructionsColumnDatatypeInSpidersTable < ActiveRecord::Migration[5.0]
  def change
    enable_extension 'hstore'
    remove_column :spiders, :instructions
    add_column    :spiders, :instructions, :hstore
  end
end
