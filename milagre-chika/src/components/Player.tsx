import React from 'react';
import { PlaylistIcon, ShuffleIcon, RewindIcon, PlayIcon, FastForwardIcon, RefreshIcon } from "./Icon";

const Player: React.FC = () => (
  <div className="col-span-1 bg-blue-600 rounded-2xl text-white p-6 flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <span className="text-sm font-bold">Tocando Agora</span>
      <PlaylistIcon />
    </div>
    <div className="text-center">
      <img src="https://m.media-amazon.com/images/I/81HqBEy0HmL._SL1500_.jpg" alt="Capa Um Milagre Chamado Chika" className="w-40 h-40 mx-auto rounded-lg shadow-2xl mb-4" />
      <h3 className="font-bold text-xl">Um Milagre Chamado Chika</h3>
      <p className="opacity-70 text-sm">Mitch Albom</p>
    </div>
    <div>
      <div className="w-full h-1 bg-white/20 rounded-full">
        <div className="w-1/2 h-1 bg-white rounded-full"></div>
      </div>
      <div className="flex justify-between text-xs opacity-70 mt-1">
        <span>14:32</span>
        <span>57:12</span>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4">
        <button className="opacity-70 hover:opacity-100"><ShuffleIcon /></button>
        <button className="opacity-70 hover:opacity-100"><RewindIcon /></button>
        <button><PlayIcon /></button>
        <button className="opacity-70 hover:opacity-100"><FastForwardIcon /></button>
        <button className="opacity-70 hover:opacity-100"><RefreshIcon /></button>
      </div>
    </div>
  </div>
);

export default Player;