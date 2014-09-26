class Story < ActiveRecord::Base
	belongs_to :tracker
	has_one :project, through: :tracker

	default_scope { order (:ord) }
end
