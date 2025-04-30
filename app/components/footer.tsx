import React from 'react';

export function Footer() {
  return (
    <footer className="w-full p-4 bg-gray-200 text-center">
      <div className="mb-2">
        <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 mx-2">
          Twitter
        </a>
        <a href="https://facebook.com/YourProfile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 mx-2">
          Facebook
        </a>
        <a href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 mx-2">
          LinkedIn
        </a>
      </div>
      <p className="text-sm text-gray-700">
        Contact us:{" "}
        <a href="mailto:contact@steelmadewebsite.com" className="hover:underline">
          contact@steelmadewebsite.com
        </a>{" "}
        | Phone: (123) 456-7890
      </p>
      <p className="text-sm text-gray-700">&copy; 2025 SteelMade Website. All rights reserved.</p>
    </footer>
  );
}
