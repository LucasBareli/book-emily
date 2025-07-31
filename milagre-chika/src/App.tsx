import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { PageName } from './type'; 

const PageTemplate: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="font-bold text-gray-900 text-3xl">{title}</h1>
    <hr className="my-4" />
    <p>Conteúdo da página "{title}" vai aqui...</p>
  </div>
);

const Book = () => <PageTemplate title="Book" />;
const Description = () => <PageTemplate title="Description" />;
const Readers = () => <PageTemplate title="Readers" />;
const Author = () => <PageTemplate title="Author" />;
const MyFriend = () => <PageTemplate title="My Friend" />;


const App = () => {
  const [currentPage, setCurrentPage] = useState<PageName>('description');

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
        return <Description />; 
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1 p-8">
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default App;
