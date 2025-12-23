import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Rechercher des produits, catégories..."
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        </div>
        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Toutes catégories</option>
          <option>Électronique</option>
          <option>Mobilier</option>
          <option>Accessoires</option>
        </select>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Rechercher
        </button>
      </div>
    </div>
  );
}
