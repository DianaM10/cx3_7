class RemoveHeightFromAnimal < ActiveRecord::Migration
  def change
    remove_column :animals, :height
  end
end
