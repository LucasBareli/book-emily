import React from "react";
import Player from "../components/Player";
import CategoryPill from "../components/Category";
import { HeartIcon } from "../components/Icon";
import chikaBanner from "../assets/chika.jpg";

const Book: React.FC = () => {
  return (
    <main className="flex-1 p-4 sm:p-8">
      <div className="w-full h-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col">
        <div
          className="relative w-full h-56 rounded-2xl bg-cover bg-center text-white p-6 sm:p-8 flex flex-col justify-end"
          style={{ backgroundImage: `url(${chikaBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Um Milagre Chamado Chika
            </h1>
            <p className="text-md sm:text-lg">de Mitch Albom</p>
            <div className="mt-4 flex items-center space-x-4">
              <a
                href="https://dlivros.com/livro/milagre-chamado-chika-mitch-albom"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition text-sm"
              >
                Ler Agora
              </a>
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
              </div>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                <CategoryPill label="História Real" />
                <CategoryPill label="Inspirador" />
                <CategoryPill label="Família" isActive />
                <CategoryPill label="Biografia" />
              </div>
              <div className="mt-3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Descrição do Livro
                </h3>
                <div className="text-gray-700 text-base space-y-4">
                  <h4>A Menina que Mudou Tudo.</h4>
                  <p>
                    Imagine uma vida perfeitamente ordenada, onde tudo está no seu lugar. Agora, imagine uma criança vibrante e corajosa entrando nessa vida e mudando cada regra, cada prioridade, cada pedaço do seu coração. Essa criança é Chika Jeune.
                  </p>
                  <p>
                    Nascida às vésperas de uma tragédia nacional no Haiti e enfrentando sua própria batalha pessoal contra uma doença implacável, Chika nunca deixou que as sombras diminuíssem sua luz. Quando o autor Mitch Albom e sua esposa a acolhem, eles acreditam que estão lhe dando uma chance de lutar. Mal sabem eles que é Chika quem lhes dará o maior presente de todos: a chance de se tornarem pais.
                  </p>
                  <p>
                    Este livro é um memorial poderoso e uma celebração da vida. É a história de como a busca por uma cura médica se cruza com a descoberta do amor incondicional. Ao longo de dois anos inesquecíveis, vemos um casal aprender a ser uma família e uma menina ensinar ao mundo o que é coragem. "Em Busca de Chika" é uma leitura essencial para quem já amou, já perdeu e acredita que até as vidas mais curtas podem deixar o maior dos legados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Book;
