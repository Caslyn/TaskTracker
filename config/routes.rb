TaskTracker::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users, except: [:index, :edit, :update]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json} do 
  	resources :projects
  	resources :stories
  end
end
