u1 = User.create(email: "caslyn@mail.com", name: "caslyn", password: "password")
u2 = User.create(email: "guest@mail.com", name: "guest", password: "password")

u1.save()
u2.save()

p1 = u1.projects.new(title: 'get real', description: 'really getting real', user_id: u1.id)
p2 = u2.projects.new(title: 'App Academy Final Project', 
		 description: 'Showcase skills and create a masterpeice', user_id: u1.id)

p1.save()
p2.save()

t1 = p1.trackers.new(project_id: p1.id, title: "icebox", visible: true)
t2 = p1.trackers.new(project_id: p1.id, title: "backlog", visible: true)
t3 = p1.trackers.new(project_id: p1.id, title: "current", visible: true)
t4 = p1.trackers.new(project_id: p1.id, title: "done", visible: true)

t5 = p2.trackers.new(project_id: p2.id, title: "icebox", visible: true, ord: 3)
t6 = p2.trackers.new(project_id: p2.id, title: "backlog", visible: true, ord: 2)
t7 = p2.trackers.new(project_id: p2.id, title: "current", visible: true, ord: 1)
t8 = p2.trackers.new(project_id: p2.id, title: "done", visible: true, ord: 0)

t1.save()
t2.save()
t3.save()
t4.save()

t5.save()
t6.save()
t7.save()
t8.save()

s1 = t1.stories.new(title: 'hey homie', description: 'sup?', tracker_id: t1.id, ord: 0,
										points: 1, story_type: "feature")

s2 = t1.stories.new(title: 'oh hey', description: 'i mean hi!', tracker_id: t2.id, ord: 1,
										points: 2, story_type: "bug")

s1.save()
s2.save()


s10 = t5.stories.new(title: "Auth", description: "Users/Sessions", tracker_id: t8.id,
										 ord: 0, points: 0, story_type: "chore")
s11 = t5.stories.new(title: "Projects", description: "A Project holds all its project data", tracker_id: t7.id,
										 ord: 0, points: 2, story_type: "feature")
s12 = t5.stories.new(title: "Trackers", description: "A Tracker has many Projects / Tracker has many Stories", tracker_id: t7.id,
										 ord: 0, points: 2, story_type: "feature")
s13 = t5.stories.new(title: "Stories", description: "A Story represents an individual task", tracker_id: t7.id,
										 ord: 0, points: 2, story_type: "feature")
s14 = t5.stories.new(title: "Drag/Drop/Sortable", description: "Drag, drop, and sort Stories", tracker_id: t6.id,
										 ord: 0, points: 3, story_type: "feature")
s15 = t5.stories.new(title: "Additional Stories", description: "Add in Points/Feature attributes to Stories ", tracker_id: t6.id,
										 ord: 0, points: 2, story_type: "chore")
s16 = t5.stories.new(title: "Group Stories", description: "Group Stories into Weeks", tracker_id: t5.id,
										 ord: 0, points: 3, story_type: "feature")
s17 = t5.stories.new(title: "CSS Wonderfulness", description: "Improve styling", tracker_id: t5.id,
										 ord: 0, points: 2, story_type: "chore")

s10.save()
s11.save()
s12.save()
s13.save()
s13.save()
s14.save()
s15.save()
s16.save()
s17.save()