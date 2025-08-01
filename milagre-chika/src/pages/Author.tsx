import React from 'react';
import BookCard from "../components/BookCard";

const authorBooks = [
  { coverUrl: "./src/assets/1.jfif", title: "A Última Grande Lição", author: "Mitch Albom" },
  { coverUrl: "./src/assets/2.jpg", title: "As Cinco Pessoas que Você Encontra no Céu", author: "Mitch Albom" },
  { coverUrl: "./src/assets/3.jpg", title: "Por Mais um Dia", author: "Mitch Albom" },
  { coverUrl: "./src/assets/4.jpg", title: "O Guardião do Tempo", author: "Mitch Albom" },
  { coverUrl: "./src/assets/5.jfif", title: "O Primeiro Telefonema do Céu", author: "Mitch Albom" },
];

const Author: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <header className="mb-6">
      <h1 className="font-bold text-gray-900 pb-2 text-3xl md:text-4xl">
        Sobre o Autor: Mitch Albom
      </h1>
      <p className="text-lg text-gray-600">
        Um contador de histórias que toca o coração.
      </p>
    </header>
    <hr className="my-6" />

    <section className="text-gray-700 text-base space-y-4 mb-8">
      <p>
        Mitch Albom é um autor, jornalista e músico americano de renome internacional, celebrado por suas histórias inspiradoras que exploram temas profundos como vida, morte e amor. Com mais de 40 milhões de livros vendidos e traduzidos para 47 idiomas, seu trabalho tem um alcance global.
      </p>
      <p>
        Além de sua carreira literária, Albom é um dedicado filantropo. Ele fundou diversas instituições de caridade em Detroit e dirige um orfanato em Porto Príncipe, no Haiti, trabalho que inspirou a comovente história de "Um Milagre Chamado Chika". Sua capacidade de transformar experiências de vida em narrativas universais é o que o torna um dos autores mais queridos da atualidade.
      </p>
    </section>

    <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Principais Obras</h3>
        <div className="flex space-x-6 overflow-x-auto pb-4">
            {authorBooks.map((book) => (
                <BookCard key={book.title} {...book} />
            ))}
        </div>
    </section>

  </div>
);

export default Author;