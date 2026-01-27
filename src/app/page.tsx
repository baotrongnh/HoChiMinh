import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-red-dark via-red-main to-bronze-dark overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Icon/Symbol */}
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="w-32 h-32 bg-gradient-to-br from-red-main to-gold rounded-full flex items-center justify-center text-gold-light text-6xl font-bold border-4 border-gold shadow-2xl hover:scale-110 transition-transform duration-500">
                ✦
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in">
              Chủ tịch Hồ Chí Minh
            </h1>

            <div className="h-1 w-32 bg-amber-200/80 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl mb-8 text-amber-100 italic font-medium">
              "Không có gì quý hơn độc lập tự do"
            </p>

            <p className="text-lg mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Website học thuật - giáo dục về cuộc đời, tư tưởng và các mối quan hệ
              của Chủ tịch Hồ Chí Minh. Nội dung chính xác lịch sử, trang trọng,
              phù hợp cho học sinh, sinh viên, giáo viên và công chúng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chu-tich-ho-chi-minh"
                className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-red-dark rounded-lg font-bold hover:shadow-2xl transition-all shadow-lg hover:scale-105 duration-300"
              >
                Tìm hiểu về Bác Hồ
              </Link>
              <Link
                href="/timeline"
                className="px-8 py-4 bg-transparent border-2 border-gold text-gold-light rounded-lg font-semibold hover:bg-gold/20 hover:border-gold-light transition-all duration-300 backdrop-blur-sm"
              >
                Xem dòng thời gian
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6 text-red-dark">
              Hồ Chí Minh là ai?
            </h2>

            <div className="section-divider"></div>

            <div className="prose prose-lg mx-auto text-text-primary leading-relaxed">
              <p className="text-xl mb-6 font-medium">
                <strong className="text-red-main">Chủ tịch Hồ Chí Minh</strong>
                {" "}(1890 - 1969) là lãnh tụ vĩ đại của dân tộc Việt Nam, người sáng lập
                và rèn luyện Đảng Cộng sản Việt Nam, người sáng lập nước Việt Nam Dân chủ
                Cộng hòa.
              </p>

              <p className="mb-6 text-text-primary text-lg">
                Sinh ra trong gia đình nhà nho yêu nước, Người đã dành trọn cuộc đời
                mình cho sự nghiệp giải phóng dân tộc, đem lại độc lập, tự do, hạnh phúc
                cho nhân dân Việt Nam.
              </p>

              <p className="mb-6 text-text-primary text-lg">
                Tư tưởng Hồ Chí Minh là sự kết hợp sáng tạo giữa chủ nghĩa Mác - Lênin
                với truyền thống văn hóa dân tộc và bản chất nhân văn sâu sắc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-red-dark">
            Khám phá nội dung
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link
              href="/chu-tich-ho-chi-minh"
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-t-4 border-red-main group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-main via-gold to-red-main"></div>
              <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform">📖</div>
              <h3 className="text-2xl font-bold text-red-dark mb-3 text-center group-hover:text-red-main transition-colors">
                Tiểu sử
              </h3>
              <p className="text-text-primary text-base text-center leading-relaxed font-medium">
                Cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh
              </p>
            </Link>

            <Link
              href="/gia-dinh"
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-t-4 border-gold group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold"></div>
              <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-red-dark mb-3 text-center group-hover:text-bronze-dark transition-colors">
                Gia đình
              </h3>
              <p className="text-text-primary text-base text-center leading-relaxed font-medium">
                Gia đình và những người thân của Bác
              </p>
            </Link>

            <Link
              href="/nhan-vat"
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-t-4 border-bronze group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bronze via-bronze-dark to-bronze"></div>
              <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform">🌍</div>
              <h3 className="text-2xl font-bold text-red-dark mb-3 text-center group-hover:text-bronze-dark transition-colors">
                Nhân vật quốc tế
              </h3>
              <p className="text-text-primary text-base text-center leading-relaxed font-medium">
                Những người Bác gặp và gắn bó ở nước ngoài
              </p>
            </Link>

            <Link
              href="/timeline"
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-t-4 border-red-light group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-light via-red-main to-red-light"></div>
              <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform">⏳</div>
              <h3 className="text-2xl font-bold text-red-dark mb-3 text-center group-hover:text-red-main transition-colors">
                Dòng thời gian
              </h3>
              <p className="text-text-primary text-base text-center leading-relaxed font-medium">
                Lịch sử cuộc đời Bác theo dòng thời gian
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 text-red-dark">
              Tầm vóc lịch sử
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-red-light to-red-main rounded-full flex items-center justify-center text-gold text-4xl mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-red-dark mb-4 group-hover:text-red-light transition-colors">
                  Lãnh tụ dân tộc
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Lãnh đạo dân tộc Việt Nam giành độc lập, xây dựng đất nước
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-red-dark text-4xl mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  ✊
                </div>
                <h3 className="text-2xl font-bold text-red-dark mb-4 group-hover:text-gold-dark transition-colors">
                  Anh hùng giải phóng dân tộc
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Được UNESCO công nhận là Anh hùng giải phóng dân tộc Việt Nam
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-bronze to-bronze-dark rounded-full flex items-center justify-center text-gold-light text-4xl mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <h3 className="text-2xl font-bold text-red-dark mb-4 group-hover:text-bronze-dark transition-colors">
                  Danh nhân văn hóa
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Danh nhân văn hóa thế giới, tư tưởng ảnh hưởng toàn cầu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

