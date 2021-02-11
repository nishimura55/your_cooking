Rails.application.routes.draw do
  resources :foods, only: [:index, :create, :destroy]
  resources :recipes, only: [:search]
end
