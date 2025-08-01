import React from 'react';
import { PlaylistIcon} from "./Icon";
import chikaBanner from "../assets/chika.jpg";

const Player: React.FC = () => (
  <div className="col-span-1 bg-green-900 rounded-2xl text-white p-6 flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <span className="text-sm font-bold">Lendo Agora</span>
      <PlaylistIcon />
    </div>
    <div className="text-center">
      <img src={chikaBanner} alt="Capa Um Milagre Chamado Chika" className="w-40 h-40 mx-auto rounded-lg shadow-2xl mb-4" />
      <h3 className="font-bold text-xl">Um Milagre Chamado Chika</h3>
      <p className="opacity-70 text-sm">Mitch Albom</p>
    </div>
    <div>
      <div className="w-full h-1 bg-white/20 rounded-full">
        <div className="w-1/2 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
);

export default Player;