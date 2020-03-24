class Event < ApplicationRecord
  has_many :customerevents, class_name: 'CustomerEvent'
  has_many :customers, through: :customerevents

  # has_many :customer_events, :class_name => 'CustomerEvents'
  # has_many :customers, :through => :customer_events
end
