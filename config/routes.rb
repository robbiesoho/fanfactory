Rails.application.routes.draw do

  get 'sessions/new'
  get 'users/new'
  root 'static#index'
  get  '/help', to: 'static#help'
  get  '/events', to: 'events#index'
  get  '/events/new', to: 'events#new'
  post '/events/new', to: 'events#create'
  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get 'users', to: 'users#index'

  get 'getevents', to: 'events#get_events'
  
  
  resources :admins
  resources :customers
  resources :users

  resources :events do
    get  'addcustomer', on: :member, as: 'add'
  end

  # namespace :v1, defaults: { format: 'json' } do
  #   get 'things', to: 'things#index'
  # end

  # get '*page', to: 'static#index', constraints: ->(req) do
  #   !req.xhr? && req.format.html?
  # end
  
  
end
