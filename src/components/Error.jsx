import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FaExclamationCircle className="text-red-500 text-4xl mb-4" />
      <h2 className="text-lg font-semibold mb-2">Oops! Something went wrong.</h2>
      <p className="text-gray-600">{message || 'Please try again later.'}</p>
    </div>
  );
};

export default Error;
