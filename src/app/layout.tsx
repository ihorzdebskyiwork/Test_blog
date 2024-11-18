// app/layout.tsx
import Footer from './components/Footer';
import './globals.css';
import Navbar from '@/app/components/Navbar';


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
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}