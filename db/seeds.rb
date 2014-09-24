# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create({ email: "caslyn@mail.com", password: "password" })
user2 = User.create({ email: "joe@mail.com", password: "password" })
user3 = User.create({ email: "hall@oates.com", password: "poptastic" })
user4 = User.create({ email: "simon@garfunkel.com", password: "anothergoodone" })

project1 = Project.create({title: 'alleviate hunger', user_id: 1})
project2 = Project.create({title: 'enjoy the good life', user_id: 1})
project3 = Project.create({title: 'buy caslyn presents', user_id: 2})
project4 = Project.create({title: 'sing catchy songs', user_id: 3})
project5 = Project.create({title: 'sing melodious songs', user_id: 4})


story1 = Story.create({ project_id: 1, title: 'find food', 
										description: "sandwiches", tracker: "icebox",
										ord: 0})

story2 = Story.create({ project_id: 2, title: 'mo money less problems', 
										description: "find way to make lots of money", tracker: "icebox",
										ord: 0})

story3 = Story.create({ project_id: 3, title: 'go to store', 
										description: "$$$", tracker: "icebox",
										ord: 0})
story4 = Story.create({ project_id: 4, title: 'be inspired', 
										description: "keep being awesome", tracker: "icebox",
										ord: 0})
story5 = Story.create({ project_id: 5, title: 'find harmony', 
										description: "get back together", tracker: "icebox",
										ord: 0})

