'use client';

import { FamilyMember, InternationalFigure } from '@/types';

interface ChatPersonCardProps {
     person: FamilyMember | InternationalFigure;
     type: 'family' | 'international';
     onClick?: () => void;
}

export default function ChatPersonCard({ person, type, onClick }: ChatPersonCardProps) {
     const isFamilyMember = type === 'family';

     return (
          <div
               onClick={onClick}
               className="block group cursor-pointer"
          >
               <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cream to-cream-dark rounded-lg border-2 border-gold/30 hover:border-gold hover:shadow-lg transition-all duration-300 cursor-pointer">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                         <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-light to-gold border-2 border-red-main overflow-hidden shadow-md">
                              <img
                                   src={person.image}
                                   alt={person.name}
                                   className="w-full h-full object-cover"
                                   onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-red-dark text-2xl">👤</div>';
                                   }}
                              />
                         </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                         <h4 className="font-bold text-red-dark group-hover:text-red-main transition-colors text-sm truncate">
                              {person.name}
                         </h4>
                         <p className="text-xs text-text-secondary truncate">
                              {isFamilyMember
                                   ? (person as FamilyMember).relationship
                                   : (person as InternationalFigure).profession
                              }
                         </p>
                         <p className="text-xs text-bronze-dark">
                              {person.birthYear} - {person.deathYear}
                         </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0">
                         <svg
                              className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                         >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                         </svg>
                    </div>
               </div>
          </div>
     );
}
