# Users
user1 = User.new(email: "caslyn@mail.com", name: "caslyn", password: "password")
user2 = User.new(email: "guest@mail.com", name: "guest", password: "password")
user3 = User.new(email: "demo@mail.com", name: "demo", password: "password")

user1.save()
user2.save()
user3.save()

# Projects

#user2 (guest)
project1 = user2.projects.new(title: 'Creating This Project', 
		 description: "A look at how I approached this project's 'MVP'", user_id: user2.id)
project2 = user2.projects.new(title: 'Learn About Task Tracker!', 
		 description: 'Click me to find out how awesome Task Tracker is', user_id: user2.id)

project1.save()
project2.save()

# user1 (caslyn)
project3 = user1.projects.new(title: "Gettin' Real", description: 'gettin really real', user_id: user1.id)
project4 = user1.projects.new(title: "Gettin' Tired", description: 'gettin super tired', user_id: user1.id)
project5 = user1.projects.new(title: "Gettin' Hungry", description: 'gettin pretty hungry', user_id: user1.id)

project3.save()
project4.save()
project5.save()

# Trackers

# Learn About Task Tracker!
tracker1 = project2.trackers.new(project_id: project2.id, title: "icebox", visible: true, ord:3)
tracker2 = project2.trackers.new(project_id: project2.id, title: "backlog", visible: true, ord:2)
tracker3 = project2.trackers.new(project_id: project2.id, title: "current", visible: true, ord: 1)
tracker4 = project2.trackers.new(project_id: project2.id, title: "done", visible: false, ord: 0)

tracker1.save()
tracker2.save()
tracker3.save()
tracker4.save()

# Gettin' Real
tracker5 = project3.trackers.new(project_id: project3.id, title: "icebox", visible: true, ord:3)
tracker6 = project3.trackers.new(project_id: project3.id, title: "backlog", visible: true, ord:2)
tracker7 = project3.trackers.new(project_id: project3.id, title: "current", visible: true, ord: 1)
tracker8 = project3.trackers.new(project_id: project3.id, title: "done", visible: false, ord: 0)

tracker5.save()
tracker6.save()
tracker7.save()
tracker8.save()

# Gettin' Tired
tracker9 = project4.trackers.new(project_id: project4.id, title: "icebox", visible: true, ord:3)
tracker10 = project4.trackers.new(project_id: project4.id, title: "backlog", visible: true, ord:2)
tracker11 = project4.trackers.new(project_id: project4.id, title: "current", visible: true, ord: 1)
tracker12 = project4.trackers.new(project_id: project4.id, title: "done", visible: false, ord: 0)

tracker9.save()
tracker10.save()
tracker11.save()
tracker12.save()

# Gettin' Hungry
tracker13 = project5.trackers.new(project_id: project5.id, title: "icebox", visible: true, ord:3)
tracker14 = project5.trackers.new(project_id: project5.id, title: "backlog", visible: true, ord:2)
tracker15 = project5.trackers.new(project_id: project5.id, title: "current", visible: true, ord: 1)
tracker16 = project5.trackers.new(project_id: project5.id, title: "done", visible: false, ord: 0)

tracker13.save()
tracker14.save()
tracker15.save()
tracker16.save()

# App Academy Final Project
tracker17 = project1.trackers.new(project_id: project1.id, title: "icebox", visible: true, ord:3)
tracker18 = project1.trackers.new(project_id: project1.id, title: "backlog", visible: true, ord:2)
tracker19 = project1.trackers.new(project_id: project1.id, title: "current", visible: true, ord: 1)
tracker20 = project1.trackers.new(project_id: project1.id, title: "done", visible: false, ord: 0)

tracker17.save()
tracker18.save()
tracker19.save()
tracker20.save()

#Learn About Task Tracker!: Stories

# icebox: what the icebox is used for
story23 = tracker1.stories.new(title: "Step 1: What is an Icebox?", 
	description: "The Icebox is where you can store all your tasks - called stories - that have not yet been scheduled. 
	The Icebox is one of four 'Trackers' (Icebox, Backlog, Current, Done) that will hold your stories for you depending on the
	state of the story. You can put your stories 'on ice' in the icebox until they are ready to be prioritized.",
	tracker_id: tracker1.id, ord: 0, points: 0, story_type: "feature");
# what stories are
story24 = tracker1.stories.new(title: "Step 2: But What is a Story?",
	description: "A story is a concrete deliverable task for your project. For example, 'Seed Demo Database with Step-By-Step Tutorial', would make a great story.", 
	tracker_id: tracker1.id, ord: 1, points: 0, story_type: "feature")
