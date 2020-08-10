# Rewards Tracker

## Table of Content
- [Project Demo](#Project-Demo)
- [Application MVP](#Application-MVP)
- [Project Scope](#Project-Scope)
- [Dependencies](#Dependencies)
- [User Stories](#User-Stories)

## Project Demo 
<Link here>

## Application MVP
- A working full-stack application, built by collaborating with 2 or more members, using the MERN stack: Node.js, Mongoose, Express and React.
- Build based on the **MVC** file structure: Models, Views, Controllers
- Include all **RESTful routes** and a full **CRUD** application.
- Deployed online via **Heroku**

## Project Scope
- User will be able to authenticate via Google AUTH or Passport Local Strat
- User will be able to view books sortedby categories
- User will be able to give a review to any desired product
- To locate User's preference with a search function
- User will be able to change password / account details
- A shopping cart function where user will be able to edit the quantity, and as well a dummy checkout with no payment API

## Dependencies
#### 1. Material UI - CSS framework
#### 2. Axios - to make API calls to backend
#### 3. MomentJS - Wrapper to handle Date object
#### 4. react-google-login - To handle google authentication in client
#### 5. react-loading-screen - Display loading screen while DOM is rendering
#### 6. react-rating-stars-component - A simple star rating component for your React projects
#### 7. react-router-dom -  DOM bindings for React Router
#### 8. PassportJS - To handle authenticate requests
#### 9. Bcrypt - To hash and store passwords in database
#### 10. Mongoose - Database for application
#### 11. Cors - Providing a Connect/Express middleware that can be used to enable CORS with various options.
#### 12. Mongoose Paginate - Handle Paginations when retriving data from DB to client
#### 13. FuseJs - a lightweight JavaScript search library that supports fuzzy search

## User Stories
# US.1
**As a** user,
**I want** to have a pleasant looking homepage, with books sorted out by categories for easier reference
### Acceptance Criteria
1. A NavBar with
- search function
- login / logout CTA
- homepage redirection CTA
- list of books categories
- A shopping cart overview which indicates the total amount of items in the cart, the quantity
2. In the main body, to displayed the breif description of books, sorted out by categories e.g. Bestselling Books, Reccomended Books and a CTA to add to cart
### Dependencies
- FuseJS for the search function
- Axios for fetching the books data from backend, Shopping cart data and for handling authentication request
- react rating stars for the rating component

# US.2
**As a** user,
**I want** to be able to sign up / login in
### Acceptance Criteria
- when click on sign up, user will be able to navigate to register page
- when user is at the registration page, user will be able to onboard successfully
- When click on login, user will be navigate to login page
- When user is at login page, user will be able to login successfuly
- In login page, user will be able to either onboard via Google or a manual sign up process
### Dependencies
- PassportJS - authentication layer
- react-google-login - to handle google auth request
- Axios - for making HTTP request

# US.3
**As a** user,
**I want** to be able to have a navigate to the books single view page
### Acceptance Criteria
- to display all the full informations of the product
- a add to cart CTA
- to view customer review
- when user is logged in, user will be able to add reviews to the book
### Dependencies
- Axios - for making HTTP request to server to ensure user is authenticated and for fetching the books data
- react rating stars for the rating component

# US.4
**As a** user,
**I want** to be able to view and edit my personal details
### Acceptance Criteria
- User will be able to view thier personal details is only user is authenticated by either passport local or google
- USer will only be able to edit their personal details only if user is authentically locally
- Change password is only viewable by user who is authenticated via passport local
- Order history is only viewable by user who is authenticated by either passport local or google
### Dependencies
- Axios - for making HTTP request to server to ensure user is authenticated and for fetching the books data
- react rating stars for the rating component

# US.5
**As a** user,
**I want** have access to the Cart view page
### Acceptance Criteria
- User will be able to checkout if the cart is not empty
- Remove from Cart CTA if the cart is not empty
- Breif description of the books product
### Dependencies
- Axios - for making HTTP request to server to ensure user is authenticated and for fetching the books data
- react rating stars for the rating component
