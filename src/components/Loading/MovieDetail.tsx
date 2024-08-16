import React from "react";

export const MovieDetailSkeleton: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <button className="text-blue-500 hover:text-blue-700 mb-4 flex items-center">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <span className="ml-2 w-16 h-4 bg-gray-300 rounded"></span>
      </button>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
        <div className="animate-pulse">
          <div className="w-full h-64 bg-gray-300 rounded-t-lg"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
