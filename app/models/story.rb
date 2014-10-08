class Story < ActiveRecord::Base
	enum state: [:start, :finish, :deliver, :pending, :accepted, :rejected, :restart, :completed]

	belongs_to :tracker
	has_one :project, through: :tracker

	default_scope { order (:ord) }
end
