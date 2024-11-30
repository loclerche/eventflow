export default function Hero() {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Titre principal */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Fonctionalitées
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Simplifiez la gestion de vos événements avec notre plateforme intuitive et professionnelle
        </p>
      </div>

      {/* Section des cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Carte 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Planification Simple</h3>
          <p className="mt-2 text-gray-600">
            Organisez vos événements en quelques clics avec notre interface intuitive
          </p>
        </div>
        {/* Carte 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Gestion des Participants</h3>
          <p className="mt-2 text-gray-600">
            Suivez facilement les inscriptions et gérez vos listes d'invités
          </p>
        </div>
        {/* Carte 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-chart-bar"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Rapports Détaillés</h3>
          <p className="mt-2 text-gray-600">
            Accédez à des analyses complètes et des statistiques en temps réel
          </p>
        </div>
      </div>

      {/* Section des statistiques */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Statistique 1 */}
        <div>
          <h2 className="text-4xl font-bold text-blue-500">10,000+</h2>
          <p className="mt-2 text-gray-600">Événements Organisés</p>
        </div>
        {/* Statistique 2 */}
        <div>
          <h2 className="text-4xl font-bold text-blue-500">500+</h2>
          <p className="mt-2 text-gray-600">Clients Satisfaits</p>
        </div>
        {/* Statistique 3 */}
        <div>
          <h2 className="text-4xl font-bold text-blue-500">98%</h2>
          <p className="mt-2 text-gray-600">Taux de Satisfaction</p>
        </div>
      </div>

      {/* Bouton principal */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Commencer Maintenant
        </button>
      </div>
    </div>
  );
}
