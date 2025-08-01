import React, { useState } from "react";
import Player from "../components/Player";
import CategoryPill from "../components/Category";
import { HeartIcon } from "../components/Icon";
import chikaBanner from "../assets/chika.jpg";

const bookCategories = [
  {
    label: "Família",
    content: `O coração deste livro é a surpreendente e transformadora formação de uma família. Mitch Albom e sua esposa, Janine, viviam uma rotina tranquila e previsível, um casal sem filhos dedicado às suas carreiras. A chegada de Chika não é apenas uma adição; é uma doce e caótica revolução que preenche a casa com risadas, brinquedos e um propósito inteiramente novo. A narrativa explora com uma ternura visceral como os laços familiares são forjados não pelo sangue ou pela convenção, mas pelo cuidado diário, pelo sacrifício instintivo e por um amor incondicional que floresce nos momentos mais desafiadores. É a crônica de aprender a ser pai e mãe em tempo real, navegando por birras, vitórias e a responsabilidade avassaladora de lutar pela vida de uma filha.`
  },
  {
    label: "História Real",
    content: `Esta não é uma obra de ficção; é um testemunho brutalmente honesto. Cada evento, diálogo e onda de emoção são parte da experiência verídica e sem filtros de Mitch Albom e sua família. O livro funciona como um memorial e um diário íntimo, documentando a luta real contra um diagnóstico terminal, as viagens desgastantes entre continentes em busca de uma cura milagrosa e os preciosos momentos de normalidade — como uma festa de aniversário ou uma dança na sala — que se tornam o refúgio da família. Albom não romantiza a dor nem o esgotamento, oferecendo um relato cru e corajoso que captura a dualidade de enfrentar a mais profunda tristeza enquanto se agarra ferozmente à alegria.`
  },
  {
    label: "Inspirador",
    content: `Apesar de sua premissa trágica, "Um Milagre Chamado Chika" é, em sua essência, uma poderosa fonte de inspiração. A narrativa nos convida a encontrar luz na escuridão, mostrando a coragem inabalável de uma menina de cinco anos que enfrenta o impensável com uma atitude espirituosa e indomável. A verdadeira inspiração não está em um final feliz, mas na resiliência do espírito humano. A generosidade de um casal que abre seu lar e seu coração, a força de uma comunidade que se une e a celebração da vida, por mais curta que seja, deixam uma mensagem duradoura. A história nos ensina a reavaliar nossas próprias dificuldades e a encontrar um significado profundo no ato de amar e cuidar do outro.`
  },
  {
    label: "Biografia",
    content: `Embora escrito por Mitch Albom, este livro é, fundamentalmente, a biografia de Chika Jeune. Albom, com sua maestria de contador de histórias, afasta-se para dar o palco a ela, pintando um retrato vívido e multidimensional de sua personalidade. Conhecemos a menina inteligente e mandona que comandava adultos, a criança curiosa que se maravilhava com o mundo fora do Haiti e a alma carinhosa que distribuía afeto. A narrativa tece suas origens, seus gostos peculiares, seus medos e seus sonhos, imortalizando não uma vítima da doença, mas uma força da natureza. É o tributo de um pai para garantir que a luz, a voz e o imenso legado de sua filha nunca sejam esquecidos.`
  }
];

const Book: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Família");
  const activeContent = bookCategories.find(cat => cat.label === activeCategory);

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
                <h3 className="text-2xl font-bold text-gray-800">Sobre o Livro</h3>
              </div>

              <div className="flex space-x-3 overflow-x-auto pb-2">
                {bookCategories.map((category) => (
                  <CategoryPill
                    key={category.label}
                    label={category.label}
                    isActive={activeCategory === category.label}
                    onClick={() => setActiveCategory(category.label)}
                  />
                ))}
              </div>

              <div className="mt-6">
                <div className="text-gray-700 text-base space-y-4">
                  {activeContent?.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Book;