
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, GalleryHorizontal } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  
  // Sample data for gallery images
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      title: "Sunday Worship Service",
      description: "Our congregation gathered for Sunday worship."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      title: "Youth Fellowship",
      description: "Young people engaging in fellowship and fun activities."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      title: "Church Building",
      description: "Our beautiful church building in Marsabit."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
      title: "Community Outreach",
      description: "Serving the community through outreach programs."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      title: "Choir Performance",
      description: "Our choir leading worship during a special service."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      title: "Prayer Meeting",
      description: "Gathering for corporate prayer and intercession."
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      title: "Children's Ministry",
      description: "Children enjoying Bible lessons and activities."
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
      title: "Leadership Meeting",
      description: "Church leaders discussing vision and planning."
    },
  ];

  // Sample data for videos
  const videoGallery = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      title: "Worship Service Highlights",
      description: "Highlights from our recent worship service."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      title: "Pastor's Message",
      description: "Pastor Haliso's sermon on faith and perseverance."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      title: "Youth Choir Performance",
      description: "Special performance by our youth choir."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
      title: "Church Anniversary Celebration",
      description: "Highlights from our church's anniversary celebration."
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
            alt="Gallery" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="page-title text-white">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our photo and video gallery showcasing church activities and events.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <Tabs defaultValue="photos" onValueChange={setActiveTab} value={activeTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-64">
                <TabsTrigger value="photos" className="flex items-center">
                  <Image className="h-4 w-4 mr-2" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center">
                  <GalleryHorizontal className="h-4 w-4 mr-2" />
                  Videos
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="photos" className="animate-fade-in">
              <h2 className="section-title">Photo Gallery</h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Browse through images capturing special moments and activities in our church.
              </p>
              <ImageGallery images={galleryImages} />
            </TabsContent>
            
            <TabsContent value="videos" className="animate-fade-in">
              <h2 className="section-title">Video Gallery</h2>
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                Watch videos of our services, special events, and ministry activities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoGallery.map((video) => (
                  <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={video.url} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          className="bg-primary/80 hover:bg-primary text-white rounded-full p-4 transition-colors"
                          aria-label="Play video"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{video.title}</h3>
                      <p className="text-muted-foreground">{video.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Photos</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Do you have photos or videos from church events? We'd love to include them in our gallery.
          </p>
          <button className="btn-secondary">
            Submit Your Media
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
