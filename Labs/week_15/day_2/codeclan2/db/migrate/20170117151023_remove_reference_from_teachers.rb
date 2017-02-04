class RemoveReferenceFromTeachers < ActiveRecord::Migration
  def change
    remove_reference :teachers, :student, index: true, foreign_key: true
  end
end
