
import { Users, Heart, Music, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MinistryCard from '../components/MinistryCard';

const Ministries = () => {
  // Define ministries data
  const ministries = [
    {
      title: "Prayer Docket",
      leader: "Joy",
      description: "Our prayer ministry is dedicated to intercession, spiritual warfare, and fostering a culture of prayer throughout the church.",
      icon: <Heart className="h-8 w-8" />,
      link: "/ministries/prayer"
    },
    {
      title: "Choir Ministry",
      leader: "Erick Gatobu",
      description: "Our choir leads the congregation in worship through powerful and uplifting music during services and special events.",
      icon: <Music className="h-8 w-8" />,
      link: "/ministries/choir"
    },
    {
      title: "Praise & Worship Team",
      leader: "Judy Mwangi",
      description: "The praise and worship team creates an atmosphere of worship, leading the congregation into God's presence.",
      icon: <Music className="h-8 w-8" />,
      link: "/ministries/worship"
    },
    {
      title: "Youth Ministry",
      leader: "Maina Stephen",
      description: "Our youth ministry provides spiritual guidance, mentorship, and fun activities for young people in our church.",
      icon: <Users className="h-8 w-8" />,
      link: "/ministries/youth"
    },
    {
      title: "Children's Ministry",
      leader: "Madam Florence",
      description: "We nurture children's spiritual growth through age-appropriate Bible lessons, activities, and worship.",
      icon: <BookOpen className="h-8 w-8" />,
      link: "/ministries/children"
    },
    {
      title: "Outreach & Missions",
      leader: "Minister Odamo",
      description: "Our mission teams spread the Gospel through community service, evangelism, and supporting those in need.",
      icon: <Calendar className="h-8 w-8" />,
      link: "/ministries/outreach"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gray-900 text-white mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
            alt="Church Ministry" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="page-title text-white">Our Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how you can grow, serve, and connect through our various ministries.
          </p>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Explore Our Ministries</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            At Marsabit Full Gospel Church, we believe that everyone has unique gifts and talents 
            to contribute to the body of Christ. Our ministries provide opportunities for spiritual 
            growth, service, and fellowship.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <MinistryCard key={index} {...ministry} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section bg-primary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Get Involved</h2>
            <p className="text-center text-lg mb-8">
              We believe that serving in ministry not only blesses others but also helps you grow 
              in your faith journey. Whether you're new to church or have been attending for years, 
              there's a place for you to serve.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">How to Join a Ministry</h3>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">1</span>
                  <div>
                    <h4 className="font-bold">Pray</h4>
                    <p>Ask God to guide you to the ministry where your gifts can be best used.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">2</span>
                  <div>
                    <h4 className="font-bold">Explore</h4>
                    <p>Learn about our different ministries and what each one does.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">3</span>
                  <div>
                    <h4 className="font-bold">Contact</h4>
                    <p>Reach out to the ministry leader or fill out our ministry interest form.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">4</span>
                  <div>
                    <h4 className="font-bold">Attend</h4>
                    <p>Visit a ministry meeting or event to see if it's the right fit for you.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">5</span>
                  <div>
                    <h4 className="font-bold">Serve</h4>
                    <p>Begin serving and growing alongside others in your chosen ministry.</p>
                  </div>
                </li>
              </ol>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="btn-primary">
                  Contact Us About Ministries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ministries;
