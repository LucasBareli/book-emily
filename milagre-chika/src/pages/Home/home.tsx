import type { NextPage } from 'next';
import Head from 'next/head';

const ChikaBookPage: NextPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen font-serif text-gray-800">
      <Head>
        <title>Um Milagre Chamado Chika - Por Mitch Albom</title>
        <meta name="description" content="Página inicial com sinopse e propaganda do livro 'Um Milagre Chamado Chika' de Mitch Albom." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <main>
        {/* Seção Hero */}
        <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.tcdn.com.br/img/img_prod/1104673/livro_um_milagre_chamado_chika_1151_1_f5c40a331ab91f4b82967f6eb0791404.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display']">Um Milagre Chamado Chika</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Uma história real sobre uma garotinha, um terremoto e o verdadeiro significado de família.</p>
          </div>
        </section>

        {/* Seção da Sinopse */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="md:col-span-1">
                <img
                  src="https://images.tcdn.com.br/img/img_prod/1104673/livro_um_milagre_chamado_chika_1151_1_f5c40a331ab91f4b82967f6eb0791404.jpg"
                  alt="Capa do livro Um Milagre Chamado Chika"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-teal-700 font-['Playfair_Display'] mb-4">Sinopse</h2>
                <p className="text-base md:text-lg mb-4 leading-relaxed">
                  Mitch Albom, autor de "A Última Grande Lição", conta a história mais íntima e emocionante de sua carreira: como sua vida foi transformada pela chegada inesperada e pela partida prematura de Chika — uma menininha órfã de 5 anos, com uma personalidade irresistível e uma doença terminal.
                </p>
                <p className="text-base md:text-lg mb-4 leading-relaxed">
                  Chika Jeune nasceu três dias antes do terremoto que arrasou o Haiti em 2010. Após perder a mãe, foi levada para um orfanato em Porto Príncipe administrado por Mitch e sua esposa, Janine. Aos cinco anos, Chika é diagnosticada com uma doença grave e o casal a leva para Detroit, na esperança de encontrar a cura. O que se segue é uma jornada de dois anos que mudará suas vidas para sempre.
                </p>
                <p className="text-base md:text-lg font-semibold text-teal-800 leading-relaxed">
                  "Um Milagre Chamado Chika" é uma celebração da vida, do amor e dos laços que formam uma família.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Call to Action */}
        <section className="bg-teal-600 py-16 md:py-20 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-4">Adquira sua cópia hoje!</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Emocione-se com esta história inesquecível de amor, perda e esperança.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-400 text-teal-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
            >
              Comprar Agora
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-stone-100 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} - Página promocional do livro "Um Milagre Chamado Chika".</p>
      </footer>
    </div>
  );
};

export default ChikaBookPage;