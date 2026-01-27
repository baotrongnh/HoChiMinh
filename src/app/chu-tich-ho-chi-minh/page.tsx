export default function HoChiMinhPage() {
     return (
          <div className="bg-[var(--cream)]">
               {/* Hero Section */}
               <section className="bg-gradient-to-r from-[var(--navy-dark)] to-[var(--navy)] text-white py-20 ">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto text-center">
                              <h1 className="text-5xl font-bold mb-6 text-[var(--gold)]">
                                   Chủ tịch Hồ Chí Minh
                              </h1>
                              <div className="h-1 w-32 bg-[var(--gold)] mx-auto mb-6"></div>
                              <p className="text-xl text-gray-600">
                                   Nguyễn Sinh Cung • Nguyễn Tất Thành • Nguyễn Ái Quốc • Hồ Chí Minh
                              </p>
                              <p className="text-lg text-gray-500 mt-4">
                                   1890 - 1969
                              </p>
                         </div>
                    </div>
               </section>

               {/* Biography Section */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl font-bold mb-8 text-[var(--navy-dark)]">
                                   Tiểu sử
                              </h2>

                              <div className="space-y-8">
                                   {/* Thời niên thiếu */}
                                   <div className="border-l-4 border-[var(--primary-red)] pl-6">
                                        <h3 className="text-2xl font-bold mb-4 text-[var(--navy-dark)]">
                                             Thời niên thiếu (1890-1911)
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Ngày 19 tháng 5 năm 1890, Nguyễn Sinh Cung (tên khai sinh) sinh ra
                                             tại làng Hoàng Trù (nay là làng Kim Liên), xã Nam Đàn, tỉnh Nghệ An,
                                             trong một gia đình nhà nho yêu nước.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Cha là Nguyễn Sinh Sắc, một nhà nho có tư tưởng yêu nước, đỗ Phó bảng
                                             khoa thi Hương năm 1894. Mẹ là bà Hoàng Thị Loan. Người có một anh
                                             tên Nguyễn Sinh Khiêm và một chị tên Nguyễn Thị Thanh.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                             Từ nhỏ, Người đã chứng kiến cảnh đất nước mất độc lập, nhân dân lầm than
                                             dưới ách đô hộ của thực dân Pháp. Điều này đã hình thành trong Người ý chí
                                             quyết tâm tìm đường cứu nước, cứu dân.
                                        </p>
                                   </div>

                                   {/* Ra đi tìm đường */}
                                   <div className="section-divider"></div>

                                   <div className="border-l-4 border-[var(--gold)] pl-6">
                                        <h3 className="text-2xl font-bold mb-4 text-[var(--navy-dark)]">
                                             Ra đi tìm đường cứu nước (1911-1923)
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Ngày 5 tháng 6 năm 1911, Nguyễn Tất Thành (Người lấy tên là Văn Ba)
                                             từ bến Nhà Rồng, Sài Gòn xuất dương trên con tàu Đô đốc Latouche Tréville
                                             của hãng Chargeurs Réunis (Pháp) để đi tìm đường cứu nước.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Người đã đi qua nhiều nước trên thế giới, làm nhiều nghề để kiếm sống
                                             và tìm hiểu về các phong trào cách mạng. Người làm phụ bếp, hỏa phu tàu biển,
                                             thợ làm bánh, thợ ảnh...
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                             Năm 1917-1918, Người định cư tại Paris, Pháp, lấy tên Nguyễn Ái Quốc
                                             (Người yêu nước). Người tích cực tham gia phong trào công nhân và phong trào
                                             đấu tranh chống chủ nghĩa thực dân.
                                        </p>
                                   </div>

                                   {/* Đại hội Tours */}
                                   <div className="section-divider"></div>

                                   <div className="border-l-4 border-[var(--primary-red)] pl-6">
                                        <h3 className="text-2xl font-bold mb-4 text-[var(--navy-dark)]">
                                             Tham gia phong trào cộng sản (1920-1930)
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Tháng 6 năm 1919, Nguyễn Ái Quốc gửi Bản Yêu sách 8 điểm đến Hội nghị Versailles,
                                             đòi quyền tự do, dân chủ cho nhân dân Đông Dương. Đây là lần đầu tiên tiếng nói
                                             của nhân dân Đông Dương được vang lên ở diễn đàn quốc tế.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Tháng 12 năm 1920, tại Đại hội Tours (Pháp), Nguyễn Ái Quốc tán thành
                                             Luận cương 21 điều của Quốc tế III (Quốc tế Cộng sản), bỏ phiếu tán thành
                                             gia nhập Quốc tế III, trở thành một trong những người sáng lập Đảng Cộng sản Pháp.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                             Từ đây, Người đã tìm được con đường cứu nước đúng đắn: đó là con đường
                                             cách mạng vô sản, con đường của Chủ nghĩa Mác - Lênin.
                                        </p>
                                   </div>

                                   {/* Thành lập Đảng */}
                                   <div className="section-divider"></div>

                                   <div className="border-l-4 border-[var(--navy)] pl-6">
                                        <h3 className="text-2xl font-bold mb-4 text-[var(--navy-dark)]">
                                             Thành lập Đảng Cộng sản Việt Nam (1930)
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Ngày 3 tháng 2 năm 1930, tại Hương Cảng (Hồng Kông, Trung Quốc),
                                             Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất các tổ chức cộng sản
                                             trong nước thành Đảng Cộng sản Việt Nam (sau đổi tên thành Đảng
                                             Cộng sản Đông Dương).
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                             Đây là một sự kiện có ý nghĩa lịch sử trọng đại, mở ra kỷ nguyên
                                             mới cho cách mạng Việt Nam.
                                        </p>
                                   </div>

                                   {/* Cách mạng Tháng Tám */}
                                   <div className="section-divider"></div>

                                   <div className="border-l-4 border-[var(--primary-red)] pl-6">
                                        <h3 className="text-2xl font-bold mb-4 text-[var(--navy-dark)]">
                                             Lãnh đạo Cách mạng Tháng Tám (1941-1945)
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Tháng 2 năm 1941, sau 30 năm ra đi, Nguyễn Ái Quốc trở về nước,
                                             lãnh đạo phong trào cách mạng Việt Nam. Người lấy bí danh là Hồ Chí Minh.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Tháng 5 năm 1941, tại Pác Bó (Cao Bằng), Hội nghị Trung ương 8
                                             ra đời, quyết định thành lập Mặt trận Việt Minh (Mặt trận Việt Nam Độc lập Đồng minh).
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình, Hà Nội,
                                             Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh ra
                                             nước Việt Nam Dân chủ Cộng hòa.
                                        </p>
                                   </div>

                                   {/* Kháng chiến */}
                                   <div className="section-divider"></div>

                                   <div className="border-l-4 border-[var(--gold)] pl-6">
                                        <h3 className="text-2xl font-bold mb-4 text-[var(--navy-dark)]">
                                             Lãnh đạo kháng chiến và xây dựng đất nước (1945-1969)
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Chủ tịch Hồ Chí Minh đã lãnh đạo nhân dân Việt Nam trong cuộc
                                             kháng chiến chống thực dân Pháp (1945-1954) và chống đế quốc Mỹ (1954-1975).
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                             Chiến thắng Điện Biên Phủ năm 1954 đã "lừng lẫy năm châu, chấn động địa cầu",
                                             buộc thực dân Pháp phải ký Hiệp định Genève, công nhận độc lập, chủ quyền,
                                             thống nhất và toàn vẹn lãnh thổ Việt Nam.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                             Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh từ trần tại Hà Nội,
                                             hưởng thọ 79 tuổi, để lại Di chúc thiêng liêng cho toàn Đảng, toàn dân.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Aliases Section */}
               <section className="py-16 bg-[var(--cream)] ">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl font-bold mb-8 text-[var(--navy-dark)] text-center">
                                   Các bí danh của Bác
                              </h2>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   <div className="bg-white rounded-lg p-6 shadow-lg">
                                        <h3 className="text-xl font-bold text-[var(--primary-red)] mb-3">
                                             Nguyễn Sinh Cung
                                        </h3>
                                        <p className="text-gray-700 text-sm">
                                             Tên khai sinh (1890)
                                        </p>
                                   </div>

                                   <div className="bg-white rounded-lg p-6 shadow-lg">
                                        <h3 className="text-xl font-bold text-[var(--primary-red)] mb-3">
                                             Nguyễn Tất Thành
                                        </h3>
                                        <p className="text-gray-700 text-sm">
                                             Tên lấy khi đi học, có nghĩa là "Người sẽ thành công"
                                        </p>
                                   </div>

                                   <div className="bg-white rounded-lg p-6 shadow-lg">
                                        <h3 className="text-xl font-bold text-[var(--primary-red)] mb-3">
                                             Nguyễn Ái Quốc
                                        </h3>
                                        <p className="text-gray-700 text-sm">
                                             Tên lấy tại Pháp (1919), có nghĩa là "Người yêu nước"
                                        </p>
                                   </div>

                                   <div className="bg-white rounded-lg p-6 shadow-lg">
                                        <h3 className="text-xl font-bold text-[var(--primary-red)] mb-3">
                                             Hồ Chí Minh
                                        </h3>
                                        <p className="text-gray-700 text-sm">
                                             Tên chính thức từ 1941, có nghĩa là "Người chiếu sáng"
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Philosophy Section */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl font-bold mb-8 text-[var(--navy-dark)] text-center">
                                   Tư tưởng - Đạo đức - Phong cách
                              </h2>

                              <div className="section-divider"></div>

                              <div className="space-y-6">
                                   <div className="bg-[var(--cream)] rounded-lg p-6 border-l-4 border-[var(--primary-red)]">
                                        <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">
                                             Tư tưởng Hồ Chí Minh
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                             Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản
                                             của cách mạng Việt Nam. Tư tưởng Hồ Chí Minh là sự vận dụng và
                                             phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể
                                             của Việt Nam.
                                        </p>
                                   </div>

                                   <div className="bg-[var(--cream)] rounded-lg p-6 border-l-4 border-[var(--gold)]">
                                        <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">
                                             Đạo đức Hồ Chí Minh
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                             "Vì lợi ích mười năm phải trồng cây, vì lợi ích trăm năm phải trồng người".
                                             Đạo đức cách mạng, yêu nước, yêu nhân dân, cần kiệm liêm chính, chí công vô tư
                                             là nền tảng của đạo đức Hồ Chí Minh.
                                        </p>
                                   </div>

                                   <div className="bg-[var(--cream)] rounded-lg p-6 border-l-4 border-[var(--navy)]">
                                        <h3 className="text-xl font-bold text-[var(--navy-dark)] mb-3">
                                             Phong cách Hồ Chí Minh
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                             Giản dị, gần gũi, chân thành với nhân dân. Sống và làm việc
                                             có khoa học, có kế hoạch. Biết kết hợp lý luận với thực tiễn,
                                             nguyên tắc với linh hoạt, kiên định với sáng tạo.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

