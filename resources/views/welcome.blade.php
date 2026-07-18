<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="EcoLearn - Belajar Memilah Sampah & Merawat Lingkungan Bersama Lilo! Didesain khusus untuk anak-anak dan remaja agar asyik belajar pilah sampah secara interaktif.">
    <meta name="author" content="EcoLearn Team">
    <title>EcoLearn - Petualangan Memilah Sampah & Merawat Lingkungan!</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>

    <!-- Hidden SVG Gradient Definitions -->
    <svg width="0" height="0" style="position:absolute;" aria-hidden="true">
        <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4ade80"/>
                <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
            <linearGradient id="score-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#22c55e"/>
                <stop offset="100%" stop-color="#54a0ff"/>
            </linearGradient>
        </defs>
    </svg>

    <canvas id="confetti-canvas"></canvas>

    <div class="kids-decorations" aria-hidden="true">
        <div class="cloud-item cloud-1"></div>
        <div class="cloud-item cloud-2"></div>
    </div>

    <!-- Header -->
    <header id="main-header">
        <div class="container nav-container">
            <a href="#" class="logo" id="nav-brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M8 11h8"/>
                    <path d="M12 7v8"/>
                </svg>
                <span>EcoLearn</span>
            </a>
            
            <nav style="display: flex; align-items: center; gap: 1.5rem;">
                <ul class="nav-links" id="nav-menu">
                    <li><a href="#beranda" class="active">Beranda</a></li>
                    <li><a href="#eco-arcade">Eco Arcade</a></li>
                    <li><a href="#koleksi">Koleksi & Toko</a></li>
                </ul>
            </nav>

            <div style="display: flex; align-items: center; gap: 1rem;">
                <!-- Header HUD -->
                <div class="header-stats-hud" style="display: flex; gap: 0.5rem;">
                    <div class="stat-pill" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border-color:#86efac; background:#f0fdf4;">
                        <span class="stat-icon">⭐</span> <span id="header-xp">0</span> <span style="font-size: 0.75rem; color:var(--text-muted); font-weight:800;">XP</span>
                    </div>
                    <div class="stat-pill" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border-color:#fef08a; background:#fef9c3;">
                        <span class="stat-icon">🪙</span> <span id="header-coins">0</span> <span style="font-size: 0.75rem; color:var(--text-muted); font-weight:800;">Koin</span>
                    </div>
                </div>
                <a href="#eco-arcade" class="btn-cta" style="padding: 0.55rem 1.2rem; font-size: 0.85rem;">Main Arcade! 🎮</a>
                <!-- Hamburger Menu Button (Mobile) -->
                <button class="hamburger-btn" id="hamburger-btn" aria-label="Buka menu navigasi">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Navigation Panel -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
    <nav class="mobile-nav-panel" id="mobile-nav-panel" aria-label="Menu navigasi mobile">
        <button class="mobile-nav-close" id="mobile-nav-close" aria-label="Tutup menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <a href="#beranda" class="mobile-nav-link active">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Beranda
        </a>
        <a href="#eco-arcade" class="mobile-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4M8 10v4"/><circle cx="15" cy="12" r="1"/><circle cx="18" cy="12" r="1"/></svg>
            Eco Arcade
        </a>
        <a href="#koleksi" class="mobile-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Koleksi & Toko
        </a>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="beranda">
        <div class="container hero-content">
            <div class="mascot-container">
                <div id="hero-mascot-container">
                    <!-- Dynamic SVG Lilo rendered here -->
                </div>
                <div class="mascot-bubble">
                    <span>Hai! Aku <b>Lilo</b>! Yuk bantu aku memilah sampah agar bumi kita tetap bersih dan hijau! 🌍💚</span>
                </div>
            </div>

            <div class="hero-tag">🌱 Pahlawan Lingkungan Cilik!</div>
            <h1 class="hero-title">Cintai Bumi Bersama <span>EcoLearn</span></h1>
            <p class="hero-desc">Belajar cara merawat lingkungan dengan memilah sampah lewat game interaktif yang seru, edukatif, dan menyenangkan!</p>
            <div class="hero-actions">
                <a href="#eco-arcade" class="btn-hero-primary">Masuk Eco Arcade 🎮</a>
                <a href="#koleksi" class="btn-hero-secondary">Toko Kostum 👕</a>
            </div>
        </div>
        <a href="#eco-arcade" class="scroll-indicator" aria-label="Gulir ke bawah">
            <span>Scroll Kebawah</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16.5l-6-6h12z"/></svg>
        </a>
    </section>

    <!-- Unified Eco Arcade Section -->
    <section class="section" id="eco-arcade" style="background: linear-gradient(135deg, rgba(224, 242, 254, 0.3) 0%, rgba(240, 253, 244, 0.3) 100%); border-top: 3px solid rgba(187, 247, 208, 0.5); border-bottom: 3px solid rgba(187, 247, 208, 0.5);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag" style="background: #f0fdf4; color: #15803d; border: 1.5px solid #bbf7d0;">Pusat Bermain</span>
                <h2 class="section-title">Eco Arcade 🎮</h2>
                <p class="section-desc">Selamat datang di Eco Arcade! Pilih salah satu mini-game di bawah ini untuk belajar merawat lingkungan dengan cara yang sangat seru dan interaktif. Dapatkan Koin dan XP untuk melengkapi koleksi kostum Lilo!</p>
            </div>

            <div class="arcade-cabinet reveal">
                <!-- Arcade Game Selection Screen -->
                <div class="arcade-menu" id="arcade-menu">
                    <div class="arcade-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 1rem;">
                        
                        <!-- Card 1: Trash Sorting -->
                        <div class="arcade-card glass-panel" id="card-play-sorting" style="display: flex; flex-direction: column; justify-content: space-between; padding: 2rem; border-radius: 24px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; border: 3px solid #bbf7d0; background: rgba(255, 255, 255, 0.7); position: relative; overflow: hidden; cursor: pointer;">
                            <div class="card-glow" style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, rgba(255,255,255,0) 70%); pointer-events: none;"></div>
                            <div>
                                <div style="font-size: 3.5rem; margin-bottom: 1rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">🗑️</div>
                                <h3 style="font-family: var(--font-outfit); font-size: 1.5rem; font-weight: 800; color: var(--text-dark); margin-bottom: 0.8rem;">Game Pemilahan Sampah</h3>
                                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">Seret dan pilah sampah yang jatuh ke 5 tong sampah yang tepat! Latih kepekaanmu memisahkan sampah organik, anorganik, dan B3.</p>
                            </div>
                            <div>
                                <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                                    <span style="background: #e8f5e9; color: #2e7d32; font-size: 0.8rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 20px; border: 1px solid #c8e6c9;">⭐ 5 Tingkat Level</span>
                                    <span style="background: #e3f2fd; color: #1565c0; font-size: 0.8rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 20px; border: 1px solid #bbdefb;">🎮 Drag & Drop / Klik</span>
                                </div>
                                <button class="btn-hero-primary" style="width: 100%; border: none; padding: 0.8rem; font-size: 1rem; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">Mainkan Game ➔</button>
                            </div>
                        </div>

                        <!-- Card 2: River Defender -->
                        <div class="arcade-card glass-panel" id="card-play-river" style="display: flex; flex-direction: column; justify-content: space-between; padding: 2rem; border-radius: 24px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; border: 3px solid #bae6fd; background: rgba(255, 255, 255, 0.7); position: relative; overflow: hidden; cursor: pointer;">
                            <div class="card-glow" style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(255,255,255,0) 70%); pointer-events: none;"></div>
                            <div>
                                <div style="font-size: 3.5rem; margin-bottom: 1rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">🕸️</div>
                                <h3 style="font-family: var(--font-outfit); font-size: 1.5rem; font-weight: 800; color: var(--text-dark); margin-bottom: 0.8rem;">Penyelamat Sungai</h3>
                                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">Gerakkan jaring untuk menangkap botol plastik, kaleng, dan kantong kresek sebelum hanyut terbawa air sungai menuju lautan bebas!</p>
                            </div>
                            <div>
                                <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                                    <span style="background: #e0f2fe; color: #0369a1; font-size: 0.8rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 20px; border: 1px solid #bae6fd;">⭐ Rekor Skor</span>
                                    <span style="background: #fef2f2; color: #ef4444; font-size: 0.8rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 20px; border: 1px solid #fecaca;">🎮 Gerak Mouse/Sentuh</span>
                                </div>
                                <button class="btn-hero-primary" style="width: 100%; border: none; padding: 0.8rem; font-size: 1rem; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%); box-shadow: 0 6px 15px rgba(2, 132, 199, 0.25);">Mainkan Game ➔</button>
                            </div>
                        </div>

                        <!-- Card 3: Quiz -->
                        <div class="arcade-card glass-panel" id="card-play-quiz" style="display: flex; flex-direction: column; justify-content: space-between; padding: 2rem; border-radius: 24px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; border: 3px solid #fef08a; background: rgba(255, 255, 255, 0.7); position: relative; overflow: hidden; cursor: pointer;">
                            <div class="card-glow" style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(234, 179, 8, 0.1) 0%, rgba(255,255,255,0) 70%); pointer-events: none;"></div>
                            <div>
                                <div style="font-size: 3.5rem; margin-bottom: 1rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">💡</div>
                                <h3 style="font-family: var(--font-outfit); font-size: 1.5rem; font-weight: 800; color: var(--text-dark); margin-bottom: 0.8rem;">Kuis Pahlawan Lingkungan</h3>
                                <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">Jawab 5 teka-teki pemilahan dan pengetahuan lingkungan dari Lilo. Dapatkan gelar kehormatan Pahlawan Lingkungan Cilik!</p>
                            </div>
                            <div>
                                <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                                    <span style="background: #fef9c3; color: #854d0e; font-size: 0.8rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 20px; border: 1px solid #fef08a;">⭐ Bonus Koin & XP</span>
                                    <span style="background: #faf5ff; color: #6b21a8; font-size: 0.8rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 20px; border: 1px solid #f3e8ff;">🎮 Pilihan Ganda</span>
                                </div>
                                <button class="btn-hero-primary" style="width: 100%; border: none; padding: 0.8rem; font-size: 1rem; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: linear-gradient(135deg, #facc15 0%, #ca8a04 100%); box-shadow: 0 6px 15px rgba(202, 138, 4, 0.25);">Mainkan Kuis ➔</button>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Arcade Play Stage -->
                <div class="arcade-stage" id="arcade-stage" style="display: none; border-radius: 24px; border: 4px solid var(--border-color); background: #ffffff; padding: 2rem; box-shadow: 0 15px 35px rgba(0,0,0,0.06); position: relative; margin-top: 1.5rem;">
                    
                    <!-- Stage Header Bar with Exit Button and Status -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px dashed #cbd5e1;">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span id="active-game-icon" style="font-size: 1.8rem;">🎮</span>
                            <h4 id="active-game-title" style="font-family: var(--font-outfit); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin: 0;">Sedang Memainkan</h4>
                        </div>
                        <button class="btn-arcade-exit" id="btn-arcade-exit" style="background: #fee2e2; border: 2px solid #fecaca; color: #ef4444; padding: 0.55rem 1.3rem; border-radius: 12px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; transition: all 0.2s ease;">
                            🚪 Keluar Ke Menu Arcade
                        </button>
                    </div>

                    <!-- Game Container: Trash Sorting -->
                    <div class="arcade-game-wrapper" id="arcade-sorting-wrapper" style="display: none;">
                        <div class="game-wrapper" style="max-width: 850px; margin: 0 auto;">
                            <!-- Left Panel: Game Play Board -->
                            <div class="glass-panel game-card">
                                <div class="game-top-bar">
                                    <div class="game-level-indicator">Level: <span id="game-current-level">1</span></div>
                                    <div class="game-lives" id="game-lives-container">
                                        Nyawa: ❤️❤️❤️
                                    </div>
                                    <div class="game-progress">
                                        Poin: <span id="game-score-count">0</span> / <span id="game-target-count">5</span>
                                    </div>
                                </div>

                                <div class="game-play-area" id="game-play-area">
                                    <!-- Screen: Start Game -->
                                    <div class="game-screen active" id="screen-game-start">
                                        <div class="game-start-content">
                                            <div class="mascot-avatar-large" id="mascot-preview-start">
                                                <!-- Dynamic SVG -->
                                            </div>
                                            <h3>Misi Pemilahan Sampah</h3>
                                            <p>Bantu Lilo menyortir sampah ke 5 kategori tempat sampah: 🟢 Organik, 🔵 Plastik, 🟡 Logam, ⚪ Kertas, dan 🔴 B3. Gunakan drag-and-drop atau klik sampah lalu klik tong sampah.</p>
                                            <div class="level-select-container">
                                                <label for="level-select" style="font-weight: 800; color: var(--text-dark); margin-right: 0.5rem;">Pilih Level:</label>
                                                <select id="level-select" class="level-dropdown">
                                                    <option value="1">Level 1: Organik & Plastik (Lambat)</option>
                                                    <option value="2">Level 2: Tambah Kertas (Sedang)</option>
                                                    <option value="3">Level 3: Tambah Logam (Cepat)</option>
                                                    <option value="4">Level 4: Lengkap 5 Kategori (Sangat Cepat)</option>
                                                    <option value="5">Level 5: Tantangan Kemiripan (Awas Terkecoh! ⚠️)</option>
                                                </select>
                                            </div>
                                            <button class="btn-hero-primary" id="btn-start-sorting">Mulai Memilah! 🎮</button>
                                        </div>
                                    </div>

                                    <!-- Screen: Playing -->
                                    <div class="game-screen" id="screen-game-playing">
                                        <div id="game-canvas-area">
                                            <!-- Trash items will fall here -->
                                        </div>
                                        <div class="bins-container" id="bins-container">
                                            <!-- Bins will be rendered here dynamically -->
                                        </div>
                                    </div>

                                    <!-- Screen: Level Won -->
                                    <div class="game-screen" id="screen-level-won">
                                        <div class="game-win-card">
                                            <div class="win-icon">🏆</div>
                                            <h3 class="game-win-title">Misi Berhasil!</h3>
                                            <p class="game-win-desc" id="win-feedback-text">Luar biasa! Kamu berhasil membersihkan semua sampah di level ini.</p>
                                            <div class="reward-display">
                                                <div class="reward-pill"><span class="reward-icon">⭐</span> +<span id="win-xp-reward">50</span> XP</div>
                                                <div class="reward-pill"><span class="reward-icon">🪙</span> +<span id="win-coins-reward">20</span> Koin</div>
                                            </div>
                                            <div style="display:flex;gap:1rem;margin-top:1rem;">
                                                <button class="btn-hero-primary" id="btn-next-level">Level Selanjutnya ➔</button>
                                                <button class="btn-game-replay" id="btn-win-replay">🔄 Main Lagi</button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Screen: Game Over -->
                                    <div class="game-screen" id="screen-game-over">
                                        <div class="game-win-card" style="gap: 0.8rem;">
                                            <div class="win-icon" style="background:#ffeaea;border-color:#ee5253;">💥</div>
                                            <h3 class="game-win-title" style="color:#ee5253;">Misi Gagal!</h3>
                                            <p class="game-win-desc">Jangan menyerah! Banyak sampah yang menumpuk atau salah tempat. Mari coba lagi!</p>
                                            <button class="btn-hero-primary" id="btn-retry-game" style="background:var(--fire-grad);box-shadow: 0 8px 20px var(--fire-glow);">Coba Lagi 🔄</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Game Container: River Defender -->
                    <div class="arcade-game-wrapper" id="arcade-river-wrapper" style="display: none;">
                        <div class="game-wrapper" style="max-width: 650px; margin: 0 auto;">
                            <div class="glass-panel game-card" style="padding: 1.5rem; overflow: hidden; background: #ffffff;">
                                <div class="game-top-bar" style="border-bottom: 3px solid #f1f5f9; padding-bottom: 0.8rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                                    <div class="game-level-indicator" style="background: #e0f2fe; border: 2px solid #bae6fd; color: #0369a1; padding: 0.4rem 0.8rem; border-radius: 12px; font-weight: 800;">Skor: <span id="river-score">0</span></div>
                                    <div class="game-lives" id="river-hp-bar" style="background: #fef2f2; border: 2px solid #fecaca; color: #ef4444; padding: 0.4rem 0.8rem; border-radius: 12px; font-weight: 800; display: flex; align-items: center; gap: 0.2rem;">Nyawa: ❤️❤️❤️</div>
                                    <div class="game-progress" style="background: #f0fdf4; border: 2px solid #bbf7d0; color: #16a34a; padding: 0.4rem 0.8rem; border-radius: 12px; font-weight: 800;">Rekor: <span id="river-highscore">0</span></div>
                                </div>

                                <div class="game-play-area" id="river-play-area" style="position: relative; overflow: hidden; background: #bae6fd; height: 520px; border-radius: 16px; border: 4px solid #cbd5e1; box-shadow: inset 0 4px 10px rgba(0,0,0,0.1);">
                                    
                                    <!-- Canvas -->
                                    <canvas id="river-canvas" width="600" height="520" style="display: block; width: 100%; height: 100%; image-rendering: auto;"></canvas>

                                    <!-- Start Screen -->
                                    <div class="game-screen active" id="screen-river-start" style="position: absolute; inset: 0; background: rgba(240, 253, 244, 0.95); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 10; transition: opacity 0.3s ease;">
                                        <div style="font-size: 4rem; margin-bottom: 0.5rem; animation: float 3s ease-in-out infinite;">🕸️</div>
                                        <h3 style="font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; color: var(--text-dark); margin-bottom: 0.5rem;">Penyelamat Sungai</h3>
                                        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 450px; margin-bottom: 1.5rem; line-height: 1.5;">
                                            Aliran sungai dipenuhi sampah plastik dan kaleng! Gerakkan jaring dengan menggeser <b>mouse</b> atau <b>sentuhan layar</b> untuk menangkap sampah sebelum mencapai laut bebas. Hati-hati, jika sampah lolos nyawamu berkurang!
                                        </p>
                                        <div style="display: flex; gap: 0.8rem; margin-bottom: 1.5rem; flex-wrap: wrap; justify-content: center;">
                                            <span style="background: white; border: 2px solid #e2e8f0; border-radius: 20px; padding: 0.4rem 0.8rem; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 0.3rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">🧴 Botol</span>
                                            <span style="background: white; border: 2px solid #e2e8f0; border-radius: 20px; padding: 0.4rem 0.8rem; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 0.3rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">🛍️ Kantong Plastik</span>
                                            <span style="background: white; border: 2px solid #e2e8f0; border-radius: 20px; padding: 0.4rem 0.8rem; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 0.3rem; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">🥫 Kaleng Soda</span>
                                        </div>
                                        <button class="btn-hero-primary" id="btn-start-river" style="padding: 0.8rem 2rem; font-size: 1.1rem; border: none; cursor: pointer;">Mulai Menjaring! 🎮</button>
                                    </div>

                                    <!-- Game Over Screen -->
                                    <div class="game-screen" id="screen-river-gameover" style="position: absolute; inset: 0; background: rgba(254, 242, 242, 0.95); display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; z-index: 10; transition: opacity 0.3s ease;">
                                        <div class="win-icon" style="background:#ffeaea; border-color:#ee5253; width: 80px; height: 80px; font-size: 2.5rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 3px dashed #ee5253; margin-bottom: 1rem; margin-top: 0;">💥</div>
                                        <h3 class="game-win-title" style="color:#ee5253; font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem; border: none; background: none; padding: 0;">Sungai Tercemar!</h3>
                                        <p class="game-win-desc" style="font-size: 1rem; color: var(--text-muted); max-width: 450px; margin-bottom: 1rem;">
                                            Terlalu banyak sampah yang hanyut ke laut. Skor kamu adalah <b id="river-final-score" style="color: #ee5253; font-size: 1.3rem;">0</b>.
                                        </p>
                                        <div class="reward-display" id="river-reward-display" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
                                            <div class="reward-pill" style="padding: 0.5rem 1rem; border-radius: 20px; background: #f0fdf4; border: 2px solid #86efac; font-weight: bold; display: flex; align-items: center; gap: 0.3rem;"><span class="reward-icon">⭐</span> +<span id="river-xp-reward">0</span> XP</div>
                                            <div class="reward-pill" style="padding: 0.5rem 1rem; border-radius: 20px; background: #fef9c3; border: 2px solid #fef08a; font-weight: bold; display: flex; align-items: center; gap: 0.3rem;"><span class="reward-icon">🪙</span> +<span id="river-coins-reward">0</span> Koin</div>
                                        </div>
                                        <button class="btn-hero-primary" id="btn-restart-river" style="background:var(--fire-grad); box-shadow: 0 8px 20px var(--fire-glow); padding: 0.8rem 2rem; font-size: 1.1rem; border: none; cursor: pointer;">Coba Lagi 🔄</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Game Container: Quiz -->
                    <div class="arcade-game-wrapper" id="arcade-quiz-wrapper" style="display: none;">
                        <div class="glass-panel quiz-wrapper reveal" style="margin: 0 auto; max-width: 750px;">
                            <!-- Welcome -->
                            <div class="quiz-screen quiz-welcome active" id="quiz-screen-welcome">
                                <div class="quiz-icon" id="quiz-mascot-avatar">
                                    <!-- Dynamic Mascot SVG here -->
                                </div>
                                <h3>Uji Pengetahuan Lingkunganmu!</h3>
                                <p>Bantu Lilo menjawab 5 teka-teki pemilahan sampah yang seru. Raih bintang penuh dan kumpulkan lencanamu! 🎉</p>
                                <div class="quiz-features">
                                    <div class="feature-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                                        5 Teka-teki Seru
                                    </div>
                                    <div class="feature-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                        Hadiah Koin & XP!
                                    </div>
                                    <div class="feature-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M12 2a6 6 0 0 1 6 6v3.2a6 6 0 0 1-2.14 4.54l-1.72 1.46c-.53.45-.85 1.1-.9 1.8H10.76c-.05-.7-.37-1.35-.9-1.8l-1.72-1.46A6 6 0 0 1 6 11.2V8a6 6 0 0 1 6-6z"/></svg>
                                        Gelar Pahlawan
                                    </div>
                                </div>
                                <button class="btn-hero-primary" id="btn-quiz-start">Mulai Main Kuis! 🎮</button>
                            </div>

                            <!-- Play -->
                            <div class="quiz-screen" id="quiz-screen-play">
                                <div class="quiz-header">
                                    <span id="quiz-progress-text">Teka-teki 1 dari 5</span>
                                    <div style="display:flex;align-items:center;gap:0.3rem;">
                                        <span id="quiz-small-mascot"></span>
                                        <span>Asisten Lilo</span>
                                    </div>
                                </div>
                                <div class="quiz-progress-container">
                                    <div class="quiz-progress-bar" id="quiz-progress-bar"></div>
                                </div>
                                <div class="quiz-question-box">
                                    <div class="quiz-mascot-speech">
                                        <div id="quiz-speak-mascot" style="flex-shrink:0;"></div>
                                        <h4 id="quiz-question">Memuat teka-teki...</h4>
                                    </div>
                                </div>
                                <div class="options-grid" id="quiz-options"></div>
                                <div class="quiz-explanation" id="quiz-explanation">
                                    <h5 id="explanation-title">Penjelasan</h5>
                                    <p id="explanation-text"></p>
                                </div>
                                <div class="quiz-action-bar">
                                    <button class="btn-quiz-next" id="btn-quiz-next">Soal Selanjutnya →</button>
                                </div>
                            </div>

                            <!-- Results -->
                            <div class="quiz-screen quiz-results" id="quiz-screen-results">
                                <div class="score-radial">
                                    <svg width="150" height="150" viewBox="0 0 160 160">
                                        <circle class="bg" cx="80" cy="80" r="70"></circle>
                                        <circle class="progress" id="result-circle" cx="80" cy="80" r="70"></circle>
                                    </svg>
                                    <div class="score-text">
                                        <span class="score-num" id="result-score">0</span>
                                        <span class="score-lbl">Nilai Akhir</span>
                                    </div>
                                </div>
                                <div class="badge-box">
                                    <h4 id="result-title">Gelar Pahlawan Cilik</h4>
                                    <p id="result-desc">Deskripsi kepedulian lingkungan kamu.</p>
                                </div>
                                <div class="results-actions">
                                    <button class="btn-hero-primary" id="btn-quiz-restart-results">Main Lagi 🎮</button>
                                    <button class="btn-hero-secondary" id="btn-quiz-to-arcade" style="cursor: pointer; border: 2px solid var(--border-color); background: white;">Kembali ke Arcade</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- NEW SECTION: Achievements Gallery & Wardrobe Shop -->
    <section class="section" id="koleksi" style="background: rgba(255, 255, 255, 0.45); border-top: 3px solid rgba(203, 213, 225, 0.6); border-bottom: 3px solid rgba(203, 213, 225, 0.6);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag">Prestasi & Toko</span>
                <h2 class="section-title">Galeri Lencana & Wardrobe Lilo</h2>
                <p class="section-desc">Lihat semua lencana penghargaan pemilahan yang telah kamu kumpulkan, dan belanjakan koinmu untuk mendandani Lilo!</p>
            </div>

            <div class="dashboard-grid reveal">
                <!-- Left Column: Badges Grid (Prestasi) -->
                <div class="glass-panel profile-card" style="padding: 2.5rem;">
                    <h3 style="font-size:1.6rem; font-weight:800; color:var(--text-dark); margin-bottom:1.5rem; display:flex; align-items:center; gap:0.6rem;">
                        <span>🏅</span> Galeri Lencana Pahlawan
                    </h3>
                    <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:2rem;">Setiap lencana mencerminkan kontribusi nyatamu dalam membersihkan lingkungan. Lencana yang belum terbuka akan tampil redup.</p>
                    
                    <div class="badges-grid-dashboard">
                        <!-- Badge items -->
                        <div class="badge-item locked" id="badge-rookie">
                            <div class="badge-icon">🌱</div>
                            <div class="badge-name">Pilah Pemula</div>
                            <div class="badge-tooltip">Pilah Pemula: Kumpulkan minimal 50 XP hasil memilah sampah.</div>
                        </div>
                        <div class="badge-item locked" id="badge-coins">
                            <div class="badge-icon">💰</div>
                            <div class="badge-name">Kolektor Koin</div>
                            <div class="badge-tooltip">Kolektor Koin: Kumpulkan minimal 50 Koin.</div>
                        </div>
                        <div class="badge-item locked" id="badge-organic">
                            <div class="badge-icon">🥗</div>
                            <div class="badge-name">Ahli Organik</div>
                            <div class="badge-tooltip">Ahli Organik: Pilah 10 sampah Organik dengan benar.</div>
                        </div>
                        <div class="badge-item locked" id="badge-hazardous">
                            <div class="badge-icon">💀</div>
                            <div class="badge-name">Pahlawan B3</div>
                            <div class="badge-tooltip">Pahlawan B3: Pilah 5 sampah B3 dengan benar.</div>
                        </div>
                        <div class="badge-item locked" id="badge-master">
                            <div class="badge-icon">👑</div>
                            <div class="badge-name">Master Pemilah</div>
                            <div class="badge-tooltip">Master Pemilah: Selesaikan level tertinggi (Level 5).</div>
                        </div>
                        <div class="badge-item locked" id="badge-perfect">
                            <div class="badge-icon">⚡</div>
                            <div class="badge-name">Penyelamat Sempurna</div>
                            <div class="badge-tooltip">Penyelamat Sempurna: Selesaikan satu level dengan nyawa penuh.</div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Lilo Costume Shop (Toko) -->
                <div class="glass-panel profile-card" style="padding: 2.5rem;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.5rem;">
                        <h3 style="font-size:1.6rem; font-weight:800; color:var(--text-dark); display:flex; align-items:center; gap:0.6rem; margin:0;">
                            <span>🛍️</span> Lemari Baju Lilo
                        </h3>
                        <div class="stat-pill" style="border-color:#fef08a; background:#fef9c3; color:#854d0e; padding: 0.4rem 1rem;">
                            <span>🪙</span> <span id="shop-coins-val" style="font-weight:800;">0</span> <span style="font-size:0.75rem; color:#854d0e;">Koin</span>
                        </div>
                    </div>
                    
                    <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom:2rem; border-bottom:2px solid #e2e8f0; padding-bottom:1.5rem;">
                        <div class="profile-avatar-container" id="profile-mascot-avatar" style="width:85px; height:85px; flex-shrink:0;">
                            <!-- Dynamic SVG -->
                        </div>
                        <div>
                            <h4 id="player-title" style="font-size:1.3rem; font-weight:800; color:var(--text-dark); margin:0;">Pahlawan Pemilah</h4>
                            <p style="font-size:0.95rem; color:var(--text-muted); margin-top:0.3rem; margin-bottom:0;">XP Akumulasi: <b id="player-xp-val" style="color:var(--primary-dark);">0</b> XP</p>
                        </div>
                    </div>

                    <div class="shop-items-list">
                        <!-- Item list for Lilo Costumes -->
                        <div class="shop-item-card purchased equipped" id="shop-item-default" data-costume="default">
                            <div class="shop-item-preview">🥬</div>
                            <div class="shop-item-info">
                                <h4>Lilo Daun</h4>
                                <p>Tampilan asli Lilo si daun hijau.</p>
                                <span class="shop-item-price">GRATIS</span>
                            </div>
                            <button class="btn-shop-action" disabled>Dipakai</button>
                        </div>
                        <div class="shop-item-card locked-costume" id="shop-item-chef" data-costume="chef" data-price="30">
                            <div class="shop-item-preview">🧑‍🍳</div>
                            <div class="shop-item-info">
                                <h4>Lilo Koki</h4>
                                <p>Dilengkapi topi koki yang imut.</p>
                                <span class="shop-item-price">🪙 30 Koin</span>
                            </div>
                            <button class="btn-shop-action btn-buy">Beli</button>
                        </div>
                        <div class="shop-item-card locked-costume" id="shop-item-astronaut" data-costume="astronaut" data-price="60">
                            <div class="shop-item-preview">👨‍🚀</div>
                            <div class="shop-item-info">
                                <h4>Lilo Astronaut</h4>
                                <p>Helm kaca untuk petualangan kosmis.</p>
                                <span class="shop-item-price">🪙 60 Koin</span>
                            </div>
                            <button class="btn-shop-action btn-buy">Beli</button>
                        </div>
                        <div class="shop-item-card locked-costume" id="shop-item-king" data-costume="king" data-price="100">
                            <div class="shop-item-preview">👑</div>
                            <div class="shop-item-info">
                                <h4>Lilo Raja</h4>
                                <p>Mahkota emas berkilau pahlawan.</p>
                                <span class="shop-item-price">🪙 100 Koin</span>
                            </div>
                            <button class="btn-shop-action btn-buy">Beli</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quiz Section merged into Eco Arcade above -->

    <!-- Explanation Modal for wrong sorting -->
    <div class="modal-overlay" id="explanation-modal" role="dialog" aria-modal="true">
        <div class="glass-panel modal-box" style="border-color:#ee5253; max-width: 550px;">
            <button class="modal-close" id="explanation-modal-close" aria-label="Tutup">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="modal-header">
                <div class="modal-header-icon" style="color:#ee5253; background:rgba(238, 82, 83, 0.1); border: 2px solid #ee5253;">
                    💡
                </div>
                <div class="modal-header-title">
                    <span style="color:#ee5253; background:#ffeaea;">Lilo Belajar</span>
                    <h2>Wah, Terkecoh!</h2>
                </div>
            </div>
            <div id="explanation-modal-content" style="font-size:1.15rem; color:var(--text-main); margin-top: 1rem; line-height: 1.6;">
                <!-- Text filled by JS -->
            </div>
            <div style="text-align: right; margin-top: 1.5rem;">
                <button class="btn-hero-primary" id="btn-close-explanation" style="padding: 0.7rem 1.6rem; font-size: 1rem;">Mengerti! 👍</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="#" class="footer-logo">🌱 EcoLearn</a>
                    <p class="footer-desc">Media belajar memilah sampah paling seru untuk anak-anak dan remaja Indonesia! 🌿🗑️</p>
                    <div class="footer-social">
                        <a href="#" class="footer-social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
                        </a>
                        <a href="#" class="footer-social-link" aria-label="YouTube">
                            <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                        <a href="#" class="footer-social-link" aria-label="TikTok">
                            <svg viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        </a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>Navigasi</h4>
                    <ul class="footer-nav">
                        <li><a href="#beranda">Beranda</a></li>
                        <li><a href="#eco-arcade">Eco Arcade</a></li>
                        <li><a href="#koleksi">Koleksi & Toko</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Tentang</h4>
                    <ul class="footer-nav">
                        <li><a href="#">Tentang EcoLearn</a></li>
                        <li><a href="#">Tim Pengembang</a></li>
                        <li><a href="#">Kebijakan Privasi</a></li>
                        <li><a href="#">Hubungi Kami</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 EcoLearn. Dibuat dengan 💚 untuk kelestarian bumi Indonesia.</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button class="btn-back-to-top" id="btn-back-to-top" aria-label="Kembali ke atas">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l-8 8h5v8h6v-8h5z"/></svg>
    </button>
</body>
</html>
