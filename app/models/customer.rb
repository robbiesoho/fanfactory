class Customer < ApplicationRecord
  has_many :customerevents, class_name: 'CustomerEvent'
  has_many :events, through: :customerevents

end
