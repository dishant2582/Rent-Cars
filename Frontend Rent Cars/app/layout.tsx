import './globals.css'; // Your global styles
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import { GlobalProvider } from './context/GlobalContext'; // Import GlobalProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rent IT',
  description: 'A simple Car Rent Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <GlobalProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar /> {/* Navbar stays fixed */}
            <main className="flex-grow">{children}</main> {/* Dynamic content here */}
            <Footer /> {/* Footer stays fixed */}
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
