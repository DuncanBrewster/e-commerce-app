![e-commerce-app-photo](https://user-images.githubusercontent.com/87501964/152616519-81c360f6-5b36-4558-a14f-c099951d9d16.PNG)

# [e-commerce-app](https://duncan-e-commerce-app.netlify.app/)

An E-commerce app for a fictional clothing company. This project is currently hosted on [Netlify](https://duncan-e-commerce-app.netlify.app).

A full-stack E-Commerce app connected to a Rest API with functioning pages as well as a stripe payment feature. 

Built from scratch with React and using Node.js, Redux, Stripe, Express, MongoDB, and JWT.





## Features
* Shop through a list of items and add them to your cart
* Connected to an API
* Stripe payment feature (If you want to try it out, you can always type in "test" into the input fields)
* Uses client-side routing via React-Router
* Is mobile and desktop friendly

## Installation

1. Clone this repository to your computer.
```bash
git clone https://github.com/DuncanBrewster/e-commerce-app.git 
```

2. On the master branch, install the NPM dependencies.
```bash
npm install
```

3. This project requires a Stripe API key. Create an account at [stripe.com](https://stripe.com/) to get your key.

4. Create a .env file in your root directory.
```bash
touch .env
```

5. Inside your .env file, create a variable called REACT_APP_STRIPE and set it to your unique API key.
```bash
REACT_APP_STRIPE = yourUniqueApiKey
```

6. Open the project on a development server.
```bash
npm start
```

7. View the project in your internet browser at [http://localhost:9000](http://localhost:9000).



## Tools

This project:

* was built with **React**.
* is styled with **Styled Components**.
* Rest API was built using **Postman**.
* Rest API is connected to the app with **MongoDB**.
* hosted on [Netlify](https://duncan-e-commerce-app.netlify.app).


