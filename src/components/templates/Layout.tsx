import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow md:h-auto px-8 md:px-20 lg:px-80 py-4">{children}</div>
      <Footer />
    </div>
  );
}
