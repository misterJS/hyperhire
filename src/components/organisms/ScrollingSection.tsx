'use client';

import { useState, useEffect } from 'react';

const items = [
  { id: 1, title: '해외 마케팅', icon: '/icon/icon-marketing.png' },
  { id: 2, title: '퍼블리셔', icon: '/icon/icon-image.png' },
  { id: 3, title: '캐드원(제도사)', icon: '/icon/icon-box.png' },
  { id: 4, title: '해외 세일즈', icon: '/icon/icon-target.png' },
  { id: 5, title: '해외 CS', icon: '/icon/icon-call.png' },
];

export default function ScrollingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b pb-10 hidden md:block">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
          }}>
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[20%] flex justify-center px-4">
              <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-4 w-full flex items-center space-x-4">
                <div className="bg-white bg-opacity-40 w-12 h-12 flex items-center justify-center rounded-md">
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>
                <span className="text-white font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
