'use client';

import { InternationalFigure } from '@/types';
import { useState } from 'react';

interface InternationalPersonCardProps {
     person: InternationalFigure;
     onClick?: () => void;
}

export default function InternationalPersonCard({ person, onClick }: InternationalPersonCardProps) {
     const [isFlipped, setIsFlipped] = useState(false);

     const categoryColors = {
          A: { bg: 'red-main', text: 'Gặp trực tiếp, hoạt động chung', badge: 'bg-red-main' },
          B: { bg: 'gold', text: 'Nghệ sĩ, trí thức cùng hệ giá trị', badge: 'bg-gold' },
          C: { bg: 'bronze', text: 'Bạn của Việt Nam', badge: 'bg-bronze' }
     };

     const categoryInfo = categoryColors[person.category as keyof typeof categoryColors];

     return (
          <div
               className="h-[480px] perspective-1000 group"
               onMouseEnter={() => setIsFlipped(true)}
               onMouseLeave={() => setIsFlipped(false)}
          >
               <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden">
                         <div className="h-full bg-gradient-to-br from-cream to-cream-dark rounded-xl shadow-2xl overflow-hidden border-2 border-gold/20 hover:border-gold/40 transition-all">
                              {/* Decorative Top Border */}
                              <div className={`h-2 bg-gradient-to-r from-${categoryInfo.bg} via-gold to-${categoryInfo.bg}`}></div>

                              <div className="p-6 h-full flex flex-col">
                                   {/* Category Badge */}
                                   <div className="flex justify-between items-start mb-4">
                                        <span className={`${categoryInfo.badge} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
                                             Nhóm {person.category}
                                        </span>
                                   </div>

                                   {/* Avatar Circle */}
                                   <div className="relative mx-auto mb-4">
                                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-gold-light to-gold border-4 border-${categoryInfo.bg} shadow-lg flex items-center justify-center overflow-hidden`}>
                                             <img
                                                  src={person.image}
                                                  alt={person.name}
                                                  className="w-full h-full object-cover"
                                                  onError={(e) => {
                                                       const target = e.target as HTMLImageElement;
                                                       target.style.display = 'none';
                                                       target.parentElement!.innerHTML = '<div class="text-red-dark text-5xl">👤</div>';
                                                  }}
                                             />
                                        </div>
                                        {/* Decorative Ring */}
                                        <div className="absolute -inset-2 rounded-full border-2 border-gold/30 animate-pulse"></div>
                                   </div>

                                   <div className="text-center flex-1 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold text-red-dark mb-2 group-hover:text-red-main transition-colors">
                                             {person.name}
                                        </h3>

                                        <p className="text-xs text-text-secondary mb-3 italic">
                                             {person.nameEn}
                                        </p>

                                        <div className="inline-block mx-auto px-4 py-1 bg-gradient-to-r from-gold/20 to-bronze/20 rounded-full mb-3">
                                             <p className="text-sm text-bronze-dark font-semibold">
                                                  {person.profession}
                                             </p>
                                        </div>

                                        <p className="text-xs text-text-secondary mb-2 font-medium">
                                             {person.nationality}
                                        </p>

                                        <p className="text-xs text-text-secondary mb-3">
                                             {person.birthYear} - {person.deathYear}
                                        </p>

                                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-3"></div>

                                        <p className="text-sm text-text-secondary italic leading-relaxed">
                                             Hover để xem thêm
                                        </p>
                                   </div>

                                   {/* Decorative Bottom Pattern */}
                                   <div className="flex justify-center space-x-2 mt-auto pt-4">
                                        <div className={`w-2 h-2 rounded-full bg-${categoryInfo.bg}`}></div>
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        <div className={`w-2 h-2 rounded-full bg-${categoryInfo.bg}`}></div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                         <div className={`h-full bg-gradient-to-br from-red-dark to-red-main rounded-xl shadow-2xl overflow-hidden border-2 border-gold/40`}>
                              {/* Decorative Top Border */}
                              <div className="h-2 bg-gradient-to-r from-gold via-gold-light to-gold"></div>

                              <div className="p-6 h-full flex flex-col text-white">
                                   <div className="flex justify-between items-start mb-4">
                                        <span className={`${categoryInfo.badge} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                                             Nhóm {person.category}
                                        </span>
                                   </div>

                                   <h3 className="text-xl font-bold text-gold-light mb-2 text-center">
                                        {person.name}
                                   </h3>

                                   <div className="flex-1 overflow-auto custom-scrollbar">
                                        <p className="text-sm leading-relaxed text-white/90 mb-4">
                                             {person.shortBio}
                                        </p>

                                        <div className="space-y-3">
                                             {/* Category Explanation - Visible on hover */}
                                             <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                                  <p className="text-xs text-gold-light font-semibold mb-1">
                                                       📋 Phân loại:
                                                  </p>
                                                  <p className="text-xs text-white/90 leading-relaxed">
                                                       {categoryInfo.text}
                                                  </p>
                                             </div>

                                             {person.meetingYear && (
                                                  <div className="flex items-start">
                                                       <span className="text-gold mr-2 mt-1">📅</span>
                                                       <p className="text-xs text-white/80 leading-relaxed">
                                                            <strong className="text-gold-light">Năm gặp:</strong> {person.meetingYear}
                                                       </p>
                                                  </div>
                                             )}

                                             {person.meetingPlace && (
                                                  <div className="flex items-start">
                                                       <span className="text-gold mr-2 mt-1">📍</span>
                                                       <p className="text-xs text-white/80 leading-relaxed">
                                                            <strong className="text-gold-light">Địa điểm:</strong> {person.meetingPlace}
                                                       </p>
                                                  </div>
                                             )}

                                             <div className="flex items-start">
                                                  <span className="text-gold mr-2 mt-1">✦</span>
                                                  <p className="text-xs text-white/80 leading-relaxed">
                                                       <strong className="text-gold-light">Mối quan hệ:</strong> {person.relationship}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <button
                                        onClick={onClick}
                                        className="mt-4 w-full py-3 bg-gradient-to-r from-gold to-gold-light text-red-dark rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                                   >
                                        <span>Xem chi tiết</span>
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                   </button>

                                   {/* Decorative Pattern */}
                                   <div className="flex justify-center space-x-2 mt-3">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        <div className="w-2 h-2 rounded-full bg-gold-light"></div>
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(212, 165, 116, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 165, 116, 0.5);
          border-radius: 2px;
        }
      `}</style>
          </div>
     );
}
