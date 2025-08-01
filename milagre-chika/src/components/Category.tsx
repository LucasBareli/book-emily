import React from 'react';

const CategoryPill: React.FC<{ label: string; isActive?: boolean }> = ({ label, isActive }) => (
  <button className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${isActive ? 'bg-green-900 text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
    {label}
  </button>
);

export default CategoryPill;