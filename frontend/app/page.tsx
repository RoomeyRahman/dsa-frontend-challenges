'use client';

import React, { useState } from 'react';
import Modal from '../components/modal';
import ImageGallery from '../components/gallery';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    // Handle the confirmation logic here
    closeModal();
  };

  const modalContent = (
    <div className="p-6 space-y-6">
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
      </p>
    </div>
  );

  const modalButtons = (
    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
      <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
      <button onClick={closeModal} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Modal Title"
        content={modalContent}
        buttons={modalButtons}
      />
      <div className="App">
        <h1>Image Gallery</h1>
        <ImageGallery images={images} />
      </div>
    </main>
  )
}
