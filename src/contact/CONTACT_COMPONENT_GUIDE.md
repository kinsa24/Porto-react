# Contact Section Component Guide

## 📋 Struktur Component

Contact section ini telah dibuat dengan layout profesional **kiri-kanan** yang responsif dan modern.

---

## 🎨 Fitur Utama

✅ **Judul & Subtitle** - "Get In Touch" dengan deskripsi yang inviting  
✅ **Kolom Kiri** - Email (clickable), Lokasi, Social Icons  
✅ **Kolom Kanan** - Contact Form UI (Nama, Email, Pesan)  
✅ **Responsive** - Grid layout yang berubah menjadi single column di mobile  
✅ **Animations** - Fade & slide animations untuk entrance effect  
✅ **Dark Theme** - Tema neutral/dark yang profesional  
✅ **Interactive Hover** - Hover effects pada icons dan buttons

---

## 🔧 Customization Guide

### 1. **Ubah Email Address**

Di [Contact.jsx](Contact.jsx), cari baris:

```jsx
<a href="mailto:your.email@example.com" className="contact-link">
  your.email@example.com
</a>
```

Ganti `your.email@example.com` dengan email Anda:

```jsx
<a href="mailto:hello@yourname.com" className="contact-link">
  hello@yourname.com
</a>
```

### 2. **Ubah Lokasi**

Cari:

```jsx
<p className="contact-text">Indonesia, Jakarta</p>
```

Ganti dengan lokasi Anda:

```jsx
<p className="contact-text">City, Country</p>
```

### 3. **Update Social Links**

Ganti URL di social icons:

```jsx
{
  /* GitHub */
}
<a
  href="https://github.com/YOUR_USERNAME"
  target="_blank"
  rel="noopener noreferrer">
  <FaGithub />
</a>;

{
  /* LinkedIn */
}
<a
  href="https://linkedin.com/in/YOUR_PROFILE"
  target="_blank"
  rel="noopener noreferrer">
  <FaLinkedin />
</a>;

{
  /* Instagram */
}
<a
  href="https://instagram.com/YOUR_USERNAME"
  target="_blank"
  rel="noopener noreferrer">
  <FaInstagram />
</a>;
```

### 4. **Ubah Warna Accent**

Di [contact.css](contact.css), cari `#26e6c6` dan ganti dengan warna pilihan:

```css
/* Cyan/Turquoise Default */
color: #26e6c6;

/* Bisa diganti dengan: */
#00d4ff  /* Bright Blue */
#00ff88  /* Neon Green */
#ff006e  /* Hot Pink */
#ffd60a  /* Vibrant Yellow */
```

### 5. **Ubah Button Text**

Cari:

```jsx
<button type="submit" className="form-submit-btn">
  Send Message
</button>
```

Ganti text sesuai keinginan Anda.

### 6. **Ubah Subtitle**

```jsx
<p className="contact-subtitle">
  Feel free to reach out for collaborations or questions.
</p>
```

---

## 📐 Class Names Reference

### Layout Classes

- `.contact-section` - Main wrapper
- `.contact-header` - Header area
- `.contact-container` - Left-right grid container
- `.contact-left` - Left column (info & social)
- `.contact-right` - Right column (form)

### Info Blocks

- `.contact-info-block` - Single info item
- `.contact-icon-wrapper` - Icon container
- `.contact-icon` - Icon element
- `.contact-link` - Email link
- `.contact-text` - Text content

### Form Classes

- `.contact-form` - Form wrapper
- `.form-group` - Input group
- `.form-input` - Text input
- `.form-textarea` - Textarea
- `.form-submit-btn` - Submit button
- `.form-feedback` - Feedback message

### Social Classes

- `.contact-social-section` - Social icons section
- `.contact-social-icons` - Icons container
- `.social-icon-btn` - Individual icon button

---

## 🎯 Form Features

- **UI Only** - Form tidak mengirim data (placeholder untuk backend nanti)
- **Feedback Message** - Muncul "✨ UI only – coming soon" saat submit
- **Client-side Validation** - Required fields sudah built-in
- **Responsive Input** - Auto-adjusts on mobile

---

## 🚀 Responsive Breakpoints

- **Desktop** (> 1024px) - Dua kolom dengan gap 60px
- **Tablet** (768px - 1023px) - Satu kolom dengan gap 50px
- **Mobile** (< 768px) - Single column, optimized font sizes

---

## 💡 Tips

1. **Ubah warna tema** dengan mengganti `#26e6c6` di seluruh CSS
2. **Tambah social icons** dengan mengimport dari `react-icons/fa` lebih banyak
3. **Ubah animation** dengan modify keyframes di contact.css
4. **Customize form fields** dengan menambah input baru di form group
5. **Integrate backend** nanti dengan replace `handleSubmit` function

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-icons": "^4.8.0"
}
```

Kedua package sudah terinstall di project Anda.

---

## ✨ Component Usage

Component sudah siap diimport di `App.jsx`:

```jsx
import { Contact } from "./contact/Contact";

export function App() {
  return (
    <>
      {/* Other sections */}
      <Contact />
    </>
  );
}
```

---

## 🎨 Color Palette

- **Background**: `#1a1a1a`, `#2d2d2d`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#b0b0b0`
- **Accent**: `#26e6c6`
- **Dark Input**: `rgba(30, 30, 30, 0.6)`

---

**Siap pakai dan tinggal customize sesuai kebutuhan Anda! 🎉**
