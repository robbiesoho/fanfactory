# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name:"Test admin", 
            email:"test@test.com", 
            password: "password",
            password_confirmation: "password")

locations = %w[NewYork Guangzhou RiodeJaneiro Tianjin Manila
  Lagos Kolkata Istanbul BuenosAires Chongqing
  Karachi Osaka Beijing Mumbai Dhaka
  Cairo MexicoCity SaoPaulo Shanghai Delhi]

mexicanNames = %w[Jose Luis Juan Miguel Angel Fransicso Antonio Alejandro Lupita Diego Roberto Maria Elena Rosa Rosamaria Gabriela Margarita Veronica Josefina]


8.times do |n| 
  cFirst = mexicanNames[rand(0..mexicanNames.length)]
  cMiddle = mexicanNames[rand(0..mexicanNames.length)]
  cLast = mexicanNames[rand(0..mexicanNames.length)]
  name = "#{cFirst} #{cMiddle} #{cLast}"
  phone = "00-000-0000"
  email = "#{cFirst}#{cLast}#{n+1}@email.com"
  Customer.create!(name:  name,
                  email: email,
                  phone: phone)
end


10.times do |n|  
  eloc = locations[rand(0..locations.length)]
  name = "#{eloc} Event #{n+1}"
  datetime = DateTime.now + (rand(1..20)-9).day + (rand(1..20)-9).month
  tickets = 50
  price = 400.00
  Event.create!(name:  name,
              location: eloc,
              datetime: datetime,
              tickets: tickets,
              price: price)
end


# customers = Customer.all

# events = Event.all
# events.each do |event|
#   addcus = []
#   5.times do
#     addcus.append(customers[rand(1..7)])
#   end
#   event.customers = addcus
#   event.save
# end



