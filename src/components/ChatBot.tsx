'use client';

import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import familyData from '@/data/familyMembers.json';
import internationalData from '@/data/internationalFigures.json';
import { FamilyMember, InternationalFigure } from '@/types';
import ChatPersonCard from './ChatPersonCard';

interface Message {
     id: number;
     text: string;
     isBot: boolean;
     timestamp: Date;
     persons?: Array<{ person: FamilyMember | InternationalFigure, type: 'family' | 'international' }>;
}

const familyMembers = familyData as FamilyMember[];
const internationalFigures = internationalData as InternationalFigure[];

const SYSTEM_CONTEXT = `Bạn là trợ lý ảo chuyên về Chủ tịch Hồ Chí Minh.

THÔNG TIN CƠ BẢN:
- Tên khai sinh: Nguyễn Sinh Cung
- Sinh: 19/5/1890 tại Nghệ An
- Mất: 2/9/1969
- Bí danh: Nguyễn Ái Quốc, Hồ Chí Minh
- Thành lập Đảng: 3/2/1930
- Tuyên ngôn Độc lập: 2/9/1945

GIA ĐÌNH CỦA BÁC HỒ (có trong database):
${familyMembers.map(m => `- ID: ${m.id} | ${m.name} (${m.relationship}): ${m.shortBio}`).join('\n')}

NHÂN SĨ VÀ ĐỒNG CHÍ (có trong database):
${internationalFigures.map(f => `- ID: ${f.id} | ${f.name}: ${f.profession}, ${f.nationality}`).join('\n')}

QUY TẮC QUAN TRỌNG:
1. CHỈ trả lời về Hồ Chí Minh, gia đình và các nhân vật có trong DANH SÁCH TRÊN
2. Nếu người dùng hỏi về nhân vật KHÔNG CÓ trong danh sách (ví dụ: vua hề Sác Lô, Einstein, v.v.), hãy:
   - Giải thích lịch sự rằng người đó không có mối liên hệ trực tiếp với Bác Hồ
   - KHÔNG trả về [PERSON:id]
   - Gợi ý hỏi về các nhân vật có trong danh sách
3. CHỈ trả về [PERSON:id] khi:
   - Nhân vật có ID trong danh sách trên
   - Người dùng hỏi TRỰC TIẾP về nhân vật đó
   - VD đúng: "Nguyễn Sinh Sắc là cha của Bác Hồ, ông là nhà nho yêu nước... [PERSON:nguyen-sinh-sac]"
   - VD sai: Không trả [PERSON:] khi chỉ nhắc qua hoặc nhân vật không trong danh sách
4. Có thể liệt kê nhiều người: "[PERSON:nguyen-sinh-sac,hoang-thi-loan]"
5. Trả lời tiếng Việt, ngắn gọn, thân thiện, chính xác`;

