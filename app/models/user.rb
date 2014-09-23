class User < ActiveRecord::Base
	validates :email, :session_token, presence: true
	validates :password, length: { minimum: 5, allow_nil: true }
	validates :email, uniqueness: true

	# has_many :projects

	attr_reader :password
	after_initialize :ensure_session_token

	def gravatar_url
		"http://www.gravatar.com/avatar/#{ Digest::MD5.hexdigest(email) }"
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def self.find_by_credentials(email, password)
		user = User.find_by_email(email)
		return nil if user.nil?
		user.is_password?(password) ? user : nil
	end

	def self.generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

	def reset_token!
		self.session_token = self.class.generate_session_token
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

end
