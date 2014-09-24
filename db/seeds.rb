# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create({ email: "caslyn@mail.com", password: "password" })
user2 = User.create({ email: "joe@mail.com", password: "password" })
user3 = User.create({ email: "hall@oates.com", password: "thebestever" })
user4 = User.create({ email: "simon@garfunkel.com", password: "anothergoodone" })
user5 = User.create({ email: "michael@jackson.com", password: "theking!"})

project1 = Project.create({title: 'alleviate hunger', user_id: 1})
project2 = Project.create({title: 'buy caslyn presents', user_id: 2})
project3 = Project.create({title: 'sing catchy songs', user_id: 3})
project4 = Project.create({title: 'sing melodious songs', user_id: 4})
project1 = Project.create({title: 'keeping jackson5 alive!', user_id: 5})

story1 = Story.create({ project_id: 1, title: 'find food', 
										description: "sandwiches", tracker: "icebox",
										ord: 0})
story2 = Story.create({ project_id: 2, title: 'go to store', 
										description: "$$$", tracker: "icebox",
										ord: 0})
story3 = Story.create({ project_id: 3, title: 'be inspired', 
										description: "keep being awesome", tracker: "icebox",
										ord: 0})
story4 = Story.create({ project_id: 4, title: 'find harmony', 
										description: "get back together", tracker: "icebox",
										ord: 0})
story5 = Story.create({ project_id: 4, title: 'thriller2', 
										description: "find way to come back to life", tracker: "icebox",
										ord: 0})
