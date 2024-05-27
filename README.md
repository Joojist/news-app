# Erply Test

This project is a news application built using React, Redux, and Material-UI. The application fetches news articles and displays them in a user-friendly interface.

## Features
- **Prettier**: Added for code formatting to maintain a consistent style across the project.
- **Toastify**: Integrated for displaying friendly UI error messages through pop-ups.
- **Logos**: Included for a more streamlined UI design.
- **Emotion**: Used for writing CSS styles with JavaScript.

## How to Install and Run

### Prerequisites
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

### Installation

#### Using GitHub Desktop
1. **Clone the repository**:
    - Open GitHub Desktop.
    - Click on `File` > `Clone repository`.
    - Select the `URL` tab and paste the repository URL: `https://github.com/your-repo/news-app.git`.
    - Choose the local path where you want to clone the repository.
    - Click `Clone`.

#### Using Command Line
1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-repo/news-app.git
    cd news-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

### Running the Application
1. **Start the development server**:
    ```sh
    npm start
    ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Running Tests
1. **Launch the test runner**:
    ```sh
    npm test
    ```
   This will start the test runner in interactive watch mode. Refer to the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) section for more details.

### Building for Production
1. **Build the app**:
    ```sh
    npm run build
    ```
   This command builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!


### Code Style
This project uses Prettier for code formatting. To format your code, run:
```sh
npm run prettier
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

## Explanation of `package.json` Dependencies

### Dependencies
- **@emotion/react** and **@emotion/styled**: Used for writing CSS styles with JavaScript, enabling styled components.
- **@mui/icons-material** and **@mui/material**: Provides Material-UI components and icons for a consistent and attractive UI.
- **@reduxjs/toolkit**: Simplifies Redux development with a standardized way to write Redux logic.
- **axios**: Promise-based HTTP client for making API requests. (For testing purposes)
- **prettier**: Code formatter to ensure consistent code style.
- **react** and **react-dom**: Core React libraries.
- **react-icons**: Collection of popular icons to use in your React projects.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: Provides declarative routing for React applications.
- **react-scripts**: Scripts and configuration used by Create React App.
- **redux**: State management library.
- **typescript**: Adds static type definitions to JavaScript for better code quality and development experience.
- **web-vitals**: Library for measuring web performance metrics.

### DevDependencies
- **@babel/preset-env**, **@babel/preset-react**, **@babel/preset-typescript**: Babel presets to compile modern JavaScript, React, and TypeScript code.
- **@testing-library/jest-dom**, **@testing-library/react**, **@testing-library/user-event**: Tools for testing React components.
- **@types/jest**, **@types/node**, **@types/react**, **@types/react-dom**: TypeScript type definitions for Jest, Node.js, React, and ReactDOM.
- **axios-mock-adapter**: Library to mock axios requests for testing.
- **babel-jest**: Babel integration for Jest, allowing Jest to compile JavaScript files using Babel.
- **identity-obj-proxy**: Proxy for CSS modules to use with Jest.
- **jest**, **jest-environment-jsdom**: Testing framework and environment for running tests in a simulated browser environment.
- **jsdom**: JavaScript implementation of the DOM and HTML standards, used for testing in a Node.js environment.
- **redux-mock-store**: Mock store for testing Redux async action creators and middleware.
- **ts-jest**: TypeScript preprocessor with source map support for Jest.