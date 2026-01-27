'use client';

import { useState, useMemo, useEffect } from 'react';
import internationalData from '@/data/internationalFigures.json';
import { InternationalFigure } from '@/types';
import InternationalPersonCard from '@/components/InternationalPersonCard';

export default function InternationalFiguresPage() {
     const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'A' | 'B' | 'C'>('ALL');
     const [selectedPerson, setSelectedPerson] = useState<InternationalFigure | null>(null);

     const figures = internationalData as InternationalFigure[];

     // Handle ESC key to close modal
     useEffect(() => {
          const handleEscape = (e: KeyboardEvent) => {
               if (e.key === 'Escape') setSelectedPerson(null);
          };

          if (selectedPerson) {
               document.addEventListener('keydown', handleEscape);
               document.body.style.overflow = 'hidden';
          }

          return () => {
               document.removeEventListener('keydown', handleEscape);
               document.body.style.overflow = 'unset';
          };
     }, [selectedPerson]);

     const filteredFigures = useMemo(() => {
          if (selectedCategory === 'ALL') return figures;
          return figures.filter(fig => fig.category === selectedCategory);
     }, [selectedCategory, figures]);

     const categoryGroups = {
          A: figures.filter(f => f.category === 'A'),
          B: figures.filter(f => f.category === 'B'),
          C: figures.filter(f => f.category === 'C'),
     };

     return (
          <div className="bg-cream">
               {/* Hero Section */}
               <section className="bg-gradient-to-r from-red-dark to-red-main text-white py-20">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto text-center">
                              <h1 className="text-5xl font-bold mb-6 text-gold-light">
                                   Nhân vật quốc tế
                              </h1>
                              <div className="h-1 w-32 bg-gold mx-auto mb-6"></div>
                              <p className="text-xl text-white/95">
                                   Những người Bác Hồ gặp gỡ và gắn bó trong hành trình cách mạng
                              </p>
                         </div>
                    </div>
               </section>

               {/* Category Explanation */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl font-bold mb-8 text-red-dark text-center">
                                   Phân loại nhân vật
                              </h2>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                   <div className="bg-cream rounded-lg p-6 border-t-4 border-red-main shadow-lg hover:shadow-xl transition-all">
                                        <div className="text-center mb-4">
                                             <div className="w-16 h-16 bg-red-main text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                                                  A
                                             </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-red-dark mb-3 text-center">
                                             Gặp trực tiếp, hoạt động chung
                                        </h3>
                                        <p className="text-text-primary text-base text-center leading-relaxed">
                                             Những người đồng chí cùng Bác hoạt động cách mạng,
                                             gặp mặt và làm việc trực tiếp
                                        </p>
                                        <p className="text-red-main text-base font-bold mt-4 text-center">
                                             {categoryGroups.A.length} nhân vật
                                        </p>
                                   </div>

                                   <div className="bg-cream rounded-lg p-6 border-t-4 border-gold shadow-lg hover:shadow-xl transition-all">
                                        <div className="text-center mb-4">
                                             <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                                                  B
                                             </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-red-dark mb-3 text-center">
                                             Nghệ sĩ, trí thức cùng hệ giá trị
                                        </h3>
                                        <p className="text-text-primary text-base text-center leading-relaxed">
                                             Các nghệ sĩ, nhà văn, trí thức lớn cùng thời, có chung
                                             hệ giá trị nhân văn, hòa bình
                                        </p>
                                        <p className="text-gold-dark text-base font-bold mt-4 text-center">
                                             {categoryGroups.B.length} nhân vật
                                        </p>
                                   </div>

                                   <div className="bg-cream rounded-lg p-6 border-t-4 border-bronze shadow-lg hover:shadow-xl transition-all">
                                        <div className="text-center mb-4">
                                             <div className="w-16 h-16 bg-bronze text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                                                  C
                                             </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-red-dark mb-3 text-center">
                                             Bạn của Việt Nam
                                        </h3>
                                        <p className="text-text-primary text-base text-center leading-relaxed">
                                             Những người bạn quốc tế ủng hộ Việt Nam, đấu tranh cho
                                             độc lập và hòa bình
                                        </p>
                                        <p className="text-bronze-dark text-base font-bold mt-4 text-center">
                                             {categoryGroups.C.length} nhân vật
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Filter Tabs */}
               <section className="py-8 bg-cream-dark">
                    <div className="container mx-auto px-4">
                         <div className="flex flex-wrap justify-center gap-4">
                              {['ALL', 'A', 'B', 'C'].map((cat) => (
                                   <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat as any)}
                                        className={`px-6 py-3 rounded-lg font-bold text-base transition-all ${selectedCategory === cat
                                             ? 'bg-red-main text-white shadow-xl scale-105'
                                             : 'bg-white text-text-primary hover:bg-cream hover:text-red-main hover:shadow-lg'
                                             }`}
                                   >
                                        {cat === 'ALL' ? 'Tất cả' : `Nhóm ${cat}`}
                                        {cat !== 'ALL' && (
                                             <span className="ml-2 text-sm">
                                                  ({cat === 'A' ? categoryGroups.A.length :
                                                       cat === 'B' ? categoryGroups.B.length :
                                                            categoryGroups.C.length})
                                             </span>
                                        )}
                                   </button>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Figures Grid - 3D Flip Cards */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <h2 className="text-3xl font-bold text-center mb-12 text-red-dark">
                              {selectedCategory === 'ALL'
                                   ? 'Tất cả nhân vật'
                                   : `Nhóm ${selectedCategory} - ${categoryGroups[selectedCategory].length} nhân vật`}
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                              {filteredFigures.map((figure) => (
                                   <InternationalPersonCard
                                        key={figure.id}
                                        person={figure}
                                        onClick={() => setSelectedPerson(figure)}
                                   />
                              ))}
                         </div>
                    </div>
               </section>

               {/* Modal for Selected Person */}
               {selectedPerson && (
                    <div
                         className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
                         onClick={() => setSelectedPerson(null)}
                    >
                         <div
                              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modalSlideIn"
                              onClick={(e) => e.stopPropagation()}
                         >
                              <div className="sticky top-0 bg-gradient-to-r from-red-dark to-red-main border-b-4 border-gold p-6 flex justify-between items-start shadow-lg z-10">
                                   <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                             <h2 className="text-3xl font-bold text-white">
                                                  {selectedPerson.name}
                                             </h2>
                                             <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-lg animate-bounce-small ${selectedPerson.category === 'A' ? 'bg-red-main' :
                                                  selectedPerson.category === 'B' ? 'bg-gold' :
                                                       'bg-bronze'
                                                  }`}>
                                                  Nhóm {selectedPerson.category}
                                             </span>
                                        </div>
                                        <p className="text-gold-light text-lg">{selectedPerson.nameEn}</p>
                                   </div>
                                   <button
                                        onClick={() => setSelectedPerson(null)}
                                        className="text-white/90 hover:text-white hover:bg-white/20 text-4xl ml-4 w-12 h-12 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 flex items-center justify-center"
                                        title="Đóng (ESC)"
                                        aria-label="Đóng modal"
                                   >
                                        ×
                                   </button>
                              </div>

                              <div className="p-6 space-y-6">
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base">
                                        <div>
                                             <p className="text-text-secondary mb-1 font-semibold">Nghề nghiệp</p>
                                             <p className="font-bold text-red-dark">{selectedPerson.profession}</p>
                                        </div>
                                        <div>
                                             <p className="text-text-secondary mb-1 font-semibold">Quốc tịch</p>
                                             <p className="font-bold text-red-dark">{selectedPerson.nationality}</p>
                                        </div>
                                        <div>
                                             <p className="text-text-secondary mb-1 font-semibold">Năm sinh - mất</p>
                                             <p className="font-bold text-red-dark">{selectedPerson.birthYear} - {selectedPerson.deathYear}</p>
                                        </div>
                                        {selectedPerson.meetingYear && (
                                             <div>
                                                  <p className="text-text-secondary mb-1 font-semibold">Năm gặp</p>
                                                  <p className="font-bold text-red-main">{selectedPerson.meetingYear}</p>
                                             </div>
                                        )}
                                   </div>

                                   <div>
                                        <h3 className="text-2xl font-bold text-red-dark mb-3">
                                             Mối quan hệ
                                        </h3>
                                        <p className="text-text-primary text-base leading-relaxed">
                                             {selectedPerson.relationship}
                                        </p>
                                   </div>

                                   {selectedPerson.meetingPlace && (
                                        <div>
                                             <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                  Bối cảnh gặp gỡ
                                             </h3>
                                             <p className="text-text-primary text-base leading-relaxed mb-2">
                                                  <strong>Địa điểm:</strong> {selectedPerson.meetingPlace}
                                             </p>
                                             <p className="text-text-primary text-base leading-relaxed">
                                                  {selectedPerson.meetingContext}
                                             </p>
                                        </div>
                                   )}

                                   <div>
                                        <h3 className="text-2xl font-bold text-red-dark mb-3">
                                             Tiểu sử
                                        </h3>
                                        <p className="text-text-primary text-base leading-relaxed">
                                             {selectedPerson.fullBio}
                                        </p>
                                   </div>

                                   <div>
                                        <h3 className="text-2xl font-bold text-red-dark mb-3">
                                             Ảnh hưởng
                                        </h3>
                                        <p className="text-text-primary text-base leading-relaxed">
                                             {selectedPerson.influence}
                                        </p>
                                   </div>

                                   {selectedPerson.stories && selectedPerson.stories.length > 0 && (
                                        <div>
                                             <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                  Câu chuyện tiêu biểu
                                             </h3>
                                             <ul className="space-y-3">
                                                  {selectedPerson.stories.map((story, index) => (
                                                       <li
                                                            key={index}
                                                            className="flex items-start text-text-primary text-base leading-relaxed bg-cream p-4 rounded-lg"
                                                       >
                                                            <span className="text-red-main mr-2 mt-1">•</span>
                                                            <span>{story}</span>
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
}

