Rails.application.routes.draw do
  resources :forms
  root 'dentist#dentist'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
