
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementSlideshow from '../components/AnnouncementSlideshow';
import { Laptop, Smartphone, Wifi, Monitor } from 'lucide-react';

const ICT = () => {
  // Sample announcements for slideshow
  const announcements = [
    {
      id: 1,
      title: "Sunday Service",
      content: "Join us this  Sunday at 9:00 AM.",
      imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    },
    {
      id: 2,
      title: "Choir Practice",
      content: "All choir members are requested to remain after the service as from 2:00 PM.",
    },
    {
      id: 3,
      title: "Community Outreach",
      content: "We'll be having joint fellowship. Stay tuned we will update you. All are welcome to join.",
      imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    },
    {
      id: 4,
      title: "Bible Study Series",
      content: "New Bible study series  begins this Sunday at 8:30 AM.",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gray-900 text-white mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
            alt="Technology" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-black/50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="page-title text-white">ICT Docket</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Enhancing our ministry through technology and digital solutions.
          </p>
        </div>
      </section>

      {/* Announcements Slideshow */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Church Announcements</h2>
          <div className="max-w-4xl mx-auto">
            <AnnouncementSlideshow announcements={announcements} />
          </div>
        </div>
      </section>

      {/* ICT Services */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <h2 className="section-title">Our ICT Services</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Our ICT docket provides technical support and digital solutions to enhance the ministry 
            of our church, making information more accessible and our services more engaging.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Digital Presentations</h3>
              </div>
              <p>
                We create and manage digital presentations for church services, including 
                song lyrics, sermon notes, and announcements. Our team ensures smooth 
                transitions and high-quality visuals during worship.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Website Management</h3>
              </div>
              <p>
                We maintain the church website, keeping it updated with the latest information 
                about services, events, and ministries. The website serves as a central hub for 
                both members and visitors seeking information about our church.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Social Media</h3>
              </div>
              <p>
                Our team manages the church's social media presence, sharing updates, 
                inspirational content, and event information to reach both our congregation 
                and the wider community through digital platforms.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Audio/Visual Support</h3>
              </div>
              <p>
                We provide technical support for sound systems, recording equipment, and 
                livestreaming services. Our goal is to ensure that everyone can hear and 
                see clearly, whether in person or joining remotely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Meet Our ICT Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="aspect-square bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                  alt="Team Member" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Jeff</h3>
                <p className="text-primary font-medium mb-3">ICT Team Lead</p>
                <p className="text-muted-foreground">
                  Oversees all technical operations and coordinates the ICT team.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="aspect-square bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                  alt="Team Member" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Pius</h3>
                <p className="text-primary font-medium mb-3">Website Administrator</p>
                <p className="text-muted-foreground">
                  Manages website content and ensures information is up-to-date.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="aspect-square bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                  alt="Team Member" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Wilson</h3>
                <p className="text-primary font-medium mb-3">Audio/Visual Technician</p>
                <p className="text-muted-foreground">
                  Ensures sound quality and manages visual presentations during services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our ICT Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Are you passionate about technology and want to use your skills to serve the church? 
            We're always looking for volunteers to join our ICT team.
          </p>
          <a 
  href="https://wa.me/254714978525" 
  className="btn-secondary" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Contact the ICT Team
</a>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ICT;
