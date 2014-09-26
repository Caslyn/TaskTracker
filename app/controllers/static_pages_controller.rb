class StaticPagesController < ApplicationController
	def root
		if signed_in?
		 render :root
		else
		 render :welcome
		end
	end
end
