'use client';

import Image from 'next/image';
import CardSlider from './Cardslider';
import ChecklistSection from './ChecklistSection';
import ScrollingSection from './ScrollingSection';
import HeroSection from './HeroSection';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

export default function Header() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div
      className="bg-cover bg-center h-[1000px] md:h-auto px-8 md:px-20 lg:px-80 py-4"
      style={{
        backgroundImage: "url('/bg.png')",
      }}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <Image className="dark:invert" src="/logo.svg" alt="Hyperhire Logo" width={114} height={20} />
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <Typography color="white" className="cursor-pointer">
            채용
          </Typography>
          <Typography color="white" className="cursor-pointer">
            해외 개발자 활용 서비스
          </Typography>
        </div>
        <div>
          <Button onClick={handleClick} type="button" className="bg-white px-6 py-2 rounded-lg shadow-md">
            <Typography className="text-blue-500 font-semibold">문의하기</Typography>
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="w-full lg:w-1/2">
          <HeroSection />
        </div>
        <div className="w-full lg:w-1/2">
          <CardSlider />
        </div>
      </div>
      <ScrollingSection />
      <ChecklistSection />
    </div>
  );
}
