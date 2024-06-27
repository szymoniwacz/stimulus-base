import '@hotwired/turbo-rails'
import 'controllers'
import 'bootstrap'
import { Turbo } from "@hotwired/turbo-rails"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Rails from "@rails/ujs"
import "bootstrap"

Rails.start()

const application = Application.start()
const context = require.context("controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

console.log("Rails UJS has started")

