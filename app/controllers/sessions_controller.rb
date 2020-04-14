class SessionsController < ApplicationController
  # before_action :logged_in_user, except: [:new]

  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      redirect_to user
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end

  # Returns true if the given user is the current user.
  def current_user?(user)
    user == current_user
  end
end
