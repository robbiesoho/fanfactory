class StaticController < ApplicationController
  def show
    render params[:page]
  end

  def help
  end
end
