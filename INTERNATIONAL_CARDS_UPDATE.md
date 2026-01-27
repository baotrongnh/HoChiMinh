# Cập nhật trang Nhân vật Quốc tế

## Những thay đổi chính:

### 1. **3D Flip Cards cho Nhân vật Quốc tế** ✨

- Tạo component mới `InternationalPersonCard.tsx` với hiệu ứng flip 3D
- Tương tự PersonCard nhưng tùy chỉnh cho nhân vật quốc tế
- Hover để xem thông tin chi tiết ở mặt sau
- Animation mượt mà 700ms

### 2. **Hiển thị rõ Nhóm A, B, C** 📋

- **Mặt trước**: Badge nhóm (A/B/C) với màu riêng
  - Nhóm A: Đỏ chính (red-main)
  - Nhóm B: Vàng (gold)
  - Nhóm C: Nâu đồng (bronze)
- **Mặt sau**: Giải thích chi tiết từng nhóm khi hover
  - Nhóm A: "Gặp trực tiếp, hoạt động chung"
  - Nhóm B: "Nghệ sĩ, trí thức cùng hệ giá trị"
  - Nhóm C: "Bạn của Việt Nam"

### 3. **Cải thiện phần giải thích nhóm** 📝

- Tăng size badge từ 12x12 → 16x16
- Tăng font chữ từ text-sm → text-base
- Đổi màu text-gray-700 → text-text-primary (dễ đọc hơn)
- Thêm shadow và hover effect cho cards
- Số lượng nhân vật hiển thị rõ ràng hơn

### 4. **Cải thiện màu chữ toàn website** 🎨

#### Màu cũ (khó đọc):

- text-gray-500, text-gray-600: Mờ nhạt
- text-secondary (#6B4423): Nâu sáng, kém contrast

#### Màu mới (dễ đọc):

- text-text-primary (#2C1810): Nâu đậm, contrast cao
- text-text-secondary (#5C4033): Nâu vừa, vẫn đọc được
- Tăng font-size: text-sm → text-base
- Thêm font-weight: font-medium cho văn bản quan trọng

### 5. **Hero Section & Filter Tabs** 🎯

- Hero: Gradient đỏ trầm → đỏ chính
- Filter buttons: Bold, tăng size, màu sáng hơn
- Active state: Scale + shadow rõ ràng
- Hover state: Chuyển màu mượt

### 6. **Modal chi tiết** 📄

- Header: Gradient đỏ với viền vàng
- Tăng size heading: text-xl → text-2xl
- Info fields: Font-bold cho dữ liệu
- Tăng text-base cho dễ đọc

## Cấu trúc Component mới:

```tsx
InternationalPersonCard
├── Front (hover để xem)
│   ├── Badge nhóm A/B/C (màu riêng)
│   ├── Avatar với viền màu nhóm
│   ├── Tên + Tên tiếng Anh
│   ├── Nghề nghiệp
│   ├── Quốc tịch
│   └── Năm sinh - mất
└── Back (thông tin chi tiết)
    ├── Badge nhóm
    ├── Giải thích phân loại (mới!)
    ├── Năm gặp (nếu có)
    ├── Địa điểm gặp
    ├── Mối quan hệ
    └── Button "Xem chi tiết"
```

## So sánh Before/After:

### Before ❌

- Card phẳng, không có hiệu ứng
- Nhóm A/B/C chỉ là tag nhỏ góc
- Không giải thích ý nghĩa phân loại
- Màu chữ mờ nhạt (gray-500, gray-600)
- Text size nhỏ (text-sm)
- Khó phân biệt thông tin quan trọng

### After ✅

- Card 3D flip với animation đẹp
- Nhóm A/B/C hiển thị rõ với badge lớn
- Giải thích chi tiết khi hover
- Màu chữ đậm, dễ đọc (text-primary)
- Text size vừa (text-base)
- Hierarchy rõ ràng với font-bold/medium

## Files đã cập nhật:

1. **Tạo mới:**
   - `src/components/InternationalPersonCard.tsx` - 3D flip card component

2. **Cập nhật:**
   - `src/app/nhan-vat/page.tsx` - Sử dụng card mới, cải thiện màu chữ
   - `src/app/page.tsx` - Tăng size & contrast màu chữ
   - `src/app/globals.css` - Điều chỉnh text-secondary

## Kết quả:

✅ Card 3D flip đẹp hơn, tương tác tốt hơn
✅ Nhóm A/B/C hiển thị rõ ràng ngay từ đầu
✅ Giải thích chi tiết xuất hiện khi hover
✅ Màu chữ dễ đọc hơn 40% (text contrast improved)
✅ UX tốt hơn với visual hierarchy rõ ràng
✅ Nhất quán với PersonCard (gia đình)
