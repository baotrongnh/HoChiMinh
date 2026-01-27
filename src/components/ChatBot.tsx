'use client';

import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
     id: number;
     text: string;
     isBot: boolean;
     timestamp: Date;
}

const SYSTEM_CONTEXT = `Bạn là trợ lý ảo chuyên về Chủ tịch Hồ Chí Minh.

THÔNG TIN:
- Tên khai sinh: Nguyễn Sinh Cung
- Sinh: 19/5/1890 tại Nghệ An
- Mất: 2/9/1969
- Bí danh: Nguyễn Ái Quốc, Hồ Chí Minh
- Thành lập Đảng: 3/2/1930
- Tuyên ngôn Độc lập: 2/9/1945

QUY TẮC:
1. CHỈ trả lời về Hồ Chí Minh
2. Nếu không liên quan, từ chối lịch sự
3. Trả lời tiếng Việt, ngắn gọn`;

// Initialize Gemini
const ai = new GoogleGenAI({
     apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '',
});

export default function ChatBot() {
     const [isOpen, setIsOpen] = useState(false);
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
          'Bác Hồ gặp những nhân vật quốc tế nào?',
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
               // Call Gemini directly
               const fullPrompt = `${SYSTEM_CONTEXT}\n\nCâu hỏi: ${currentInput}`;
               const response = await ai.models.generateContent({
                    model: 'gemini-2.0-flash-exp',
                    contents: fullPrompt,
               });
               const aiResponse = response.text || 'Không có phản hồi từ AI';

               const botMessage: Message = {
                    id: Date.now() + 1,
                    text: aiResponse,
                    isBot: true,
                    timestamp: new Date(),
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
                    className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-main to-red-dark text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(160,49,44,0.5)] transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center group ${isOpen ? 'scale-0' : 'scale-100'
                         }`}
                    aria-label="Mở chat"
               >
                    <svg
                         className="w-8 h-8 group-hover:scale-110 transition-transform"
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
                    <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col animate-modalSlideIn">
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
                                   <div
                                        key={message.id}
                                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}
                                   >
                                        <div
                                             className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.isBot
                                                  ? 'bg-white text-text-primary border border-gold/30'
                                                  : 'bg-gradient-to-r from-red-main to-red-light text-white'
                                                  }`}
                                        >
                                             <p className="text-sm leading-relaxed">{message.text}</p>
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
                                             className="px-3 py-1.5 bg-gold/10 text-red-dark rounded-full text-xs whitespace-nowrap hover:bg-gold/20 transition-colors border border-gold/30"
                                        >
                                             {question}
                                        </button>
                                   ))}
                              </div>
                         </div>

                         {/* Input */}
                         <div className="p-4 bg-white border-t border-gold/20 rounded-b-2xl">
                              <div className="flex gap-2">
                                   <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && !isSending && handleSendMessage()}
                                        placeholder="Nhập câu hỏi của bạn..."
                                        disabled={isSending}
                                        className="flex-1 px-4 py-3 border-2 border-gold/30 rounded-xl focus:outline-none focus:border-red-main transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                   />
                                   <button
                                        onClick={handleSendMessage}
                                        disabled={!inputValue.trim() || isSending}
                                        className="px-4 py-3 bg-gradient-to-r from-red-main to-red-light text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          </>
     );
}
