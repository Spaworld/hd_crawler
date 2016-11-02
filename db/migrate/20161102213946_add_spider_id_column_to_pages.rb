class AddSpiderIdColumnToPages < ActiveRecord::Migration[5.0]

  def change
    add_column :pages, :spider_id, :integer
  end

end
