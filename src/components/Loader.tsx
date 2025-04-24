
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-secondary animate-pulse opacity-70"></div>
      </div>
    </div>
  );
};

export default Loader;
