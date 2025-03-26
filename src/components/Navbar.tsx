
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMinistries = () => {
    setMinistriesOpen(!ministriesOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary-light font-semibold' : '';
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-montserrat font-bold text-primary">Marsabit Full Gospel</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`hover:text-primary-light transition-colors ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/about" className={`hover:text-primary-light transition-colors ${isActive('/about')}`}>
            About Us
          </Link>
          <Link to="/sermons" className={`hover:text-primary-light transition-colors ${isActive('/sermons')}`}>
            Sermons & Events
          </Link>
          
          <div className="relative group">
            <button 
              className={`flex items-center hover:text-primary-light transition-colors ${location.pathname.includes('/ministries') ? 'text-primary-light font-semibold' : ''}`}
              onClick={() => {}}
            >
              Ministries
              <ChevronDown className="ml-1 h-4 w-4 group-hover:hidden" />
              <ChevronUp className="ml-1 h-4 w-4 hidden group-hover:block" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50 opacity-0 scale-95 transform origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200">
              <Link to="/ministries" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">All Ministries</Link>
              <Link to="/ministries/prayer" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">Prayer Docket</Link>
              <Link to="/ministries/choir" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">Choir</Link>
              <Link to="/ministries/worship" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">Praise & Worship</Link>
              <Link to="/ministries/youth" className="block px-4 py-2 text-sm hover:bg-primary hover:text-white">Youth Ministry</Link>
            </div>
          </div>
          
          <Link to="/ict" className={`hover:text-primary-light transition-colors ${isActive('/ict')}`}>
            ICT
          </Link>
          <Link to="/gallery" className={`hover:text-primary-light transition-colors ${isActive('/gallery')}`}>
            Gallery
          </Link>
          <Link to="/donate" className={`hover:text-primary-light transition-colors ${isActive('/donate')}`}>
            Donate
          </Link>
          <Link to="/contact" className={`hover:text-primary-light transition-colors ${isActive('/contact')}`}>
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link to="/" className="py-2 text-lg hover:text-primary-light transition-colors">
            Home
          </Link>
          <Link to="/about" className="py-2 text-lg hover:text-primary-light transition-colors">
            About Us
          </Link>
          <Link to="/sermons" className="py-2 text-lg hover:text-primary-light transition-colors">
            Sermons & Events
          </Link>
          
          {/* Mobile Ministries Dropdown */}
          <div>
            <button 
              onClick={toggleMinistries}
              className="flex items-center justify-between w-full py-2 text-lg hover:text-primary-light transition-colors"
            >
              Ministries
              {ministriesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {ministriesOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/ministries" className="py-2 hover:text-primary-light transition-colors">
                  All Ministries
                </Link>
                <Link to="/ministries/prayer" className="py-2 hover:text-primary-light transition-colors">
                  Prayer Docket
                </Link>
                <Link to="/ministries/choir" className="py-2 hover:text-primary-light transition-colors">
                  Choir
                </Link>
                <Link to="/ministries/worship" className="py-2 hover:text-primary-light transition-colors">
                  Praise & Worship
                </Link>
                <Link to="/ministries/youth" className="py-2 hover:text-primary-light transition-colors">
                  Youth Ministry
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/ict" className="py-2 text-lg hover:text-primary-light transition-colors">
            ICT
          </Link>
          <Link to="/gallery" className="py-2 text-lg hover:text-primary-light transition-colors">
            Gallery
          </Link>
          <Link to="/donate" className="py-2 text-lg hover:text-primary-light transition-colors">
            Donate
          </Link>
          <Link to="/contact" className="py-2 text-lg hover:text-primary-light transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
