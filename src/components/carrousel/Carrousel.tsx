import React, { useEffect } from 'react';
import EstudoEmGrupo from "../../assets/img/Estudo-em-grupo.jpg";
import Futuro from "../../assets/img/futuro.png";
import Leitura from "../../assets/img/leitura.jpg";

const Caroussel: React.FC = () => {
  useEffect(() => {
    type CarouselButton = HTMLButtonElement & { dataset: { carouselPrev?: string; carouselNext?: string } };
    type CarouselElement = HTMLElement & {
      dataset: { carousel?: string };
      querySelectorAll: (selector: string) => NodeListOf<HTMLDivElement & { dataset: { carouselItem?: string } }>;
    };
    type SlideElement = HTMLDivElement & { dataset: { carouselItem?: string } };

    const prevButton = document.querySelector('[data-carousel-prev]') as CarouselButton;
    const nextButton = document.querySelector('[data-carousel-next]') as CarouselButton;
    const carousel = document.querySelector('[data-carousel="static"]') as CarouselElement;
    const slides = Array.from(carousel.querySelectorAll('[data-carousel-item]')) as SlideElement[];

    let currentIndex = slides.findIndex((slide) => slide.dataset.carouselItem === 'active');

    const showCurrentSlide = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle('hidden', index !== currentIndex);
      });
    };

    prevButton.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showCurrentSlide();
    });

    nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1 + slides.length) % slides.length;
      showCurrentSlide();
    });
  }, []);

  return (
    <div id="animation-carousel" className="relative w-full p-10" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="block ease-linear" data-carousel-item>
          <img src={EstudoEmGrupo} className="absolute object-cover max-w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-200 ease-linear" data-carousel-item>
          <img src={Futuro} className="absolute object-cover max-w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-200 ease-linear" data-carousel-item="active">
          <img src={Leitura} className="absolute object-cover max-w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Caroussel;