# points/features
story25 = tracker1.stories.new(title: "Step 3: Why do Stories have 'Points'?", 
	description: "Each story has a point estimate: a relative measure of complexity and risk inherent in the task. Task Tracker's default point scale ranges from 0 (little ecomplexity) to 4 (much complexity). Assigning a points estimation will help you better prioritize and schedule stories while planning your project.",
	tracker_id: tracker1.id, ord: 2, points: 3, story_type: "chore" )
story26 = tracker1.stories.new(title: "Step 4: Assign a Story Type", 
	description: "You sure can! A story may be categorized as one of four types: Feature, Chore, Bug, or Release.
	A Feature provides/adds value to your end product.
	A Chore is any necessary task that may not add direct value to your product.
	A Bug represents any unintented behavior related to your features that will need to be addressed.
	A Release is a major milestone that mark progress towards your end goal.", 
	tracker_id: tracker1.id, ord: 3, points: 3, story_type: "release")
# how to create a story
story27 = tracker1.stories.new(title: "Step 5: Create a Story!",
	description: "Click the 'Add Story' option on the side navigation bar, or simply click the '+' icon at the top of any tracker you'd like the story to belong to. Go ahead, try it and create a story in the Icebox!",
	tracker_id: tracker1.id, ord: 4, points: 0, story_type: "chore")
# how to edit a story
story28 = tracker1.stories.new(title: "Step 6: Edit or Delete a Story",
	description: "Easy! Click the gear icon at the top right corner of your story. You can make or save changes - or if you'd like to delete the story, click the trash can icon within the edit form.",
	tracker_id: tracker1.id, ord: 5, points: 0, story_type: "chore")
# various states of stories
story29 = tracker1.stories.new(title: "Step 7: Prioritize Stories & Begin Planning",
	description: "Wonderful, you are ready to prioritize this task. Go ahead and drag and drop this story card into the Backlog Tracker",
	tracker_id: tracker1.id, ord: 6, points: 0, story_type: "feature")

story23.save()
story24.save()
story25.save()
story26.save()
story27.save()
story28.save()
story29.save()

# backlog

# what the backlog is used for
story30 = tracker2.stories.new(title: "Step 8: What does the Backlog Do?",
	description: "The backlog holds prioritized stories: stories at the top of the backlog are most important and will be worked on first.",
	tracker_id: tracker2.id, ord: 0, points: 0, story_type: "feature")
# prioritization/drag & drop
story31 = tracker2.stories.new(title: "Step 9: Prioritize Stories in Backlog", 
	description: "Why not get a feel of prioritizing stories by dragging & dropping a few of the stories in this Backlog tracker?",
	tracker_id: tracker2.id, ord: 1, points: 0, story_type: "feature")
# Points Accumulation
story32 = tracker2.stories.new(title: "LOOK HERE: Total Points", 
	description: "The Backglog & Current Trackers keep track of the accumulated points of all the stories contained within. This helps you measure and monitor the workload you have scheduled or in progress",
	tracker_id: tracker2.id, ord: 3, points: 2, story_type: "chore")
#start state
story33 = tracker2.stories.new(title: "Step 11: Starting a Story",
	description: "When you're ready to start a story (ie begin work on the story's task), press the 'Start' button on the story, drag and drop the story into the Current tracker.",
	tracker_id: tracker2.id, ord:2, points: 3, story_type: "chore")

# current: what the current is used for
story34 = tracker3.stories.new(title: "Step 12: The Current Tracker",
	description: "This Tracker holds all the stories that are in progress.",
	tracker_id: tracker3.id, ord: 0, points: 0, story_type: "feature", state: "deliver" )
# toggling trackers
story37 = tracker3.stories.create(title: "LOOK HERE: Change Your Tracker Views",
	description: "Care to only focus on all the stories inside Current? In the sidebar, click 'icebox' and 'backlog' to only see your Current Tracker. Don't worry, you can get icebox, backlog - and even done - back into view by clicking on them again)",
	tracker_id: tracker3.id, ord: 1, points: 3, story_type: "chore", state: "deliver")

# various states in Current
story35 = tracker3.stories.new(title: "Step 13: Keep Track of Your Story",
	description: "Here are the various states that describe the progress of your story:/n
	- Start: You've began work on the story's task (click 'start button')/n
	- Deliver: You've completed work on the story's task and it is ready to be delivered or presented to the customer (click 'deliver' button)/n
	- Accepted / Rejected: The story has been accepted or rejected by the customer (click 'accepted' or 'rejected' button)/n
  - Completed: If the story has been accepted by the customer, mark it as completed. Congratulations! (click 'completed' button)/n
  - Restart: If a story has been rejected by its customer, it may require further work and you can choose to restart the story (click 'restart' button)", 
  tracker_id: tracker3.id, ord: 1, points: 3, story_type: "feature", state: "deliver")
