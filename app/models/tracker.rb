class Tracker < ActiveRecord::Base
	validates :title, :project, presence: true

	belongs_to :project
	# has_many :stories
end
