'use client';

import Link from 'next/link';
import TimelineItem from '@/components/TimelineItem';
import timelineData from '@/data/timeline.json';
import { TimelineEvent } from '@/types';

export default function TimelinePage() {
     const events = timelineData as TimelineEvent[];

     return (
          <div className="bg-cream">
               {/* Hero Section */}
               <section className="bg-gradient-to-br from-red-dark via-red-main to-bronze-dark text-white py-20 ">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto text-center">
                              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold-light">
                                   Dòng thời gian
                              </h1>
                              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
                              <p className="text-xl text-cream/90">
                                   Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh theo dòng thời gian
                              </p>
                         </div>
                    </div>
               </section>

               {/* Timeline Type Selection */}
               <section className="py-12 bg-white border-b-2 border-gold/20">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   <Link
                                        href="/timeline"
                                        className="bg-gradient-to-br from-red-main to-red-light text-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gold"
                                   >
                                        <div className="text-5xl mb-4">📖</div>
                                        <h3 className="text-2xl font-bold mb-3 text-gold-light">Cuộc đời Bác Hồ</h3>
                                        <p className="text-cream/90 leading-relaxed">
                                             Các giai đoạn trong cuộc đời và sự nghiệp cách mạng của Chủ tịch Hồ Chí Minh
                                        </p>
                                        <div className="mt-4 text-gold-light font-semibold">
                                             ← Đang xem
                                        </div>
                                   </Link>

                                   <Link
                                        href="/timeline/nhan-vat"
                                        className="bg-white text-red-dark rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gold/30 hover:border-gold group"
                                   >
                                        <div className="text-5xl mb-4">🌍</div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-red-light transition-colors">Gặp gỡ nhân vật quốc tế</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                             Timeline các cuộc gặp gỡ với nhân vật quốc tế theo thứ tự thời gian
                                        </p>
                                        <div className="mt-4 text-gold-dark font-semibold flex items-center">
                                             Xem timeline →
                                             <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                             </svg>
                                        </div>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Introduction */}
               <section className="py-16 bg-cream-dark ">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto text-center">
                              <p className="text-lg text-text-primary leading-relaxed">
                                   Từ khi sinh ra tại làng Kim Liên năm 1890 cho đến khi từ trần năm 1969,
                                   cuộc đời Chủ tịch Hồ Chí Minh là một hành trình vĩ đại từ người con
                                   nhà nho yêu nước đến lãnh tụ của dân tộc Việt Nam.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Timeline */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-6xl mx-auto">
                              {/* Timeline line */}
                              <div className="relative">
                                   {/* Vertical line connecting all events */}
                                   <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-main/30 via-gold/50 to-red-main/30 -translate-x-1/2"></div>

                                   {events.map((event, index) => (
                                        <TimelineItem
                                             key={event.id}
                                             event={event}
                                             isLeft={index % 2 === 0}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Summary Section */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl font-bold mb-8 text-[var(--navy-dark)] text-center">
                                   Tổng kết cuộc đời
                              </h2>

                              <div className="section-divider"></div>

                              <div className="space-y-6 text-text-primary leading-relaxed">
                                   <p className="text-lg">
                                        Suốt 79 năm cuộc đời, Chủ tịch Hồ Chí Minh đã dành trọn tâm huyết
                                        cho sự nghiệp giải phóng dân tộc và hạnh phúc của nhân dân.
                                   </p>

                                   <p className="text-lg text-text-secondary">
                                        Từ một người con nhà nho yêu nước, Người đã trải qua hành trình
                                        dài tìm đường cứu nước, từ châu Á sang châu Âu, châu Mỹ, châu Phi,
                                        để cuối cùng tìm thấy con đường đúng đắn: con đường cách mạng vô sản,
                                        con đường của Chủ nghĩa Mác - Lênin.
                                   </p>

                                   <p className="text-lg text-text-secondary">
                                        Người đã sáng lập và rèn luyện Đảng Cộng sản Việt Nam, lãnh đạo nhân dân
                                        ta giành độc lập dân tộc, xây dựng chế độ dân chủ nhân dân.
                                   </p>

                                   <p className="text-xl font-bold text-red-light">
                                        Tư tưởng, đạo đức, phong cách Hồ Chí Minh mãi là di sản vô giá của dân tộc,
                                        là kim chỉ nam soi đường cho sự nghiệp xây dựng và bảo vệ Tổ quốc.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

