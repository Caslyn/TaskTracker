u1 = User.create(email: "caslyn@mail.com", name: "caslyn", password: "password")
u2 = User.create(email: "guest@mail.com", name: "guest", password: "password")

p1 = u1.projects.create(title: 'get real', description: 'really getting real')
p2 = u2.projects.create(title: 'test title', description: 'test description')

t1 = p1.trackers.create(title: "icebox")
t2 = p1.trackers.create(title: "backlog")
t3 = p1.trackers.create(title: "current")
t4 = p1.trackers.create(title: "done")