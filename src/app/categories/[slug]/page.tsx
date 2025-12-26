import Link from 'next/link';

const mockCategories = {
  electronique: {
    name: 'Électronique',
    description: 'Découvrez notre sélection de produits électroniques',
    products: [
      { id: '1', name: 'Laptop Dell XPS 15', price: 1299, image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' },
      { id: '2', name: 'iPhone 14 Pro', price: 999, image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: '5', name: 'Casque Audio Bluetooth', price: 149, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ],
  },
  mobilier: {
    name: 'Mobilier',
    description: 'Meubles et équipements pour votre maison',
    products: [
      { id: '3', name: 'Chaise de Bureau Ergonomique', price: 249, image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ],
  },
  accessoires: {
    name: 'Accessoires',
    description: 'Tous les accessoires dont vous avez besoin',
    products: [
      { id: '4', name: 'Montre Connectée', price: 199, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { id: '6', name: 'Sac à Dos Voyage', price: 79, image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ],
  },
};

export default function CategoryPage( {
  params,
  }: {
    params: { slug: string };
  }) {
  const category = mockCategories[params.slug as keyof typeof mockCategories] || mockCategories.electronique;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Tous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Plus populaires
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Prix croissant
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Prix décroissant
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.products.map((product) => (
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
  );
}
