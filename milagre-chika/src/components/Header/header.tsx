import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'O Livro', href: '#' },
    { name: 'O Autor', href: '#' },
    { name: 'O Orfanato', href: '#' },
    { name: 'Chika', href: '#' },
    { name: 'Doe', href: '#doe', isButton: true },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-brand-bg/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="font-serif text-xl sm:text-2xl font-bold text-brand-brown">
                        <a href="#" className="hover:text-brand-brown/80 transition-colors">Um Milagre Chamado Chika</a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={
                                    link.isButton
                                        ? 'bg-brand-yellow text-brand-brown font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-sm'
                                        : 'text-base font-medium hover:text-brand-blue transition-colors'
                                }
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-text hover:text-brand-blue transition-colors">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-brand-bg pb-4">
                    <nav className="flex flex-col items-center space-y-4 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`w-full text-center rounded-md py-2 transition-colors ${link.isButton ? 'bg-brand-yellow text-brand-brown font-bold' : 'hover:bg-gray-100'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}