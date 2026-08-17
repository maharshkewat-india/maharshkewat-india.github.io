import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen overflow-x-clip bg-[#06080d] text-slate-100"><Navbar /><main>{children}</main><Footer /></div>;
}
