export default function Footer() {
    return (
      <footer className="bg-green-500 text-white py-8">
        <div className="container mx-auto px-4 space-y-4">
          {/* Logo et newsletter */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">
              Event <span className="text-purple-500">Hive</span>
            </h1>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full md:w-64 px-4 py-2 rounded-lg text-black"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
  
          {/* Liens de navigation */}
          <div className="border-t border-white opacity-20 my-4"></div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 rounded-full">
                English
              </button>
              <button className="text-sm hover:text-purple-500"></button>
              <button className="text-sm hover:text-purple-500"></button>
            </div>
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#accueil" className="hover:text-purple-500">Accueil</a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-purple-500">À propos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-500">Contact</a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-purple-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-purple-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-purple-500">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
  
          {/* Mentions légales */}
          <div className="text-center text-sm opacity-60">
            Non Copyrighted © 2023 Upload by Rich Technologies
          </div>
        </div>
      </footer>
    );
  }
  