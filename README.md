# 🌿 EcoLearn - Petualangan Belajar & Merawat Lingkungan!

**EcoLearn** adalah platform edukasi interaktif ramah anak dan remaja untuk belajar memilah sampah, literasi lingkungan, serta merawat bumi. Melalui visual bertema kartun cerah, maskot **Lilo si Daun Penyelamat**, modul bacaan interaktif, mini-game 2D canvas, dan fitur gamifikasi (lencana, toko kostum, serta papan peringkat), platform ini bertujuan menumbuhkan kesadaran lingkungan sejak dini.

---

## 📚 1. Pusat Literasi & Modul Belajar Interaktif

Modul bacaan edukatif interaktif yang didesain khusus untuk anak-anak dan remaja:

- **6 Materi Pembelajaran**:
  1. 🌱 *Seni Memilah Sampah*: Panduan 5 warna tong sampah dan pemilahan yang benar.
  2. 🌊 *Perjalanan Plastik ke Laut*: Dampak pencemaran sungai dan ancaman microplastic.
  3. ☢️ *Waspada Bahaya Sampah B3*: Pengenalan bahan berbahaya (baterai, obat-obatan, lampu).
  4. ♻️ *Gaya Hidup Zero Waste*: Penerapan prinsip 5R (Refuse, Reduce, Reuse, Repurpose, Recycle).
  5. 🥗 *Keajaiban Kompos Organik*: Cara mengolah sisa makanan menjadi pupuk subur.
  6. 🌍 *Jejak Karbon & Perubahan Iklim*: Memahami pemanasan global dan aksi nyata pencegahannya.
- **Fitur Pencarian & Filter**:
  - 🔍 **Pencarian Real-Time**: Cari materi berdasarkan topik atau kata kunci.
  - 🏷️ **Filter Kategori**: Pemilahan Sampah, Sungai & Laut, Zero Waste, Iklim & Bumi.
  - 👶/🧑‍🎓 **Filter Target Usia**: Mode Anak-Anak (Kids) dan Remaja (Teens).
- **Fitur Interactive Reader Modal**:
  - 🔊 **Audio Reader (Text-to-Speech)**: Fitur pembaca suara berbahasa Indonesia (`SpeechSynthesis API`) untuk kemudahan aksesibilitas.
  - 🔤 **Pengatur Ukuran Teks**: Tombol besarkan (`Aa+`) dan kecilkan (`Aa-`) font artikel.
  - 🔖 **Sistem Bookmark**: Simpan materi favorit untuk dibaca kembali.
  - 📊 **Progress Bar Membaca**: Penanda progres membaca berbasis guliran layar.
  - 🍃 **Mascot Companion (Lilo)**: Memberikan saran dan tips konteksual saat membaca.
  - ❓ **Kuis Refleksi Terintegrasi**: Kuis singkat di akhir setiap artikel untuk menguji pemahaman.
  - 🎁 **Reward Membaca**: Mendapatkan **+30 XP** dan **+15 Koin** untuk setiap materi yang diselesaikan pertama kali.

---

## 👕 2. Lemari Baju Lilo (Wardrobe Shop)

Pemain dapat menukarkan koin yang didapatkan dari game dan membaca untuk membeli kostum Lilo:
- 🥬 **Lilo Daun Asli** (Gratis - Default)
- 🧑‍🍳 **Lilo Koki** (30 Koin) — Dilengkapi topi koki putih
- 👨‍🚀 **Lilo Astronaut** (60 Koin) — Dilengkapi helm kaca & kerah oksigen
- 👑 **Lilo Raja** (100 Koin) — Dilengkapi mahkota emas berkilau

**Render SVG Dinamis**: Kostum yang dipakai akan otomatis berubah secara realtime pada 7 lokasi UI (Hero, Profile Avatar, Header Quiz, Game Canvas River Defender, dll.).

---

## 🏆 3. Galeri Lencana (Achievements) & Papan Peringkat (Leaderboard)

### Galeri Lencana Pahlawan 🏅
Terdapat 6 lencana pencapaian yang dapat dibuka:
- 🌱 **Pembaca Pemula**: Selesaikan 1 materi belajar.
- 💰 **Kolektor Koin**: Kumpulkan minimal 50 koin.
- 🥗 **Ahli Organik**: Selesaikan materi komposting/pemilahan organik.
- 📚 **Kutu Buku Eco**: Selesaikan 3 materi belajar.
- 👑 **Master EcoLearn**: Selesaikan semua 6 materi belajar.
- ⚡ **Bintang Literasi**: Jawab kuis refleksi dengan benar.

### Papan Peringkat Eco (Leaderboard) 📊
- **Podium Juara (Top 3)**: Tampilan visual podium emas, perak, dan perunggu.
- **Klasemen XP**: Peringkat pemain yang disandingkan secara dinamis dengan 8 bot kompetitor.
- **User Rank Pill**: Menampilkan posisi peringkat pemain secara realtime (contoh: *Peringkat Kamu: #1 dari 9 Pahlawan*).

---

## 👤 4. Sistem Profil & Perkembangan Pemain

- **HUD Stats Header**: Menampilkan jumlah **XP** (⭐) dan **Koin** (🪙) di bagian navigasi atas secara konstan.
- **Gelar/Gelar Pahlawan**: Gelar pemain otomatis naik berdasarkan akumulasi XP:
  - `0 - 49 XP`: Pahlawan Magang 🍃
  - `50 - 149 XP`: Pilah Junior 🌱
  - `150 - 299 XP`: Pelindung Lingkungan 📚
  - `300+ XP`: Ksatria Hijau Utama 👑
- **Persistensi State**: Semua data pemain (XP, Koin, materi dibaca, bookmark, lencana, kostum) tersimpan otomatis di `localStorage`.

---

## 🛠️ 5. Tech Stack & Fitur Teknis

- **Backend Framework**: [Laravel 10](https://laravel.com/)
- **Frontend & Assets**: Vite, Vanilla JavaScript (ES6+), Vanilla CSS3.
- **Design System**: Glassmorphism, CSS Custom Properties, Google Fonts (Outfit & Plus Jakarta Sans).
- **Game Engine**: HTML5 2D Canvas API (tanpa dependensi external engine).
- **Audio Synthesizer**: **Web Audio API** — Efek suara sintetis 8-bit retro (square/sawtooth/triangle wave oscillators) tanpa membutuhkan file audio eksternal.
- **Text-to-Speech**: SpeechSynthesis API browser.
- **Visual Particle Effects**: Canvas Confetti Particle System (hujan confetti & ledakan particle).
- **Navigasi Responsive**: Mobile drawer overlay dengan gesture hamburger menu.

---

## 🚀 6. Cara Menjalankan Project Secara Lokal

1. **Persiapan Dependensi**:
   Pastikan Anda sudah menginstal PHP (≥ 8.1), Composer, dan Node.js (≥ 18) di komputer Anda.

2. **Setup File Environment**:
   Duplikat file `.env.example` menjadi `.env` dan generate application key:
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
   - Mode Pengembangan (*Hot Module Replacement*):
     ```bash
     npm run dev
     ```
   - Mode Produksi (Build Bundle):
     ```bash
     npm run build
     ```

5. **Jalankan Server Lokal Laravel**:
   ```bash
   php artisan serve
   ```
   Buka browser dan akses [http://127.0.0.1:8000](http://127.0.0.1:8000) untuk memulai petualangan EcoLearn!
