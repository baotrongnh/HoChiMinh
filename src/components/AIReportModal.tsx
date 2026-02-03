'use client';

interface AITool {
     name: string;
     purpose: string;
     scope?: string;
}

interface AIReportModalProps {
     isOpen: boolean;
     onClose: () => void;
}

export default function AIReportModal({ isOpen, onClose }: AIReportModalProps) {
     if (!isOpen) return null;

     const aiTools: AITool[] = [
          {
               name: 'Chat GPT-5',
               purpose: 'Gợi ý outline nội kịch bản video'
          },
          {
               name: 'Capcut',
               purpose: 'Dựng video'
          },
          {
               name: 'Google Gemini',
               purpose: 'API chatbot cho webside'
          },
          {
               name: 'NextJS',
               purpose: 'Thiết kế trang web game'
          },
          {
               name: 'Vercel',
               purpose: 'Đưa trang web lên online để sử dụng'
          },
          {
               name: 'Github',
               purpose: 'Lưu trữ code',
               scope: 'private'
          },
          {
               name: 'Adobe Express',
               purpose: 'Tạo video hoạt hình'
          }
     ];

     return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
               {/* Backdrop */}
               <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
               />

               {/* Modal */}
               <div className="relative bg-gradient-to-br from-red-dark via-red-main to-red-dark rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden border-2 border-gold/30">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gold to-gold-light px-6 py-4 flex items-center justify-between border-b-2 border-gold-light">
                         <h2 className="text-2xl font-bold text-red-dark flex items-center gap-3">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                   <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                              </svg>
                              Báo Cáo Sử Dụng AI
                         </h2>
                         <button
                              onClick={onClose}
                              className="text-red-dark hover:text-red-main transition-colors p-2 rounded-lg hover:bg-white/20"
                         >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                         </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                         <div className="mb-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-gold/20">
                              <h3 className="text-gold-light font-bold text-lg mb-3 flex items-center gap-2">
                                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                   </svg>
                                   Cam Kết
                              </h3>
                              <div className="text-white/90 space-y-3 text-sm leading-relaxed">
                                   <p>
                                        • Nhóm chúng em cam kết AI không thay thế toàn bộ sản phẩm. Website và video là kết quả lao động biên soạn, sáng tạo và chỉnh sửa trực tiếp của sinh viên.
                                   </p>
                                   <p>
                                        • AI chỉ là công cụ, còn tư duy phê phán và định hướng học thuật mới là giá trị cốt lõi.
                                   </p>
                                   <p>
                                        • Tất cả phần nội dụng cuối cùng (lập luận, phân tích, liên hệ thực tiễn, lựa chọn dẫn chứng) đều do nhóm tự biên soạn, chỉnh sửa và chịu trách nhiệm.
                                   </p>
                              </div>
                         </div>

                         <h3 className="text-gold-light font-bold text-lg mb-4 flex items-center gap-2">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                   <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                              </svg>
                              Công Cụ Sử Dụng
                         </h3>

                         <div className="overflow-x-auto">
                              <table className="w-full">
                                   <thead>
                                        <tr className="bg-gradient-to-r from-gold to-gold-light text-red-dark">
                                             <th className="px-6 py-3 text-left text-sm font-bold border-r border-gold-light">Công cụ sử dụng</th>
                                             <th className="px-6 py-3 text-left text-sm font-bold border-r border-gold-light">Mục đích</th>
                                             <th className="px-6 py-3 text-left text-sm font-bold">Phạm vi giới hạn</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {aiTools.map((tool, index) => (
                                             <tr
                                                  key={index}
                                                  className={`${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'
                                                       } hover:bg-white/15 transition-colors border-b border-gold/10`}
                                             >
                                                  <td className="px-6 py-4 text-white font-semibold border-r border-gold/10">
                                                       {tool.name}
                                                  </td>
                                                  <td className="px-6 py-4 text-white/90 border-r border-gold/10">
                                                       {tool.purpose}
                                                  </td>
                                                  <td className="px-6 py-4 text-white/80">
                                                       {tool.scope || '-'}
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gradient-to-r from-gold/20 to-gold-light/20 px-6 py-4 border-t-2 border-gold/30">
                         <p className="text-white/80 text-center text-sm">
                              Báo cáo minh bạch về việc sử dụng AI trong đồ án
                         </p>
                    </div>
               </div>
          </div>
     );
}
