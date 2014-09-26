module Api
	class StoriesController < ApplicationController

		def new
		end

		def create
			@story = current_project.stories.new(story_params)

			if @story.save
				render json: @story
			else
				render json: @story.errors.full_messages, status: :unprocessable_entity
			end
		end

		def show
			@story = Story.find(params[:id])
			@project = @story.project_id
			redirect_to api_project_url(@project)
		end

		def destroy
			@story = Story.find(params[:id])
			@story.try(:destroy)
			render json: {}
		end

		private

		def current_project
			if params[:id]
				@story = Story.find(params[:id])
				@project = @story.project
			elsif params[:story][:project_id]
				@project = Project.find(params[:story][:project_id])
			end	
		end

		def story_params
			params.require(:story).permit(:title, :project_id, :description,
				:tracker, :ord)
		end

	end
end