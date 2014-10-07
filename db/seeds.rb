# Users
u1 = User.create(email: "caslyn@mail.com", name: "caslyn", password: "password")
u2 = User.new(email: "guest@mail.com", name: "guest", password: "password")
u2.save()
u3 = User.new(email: "demo@mail.com", name: "demo", password: "password")
u3.save()

# Projects

# user2 (guest)
p1 = u2.projects.new(title: "Gettin' Real", description: 'gettin really real', user_id: u2.id)
p1.save()

p12 = u2.projects.new(title: "Gettin' Tired", description: 'gettin super tired', user_id: u2.id)
p12.save()

p13 = u2.projects.new(title: "Gettin' Hungry", description: 'gettin pretty hungry', user_id: u2.id)
p12.save()

#user3 (demo)

p2 = u3.projects.new(title: 'App Academy Final Project', 
		 description: 'Showcase skills and create a masterpeice', user_id: u1.id)
p2.save()

# Trackers

# Gettin' Real
t1 = p1.trackers.new(project_id: p1.id, title: "icebox", visible: true)
t1.save()
t2 = p1.trackers.new(project_id: p1.id, title: "backlog", visible: true)
t2.save()
t3 = p1.trackers.new(project_id: p1.id, title: "current", visible: true)
t3.save()
t4 = p1.trackers.new(project_id: p1.id, title: "done", visible: true)
t4.save()

# Gettin' Tired
t5 = p12.trackers.new(project_id: p12.id, title: "icebox", visible: true)
t5.save()
t6 = p12.trackers.new(project_id: p12.id, title: "backlog", visible: true)
t6.save()
t7 = p12.trackers.new(project_id: p12.id, title: "current", visible: true)
t7.save()
t8 = p12.trackers.new(project_id: p12.id, title: "done", visible: true)
t8.save()

# Gettin' Hungry
t11 = p13.trackers.new(project_id: p13.id, title: "icebox", visible: true)
t11.save()
t12 = p13.trackers.new(project_id: p13.id, title: "backlog", visible: true)
t12.save()
t13 = p13.trackers.new(project_id: p13.id, title: "current", visible: true)
t13.save()
t14 = p13.trackers.new(project_id: p13.id, title: "done", visible: true)
t14.save()

# App Academy Final Project
t21 = p2.trackers.new(project_id: p2.id, title: "icebox", visible: true)
t21.save()
t22 = p2.trackers.new(project_id: p2.id, title: "backlog", visible: true)
t22.save()
t23 = p2.trackers.new(project_id: p2.id, title: "current", visible: true)
t23.save()
t24 = p2.trackers.new(project_id: p2.id, title: "done", visible: true)
t24.save()

# Gettin' Real: t1-t4
s1 = t1.stories.new(title: 'hey homie', description: 'sup?', tracker_id: t1.id, ord: 0,
										points: 1, story_type: "feature")
s1.save()

# Gettin' Tired: t5-t8
s5 = t5.stories.new(title: "Sleep", description: "Get More Sleep", tracker_id: t5.id,
										 ord: 0, points: 0, story_type: "chore")
s5.save()
s6 = t5.stories.new(title: "Naps", description: "Take More Naps", tracker_id: t5.id,
										 ord: 0, points: 2, story_type: "feature")
s6.save()
s7 = t6.stories.new(title: "Coffee", description: "Drink More Coffee", tracker_id: t6.id,
										 ord: 0, points: 2, story_type: "feature")
s7.save()
s8 = t8.stories.new(title: "Soda", description: "Caffinated", tracker_id: t8.id,
										 ord: 0, points: 2, story_type: "feature")
s8.save()

# Gettin' Hungry: t11-t14
s11 = t11.stories.new(title: "Ice Cream", description: "chocolate and/or vanilla", tracker_id: t11.id,
										 ord: 0, points: 0, story_type: "feature")
s11.save()
s12 = t11.stories.new(title: "Cookies", description: "oatmeal raisin", tracker_id: t11.id,
										 ord: 0, points: 2, story_type: "feature")
s12.save()
s13 = t12.stories.new(title: "Sandwich", description: "Turkey", tracker_id: t12.id,
										 ord: 0, points: 2, story_type: "feature")
s13.save()

s14 = t13.stories.new(title: "Burger", description: "Quarter-Pounder", tracker_id: t13.id,
										 ord: 0, points: 2, story_type: "feature")
s14.save()

s121 = t14.stories.new(title: "Fries", description: "Garlic", tracker_id: t14.id,
										 ord: 0, points: 2, story_type: "feature")
s121.save()
s122 = t14.stories.new(title: "Pizza", description: "Pepperoni", tracker_id: t14.id,
										 ord: 0, points: 2, story_type: "feature")
s122.save()
s123 = t13.stories.new(title: "Milkshakes", description: "Oreo", tracker_id: t13.id,
										 ord: 0, points: 2, story_type: "feature")
s123.save()
s124 = t12.stories.new(title: "Chips", description: "BBQ", tracker_id: t12.id,
										 ord: 0, points: 2, story_type: "feature")
s124.save()

# App Academy Final Project: t21-t24
s10 = t21.stories.new(title: "Auth", description: "Users/Sessions", tracker_id: t21.id,
										 ord: 0, points: 0, story_type: "chore")
s10.save()
s11 = t21.stories.new(title: "Projects", description: "A Project holds all its project data", tracker_id: t21.id,
										 ord: 0, points: 2, story_type: "feature")
s11.save()
s12 = t22.stories.new(title: "Trackers", description: "A Tracker has many Projects / Tracker has many Stories", tracker_id: t22.id,
										 ord: 0, points: 2, story_type: "feature")
s12.save()
s13 = t24.stories.new(title: "Stories", description: "A Story represents an individual task", tracker_id: t24.id,
										 ord: 0, points: 2, story_type: "feature")
s13.save()
s14 = t23.stories.new(title: "Drag/Drop/Sortable", description: "Drag, drop, and sort Stories", tracker_id: t23.id,
										 ord: 0, points: 3, story_type: "feature")
s14.save()
s15 = t22.stories.new(title: "Additional Stories", description: "Add in Points/Feature attributes to Stories ", tracker_id: t22.id,
										 ord: 0, points: 2, story_type: "chore")
s15.save()
s16 = t24.stories.new(title: "Group Stories", description: "Group Stories into Weeks", tracker_id: t24.id,
										 ord: 0, points: 3, story_type: "feature")
s16.save()
s17 = t23.stories.new(title: "CSS Wonderfulness", description: "Improve styling", tracker_id: t23.id,
										 ord: 0, points: 2, story_type: "chore")
s17.save()