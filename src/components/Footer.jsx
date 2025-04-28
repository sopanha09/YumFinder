import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-footer text-center p-4">
      <p className="text-white">
        &copy; {currentYear} YumFinder. All rights reserved.
      </p>
    </footer>
  );
}
