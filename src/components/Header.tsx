'use client';

import Link from 'next/link';
import { useState } from 'react';
import VideoModal from './VideoModal';

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isVideoOpen, setIsVideoOpen] = useState(false);

     const menuItems = [
          { href: '/', label: 'Trang chủ' },
          { href: '/chu-tich-ho-chi-minh', label: 'Chủ tịch Hồ Chí Minh' },
          { href: '/gia-dinh', label: 'Gia đình' },
          { href: '/nhan-vat', label: 'Nhân vật quốc tế' },
          { href: '/timeline', label: 'Dòng thời gian' },
     ];

     return (
          <header className="bg-gradient-to-r from-red-dark via-red-main to-red-dark text-white shadow-2xl sticky top-0 z-50 border-b-2 border-gold/30">
               <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                         {/* Logo */}
                         <Link href="/" className="flex items-center space-x-3 group">
                              <div className="relative">
                                   <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-red-dark font-bold text-xl border-3 border-gold-light group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                        HCM
                                   </div>
                                   <div className="absolute -inset-1 rounded-full border-2 border-gold/30 group-hover:border-gold/60 transition-colors"></div>
                              </div>
                              <div className="hidden md:block">
                                   <h1 className="text-xl font-bold text-gold-light group-hover:text-gold transition-colors">Chủ tịch Hồ Chí Minh</h1>
                                   <p className="text-xs text-white/80">Tầm vóc và tư tưởng</p>
                              </div>
                         </Link>

                         {/* Desktop Menu */}
                         <nav className="hidden lg:flex space-x-2 items-center">
                              {menuItems.map((item) => (
                                   <Link
                                        key={item.href}
                                        href={item.href}
                                        className="px-5 py-2.5 rounded-lg hover:bg-red-light/50 transition-all text-sm font-semibold border-b-2 border-transparent hover:border-gold backdrop-blur-sm text-white hover:text-gold-light duration-300"
                                   >
                                        {item.label}
                                   </Link>
                              ))}
                              <button
                                   onClick={() => setIsVideoOpen(true)}
                                   className="px-5 py-2.5 rounded-lg bg-gold/90 hover:bg-gold text-red-dark font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gold/50 flex items-center gap-2"
                              >
                                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                   </svg>
                                   Video
                              </button>
                         </nav>

                         {/* Mobile Menu Button */}
                         <button
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                              className="lg:hidden p-2 rounded-lg hover:bg-red-light/50 transition-colors"
                              aria-label="Menu"
                         >
                              <svg
                                   className="w-6 h-6"
                                   fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24"
                              >
                                   {isMenuOpen ? (
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M6 18L18 6M6 6l12 12"
                                        />
                                   ) : (
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M4 6h16M4 12h16M4 18h16"
                                        />
                                   )}
                              </svg>
                         </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                         <nav className="lg:hidden pb-4 space-y-2 border-t border-gold/20 pt-4">
                              {menuItems.map((item) => (
                                   <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-4 py-3 rounded-lg hover:bg-red-light/50 transition-all text-sm font-medium text-white hover:text-gold-light border-l-3 border-transparent hover:border-gold"
                                   >
                                        {item.label}
                                   </Link>
                              ))}
                              <button
                                   onClick={() => {
                                        setIsVideoOpen(true);
                                        setIsMenuOpen(false);
                                   }}
                                   className="w-full px-4 py-3 rounded-lg bg-gold/90 hover:bg-gold text-red-dark font-bold text-sm transition-all flex items-center gap-2 justify-center"
                              >
                                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                   </svg>
                                   Xem Video
                              </button>
                         </nav>
                    )}
               </div>

               {/* Video Modal */}
               <VideoModal
                    isOpen={isVideoOpen}
                    onClose={() => setIsVideoOpen(false)}
                    videoUrl="https://youtu.be/66tLc02zoNs"
               />
          </header>
     );
}

