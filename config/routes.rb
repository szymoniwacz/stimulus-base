# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  post '/graphql', to: 'graphql#execute'
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?

  devise_for :users

  get 'up' => 'rails/health#show', as: :rails_health_check
end
