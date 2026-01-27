# Website Chủ tịch Hồ Chí Minh

Website học thuật - giáo dục về cuộc đời, tư tưởng và các mối quan hệ của Chủ tịch Hồ Chí Minh.

## 🎯 Mục tiêu

Website được thiết kế với mục đích:

- Giáo dục và nghiên cứu lịch sử
- Nội dung chính xác, trang trọng
- Phù hợp cho học sinh, sinh viên, giáo viên và công chúng
- Thể hiện tầm vóc lịch sử của Chủ tịch Hồ Chí Minh

## 🎨 Design System

### Màu sắc chủ đạo

- **Đỏ trầm** (`#DA251C`): Màu quốc kỳ Việt Nam - đại diện cho tinh thần cách mạng
- **Vàng đồng** (`#D4AF37`): Trống đồng Đông Sơn - biểu tượng văn hóa dân tộc
- **Xanh đậm** (`#1E3A5F`): Tạo chiều sâu, sự trang trọng
- **Trắng ngà** (`#FFF8E7`): Background dễ đọc, không gây mỏi mắt

### Phong cách

- Sang trọng - Truyền thống - Tĩnh lặng - Trang nghiêm
- Sử dụng pattern trống đồng Đông Sơn làm background (opacity thấp)
- Font chữ:
  - Tiêu đề: Serif (Georgia) - trang trọng
  - Nội dung: Sans-serif - dễ đọc

## 📂 Cấu trúc website

### Các trang chính

1. **Trang chủ** (`/`)
   - Hero section với câu trích dẫn
   - Giới thiệu về Chủ tịch Hồ Chí Minh
   - Điều hướng đến các mục chính

2. **Chủ tịch Hồ Chí Minh** (`/chu-tich-ho-chi-minh`)
   - Tiểu sử đầy đủ theo các giai đoạn
   - Các bí danh: Nguyễn Sinh Cung, Nguyễn Tất Thành, Nguyễn Ái Quốc, Hồ Chí Minh
   - Tư tưởng - Đạo đức - Phong cách

3. **Gia đình** (`/gia-dinh`)
   - Cha: Nguyễn Sinh Sắc
   - Mẹ: Hoàng Thị Loan
   - Anh: Nguyễn Sinh Khiêm
   - Chị: Nguyễn Thị Thanh

4. **Nhân vật quốc tế** (`/nhan-vat`)
   - **Nhóm A**: Gặp trực tiếp, hoạt động chung
     - Phan Chu Trinh, Phan Văn Trường, Marcel Cachin, Paul Vaillant-Couturier...
   - **Nhóm B**: Nghệ sĩ, trí thức cùng hệ giá trị
     - Charles Chaplin, Pablo Picasso, Romain Rolland, Henri Barbusse...
   - **Nhóm C**: Bạn của Việt Nam, ủng hộ Hồ Chí Minh
     - Jean Effel, Raymond Aubrac, Henri Martin...

5. **Dòng thời gian** (`/timeline`)
   - Timeline tương tác theo các giai đoạn cuộc đời
   - Hiển thị trực quan với hình ảnh timeline

## 📊 Dữ liệu

### Cấu trúc JSON

Website sử dụng các file JSON để quản lý dữ liệu:

1. **`familyMembers.json`** - Thành viên gia đình

```json
{
  "id": "string",
  "name": "string",
  "relationship": "string",
  "birthYear": number,
  "deathYear": number,
  "shortBio": "string",
  "fullBio": "string",
  "influence": "string",
  "stories": ["string"],
  "image": "string"
}
```

2. **`internationalFigures.json`** - Nhân vật quốc tế

```json
{
  "id": "string",
  "name": "string",
  "nameEn": "string",
  "category": "A" | "B" | "C",
  "relationship": "string",
  "nationality": "string",
  "birthYear": number,
  "deathYear": number,
  "profession": "string",
  "meetingYear": number | null,
  "meetingPlace": "string" | null,
  "meetingContext": "string",
  "shortBio": "string",
  "fullBio": "string",
  "influence": "string",
  "stories": ["string"],
  "image": "string"
}
```

3. **`timeline.json`** - Các sự kiện theo dòng thời gian

```json
{
  "id": "string",
  "year": number,
  "yearEnd": number,
  "title": "string",
  "period": "string",
  "location": "string",
  "description": "string",
  "significance": "string",
  "keyEvents": ["string"]
}
```

### Thêm dữ liệu mới

Để thêm nhân vật hoặc sự kiện mới, chỉ cần chỉnh sửa các file JSON tương ứng trong thư mục `src/data/`:

- `src/data/familyMembers.json`
- `src/data/internationalFigures.json`
- `src/data/timeline.json`

Website sẽ tự động hiển thị dữ liệu mới mà không cần thay đổi code.

## 🚀 Cài đặt và chạy

### Yêu cầu

- Node.js 20+
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại: http://localhost:3000

### Build production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework**: Next.js 16
- **React**: 19
- **Styling**: Tailwind CSS 4
- **TypeScript**: 5
- **Deployment**: Vercel (khuyến nghị)

## 📝 Lưu ý quan trọng

### Tính chính xác lịch sử

- Mọi thông tin trên website đều dựa trên tài liệu lịch sử chính thống
- Phân biệt rõ ràng giữa "gặp trực tiếp" và "ảnh hưởng tư tưởng"
- Không gán ghép sai lịch sử

### Tinh thần nội dung

- Trang trọng - Chuẩn lịch sử
- Không thần thoại hóa
- Không chính trị hóa cực đoan
- Phù hợp giáo dục - bảo tàng - nghiên cứu

## 🔄 Phát triển tiếp

Website có thể mở rộng với:

- [ ] Chatbot AI "Hỏi về Bác Hồ" (tích hợp OpenAI API)
- [ ] Thêm hình ảnh lịch sử
- [ ] Audio guide (đọc nội dung)
- [ ] Bản đồ tương tác (các địa điểm Bác đi qua)
- [ ] Tài liệu tham khảo (bibliography)
- [ ] Hỗ trợ đa ngôn ngữ (Tiếng Anh, Pháp, Nga...)

## 📧 Liên hệ

Website mang tính học thuật - giáo dục. Nếu có góp ý về nội dung lịch sử, vui lòng liên hệ để chúng tôi hoàn thiện.

---

**"Không có gì quý hơn độc lập tự do"**  
_- Chủ tịch Hồ Chí Minh_
