json.extract! @tracker, :id, :title, :project_id, :visible, :ord, :created_at, :updated_at

json.stories @tracker.stories do |story|
		json.extract! story, :id, :title, :description, :tracker_id, :ord, :points, :state, :story_type, :created_at, :updated_at
end