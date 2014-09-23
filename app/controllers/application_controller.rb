class ApplicationController < ActionController::Base
  helper_method :current_user, :signed_in?
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
  	return nil unless session[:session_token]
  	@current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
  	!current_user.nil?
  end

  def sign_in_user!(user)
  	user.reset_session_token!
  	session[:session_token] = user.session_token
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_signed_in
  	redirect_to root_url unless signed_in?
  end

end
