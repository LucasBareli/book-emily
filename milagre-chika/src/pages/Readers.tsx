import React from 'react';

const Readers: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h1 className="font-bold text-gray-900 pb-2 text-3xl md:text-4xl">Para Quem é Este Livro?</h1>
    <p className="text-lg text-gray-600 mb-6">Uma leitura que toca a alma de diferentes maneiras.</p>
    <hr className="my-6" />

    <div className="space-y-8 text-gray-700">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Para quem busca uma história real e inspiradora:</h3>
        <p>
          Se você se emociona com jornadas de superação e lições de vida autênticas, a história de Chika é um presente. Este livro não é ficção; é um mergulho na realidade de uma menina haitiana cuja resiliência e alegria mudaram para sempre a vida de todos ao seu redor. É um testemunho poderoso sobre encontrar esperança em meio à adversidade.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Para os fãs de Mitch Albom:</h3>
        <p>
          Quem já conhece o autor sabe de sua habilidade única para explorar temas como vida, morte e amor com uma sensibilidade tocante. Em "Um Milagre Chamado Chika", Albom abre seu coração de uma forma ainda mais pessoal, compartilhando sua própria jornada de paternidade inesperada. É a sua obra mais íntima e, talvez, a mais comovente.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Para quem acredita no poder da família:</h3>
        <p>
          Este livro redefine o conceito de família. Ele mostra como os laços de amor podem ser formados não pelo sangue, mas pela escolha, pelo cuidado e pela dedicação. A transformação de Mitch e Janine ao se tornarem pais de Chika é uma lição sobre amor incondicional, perda e a beleza de uma família que nasceu do inesperado.
        </p>
      </div>
    </div>
  </div>
);

export default Readers;