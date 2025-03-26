
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Church, Check, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      toast({
        title: "Subscribed successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Failed to subscribe",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Church className="mr-2 h-5 w-5" />
              Marsabit Full Gospel
            </h3>
            <p className="mb-4">Spreading the message of hope, faith, and love to the community of Marsabit and beyond.</p>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4" />
              <span>Marsabit Town, Kenya</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 h-4 w-4" />
              <span>+254 714 978525</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <span>fabiannthurimanthurima@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center hover:text-secondary transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center hover:text-secondary transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="flex items-center hover:text-secondary transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Sermons & Events
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="flex items-center hover:text-secondary transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/donate" className="flex items-center hover:text-secondary transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Sunday Service
                </h4>
                <p className="ml-6">7:00 AM - 1:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Wednesday Men Fellowship
                </h4>
                <p className="ml-6">5:30 PM - 7:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Friday Intercessory Prayers
                </h4>
                <p className="ml-6">4:00 PM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter to receive updates on sermons, events, and church activities.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-gray-800 focus:ring-2 focus:ring-secondary focus:border-secondary"
                  disabled={isLoading || isSubscribed}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark"
                disabled={isLoading || isSubscribed}
              >
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                {isSubscribed && <Check className="h-4 w-4" />}
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-4 border-t border-white/20 text-center">
          <p>© {currentYear} Marsabit Full Gospel Churches of Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
