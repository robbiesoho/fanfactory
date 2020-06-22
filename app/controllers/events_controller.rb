class EventsController < ApplicationController
  before_action :logged_in_user, except: [:get_upcoming_events, :get_past_events]

  def get_upcoming_events
    @events = Event.all.upcoming.map { |e| e.attributes.merge(image: rails_blob_path(e.image), date: e.date_formatted, time: e.time_formatted)}
    render json: { data: @events }

  end

  def get_past_events
    @events = Event.all.previous.map { |e| e.attributes.merge(image: rails_blob_path(e.image), date: e.date_formatted, time: e.time_formatted)}
    render json: { data: @events }

  end

  def index
    @events = Event.all
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
    # byebug
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

  def edit
    @event = Event.find(params[:id])
  end

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

  def destroy
    Event.find(params[:id]).destroy
    flash[:success] = "Event deleted"
    redirect_to events_url
  end

  private

  def event_params
    params.require(:event).permit(:image, :name, :datetime, :time, :location, :tickets, :price, customer_ids:[])
  end
 
end
