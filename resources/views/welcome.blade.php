<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="EcoLearn - Belajar Siaga & Mitigasi Bencana Interaktif Bersama Lilo! Didesain khusus untuk anak-anak agar asyik belajar tanggap darurat.">
    <meta name="author" content="EcoLearn Team">
    <title>EcoLearn - Petualangan Siaga Bencana Cilik!</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>

    <canvas id="confetti-canvas"></canvas>

    <div class="kids-decorations" aria-hidden="true">
        <div class="cloud-item cloud-1"></div>
        <div class="cloud-item cloud-2"></div>
    </div>

    <svg style="width:0;height:0;position:absolute;" aria-hidden="true">
        <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#86efac" />
                <stop offset="100%" stop-color="#22c55e" />
            </linearGradient>
            <linearGradient id="score-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#22c55e" />
                <stop offset="100%" stop-color="#54a0ff" />
            </linearGradient>
        </defs>
    </svg>

    <!-- Header -->
    <header id="main-header">
        <div class="container nav-container">
            <a href="#" class="logo" id="nav-brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 5.5a7 7 0 0 1-7 7h-3"/>
                    <path d="M9 20v-5h4"/>
                </svg>
                <span>EcoLearn</span>
            </a>
            <nav>
                <ul class="nav-links" id="nav-menu">
                    <li><a href="#beranda" class="active">Beranda</a></li>
                    <li><a href="#panduan">Petualangan Siaga</a></li>
                    <li><a href="#kuis">Kuis Pahlawan</a></li>
                </ul>
            </nav>
            <a href="#kuis" class="btn-cta">Main Kuis!</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="beranda">
        <div class="container hero-content">
            <div class="mascot-container">
                <svg viewBox="0 0 100 100" class="mascot-svg" width="60" height="60" aria-label="Lilo si daun penyelamat">
                    <path d="M50,15 C20,40 20,70 50,85 C80,70 80,40 50,15 Z" fill="#4ade80" stroke="#15803d" stroke-width="4"/>
                    <path d="M50,15 L50,85" stroke="#15803d" stroke-width="3" stroke-dasharray="1 2"/>
                    <path d="M50,45 Q32,40 28,32" stroke="#15803d" stroke-width="3" fill="none"/>
                    <path d="M50,55 Q68,50 72,42" stroke="#15803d" stroke-width="3" fill="none"/>
                    <circle cx="40" cy="50" r="6" fill="#1e293b"/>
                    <circle cx="60" cy="50" r="6" fill="#1e293b"/>
                    <circle cx="38" cy="47" r="2" fill="#ffffff"/>
                    <circle cx="58" cy="47" r="2" fill="#ffffff"/>
                    <circle cx="34" cy="56" r="5" fill="#f87171" opacity="0.6"/>
                    <circle cx="66" cy="56" r="5" fill="#f87171" opacity="0.6"/>
                    <path d="M44,58 Q50,65 56,58" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round"/>
                </svg>
                <div class="mascot-bubble">
                    <span>Hai! Aku <b>Lilo</b>! Klik kartu bencana di bawah untuk bermain mini-game seru! 🎮</span>
                </div>
            </div>

            <div class="hero-tag">🌱 Petualangan Mitigasi Seru!</div>
            <h1 class="hero-title">Siaga Bersama <span>EcoLearn</span></h1>
            <p class="hero-desc">Belajar cara menyelamatkan diri saat bencana alam lewat mini-game interaktif yang seru dan menyenangkan!</p>
            <div class="hero-actions">
                <a href="#panduan" class="btn-hero-primary">Mulai Bermain 🎮</a>
                <a href="#kuis" class="btn-hero-secondary">Main Kuis 🏆</a>
            </div>
        </div>
        <a href="#panduan" class="scroll-indicator" aria-label="Gulir ke bawah">
            <span>Scroll Kebawah</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16.5l-6-6h12z"/></svg>
        </a>
    </section>

    <!-- Disaster Mini-Games Section -->
    <section class="section" id="panduan">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag">Petualangan Siaga</span>
                <h2 class="section-title">Pilih Misi Penyelamatanmu!</h2>
                <p class="section-desc">Klik salah satu kartu bencana di bawah ini untuk memainkan mini-game seru dan belajar cara menyelamatkan diri!</p>
            </div>

            <div class="disasters-grid reveal">
                <div class="glass-panel disaster-card fire" data-type="fire" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                    </div>
                    <h3>🔥 Kebakaran Hutan</h3>
                    <p>Misi Sapu Tangan Basah — Buat masker darurat dan selamatkan diri dari asap tebal!</p>
                    <span class="read-more-link">Main Sekarang &rarr;</span>
                </div>

                <div class="glass-panel disaster-card gas" data-type="gas" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <h3>⚠️ Gas Bocor Rumah</h3>
                    <p>Misi Dapur Siaga — Pilih tindakan AMAN dan hindari yang BAHAYA di dapur!</p>
                    <span class="read-more-link">Main Sekarang &rarr;</span>
                </div>

                <div class="glass-panel disaster-card flood" data-type="flood" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3v18M3 12h18M3 17h18M3 7h18"/></svg>
                    </div>
                    <h3>🌊 Banjir Bandang</h3>
                    <p>Misi Kemas Tas Siaga — Pilih benda-benda PENTING dan isi ransel penyelamatanmu!</p>
                    <span class="read-more-link">Main Sekarang &rarr;</span>
                </div>

                <div class="glass-panel disaster-card quake" data-type="quake" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22v-4M8 14l4 4 4-4M4 10l8 8 8-8M12 2v4M8 6h8"/></svg>
                    </div>
                    <h3>🌋 Gempa Bumi</h3>
                    <p>Misi Cari Tempat Sembunyi — Temukan semua spot aman di ruangan yang bergetar!</p>
                    <span class="read-more-link">Main Sekarang &rarr;</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Quiz Section -->
    <section class="section" id="kuis">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag">Uji Pengetahuan</span>
                <h2 class="section-title">Kuis Pahlawan Siaga</h2>
                <p class="section-desc">Mainkan kuis seru bersama Lilo. Dapatkan lencana Pahlawan Kesiapsiagaan Cilik dengan skor tertinggi!</p>
            </div>

            <div class="glass-panel quiz-wrapper reveal">
                <!-- Welcome -->
                <div class="quiz-screen quiz-welcome active" id="quiz-screen-welcome">
                    <div class="quiz-icon">
                        <svg viewBox="0 0 100 100" width="80" height="80">
                            <path d="M50,15 C20,40 20,70 50,85 C80,70 80,40 50,15 Z" fill="#4ade80" stroke="#15803d" stroke-width="4"/>
                            <circle cx="40" cy="50" r="6" fill="#1e293b"/><circle cx="60" cy="50" r="6" fill="#1e293b"/>
                            <circle cx="38" cy="47" r="2" fill="#fff"/><circle cx="58" cy="47" r="2" fill="#fff"/>
                            <circle cx="34" cy="56" r="5" fill="#f87171" opacity="0.6"/><circle cx="66" cy="56" r="5" fill="#f87171" opacity="0.6"/>
                            <path d="M44,58 Q50,65 56,58" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <h3>Uji Kesiapan Pahlawanmu!</h3>
                    <p>Bantu Lilo menjawab 5 teka-teki mitigasi bencana yang seru. Raih bintang penuh dan kumpulkan lencanamu! 🎉</p>
                    <div class="quiz-features">
                        <div class="feature-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                            5 Pertanyaan Seru
                        </div>
                        <div class="feature-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            Hadiah Kembang Api!
                        </div>
                        <div class="feature-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M12 2a6 6 0 0 1 6 6v3.2a6 6 0 0 1-2.14 4.54l-1.72 1.46c-.53.45-.85 1.1-.9 1.8H10.76c-.05-.7-.37-1.35-.9-1.8l-1.72-1.46A6 6 0 0 1 6 11.2V8a6 6 0 0 1 6-6z"/></svg>
                            Lencana Pahlawan
                        </div>
                    </div>
                    <button class="btn-hero-primary" id="btn-quiz-start">Mulai Main Kuis! 🎮</button>
                </div>

                <!-- Play -->
                <div class="quiz-screen" id="quiz-screen-play">
                    <div class="quiz-header">
                        <span id="quiz-progress-text">Teka-teki 1 dari 5</span>
                        <div style="display:flex;align-items:center;gap:0.3rem;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 5.5a7 7 0 0 1-7 7h-3"/></svg>
                            <span>Lilo Assistant</span>
                        </div>
                    </div>
                    <div class="quiz-progress-container">
                        <div class="quiz-progress-bar" id="quiz-progress-bar"></div>
                    </div>
                    <div class="quiz-question-box">
                        <div class="quiz-mascot-speech">
                            <svg viewBox="0 0 100 100" class="mascot-svg" width="60" height="60" aria-hidden="true">
                                <path d="M50,15 C20,40 20,70 50,85 C80,70 80,40 50,15 Z" fill="#4ade80" stroke="#15803d" stroke-width="4"/>
                                <circle cx="40" cy="50" r="6" fill="#1e293b"/><circle cx="60" cy="50" r="6" fill="#1e293b"/>
                                <circle cx="38" cy="47" r="2" fill="#fff"/><circle cx="58" cy="47" r="2" fill="#fff"/>
                                <circle cx="34" cy="56" r="5" fill="#f87171" opacity="0.6"/><circle cx="66" cy="56" r="5" fill="#f87171" opacity="0.6"/>
                                <path d="M44,58 Q50,65 56,58" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round"/>
                            </svg>
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
                        <p id="result-desc">Deskripsi kemampuan mitigasi kamu.</p>
                    </div>
                    <div class="results-actions">
                        <button class="btn-hero-primary" id="btn-quiz-restart">Main Lagi 🎮</button>
                        <a href="#panduan" class="btn-hero-secondary">Main Mini-Game</a>
                    </div>
                    <h3>Gempa Bumi</h3>
                    <p>Metode penyelamatan Drop-Cover-Hold On, mengenali zona aman perlindungan dalam bangunan, serta tindakan evakuasi gempa susulan.</p>
                    <span class="read-more-link">Pelajari &rarr;</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Game Modal (simplified - single game container) -->
    <div class="modal-overlay" id="disaster-modal" role="dialog" aria-modal="true">
        <div class="glass-panel modal-box">
            <button class="modal-close" id="modal-close" aria-label="Tutup">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="modal-header">
                <div class="modal-header-icon" id="modal-icon-container"></div>
                <div class="modal-header-title">
                    <span id="modal-category">Misi</span>
                    <h2 id="modal-title">Nama Bencana</h2>
                </div>
            </div>
            <!-- Game renders here dynamically -->
            <div id="game-container"></div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container footer-content">
            <div>
                <a href="#" class="footer-logo">EcoLearn</a>
                <p style="margin-top:0.5rem;font-size:0.95rem;max-width:280px;">Media belajar siaga bencana paling seru untuk anak-anak Indonesia! 🌿</p>
            </div>
            <ul class="footer-nav">
                <li><a href="#beranda">Beranda</a></li>
                <li><a href="#panduan">Petualangan Siaga</a></li>
                <li><a href="#kuis">Kuis Pahlawan</a></li>
            </ul>
            <div>
                <p>&copy; 2026 EcoLearn. Dibuat dengan 💚 untuk anak-anak Indonesia.</p>
            </div>
        </div>
    </footer>
</body>
</html>
