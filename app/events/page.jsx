export default function Eventlist() {
    const events = [
      {
        title: "Soirée de Jeux en Ligne",
        date: "15/12/2024",
        description: "Venez vous amuser lors de notre soirée de jeux en ligne, où le plaisir est garanti !",
        image: "/main.png", // Remplacez par le chemin réel de l'image
      },
      {
        title: "Atelier de Cuisine Virtuel",
        date: "20/12/2024",
        description: "Rejoignez-nous pour un atelier de cuisine où vous apprendrez à préparer des plats délicieux en direct !",
        image: "/images/cooking-class.jpg", // Remplacez par le chemin réel de l'image
      },
      {
        title: "Séminaire de Développement Personnel",
        date: "30/12/2024",
        description: "Développez vos compétences avec notre séminaire interactif sur le développement personnel.",
        image: "/images/personal-development.jpg", // Remplacez par le chemin réel de l'image
      },
      {
        title: "Séminaire de Développement Personnel",
        date: "30/12/2024",
        description: "Développez vos compétences avec notre séminaire interactif sur le développement personnel.",
        image: "/images/dinner-event.jpg", // Remplacez par le chemin réel de l'image
      },
    ];
  
    return (
      <div className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
        {/* Titre de la section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Nos événements</h2>
        </div>
  
        {/* Liste des événements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image de l'événement */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              {/* Contenu de l'événement */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{event.date}</p>
                <p className="text-gray-600 mt-4">{event.description}</p>
                {/* Bouton */}
                <a href="/details">
                  <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                   voir les details
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  