import Typography from '@/components/atoms/Typography';
import Layout from '../components/templates/Layout';

interface People {
  id: number;
  name: string;
  body: string;
}

export default async function HomePage() {
  const response = await fetch('http://127.0.0.1:3000/api/peoples');
  const peoples = await response.json();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <Typography className="mb-4">This is the main content of the home page.</Typography>
      {peoples.map((people: People) => (
        <li key={people.id} className="mb-2 list-none">
          <h2 className="text-xl font-semibold">{people.name}</h2>
          <Typography>{people.body}</Typography>
        </li>
      ))}
    </Layout>
  );
}
