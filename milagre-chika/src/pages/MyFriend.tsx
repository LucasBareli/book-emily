import React from 'react';
import Emily from "../assets/emily.png";
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';
import Icon5 from '../assets/Icon5.png';

const MyFriend: React.FC = () => (
  <main className="flex-1 p-4 sm:p-8 bg-gray-50">
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-1">
          <div className="mb-6">
            <div
              className="w-100 h-150 rounded-2xl bg-cover bg-center bg-no-repeat mx-auto flex items-center justify-center shadow-lg"
              style={{ backgroundImage: `url(${Emily})` }}
            >
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900">Emily Berti</h1>
            <p className="text-xl text-green-900 font-semibold">Fiote do Bareli</p>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">O que eu sei dela</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500">Nascimento</p>
                <p className="font-semibold text-lg text-gray-800">2007</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">TIme</p>
                <p className="font-semibold text-lg text-gray-800">Santos FC</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Maior Qualidade</p>
                <p className="font-semibold text-lg text-gray-800">Engraçada as vezes</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Localização</p>
                <p className="font-semibold text-lg text-gray-800">Hortôlandia, SP</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cantor</p>
                <p className="font-semibold text-lg text-gray-800">Kendrick Lamar</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Defeito</p>
                <p className="font-semibold text-lg text-gray-800">fiote kkk</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Coisas que ela gosta</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              <div className="w-full h-24 bg-gray-200 rounded-lg">
                <img
                  src={Icon1}
                  alt="Descrição do Ícone 1"
                  className="w-full h-full object-contain p-2" 
                />
              </div>

              <div className="w-full h-24 bg-gray-200 rounded-lg">
                <img
                  src={Icon2}
                  alt="Descrição do Ícone 2"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div className="w-full h-24 bg-gray-200 rounded-lg">
                <img
                  src={Icon3}
                  alt="Descrição do Ícone 3"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div className="w-full h-24 bg-gray-200 rounded-lg">
                <img
                  src={Icon4}
                  alt="Descrição do Ícone 4"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div className="w-full h-24 bg-gray-200 rounded-lg">
                <img
                  src={Icon5}
                  alt="Descrição do Ícone 5"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          </section>

          <section className="mt-8">
            <blockquote className="bg-gray-100 p-6 rounded-lg border-l-4 border-green-300">
              <p className="text-lg italic text-gray-700">
                "Emily, apesar de você dar mancada eu gosto de você, tmj fi!!"
              </p>
              <footer className="text-right mt-4 font-semibold text-gray-600">- Lucas Bareli</footer>
            </blockquote>
          </section>

        </div>
      </div>
    </div>
  </main>
);

export default MyFriend;