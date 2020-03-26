Rails.application.routes.draw do

  root 'static#static'
  get  '/help', to: 'static#help'
  get  '/event', to: 'events#index'
  get  '/event/new', to: 'events#new'
 
  resources :events
  resources :admins
  resources :customers
  
end
