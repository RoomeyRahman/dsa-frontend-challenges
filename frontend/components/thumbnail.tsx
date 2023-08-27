import React from 'react';

interface ImageThumbnailProps {
  src: string;
  alt: string;
  title?: string;
  onClick: () => void;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  src,
  alt,
  title,
  onClick,
}) => {
  const isVertical = false; // Determine if the image is vertical (e.g., by checking its dimensions)

  return (
    <div className="thumbnail relative group">
      <div
        className={`aspect-w-4 aspect-h-3 ${
          isVertical ? 'h-48' : 'bg-gray-200'
        } flex items-center justify-center`}
      >
        <img
          src={src}
          alt={alt}
          onClick={onClick}
          className={`h-auto max-w-full rounded-lg object-cover max-h-full cursor-pointer ${
            isVertical ? 'h-full' : ''
          }`}
        />
      </div>
      {title && (
        <div className="thumbnail-title bg-black bg-opacity-50 p-2 absolute bottom-0 left-0 right-0 text-white text-center">
          {title}
        </div>
      )}
    </div>
  );
};

export default ImageThumbnail;
