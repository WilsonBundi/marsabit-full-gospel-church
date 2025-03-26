
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
}

interface AnnouncementSlideshowProps {
  announcements: Announcement[];
  autoplay?: boolean;
  interval?: number;
}

const AnnouncementSlideshow = ({ 
  announcements, 
  autoplay = true, 
  interval = 5000 
}: AnnouncementSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoplay || announcements.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, announcements.length, interval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length);
  };

  if (announcements.length === 0) {
    return (
      <div className="bg-muted rounded-lg p-8 text-center">
        <p>No announcements available at this time.</p>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative aspect-[16/9] md:aspect-[2/1]">
        {announcements.map((announcement, index) => (
          <div 
            key={announcement.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {announcement.imageUrl ? (
              <div className="relative h-full">
                <img 
                  src={announcement.imageUrl} 
                  alt={announcement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{announcement.title}</h3>
                  <p className="text-white/90 max-w-md">{announcement.content}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-full p-8 bg-gradient-to-r from-primary/90 to-primary-light/90">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">{announcement.title}</h3>
                <p className="text-white/90 text-center max-w-md">{announcement.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {announcements.length > 1 && (
        <>
          <button 
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Previous announcement"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Next announcement"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Indicators */}
      {announcements.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to announcement ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementSlideshow;
