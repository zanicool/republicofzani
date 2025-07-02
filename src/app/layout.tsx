import '@/app/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Empire of Zani',
  description: 'The official site of the Empire of Zani',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <header className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="text-2xl font-bold tracking-widest text-red-600">
            EMPIRE OF ZANI
          </div>
          <nav className="flex gap-6 text-sm uppercase">
            <a href="#" className="hover:text-red-500">Home</a>
            <a href="#" className="hover:text-red-500">Games</a>
            <a href="#" className="hover:text-red-500">Shop</a>
            <a href="#" className="hover:text-red-500">About</a>
          </nav>
        </header>
        {children}
        <footer className="p-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2025 Empire of Zani. All rights reserved. 
        </footer>
      </body>
    </html>
  );
};

export default Layout;
