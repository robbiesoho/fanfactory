Rails.application.routes.draw do

  root 'static#static'
  get  '/help', to: 'static#help'
  get  '/events', to: 'events#index'
  get  '/events/new', to: 'events#new'
 
  resources :events
  resources :admins
  resources :customers
  
end
