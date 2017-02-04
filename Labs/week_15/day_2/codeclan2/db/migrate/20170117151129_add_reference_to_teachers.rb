class AddReferenceToTeachers < ActiveRecord::Migration
  def change
    add_reference :teachers, :cohort, index: true, foreign_key: true
  end
end
