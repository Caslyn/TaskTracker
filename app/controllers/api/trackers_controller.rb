module Api
	class TrackersController < ApplicationController
		before_action :require_project_member!

		def create
			@tracker = current_project.trackers.new(tracker_params)

			if @tracker.save
				render json: @tracker
			else
				render json: @tracker.full_messages, status: :unprocessable_entity
			end
		end

		def destroy
			@tracker = Tracker.find(params[:id])
			@tracker.destroy
			render json: {}
		end

		def update
			@tracker = current_project.trackers.find(params[:id])

			if @tracker.update_attributes(tracker_params)
				render json: @tracker
			else
				render json: @tracker.full_messages, status: :unprocessable_entity
			end
		end
		private

		def current_project
			if params[:id]
				@tracker = Tracker.find(params[:id])
				@project = @tracker.project
			elsif params[:tracker]
				@project = Tracker.find(params[:tracker][:project_id])
			end
		end

		def tracker_params
			params.require(:tracker).permit(:title, :project_id)
		end
	end
end