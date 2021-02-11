Rails.application.routes.draw do
  resources :foods, only: [:index, :create, :destroy] do
    get '/get_recipes', to: 'foods#get_recipes'
  end
  resources :recipes, only: [:search]
end
