"use client"
import React, { useState } from "react";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construction des données à envoyer
    const userData = {
      email,
      password,
    };

    try {
      // Requête POST vers l'API JSONPlaceholder (ou votre API réelle)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la connexion. Veuillez réessayer.");
      }

      const data = await response.json();
      console.log("Données envoyées avec succès :", data);

      // Affichage d'un message de confirmation
      setMessage("Connexion réussie !");
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Une erreur est survenue lors de la connexion.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Titre */}
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
          SE CONNECTER
        </h2>

        {/* Message d'état */}
        {message && (
          <p
            className={`text-center text-sm ${
              message.includes("réussie") ? "text-green-500" : "text-red-500"
            } mb-4`}
          >
            {message}
          </p>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
          {/* Champ Email */}
          <div className="mb-4 ">
            <label htmlFor="email" className="sr-only bg-yello-700">
              Email
            </label>
            <div className="flex items-center border border-green-500 rounded-full overflow-hidden">
              <span className="px-3 text-green-500">
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
                    d="M21.75 8.25l-9 6-9-6m18 0l-9 6-9-6m18 0v7.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V8.25m18 0L12 3l-9 5.25"
                  />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                placeholder="exemple de email koussou@gmail.com"
                className="w-full py-2 px-4 text-gray-700 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Champ Mot de Passe */}
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">
              Mot de passe
            </label>
            <div className="flex items-center border border-green-500 rounded-full overflow-hidden">
              <span className="px-3 text-green-500">
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
                    d="M16.5 10.5V9a4.5 4.5 0 00-9 0v1.5m9 0h1.125a1.125 1.125 0 011.125 1.125v7.125a1.125 1.125 0 01-1.125 1.125H6.375A1.125 1.125 0 015.25 18.75v-7.125A1.125 1.125 0 016.375 10.5H7.5m9 0h-9"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                placeholder="Mot de passe"
                className="w-full py-2 px-4 text-gray-700 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Bouton Connexion */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Connexion
          </button>

          {/* Lien S'enregistrer */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Vous n'avez pas de compte ?{" "}
            <a
              href="/inscription"
              className="text-green-500 hover:underline focus:outline-none"
            >
              S'enregistrer
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}



