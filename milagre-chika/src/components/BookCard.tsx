import React from 'react';

const BookCard: React.FC<{ coverUrl: string; title: string; author: string; }> = ({ coverUrl, title, author }) => (
  <div className="flex-shrink-0 w-36">
    <img src={coverUrl} alt={title} className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
    <div className="mt-2">
      <h4 className="font-bold text-sm text-gray-800 truncate">{title}</h4>
      <p className="text-xs text-gray-500">{author}</p>
    </div>
  </div>
);

export default BookCard;