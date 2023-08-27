'use client';

import React from 'react';
import ImageGallery from '../../components/gallery';
import Header from '../../components/header';


interface Image {
  src: string;
  alt: string;
  title?: string;
}

const images: Image[] = [
  { src: 'https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80', alt: 'Image 1', title: 'Image 1' },
  { src: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Image 2', title: 'Image 2' },
  { src: 'https://images.unsplash.com/photo-1620053580376-3de604e91953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80', alt: 'Image 3', title: 'Image 3' },
  { src: 'https://images.unsplash.com/photo-1626444344029-5c680f7513c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80', alt: 'Image 4', title: 'Image 4' },
  { src: 'https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80', alt: 'Image 1', title: 'Image 1' },
  { src: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', alt: 'Image 2', title: 'Image 2' },
  { src: 'https://images.unsplash.com/photo-1620053580376-3de604e91953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80', alt: 'Image 3', title: 'Image 3' },
  { src: 'https://images.unsplash.com/photo-1626444344029-5c680f7513c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80', alt: 'Image 4', title: 'Image 4' },
];

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="App">
          <h1>Image Gallery</h1>
          <ImageGallery images={images} />
        </div>
      </div>
    </main>
  )
}
