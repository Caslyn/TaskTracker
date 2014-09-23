json.extract! @project, :id, :title, :user_id, :created_at,
:updated_at

json.stories @project.stories do |story|
	json.extract! story, :id, :title, :project_id, 
	:description, :tracker, :ord
end

