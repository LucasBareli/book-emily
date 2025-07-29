export default function Hero() {
    return (
        <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
            <img
                src="https://m.media-amazon.com/images/I/81yfxQh+3cL._UF1000,1000_QL80_.jpg"
                alt="Capa do livro Um Milagre Chamado Chika"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-shadow-md shadow-black/50">
                    Uma Família se Encontra no Amor, na Esperança e na Perda.
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90 text-shadow-sm shadow-black/50">
                    A história real de Mitch Albom e sua esposa, que formaram uma família improvável com Chika, uma pequena órfã haitiana, aprendendo as maiores lições da vida.
                </p>
                <div className="mt-8">
                    <a href="#pilares" className="inline-block bg-brand-yellow text-brand-brown font-bold text-lg py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105">
                        Descubra a História
                    </a>
                </div>
            </div>
        </section>
    );
}