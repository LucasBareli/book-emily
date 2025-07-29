export default function CallToAction() {
    return (
        <section id="doe" className="bg-brand-brown text-white py-20 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ajude o Orfanato do Haiti</h2>
                <p className="max-w-2xl mx-auto mb-8 text-lg text-white/80">
                    O legado de Chika vive através das crianças do Orfanato Have Faith Haiti. Sua doação fornece educação, abrigo e esperança. Junte-se a nós nesta missão.
                </p>
                <div className="mb-8">
                    <div className="w-full bg-gray-600 rounded-full h-4 shadow-inner">
                        <div className="bg-brand-yellow h-4 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="mt-2 text-sm text-white/70">Meta: R$ 50.000 | Arrecadado: R$ 32.500</p>
                </div>
                <a href="#" className="inline-block bg-brand-yellow text-brand-brown font-bold text-lg py-3 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105 animate-pulse-on-hover">
                    FAZER UMA DOAÇÃO
                </a>
            </div>
        </section>
    );
}