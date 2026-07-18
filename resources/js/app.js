import './bootstrap';

/* =========================================================================
   INTERACTIVE MINI-GAME DEFINITIONS
   Each disaster has a unique mini-game that teaches kids survival skills
   ========================================================================= */

const miniGames = {
    fire: {
        title: "Kebakaran Hutan",
        category: "Misi Sapu Tangan Basah",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
        color: "#ee5253",
        class: "fire",
        instruction: "🔥 Oh tidak! Asap tebal menyelimuti! Klik benda-benda di bawah ini BERURUTAN untuk membuat masker basah dan melarikan diri!",
        // Steps: 1) Pick towel, 2) Pick water, 3) Combine -> wet mask, 4) Put on face, 5) Run to exit
        steps: [
            { id: "towel", emoji: "🧣", label: "Sapu Tangan", hint: "Langkah 1: Ambil sapu tanganmu dulu!" },
            { id: "water", emoji: "💧", label: "Air Bersih", hint: "Langkah 2: Basahi sapu tangan dengan air!" },
            { id: "mask", emoji: "😷", label: "Tutup Hidung", hint: "Langkah 3: Tutup hidung & mulutmu dengan sapu tangan basah!" },
            { id: "run", emoji: "🏃", label: "Lari ke Aman", hint: "Langkah 4: Lari melawan arah angin ke tempat terbuka!" }
        ]
    },
    gas: {
        title: "Gas Bocor Rumah",
        category: "Misi Dapur Siaga",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        color: "#ff9f43",
        class: "gas",
        instruction: "⚠️ Kamu mencium bau gas di dapur! Pilih tindakan yang AMAN dan hindari yang BERBAHAYA!",
        actions: [
            { id: "open_window", emoji: "🪟", label: "Buka Jendela", safe: true, feedback: "Bagus! Buka jendela agar gas tertiup angin keluar!" },
            { id: "light_switch", emoji: "💡", label: "Nyalakan Lampu", safe: false, feedback: "BAHAYA! Percikan listrik bisa memicu ledakan gas!" },
            { id: "unplug_reg", emoji: "🔧", label: "Lepas Regulator", safe: true, feedback: "Pintar! Melepas regulator menghentikan aliran gas bocor!" },
            { id: "stove_test", emoji: "🔥", label: "Tes Kompor", safe: false, feedback: "JANGAN! Menyalakan api dekat gas bocor sangat berbahaya!" },
            { id: "go_outside", emoji: "🚪", label: "Keluar Rumah", safe: true, feedback: "Benar! Keluar ke udara segar agar tidak keracunan gas!" },
            { id: "phone_call", emoji: "📱", label: "Telepon di Dapur", safe: false, feedback: "Jangan telepon di dapur! HP bisa mengeluarkan percikan listrik kecil!" }
        ]
    },
    flood: {
        title: "Banjir Bandang",
        category: "Misi Kemas Tas Siaga",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3v18M3 12h18M3 17h18M3 7h18"/></svg>`,
        color: "#54a0ff",
        class: "flood",
        instruction: "🌊 Air banjir naik! Klik benda-benda PENTING untuk dimasukkan ke dalam Tas Siaga Bencanamu!",
        items: [
            { id: "water_bottle", emoji: "🥤", label: "Air Minum", correct: true },
            { id: "flashlight", emoji: "🔦", label: "Senter", correct: true },
            { id: "biscuit", emoji: "🍪", label: "Biskuit", correct: true },
            { id: "whistle", emoji: "📯", label: "Peluit", correct: true },
            { id: "medicine", emoji: "💊", label: "Obat P3K", correct: true },
            { id: "raincoat", emoji: "🧥", label: "Jas Hujan", correct: true },
            { id: "game_console", emoji: "🎮", label: "Konsol Game", correct: false },
            { id: "pillow", emoji: "🛌", label: "Bantal Guling", correct: false },
            { id: "makeup", emoji: "💄", label: "Peralatan Rias", correct: false },
            { id: "comic", emoji: "📚", label: "Koleksi Komik", correct: false },
            { id: "perfume", emoji: "🧴", label: "Parfum Mahal", correct: false },
            { id: "toy_car", emoji: "🚗", label: "Mobil Mainan", correct: false }
        ]
    },
    quake: {
        title: "Gempa Bumi",
        category: "Misi Cari Tempat Sembunyi",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22v-4M8 14l4 4 4-4M4 10l8 8 8-8M12 2v4M8 6h8"/></svg>`,
        color: "#d35400",
        class: "quake",
        instruction: "🌋 Bumi bergetar hebat! Pilih tempat paling AMAN untuk berlindung!",
        spots: [
            { id: "under_table", emoji: "🪑", label: "Di Bawah Meja Kokoh", safe: true, feedback: "TEPAT SEKALI! Di bawah meja kokoh adalah tempat paling aman. Lakukan Drop, Cover, Hold On!" },
            { id: "near_window", emoji: "🪟", label: "Di Samping Jendela Kaca", safe: false, feedback: "BAHAYA! Kaca jendela bisa pecah dan melukaimu saat gempa!" },
            { id: "under_chandelier", emoji: "💡", label: "Di Bawah Lampu Gantung", safe: false, feedback: "Jangan! Lampu gantung bisa jatuh menimpamu saat gempa!" },
            { id: "open_field", emoji: "🏕️", label: "Lari ke Lapangan Terbuka", safe: true, feedback: "Bagus! Jika bisa keluar dengan aman, lapangan terbuka jauh dari bangunan adalah pilihan tepat!" },
            { id: "elevator", emoji: "🛗", label: "Masuk Lift", safe: false, feedback: "JANGAN naik lift! Lift bisa macet dan kamu terjebak di dalam saat listrik padam!" },
            { id: "doorframe", emoji: "🚪", label: "Berdiri di Kusen Pintu", safe: true, feedback: "Boleh juga! Kusen pintu yang kokoh bisa menjadi alternatif perlindungan." }
        ]
    }
};

