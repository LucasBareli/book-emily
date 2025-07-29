import { Heart, BookOpen, HelpingHand } from 'lucide-react';

const valuesData = [
    { icon: <Heart className="h-12 w-12 text-brand-yellow mb-4" />, title: 'Lições de Amor', desc: 'Uma história real sobre o poder do amor incondicional.' },
    { icon: <BookOpen className="h-12 w-12 text-brand-yellow mb-4" />, title: 'Uma História Real', desc: 'Baseado nas memórias emocionantes do autor Mitch Albom.' },
    { icon: <HelpingHand className="h-12 w-12 text-brand-yellow mb-4" />, title: 'Apoie uma Causa', desc: 'Sua leitura se transforma em ajuda direta para o Haiti.' }
];

export default function Values() {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {valuesData.map(value => (
                        <div key={value.title} className="flex flex-col items-center">
                            {value.icon}
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-brand-text/80">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}