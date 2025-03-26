
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
}

const EventCard = ({ title, date, time, location, description, imageUrl }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-start mb-2">
          <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5" />
          <div>
            <p className="font-medium">{date}</p>
            <p className="text-sm text-muted-foreground">{time}</p>
          </div>
        </div>
        <p className="mb-3 text-muted-foreground">{location}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
