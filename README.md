# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


                             Food Booking Application 


AIM
The aim of this project was to make a fully-fledged food booking web application using MERN Stack.

TECH/STACK Used
 
	Node.js
	Bootstrap
	Mongo DB
	JavaScript
	Express
	React.js
	Mongoose
	JWT
	Bcrypt


                                                           FRONTEND	 
So, in this project, first I made the frontend part not all of it at first but yeah most of the part like navbar, carousel, main content's data is coming from the mongo DB database and last part was footer.

In frontend there are main two folders - public and src, Within the src there are two folders - Components and Screens

Components - this contains the react components which can be used more than once with different parameters but looks are same. These are - 
   - Cards.js
   - Footer.js
   - Navbar.js
   - ContextReducer.js (this is used for managing state with the help of useContext and useReducer)

Screens – This folder contain the react code parts which turns to be a screen of the Web App and it contains – 
-	Cart.js (This is a pop-up window which will show the current items in the cart)
-	Login.js (Login page)
-	Home.js (Home page)
-	MyOrder.js (There is a button to show all orders of a user and MyOrder is that page)
-	SignUp.js (Sign Up page)

                                                         BACKEND

So, the backend contains all the food Item data and when needed all the data is being fetched from Mongo DB Server.

First, we set up the server using mongo DB Atlas and linked it to with our project using mongoose.

Backend folder contains Two extra folders and some files which are – 

-	Index.js (This is the main file and there are routes added to this file which can be access by the user)
-	Db.js (This file is responsible for fetching the data from server and assigning it to global variable so that it can be used anywhere in the project)
-	Models (This is the folder which contains the schema which we need) 
-	    - Orders.js (This is a Schema for storing order associated with particular email)
-	    -User.js (This is a Schema used for storing user data)
-	Routes (This is the folder which contain different files which has different routes declaration)
-	    - CreateUser.js (This file contains the routes for creating a user and logging a user)
-	    - DisplayData.js (This file contains the route for sending the needed data to display)
-	    - OrderData.js (This file contains two routes, one is for showing the overall order of a user and other is for updating the user’s order data on server). 

