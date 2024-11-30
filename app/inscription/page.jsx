'use client'
import { useState } from "react";

export default function Inscription() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Données envoyées avec succès :", data);
        setSuccessMessage("Inscription réussie !");
        setErrorMessage("");
        setFormData({ name: "", email: "", password: "" }); // Réinitialiser le formulaire
      } else {
        setErrorMessage("Une erreur est survenue lors de l'inscription.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setErrorMessage("Impossible de soumettre les données. Vérifiez votre connexion.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-lime-600 mb-6">
          Inscription
        </h1>

        {/* Messages de retour */}
        {successMessage && (
          <p className="text-center text-green-600 font-medium">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-center text-red-600 font-medium">{errorMessage}</p>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ Nom */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
              className="w-full border border-lime-500 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* Champ Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Adresse email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre adresse email"
              required
              className="w-full border border-lime-500 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez votre mot de passe"
              required
              className="w-full border border-lime-500 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* Bouton S'inscrire */}
          <div>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-600 transition"
            >
              S'inscrire
            </button>
          </div>
        </form>

        {/* Lien vers connexion */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Vous avez déjà un compte ?{" "}
          <a
            href="/connexion"
            className="text-lime-500 hover:underline font-medium"
          >
            Connectez-vous
          </a>
        </p>
      </div>
    </div>
  );
}
