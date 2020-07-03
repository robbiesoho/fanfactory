class UsersController < ApplicationController
  before_action :logged_in_user

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
      flash[:success] = "Admin user created!"
      redirect_to @user
    else
      render 'new'
    end
  end

  def index
    @user = User.all
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:success] = "Admin user updated"
      redirect_to @user
    else
      #change this
      render 'addcustomer'
    end
  end

  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "Admin deleted"
    redirect_to users_url
  end

 private

  def user_params
    params.require(:user).permit(:name, :email, :password,
                                  :password_confirmation)
  end
end