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
                    <li><a href="#modul-belajar">Modul Belajar 📚</a></li>
                    <li><a href="#koleksi">Koleksi & Toko 👕</a></li>
                    <li><a href="#peringkat">Peringkat 🏆</a></li>
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
                <a href="#modul-belajar" class="btn-cta" style="padding: 0.55rem 1.2rem; font-size: 0.85rem;">Mulai Belajar! 📖</a>
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
        <a href="#modul-belajar" class="mobile-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            Modul Belajar
        </a>
        <a href="#koleksi" class="mobile-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Koleksi & Toko
        </a>
        <a href="#peringkat" class="mobile-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M12 2a6 6 0 0 1 6 6v3.2a6 6 0 0 1-2.14 4.54l-1.72 1.46c-.53.45-.85 1.1-.9 1.8H10.76c-.05-.7-.37-1.35-.9-1.8l-1.72-1.46A6 6 0 0 1 6 11.2V8a6 6 0 0 1 6-6z"/></svg>
            Peringkat
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
                    <span>Hai! Aku <b>Lilo</b>! Yuk baca materi seru seputar pemilahan sampah dan kelestarian bumi! 🌍💚</span>
                </div>
            </div>

            <div class="hero-tag">🌱 Pahlawan Lingkungan Cilik & Remaja!</div>
            <h1 class="hero-title">Cintai Bumi Bersama <span>EcoLearn</span></h1>
            <p class="hero-desc">Jelajahi petualangan membaca materi lingkungan yang seru, interaktif, dan mudah dipahami untuk anak-anak dan remaja!</p>
            <div class="hero-actions">
                <a href="#modul-belajar" class="btn-hero-primary">Mulai Membaca 📖</a>
                <a href="#koleksi" class="btn-hero-secondary">Toko Kostum 👕</a>
            </div>
        </div>
        <a href="#modul-belajar" class="scroll-indicator" aria-label="Gulir ke bawah">
            <span>Scroll Kebawah</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16.5l-6-6h12z"/></svg>
        </a>
    </section>

    <!-- Interactive Learning Modules Section -->
    <section class="section" id="modul-belajar" style="background: linear-gradient(135deg, rgba(240, 253, 244, 0.5) 0%, rgba(224, 242, 254, 0.5) 100%); border-top: 3px solid rgba(187, 247, 208, 0.6); border-bottom: 3px solid rgba(187, 247, 208, 0.6);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag" style="background: #f0fdf4; color: #15803d; border: 1.5px solid #bbf7d0;">Pusat Literasi Eco</span>
                <h2 class="section-title">Modul Belajar Interaktif 📚</h2>
                <p class="section-desc">Pilih dan baca materi seru seputar pemilahan sampah dan kelestarian lingkungan! Selesaikan bacaan dan kuis di tiap materi untuk mengumpulkan XP & Koin!</p>
            </div>

            <!-- Filters & Controls Bar -->
            <div class="learning-controls-bar reveal" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-radius: 24px; padding: 1.5rem; border: 2px solid #bbf7d0; margin-bottom: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; flex-direction: column; gap: 1.2rem;">
                
                <!-- Search & Overall Progress -->
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <!-- Search Input -->
                    <div style="position: relative; flex: 1; min-width: 260px;">
                        <span style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); font-size: 1.1rem; pointer-events: none; color: #94a3b8;">🔍</span>
                        <input type="text" id="learning-search-input" placeholder="Cari topik atau materi..." style="width: 100%; padding: 0.8rem 1rem 0.8rem 2.8rem; border-radius: 16px; border: 2px solid #cbd5e1; outline: none; font-size: 0.95rem; font-family: var(--font-main); transition: all 0.2s ease; background: #ffffff;">
                    </div>

                    <!-- Overall Learning Progress Pill -->
                    <div class="stat-pill" style="padding: 0.6rem 1.2rem; font-size: 0.9rem; border-color:#86efac; background:#f0fdf4; display: flex; align-items: center; gap: 0.6rem;">
                        <span style="font-size: 1.2rem;">📖</span>
                        <div>
                            <span style="font-weight: 800; color: var(--text-dark);" id="learning-progress-text">Progres: 0 / 6 Materi</span>
                            <div style="width: 120px; height: 8px; background: #dcfce7; border-radius: 10px; overflow: hidden; margin-top: 3px;">
                                <div id="learning-progress-bar-fill" style="width: 0%; height: 100%; background: linear-gradient(90deg, #4ade80, #22c55e); border-radius: 10px; transition: width 0.3s ease;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Category Filters & Age Target Filters -->
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px dashed #e2e8f0; padding-top: 1rem;">
                    <!-- Category Pills -->
                    <div class="filter-pills-group" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <button class="filter-pill active" data-category="all">🌟 Semua Topik</button>
                        <button class="filter-pill" data-category="sorting">🌱 Pemilahan Sampah</button>
                        <button class="filter-pill" data-category="river">🌊 Sungai & Laut</button>
                        <button class="filter-pill" data-category="zerowaste">♻️ Zero Waste</button>
                        <button class="filter-pill" data-category="climate">🌍 Iklim & Bumi</button>
                    </div>

                    <!-- Age Target Filter -->
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">Target Usia:</span>
                        <div style="display: flex; background: #f1f5f9; padding: 3px; border-radius: 14px; border: 1px solid #e2e8f0;">
                            <button class="age-toggle-btn active" data-age="all">Semua</button>
                            <button class="age-toggle-btn" data-age="kids">👶 Anak-Anak</button>
                            <button class="age-toggle-btn" data-age="teens">🧑‍🎓 Remaja</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Material Cards Grid Container -->
            <div class="learning-grid reveal" id="learning-cards-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.8rem;">
                <!-- Material cards will be rendered dynamically by JS -->
            </div>

        </div>
    </section>

    <!-- Interactive Reader Modal / Workspace View -->
    <div class="reader-modal-overlay" id="reader-modal" style="display: none;">
        <div class="reader-modal-box">
            
            <!-- Reader Top Header Bar -->
            <div class="reader-top-bar">
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <span id="reader-category-icon" style="font-size: 1.5rem;">🌱</span>
                    <div>
                        <span id="reader-category-badge" class="reader-tag-pill">🌱 Pemilahan Sampah</span>
                        <h3 id="reader-modal-title" style="margin: 0; font-family: var(--font-outfit); font-size: 1.2rem; font-weight: 800; color: var(--text-dark);">Judul Materi</h3>
                    </div>
                </div>

                <div class="reader-actions" style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                    <!-- Audio Reader Toggle -->
                    <button class="btn-reader-tool" id="btn-reader-audio" title="Dengarkan Suara (Audio Reader)">
                        <span id="reader-audio-icon">🔊</span> <span style="font-size: 0.85rem; font-weight: 700;" id="reader-audio-text">Dengarkan</span>
                    </button>
                    <!-- Font Size Adjust -->
                    <div style="display: flex; background: #f1f5f9; border-radius: 10px; border: 1px solid #cbd5e1; overflow: hidden;">
                        <button class="btn-reader-size" id="btn-font-dec" title="Kecilkan Teks">Aa-</button>
                        <button class="btn-reader-size" id="btn-font-inc" title="Besarkan Teks">Aa+</button>
                    </div>
                    <!-- Bookmark -->
                    <button class="btn-reader-tool" id="btn-reader-bookmark" title="Simpan Bookmark">
                        <span id="bookmark-icon">🔖</span>
                    </button>
                    <!-- Close -->
                    <button class="btn-reader-close" id="btn-close-reader" title="Tutup Bacaan">
                        ✕ Tutup
                    </button>
                </div>
            </div>

            <!-- Top Reading Progress Indicator -->
            <div style="width: 100%; height: 5px; background: #e2e8f0; position: relative;">
                <div id="reader-scroll-progress" style="width: 0%; height: 100%; background: linear-gradient(90deg, #22c55e, #38bdf8); transition: width 0.1s linear;"></div>
            </div>

            <!-- Reader Body Content Layout -->
            <div class="reader-body">
                
                <!-- Left/Center Article Content -->
                <div class="reader-article-main" id="reader-article-body">
                    <!-- Dynamic Material Content injected by JS -->
                </div>

                <!-- Right Sidebar Companion -->
                <div class="reader-sidebar">
                    <!-- Mascot Floating Card -->
                    <div class="glass-panel" style="padding: 1.2rem; border-radius: 18px; border: 2px solid #bbf7d0; background: #f0fdf4; margin-bottom: 1.2rem; text-align: center;">
                        <div id="reader-mascot-container" style="width: 70px; height: 70px; margin: 0 auto 0.5rem;"></div>
                        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark); margin: 0 0 0.3rem;">Teman Belajar Lilo 🍃</h4>
                        <p id="reader-mascot-tip" style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.45; margin: 0;">"Bacalah materi ini dengan teliti ya! Jawab kuis refleksi di bagian bawah untuk dapat 30 XP!"</p>
                    </div>

                    <!-- Meta Information Card -->
                    <div class="glass-panel" style="padding: 1.2rem; border-radius: 18px; border: 2px solid #e2e8f0; background: #ffffff;">
                        <h4 style="font-size: 0.9rem; font-weight: 800; color: var(--text-dark); margin: 0 0 0.8rem; display: flex; align-items: center; gap: 0.4rem;">
                            <span>📊</span> Info Pembelajaran
                        </h4>
                        <div style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.85rem; color: var(--text-muted);">
                            <div style="display: flex; justify-content: space-between;">
                                <span>Estimasi Baca:</span>
                                <b id="reader-meta-time" style="color: var(--text-dark);">⏱️ 3 Menit</b>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>Target Pembaca:</span>
                                <b id="reader-meta-age" style="color: var(--text-dark);">👶 Anak-Anak</b>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>Bonus Hadiah:</span>
                                <b style="color: #16a34a;">⭐ 30 XP & 🪙 15 Koin</b>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>Status Bacaan:</span>
                                <b id="reader-meta-status" style="color: #ca8a04;">Belum Selesai</b>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Reader Footer Action Bar -->
            <div class="reader-footer-bar">
                <button class="btn-hero-secondary" id="btn-reader-prev" style="padding: 0.65rem 1.2rem; font-size: 0.9rem;">← Kembali ke Daftar</button>
                <button class="btn-hero-primary" id="btn-complete-material" style="padding: 0.75rem 1.8rem; font-size: 0.95rem; border: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                    <span>Tandai Selesai & Klaim Reward 🎉</span>
                </button>
            </div>

        </div>
    </div>

    <!-- SECTION: Achievements Gallery & Wardrobe Shop -->
    <section class="section" id="koleksi" style="background: rgba(255, 255, 255, 0.45); border-top: 3px solid rgba(203, 213, 225, 0.6); border-bottom: 3px solid rgba(203, 213, 225, 0.6);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag" style="background: #f0fdf4; color: #15803d; border: 1.5px solid #bbf7d0;">Prestasi & Toko</span>
                <h2 class="section-title">Galeri Lencana & Lemari Baju Lilo 👕</h2>
                <p class="section-desc">Buka lencana kebanggaan dari aktivitas membaca & kuis, lalu kumpulkan koin untuk mendandani Lilo dengan kostum impianmu!</p>
            </div>

            <div class="koleksi-grid reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem; align-items: stretch;">
                
                <!-- Card 1: Galeri Lencana Pahlawan -->
                <div class="glass-panel koleksi-card" style="padding: 2rem; border-radius: 24px; border: 3px solid #86efac; background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 2px dashed #cbd5e1; padding-bottom: 1rem;">
                            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-dark); margin: 0; display: flex; align-items: center; gap: 0.6rem;">
                                <span>🏅</span> Galeri Lencana Pahlawan
                            </h3>
                            <div class="stat-pill" style="border-color: #86efac; background: #f0fdf4; color: #15803d; padding: 0.35rem 0.8rem; font-size: 0.82rem;">
                                <span>⭐ Terbuka:</span> <b id="badge-unlocked-count">0</b>/6
                            </div>
                        </div>
                        
                        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">Buka lencana pahlawan lingkungan dari membaca materi & kuis! Sentuh lencana untuk melihat syarat pemicunya.</p>

                        <!-- Sub-banner Progress Highlight -->
                        <div style="display: flex; gap: 1rem; align-items: center; background: #f0fdf4; padding: 0.8rem 1rem; border-radius: 16px; border: 1.5px solid #bbf7d0; margin-bottom: 1.2rem;">
                            <div style="width: 54px; height: 54px; flex-shrink: 0; background: #dcfce7; border-radius: 50%; border: 2px solid #86efac; display: flex; align-items: center; justify-content: center; font-size: 1.6rem;">
                                🎖️
                            </div>
                            <div style="flex: 1;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <h4 id="badge-rank-title" style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark); margin: 0;">Pahlawan Pemula</h4>
                                    <span style="font-size: 0.78rem; font-weight: 800; color: #16a34a;" id="badge-pct-text">0% Terkumpul</span>
                                </div>
                                <div style="width: 100%; height: 8px; background: #dcfce7; border-radius: 10px; overflow: hidden; margin-top: 0.4rem;">
                                    <div id="badge-progress-bar-fill" style="width: 0%; height: 100%; background: linear-gradient(90deg, #4ade80, #22c55e); border-radius: 10px; transition: width 0.3s ease;"></div>
                                </div>
                            </div>
                        </div>

                        <div class="badges-grid-dashboard" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem;">
                            <!-- Badge items -->
                            <div class="badge-item locked" id="badge-rookie">
                                <div class="badge-icon">🌱</div>
                                <div class="badge-name">Pembaca Pemula</div>
                                <div class="badge-tooltip">Pembaca Pemula: Selesaikan 1 materi pembelajaran pertama.</div>
                            </div>
                            <div class="badge-item locked" id="badge-coins">
                                <div class="badge-icon">💰</div>
                                <div class="badge-name">Kolektor Koin</div>
                                <div class="badge-tooltip">Kolektor Koin: Kumpulkan minimal 50 Koin.</div>
                            </div>
                            <div class="badge-item locked" id="badge-organic">
                                <div class="badge-icon">🥗</div>
                                <div class="badge-name">Ahli Organik</div>
                                <div class="badge-tooltip">Ahli Organik: Selesaikan bacaan materi Pemilahan & Kompos.</div>
                            </div>
                            <div class="badge-item locked" id="badge-hazardous">
                                <div class="badge-icon">📚</div>
                                <div class="badge-name">Kutu Buku Eco</div>
                                <div class="badge-tooltip">Kutu Buku Eco: Selesaikan 3 materi pembelajaran.</div>
                            </div>
                            <div class="badge-item locked" id="badge-master">
                                <div class="badge-icon">👑</div>
                                <div class="badge-name">Master EcoLearn</div>
                                <div class="badge-tooltip">Master EcoLearn: Selesaikan seluruh 6 materi pembelajaran.</div>
                            </div>
                            <div class="badge-item locked" id="badge-perfect">
                                <div class="badge-icon">⚡</div>
                                <div class="badge-name">Bintang Literasi</div>
                                <div class="badge-tooltip">Bintang Literasi: Jawab kuis refleksi materi dengan tepat!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Lilo Wardrobe Shop -->
                <div class="glass-panel koleksi-card" style="padding: 2rem; border-radius: 24px; border: 3px solid #fef08a; background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 2px dashed #cbd5e1; padding-bottom: 1rem;">
                            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-dark); margin: 0; display: flex; align-items: center; gap: 0.6rem;">
                                <span>🛍️</span> Lemari Baju Lilo
                            </h3>
                            <div class="stat-pill" style="border-color: #fef08a; background: #fef9c3; color: #854d0e; padding: 0.35rem 0.8rem; font-size: 0.82rem;">
                                <span>🪙 Koin:</span> <b id="shop-coins-val">0</b>
                            </div>
                        </div>

                        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.5;">Tukarkan koin dari membaca materi & kuis untuk mendandani Lilo dengan kostum impianmu!</p>

                        <!-- Current Mascot Preview Bar -->
                        <div style="display: flex; gap: 1rem; align-items: center; background: #fdf6b2; padding: 0.8rem 1rem; border-radius: 16px; border: 1.5px solid #fef08a; margin-bottom: 1.2rem;">
                            <div class="profile-avatar-container" id="profile-mascot-avatar" style="width: 54px; height: 54px; flex-shrink: 0; border: 2px solid #eab308; background: white; border-radius: 50%;">
                                <!-- Dynamic SVG -->
                            </div>
                            <div>
                                <h4 id="player-title" style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark); margin: 0;">Pahlawan Pemilah</h4>
                                <p style="font-size: 0.82rem; color: #854d0e; margin-top: 0.2rem; margin-bottom: 0;">Total XP: <b id="player-xp-val" style="color: var(--primary-dark);">0</b> XP</p>
                            </div>
                        </div>

                        <!-- Costume Grid (2x2) -->
                        <div class="costumes-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.9rem;">
                            
                            <!-- Costume Item 1 -->
                            <div class="shop-item-card purchased equipped" id="shop-item-default" data-costume="default">
                                <div class="shop-item-preview" style="font-size: 2rem;">🥬</div>
                                <div class="shop-item-info">
                                    <h4 style="font-size: 0.88rem; font-weight: 800; margin-bottom: 0.2rem;">Lilo Daun</h4>
                                    <span class="shop-item-price" style="font-size: 0.75rem; font-weight: 800; color: #16a34a;">GRATIS</span>
                                </div>
                                <button class="btn-shop-action" disabled style="width: 100%; font-size: 0.8rem; padding: 0.35rem 0.6rem;">Dipakai</button>
                            </div>

                            <!-- Costume Item 2 -->
                            <div class="shop-item-card locked-costume" id="shop-item-chef" data-costume="chef" data-price="30">
                                <div class="shop-item-preview" style="font-size: 2rem;">🧑‍🍳</div>
                                <div class="shop-item-info">
                                    <h4 style="font-size: 0.88rem; font-weight: 800; margin-bottom: 0.2rem;">Lilo Koki</h4>
                                    <span class="shop-item-price" style="font-size: 0.75rem; font-weight: 800; color: #854d0e;">🪙 30 Koin</span>
                                </div>
                                <button class="btn-shop-action btn-buy" style="width: 100%; font-size: 0.8rem; padding: 0.35rem 0.6rem;">Beli</button>
                            </div>

                            <!-- Costume Item 3 -->
                            <div class="shop-item-card locked-costume" id="shop-item-astronaut" data-costume="astronaut" data-price="60">
                                <div class="shop-item-preview" style="font-size: 2rem;">👨‍🚀</div>
                                <div class="shop-item-info">
                                    <h4 style="font-size: 0.88rem; font-weight: 800; margin-bottom: 0.2rem;">Lilo Astronaut</h4>
                                    <span class="shop-item-price" style="font-size: 0.75rem; font-weight: 800; color: #854d0e;">🪙 60 Koin</span>
                                </div>
                                <button class="btn-shop-action btn-buy" style="width: 100%; font-size: 0.8rem; padding: 0.35rem 0.6rem;">Beli</button>
                            </div>

                            <!-- Costume Item 4 -->
                            <div class="shop-item-card locked-costume" id="shop-item-king" data-costume="king" data-price="100">
                                <div class="shop-item-preview" style="font-size: 2rem;">👑</div>
                                <div class="shop-item-info">
                                    <h4 style="font-size: 0.88rem; font-weight: 800; margin-bottom: 0.2rem;">Lilo Raja</h4>
                                    <span class="shop-item-price" style="font-size: 0.75rem; font-weight: 800; color: #854d0e;">🪙 100 Koin</span>
                                </div>
                                <button class="btn-shop-action btn-buy" style="width: 100%; font-size: 0.8rem; padding: 0.35rem 0.6rem;">Beli</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- NEW SECTION: Leaderboard Papan Peringkat -->
    <section class="section" id="peringkat" style="background: linear-gradient(135deg, rgba(240, 253, 244, 0.4) 0%, rgba(224, 242, 254, 0.4) 100%); border-top: 3px solid rgba(187, 247, 208, 0.6); border-bottom: 3px solid rgba(187, 247, 208, 0.6);">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag" style="background: #fef9c3; color: #854d0e; border: 1.5px solid #fef08a;">Pahlawan Terbaik</span>
                <h2 class="section-title">Papan Peringkat Eco 🏆</h2>
                <p class="section-desc">Kumpulkan bintang XP sebanyak-banyaknya dengan membaca materi dan menyelesaikan kuis untuk memanjat tangga lagu Pahlawan Eco!</p>
            </div>

            <!-- Top 3 Podium Cards -->
            <div class="podium-container reveal" id="leaderboard-podium-container" style="display: flex; justify-content: center; align-items: flex-end; gap: 1.2rem; margin-bottom: 2.5rem; flex-wrap: wrap;">
                <!-- Rendered dynamically by JS -->
            </div>

            <!-- Leaderboard List Table -->
            <div class="glass-panel leaderboard-card reveal" style="padding: 1.8rem; border-radius: 24px; border: 3px solid #cbd5e1; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(12px); max-width: 850px; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; border-bottom: 2px dashed #cbd5e1; padding-bottom: 0.8rem;">
                    <h3 style="font-family: var(--font-outfit); font-size: 1.2rem; font-weight: 800; color: var(--text-dark); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                        <span>📊</span> Klasemen Peringkat XP
                    </h3>
                    <span style="font-size: 0.82rem; font-weight: 700; color: #16a34a; background: #f0fdf4; border: 1px solid #86efac; padding: 0.3rem 0.8rem; border-radius: 12px;" id="user-rank-status-pill">Peringkat Kamu: #--</span>
                </div>

                <div class="leaderboard-list-table" id="leaderboard-list-container" style="display: flex; flex-direction: column; gap: 0.6rem;">
                    <!-- Rendered dynamically by JS -->
                </div>

            </div>
        </div>
    </section>

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
                        <li><a href="#modul-belajar">Modul Belajar 📚</a></li>
                        <li><a href="#koleksi">Koleksi & Toko 👕</a></li>
                        <li><a href="#peringkat">Peringkat 🏆</a></li>
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
