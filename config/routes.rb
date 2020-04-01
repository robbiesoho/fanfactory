Rails.application.routes.draw do

  get 'users/new'
  root 'static#static'
  get  '/help', to: 'static#help'
  get  '/events', to: 'events#index'
  get  '/events/new', to: 'events#new'
  post '/events/new', to: 'events#create'
  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'
 
  resources :events
  resources :admins
  resources :customers
  resources :users
  
end
