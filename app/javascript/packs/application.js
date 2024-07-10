import 'bootstrap'
// import '../stylesheets/application.scss'
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"
import "../controllers"

// Add jQuery
import $ from 'jquery';
global.$ = jQuery;

const application = Application.start()
const context = require.context("../controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

console.log("Rails UJS has started")
