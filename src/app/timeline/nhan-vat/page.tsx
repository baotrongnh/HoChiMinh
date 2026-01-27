'use client';

import internationalData from '@/data/internationalFigures.json';
import { InternationalFigure } from '@/types';

export default function InternationalTimelinePage() {
     const figures = (internationalData as InternationalFigure[])
          .filter(f => f.meetingYear !== null)
          .sort((a, b) => (a.meetingYear || 0) - (b.meetingYear || 0));

     return (
          <div className="bg-cream">
               {/* Hero Section */}
               <section className="bg-gradient-to-br from-red-dark via-red-main to-bronze-dark text-white py-20 ">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto text-center">
                              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold-light">
                                   Dòng thời gian gặp gỡ
                              </h1>
                              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
                              <p className="text-xl text-cream/90">
                                   Những cuộc gặp gỡ lịch sử của Chủ tịch Hồ Chí Minh với các nhân vật quốc tế
                              </p>
                         </div>
                    </div>
               </section>

               {/* Timeline */}
               <section className="py-16 bg-cream-dark ">
                    <div className="container mx-auto px-4">
                         <div className="max-w-5xl mx-auto">
                              {/* Vertical Timeline */}
                              <div className="relative">
                                   {/* Timeline Line */}
                                   <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-main via-gold to-red-main opacity-30"></div>

                                   {figures.map((figure, index) => (
                                        <div key={figure.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                             {/* Content Card */}
                                             <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                                  <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-gold/20 hover:border-gold/60 hover:shadow-2xl transition-all duration-300 group">
                                                       {/* Year Badge */}
                                                       <div className={`inline-block px-4 py-2 bg-gradient-to-r from-red-main to-red-light text-gold-light rounded-lg font-bold text-lg mb-3 shadow-lg ${index % 2 === 0 ? 'float-right' : 'float-left'}`}>
                                                            {figure.meetingYear}
                                                       </div>

                                                       <div className="clear-both">
                                                            <h3 className="text-2xl font-bold text-red-dark mb-2 group-hover:text-red-light transition-colors">
                                                                 {figure.name}
                                                            </h3>
                                                            <p className="text-sm text-bronze-dark font-medium mb-2">
                                                                 {figure.nameEn}
                                                            </p>
                                                            <p className="text-xs text-gold-dark font-semibold mb-3">
                                                                 {figure.profession} • {figure.nationality}
                                                            </p>

                                                            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent my-3"></div>

                                                            <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                                                                 <strong className="text-red-main">Địa điểm:</strong> {figure.meetingPlace}
                                                            </p>

                                                            <p className="text-sm text-text-secondary leading-relaxed italic">
                                                                 {figure.meetingContext}
                                                            </p>

                                                            <div className="mt-4 pt-3 border-t border-gold/20">
                                                                 <p className="text-xs text-bronze-dark font-medium">
                                                                      {figure.relationship}
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Timeline Dot */}
                                             <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                                  <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full border-4 border-red-main shadow-xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                                                       <div className="w-3 h-3 bg-red-main rounded-full"></div>
                                                  </div>
                                             </div>

                                             {/* Empty Space */}
                                             <div className="w-5/12"></div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Categories Summary */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl font-bold text-center mb-12 text-red-dark">
                                   Phân loại các cuộc gặp gỡ
                              </h2>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                   <div className="bg-gradient-to-br from-red-light to-red-main text-white rounded-xl p-6 shadow-xl">
                                        <h3 className="text-2xl font-bold mb-3 text-gold-light">Nhóm A</h3>
                                        <p className="text-sm text-cream/90 leading-relaxed">
                                             Gặp trực tiếp và hoạt động chung trong phong trào cách mạng
                                        </p>
                                        <div className="mt-4 text-3xl">🤝</div>
                                   </div>

                                   <div className="bg-gradient-to-br from-gold to-gold-light text-red-dark rounded-xl p-6 shadow-xl">
                                        <h3 className="text-2xl font-bold mb-3">Nhóm B</h3>
                                        <p className="text-sm leading-relaxed opacity-90">
                                             Nghệ sĩ, trí thức cùng hệ giá trị nhân văn và hòa bình
                                        </p>
                                        <div className="mt-4 text-3xl">🎨</div>
                                   </div>

                                   <div className="bg-gradient-to-br from-bronze to-bronze-dark text-white rounded-xl p-6 shadow-xl">
                                        <h3 className="text-2xl font-bold mb-3 text-gold-light">Nhóm C</h3>
                                        <p className="text-sm text-cream/90 leading-relaxed">
                                             Bạn của Việt Nam, ủng hộ và đồng hành với Hồ Chí Minh
                                        </p>
                                        <div className="mt-4 text-3xl">🌟</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