/* =========================================================================
   QUIZ DATA
   ========================================================================= */
const quizQuestions = [
    {
        question: "Kamu mencium bau gas yang sangat menyengat di dapur. Apa yang harus kamu lakukan pertama kali?",
        options: [
            "Menyalakan lampu dapur untuk mencari tahu apa yang terjadi",
            "Membuka pintu & jendela lebar-lebar dan memanggil orang tua untuk melepas regulator gas",
            "Menyalakan kompor untuk mengetes apakah gasnya habis",
            "Mengabaikannya dan langsung tidur di kamar"
        ],
        correct: 1,
        explanation: "Pintar! Menyalakan lampu atau kompor saat gas bocor sangat berbahaya karena percikan listriknya bisa membuat gas meledak. Kita harus membuka jendela lebar-lebar agar gas terbang ditiup angin, lalu minta tolong orang tua."
    },
    {
        question: "Bumi berguncang sangat kuat saat kamu sedang belajar di kelas. Di mana tempat berlindung terbaikmu?",
        options: [
            "Berlari berebut keluar pintu dan menuruni tangga sambil berteriak",
            "Menaiki lift sekolah agar cepat sampai ke lantai bawah",
            "Segera bersembunyi di bawah meja belajarmu yang kokoh sambil memegang kaki meja",
            "Berdiri diam di bawah lampu gantung kelas"
        ],
        correct: 2,
        explanation: "Hebat! Berlarian saat gempa bisa membuat kita terjatuh atau tertimpa reruntuhan. Bersembunyi di bawah meja kokoh (Drop, Cover, Hold On) akan melindungi kepala dan badan kita."
    },
    {
        question: "Bila terjadi kebakaran hutan di dekat rumahmu, apa yang harus kamu pakai untuk melindungi pernapasanmu?",
        options: [
            "Tangan kosong saja untuk menutupi hidung",
            "Masker kain biasa yang kering dan tipis",
            "Masker respirator (N95) atau kain bersih yang sudah dibasahi air",
            "Kantong plastik diikat di kepala"
        ],
        correct: 2,
        explanation: "Luar biasa! Asap kebakaran hutan mengandung abu kecil yang berbahaya bagi paru-paru. Menggunakan masker respirator atau kain basah akan menyaring abu sehingga napas kita tetap aman."
    },
    {
        question: "Air banjir mulai masuk ke halaman rumahmu. Mengapa ayah/ibu harus segera mematikan aliran listrik utama (MCB)?",
        options: [
            "Supaya kulkas dan TV tidak kotor terkena air banjir",
            "Agar tagihan listrik bulanan tidak mahal",
            "Mencegah kita tersengat aliran listrik berbahaya yang merambat lewat air banjir",
            "Supaya rumah menjadi gelap gulita untuk bersembunyi"
        ],
        correct: 2,
        explanation: "Keren sekali! Air banjir bisa menghantarkan listrik. Jika sakelar listrik rumah tetap menyala, kita bisa tersetrum saat menyentuh air banjir."
    },
    {
        question: "Benda apa saja yang paling penting untuk dimasukkan ke dalam Tas Siaga Bencana?",
        options: [
            "Buku komik, bantal guling, robot-robotan, dan makanan ringan",
            "Jas hujan, air minum, biskuit, obat-obatan, senter, peluit, dan surat penting",
            "Peralatan game konsol, charger, dan earphone bluetooth",
            "Pakaian pesta, sepatu olahraga baru, dan parfum wangi"
        ],
        correct: 1,
        explanation: "Tepat sekali! Tas Siaga Bencana disiapkan untuk keadaan darurat. Makanan kering, air minum, senter, peluit untuk memanggil penolong, dan obat-obatan adalah hal yang wajib ada."
    }
];

