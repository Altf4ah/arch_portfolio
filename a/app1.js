import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-serif">
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold tracking-wide">ALBERTIN DESIGNS</h1>
        <nav className="space-x-6 uppercase text-sm tracking-wider">
          <a href="#">Услуги</a>
          <a href="#">Проекти</a>
          <a href="#">Цени</a>
          <a href="#">За Нас</a>
          <a href="#">Контакти</a>
        </nav>
        <button className="border px-4 py-2 text-sm hover:bg-white hover:text-black transition">
          Направете запитване
        </button>
      </header>

      <section className="relative text-left p-12 md:p-20 max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-serif leading-tight">
          Интериор, <br /> създаден със <br /> страст
        </h2>
        <p className="mt-6 text-sm text-gray-300 max-w-xl">
          Дългогодишният опит и любовта към интериорния дизайн ни помагат да
          превръщаме пространствата в уютен дом или комфортна работна среда.
        </p>
        <div className="mt-8">
          <button className="bg-gold text-black px-6 py-2 uppercase tracking-wide font-medium">
            Свържете се с нас
          </button>
        </div>
        <div className="absolute bottom-10 right-10 text-gold italic text-xl">
          Albertin
        </div>
      </section>
    </div>
  );
}

export default App;
