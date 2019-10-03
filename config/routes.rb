Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :instructors
    resources :events
    resources :programs 
    resources :abouts
    resources :contacts
    resources :walkincontacts
  end

end
