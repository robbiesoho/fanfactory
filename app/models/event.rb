class Event < ApplicationRecord
  has_many :customerevents, class_name: 'CustomerEvent'
  has_many :customers, through: :customerevents

  default_scope { order("datetime DESC") }
  scope :upcoming, -> {where("datetime >= ?",DateTime.now)}
  scope :previous, -> {where("datetime < ?",DateTime.now)}

 
end
