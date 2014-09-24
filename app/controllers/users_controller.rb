class UsersController < ApplicationController

	def new
		@user = User.new
		render :new
	end

	def create
		@user = User.new(user_params)

		if @user.save
			sign_in_user!(@user)
			redirect_to root_url
		else
			flash.now[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def show
		@user = User.find(params[:id]);
		redirect_to root_url
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :name)
	end
end
