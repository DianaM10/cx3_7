class AddHeightToAnimal < ActiveRecord::Migration
  def change
    add_column :animals, :height, :number
  end
end
