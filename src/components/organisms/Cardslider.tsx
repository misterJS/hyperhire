'use client';

import { useState } from 'react';
import Card from '../molecules/Card';
import Button from '../atoms/Button';

const cards = [
  { id: 1, name: 'Abhishek Gupta', experience: '마케팅 • 2y+' },
  { id: 2, name: 'John Doe', experience: '개발자 • 5y+' },
  { id: 3, name: 'Jane Smith', experience: '디자이너 • 3y+' },
];

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center h-auto mt-20 md:h-[400px] py-10 w-full">
      <Button
        onClick={prevSlide}
        className="absolute bg-transparent left-0 md:left-10 text-white text-2xl font-bold z-10">
        {'<'}
      </Button>
      <div className="relative flex justify-center items-center w-full md:w-[697px]">
        {cards.map((card, index) => {
          const position =
            index === currentIndex
              ? 'z-20 scale-100'
              : index === (currentIndex + 1) % cards.length
                ? 'z-10 scale-90 translate-x-10 md:translate-x-20 opacity-50'
                : 'z-0 scale-90 -translate-x-10 md:-translate-x-20 opacity-50';

          return (
            <div key={card.id} className={`absolute transform transition-all duration-500 ${position}`}>
              <Card
                name={card.name}
                experience={card.experience}
                tags={['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성']}
                profileImg="/profile-picture.png"
                flagImg="/flag.png"
              />
            </div>
          );
        })}
      </div>
      <Button
        onClick={nextSlide}
        className="absolute bg-transparent right-0 md:right-10 text-white text-2xl font-bold z-10">
        {'>'}
      </Button>
    </div>
  );
}
