Rails.application.routes.draw do

  get 'sessions/new'
  get 'users/new'
  root 'sessions#new'
  get  '/help', to: 'static#help'
  get  '/events', to: 'events#index'
  get  '/events/new', to: 'events#new'
  post '/events/new', to: 'events#create'
  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
 
  resources :events
  resources :admins
  resources :customers
  resources :users
  
end
