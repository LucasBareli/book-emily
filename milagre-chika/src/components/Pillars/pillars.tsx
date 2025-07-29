const pillarsData = [
    { img: 'https://images.unsplash.com/photo-1576764724493-ef2176b5e020?q=80&w=2070&auto=format&fit=crop', title: 'A Família', desc: 'Como uma menina transformou um casal e redefiniu o significado de família.', link: 'Conheça a Jornada' },
    { img: 'https://images.unsplash.com/photo-1457460866881-8677b673e21a?q=80&w=2070&auto=format&fit=crop', title: 'A Esperança', desc: 'A busca incansável por milagres e a alegria encontrada nos pequenos momentos.', link: 'Leia sobre os Milagres' },
    { img: 'https://images.unsplash.com/photo-1618504543795-3677a2a3b04a?q=80&w=1964&auto=format&fit=crop', title: 'O Legado', desc: 'O impacto duradouro de Chika e a missão contínua no Orfanato do Haiti.', link: 'Veja o Impacto' },
];

export default function Pillars() {
    return (
        <section id="pilares" className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-brown">Os Pilares da História</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillarsData.map(pilar => (
                        <div key={pilar.title} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                            <div className="overflow-hidden"><img src={pilar.img} alt={pilar.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-brand-brown">{pilar.title}</h3>
                                <p className="mb-4 text-brand-text/80">{pilar.desc}</p>
                                <a href="#" className="font-bold text-brand-blue hover:underline">{pilar.link} &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}