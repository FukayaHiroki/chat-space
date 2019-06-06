Rails.application.routes.draw do
  devise_for :users
  get 'chat-space' => 'messages#index'
  root 'messages#index'
  resources :users, only: [:edit, :update]
end