
"use client"

import { useState, useEffect } from "react";

export default function Eventlist() {
  // Déclarez la liste des événements avant toute utilisation
  const events = [
    {
      id: 1,
      title: "Conférence Tech 2024",
      date: "2024-03-15",
      location: "Paris",
      type: "physical",
      description: "Une conférence sur les dernières tendances technologiques",
    },
    {
      id: 2,
      title: "Workshop Design Thinking",
      date: "2024-03-20",
      location: "En ligne",
      type: "online",
      description: "Apprenez les bases du Design Thinking",
    },
    {
      id: 3,
      title: "Meetup Développeurs",
      date: "2024-03-25",
      location: "Lyon",
      type: "physical",
      description: "Rencontrez d'autres développeurs passionnés",
    },

    {
        id: 4,
        title: "Attelier sur l'inteligence artificiel",
        date: "2024-03-25",
        location: "Lyon",
        type: "physical",
        description: "Rencontrez d'autres développeurs passionnés",
      },
  ];

  // États
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Effet pour filtrer les événements
  useEffect(() => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchTerm, events]); // Ajoutez `events` dans les dépendances (bien que constant ici).

  // Rendu
  return (
    <div className="bg-gray-50 min-h-screen">
    

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organisez vos événements facilement
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Créez, gérez et partagez vos événements en quelques clics
          </p>

          <div className="max-w-xl mx-auto mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Rechercher un événement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Rechercher
              </button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Événements à venir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length === 0 ? (
              <p className="text-gray-600 text-center col-span-full">
                Aucun événement trouvé
              </p>
            ) : (
              filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      event.type === "online"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    } mb-4`}
                  >
                    {event.type === "online" ? "En ligne" : "Présentiel"}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.location}</p>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <a
                    href={`/event/${event.id}`}
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                  >
                    Voir détails
                  </a>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
