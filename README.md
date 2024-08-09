# MERN Authentication Web App

A full-stack authentication platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring secure user authentication, state management, and third-party login integration.

## Features

- **User Authentication:** Secure signup and signin with hashed passwords using `bcryptjs` and JWT-based token authentication.
- **Google OAuth Integration:** Seamless third-party login via Google, utilizing Firebase for easy user onboarding.
- **RESTful API:** Robust API endpoints for user management (CRUD operations), session handling, and profile updates, built with Express.js.
- **State Management:** Advanced state management with `Redux`, ensuring scalable and maintainable code architecture.
- **Protected Routes:** Implementation of private routes using React Router DOM to secure user-specific pages and components.
- **Responsive Design:** Built with Tailwind CSS, providing a clean and responsive user interface.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/mern_auth.git
    ```

2. Install dependencies for both client and server:

    ```bash
    cd mern_auth
    npm install
    cd client
    npm install
    ```

3. Set up environment variables in a `.env` file:

    ```makefile
    CONNECTION_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## Usage

- **Signup/Signin:** Register new users or sign in existing users with secure token-based authentication.
- **Google OAuth:** Sign in with Google for quick access and account creation.
- **Profile Management:** Update user profiles, including email, username, and profile picture.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!


