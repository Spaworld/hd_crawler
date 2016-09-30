class AddFunctionalVarsColumnToListings < ActiveRecord::Migration[5.0]
  def change
    add_column :listings, :functional_vars, :jsonb
  end
end
