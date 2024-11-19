import { Destination } from '@/types/destination';
import Image from 'next/image';

const DestinationCard = ({ destination }: { destination: Destination }) => (
  <div
    key={destination.id}
    className="group border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  >
    <Image
      src={destination.image}
      width={500}
      height={500}
      alt={destination.name}
      className="w-full h-56 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{destination.name}</h3>
      <p className="mt-2 text-gray-600">{destination.description}</p>
    </div>
  </div>
);

export default DestinationCard;
