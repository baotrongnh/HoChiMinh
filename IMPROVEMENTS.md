# Cải tiến Website Chủ tịch Hồ Chí Minh 🇻🇳

## ✨ Các cải tiến mới

### 🎨 1. Bảng màu mới - Cảm hứng thời Hùng Vương

Đã thay thế toàn bộ bảng màu với màu sắc lấy cảm hứng từ văn hóa cổ Việt Nam:

**Màu chính:**

- **Đỏ Burgundy** (`#6B0F1A`): Đỏ thẫm burgundy - màu đất nung cổ, mix giữa đỏ thẫm và vàng
- **Vàng kim cổ** (`#C9A961`): Màu vàng đồ đồng thau thời Hùng Vương
- **Nâu đồng** (`#8B5A3C`): Màu trống đồng Đông Sơn
- **Xanh ngọc** (`#2D5F4F`): Màu ngọc bích cổ
- **Trắng lụa** (`#FFF9ED`): Màu lụa tơ tằm truyền thống
- **Đỏ son mài** (`#8B2635`): Đỏ sơn mài Việt Nam
- **Vàng son** (`#D4AF37`): Vàng son thếp

### 📝 2. Font chữ tối ưu tiếng Việt

**Font tiêu đề:**

- `Cormorant Garamond` - Font serif sang trọng, có hơi Việt Nam truyền thống
- Phù hợp với tiếng Việt, đọc rõ ràng, trang trọng

**Font nội dung:**

- `Be Vietnam Pro` - Font sans-serif được thiết kế đặc biệt cho tiếng Việt
- Dễ đọc, hiện đại nhưng vẫn giữ nét truyền thống

### 🎴 3. PersonCard với hiệu ứng 3D Flip

**Mặt trước:**

- Avatar tròn với viền vàng đồng
- Gradient nền từ trắng lụa đến kem
- Viền trang trí với pattern trống đồng
- Animation mượt mà khi hover

**Mặt sau (flip 180°):**

- Background gradient đỏ burgundy
- Hiển thị thông tin chi tiết
- Nút "Xem chi tiết" gradient vàng kim
- Scrollbar custom màu vàng đồng

**Hiệu ứng:**

- Flip 3D mượt mà (700ms)
- Perspective 1000px
- Transform-style preserve-3d
- Backface-visibility hidden

### ⏳ 4. Timeline gặp gỡ nhân vật quốc tế

**Trang mới:** `/timeline/nhan-vat`

**Tính năng:**

- Hiển thị các cuộc gặp gỡ theo thứ tự thời gian
- Chỉ hiển thị các nhân vật có `meetingYear` (không null)
- Sắp xếp tự động từ sớm đến muộn
- Timeline layout đẹp mắt với dots và cards

**Card timeline:**

- Year badge gradient đỏ + vàng
- Thông tin đầy đủ: Tên, nghề nghiệp, quốc tịch, địa điểm gặp
- Context gặp gỡ và mối quan hệ
- Hover effects với shadow và scale

**Layout:**

- Alternating left-right (zigzag)
- Vertical timeline line với gradient
- Dots vàng kim với viền đỏ burgundy
- Responsive cho mobile

### 🎯 5. Cải thiện contrast và màu sắc

**Đã sửa:**

- Text trên background tối: Dùng màu vàng kim sáng (`ancient-gold-light`)
- Heading: Burgundy dark với shadow
- Body text: `text-primary` và `text-secondary` rõ ràng
- Links và buttons: Gradient với contrast cao
- Border và divider: Opacity phù hợp

**Gradients đẹp mắt:**

- Hero section: `from-burgundy-dark via-burgundy to-jade-dark`
- Buttons: `from-ancient-gold to-lacquer-gold`
- Cards: `from-silk-white to-silk-cream`
- Timeline dots: `from-ancient-gold to-lacquer-gold`

### 🎭 6. Animation và transitions

**Animation mới:**

