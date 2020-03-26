class Event < ApplicationRecord
  has_many :customerevents, class_name: 'CustomerEvent'
  has_many :customers, through: :customerevents

 
end
