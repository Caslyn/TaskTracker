class Story < ActiveRecord::Base
	validates :points, numericality: { greater_than_or_equal_to: 0,
						less_than_or_equal_to: 3 }

	belongs_to :tracker
	has_one :project, through: :tracker

	default_scope { order (:ord) }
end
