'use client';

import { useState, useMemo, useEffect } from 'react';
import internationalData from '@/data/internationalFigures.json';
import { InternationalFigure } from '@/types';
import InternationalPersonCard from '@/components/InternationalPersonCard';

export default function InternationalFiguresPage() {
     const [selectedNationality, setSelectedNationality] = useState<'ALL' | 'Vietnamese' | 'International'>('ALL');
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
          if (selectedNationality === 'Vietnamese') {
               return figures.filter(fig => fig.nationality === 'Việt Nam');
          } else if (selectedNationality === 'International') {
               return figures.filter(fig => fig.nationality !== 'Việt Nam');
          }
          return figures;
     }, [selectedNationality, figures]);

     const vietnameseFigures = figures.filter(f => f.nationality === 'Việt Nam');
     const internationalFigures = figures.filter(f => f.nationality !== 'Việt Nam');

     return (
          <div className="bg-cream">
               {/* Hero Section */}
               <section className="bg-gradient-to-r from-red-dark to-red-main text-white py-20">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto text-center">
                              <h1 className="text-5xl font-bold mb-6 text-gold-light">
                                   Những người đồng hành
                              </h1>
                              <div className="h-1 w-32 bg-gold mx-auto mb-6"></div>
                              <p className="text-xl text-white/95">
                                   Những người Bác Hồ gặp gỡ và gắn bó trong hành trình cách mạng
                              </p>
                         </div>
                    </div>
               </section>

               {/* Nationality Tabs */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-5xl mx-auto">
                              <div className="flex flex-wrap justify-center gap-6">
                                   <button
                                        onClick={() => setSelectedNationality('ALL')}
                                        className={`px-10 py-5 rounded-xl font-bold text-lg transition-all ${selectedNationality === 'ALL'
                                             ? 'bg-gradient-to-r from-red-dark to-red-main text-white shadow-xl scale-105'
                                             : 'bg-white text-text-primary border-2 border-cream-dark hover:border-red-main hover:text-red-main hover:shadow-lg'
                                             }`}
                                   >
                                        Tất cả
                                        <span className="ml-2 text-sm">
                                             ({figures.length})
                                        </span>
                                   </button>
                                   <button
                                        onClick={() => setSelectedNationality('Vietnamese')}
                                        className={`px-10 py-5 rounded-xl font-bold text-lg transition-all ${selectedNationality === 'Vietnamese'
                                             ? 'bg-gradient-to-r from-red-dark to-red-main text-white shadow-xl scale-105'
                                             : 'bg-white text-text-primary border-2 border-cream-dark hover:border-red-main hover:text-red-main hover:shadow-lg'
                                             }`}
                                   >
                                        🇻🇳 Nhân vật Việt Nam
                                        <span className="ml-2 text-sm">
                                             ({vietnameseFigures.length})
                                        </span>
                                   </button>
                                   <button
                                        onClick={() => setSelectedNationality('International')}
                                        className={`px-10 py-5 rounded-xl font-bold text-lg transition-all ${selectedNationality === 'International'
                                             ? 'bg-gradient-to-r from-red-dark to-red-main text-white shadow-xl scale-105'
                                             : 'bg-white text-text-primary border-2 border-cream-dark hover:border-red-main hover:text-red-main hover:shadow-lg'
                                             }`}
                                   >
                                        🌍 Nhân vật quốc tế
                                        <span className="ml-2 text-sm">
                                             ({internationalFigures.length})
                                        </span>
                                   </button>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Figures Grid - 3D Flip Cards */}
               <section className="py-16 bg-cream">
                    <div className="container mx-auto px-4">
                         <h2 className="text-3xl font-bold text-center mb-12 text-red-dark">
                              {selectedNationality === 'ALL' ? 'Tất cả nhân vật' :
                                   selectedNationality === 'Vietnamese' ? 'Nhân vật Việt Nam' :
                                        'Nhân vật quốc tế'}
                              <span className="ml-3 text-red-main">({filteredFigures.length})</span>
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
                                        <h2 className="text-3xl font-bold text-white mb-2">
                                             {selectedPerson.name}
                                        </h2>
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
                                   {/* Image Section */}
                                   <div className="mb-6 flex justify-center">
                                        <div className="relative">
                                             <img
                                                  src={selectedPerson.image}
                                                  alt={selectedPerson.name}
                                                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-gold"
                                                  onError={(e) => {
                                                       const target = e.target as HTMLImageElement;
                                                       target.style.display = 'none';
                                                  }}
                                             />
                                             <div className="absolute -inset-2 rounded-2xl border-2 border-gold/30"></div>
                                        </div>
                                   </div>

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
                                        {(selectedPerson.meetingYearText ?? selectedPerson.meetingYear) && (
                                             <div>
                                                  <p className="text-text-secondary mb-1 font-semibold">Năm gặp</p>
                                                  <p className="font-bold text-red-main">{selectedPerson.meetingYearText ?? selectedPerson.meetingYear}</p>
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

