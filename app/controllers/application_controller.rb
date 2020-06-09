class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper
#   before_action :require_login
 
#   private
 
#   def require_login
#     unless logged_in?
#       flash[:error] = "You must be logged in to access this section"
#       # redirect_to new_login_url # halts request cycle
#     end
#   end

# Confirms a logged-in user.
def logged_in_user
  unless logged_in?
    flash[:danger] = "Please log in."
    redirect_to login_url
  end
end
end
