class Customer < ApplicationRecord
  has_many :customerevents, class_name: 'CustomerEvent'
  has_many :events, through: :customerevents

  # has_many :customer_events, :class_name => 'CustomerEvents'
  # has_many :events, :through => :customer_events
end
