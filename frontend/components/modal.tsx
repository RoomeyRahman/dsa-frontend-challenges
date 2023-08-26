import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, content, buttons }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            closeModal();
          }
        };
    
        const handleClickOutside = (event: MouseEvent) => {
          const modalElement = document.querySelector('.my-modal');
    
          if (isOpen && modalElement && !modalElement.contains(event.target as Node)) {
            closeModal();
          }
        };
    
        if (isOpen) {
          document.addEventListener('keydown', handleEscape);
          document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen]);
    

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const closeModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <>
            <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`}>
                <div className="my-modal relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                                onClick={closeModal} 
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>

                        <div>{content}</div>
                        <div>{buttons}</div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
