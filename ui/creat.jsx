
"use client"
import { useState } from "react";

export default function CreateEvent() {
  const [eventType, setEventType] = useState("physical");
  const [locationLabel, setLocationLabel] = useState("Lieu*");
  const [locationPlaceholder, setLocationPlaceholder] = useState("");

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setEventType(value);

    if (value === "online") {
      setLocationLabel("Lien de l'événement*");
      setLocationPlaceholder("https://...");
    } else {
      setLocationLabel("Lieu*");
      setLocationPlaceholder("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const eventData = Object.fromEntries(formData.entries());

    try {
      console.log("Submitting event:", eventData);
      alert("Événement créé avec succès !");
      window.location.href = "/events";
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Une erreur est survenue lors de la création de l'événement.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
     

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Créer un événement
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Titre de l'événement*
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description*
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date*
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Heure*
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type d'événement*
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  onChange={handleTypeChange}
                  value={eventType}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="physical">Présentiel</option>
                  <option value="online">En ligne</option>
                  <option value="hybrid">Hybride</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="capacity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Capacité maximale*
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  min="1"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  {locationLabel}
                </label>
                <input
                  type={eventType === "online" ? "url" : "text"}
                  id="location"
                  name="location"
                  placeholder={locationPlaceholder}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={() => (window.location.href = "/events")}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Créer l'événement
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

