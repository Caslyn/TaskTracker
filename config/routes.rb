Rails.application.routes.draw do
	root to: 'static_pages#root'

	resources :users, except: [:index, :edit, :update]
  resource :session, only: [:new, :create, :destroy]

    namespace :api, defaults: { format: :json} do 
  	resources :projects
  	resources :trackers, only: [:create, :update, :destroy]
  	resources :stories, only: [:create, :show, :update, :destroy] 
  end
end
