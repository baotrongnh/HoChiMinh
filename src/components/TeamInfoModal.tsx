'use client';

interface TeamMember {
     name: string;
     id: string;
     tasks: string[];
}

interface TeamInfoModalProps {
     isOpen: boolean;
     onClose: () => void;
}

export default function TeamInfoModal({ isOpen, onClose }: TeamInfoModalProps) {
     if (!isOpen) return null;

     const teamMembers: TeamMember[] = [
          {
               name: 'Nguyễn Huỳnh Bảo Trọng',
               id: 'SE180600',
               tasks: [
                    'Dựng và thiết kế trang web',
                    'Tạo video hoạt hình',
                    'Lồng tiếng video',
                    'Viết nội dung cho website & video'
               ]
          },
          {
               name: 'Lê Phạm Trường Huy',
               id: 'SE18060',
               tasks: ['Edit video']
          },
          {
               name: 'Hoàng Kim Long',
               id: 'SE',
               tasks: ['Tìm nội dung cho website']
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
               <div className="relative bg-gradient-to-br from-red-dark via-red-main to-red-dark rounded-2xl shadow-2xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-hidden border-2 border-gold/30">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gold to-gold-light px-6 py-4 flex items-center justify-between border-b-2 border-gold-light">
                         <h2 className="text-2xl font-bold text-red-dark flex items-center gap-3">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                   <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                              </svg>
                              Thông Tin Nhóm
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
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                         <div className="space-y-6">
                              {teamMembers.map((member, index) => (
                                   <div 
                                        key={index}
                                        className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                                   >
                                        <div className="flex items-start gap-4">
                                             <div className="flex-shrink-0">
                                                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-red-dark font-bold text-2xl border-3 border-gold-light shadow-lg">
                                                       {index + 1}
                                                  </div>
                                             </div>
                                             <div className="flex-1">
                                                  <h3 className="text-xl font-bold text-gold-light mb-1">{member.name}</h3>
                                                  <p className="text-white/70 text-sm mb-4 font-semibold">{member.id}</p>
                                                  
                                                  <div className="space-y-2">
                                                       <h4 className="text-white font-semibold flex items-center gap-2">
                                                            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            Nhiệm vụ:
                                                       </h4>
                                                       <ul className="space-y-2 ml-2">
                                                            {member.tasks.map((task, taskIndex) => (
                                                                 <li key={taskIndex} className="flex items-start gap-2 text-white/90">
                                                                      <span className="text-gold mt-1">✓</span>
                                                                      <span>{task}</span>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gradient-to-r from-gold/20 to-gold-light/20 px-6 py-4 border-t-2 border-gold/30">
                         <p className="text-white/80 text-center text-sm">
                              Đồ án môn Tư Tưởng Hồ Chí Minh - 2026
                         </p>
                    </div>
               </div>
          </div>
     );
}
