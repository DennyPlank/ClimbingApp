Rails.application.routes.draw do
 
 
  namespace :api do
   resources :states do
    resources :routes
    end
  end
end
