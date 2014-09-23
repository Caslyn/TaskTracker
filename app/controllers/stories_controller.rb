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

		private

		def current_project
			if params[:id]
				@story = Story.find(params[:id])
				@project = @story.project
			elsif params[:project]
				@project = Project.find(params[:story][:project_id])
			end	
		end

		def story_params
			params.require(:story).permit(:title, :project_id, :description,
				:tracker, :ord)
		end

	end
end