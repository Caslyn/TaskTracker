class Story < ActiveRecord::Base
	enum state: [:start, :finish, :deliver, :pending, :accept, :reject, :restart, :complete]

	belongs_to :tracker
	has_one :project, through: :tracker

	default_scope { order (:ord) }
end
