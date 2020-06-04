class Event < ApplicationRecord
  has_one_attached :image
  has_many :customerevents, class_name: 'CustomerEvent', dependent: :delete_all
  has_many :customers, through: :customerevents

  default_scope { order("datetime DESC") }
  scope :upcoming, -> {where("datetime >= ?",DateTime.now)}
  scope :previous, -> {where("datetime < ?",DateTime.now)}

  def date_formatted
    self.datetime.strftime("%d/%m/%Y")
  end

  def time_formatted
    self.datetime.strftime("%l:%M %P")
  end

  def available_tickets
    if self.customers != nil
      self.tickets.to_i - self.customers.count
    end
  end

  def customer_count
    if self.customers == nil || self.customers == 0 
      "No customers are going to this event yet"
    else
      self.customers.count
    end
  end
end
