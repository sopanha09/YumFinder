import React from 'react';

export default function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="loader border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
    </div>
  );
}
