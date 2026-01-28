'use client';

import { useState, useEffect } from 'react';
import PersonCard from '@/components/PersonCard';
import familyData from '@/data/familyMembers.json';
import { FamilyMember } from '@/types';

export default function FamilyPage() {
     const [selectedPerson, setSelectedPerson] = useState<FamilyMember | null>(null);
     const members = familyData as FamilyMember[];

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

     return (
          <div className="bg-[var(--cream)]">
               {/* Hero Section */}
               <section className="bg-gradient-to-r from-[var(--navy-dark)] to-[var(--navy)] text-white py-20 ">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto text-center">
                              <h1 className="text-5xl font-bold mb-6 text-[var(--gold)]">
                                   Gia đình Chủ tịch Hồ Chí Minh
                              </h1>
                              <div className="h-1 w-32 bg-[var(--gold)] mx-auto mb-6"></div>
                              <p className="text-xl text-gray-600">
                                   Gia đình nhà nho yêu nước, nơi hình thành tư tưởng cứu nước của Bác
                              </p>
                         </div>
                    </div>
               </section>

               {/* Introduction */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                   Chủ tịch Hồ Chí Minh sinh ra trong một gia đình nhà nho yêu nước.
                                   Cha Người là Nguyễn Sinh Sắc, một nhà nho có học thức uyên thâm,
                                   từng đỗ Phó bảng khoa thi Hương. Mẹ Người là bà Hoàng Thị Loan,
                                   người phụ nữ hiền lành, chịu thương chịu khó.
                              </p>
                              <p className="text-lg text-gray-700 leading-relaxed">
                                   Người có một anh tên Nguyễn Sinh Khiêm và một chị tên Nguyễn Thị Thanh.
                                   Gia đình đã ảnh hưởng sâu sắc đến tư tưởng yêu nước, tinh thần cứu nước
                                   và tính cách của Người.
                              </p>
                         </div>
                    </div>
               </section>

               {/* Family Members Grid */}
               <section className="py-16 bg-[var(--cream)] ">
                    <div className="container mx-auto px-4">
                         <h2 className="text-4xl font-bold mb-12 text-[var(--navy-dark)] text-center">
                              Các thành viên trong gia đình
                         </h2>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                              {members.map((member) => (
                                   <PersonCard
                                        key={member.id}
                                        person={member}
                                        onClick={() => setSelectedPerson(member)}
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
                              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modalSlideIn"
                              onClick={(e) => e.stopPropagation()}
                         >
                              <div className="sticky top-0 bg-gradient-to-r from-red-dark to-red-main border-b-4 border-gold p-6 flex justify-between items-center shadow-lg z-10">
                                   <h2 className="text-3xl font-bold text-white">
                                        {selectedPerson.name}
                                   </h2>
                                   <button
                                        onClick={() => setSelectedPerson(null)}
                                        className="text-white/90 hover:text-white hover:bg-white/20 text-4xl w-12 h-12 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 flex items-center justify-center"
                                        title="Đóng (ESC)"
                                        aria-label="Đóng modal"
                                   >
                                        ×
                                   </button>
                              </div>

                              <div className="p-6">
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

                                   <p className="text-gold-dark font-medium text-lg mb-4">
                                        {selectedPerson.relationship}
                                   </p>

                                   <p className="text-text-secondary mb-6 font-medium">
                                        ({selectedPerson.birthYear} - {selectedPerson.deathYear})
                                   </p>

                                   <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-red-dark mb-3">
                                             Tiểu sử
                                        </h3>
                                        <p className="text-text-primary text-base leading-relaxed">
                                             {selectedPerson.fullBio}
                                        </p>
                                   </div>

                                   <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-red-dark mb-3">
                                             Ảnh hưởng đến Bác Hồ
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

