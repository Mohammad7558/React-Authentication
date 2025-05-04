import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 text-base-content">
          <div className="text-center p-6 md:p-12 bg-white shadow-xl rounded-xl">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
            <p className="text-lg mb-6">
              Sorry, the page you're looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
            </p>
            <Link to="/" className="btn btn-primary text-white">Go Back to Home</Link>
          </div>
        </div>
      );
};

export default Error;