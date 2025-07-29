import { useState } from 'react';

const excerptsData = {
    Amor: '"A família que você cria pode ser tão forte quanto a que você nasceu. Às vezes, até mais forte."',
    Perda: '"O luto é um preço terrível que pagamos pelo amor. E vale a pena, sempre vale a pena."',
    Esperança: '"Mesmo nos dias mais sombrios, uma pequena luz de esperança pode iluminar o caminho inteiro."',
    Fé: '"Fé não é acreditar que tudo vai dar certo. É acreditar que tudo faz sentido, de alguma forma."',
};

type TabName = keyof typeof excerptsData;

export default function Excerpts() {
    const [activeTab, setActiveTab] = useState<TabName>('Amor');

    return (
        <section className="bg-brand-bg/80 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brand-brown">Trechos do Livro</h2>
                <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-8">
                    {(Object.keys(excerptsData) as TabName[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-5 rounded-full transition-all duration-300 font-semibold shadow-sm ${activeTab === tab
                                    ? 'bg-brand-blue text-white scale-110 shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="max-w-3xl mx-auto min-h-[100px] bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-xl md:text-2xl font-serif italic text-brand-text relative">
                        <span className="absolute -left-4 -top-2 text-6xl text-brand-yellow/50 opacity-80">&ldquo;</span>
                        {excerptsData[activeTab]}
                        <span className="absolute -right-4 -bottom-6 text-6xl text-brand-yellow/50 opacity-80">&rdquo;</span>
                    </p>
                </div>
            </div>
        </section>
    );
}