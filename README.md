# 🌿 EcoLearn - Petualangan Merawat Lingkungan!

**EcoLearn** adalah platform belajar memilah sampah dan merawat lingkungan yang seru, interaktif, dan ramah anak. Dengan visual bertema kartun cerah dan maskot Lilo yang menggemaskan, platform ini bertujuan menumbuhkan kesadaran lingkungan anak-anak sejak dini.

---

## 🎮 Fitur & Modul Permainan

### 1. Misi Pemilahan Sampah (Trash Sorting)
Pemain membantu Lilo memilah sampah ke dalam 5 tong sampah berkode warna:
- 🟢 **Organik**
- 🔵 **Plastik**
- 🟡 **Logam**
- ⚪ **Kertas**
- 🔴 **B3 (Bahan Berbahaya & Beracun)**

Pemain menyeret (*drag-and-drop*) sampah yang jatuh ke tempat sampah yang sesuai. Terdapat 5 level tantangan dengan kecepatan meningkat serta sampah kembar/kemiripan untuk melatih fokus.

### 2. Penyelamat Sungai (River Defender) 🕸️ *(BARU)*
Misi penyelamatan perairan dari sampah yang mengalir terbawa arus sungai menuju laut lepas!
- **Gameplay**: Sampah (botol plastik, kantong belanja plastik, kaleng soda) hanyut dari hulu sungai (atas) ke hilir (bawah).
- **Controls**: Menggerakkan jaring penangkap jaring dengan mouse atau touch (sentuh layar).
- **Mechanics**:
  - Tangkap setiap sampah sebelum menembus batas muara dan mencemari laut.
  - Setiap sampah yang lolos mengurangi **Nyawa (HP)**.
  - Setiap sampah yang berhasil ditangkap menambah skor.
  - Permainan berakhir (*Game Over*) ketika Nyawa mencapai 0.
- **Rewards**: Skor akhir akan dikonversi menjadi **XP** (+10 XP per sampah) dan **Koin** (+5 Koin per sampah) secara instan, terhubung langsung dengan sistem profil global.
- **Aesthetic**: Canvas 600x520 yang mulus, riak air sungai yang mengalir dinamis, bunga & semak kartun yang indah, perahu kayu jaring yang merespons gerak cursor dengan halus (*lerp physics*), maskot Lilo memakai kostum aktif di dalam perahu, serta musik & sound effects 8-bit retro yang ramah lingkungan.

### 3. Lemari Baju Lilo (Wardrobe Shop)
Pemain bisa menggunakan koin yang didapatkan dari game untuk membelikan aksesoris/kostum keren untuk Lilo:
- 🥬 **Lilo Daun Asli** (Default - Gratis)
- 🧑‍🍳 **Lilo Koki** (30 Koin)
- 👨‍🚀 **Lilo Astronaut** (60 Koin)
- 👑 **Lilo Raja** (100 Koin)

Kostum yang sedang dipakai oleh Lilo akan secara otomatis tampil di seluruh platform, termasuk saat Lilo mendayung perahu di game **River Defender**!

### 4. Kuis Pahlawan Lingkungan (Quiz Engine)
Menguji pemahaman tentang lingkungan hidup lewat 5 teka-teki interaktif berhadiah bonus XP & Koin.

### 5. Galeri Lencana (Achievements)
Catatan pencapaian yang diperoleh pemain, seperti *Pilah Pemula*, *Kolektor Koin*, *Ahli Organik*, *Pahlawan B3*, *Master Pemilah*, dan *Penyelamat Sempurna*.

---

## 🛠️ Tech Stack & Fitur Teknis

- **Backend**: [Laravel 10](https://laravel.com/)
- **Frontend Assets**: [Vite](https://vitejs.dev/) & Vanilla CSS / Javascript
- **Game Engine**: HTML5 2D Canvas API (tanpa library pihak ketiga untuk memastikan performa maksimal & loading cepat)
- **Sound Effects**: [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) (menghasilkan bunyi retro secara sintetis langsung di browser tanpa butuh file audio eksternal)
- **State Management**: Sinkronisasi state lokal pemain (XP, Koin, Kostum Aktif) via `localStorage` sehingga progress bermain tersimpan secara persisten.

---

## 🚀 Menjalankan Project Secara Lokal

1. **Persiapan Dependensi**:
   Pastikan Anda sudah menginstal PHP, Composer, dan Node.js di komputer Anda.

2. **Setup File Environment**:
   Duplikat file `.env.example` menjadi `.env` dan jalankan key generator:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Install Dependensi Composer & NPM**:
   ```bash
   composer install
   npm install
   ```

4. **Kompilasi Frontend (Vite)**:
   - Untuk pengembangan lokal (*Hot Reload*):
     ```bash
     npm run dev
     ```
   - Untuk membangun versi produksi:
     ```bash
     npm run build
     ```

5. **Jalankan Server Lokal Laravel**:
   ```bash
   php artisan serve
   ```
   Buka browser di alamat `http://127.0.0.1:8000` untuk mulai bermain!
