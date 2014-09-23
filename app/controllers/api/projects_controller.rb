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
			@projects = current_user.projects
			render json: @projects
		end

		def show
			@project = Project.find(params[:id])
			render :show
		end

		def destroy
			@project = current_user.projects.find(params[:id]);
			@project.try(:destroy)
			render json: {}
		end

		private

		def project_params
			params.require(:project).permit(:title)
		end
	end	
end