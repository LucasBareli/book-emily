import React from 'react';

const Readers = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="font-bold text-gray-900 pb-2 text-3xl md:text-4xl">Público-Alvo</h1>
    <hr className="my-4" />
    <p className="text-gray-700 mb-4">Este livro é ideal para:</p>
    <ul className="space-y-3 text-gray-700">
      <li>
        <strong className="font-semibold text-gray-800">Leitores de histórias reais e inspiradoras.</strong>
      </li>
      <li>
        <strong className="font-semibold text-gray-800">Fãs do trabalho sensível de Mitch Albom.</strong>
      </li>
      <li>
        <strong className="font-semibold text-gray-800">Pessoas em busca de uma mensagem de esperança e resiliência.</strong>
      </li>
    </ul>
  </div>
);

export default Readers;