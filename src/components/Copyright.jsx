import React from 'react';

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center text-gray-600 text-sm mt-4 mb-4">
      <p>© {currentYear} Vessel Maintenance Predictor. All rights reserved.</p>
    </div>
  );
}

export default Copyright;
