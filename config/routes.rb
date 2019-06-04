Rails.application.routes.draw do
  get 'chat-space' => 'messages#index'
end
