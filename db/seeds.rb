

User.create!(name:"Test admin", 
            email:"test@test.com", 
            password: "test",
            password_confirmation: "test")

locations = %w[NewYork Guangzhou RiodeJaneiro Tianjin Manila
  Lagos Kolkata Istanbul BuenosAires Chongqing
  Karachi Osaka Beijing Mumbai Dhaka
  Cairo MexicoCity SaoPaulo Shanghai Delhi]

names = %w[Jose Luis Juan Miguel Angel Fransicso Antonio Alejandro Lupita Diego Roberto Maria Elena Rosa Rosamaria Gabriela Margarita Veronica Josefina]


8.times do |n| 
  cFirst = names[rand(0..names.length)]
  cMiddle = names[rand(0..names.length)]
  cLast = names[rand(0..names.length)]
  name = "#{cFirst} #{cMiddle} #{cLast}"
  phone = "00-000-0000"
  email = "#{cFirst}#{cLast}#{n+1}@email.com"
  Customer.create!(name:  name,
                  email: email,
                  phone: phone)
end


