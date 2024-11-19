import Footer from '../components/Footer';
import '../app/globals.css';
import Navbar from '@/components/Navbar';


export const metadata = {
  title: 'My Next.js App',
  description: 'Next.js App with Navbar',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}