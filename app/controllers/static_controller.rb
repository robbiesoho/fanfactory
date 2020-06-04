class StaticController < ApplicationController
  def index
  end
  def show
    render params[:page]
  end

  def help
  end
end
