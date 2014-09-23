TaskTracker::Application.routes.draw do
  resources :users, except: :index
  resource :session, only: [:new, :create, :destroy]

  root to: "users#show"
end
