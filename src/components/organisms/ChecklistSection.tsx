import Typography from '../atoms/Typography';
import ChecklistItem from '../molecules/ChecklistItem';

export default function ChecklistSection() {
  const items = ['한국어 능력', '업무 수행 능력', '검열 여부', '평판 조회'];

  return (
    <div className="text-white py-2 rounded-lg space-y-4 mt-40 md:hidden">
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <ChecklistItem key={index} text={item} />
        ))}
      </div>

      <Typography size="sm" className="font-bold text-yellow-300 underline cursor-pointer">
        개발자가 필요하신가요?
      </Typography>
    </div>
  );
}
