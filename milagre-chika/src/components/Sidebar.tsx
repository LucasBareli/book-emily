import React from 'react';
import { HomeIcon, BookOpenIcon, LibraryIcon, UserGroupIcon, CogIcon, QuestionMarkCircleIcon } from "./Icon";

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; isActive?: boolean }> = ({ icon, label, isActive }) => (
  <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}>
    {icon}
    <span>{label}</span>
  </a>
);

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-white p-4 flex-col flex-shrink-0 hidden md:flex">
    <div className="flex items-center space-x-3 p-4 mb-4">
      <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
      <div>
        <h2 className="font-bold text-lg text-gray-800">Leitor</h2>
        <span className="text-sm text-gray-500">Amante de Livros</span>
      </div>
    </div>
    <nav className="flex-grow space-y-2">
      <SidebarItem icon={<HomeIcon />} label="Descobrir" />
      <SidebarItem icon={<BookOpenIcon />} label="Audiolivros" isActive />
      <SidebarItem icon={<LibraryIcon />} label="Minha Biblioteca" />
      <SidebarItem icon={<UserGroupIcon />} label="Autores" />
    </nav>
    <div className="space-y-2">
      <SidebarItem icon={<CogIcon />} label="Configurações" />
      <SidebarItem icon={<QuestionMarkCircleIcon />} label="Ajuda" />
    </div>
  </aside>
);

export default Sidebar;