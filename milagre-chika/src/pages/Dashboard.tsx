import React from 'react';
import Player from '../components/Player';
import CategoryPill from '../components/Category';
import BookCard from '../components/BookCard';
import { HeartIcon, ChevronRightIcon } from '../components/Icon';

const otherBooks = [
  { coverUrl: "https://m.media-amazon.com/images/I/819HSI536KL._SL1500_.jpg", title: "A Última Grande Lição", author: "Mitch Albom" },
  { coverUrl: "https://m.media-amazon.com/images/I/71y+8mZgDNL._SL1500_.jpg", title: "As Cinco Pessoas que Você Encontra no Céu", author: "Mitch Albom" },
  { coverUrl: "https://m.media-amazon.com/images/I/81c3xKj6aJL._SL1500_.jpg", title: "O Guardião do Tempo", author: "Mitch Albom" },
  { coverUrl: "https://m.media-amazon.com/images/I/71dYmUo9JjL._SL1500_.jpg", title: "Por Mais um Dia", author: "Mitch Albom" },
  { coverUrl: "https://m.media-amazon.com/images/I/8157i228O3L._SL1500_.jpg", title: "O Primeiro Telefonema do Céu", author: "Mitch Albom" },
];

const DashboardPage: React.FC = () => {
  return (
    <main className="flex-1 p-4 sm:p-8">
      <div className="w-full h-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
        {/* Banner Principal */}
        <div 
          className="relative w-full h-56 rounded-2xl bg-cover bg-center text-white p-6 sm:p-8 flex flex-col justify-end"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2693&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold">Um Milagre Chamado Chika</h1>
            <p className="text-md sm:text-lg">- Mitch Albom</p>
            <div className="mt-4 flex items-center space-x-4">
              <button className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition text-sm">
                Ouvir Agora
              </button>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition">
                <HeartIcon />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Player />

          <div className="lg:col-span-2">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Categoria</h3>
                <a href="#" className="text-sm font-semibold text-gray-500 hover:text-blue-500">Ver todos</a>
              </div>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                <CategoryPill label="História Real" />
                <CategoryPill label="Inspirador" />
                <CategoryPill label="Família" isActive />
                <CategoryPill label="Biografia" />
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Mais de Mitch Albom</h3>
                <div className="flex items-center space-x-2">
                  <a href="#" className="text-sm font-semibold text-gray-500 hover:text-blue-500">Ver todos</a>
                  <button className="p-1 rounded-full hover:bg-gray-200">
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
              <div className="flex space-x-6 overflow-x-auto pb-4">
                {otherBooks.map(book => (
                  <BookCard key={book.title} {...book} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;