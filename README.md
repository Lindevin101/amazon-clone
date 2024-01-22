# Amazon Clone Project

This project is a clone of the Amazon website, featuring a full-stack implementation with React, Firebase, and Stripe for payment processing. It demonstrates key functionalities such as user authentication, product listings, a shopping basket, and real-time order processing.

## Deploy App
Live Link: https://clone-11e7e.web.app/
## Features

- User Authentication
- Product Listings
- Shopping Basket
- Checkout Process
- Payment Integration with Stripe
- Order History

## Technologies Used

- React.js
- Firebase (Firestore for database, Firebase Authentication)
- Stripe API for payment processing
- Node.js and Express.js (for Stripe backend)
- React Context API (for state management)

## Setup and Installation

To get this project up and running, you will need to:

1. Clone the repository:
git clone (https://github.com/Lindevin101/amazon-clone)

2. Install dependencies:
npm install

3. Set up Firebase:
- Create a Firebase project in the Firebase console.
- Enable Firestore and Firebase Authentication.
- Add your Firebase project's configuration to `firebase.js`.

4. Set up Stripe:
- Sign up for a Stripe account and get the API keys.
- Replace the Stripe publishable key in the client code and the secret key in the server code.

5. Run the project:

## Usage

After running `npm start`, the project will be running on `localhost:3000` by default. You can:

- Browse products
- <img width="1440" alt="Screenshot 2024-01-22 at 4 53 56 PM" src="https://github.com/Lindevin101/amazon-clone/assets/145355507/17ba5aa2-00fa-4ecf-9ea8-70653fa4ef2a">

- Add products to the basket
- Sign in / Sign up
- Proceed to checkout
- Make a payment (test mode)




