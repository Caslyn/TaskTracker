json.extract! @project, :id, :title, :description, :user_id, :created_at, :updated_at

json.members @project.members do |member|
	json.id member.id
	json.email member.email
	json.name member.name
end

json.trackers @project.trackers do |tracker|
	json.extract! tracker, :id, :title, :project_id
end

