export default function Footer() {
     return (
          <footer className="bg-red-dark text-white mt-20">
               <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {/* About */}
                         <div>
                              <h3 className="text-gold-light font-bold text-xl mb-4 flex items-center">
                                   <span className="mr-2">◆</span>
                                   Về website
                              </h3>
                              <p className="text-white/90 text-base leading-relaxed">
                                   Website học thuật - giáo dục về cuộc đời, tư tưởng và các mối quan hệ của
                                   Chủ tịch Hồ Chí Minh. Nội dung chính xác lịch sử, phù hợp nghiên cứu và giáo dục.
                              </p>
                         </div>

                         {/* Quick Links */}
                         <div>
                              <h3 className="text-gold-light font-bold text-xl mb-4 flex items-center">
                                   <span className="mr-2">◆</span>
                                   Liên kết nhanh
                              </h3>
                              <ul className="space-y-2 text-base">
                                   <li>
                                        <a href="/chu-tich-ho-chi-minh" className="text-white/90 hover:text-gold-light transition-colors hover:underline">
                                             Tiểu sử Chủ tịch Hồ Chí Minh
                                        </a>
                                   </li>
                                   <li>
                                        <a href="/gia-dinh" className="text-white/90 hover:text-gold-light transition-colors hover:underline">
                                             Gia đình Bác
                                        </a>
                                   </li>
                                   <li>
                                        <a href="/nhan-vat" className="text-white/90 hover:text-gold-light transition-colors hover:underline">
                                             Nhân vật quốc tế
                                        </a>
                                   </li>
                                   <li>
                                        <a href="/timeline" className="text-white/90 hover:text-gold-light transition-colors hover:underline">
                                             Dòng thời gian
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         {/* Info */}
                         <div>
                              <h3 className="text-gold-light font-bold text-xl mb-4 flex items-center">
                                   <span className="mr-2">◆</span>
                                   Thông tin
                              </h3>
                              <p className="text-white/90 text-base mb-2">
                                   Website mang tính học thuật - giáo dục
                              </p>
                              <p className="text-white/90 text-base mb-2">
                                   Nội dung dựa trên tài liệu lịch sử chính thống
                              </p>
                              <p className="text-white/90 text-base">
                                   Phù hợp cho học sinh, sinh viên, giáo viên và công chúng
                              </p>
                         </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-8 pt-8 border-t border-gold-light/30">
                         <div className="flex flex-col md:flex-row justify-between items-center text-base text-white/80">
                              <p>© 2026 Website Chủ tịch Hồ Chí Minh. Mục đích giáo dục và nghiên cứu.</p>
                              <p className="mt-2 md:mt-0 text-gold-light font-medium">
                                   "Không có gì quý hơn độc lập tự do"
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
}

