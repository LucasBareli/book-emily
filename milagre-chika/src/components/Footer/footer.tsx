export default function Footer() {
    return (
        <footer className="bg-brand-text text-brand-bg/70 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Mitch Albom. Todos os direitos reservados.</p>
                <p className="mt-1 opacity-70">Este é um site conceitual criado como exemplo.</p>
            </div>
        </footer>
    );
}