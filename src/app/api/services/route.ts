import { NextResponse } from 'next/server';

const services = [
  {
    icon: '/icon/icon-code.png',
    title: '해외 개발자 원격 채용',
    link: '#',
  },
  {
    icon: '/icon/icon-avatar.png',
    title: '외국인 원격 채용 (커플링)',
    link: '#',
  },
  {
    icon: '/icon/icon-kor.png',
    title: '한국어 가능한 외국인 채용',
    link: '#',
  },
  {
    icon: '/icon/icon-gear.png',
    title: '해외 개발자 활용 서비스',
    link: '#',
  },
];

export async function GET() {
  return NextResponse.json(services);
}
