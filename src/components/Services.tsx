import { Truck, Shield, CreditCard, HeadphonesIcon } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Livraison rapide',
      description: 'Livraison gratuite dès 50€ d\'achat',
    },
    {
      icon: Shield,
      title: 'Paiement sécurisé',
      description: 'Transactions 100% sécurisées',
    },
    {
      icon: CreditCard,
      title: 'Remboursement facile',
      description: '30 jours pour changer d\'avis',
    },
    {
      icon: HeadphonesIcon,
      title: 'Support 24/7',
      description: 'Une équipe à votre écoute',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Icon className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
