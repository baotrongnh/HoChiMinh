import { TimelineEvent } from '@/types';

interface TimelineItemProps {
     event: TimelineEvent;
     isLeft?: boolean;
}

export default function TimelineItem({ event, isLeft = true }: TimelineItemProps) {
     return (
          <div className={`flex items-center mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
               {/* Content */}
               <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-red-main hover:shadow-2xl transition-all duration-300 group">
                         {/* Period Badge */}
                         <div className={`inline-block px-4 py-2 bg-gradient-to-r from-gold to-gold-light text-red-dark rounded-lg font-bold text-sm mb-3 shadow-lg ${isLeft ? 'float-right' : 'float-left'}`}>
                              {event.period}
                         </div>

                         <div className="clear-both">
                              <h3 className="text-2xl font-bold text-red-dark mt-2 mb-3 group-hover:text-red-main transition-colors">
                                   {event.title}
                              </h3>
                              <p className="text-sm text-bronze-dark mb-3 flex items-center justify-end">
                                   <span className="inline-block mr-2">📍</span>
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
                    </div>
               </div>

               {/* Timeline dot */}
               <div className="w-2/12 flex justify-center relative z-10">
                    {/* Dot */}
                    <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full border-4 border-red-main shadow-xl hover:scale-125 transition-transform duration-300"></div>
               </div>

               {/* Empty space on other side */}
               <div className="w-5/12"></div>
          </div>
     );
}

