import React, { useState, useEffect } from 'react';

interface CarouselSliderProps {
    images: string[];
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    const goToNextSlide = () => {
        const nextSlide = (currentSlide + 1) % images.length;
        goToSlide(nextSlide);
    };

    const goToPrevSlide = () => {
        const prevSlide = (currentSlide - 1 + images.length) % images.length;
        goToSlide(prevSlide);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const handleDotClick = (slideIndex: number) => {
        goToSlide(slideIndex);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (event.key === 'ArrowRight') {
            goToNextSlide();
        }
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoPlaying) {
            interval = setInterval(goToNextSlide, 3000); // Auto-play interval (in milliseconds)
        }

        return () => {
            clearInterval(interval);
        };
    }, [isAutoPlaying, currentSlide]);

    return (
        <div
            className="carousel-slider relative overflow-hidden"
            onKeyDown={handleKeyDown}
            tabIndex={0} // Enable keyboard events on the component
        >
            <div className="slides flex">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide w-full h-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-center object-cover transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>
            <div className="navigation absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                    className="prev-btn px-2 py-1 ml-4 rounded-full bg-black bg-opacity-25 text-white text-2xl focus:outline-none"
                    onClick={goToPrevSlide}
                >
                    &lt;
                </button>
            </div>
            <div className="navigation absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                    className="next-btn px-2 py-1 mr-4 rounded-full bg-black bg-opacity-25 text-white text-2xl focus:outline-none"
                    onClick={goToNextSlide}
                >
                    &gt;
                </button>
            </div>
            <div className="indicators absolute bottom-4 left-0 right-0 flex justify-center">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${index === currentSlide ? 'bg-black' : 'bg-gray-300'
                            }`}
                        onClick={() => handleDotClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselSlider;
