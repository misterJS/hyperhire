import Image from 'next/image';
import Typography from '../atoms/Typography';

type Service = {
  icon: string;
  title: string;
  link: string;
};

export default async function Footer() {
  const response = await fetch('https://hyperhire-azure.vercel.app/api/services');
  const services = await response.json();

  const details = [
    {
      title: '상호명',
      details: ['하이퍼하이어', 'Hyperhire India Private Limited'],
    },
    {
      title: '대표 CEO',
      details: ['김주현', 'Juhyun Kim'],
    },
    {
      title: '사업자등록번호 CIN',
      details: ['427-86-01187', 'U74999DL2018PTC328665'],
    },
    {
      title: '주소 ADDRESS',
      details: [
        '서울특별시 강남대로 479, 지하1층 223호',
        'D-31, Street number 31, Jagjeet Nagar, North East Delhi, New Delhi, 110031 India',
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Image src="/favicon.png" alt="Hyperhire Logo" width={176} height={32} />
            <Typography size="sm" className="text-gray-700 mt-4">
              우리는 국가와 경계를 넘어 최고의 인재를
              <br />
              연결해드립니다.
            </Typography>
            <Typography size="sm" className="text-gray-800 font-bold mt-2">
              010-0000-0000
            </Typography>
            <Typography size="sm" className="text-gray-800 font-bold">
              aaaa@naver.com
            </Typography>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {services.map((service: Service, index: number) => (
              <div key={index} className="bg-white rounded-lg p-4 flex flex-col text-left items-start space-y-3">
                <div className="p-1 rounded-md bg-slate-100">
                  <Image src={service.icon} alt={service.title} width={24} height={24} />
                </div>
                <Typography size="sm" className="font-black text-gray-700">
                  {service.title}
                </Typography>
                <div className="flex gap-2">
                  <a href={service.link} className="text-sm font-black text-gray-500">
                    바로가기
                  </a>
                  <Image src="/icon/icon-arrow.png" alt="Arrow Icon" width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">
          {details.map((detail, index) => (
            <div key={index}>
              <Typography size="sm" className="text-gray-800 font-bold mb-1">
                {detail.title}
              </Typography>
              {detail.details.map((item, idx) => (
                <Typography key={idx} size="sm" className={`text-gray-500 ${idx === 1 ? 'font-bold' : ''}`}>
                  {item}
                </Typography>
              ))}
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-500 pt-4">
          © <span className="font-bold">2023 hyperhire</span>
        </div>
      </div>
    </footer>
  );
}
