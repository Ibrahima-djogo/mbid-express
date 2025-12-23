import Link from 'next/link';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

const mockProduct = {
  id: '1',
  name: 'Laptop Dell XPS 15',
  price: 1299,
  category: 'Électronique',
  seller: 'TechStore',
  sellerId: '1',
  rating: 4.5,
  reviews: 128,
  description: 'Ordinateur portable haute performance avec écran 15 pouces, processeur Intel Core i7, 16GB RAM et 512GB SSD. Idéal pour le travail et les loisirs.',
  features: [
    'Processeur Intel Core i7 11ème génération',
    '16GB RAM DDR4',
    'SSD 512GB NVMe',
    'Écran 15.6" Full HD',
    'Carte graphique NVIDIA GTX 1650',
    'Windows 11 Pro',
  ],
  images: [
    'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
  ],
  stock: 12,
};

export default function ProductDetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={mockProduct.images[0]}
              alt={mockProduct.name}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <div className="grid grid-cols-4 gap-2">
              {mockProduct.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${mockProduct.name} ${idx + 1}`}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-500">{mockProduct.category}</span>
              <h1 className="text-3xl font-bold mt-2 mb-4">{mockProduct.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(mockProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {mockProduct.rating} ({mockProduct.reviews} avis)
                  </span>
                </div>
              </div>

              <div className="text-4xl font-bold text-blue-600 mb-4">
                {mockProduct.price}€
              </div>

              <p className="text-gray-600 mb-6">{mockProduct.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Caractéristiques :</h3>
                <ul className="space-y-2">
                  {mockProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Vendu par{' '}
                  <Link href={`/sellers/${mockProduct.sellerId}`} className="text-blue-600 hover:underline">
                    {mockProduct.seller}
                  </Link>
                </p>
                <p className="text-sm text-green-600 mt-1">
                  {mockProduct.stock} en stock
                </p>
              </div>

              <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Ajouter au panier
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
