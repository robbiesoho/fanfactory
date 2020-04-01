Rails.application.routes.draw do

  get 'users/new'
  root 'static#static'
  get  '/help', to: 'static#help'
  get  '/events', to: 'events#index'
  get  '/events/new', to: 'events#new'
  get  '/signup',  to: 'users#new'
 
  resources :events
  resources :admins
  resources :customers
  
end
