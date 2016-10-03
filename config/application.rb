require File.expand_path('../boot', __FILE__)

require 'rails'
require "active_model/railtie"
require 'active_job/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'
require 'sprockets/railtie'

require 'csv'
require 'pry-rails'

require_relative '../lib/crawler'
require_relative '../lib/notifier'

Bundler.require(*Rails.groups)

module HDCrawler
  class Application < Rails::Application
  end
end
