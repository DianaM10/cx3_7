class CreateCohorts < ActiveRecord::Migration
  def change
    create_table :cohorts do |t|
      t.integer :name

      t.timestamps null: false
    end
  end
end
