
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-foreground mb-6">Page Not Found</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors inline-block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
