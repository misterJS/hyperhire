import { NextResponse } from 'next/server';

const peoples = [
  { id: 1, name: 'Kiko', body: 'This is the Kiko' },
  { id: 2, name: 'Nana', body: 'This is the Nana' },
  { id: 3, name: 'Mia', body: 'This is the Mia' },
];

export async function GET() {
  return NextResponse.json(peoples);
}
