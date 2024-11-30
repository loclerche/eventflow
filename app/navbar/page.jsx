export default function Navbar() {
  return (
    <header className="bg-gray-100 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        
        <div className="lg:w-1/2 p-4">
          <img
            src="public/assets/logo.svg"
            alt="logo"
            className=" logo"
          />
        </div>
      

        {/* Liens de navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/eventlis"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Evenement
          </a>
          <a
            href="/connexion"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Creer un evenenent
          </a>
          <a
            href="/inscription"
            className="text-green-600 hover:underline transition"
          >
            inscription
          </a>
        </nav>

        {/* Bouton Connexion */}
        <div>
          <a
            href="/connexion"
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
          >
            Connexion
          </a>
        </div>

        {/* Menu pour mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
