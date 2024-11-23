import Image from 'next/image';
import Typography from '../atoms/Typography';

interface CardProps {
  name: string;
  experience: string;
  tags: string[];
  profileImg: string;
  flagImg: string;
}

export default function Card({ name, experience, tags, profileImg, flagImg }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 w-72 md:w-72">
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 mb-4">
          <Image src={profileImg} alt={`${name}'s Profile Picture`} className="rounded-full" width={80} height={80} />
          <Image
            src={flagImg}
            alt="Country Flag"
            className="absolute bottom-0 right-0 w-6 h-4 rounded-sm"
            width={24}
            height={16}
          />
        </div>
        <h2 className="text-lg font-black">{name}</h2>
        <Typography className="text-blue-500 mb-7">
          {experience} • <span className="font-black">2y+</span>
        </Typography>
        <div className="flex flex-wrap gap-1 justify-center">
          {tags.map((tag, index) => (
            <span key={index} className="border border-gray-300 text-sm font-medium px-3 py-2 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