export default function ChatBot() {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedPerson, setSelectedPerson] = useState<{ person: FamilyMember | InternationalFigure, type: 'family' | 'international' } | null>(null);
     const [messages, setMessages] = useState<Message[]>([
          {
               id: 1,
               text: 'Xin chào! Tôi là trợ lý ảo về Chủ tịch Hồ Chí Minh. Bạn có thể hỏi tôi về cuộc đời, sự nghiệp, tư tưởng và di sản của Bác.',
               isBot: true,
               timestamp: new Date(),
          },
     ]);
     const [inputValue, setInputValue] = useState('');
     const [isTyping, setIsTyping] = useState(false);
     const [isSending, setIsSending] = useState(false); // Prevent spam
     const messagesEndRef = useRef<HTMLDivElement>(null);

     const scrollToBottom = () => {
          messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
     };

     useEffect(() => {
          scrollToBottom();
     }, [messages]);

     useEffect(() => {
          const handleEscape = (e: KeyboardEvent) => {
               if (e.key === 'Escape') setIsOpen(false);
          };

          if (isOpen) {
               document.addEventListener('keydown', handleEscape);
          }

          return () => {
               document.removeEventListener('keydown', handleEscape);
          };
     }, [isOpen]);

     const quickQuestions = [
          'Bác Hồ sinh năm nào và ở đâu?',
          'Kể tên các bí danh của Bác Hồ',
          'Đảng Cộng sản Việt Nam được thành lập khi nào?',
          'Bác Hồ gặp những nhân sĩ nào?',
     ];

     const handleSendMessage = async () => {
          if (!inputValue.trim() || isSending) return; // Prevent spam

          const userMessage: Message = {
               id: Date.now(),
               text: inputValue,
               isBot: false,
               timestamp: new Date(),
          };

          setMessages((prev) => [...prev, userMessage]);
          const currentInput = inputValue;
          setInputValue('');
          setIsTyping(true);
          setIsSending(true); // Lock sending

          try {
               // Initialize Gemini only when needed
               const ai = new GoogleGenAI({
                    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '',
               });

               // Call Gemini directly
               const fullPrompt = `${SYSTEM_CONTEXT}\n\nCâu hỏi: ${currentInput}`;
               const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: fullPrompt,
               });
               const aiResponse = response.text || 'Không có phản hồi từ AI';

               // Parse person IDs from response
               const personMatches = aiResponse.match(/\[PERSON:([\w\-,]+)\]/g);
               let cleanedText = aiResponse;
               let persons: Array<{ person: FamilyMember | InternationalFigure, type: 'family' | 'international' }> = [];

               if (personMatches) {
                    personMatches.forEach(match => {
                         const ids = match.replace('[PERSON:', '').replace(']', '').split(',');
                         ids.forEach(id => {
                              const familyPerson = familyMembers.find(m => m.id === id.trim());
                              const intlPerson = internationalFigures.find(f => f.id === id.trim());

                              if (familyPerson) {
                                   persons.push({ person: familyPerson, type: 'family' });
                              } else if (intlPerson) {
                                   persons.push({ person: intlPerson, type: 'international' });
                              }
                         });
                         cleanedText = cleanedText.replace(match, '');
                    });
               }

               const botMessage: Message = {
                    id: Date.now() + 1,
                    text: cleanedText.trim(),
                    isBot: true,
                    timestamp: new Date(),
                    persons: persons.length > 0 ? persons : undefined,
               };
               setMessages((prev) => [...prev, botMessage]);
          } catch (error) {
               console.error('Error:', error);
               const errorMessage: Message = {
                    id: Date.now() + 1,
                    text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
                    isBot: true,
                    timestamp: new Date(),
               };
               setMessages((prev) => [...prev, errorMessage]);
          } finally {
               setIsTyping(false);
               setIsSending(false); // Unlock sending
          }
     };

     const handleQuickQuestion = (question: string) => {
          setInputValue(question);
     };

     return (
          <>
               {/* Floating Chat Button */}
               <button
                    onClick={() => setIsOpen(true)}
                    className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-main to-red-dark text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(160,49,44,0.5)] transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center group ${isOpen ? 'scale-0' : 'scale-100'
                         }`}
                    aria-label="Mở chat"
               >
                    <svg
                         className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                         />
                    </svg>
                    {/* Pulse effect */}
                    <span className="absolute inset-0 rounded-full bg-red-main animate-ping opacity-20"></span>
               </button>

               {/* Chat Window */}
               {isOpen && (
                    <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[400px] h-[calc(100vh-2rem)] sm:h-[600px] max-h-[700px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col animate-modalSlideIn">
                         {/* Header */}
                         <div className="bg-gradient-to-r from-red-dark to-red-main text-white p-4 rounded-t-2xl flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-bold text-red-dark shadow-lg">
                                        HCM
                                   </div>
                                   <div>
                                        <h3 className="font-bold text-lg">Trợ lý ảo</h3>
                                        <p className="text-xs text-gold-light">Về Chủ tịch Hồ Chí Minh</p>
                                   </div>
                              </div>
                              <button
                                   onClick={() => setIsOpen(false)}
                                   className="text-white/90 hover:text-white hover:bg-white/20 w-10 h-10 rounded-full transition-all duration-300 hover:rotate-90 flex items-center justify-center text-2xl"
                                   title="Đóng (ESC)"
                              >
                                   ×
                              </button>
                         </div>

                         {/* Messages */}
                         <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream">
                              {messages.map((message) => (
                                   <div key={message.id}>
                                        <div
                                             className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}
                                        >
                                             <div
                                                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.isBot
                                                       ? 'bg-white text-text-primary border border-gold/30'
                                                       : 'bg-gradient-to-r from-red-main to-red-light text-white'
                                                       }`}
                                             >
                                                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                                  <p
                                                       className={`text-xs mt-1 ${message.isBot ? 'text-text-secondary' : 'text-white/70'
                                                            }`}
                                                  >
                                                       {message.timestamp.toLocaleTimeString('vi-VN', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                       })}
                                                  </p>
                                             </div>
                                        </div>

                                        {/* Person Cards */}
                                        {message.persons && message.persons.length > 0 && (
                                             <div className="flex justify-start mt-2 animate-fadeIn">
                                                  <div className="max-w-[80%] space-y-2">
                                                       {message.persons.map((item, idx) => (
                                                            <ChatPersonCard
                                                                 key={idx}
                                                                 person={item.person}
                                                                 type={item.type}
                                                                 onClick={() => setSelectedPerson(item)}
                                                            />
                                                       ))}
                                                  </div>
                                             </div>
                                        )}
                                   </div>
                              ))}

                              {isTyping && (
                                   <div className="flex justify-start animate-fadeIn">
                                        <div className="bg-white rounded-2xl px-4 py-3 border border-gold/30">
                                             <div className="flex gap-1">
                                                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                                                  <div
                                                       className="w-2 h-2 bg-gold rounded-full animate-bounce"
                                                       style={{ animationDelay: '0.1s' }}
                                                  ></div>
                                                  <div
                                                       className="w-2 h-2 bg-gold rounded-full animate-bounce"
                                                       style={{ animationDelay: '0.2s' }}
                                                  ></div>
                                             </div>
                                        </div>
                                   </div>
                              )}

                              <div ref={messagesEndRef} />
                         </div>

                         {/* Quick Questions */}
                         <div className="px-4 py-2 bg-white border-t border-gold/20">
                              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                   {quickQuestions.map((question, index) => (
                                        <button
                                             key={index}
                                             onClick={() => handleQuickQuestion(question)}
                                             className="px-3 py-1.5 bg-gold/10 text-red-dark rounded-full text-xs sm:text-sm whitespace-nowrap hover:bg-gold/20 transition-colors border border-gold/30 flex-shrink-0"
                                        >
                                             {question}
                                        </button>
                                   ))}
                              </div>
                         </div>

                         {/* Input */}
                         <div className="p-3 sm:p-4 bg-white border-t border-gold/20 rounded-b-2xl">
                              <div className="flex gap-2">
                                   <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && !isSending && handleSendMessage()}
                                        placeholder="Nhập câu hỏi..."
                                        disabled={isSending}
                                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gold/30 rounded-xl focus:outline-none focus:border-red-main transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                   />
                                   <button
                                        onClick={handleSendMessage}
                                        disabled={!inputValue.trim() || isSending}
                                        className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-red-main to-red-light text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                                   >
                                        <svg
                                             className="w-5 h-5"
                                             fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24"
                                        >
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth={2}
                                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                             />
                                        </svg>
                                   </button>
                              </div>
                         </div>
                    </div>
               )}

               {/* Person Detail Modal */}
               {selectedPerson && (
                    <div
                         className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4 animate-fadeIn"
                         onClick={() => setSelectedPerson(null)}
                    >
                         <div
                              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modalSlideIn"
                              onClick={(e) => e.stopPropagation()}
                         >
                              <div className="sticky top-0 bg-gradient-to-r from-red-dark to-red-main border-b-4 border-gold p-6 flex justify-between items-center shadow-lg z-10">
                                   <h2 className="text-3xl font-bold text-white">
                                        {selectedPerson.person.name}
                                   </h2>
                                   <button
                                        onClick={() => setSelectedPerson(null)}
                                        className="text-white/90 hover:text-white hover:bg-white/20 text-4xl w-12 h-12 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 flex items-center justify-center"
                                        title="Đóng"
                                   >
                                        ×
                                   </button>
                              </div>

                              <div className="p-6">
                                   {/* Image Section */}
                                   <div className="mb-6 flex justify-center">
                                        <div className="relative">
                                             <img
                                                  src={selectedPerson.person.image}
                                                  alt={selectedPerson.person.name}
                                                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-gold"
                                                  onError={(e) => {
                                                       const target = e.target as HTMLImageElement;
                                                       target.style.display = 'none';
                                                  }}
                                             />
                                             <div className="absolute -inset-2 rounded-2xl border-2 border-gold/30"></div>
                                        </div>
                                   </div>

                                   {selectedPerson.type === 'family' ? (
                                        <>
                                             <p className="text-gold-dark font-medium text-lg mb-4">
                                                  {(selectedPerson.person as FamilyMember).relationship}
                                             </p>

                                             <p className="text-text-secondary mb-6 font-medium">
                                                  ({selectedPerson.person.birthYear} - {selectedPerson.person.deathYear})
                                             </p>

                                             <div className="mb-8">
                                                  <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                       Tiểu sử
                                                  </h3>
                                                  <p className="text-text-primary text-base leading-relaxed">
                                                       {(selectedPerson.person as FamilyMember).fullBio}
                                                  </p>
                                             </div>

                                             <div className="mb-8">
                                                  <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                       Ảnh hưởng đến Bác Hồ
                                                  </h3>
                                                  <p className="text-text-primary text-base leading-relaxed">
                                                       {(selectedPerson.person as FamilyMember).influence}
                                                  </p>
                                             </div>

                                             {(selectedPerson.person as FamilyMember).stories && (selectedPerson.person as FamilyMember).stories.length > 0 && (
                                                  <div>
                                                       <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                            Câu chuyện tiêu biểu
                                                       </h3>
                                                       <ul className="space-y-3">
                                                            {(selectedPerson.person as FamilyMember).stories.map((story, index) => (
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
                                        </>
                                   ) : (
                                        <>
                                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base mb-6">
                                                  <div>
                                                       <p className="text-text-secondary mb-1 font-semibold">Nghề nghiệp</p>
                                                       <p className="font-bold text-red-dark">{(selectedPerson.person as InternationalFigure).profession}</p>
                                                  </div>
                                                  <div>
                                                       <p className="text-text-secondary mb-1 font-semibold">Quốc tịch</p>
                                                       <p className="font-bold text-red-dark">{(selectedPerson.person as InternationalFigure).nationality}</p>
                                                  </div>
                                                  <div>
                                                       <p className="text-text-secondary mb-1 font-semibold">Năm sinh - mất</p>
                                                       <p className="font-bold text-red-dark">{selectedPerson.person.birthYear} - {selectedPerson.person.deathYear}</p>
                                                  </div>
                                                  {(((selectedPerson.person as InternationalFigure).meetingYearText ?? (selectedPerson.person as InternationalFigure).meetingYear) != null) && (
                                                       <div>
                                                            <p className="text-text-secondary mb-1 font-semibold">Năm gặp</p>
                                                            <p className="font-bold text-red-main">{(selectedPerson.person as InternationalFigure).meetingYearText ?? (selectedPerson.person as InternationalFigure).meetingYear}</p>
                                                       </div>
                                                  )}
                                             </div>

                                             <div className="mb-8">
                                                  <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                       Mối quan hệ
                                                  </h3>
                                                  <p className="text-text-primary text-base leading-relaxed">
                                                       {(selectedPerson.person as InternationalFigure).relationship}
                                                  </p>
                                             </div>

                                             {(selectedPerson.person as InternationalFigure).meetingPlace && (
                                                  <div className="mb-8">
                                                       <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                            Bối cảnh gặp gỡ
                                                       </h3>
                                                       <p className="text-text-primary text-base leading-relaxed mb-2">
                                                            <strong>Địa điểm:</strong> {(selectedPerson.person as InternationalFigure).meetingPlace}
                                                       </p>
                                                       <p className="text-text-primary text-base leading-relaxed">
                                                            {(selectedPerson.person as InternationalFigure).meetingContext}
                                                       </p>
                                                  </div>
                                             )}

                                             <div className="mb-8">
                                                  <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                       Tiểu sử
                                                  </h3>
                                                  <p className="text-text-primary text-base leading-relaxed">
                                                       {(selectedPerson.person as InternationalFigure).fullBio}
                                                  </p>
                                             </div>

                                             <div className="mb-8">
                                                  <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                       Ảnh hưởng
                                                  </h3>
                                                  <p className="text-text-primary text-base leading-relaxed">
                                                       {(selectedPerson.person as InternationalFigure).influence}
                                                  </p>
                                             </div>

                                             {(selectedPerson.person as InternationalFigure).stories && (selectedPerson.person as InternationalFigure).stories.length > 0 && (
                                                  <div>
                                                       <h3 className="text-2xl font-bold text-red-dark mb-3">
                                                            Câu chuyện tiêu biểu
                                                       </h3>
                                                       <ul className="space-y-3">
                                                            {(selectedPerson.person as InternationalFigure).stories.map((story, index) => (
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
                                        </>
                                   )}
                              </div>
                         </div>
                    </div>
               )}
          </>
     );
}
