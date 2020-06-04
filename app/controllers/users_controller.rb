class UsersController < ApplicationController
  # before_action :logged_in_user

  def show
    @user = User.find(params[:id])
    @upcoming_events = Event.all.upcoming
    @previous_events = Event.all.previous
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      flash[:success] = "Admin user created!"
      redirect_to @user
    else
      render 'new'
    end
  end

  def index
    @user = User.all
  end

  def destroy
    #need to somehow implement this
    User.find(params[:id]).destroy
    flash[:success] = "Admin deleted"
    redirect_to users_url
  end


  # Confirms the correct user.
  def correct_user
    @user = User.find(params[:id])
    redirect_to(root_url) unless @user == current_user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password,
                                  :password_confirmation)
  end
end