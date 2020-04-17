class Customer < ApplicationRecord
  has_many :customerevents, class_name: 'CustomerEvent',  dependent: :delete_all
  has_many :events, through: :customerevents

end
