# ASSIGNMENT 9

## Name: Rushikesh Karwankar

## NUID: 002776313

## Course Code: INFO 6150

### Frontend - React

Folder Structure consists of 4 folders and 2 main files:

1. Components folder

- Contains 7 sub-directories(Card, AboutUs, Contact, Home, Jobs, Login, & NavBar)
- Each of which contains their respective component files and stylesheets

2. Constants folder

- Used for storing all data on job positions in an array
- Used for mapping all data onto the job cards in the Jobs page

  3)Context folder

- For authentication and to generate and store token in cookies for a perticular session.

4. utilities folder

- For cookies operation and retrival of cookies information.

5. App.js & Index.js

- Index.js is the main sourcefile connected to all the other pages and components
- App.js is used for implementing a react router to navigate among the pages

* Implemented a POST method in the login page to compare and find users based on given login credentials
* Used react map() feature to map out all card components based on data available in data.js

### Backend - Node

Folder Structure consists of 1 folder and 2 main server file

1. Middleware - auth.js

- Created a Login controller to check if email and password exits in DB
- used for autentication and validation with JWT token while login in the user.

2. Model

- Created user.model.js to define schema and collections from which data needs to be controlled

3. main.js

- Created all the API's/Methods used to create, edit, view, delete and login.
- Storing the data after above operations in the MongoDB database.
- Used to connect all model, routes and controllers together.
