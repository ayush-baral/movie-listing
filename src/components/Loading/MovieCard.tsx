import React from "react";

export const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-lg p-4 animate-pulse">
      <div className="h-40 bg-gray-300 rounded-t-lg mb-2"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