/* =========================================================================
   INITIALIZATION
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initDisasterGames();
    initQuizApp();
});

/* =========================================================================
   SCROLL EFFECTS
   ========================================================================= */
function initScrollEffects() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const reveals = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);

        let currentSection = "";
        document.querySelectorAll('section').forEach(section => {
            if (window.scrollY >= section.offsetTop - 180) {
                currentSection = section.getAttribute('id') || "";
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(el => observer.observe(el));
}

/* =========================================================================
   DISASTER MINI-GAMES ENGINE
   ========================================================================= */
function initDisasterGames() {
    const cards = document.querySelectorAll('.disaster-card');
    const overlay = document.getElementById('disaster-modal');
    const closeBtn = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalCat = document.getElementById('modal-category');
    const modalIcon = document.getElementById('modal-icon-container');
    const gameContainer = document.getElementById('game-container');

    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.type;
            const game = miniGames[type];
            if (!game) return;

            modalTitle.innerText = game.title;
            modalCat.innerText = game.category;
            modalIcon.innerHTML = game.icon;
            modalIcon.style.color = game.color;
            modalIcon.style.background = hexToRgba(game.color, 0.1);
            modalIcon.style.border = `2px solid ${game.color}`;

            // Render specific game
            switch (type) {
                case 'fire': renderFireGame(gameContainer, game); break;
                case 'gas': renderGasGame(gameContainer, game); break;
                case 'flood': renderFloodGame(gameContainer, game); break;
                case 'quake': renderQuakeGame(gameContainer, game); break;
            }

            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    /* ---- FIRE GAME: Sequential steps ---- */
    function renderFireGame(container, game) {
        let currentStep = 0;
        container.innerHTML = `
            <div class="game-instruction-bar">
                <span style="font-size:1.8rem;">🔥</span>
                <span class="game-instruction-text">${game.instruction}</span>
            </div>
            <div class="game-workspace" id="fire-workspace">
                <div class="smoke-cloud-overlay" id="smoke-overlay"></div>
                <div class="fire-character-container">
                    <div class="char-bubble" id="fire-hint">${game.steps[0].hint}</div>
                    <span style="font-size:4rem;" id="fire-avatar">🧒</span>
                </div>
                <div class="fire-game-items" id="fire-items"></div>
            </div>`;

        const itemsEl = document.getElementById('fire-items');
        const hintEl = document.getElementById('fire-hint');
        const smokeEl = document.getElementById('smoke-overlay');
        const avatarEl = document.getElementById('fire-avatar');

        function renderStepItems() {
            itemsEl.innerHTML = '';
            game.steps.forEach((step, idx) => {
                const btn = document.createElement('div');
                btn.className = 'interactive-tool';
                if (idx < currentStep) btn.classList.add('selected');
                btn.style.opacity = idx <= currentStep ? '1' : '0.4';
                btn.innerHTML = `<span style="font-size:2.2rem;">${step.emoji}</span><span>${step.label}</span>`;

                if (idx === currentStep) {
                    btn.addEventListener('click', () => {
                        btn.classList.add('selected');
                        currentStep++;
                        triggerLocalConfettiBurst();

                        if (currentStep >= game.steps.length) {
                            // WIN
                            smokeEl.style.display = 'none';
                            avatarEl.textContent = '😊';
                            hintEl.textContent = 'BERHASIL! Kamu selamat dari asap kebakaran! 🎉';
                            hintEl.style.background = '#dcfce7';
                            hintEl.style.borderColor = '#86efac';
                            hintEl.style.color = '#15803d';
                            startConfettiShower();
                            setTimeout(() => renderStepItems(), 300);
                        } else {
                            hintEl.textContent = game.steps[currentStep].hint;
                            // Reduce smoke gradually
                            smokeEl.style.opacity = String(1 - (currentStep / game.steps.length));
                            renderStepItems();
                        }
                    });
                }
                itemsEl.appendChild(btn);
            });

            if (currentStep >= game.steps.length) {
                const replay = document.createElement('button');
                replay.className = 'btn-game-replay';
                replay.textContent = '🔄 Main Lagi';
                replay.style.marginTop = '1rem';
                replay.addEventListener('click', () => {
                    currentStep = 0;
                    smokeEl.style.display = 'block';
                    smokeEl.style.opacity = '1';
                    avatarEl.textContent = '🧒';
                    hintEl.textContent = game.steps[0].hint;
                    hintEl.style.background = 'white';
                    hintEl.style.borderColor = '#64748b';
                    hintEl.style.color = '#334155';
                    renderStepItems();
                });
                itemsEl.parentElement.appendChild(replay);
            }
        }
        renderStepItems();
    }

    /* ---- GAS GAME: Safe vs Danger Clicks ---- */
    function renderGasGame(container, game) {
        let safeFound = 0;
        const totalSafe = game.actions.filter(a => a.safe).length;

        container.innerHTML = `
            <div class="game-instruction-bar">
                <span style="font-size:1.8rem;">⚠️</span>
                <span class="game-instruction-text">${game.instruction}</span>
            </div>
            <div class="game-workspace" id="gas-workspace">
                <div class="gas-leak-cloud"></div>
                <div style="text-align:center;margin-bottom:1rem;z-index:3;position:relative;">
                    <span style="font-size:1.1rem;font-weight:800;color:#166534;background:#dcfce7;padding:0.4rem 1rem;border-radius:50px;" id="gas-score">Tindakan Aman: 0 / ${totalSafe}</span>
                </div>
                <div class="kitchen-layout" id="gas-grid"></div>
                <p id="gas-feedback" style="text-align:center;font-weight:800;font-size:1.1rem;margin-top:1.5rem;color:var(--text-muted);z-index:3;position:relative;">Klik tindakan yang menurutmu AMAN!</p>
            </div>`;

        const grid = document.getElementById('gas-grid');
        const scoreEl = document.getElementById('gas-score');
        const feedbackEl = document.getElementById('gas-feedback');

        game.actions.forEach(action => {
            const node = document.createElement('div');
            node.className = 'kitchen-node';
            node.innerHTML = `
                <div class="node-btn-icon"><span style="font-size:1.6rem;">${action.emoji}</span></div>
                <div><span style="font-size:1rem;font-weight:800;">${action.label}</span></div>`;

            node.addEventListener('click', () => {
                if (node.classList.contains('success-clicked') || node.classList.contains('danger-clicked')) return;

                if (action.safe) {
                    node.classList.add('success-clicked');
                    safeFound++;
                    scoreEl.textContent = `Tindakan Aman: ${safeFound} / ${totalSafe}`;
                    feedbackEl.innerHTML = `<span style="color:#15803d;">✅ ${action.feedback}</span>`;
                    triggerLocalConfettiBurst();

                    if (safeFound >= totalSafe) {
                        feedbackEl.innerHTML = `<span style="color:#15803d;font-size:1.3rem;">🎉 HEBAT! Kamu menemukan semua tindakan aman!</span>`;
                        startConfettiShower();
                    }
                } else {
                    node.classList.add('danger-clicked');
                    feedbackEl.innerHTML = `<span style="color:#ee5253;">❌ ${action.feedback}</span>`;
                    setTimeout(() => node.classList.remove('danger-clicked'), 800);
                }
            });
            grid.appendChild(node);
        });
    }

    /* ---- FLOOD GAME: Pack the Backpack ---- */
    function renderFloodGame(container, game) {
        let packed = 0;
        const totalCorrect = game.items.filter(i => i.correct).length;

        container.innerHTML = `
            <div class="game-instruction-bar">
                <span style="font-size:1.8rem;">🌊</span>
                <span class="game-instruction-text">${game.instruction}</span>
            </div>
            <div class="game-workspace">
                <div class="backpack-game-grid">
                    <div class="backpack-area">
                        <span style="font-size:4rem;">🎒</span>
                        <p style="font-weight:800;color:#0369a1;margin-top:0.5rem;" id="flood-counter">Isi Tas: 0 / ${totalCorrect}</p>
                        <div class="backpack-slots" id="backpack-slots"></div>
                    </div>
                    <div class="items-pool" id="items-pool"></div>
                </div>
                <p id="flood-feedback" style="text-align:center;font-weight:800;font-size:1.05rem;margin-top:1.5rem;color:var(--text-muted);width:100%;">Klik benda yang PENTING untuk dimasukkan ke tas!</p>
            </div>`;

        const pool = document.getElementById('items-pool');
        const slots = document.getElementById('backpack-slots');
        const counterEl = document.getElementById('flood-counter');
        const feedbackEl = document.getElementById('flood-feedback');

        // Shuffle items
        const shuffled = [...game.items].sort(() => Math.random() - 0.5);

        shuffled.forEach(item => {
            const el = document.createElement('div');
            el.className = 'pool-item';
            el.innerHTML = `<span style="font-size:2rem;">${item.emoji}</span><span>${item.label}</span>`;

            el.addEventListener('click', () => {
                if (el.classList.contains('packed-success') || el.classList.contains('wobble-fail')) return;

                if (item.correct) {
                    el.classList.add('packed-success');
                    packed++;
                    counterEl.textContent = `Isi Tas: ${packed} / ${totalCorrect}`;
                    feedbackEl.innerHTML = `<span style="color:#15803d;">✅ ${item.label} masuk tas! Benda penting untuk keselamatan!</span>`;

                    const badge = document.createElement('span');
                    badge.className = 'packed-badge';
                    badge.innerHTML = `${item.emoji} ${item.label}`;
                    slots.appendChild(badge);

                    triggerLocalConfettiBurst();

                    if (packed >= totalCorrect) {
                        feedbackEl.innerHTML = `<span style="color:#15803d;font-size:1.3rem;">🎉 LUAR BIASA! Tas Siaga Bencanamu sudah lengkap!</span>`;
                        startConfettiShower();
                    }
                } else {
                    el.classList.add('wobble-fail');
                    feedbackEl.innerHTML = `<span style="color:#ee5253;">❌ ${item.label} tidak perlu dibawa saat bencana!</span>`;
                    setTimeout(() => el.classList.remove('wobble-fail'), 600);
                }
            });
            pool.appendChild(el);
        });
    }

    /* ---- QUAKE GAME: Find Safe Spots ---- */
    function renderQuakeGame(container, game) {
        let safeFound = 0;
        const totalSafe = game.spots.filter(s => s.safe).length;

        container.innerHTML = `
            <div class="game-instruction-bar">
                <span style="font-size:1.8rem;">🌋</span>
                <span class="game-instruction-text">${game.instruction}</span>
            </div>
            <div class="game-workspace quake-room-shaking" id="quake-workspace">
                <div style="text-align:center;margin-bottom:1.5rem;">
                    <span style="font-size:4rem;">🏠</span>
                    <p style="font-weight:800;color:#92400e;margin-top:0.5rem;" id="quake-score">Tempat Aman Ditemukan: 0 / ${totalSafe}</p>
                </div>
                <div class="quake-game-choices" id="quake-grid"></div>
                <p id="quake-feedback" style="text-align:center;font-weight:800;font-size:1.05rem;margin-top:1.5rem;color:var(--text-muted);">Klik tempat yang menurutmu AMAN saat gempa!</p>
            </div>`;

        const grid = document.getElementById('quake-grid');
        const scoreEl = document.getElementById('quake-score');
        const feedbackEl = document.getElementById('quake-feedback');
        const workspace = document.getElementById('quake-workspace');

        game.spots.forEach(spot => {
            const choice = document.createElement('div');
            choice.className = 'quake-choice';
            choice.innerHTML = `<span style="font-size:2.8rem;">${spot.emoji}</span><span>${spot.label}</span>`;

            choice.addEventListener('click', () => {
                if (choice.classList.contains('success-click') || choice.classList.contains('fail-click')) return;

                if (spot.safe) {
                    choice.classList.add('success-click');
                    safeFound++;
                    scoreEl.textContent = `Tempat Aman Ditemukan: ${safeFound} / ${totalSafe}`;
                    feedbackEl.innerHTML = `<span style="color:#15803d;">✅ ${spot.feedback}</span>`;
                    triggerLocalConfettiBurst();

                    if (safeFound >= totalSafe) {
                        workspace.classList.remove('quake-room-shaking');
                        feedbackEl.innerHTML = `<span style="color:#15803d;font-size:1.3rem;">🎉 SELAMAT! Gempa sudah reda. Kamu menemukan semua tempat aman!</span>`;
                        startConfettiShower();
                    }
                } else {
                    choice.classList.add('fail-click');
                    feedbackEl.innerHTML = `<span style="color:#ee5253;">❌ ${spot.feedback}</span>`;
                    setTimeout(() => choice.classList.remove('fail-click'), 1000);
                }
            });
            grid.appendChild(choice);
        });
    }
}

/* =========================================================================
   QUIZ APPLICATION
   ========================================================================= */
function initQuizApp() {
    let currentQuestionIdx = 0;
    let score = 0;

    const screenWelcome = document.getElementById('quiz-screen-welcome');
    const screenPlay = document.getElementById('quiz-screen-play');
    const screenResults = document.getElementById('quiz-screen-results');

    const btnStart = document.getElementById('btn-quiz-start');
    const btnNext = document.getElementById('btn-quiz-next');
    const btnRestart = document.getElementById('btn-quiz-restart');

    const progressText = document.getElementById('quiz-progress-text');
    const progressBar = document.getElementById('quiz-progress-bar');
    const questionText = document.getElementById('quiz-question');
    const optionsGrid = document.getElementById('quiz-options');
    const explanationBox = document.getElementById('quiz-explanation');
    const explanationTitle = document.getElementById('explanation-title');
    const explanationText = document.getElementById('explanation-text');
    const resultCircle = document.getElementById('result-circle');
    const resultScore = document.getElementById('result-score');
    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');

    btnStart.addEventListener('click', () => { showScreen(screenPlay); startQuiz(); });
    btnNext.addEventListener('click', () => {
        currentQuestionIdx++;
        currentQuestionIdx < quizQuestions.length ? loadQuestion() : finishQuiz();
    });
    btnRestart.addEventListener('click', () => showScreen(screenWelcome));

    function showScreen(screen) {
        [screenWelcome, screenPlay, screenResults].forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    function startQuiz() { currentQuestionIdx = 0; score = 0; loadQuestion(); }

    function loadQuestion() {
        const q = quizQuestions[currentQuestionIdx];
        progressText.innerText = `Teka-teki ${currentQuestionIdx + 1} dari ${quizQuestions.length}`;
        progressBar.style.width = `${(currentQuestionIdx / quizQuestions.length) * 100}%`;
        questionText.innerText = q.question;

        optionsGrid.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<div class="option-letter">${String.fromCharCode(65 + idx)}</div><div>${opt}</div>`;
            btn.addEventListener('click', () => selectOption(idx, btn));
            optionsGrid.appendChild(btn);
        });

        explanationBox.style.display = 'none';
        btnNext.style.display = 'none';
    }

    function selectOption(selectedIdx, selectedBtn) {
        const q = quizQuestions[currentQuestionIdx];
        const buttons = optionsGrid.querySelectorAll('.option-btn');
        buttons.forEach(b => b.setAttribute('disabled', 'true'));

        if (selectedIdx === q.correct) {
            selectedBtn.classList.add('correct');
            score++;
            explanationTitle.innerText = "Yeeay! Jawabanmu BENAR! 🎉";
            triggerLocalConfettiBurst();
        } else {
            selectedBtn.classList.add('wrong');
            buttons[q.correct].classList.add('correct');
            explanationTitle.innerText = "Wah, Hampir Betul! 💡";
        }

        explanationText.innerText = q.explanation;
        explanationBox.style.display = 'block';

        btnNext.innerText = currentQuestionIdx === quizQuestions.length - 1 ? "Lihat Nilai Akhirmu! 🏆" : "Soal Selanjutnya →";
        btnNext.style.display = 'block';
    }

    function finishQuiz() {
        showScreen(screenResults);
        progressBar.style.width = '100%';

        const pct = Math.round((score / quizQuestions.length) * 100);
        resultScore.innerText = pct;

        const offset = 440 - (pct / 100) * 440;
        resultCircle.style.strokeDashoffset = offset;

        if (pct === 100) {
            resultTitle.innerText = "🏆 Pahlawan Kesiapsiagaan Cilik (Sempurna)";
            resultDesc.innerText = "WOW! Kamu menjawab semua kuis dengan benar. Kamu siap menjadi pelindung diri dan pembantu teman-teman! 🌿🛡️";
            startConfettiShower();
        } else if (pct >= 80) {
            resultTitle.innerText = "🛡️ Kapten Siaga Bencana";
            resultDesc.innerText = "Keren sekali! Kamu sudah memahami hampir semua cara menyelamatkan diri! 🎒";
            startConfettiShower();
        } else if (pct >= 60) {
            resultTitle.innerText = "🏅 Detektif Siaga Junior";
            resultDesc.innerText = "Bagus! Tapi masih bisa lebih baik lagi. Yuk mainkan mini-game panduan di atas! 🔍";
        } else {
            resultTitle.innerText = "🌱 Anggota Siaga Magang";
            resultDesc.innerText = "Tidak apa-apa! Yuk ajak ayah/ibu bermain mini-game bencana di atas bersama-sama! 💪";
        }
    }
}

/* =========================================================================
   CONFETTI EFFECTS
   ========================================================================= */
let confettiAnimId = null;
function startConfettiShower() {
    const c = document.getElementById('confetti-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    let particles = [];
    const colors = ['#22c55e', '#ff9f43', '#48dbfb', '#54a0ff', '#feca57', '#ee5253', '#9b59b6', '#2ecc71'];

    for (let i = 0; i < 180; i++) {
        particles.push({
            x: Math.random() * c.width,
            y: Math.random() * -c.height - 20,
            r: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 12 - 6,
            tiltInc: Math.random() * 0.08 + 0.03,
            tiltAngle: 0,
            speedY: Math.random() * 3 + 2
        });
    }

    const startT = Date.now();
    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        let active = false;
        particles.forEach((p, i) => {
            p.tiltAngle += p.tiltInc;
            p.y += p.speedY + Math.cos(p.tiltAngle) * 0.5;
            p.x += Math.sin(p.tiltAngle) * 0.8;
            p.tilt = Math.sin(p.tiltAngle - i / 3) * 12;
            if (p.y <= c.height) active = true;
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
        });
        if (active && Date.now() - startT < 7000) confettiAnimId = requestAnimationFrame(draw);
        else { ctx.clearRect(0, 0, c.width, c.height); cancelAnimationFrame(confettiAnimId); }
    }
    if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
    draw();
}

function triggerLocalConfettiBurst() {
    const c = document.getElementById('confetti-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    let particles = [];
    const colors = ['#22c55e', '#ff9f43', '#48dbfb', '#54a0ff', '#feca57', '#ee5253'];
    const oX = c.width / 2, oY = c.height - 100;

    for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI + Math.PI;
        const speed = Math.random() * 12 + 6;
        particles.push({ x: oX + (Math.random() * 40 - 20), y: oY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, r: Math.random() * 6 + 4, color: colors[Math.floor(Math.random() * colors.length)], gravity: 0.3, opacity: 1 });
    }

    let burstId = null;
    const startT = Date.now();
    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        let active = false;
        particles.forEach(p => {
            p.vy += p.gravity; p.x += p.vx; p.y += p.vy; p.opacity -= 0.02;
            if (p.opacity > 0 && p.y <= c.height) {
                active = true;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity; ctx.fill();
            }
        });
        ctx.globalAlpha = 1.0;
        if (active && Date.now() - startT < 1500) burstId = requestAnimationFrame(draw);
        else { ctx.clearRect(0, 0, c.width, c.height); cancelAnimationFrame(burstId); }
    }
    draw();
}

/* =========================================================================
   UTILITIES
   ========================================================================= */
function hexToRgba(hex, alpha) {
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? `rgba(${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}, ${alpha})` : null;
}
