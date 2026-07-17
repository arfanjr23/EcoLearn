<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="EcoLearn - Platform Edukasi Interaktif Tanggap Bencana & Kelestarian Lingkungan. Pelajari langkah mitigasi bencana kebakaran hutan, gas bocor, banjir bandang, gempa bumi, dan ikuti kuis kesiapsiagaan.">
    <meta name="author" content="EcoLearn Team">
    <title>EcoLearn - Edukasi Siaga & Mitigasi Bencana Interaktif</title>
    
    <!-- Preconnect Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Vite CSS & JS -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>

    <!-- Background Blobs -->
    <div class="bg-blobs" aria-hidden="true">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    </div>

    <!-- SVG Gradients Definitions -->
    <svg style="width:0;height:0;position:absolute;" aria-hidden="true">
        <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#34d399" />
                <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
            <linearGradient id="score-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10b981" />
                <stop offset="100%" stop-color="#06b6d4" />
            </linearGradient>
        </defs>
    </svg>

    <!-- Header Navigation -->
    <header id="main-header">
        <div class="container nav-container">
            <a href="#" class="logo" id="nav-brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 5.5a7 7 0 0 1-7 7h-3"/>
                    <path d="M9 20v-5h4"/>
                </svg>
                <span>EcoLearn</span>
            </a>
            <nav>
                <ul class="nav-links" id="nav-menu">
                    <li><a href="#beranda" class="active" id="link-beranda">Beranda</a></li>
                    <li><a href="#panduan" id="link-panduan">Panduan Bencana</a></li>
                    <li><a href="#kuis" id="link-kuis">Kuis Siaga</a></li>
                </ul>
            </nav>
            <a href="#kuis" class="btn-cta" id="nav-cta-btn">Mulai Kuis</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="beranda">
        <div class="container hero-content">
            <div class="hero-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Edu-Mitigasi Bencana
            </div>
            <h1 class="hero-title">
                Siaga Bersama <span>EcoLearn</span>
            </h1>
            <p class="hero-desc">
                Platform interaktif untuk mempelajari langkah penyelamatan diri saat terjadi bencana di sekitar kita. Karena kesiapsiagaan menyelamatkan nyawa.
            </p>
            <div class="hero-actions">
                <a href="#panduan" class="btn-hero-primary" id="hero-btn-explore">Pelajari Panduan</a>
                <a href="#kuis" class="btn-hero-secondary" id="hero-btn-quiz">Uji Kesiapan Anda</a>
            </div>
        </div>
        
        <a href="#panduan" class="scroll-indicator" id="hero-scroll-btn" aria-label="Gulir ke panduan bencana">
            <span>Scroll Kebawah</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16.5l-6-6h12z"/></svg>
        </a>
    </section>

    <!-- Disaster Guides Section -->
    <section class="section" id="panduan">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag">Katalog Penyelamatan</span>
                <h2 class="section-title">Panduan Kesiapsiagaan Bencana</h2>
                <p class="section-desc">Pilih jenis bencana di bawah ini untuk mempelajari langkah-langkah mitigasi darurat secara interaktif dan komprehensif.</p>
            </div>

            <!-- Disasters Grid -->
            <div class="disasters-grid reveal">
                <!-- Kebakaran Hutan -->
                <div class="glass-panel disaster-card fire" data-type="fire" id="card-fire" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                    </div>
                    <h3>Kebakaran Hutan</h3>
                    <p>Langkah evakuasi, perlindungan pernapasan dari abu pekat, dan tindakan pencegahan perluasan titik api di area terbuka hijau.</p>
                    <span class="read-more-link">Pelajari &rarr;</span>
                </div>

                <!-- Gas Bocor -->
                <div class="glass-panel disaster-card gas" data-type="gas" id="card-gas" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <h3>Gas Bocor Rumah</h3>
                    <p>Panduan kritis ketika mendeteksi kebocoran gas LPG/LNG, menghindari pemakaian listrik pemicu ledakan, dan sirkulasi udara darurat.</p>
                    <span class="read-more-link">Pelajari &rarr;</span>
                </div>

                <!-- Banjir Bandang -->
                <div class="glass-panel disaster-card flood" data-type="flood" id="card-flood" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M3 17h18M3 7h18"/></svg>
                    </div>
                    <h3>Banjir Bandang</h3>
                    <p>Cara mengamankan kelistrikan rumah, persiapan tas siaga banjir, rute evakuasi mandiri, dan penanganan air bersih pasca-banjir.</p>
                    <span class="read-more-link">Pelajari &rarr;</span>
                </div>

                <!-- Gempa Bumi -->
                <div class="glass-panel disaster-card quake" data-type="quake" id="card-quake" tabindex="0">
                    <div class="disaster-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-4M8 14l4 4 4-4M4 10l8 8 8-8M12 2v4M8 6h8"/></svg>
                    </div>
                    <h3>Gempa Bumi</h3>
                    <p>Metode penyelamatan Drop-Cover-Hold On, mengenali zona aman perlindungan dalam bangunan, serta tindakan evakuasi gempa susulan.</p>
                    <span class="read-more-link">Pelajari &rarr;</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Quiz Section -->
    <section class="section" id="kuis">
        <div class="container">
            <div class="section-header reveal">
                <span class="section-tag">Uji Pengetahuan</span>
                <h2 class="section-title">Kuis Siaga EcoLearn</h2>
                <p class="section-desc">Uji pemahaman mitigasi bencana Anda secara interaktif dan buktikan bahwa Anda siap dalam situasi darurat nyata.</p>
            </div>

            <!-- Quiz Dashboard Card -->
            <div class="glass-panel quiz-wrapper reveal" id="quiz-dashboard">
                
                <!-- Screen 1: Welcome -->
                <div class="quiz-screen quiz-welcome active" id="quiz-screen-welcome">
                    <div class="quiz-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <h3>Seberapa Siaga Anda?</h3>
                    <p>Tingkatkan insting penyelamatan diri Anda melalui 5 kuis berbasis kasus mitigasi bencana. Dapatkan evaluasi langsung kesiapsiagaan Anda!</p>
                    
                    <div class="quiz-features">
                        <div class="feature-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                            5 Soal Studi Kasus
                        </div>
                        <div class="feature-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            Instan Feedback & Edukasi
                        </div>
                        <div class="feature-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a6 6 0 0 1 6 6v3.2a6 6 0 0 1-2.14 4.54l-1.72 1.46c-.53.45-.85 1.1-.9 1.8H10.76c-.05-.7-.37-1.35-.9-1.8l-1.72-1.46A6 6 0 0 1 6 11.2V8a6 6 0 0 1 6-6z"/></svg>
                            Evaluasi Gelar Siaga
                        </div>
                    </div>

                    <button class="btn-hero-primary" id="btn-quiz-start" style="border:none; cursor:pointer;">Mulai Kuis Sekarang</button>
                </div>

                <!-- Screen 2: Active Play -->
                <div class="quiz-screen" id="quiz-screen-play">
                    <div class="quiz-header">
                        <span id="quiz-progress-text">Pertanyaan 1 dari 5</span>
                        <span>EcoLearn Edukasi</span>
                    </div>
                    
                    <div class="quiz-progress-container">
                        <div class="quiz-progress-bar" id="quiz-progress-bar"></div>
                    </div>

                    <div class="quiz-question-box">
                        <h4 id="quiz-question">Mencari pertanyaan...</h4>
                    </div>

                    <div class="options-grid" id="quiz-options">
                        <!-- Dynamic Options Generated by JS -->
                    </div>

                    <!-- Answer Explanation Panel -->
                    <div class="quiz-explanation" id="quiz-explanation">
                        <h5 id="explanation-title">Penjelasan</h5>
                        <p id="explanation-text">Penjelasan detail mengenai jawaban kuis.</p>
                    </div>

                    <div class="quiz-action-bar">
                        <button class="btn-quiz-next" id="btn-quiz-next">Pertanyaan Berikutnya &rarr;</button>
                    </div>
                </div>

                <!-- Screen 3: Results -->
                <div class="quiz-screen quiz-results" id="quiz-screen-results">
                    <!-- Radial Gauge Score -->
                    <div class="score-radial">
                        <svg width="150" height="150" viewBox="0 0 160 160">
                            <circle class="bg" cx="80" cy="80" r="70"></circle>
                            <circle class="progress" id="result-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="score-text">
                            <span class="score-num" id="result-score">0</span>
                            <span class="score-lbl">Skor Akhir</span>
                        </div>
                    </div>

                    <div class="badge-box">
                        <h4 id="result-title">Gelar Evaluasi</h4>
                        <p id="result-desc">Deskripsi kemampuan mitigasi Anda setelah menganalisis jawaban kuis.</p>
                    </div>

                    <div class="results-actions">
                        <button class="btn-hero-primary" id="btn-quiz-restart" style="border:none; cursor:pointer;">Ulangi Kuis</button>
                        <a href="#panduan" class="btn-hero-secondary">Tinjau Panduan Lagi</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Detailed Mitigation Modal -->
    <div class="modal-overlay" id="disaster-modal" role="dialog" aria-modal="true">
        <div class="glass-panel modal-box">
            <button class="modal-close" id="modal-close" aria-label="Tutup Detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <!-- Modal Header -->
            <div class="modal-header">
                <div class="modal-header-icon" id="modal-icon-container">
                    <!-- Icon loaded dynamically -->
                </div>
                <div class="modal-header-title">
                    <span id="modal-category">Bencana</span>
                    <h2 id="modal-title">Nama Bencana</h2>
                </div>
            </div>

            <!-- Tab Buttons Navigation -->
            <div class="modal-tabs">
                <button class="tab-btn active" data-tab="sebelum" id="btn-tab-sebelum">Sebelum Terjadi (Pra)</button>
                <button class="tab-btn" data-tab="saat" id="btn-tab-saat">Saat Terjadi (Tanggap)</button>
                <button class="tab-btn" data-tab="setelah" id="btn-tab-setelah">Setelah Terjadi (Pasca)</button>
            </div>

            <!-- Tab Contents -->
            <div class="modal-body">
                <div class="tab-content active" id="tab-sebelum">
                    <!-- Loaded dynamically -->
                </div>
                <div class="tab-content" id="tab-saat">
                    <!-- Loaded dynamically -->
                </div>
                <div class="tab-content" id="tab-setelah">
                    <!-- Loaded dynamically -->
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container footer-content">
            <div>
                <a href="#" class="footer-logo">EcoLearn</a>
                <p style="margin-top:0.5rem; font-size:0.85rem; max-width:280px;">Belajar tanggap darurat penyelamatan bencana secara interaktif demi kelestarian bumi.</p>
            </div>
            <ul class="footer-nav">
                <li><a href="#beranda">Beranda</a></li>
                <li><a href="#panduan">Panduan Bencana</a></li>
                <li><a href="#kuis">Kuis Siaga</a></li>
            </ul>
            <div>
                <p>&copy; 2026 EcoLearn Platform. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