- `fadeIn`: Fade in từ dưới lên (600ms)
- `slideIn`: Slide in từ trái sang (600ms)
- Hover scale: 1.05 - 1.125
- Smooth transitions: 300-500ms

**Hiệu ứng:**

- Cards hover: Shadow + scale + color change
- Timeline dots: Scale 1.25 khi hover
- Buttons: Shadow + scale + gradient shift
- Hero icon: Scale 1.1 + rotation

## 📁 Cấu trúc mới

```
src/
├── app/
│   ├── page.tsx                          # Trang chủ (đã cập nhật màu)
│   ├── chu-tich-ho-chi-minh/page.tsx    # Tiểu sử Bác
│   ├── gia-dinh/page.tsx                 # Gia đình (dùng PersonCard mới)
│   ├── nhan-vat/page.tsx                 # Nhân vật quốc tế
│   └── timeline/
│       ├── page.tsx                      # Timeline cuộc đời (có link)
│       └── nhan-vat/page.tsx            # ✨ MỚI: Timeline gặp nhân vật
├── components/
│   ├── Header.tsx                        # Header (màu mới)
│   ├── Footer.tsx                        # Footer
│   ├── PersonCard.tsx                    # ✨ MỚI: 3D Flip Card
│   └── TimelineItem.tsx                  # Timeline item (màu mới)
├── data/
│   ├── familyMembers.json
│   ├── internationalFigures.json         # Có meetingYear
│   └── timeline.json
└── globals.css                           # ✨ Màu mới + fonts
```

## 🚀 Chạy project

```bash
cd d:\workspace\HCM\client
npm run dev
```

Truy cập: http://localhost:3000

## 🌟 Điểm nổi bật

### Màu sắc thuần Việt

- Lấy cảm hứng từ thời Hùng Vương
- Burgundy (đỏ thẫm + vàng) sang trọng
- Vàng kim đồng thau cổ điển
- Xanh ngọc bích quý phái

### Font tối ưu tiếng Việt

- Cormorant Garamond: Tiêu đề đẹp
- Be Vietnam Pro: Dễ đọc, chuẩn Việt

### 3D Effects wow

- PersonCard flip 3D mượt mà
- Perspective và transform
- Shadow depth đẹp mắt

### Timeline đầy đủ

- Cuộc đời Bác Hồ
- Gặp gỡ nhân vật quốc tế (sắp xếp theo năm)
- Dễ chuyển đổi giữa 2 timeline

## 🎨 CSS Variables

```css
--burgundy: #6b0f1a /* Đỏ thẫm */ --ancient-gold: #c9a961 /* Vàng kim cổ */
  --bronze: #8b5a3c /* Nâu đồng */ --jade-green: #2d5f4f /* Xanh ngọc */
  --silk-white: #fff9ed /* Trắng lụa */ --lacquer-red: #8b2635 /* Đỏ son mài */
  --lacquer-gold: #d4af37 /* Vàng son */;
```

## ✅ Checklist hoàn thành

- [x] Màu sắc cảm hứng Hùng Vương
- [x] Font chữ tối ưu tiếng Việt
- [x] PersonCard 3D flip đẹp mắt
- [x] Timeline gặp nhân vật quốc tế
- [x] Sửa contrast màu sắc
- [x] Animation mượt mà
- [x] Gradient đẹp, sang
- [x] Responsive mobile
- [x] Pattern trống đồng cải tiến
- [x] Header/Footer màu mới

## 📝 Ghi chú

- Tất cả màu sắc đã được cập nhật
- Font được load từ Google Fonts
- 3D flip card hoạt động trên mọi trình duyệt hiện đại
- Timeline nhân vật chỉ hiển thị những người có `meetingYear` !== null
- Tự động sắp xếp theo thứ tự thời gian

---

**Mọi thứ trong trang web giờ đây đẹp và thuần Việt Nam! 🇻🇳**
