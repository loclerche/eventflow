"use client"
import React from "react";

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-black text-white">
        <img
          src="/assets/main.png" // Remplacez par une vraie image si nécessaire
          alt="Conférence"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold">Organisez vos événements facilement</h2>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-6 px-4 bg-green-900 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 flex flex-wrap gap-4 items-center">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Looking for</label>
            <select
              id="search"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">Choisire une option</option>
              <option value="events">Evenement</option>
              <option value="workshops">atelier</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Lieu</label>
            <select
              id="location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">Choisir le lieu</option>
              <option value="paris">libreville</option>
              <option value="lyon">Moanda</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Période</label>
            <input
              type="datetime-local"
              id="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <div>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"></button>
          </div>
        </div>
      </section>
    </div>
  );
}
