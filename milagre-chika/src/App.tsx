import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

import Book from './pages/Book';
import Description from './pages/Description';
import Readers from './pages/Readers';
import Author from './pages/Author';
import MyFriend from './pages/MyFriend';

export type PageName = 'book' | 'description' | 'readers' | 'author' | 'myFriend';

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageName>('book'); 

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'book':
        return <Book />;
      case 'description':
        return <Description />;
      case 'readers':
        return <Readers />;
      case 'author':
        return <Author />;
      case 'myFriend':
        return <MyFriend />;
      default:
        return <Book />; 
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {renderCurrentPage()}
    </div>
  );
};

export default App;