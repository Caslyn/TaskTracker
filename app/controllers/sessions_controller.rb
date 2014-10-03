class SessionsController < ApplicationController
	before_action :redirect_home, only: [:new, :create]

	def new
		@user = User.new
		render :new
	end

	def create
		if params[:user][:guest]
			@user = User.find_by_credentials("guest@mail.com", "password")
		else
			@user = User.find_by_credentials(params[:user][:email],
																		 params[:user][:password])
		end
		if @user 
			sign_in_user!(@user)
			redirect_to root_url
		else
			flash.now[:errors] = ["Invalid email and/or password"]
			render :new
		end
	end

	def destroy
		sign_out!
		redirect_to root_url
	end

end
