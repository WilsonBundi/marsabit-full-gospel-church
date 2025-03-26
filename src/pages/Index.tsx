import { Church, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import AnnouncementSlideshow from '../components/AnnouncementSlideshow';

const Index = () => {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "7:00 AM - 1:00 PM",
      location: "Marsabit Full Gospel Church",
      description: "Join us for prayer, Bible study, praise and worship, testimonies, and the Word of God.",
      imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    },
    {
      title: "Weekly Bible Study",
      date: "Every Wednesday",
      time: "5:30 PM - 7:00 PM",
      location: "Marsabit Full Gospel Church",
      description: "Men fellowship and diving deeper into God's Word with our community.",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    },
    {
      title: "Youth Fellowship",
      date: "Every Saturday",
      time: "4:00 PM - 6:00 PM",
      location: "Marsabit Full Gospel Church",
      description: "A time for young people to connect, grow, and participate in church cleaning.",
      imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    }
  ];

  // Sample announcements for slideshow
  const announcements = [
    {
      id: 1,
      title: "Sunday Service",
      content: "Join us for our service next Sunday at 9:00 AM.",
      imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    },
    {
      id: 2,
      title: "Choir Practice",
      content: "All choir members are requested to attend practice on Sunday at 2:00 PM.",
    },
    {
      id: 3,
      title: "Community Outreach",
      content: "We'll be having a meeting after the service. All are welcome to join.",
      imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    }
  ];

  // Weekly schedule data
  const weeklySchedule = [
    { day: "Monday", activity: "Prayers", time: "4:00 PM - 7:00 PM" },
    { day: "Tuesday", activity: "Praise & Worship", time: "4:00 PM - 7:00 PM" },
    { day: "Wednesday", activity: "Men Fellowship", time: "5:30 PM - 7:00 PM" },
    { day: "Thursday", activity: "Home Fellowship", time: "4:00 PM - 7:00 PM" },
    { day: "Friday", activity: "Intercessory Prayers", time: "4:00 PM - 7:00 PM" },
    { day: "Saturday", activity: "Youth Fellowship & Church Cleaning", time: "4:00 PM - 6:00 PM" },
    { day: "Sunday", activity: "Full Service", time: "7:00 AM - 1:00 PM" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
            alt="Church" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-primary/50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Welcome to Marsabit Full Gospel Church</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Join us in worship, fellowship, and community as we grow together in faith.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/about" className="btn-primary">
              About Us
            </Link>
            <Link to="/sermons" className="btn-secondary">
              Our Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-lg mb-8">
              The Marsabit Full Gospel Churches of Kenya are dedicated to sharing the love of Christ,
              building a community of believers, and positively impacting our community through faith,
              hope, and love.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="mx-auto bg-primary-light/10 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Church className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Worship</h3>
                <p>Experience uplifting worship services with inspiring messages and music.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto bg-primary-light/10 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p>Connect with others and build meaningful relationships in our church family.</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto bg-primary-light/10 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Outreach</h3>
                <p>Serve our community and spread the love of Christ through various ministries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Weekly Schedule</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Day</th>
                    <th className="py-3 px-4 text-left">Activity</th>
                    <th className="py-3 px-4 text-left">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">{item.day}</td>
                      <td className="py-3 px-4">{item.activity}</td>
                      <td className="py-3 px-4">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Sunday Service Schedule */}
            <div className="p-6 bg-primary/5 border-t border-primary/20">
              <h3 className="text-xl font-bold mb-4">Sunday Service Schedule</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium w-32">7:00 - 9:00 AM</span>
                  <span>Intercessory Prayers led by Prayer Docket & Bible Study led by Rev. Fabian</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">9:00 - 11:00 AM</span>
                  <span>Praise and Worship</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">11:00 - 12:00 PM</span>
                  <span>Testimonies, Welcoming New Members, Sunday School, Offering and Choir Presentation</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">12:00 - 1:00 PM</span>
                  <span>Sermon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-muted">
        <div className="container-custom">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/sermons" className="btn-primary inline-flex items-center">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Announcements</h2>
          <div className="max-w-4xl mx-auto">
            <AnnouncementSlideshow announcements={announcements} />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <h2 className="section-title">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                  alt="Pastor Haliso" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Pastor Haliso</h3>
                <p className="text-primary font-medium mb-3">Senior Pastor</p>
                <p className="text-muted-foreground">Leading our congregation with wisdom and compassion.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                  alt="Reverend Nthurima Fabian" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Rev. Nthurima Fabian</h3>
                <p className="text-primary font-medium mb-3">Associate Pastor</p>
                <p className="text-muted-foreground">Guiding our spiritual growth and development.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                  alt="Chairperson Mr. Mwirigi" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Chairperson Mr. Mwirigi</h3>
                <p className="text-primary font-medium mb-3">Church Chairman</p>
                <p className="text-muted-foreground">Overseeing church operations and administration.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Visit us this Sunday for worship and fellowship.
          </p>
          <Link to="/contact" className="btn-secondary inline-block">
            Get Directions
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
