class Project < ActiveRecord::Base

	validates :title, :user_id, presence: true

	belongs_to :user
	has_many :trackers, dependent: :destroy
	has_many :project_memberships, dependent: :destroy
	has_many :members, through: :project_memberships, source: :user
	has_many :stories, through: :trackers

	def is_member?(user) 
		return true if user.id == self.user_id
		project_memberships.where(user_id: user.id).exists?
	end

end