story36 = tracker3.stories.new(title: "Step 14: Your Completed Stories",
	description: "Where to put your completed stories? Let's pull out the Done Tracker to hold them. Go ahead and click 'Done' in the sidebar and drag and drop me into the Done Tracker.", 
	tracker_id: tracker3.id, ord: 2, points: 3, story_type: "feature", state: "completed")

# done: what the done is used for
story38 = tracker4.stories.new(title: "Step 15: Completed Stories Go Here!",
	description: "Store all your completed stories here in the Done Tracker", tracker_id: tracker4.id,
	ord: 0, points: 3, story_type: "release", state: "completed")

story30.save()
story31.save()
story32.save()
story33.save()
story34.save()
story35.save()
story36.save()
story37.save()
story38.save()

# Gettin' Real: Stories
story1 = tracker5.stories.new(title: 'hey homie', description: 'sup?', tracker_id: tracker5.id, ord: 0,
										points: 1, story_type: "feature")

story1.save()

# Gettin' Tired: Stories
story2 = tracker9.stories.new(title: "Sleep", description: "Get More Sleep", tracker_id: tracker9.id,
										 ord: 0, points: 0, story_type: "chore")
story3 = tracker10.stories.new(title: "Naps", description: "Take More Naps", tracker_id: tracker10.id,
										 ord: 0, points: 2, story_type: "feature")
story4 = tracker11.stories.new(title: "Coffee", description: "Drink More Coffee", tracker_id: tracker11.id,
										 ord: 0, points: 2, story_type: "feature")
story5 = tracker12.stories.new(title: "Soda", description: "Caffinated", tracker_id: tracker12.id,
										 ord: 0, points: 2, story_type: "feature")
story2.save()
story3.save()
story4.save()
story5.save()

# Gettin' Hungry: Story
story6 = tracker13.stories.new(title: "Ice Cream", description: "chocolate and/or vanilla", tracker_id: tracker13.id,
										 ord: 0, points: 0, story_type: "feature")
story7 = tracker14.stories.new(title: "Cookies", description: "oatmeal raisin", tracker_id: tracker14.id,
										 ord: 0, points: 2, story_type: "feature")
story8 = tracker15.stories.new(title: "Sandwich", description: "Turkey", tracker_id: tracker15.id,
										 ord: 0, points: 2, story_type: "feature")
story9 = tracker16.stories.new(title: "Burger", description: "Quarter-Pounder", tracker_id: tracker16.id,
										 ord: 0, points: 2, story_type: "feature")
story10 = tracker13.stories.new(title: "Fries", description: "Garlic", tracker_id: tracker13.id,
										 ord: 0, points: 2, story_type: "feature")
story11 = tracker14.stories.new(title: "Pizza", description: "Pepperoni", tracker_id: tracker14.id,
										 ord: 0, points: 2, story_type: "feature")
story13 = tracker15.stories.new(title: "Milkshakes", description: "Oreo", tracker_id: tracker15.id,
										 ord: 0, points: 2, story_type: "feature")
story14 = tracker16.stories.new(title: "Chips", description: "BBQ", tracker_id: tracker16.id,
										 ord: 0, points: 2, story_type: "feature")

story6.save()
story7.save()
story8.save()
story9.save()
story10.save()
story11.save()
story13.save()
story14.save()

# App Academy Final Project: story
story15 = tracker17.stories.new(title: "Auth", description: "Users/Sessions", tracker_id: tracker17.id,
										 ord: 0, points: 0, story_type: "chore")
story16 = tracker18.stories.new(title: "Projects", description: "A Project holds all its project data", tracker_id: tracker18.id,
										 ord: 0, points: 2, story_type: "feature")
story17 = tracker19.stories.new(title: "Trackers", description: "A Tracker has many Projects / Tracker has many Stories", tracker_id: tracker19.id,
										 ord: 0, points: 2, story_type: "feature")
story18 = tracker20.stories.new(title: "Stories", description: "A Story represents an individual task", tracker_id: tracker20.id,
										 ord: 0, points: 2, story_type: "feature")
story19 = tracker17.stories.new(title: "Drag/Drop/Sortable", description: "Drag, drop, and sort Stories", tracker_id: tracker17.id,
										 ord: 0, points: 3, story_type: "feature")
story20 = tracker18.stories.new(title: "Additional Stories", description: "Add in Points/Feature attributes to Stories ", tracker_id: tracker18.id,
										 ord: 0, points: 2, story_type: "chore")
story21 = tracker19.stories.new(title: "Group Stories", description: "Group Stories into Weeks", tracker_id: tracker19.id,
										 ord: 0, points: 3, story_type: "feature")
story22 = tracker20.stories.new(title: "CSS Wonderfulness", description: "Improve styling", tracker_id: tracker20.id,
										 ord: 0, points: 2, story_type: "chore")

story15.save()
story16.save()
story17.save()
story18.save()
story19.save()
story20.save()
story21.save()
story22.save()

