class Story < ActiveRecord::Base
	validates :title, :project_id, :tracker, presence: true
	enum tracker: [:done, :current, :backlog, :icebox]
	
	belongs_to :project

	default_scope { order(:ord) }
end
