'use client';

import { TimelineEvent } from '@/types';
import { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
     event: TimelineEvent;
     isLeft?: boolean;
}

export default function TimelineItem({ event, isLeft = true }: TimelineItemProps) {
     const [isVisible, setIsVisible] = useState(false);
     const itemRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              setIsVisible(true);
                              observer.unobserve(entry.target);
                         }
                    });
               },
               { threshold: 0.2 }
          );

          if (itemRef.current) {
               observer.observe(itemRef.current);
          }

          return () => {
               if (itemRef.current) {
                    observer.unobserve(itemRef.current);
               }
          };
     }, []);

     return (
          <div
               ref={itemRef}
               className={`flex items-center mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
          >
               {/* Content */}
               <div
                    className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'} ${isVisible ? (isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'
                         }`}
                    style={{ animationDelay: '0.1s' }}
               >
                    <div className="bg-gradient-to-br from-white to-cream rounded-xl shadow-xl p-6 border-l-4 border-red-main hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                         {/* Shimmer effect on hover */}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                         {/* Period Badge */}
                         <div className={`inline-block px-4 py-2 bg-gradient-to-r from-gold to-gold-light text-red-dark rounded-lg font-bold text-sm mb-3 shadow-lg ${isLeft ? 'float-right' : 'float-left'} group-hover:scale-110 transition-transform duration-300`}>
                              {event.period}
                         </div>

                         <div className="clear-both relative z-10">
                              <h3 className="text-2xl font-bold text-red-dark mt-2 mb-3 group-hover:text-red-main transition-colors duration-300">
                                   {event.title}
                              </h3>
                              <p className="text-sm text-bronze-dark mb-3 flex items-center justify-end">
                                   <span className="inline-block mr-2 animate-float">📍</span>
                                   {event.location}
                              </p>
                              <p className="text-text-secondary leading-relaxed text-sm mb-4">
                                   {event.description}
                              </p>
                              <div className="mt-4 pt-4 border-t-2 border-gold/20">
                                   <p className="text-xs text-red-main font-semibold flex items-start">
                                        <span className="mr-2">✦</span>
                                        <span>{event.significance}</span>
                                   </p>
                              </div>
                         </div>

                         {/* Decorative corner */}
                         <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
               </div>

               {/* Timeline dot */}
               <div className="w-2/12 flex justify-center relative z-10">
                    {/* Outer ring with pulse */}
                    <div
                         className={`absolute w-12 h-12 bg-gold/20 rounded-full animate-pulse-glow ${isVisible ? 'animate-scale-in' : 'opacity-0'
                              }`}
                         style={{ animationDelay: '0.3s' }}
                    ></div>
                    {/* Dot */}
                    <div
                         className={`w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full border-4 border-red-main shadow-xl hover:scale-150 hover:rotate-180 transition-all duration-500 relative z-10 ${isVisible ? 'animate-scale-in' : 'opacity-0'
                              }`}
                         style={{ animationDelay: '0.2s' }}
                    >
                         {/* Inner glow */}
                         <div className="absolute inset-0 bg-gold-light rounded-full animate-ping opacity-75"></div>
                    </div>
               </div>

               {/* Empty space on other side */}
               <div className="w-5/12"></div>
          </div>
     );
}

