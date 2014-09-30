module Api
	class StoriesController < ApplicationController
		# before_action :require_project_member!

		def create
			@story = current_tracker.stories.new(story_params)

			if @story.save
				render json: @story
			else
				flash.now[:errors] = @story.errors.full_messages
				render json: @story.errors.full_messages, status: :unprocessable_entity
			end
		end

		def update
			@story = Story.find(params[:id]);

			if @story.update_attributes(story_params)
				render json: @story
			else				
				flash.now[:errors] = @story.errors.full_messages
				render json: @story.errors.full_messages, status: :unprocessable_entity
			end
		end

		def show
			@story = Story.find(params[:id])
			render :show
		end

		def destroy
			@story = Story.find(params[:id])
			@tracker = current_tracker
			@story.destroy
			render json: @tracker
		end


		private

		def current_tracker
			if params[:id]
				@story = Story.find(params[:id])
				@tracker = @story.tracker
			elsif params[:story]
				@tracker = Tracker.find(params[:story][:tracker_id])
			end
		end

		def current_project
			self.project || current_tracker.project 
		end

		def story_params
			params.require(:story).permit(:title, :description, :tracker_id, :ord)
		end
	end
end
