import React from 'react';
import { HomeIcon, BookOpenIcon, UserGroupIcon } from "./Icon"; 
import type { PageName } from '../App.tsx';

interface SidebarProps {
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
}

const SidebarItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center w-full text-left space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems: { key: PageName; label: string; icon: React.ReactNode; }[] = [
    { key: 'book', label: 'Book', icon: <HomeIcon /> },
    { key: 'readers', label: 'Readers', icon: <BookOpenIcon /> },
    { key: 'author', label: 'Author', icon: <UserGroupIcon /> }, 
    { key: 'myFriend', label: 'My Friend', icon: <UserGroupIcon /> },
  ];

  return (
    <aside className="w-64 bg-white p-4 flex-col flex-shrink-0 hidden md:flex">
      <div className="flex items-center space-x-3 p-4 mb-4">
        <img className="h-12 w-12 rounded-full object-cover" src="./src/assets/bareli.jfif" alt="User" />
        <div>
          <h2 className="font-bold text-lg text-gray-800">Lucas Bareli</h2>
          <span className="text-sm text-gray-500">Book lover</span>
        </div>
      </div>
      <nav className="flex-grow space-y-2">
        {navItems.map((item) => (
          <SidebarItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            isActive={currentPage === item.key}
            onClick={() => setCurrentPage(item.key)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;