class Project < ActiveRecord::Base
	validates :title, :user_id, presence: true

	belongs_to :user

	has_many(
		:stories,
		class_name: "Story",
		primary_key: :id,
		foreign_key: :project_id
	)
end
