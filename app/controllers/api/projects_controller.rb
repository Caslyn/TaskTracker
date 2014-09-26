module Api
	class ProjectsController < ApplicationController

		def new
		end

		def create
			@project = current_user.projects.new(project_params)

			if @project.save
				render json: @project
			else
				render json: @project.errors.full_messages, status: :unprocessable_entity
			end
		end

		def index
			if current_user 
				@projects = current_user.projects
				render json: @projects
			else
				redirect_to new_session_url
			end
		end

		def show
			@project = Project.includes(:members).find(params[:id])

			if @project.is_member?(current_user)
				render :show
			else
				render json: ["You are not a member of this project"]
			end
		end

		def destroy
			@project = current_user.projects.find(params[:id]);
			@project.try(:destroy)
			render json: {}
		end

		private

		def project_params
			params.require(:project).permit(:title, :description)
		end
	end	
end