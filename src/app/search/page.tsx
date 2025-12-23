import Link from 'next/link';
import { Search } from 'lucide-react';

const mockProducts = [
  { id: '1', name: 'Laptop Dell XPS 15', price: 1299, category: 'Électronique', seller: 'TechStore', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' },
  { id: '2', name: 'iPhone 14 Pro', price: 999, category: 'Électronique', seller: 'MobileWorld', image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '3', name: 'Chaise de Bureau Ergonomique', price: 249, category: 'Mobilier', seller: 'FurnitureShop', image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '4', name: 'Montre Connectée', price: 199, category: 'Accessoires', seller: 'GadgetHub', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '5', name: 'Casque Audio Bluetooth', price: 149, category: 'Électronique', seller: 'AudioPro', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '6', name: 'Sac à Dos Voyage', price: 79, category: 'Accessoires', seller: 'TravelGear', image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Rechercher des produits..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Rechercher
          </button>
        </div>
        <p className="text-gray-600">{mockProducts.length} résultats trouvés</p>
      </div>

      <div className="flex gap-8">
        <aside className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4">Filtres</h3>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Catégories</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Électronique</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Mobilier</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Accessoires</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Prix</h4>
              <div className="space-y-2">
                <input type="range" min="0" max="2000" className="w-full" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>0€</span>
                  <span>2000€</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold text-xl">{product.price}€</span>
                      <span className="text-gray-500 text-sm">{product.seller}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
