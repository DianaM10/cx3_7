# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Cohort.delete_all

c7 = Cohort.create({name: 7})
c8 = Cohort.create({name: 8})
c9 = Cohort.create({name: 9})

Student.delete_all

s1 = Student.create({name: 'Tom the just', cohort_id: c7.id})
s2 = Student.create({name: 'David the Bug', cohort_id: c7.id})
s3 = Student.create({name: 'Cyrus the virus', cohort_id: c7.id})
s4 = Student.create({name: 'Paul', cohort_id: c7.id})
s5 = Student.create({name: 'Guy from C9', cohort_id: c9.id})

Teacher.delete_all

t1 = Teacher.create({name: 'Keith', cohort_id: c7.id})
t2 = Teacher.create({name: 'Zsolt', cohort_id: c9.id})
t3 = Teacher.create({name: 'Darren', cohort_id: c9.id})
t2 = Teacher.create({name: 'Sian', cohort_id: c9.id})
t2 = Teacher.create({name: 'Craig', cohort_id: c9.id})




