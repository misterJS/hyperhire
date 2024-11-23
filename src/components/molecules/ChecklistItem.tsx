import Typography from '../atoms/Typography';

export interface ChecklistItemProps {
  text: string;
}

export default function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="w-5 h-5 flex items-center justify-center bg-[#E8ECFF] rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-3 h-3 text-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <Typography size="sm" color="white" className="font-medium">
        {text}
      </Typography>
    </div>
  );
}
