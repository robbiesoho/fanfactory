class EventsController < ApplicationController
  def index
    @event = Event.all
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

  private

  def event_params
    params.require(:event).permit(:name, :datetime)
  end
 
end
