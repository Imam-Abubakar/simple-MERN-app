# Simple MERN Stack App

This is a simple MERN (MongoDB, Express, React, Node.js) stack application that demonstrates how to build a basic web application with CRUD (Create, Read, Update, Delete) functionalities. The app allows users to view a list of contacts and add, update or delete contacts from the database.

## Features
- Register an account
- Login to the application
- View a list of contacts fetched from the MongoDB database.
- Add new contacts to the database using a form.
- Responsive design with MaterialUI for easy viewing on various devices.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm: [https://nodejs.org](https://nodejs.org)
- MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Imam-Abubakar/simple-MERN-app.git
cd simple-MERN-app
```

2. Install backend dependencies:

```bash
cd server
yarn
```

3. Navigate to the client folder and install frontend dependencies:

```bash
cd client
yarn
```

## Configuration

1. Create a `.env` file in the root directory of the project with the following content:

```plaintext
 DB_URL=******
 JWT_PASSWORD=********
```

Replace `*******` with your MongoDB connection string.

## Usage

1. Start the backend server:

```bash
yarn start
```

The server will be running on `http://localhost:8080`.

2. Start the frontend development server:

```bash
cd client
yarn dev
```

The React app will be running on `http://localhost:3000`.

3. Open your web browser and go to `http://localhost:3000` to access the MERN stack app.

## Folder Structure

The project for the server is structured as follows:

.   
├── config
│   └── db.js
├── controllers
│   ├── restController.js
│   └── contactController.js
├── middleware
│   └── authMiddleware.js
├── models
│   ├── restModel.js
│   └── userModel.js
├── routes
│   ├── auth.js
│   └── rest.js
├── utils
│   └── generateToken.js
├── server.js
├── .env
└── README.md


- `config/db.js`: MongoDB database connection setup.
- `controllers`: Backend controllers for handling API logic.
    - `authController.js`: Controller for authentication related API.
    - `restController.js`: Controller for handling Rest related API.
- `middleware`: Custom middleware functions.
    - `authMiddleware.js`: Middleware for authentication checks.
- `models`: Mongoose models for MongoDB schema.
   - `restModel.js`: Mongoose schema for the Rest model.
   - `userModel.js`: Mongoose schema for the User model.
- `routes`: Backend API routes.
    - `auth.js`: Express routes for authentication endpoints.
    - `rest.js`: Express routes for rest endpoints.
- `utils`: Utility functions.
    - `generateToken.js`: Utility function for generating JWT tokens.
- `client`: Frontend React app.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue.


## Acknowledgments

- This project was built using the MERN stack, React with Redux, Material UI, Express, and MongoDB.

Thank you for checking out this MERN stack app! If you have any questions or need further assistance, please feel free to reach out. Happy coding!