
import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div 
            key={image.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div 
            className="max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] mx-auto object-contain"
            />
            <div className="text-white mt-4 text-center">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="mt-2 text-gray-300">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
