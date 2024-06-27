import 'bootstrap'
import './stylesheets/application.scss'
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "controllers"

// Add jQuery
import $ from 'jquery';
global.$ = jQuery;
