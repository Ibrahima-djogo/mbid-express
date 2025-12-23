import Link from 'next/link';
import { Star, MapPin, Package, Award } from 'lucide-react';

const mockSeller = {
  id: '1',
  name: 'TechStore',
  rating: 4.8,
  reviews: 342,
  location: 'Paris, France',
  memberSince: '2020',
  description: 'Spécialiste en produits électroniques et high-tech. Nous offrons une garantie de qualité sur tous nos produits.',
  totalProducts: 156,
  totalSales: 2847,
  products: [
    { id: '1', name: 'Laptop Dell XPS 15', price: 1299, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' },
    { id: '2', name: 'iPhone 14 Pro', price: 999, image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: '5', name: 'Casque Audio Bluetooth', price: 149, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ],
};

export default function SellerProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-start gap-8">
          <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            {mockSeller.name.charAt(0)}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{mockSeller.name}</h1>

            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(mockSeller.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {mockSeller.rating} ({mockSeller.reviews} avis)
                </span>
              </div>

              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{mockSeller.location}</span>
              </div>

              <div className="flex items-center text-gray-600">
                <Award size={16} className="mr-1" />
                <span className="text-sm">Membre depuis {mockSeller.memberSince}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{mockSeller.description}</p>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{mockSeller.totalProducts}</div>
                <div className="text-sm text-gray-600">Produits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{mockSeller.totalSales}</div>
                <div className="text-sm text-gray-600">Ventes</div>
              </div>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contacter
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Produits du vendeur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockSeller.products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <span className="text-blue-600 font-bold text-xl">{product.price}€</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Avis clients</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="border-b pb-6 last:border-b-0">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold">Client {review}</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Excellent vendeur, produits de qualité et livraison rapide. Je recommande !
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
