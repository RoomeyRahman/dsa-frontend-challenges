import React, { useState } from 'react';
import ImageThumbnail from './thumbnail';
import Lightbox from './lightbox';
import Masonry from 'react-masonry-css';

interface Image {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex: any) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const showPrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex: any) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
    }
  };

  return (
    <div className="gallery">
      <Masonry
        breakpointCols={{ default: 3, 768: 2, 576: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <ImageThumbnail
              src={image.src}
              alt={image.alt}
              title={image.title}
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </Masonry>
      {lightboxIndex !== null && (
        <Lightbox
          src={images[lightboxIndex].src}
          alt={images[lightboxIndex].alt}
          title={images[lightboxIndex].title}
          onClose={closeLightbox}
          onNext={showNextImage}
          onPrev={showPrevImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
