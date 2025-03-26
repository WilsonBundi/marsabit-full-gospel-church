import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Headphones, Clock } from 'lucide-react';

const Sermons = () => {
  const [activeTab, setActiveTab] = useState("events");
  
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
      title: "Men Fellowship",
      date: "Every Wednesday",
      time: "5:30 PM - 7:00 PM",
      location: "Marsabit Full Gospel Church",
      description: "Dive deeper into God's Word with our men's fellowship.",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    },
    {
      title: "Youth Fellowship",
      date: "Every Saturday",
      time: "4:00 PM - 6:00 PM",
      location: "Marsabit Full Gospel Church",
      description: "A time for young people to connect, grow, and participate in church cleaning.",
      imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    },
    {
      title: "Praise and Worship",
      date: "Every Tuesday",
      time: "4:00 PM - 7:00 PM",
      location: "Marsabit Full Gospel Church",
      description: "Join us for an uplifting time of praise and worship.",
      imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    },
    {
      title: "Intercessory Prayers",
      date: "Every Friday",
      time: "4:00 PM - 7:00 PM",
      location: "Marsabit Full Gospel Church",
      description: "A dedicated time for intercessory prayer for our church, community, and world.",
      imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    }
  ];

  // Sample data for sermons
  const sermons = [
    {
      id: 1,
      title: "The Power of Faith",
      speaker: "Pastor Haliso",
      date: "June 4, 2023",
      description: "Exploring how faith can transform our lives and bring us closer to God.",
      audioUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    },
    {
      id: 2,
      title: "Walking in Love",
      speaker: "Rev. Nthurima Fabian",
      date: "May 28, 2023",
      description: "Understanding God's command to love one another and how to apply it in our daily lives.",
      audioUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    },
    {
      id: 3,
      title: "The Holy Spirit: Our Helper",
      speaker: "Pastor Haliso",
      date: "May 21, 2023",
      description: "Learning about the role of the Holy Spirit in guiding and empowering believers.",
      audioUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    },
    {
      id: 4,
      title: "Overcoming Challenges",
      speaker: "Rev. Nthurima Fabian",
      date: "May 14, 2023",
      description: "Finding strength in God when facing life's difficulties and obstacles.",
      audioUrl: "#",
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
      <section className="relative h-[40vh] flex items-center justify-center bg-gray-900 text-white mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
            alt="Church Interior" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="page-title text-white">Sermons & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay connected with our church through uplifting sermons and community events.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <Tabs defaultValue="events" onValueChange={setActiveTab} value={activeTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-96">
                <TabsTrigger value="events" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Events
                </TabsTrigger>
                <TabsTrigger value="schedule" className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule
                </TabsTrigger>
                <TabsTrigger value="sermons" className="flex items-center">
                  <Headphones className="h-4 w-4 mr-2" />
                  Sermons
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="events" className="animate-fade-in">
              <h2 className="section-title">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="animate-fade-in">
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
                  <h3 className="text-xl font-bold mb-4">Sunday Service Detailed Schedule</h3>
                  <ul className="space-y-3">
                    <li className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium w-32">7:00 - 9:00 AM</span>
                      <span>Intercessory Prayers led by Prayer Docket & Bible Study led by Rev. Fabian</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium w-32">9:00 - 11:00 AM</span>
                      <span>Praise and Worship</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium w-32">11:00 - 12:00 PM</span>
                      <span>Testimonies, Welcoming New Members, Sunday School, Offering, and Choir Presentation</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium w-32">12:00 - 1:00 PM</span>
                      <span>Sermon</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sermons" className="animate-fade-in">
              <h2 className="section-title">Recent Sermons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sermons.map((sermon) => (
                  <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="h-48 md:h-full">
                          <img 
                            src={sermon.imageUrl} 
                            alt={sermon.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                        <p className="text-primary font-medium mb-1">{sermon.speaker}</p>
                        <p className="text-muted-foreground mb-3">{sermon.date}</p>
                        <p className="mb-4">{sermon.description}</p>
                        <button className="btn-primary flex items-center">
                          <Headphones className="mr-2 h-4 w-4" />
                          Listen to Sermon
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us for Worship</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            We'd love to see you at our next service or event. All are welcome!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-secondary">
              Get Directions
            </button>
            <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-2 px-4 rounded transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sermons;
