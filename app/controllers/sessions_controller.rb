class SessionsController < ApplicationController
	before_action :redirect_home, only: [:new, :create]

	def new
		@user = User.new
		render :new
	end

	def create
		@user = User.find_by_credentials(params[:user][:email],
																		 params[:user][:password])

		if @user 
			sign_in_user!(@user)
			redirect_to ""
		else
			flash.now[:errors] = ["Invalid email and/or password"]
			render :new
		end
	end

	def destroy
		sign_out!
		redirect_to new_session_url
	end

end
