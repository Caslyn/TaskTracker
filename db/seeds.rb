u1 = User.create(email: "caslyn@mail.com", name: "caslyn", password: "password")
u2 = User.create(email: "guest@mail.com", name: "guest", password: "password")

u1.save()
u2.save()

p1 = u1.projects.new(title: 'get real', description: 'really getting real', user_id: u1.id)
p2 = u2.projects.new(title: 'test title', description: 'test description', user_id: u1.id)

p1.save()
p2.save()

t1 = p1.trackers.new(project_id: p1.id, title: "icebox", visible: true)
t2 = p1.trackers.new(project_id: p1.id, title: "backlog", visible: true)
t3 = p1.trackers.new(project_id: p1.id, title: "current", visible: true)
t4 = p1.trackers.new(project_id: p1.id, title: "done", visible: true)

t5 = p2.trackers.new(project_id: p2.id, title: "icebox", visible: true)
t6 = p2.trackers.new(project_id: p2.id, title: "backlog", visible: true)
t7 = p2.trackers.new(project_id: p2.id, title: "current", visible: true)
t8 = p2.trackers.new(project_id: p2.id, title: "done", visible: true)

t1.save()
t2.save()
t3.save()
t4.save()

t5.save()
t6.save()
t7.save()
t8.save()

s1 = t1.stories.new(title: 'all i do is win', description: 'no matter what!', tracker_id: t1.id, ord: 0)
s2 = t1.stories.new(title: 'oh hey', description: 'hi!', tracker_id: t1.id, ord: 1)

s1.save()
s2.save()