Rails.application.routes.draw do
  resources :foods, only: :index
end
