import React from 'react';

interface LightboxProps {
  src: string;
  alt: string;
  title?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  src,
  alt,
  title,
  onClose,
  onNext,
  onPrev,
}) => (
  <div className="lightbox fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
    <span className="close-btn absolute top-4 right-4 text-white text-xl cursor-pointer" onClick={onClose}>&times;</span>
    <div className="lightbox-content text-center">
      <img src={src} alt={alt} />
      {title && <div className="image-title text-white mt-2">{title}</div>}
    </div>
    <span className="prev-btn text-white text-3xl absolute left-4" onClick={onPrev}>&#10094;</span>
    <span className="next-btn text-white text-3xl absolute right-4" onClick={onNext}>&#10095;</span>
  </div>
);

export default Lightbox;
