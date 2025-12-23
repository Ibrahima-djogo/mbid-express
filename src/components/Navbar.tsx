import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MBID Express
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <Link href="/categories/electronique" className="text-gray-700 hover:text-blue-600 transition-colors">
              Électronique
            </Link>
            <Link href="/categories/mobilier" className="text-gray-700 hover:text-blue-600 transition-colors">
              Mobilier
            </Link>
            <Link href="/categories/accessoires" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accessoires
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/search">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search size={20} />
              </button>
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User size={20} />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
