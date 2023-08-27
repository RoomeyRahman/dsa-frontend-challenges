'use client';

import React from 'react';
import CarouselSlider from '../../components/carousel-slider';
import Header from '../../components/header';

const App: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
  ];

  return (
    <div><Header />
      <div className="container mx-auto px-4 mt-8">
        <CarouselSlider images={images} />
      </div>
    </div>
  );
};

export default App;
