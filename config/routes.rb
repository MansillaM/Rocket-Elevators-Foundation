Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql#execute"
  end
  post "/graphql", to: "graphql#execute"
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'polly/index', to: "polly#convert"
  get 'maps/index'
  resources :quotes
end
Rails.application.routes.draw do
  get 'maps/index'
  resources :quotes
  resources :interventions, :only => [:new, :create]
  resources :employees
  resources :polly
  devise_for :users
  root 'home#index'
  get 'home/backOffice'
  get 'home/quote'
  get 'home/commercial'
  get 'home/residential'
  get 'home/chart'
  get 'maps' => 'maps#index'
  post '/create_lead' => 'home#create_lead'
  get 'dropbox/auth' => 'dropbox#auth'
  get 'dropboxauth_callback/' => 'dropbox#auth_callback'
  get 'interventions/customer_buildings' => "interventions#customer_buildings"
  get 'interventions/building_batteries' => "interventions#building_batteries"
  get 'interventions/batterie_columns' => "interventions#batterie_columns"
  get 'interventions/column_elevators' => "interventions#column_elevators"
  # get 'interventions/elevator_select' => 'interventions#elevator_select'
  get 'interventions/company_employees' => 'interventions#company_employees'
  #get 'interventions/new' => 'interventions#new'
end
