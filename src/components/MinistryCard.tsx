
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MinistryCardProps {
  title: string;
  leader: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const MinistryCard = ({ title, leader, description, icon, link }: MinistryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-center text-primary font-medium mb-3">Led by {leader}</p>
        <p className="text-muted-foreground text-center mb-4">{description}</p>
        <div className="text-center">
          <Link 
            to={link}
            className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MinistryCard;
