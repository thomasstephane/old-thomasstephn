Thomasstephn::Application.routes.draw do
  get 'portfolio' => 'homepage#portfolio'
  root :to => 'homepage#show'
end
