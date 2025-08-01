import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Book from './pages/Book';
import Readers from './pages/Readers';
import Author from './pages/Author';
import MyFriend from './pages/MyFriend';

export type PageName = 'livro' | 'leitores' | 'autor' | 'emily';

const App = () => {
  const [currentPage, setCurrentPage] = useState<PageName>('livro'); 

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'livro':
        return <Book />;
      case 'leitores':
        return <Readers />;
      case 'autor':
        return <Author />;
      case 'emily':
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