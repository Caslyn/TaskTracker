class ApplicationController < ActionController::Base
  helper_method :current_user
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
  	session_token = session[:session_token]
  	User.find_by_session_token[session_token]
  end

  def logged_in?
  	!current_user.nil?
  end

  def login_user!(user)
  	uesr.reset_session_token!
  	session[:session_token] = user.session_token
  end

  def require_login
  	redirect_to new_session_url unless current_user
  end
end
