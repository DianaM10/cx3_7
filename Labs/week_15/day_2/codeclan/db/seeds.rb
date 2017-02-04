# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Student.delete_all

s1 = Student.create({name: 'Tom the just'})
s2 = Student.create({name: 'David the Bug'})
s3 = Student.create({name: 'Cyrus the virus'})
s4 = Student.create({name: 'Paul'})
s5 = Student.create({name: 'Guy from C9'})



