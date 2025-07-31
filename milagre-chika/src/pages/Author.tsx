import React from 'react';

const Author = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="font-bold text-gray-900 pb-2 text-3xl md:text-4xl">
      Sobre o Autor: Mitch Albom
    </h1>
    <hr className="my-4" />
    <p className="text-gray-700 text-base">
      Mitch Albom é um autor, jornalista e músico americano de renome internacional, conhecido por suas histórias inspiradoras que exploram temas de vida, morte e amor.
    </p>
    <h3 className="font-semibold text-gray-800 mt-6 mb-2 text-xl">Principais Obras:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>A Última Grande Lição</li>
      <li>As Cinco Pessoas que Você Encontra no Céu</li>
      <li>Por Mais um Dia</li>
      <li>O Guardião do Tempo</li>
    </ul>
  </div>
);

export default Author;