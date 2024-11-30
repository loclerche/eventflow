"use client"
import { useEffect, useState } from "react";

export default function Details() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    location: "",
    duration: "",
    capacity: 0,
    remainingSpots: 0,
  });

  useEffect(() => {
    // Simuler les données de l'événement
    const eventDetails = {
      title: "Conférence Tech Innovation 2024",
      date: "15 Mars 2024",
      time: "14:00",
      description:
        "Rejoignez-nous pour une journée exceptionnelle dédiée aux dernières innovations technologiques. Au programme : présentations d'experts, démonstrations pratiques et networking.",
      location: "Centre de Conférences - Paris",
      duration: "3 heures",
      capacity: 200,
      remainingSpots: 45,
    };

    setEventData(eventDetails);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-fadeIn">
          {/* Event Header */}
          <div className="relative h-64">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg
                className="h-24 w-24 text-white opacity-25"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h1 className="text-3xl font-bold text-white">{eventData.title}</h1>
              <p className="text-white mt-2">
                {eventData.date} à {eventData.time}
              </p>
            </div>
          </div>

          {/* Event Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Description
                  </h2>
                  <p className="text-gray-600">{eventData.description}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Informations pratiques
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <span className="text-gray-600">{eventData.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600">{eventData.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Modifier
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
