import Link from 'next/link';

const mockProducts = [
  {
    id: '1',
    name: 'Laptop Dell XPS 15',
    price: 1299,
    category: 'Électronique',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'iPhone 14 Pro',
    price: 999,
    category: 'Électronique',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'Chaise de Bureau Ergonomique',
    price: 249,
    category: 'Mobilier',
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    name: 'Montre Connectée',
    price: 199,
    category: 'Accessoires',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '5',
    name: 'Casque Audio Bluetooth',
    price: 149,
    category: 'Électronique',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '6',
    name: 'Sac à Dos Voyage',
    price: 79,
    category: 'Accessoires',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '7',
    name: 'Tablette iPad Pro',
    price: 899,
    category: 'Électronique',
    image: 'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '8',
    name: 'Lampe de Bureau LED',
    price: 45,
    category: 'Mobilier',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function FeaturedProducts() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Produits en vedette</h2>
        <p className="text-gray-600">Découvrez notre sélection de produits populaires</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-500 uppercase">{product.category}</span>
                <h3 className="font-semibold text-lg mb-2 mt-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold text-xl">{product.price}€</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                    Voir
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/search">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Voir tous les produits
          </button>
        </Link>
      </div>
    </div>
  );
}
