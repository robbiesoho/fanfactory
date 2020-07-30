class Event < ApplicationRecord
  has_one_attached :image
  has_many :customerevents, class_name: 'CustomerEvent', dependent: :delete_all
  has_many :customers, through: :customerevents

  default_scope { order("datetime DESC") }
  scope :upcoming, -> {where("datetime >= ?", DateTime.now)}
  scope :previous, -> {where("datetime < ?", DateTime.now)}

  def date_formatted
    if self.datetime
      self.datetime.strftime("%d/%m/%Y")
    else
      self.datetime = DateTime.now.strftime("%d/%m/%Y")
    end
  end

  def time_formatted
    if self.time
      self.time.strftime("%l:%M %P")
    else
      self.time = Time.now.strftime("%l:%M %P")
    end
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
