Fan Factory

This is a web app for an events management company in Mexico. There are two UIs. One is for customers of the buisness and the other is for the admistration. The admin UI is built with Ruby on Rails and the customer UI is built with React. Admins manage customers and events, upload events information and images and assign customers to events and vise versa. The backend was made with ROR and PostgreSQL and deployed on heroku.

I made this before I learned about mobile first development. Because of this, this app isn't good for mobile devises.

notable gems:
* rails (6.0.2.2)
* activestorage (6.0.2.2)
* figaro (1.2.0)
* pg (1.2.3)
* react-rails (2.6.1)
* webpacker (4.2.2)
* active_model_serializers (0.10.10)
* active_storage_validations (0.8.9)
 
instructions:
  * clone repo
  * cd into repo
  * run bundle install
  * run yarn install
  * run rails db:migrate
  * run rails db:seed
  
known bugs:
  * No serverside rendering on React front end.
  * Bottom navbar items are skewed to the left side.
  * Both navbars break at resolutions < 780px
  * Logo isnt proportioned at resolutions < 780px
