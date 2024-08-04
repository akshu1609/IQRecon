"use client"; // This directive marks the file as a Client Component

import Sidebar from '@/components/Layout/Sidebar/Sidebar';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean; // Optional prop to control sidebar visibility
  mainContentClassName?: string; // Optional prop for additional styling
}

export default function Layout({
  children,
  showSidebar = true,
  mainContentClassName = '',
}: LayoutProps) {
  const [isShowSidebar, setIsShowSidebar] = useState(showSidebar);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
          isShowSidebar ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 z-20`}
        style={{ zIndex: 20 }}
      >
        <Sidebar  />
      </div>

      <div className="flex flex-1 flex-col min-h-screen relative z-0">
        <Header sidebarOpen={isShowSidebar} setSidebarOpen={setIsShowSidebar} />

        {/* Main Content */}
        <main className={`flex-1 p-6 bg-gray-100 overflow-auto ${mainContentClassName}`}>
          {children}
        </main>

      
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsShowSidebar(!isShowSidebar)}
        className="fixed top-4 left-4 z-30 md:hidden text-gray-400 hover:text-white focus:outline-none"
        aria-label={isShowSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
      >
        {isShowSidebar ? (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
    </div>
  );
}
