class EventsController < ApplicationController
  before_action :logged_in_user

  def index
    @upcoming_events = Event.all.upcoming
    @previous_events = Event.all.previous
  end


  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      flash[:success] = "Event added!"
      redirect_to events_url
    else
      render 'new'
    end
  end

  def addcustomer
    @event = Event.find(params[:id])
    @customer = Customer.all
  end

  # def edit
  #   @user = User.find(params[:id])
  # end

  def update
    @event = Event.find(params[:id])
    # debugger
    if @event.update_attributes(event_params)
      flash[:success] = "Event updated"
      redirect_to @event
    else
      render 'addcustomer'
    end
  end



  private

  def event_params
    params.require(:event).permit(:name, :datetime, customer_ids:[])
  end
 
end
