# Mother Milk Palace

Welcome to the official repository for Mother Milk Palace, a full-stack e-commerce platform for groceries and daily essentials. This project is built to provide a seamless and professional online shopping experience for our customers, similar to popular services like Zepto and Blinkit.

## Features

-   **Browse by Category:** Easily find products with a well-organized category system.
-   **Product Search:** Quickly search for specific items.
-   **Shopping Cart:** Add products to your cart and manage your order before checkout.
-   **User Authentication:** Secure login and registration for a personalized experience.
-   **Offers & Discounts:** Dedicated section for special offers and deals.
-   **Professional UI/UX:** Clean, modern, and responsive design with smooth animations.

## Technologies Used

-   **Frontend:** React.js, Vite, Tailwind CSS
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB (using MongoDB Atlas)

## Repository Structure

This project follows a monorepo structure, separating the client (frontend) and server (backend) into distinct directories for better organization and management.



mother-milk-palace/
├── .gitignore
├── README.md
├── package.json
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── images/
│   │       ├── logo.svg
│   │       ├── product\_1.jpg
│   │       └── ...
│   ├── src/
│   │   ├── assets/
│   │   │   ├── css/
│   │   │   │   └── ...
│   │   │   ├── fonts/
│   │   │   │   └── ...
│   │   │   └── icons/
│   │   │       └── ...
│   │   ├── components/
│   │   │   ├── ...
│   │   ├── pages/
│   │   │   ├── ...
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── ...
└── server/
├── src/
│   ├── controllers/
│   │   └── ...
│   ├── routes/
│   │   └── ...
│   ├── models/
│   │   └── ...
│   ├── services/
│   │   └── ...
│   └── app.js
└── ...



## Getting Started

To run this project locally, you will need to set up both the client and server.

1.  **Clone the repository:**
    bash
    git clone [https://github.com/your-username/mother-milk-palace.git](https://github.com/your-username/mother-milk-palace.git)
    cd mother-milk-palace
    
2.  **Navigate to the client directory and install dependencies:**
    bash
    cd client
    npm install
    
3.  **Navigate to the server directory and install dependencies:**
    bash
    cd ../server
    npm install
   
4.  **Set up your environment variables:**
    * Create a `.env` file in the `server` directory.
    * Add your MongoDB Atlas connection string and other secrets (e.g., JWT secret) to this file.
5.  **Run the application:**
    * Start the backend server:
        bash
        npm start
        
    * Open a new terminal, navigate to the `client` directory, and start the frontend development server:
        bash
        npm run dev
        

This will give you a professional starting point for your project.

---
