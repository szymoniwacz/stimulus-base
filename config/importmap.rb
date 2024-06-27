# frozen_string_literal: true

pin 'application', preload: true
pin '@hotwired/turbo-rails', to: 'https://ga.jspm.io/npm:@hotwired/turbo-rails@7.0.0/dist/turbo.esm.js'
pin '@hotwired/stimulus', to: 'https://ga.jspm.io/npm:@hotwired/stimulus@2.0.0/dist/stimulus.umd.js'
pin '@hotwired/stimulus-loading', to: 'https://ga.jspm.io/npm:@hotwired/stimulus-loading@2.0.0/dist/stimulus-loading.umd.js'
pin 'bootstrap', to: 'https://ga.jspm.io/npm:bootstrap@5.0.0/dist/js/bootstrap.esm.js'
pin '@popperjs/core', to: 'https://unpkg.com/@popperjs/core@2.9.2/dist/esm/index.js'
pin '@rails/ujs', to: 'https://ga.jspm.io/npm:@rails/ujs@7.0.0/lib/assets/compiled/rails-ujs.js'
pin_all_from 'app/javascript/controllers', under: 'controllers'
