export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenue sur MBID Express
        </h1>
        <p className="text-xl mb-8 text-blue-100">
          La marketplace qui connecte acheteurs et vendeurs en toute confiance
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Commencer à acheter
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Devenir vendeur
          </button>
        </div>
      </div>
    </div>
  );
}
