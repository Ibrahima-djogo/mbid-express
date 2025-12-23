import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contactez-nous</h1>
        <p className="text-gray-600 text-center mb-12">
          Notre équipe est là pour vous aider. N'hésitez pas à nous contacter.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">contact@mbidexpress.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-gray-600">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Adresse</div>
                    <div className="text-gray-600">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-blue-600 mt-1" size={20} />
                  <div>
                    <div className="font-semibold">Horaires</div>
                    <div className="text-gray-600">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: 10h - 16h<br />
                      Dimanche: Fermé
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Besoin d'aide urgente ?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Consultez notre FAQ ou contactez notre support client disponible 24/7.
              </p>
              <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-50 transition-colors border border-blue-600">
                Accéder au support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
