import './bootstrap';

/* =========================================================================
   QUIZ QUESTIONS (ENVIRONMENTAL / TRASH SORTING THEME)
   ========================================================================= */
const quizQuestions = [
    {
        question: "Mana dari pilihan berikut yang tergolong sampah organik dan cocok diolah menjadi kompos?",
        options: [
            "Plastik kemasan, kertas karton, sisa sayur",
            "Kulit pisang, daun kering, sisa buah-buahan",
            "Kaleng minuman, paku berkarat, sisa nasi",
            "Baterai bekas, wadah plastik, dedaunan"
        ],
        correct: 1,
        explanation: "Benar sekali! Kulit pisang, sisa buah, daun kering, dan bahan organik alami lainnya mudah membusuk oleh mikroorganisme dan dapat diolah menjadi pupuk kompos yang subur."
    },
    {
        question: "Mengapa kemasan keripik kentang berlapis perak di bagian dalam harus dibuang ke Plastik, bukan Logam?",
        options: [
            "Karena bagian perak itu hanyalah cat warna mengkilap biasa",
            "Karena kemasan tersebut terbuat dari lembaran plastik tipis berlapis aluminium (metallized film), bukan logam padat",
            "Karena logam tidak bisa didaur ulang sama sekali",
            "Karena sampah logam hanya untuk sendok dan garpu"
        ],
        correct: 1,
        explanation: "Hebat! Kemasan kripik (snack bag) menggunakan plastik jenis metallized film. Walaupun berkilau seperti logam di dalam, bahan utamanya tetaplah plastik sehingga dibuang ke tempat sampah Plastik."
    },
    {
        question: "Kamu menemukan struk kertas hasil belanja di supermarket. Ke mana kamu harus membuangnya?",
        options: [
            "Ke wadah Kertas, karena struk terbuat dari kertas",
            "Ke wadah Organik, karena struk mudah hancur terkena air",
            "Ke wadah B3/Residu, karena kertas thermal struk mengandung zat kimia berbahaya BPA",
            "Ke wadah Plastik, agar bisa dicairkan bersama botol"
        ],
        correct: 2,
        explanation: "Pintar! Struk belanja umumnya dicetak menggunakan kertas thermal yang dilapisi bahan kimia BPA (Bisphenol A) yang beracun. Maka, struk digolongkan sebagai B3/Residu agar tidak mencemari kertas daur ulang lainnya."
    },
    {
        question: "Tisu bekas pakai setelah makan tidak boleh dicampur ke wadah daur ulang kertas karena...",
        options: [
            "Tisu bekas kotor membawa lemak/kuman, dan serat kertasnya terlalu pendek untuk didaur ulang kembali",
            "Tisu bekas terlalu mahal untuk diolah kembali",
            "Tisu terbuat dari bahan sintetis plastik",
            "Tisu bisa merusak mesin pencacah kertas"
        ],
        correct: 0,
        explanation: "Tepat sekali! Tisu kotor membawa lemak dan bakteri yang mengontaminasi daur ulang. Selain itu, serat tisu sudah terlalu pendek karena telah diproses berulang kali, sehingga tisu bekas dibuang ke sampah Organik/Residu."
    },
    {
        question: "Baterai bekas mainan di rumahmu sudah habis. Ke wadah sampah berwarna apa kamu harus membuangnya?",
        options: [
            "Hijau (Organik), karena baterai terbuat dari tanah alami",
            "Biru (Plastik), karena luar baterai licin seperti plastik",
            "Merah (B3), karena baterai mengandung logam berat beracun yang membahayakan kesehatan",
            "Putih (Kertas), agar mudah dikemas kembali"
        ],
        correct: 2,
        explanation: "Luar biasa! Baterai mengandung zat kimia berbahaya seperti asam baterai, merkuri, dan timbal. Baterai dikategorikan sebagai B3 (Bahan Berbahaya dan Beracun) sehingga dibuang ke wadah merah."
    }
];

/* =========================================================================
   TRASH ITEMS DATA BY CATEGORY
   ========================================================================= */
const trashItems = {
    organic: [
        { emoji: "🍎", label: "sisa apel" },
        { emoji: "🍌", label: "kulit pisang" },
        { emoji: "🍂", label: "daun kering" },
        { emoji: "🐟", label: "tulang ikan" },
        { emoji: "🥦", label: "sisa sayur" }
    ],
    plastic: [
        { emoji: "🥤", label: "botol plastik" },
        { emoji: "🛍️", label: "kantong plastik" },
        { emoji: "🥤", label: "gelas plastik" },
        { emoji: "🧪", label: "wadah plastik" }
    ],
    paper: [
        { emoji: "📰", label: "koran bekas" },
        { emoji: "📦", label: "kardus box" },
        { emoji: "📄", label: "kertas hvs" },
        { emoji: "🛍️", label: "kantong kertas" }
    ],
    metal: [
        { emoji: "🥫", label: "kaleng soda" },
        { emoji: "📌", label: "paku logam" },
        { emoji: "🥄", label: "sendok logam" },
        { emoji: "🥫", label: "kaleng sarden" }
    ],
    hazard: [
        { emoji: "🔋", label: "baterai bekas" },
        { emoji: "💡", label: "lampu bohlam" },
        { emoji: "💉", label: "jarum suntik" }
    ],
    // Confusing items for Level 5
    similar: [
        { emoji: "🍿", label: "kemasan kripik", correctBin: "plastic", explanation: "Kemasan kripik berlapis foil mengkilap di dalam sebenarnya terbuat dari plastik berlapis aluminium tipis (metallized plastic film). Bahan utamanya plastik, jadi masuk ke tempat sampah Plastik, bukan Logam." },
        { emoji: "🧻", label: "tisu bekas", correctBin: "organic", explanation: "Tisu bekas pakai membawa kuman/lemak makanan, dan serat kertasnya terlalu pendek untuk didaur ulang kembali. Tisu bekas masuk ke sampah Organik (atau Residu)." },
        { emoji: "🧾", label: "struk belanja", correctBin: "hazard", explanation: "Struk belanja thermal dilapisi bahan kimia BPA (Bisphenol A) beracun yang dapat mencemari daur ulang kertas biasa. Masukkan ke tong merah B3/Residu." },
        { emoji: "🍼", label: "botol obat plastik", correctBin: "hazard", explanation: "Wadah plastik bekas obat mengandung residu kimia obat-obatan berbahaya. Harus dibuang ke tong merah B3, bukan plastik biasa." },
        { emoji: "💨", label: "kaleng semprotan", correctBin: "hazard", explanation: "Kaleng aerosol semprotan mudah meledak dan mengandung zat kimia beracun. Harus dikategorikan sebagai B3, bukan logam biasa." }
    ]
};

const levelConfig = {
    1: { bins: ['organic', 'plastic'], speed: 1.3, target: 5, spawnRate: 2200 },
    2: { bins: ['organic', 'plastic', 'paper'], speed: 1.7, target: 8, spawnRate: 1900 },
    3: { bins: ['organic', 'plastic', 'paper', 'metal'], speed: 2.1, target: 10, spawnRate: 1700 },
    4: { bins: ['organic', 'plastic', 'paper', 'metal', 'hazard'], speed: 2.5, target: 12, spawnRate: 1500 },
    5: { bins: ['organic', 'plastic', 'paper', 'metal', 'hazard'], speed: 3.0, target: 15, spawnRate: 1300, spawnSimilar: true }
};

/* =========================================================================
   PLAYER STATE MANAGEMENT
   ========================================================================= */
let playerState = {
    xp: 0,
    coins: 0,
    levelCompleted: 1,
    activeCostume: 'default',
    purchasedCostumes: ['default'],
    organicCount: 0,
    hazardCount: 0,
    perfectRuns: 0,
    completedMaterials: [],
    bookmarkedMaterials: [],
    quizPerfect: false
};

function loadPlayerState() {
    const saved = localStorage.getItem('ecolearn_player_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            playerState = { 
                completedMaterials: [],
                bookmarkedMaterials: [],
                quizPerfect: false,
                ...playerState,
                ...parsed 
            };
        } catch (e) {
            console.error("Error loading player state", e);
        }
    }
}

function savePlayerState() {
    localStorage.setItem('ecolearn_player_state', JSON.stringify(playerState));
}

/* =========================================================================
   DYNAMIC MASCOT GENERATOR (Lilo SVG renderer)
   ========================================================================= */
function getLiloMascotHtml(costume = 'default', width = 60, height = 60) {
    let accessories = '';
    if (costume === 'chef') {
        accessories = `
            <!-- Chef Hat -->
            <path d="M32,18 C25,18 20,8 35,5 C42,-2 58,-2 65,5 C80,8 75,18 68,18 Z" fill="#ffffff" stroke="#334155" stroke-width="3" stroke-linejoin="round"/>
            <rect x="36" y="15" width="28" height="6" rx="2" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
        `;
    } else if (costume === 'astronaut') {
        accessories = `
            <!-- Astronaut Helmet Glass -->
            <circle cx="50" cy="50" r="38" fill="rgba(14, 165, 233, 0.15)" stroke="#0ea5e9" stroke-width="3"/>
            <ellipse cx="32" cy="32" rx="8" ry="4" fill="#ffffff" opacity="0.6" transform="rotate(-30 32 32)"/>
            <!-- Oxygen Collar -->
            <rect x="30" y="78" width="40" height="7" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
        `;
    } else if (costume === 'king') {
        accessories = `
            <!-- Gold Crown -->
            <path d="M28,20 L33,6 L50,15 L67,6 L72,20 Z" fill="#fbbf24" stroke="#b45309" stroke-width="3" stroke-linejoin="round"/>
            <circle cx="33" cy="6" r="3" fill="#ef4444" stroke="#b45309" stroke-width="1"/>
            <circle cx="50" cy="15" r="3" fill="#3b82f6" stroke="#b45309" stroke-width="1"/>
            <circle cx="67" cy="6" r="3" fill="#ef4444" stroke="#b45309" stroke-width="1"/>
        `;
    }

    return `
        <svg viewBox="0 0 100 100" class="mascot-svg" width="${width}" height="${height}" aria-label="Lilo si daun penyelamat">
            <!-- Base Leaf -->
            <path d="M50,15 C20,40 20,70 50,85 C80,70 80,40 50,15 Z" fill="#4ade80" stroke="#15803d" stroke-width="4"/>
            <path d="M50,15 L50,85" stroke="#15803d" stroke-width="3" stroke-dasharray="1 2"/>
            <path d="M50,45 Q32,40 28,32" stroke="#15803d" stroke-width="3" fill="none"/>
            <path d="M50,55 Q68,50 72,42" stroke="#15803d" stroke-width="3" fill="none"/>
            <!-- Face -->
            <circle cx="40" cy="50" r="6" fill="#1e293b"/>
            <circle cx="60" cy="50" r="6" fill="#1e293b"/>
            <circle cx="38" cy="47" r="2" fill="#ffffff"/>
            <circle cx="58" cy="47" r="2" fill="#ffffff"/>
            <circle cx="34" cy="56" r="5" fill="#f87171" opacity="0.6"/>
            <circle cx="66" cy="56" r="5" fill="#f87171" opacity="0.6"/>
            <path d="M44,58 Q50,65 56,58" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round"/>
            <!-- Accessories -->
            ${accessories}
        </svg>
    `;
}

function renderAllMascots() {
    const activeCostume = playerState.activeCostume;
    
    // 1. Hero
    const heroContainer = document.getElementById('hero-mascot-container');
    if (heroContainer) heroContainer.innerHTML = getLiloMascotHtml(activeCostume, 65, 65);
    
    // 2. Profile Avatar
    const profileAvatar = document.getElementById('profile-mascot-avatar');
    if (profileAvatar) profileAvatar.innerHTML = getLiloMascotHtml(activeCostume, 75, 75);
    
    // 3. Start game preview
    const startPreview = document.getElementById('mascot-preview-start');
    if (startPreview) startPreview.innerHTML = getLiloMascotHtml(activeCostume, 100, 100);
    
    // 4. Quiz welcome
    const quizAvatar = document.getElementById('quiz-mascot-avatar');
    if (quizAvatar) quizAvatar.innerHTML = getLiloMascotHtml(activeCostume, 80, 80);
    
    // 5. Quiz small header
    const quizSmallMascot = document.getElementById('quiz-small-mascot');
    if (quizSmallMascot) quizSmallMascot.innerHTML = getLiloMascotHtml(activeCostume, 30, 30);
    
    // 6. Quiz speak mascot
    const quizSpeakMascot = document.getElementById('quiz-speak-mascot');
    if (quizSpeakMascot) quizSpeakMascot.innerHTML = getLiloMascotHtml(activeCostume, 55, 55);
    
    // 7. Update River Defender Lilo Image
    if (typeof updateRiverLiloImage === 'function') {
        updateRiverLiloImage();
    }
}

/* =========================================================================
   PROFILE AND STATE INITIALIZATION / UPDATE
   ========================================================================= */
function updateProfileUI() {
    // Header HUD stats
    const headerXp = document.getElementById('header-xp');
    const headerCoins = document.getElementById('header-coins');
    if (headerXp) headerXp.textContent = playerState.xp;
    if (headerCoins) headerCoins.textContent = playerState.coins;

    // Shop section stats
    const shopCoins = document.getElementById('shop-coins-val');
    if (shopCoins) shopCoins.textContent = playerState.coins;
    const xpVal = document.getElementById('player-xp-val');
    if (xpVal) xpVal.textContent = playerState.xp;
    
    // Level title designation
    const titleEl = document.getElementById('player-title');
    if (titleEl) {
        if (playerState.xp >= 300) {
            titleEl.textContent = "Ksatria Hijau Utama";
        } else if (playerState.xp >= 150) {
            titleEl.textContent = "Pelindung Lingkungan";
        } else if (playerState.xp >= 50) {
            titleEl.textContent = "Pilah Junior";
        } else {
            titleEl.textContent = "Pahlawan Magang";
        }
    }

    updateShopItemsUI();
    renderLeaderboard();
}

function updateShopItemsUI() {
    const costumes = ['default', 'chef', 'astronaut', 'king'];
    costumes.forEach(cos => {
        const card = document.getElementById(`shop-item-${cos}`);
        if (!card) return;
        const btn = card.querySelector('.btn-shop-action');
        
        card.classList.remove('equipped', 'purchased', 'locked-costume');
        
        if (playerState.activeCostume === cos) {
            card.classList.add('equipped');
            btn.textContent = 'Dipakai';
            btn.setAttribute('disabled', 'true');
        } else if (playerState.purchasedCostumes.includes(cos)) {
            card.classList.add('purchased');
            btn.textContent = 'Pakai';
            btn.removeAttribute('disabled');
            btn.className = 'btn-shop-action';
        } else {
            card.classList.add('locked-costume');
            btn.textContent = 'Beli';
            btn.removeAttribute('disabled');
            btn.className = 'btn-shop-action btn-buy';
        }
    });
}

function checkBadges() {
    const completed = Array.isArray(playerState.completedMaterials) ? playerState.completedMaterials : [];
    const badges = [
        { id: 'badge-rookie', check: () => completed.length >= 1 || playerState.xp >= 30 },
        { id: 'badge-coins', check: () => playerState.coins >= 50 },
        { id: 'badge-organic', check: () => completed.includes('mat-1') || completed.includes('mat-5') },
        { id: 'badge-hazardous', check: () => completed.length >= 3 },
        { id: 'badge-master', check: () => completed.length >= 6 },
        { id: 'badge-perfect', check: () => playerState.quizPerfect === true }
    ];
    
    let unlockedCount = 0;
    badges.forEach(b => {
        const el = document.getElementById(b.id);
        if (el) {
            const wasLocked = el.classList.contains('locked');
            if (b.check()) {
                unlockedCount++;
                el.classList.remove('locked');
                if (wasLocked) {
                    triggerLocalConfettiBurst();
                }
            } else {
                el.classList.add('locked');
            }
        }
    });

    const badgeCountEl = document.getElementById('badge-unlocked-count');
    if (badgeCountEl) badgeCountEl.textContent = unlockedCount;

    const badgePctText = document.getElementById('badge-pct-text');
    if (badgePctText) {
        const pct = Math.round((unlockedCount / 6) * 100);
        badgePctText.textContent = `${pct}% Terkumpul`;
    }

    const badgeFill = document.getElementById('badge-progress-bar-fill');
    if (badgeFill) {
        badgeFill.style.width = `${(unlockedCount / 6) * 100}%`;
    }

    const badgeRankTitle = document.getElementById('badge-rank-title');
    if (badgeRankTitle) {
        if (unlockedCount >= 6) badgeRankTitle.textContent = "Master Literasi Eco 👑";
        else if (unlockedCount >= 4) badgeRankTitle.textContent = "Pahlawan Terpelajar 📚";
        else if (unlockedCount >= 2) badgeRankTitle.textContent = "Pembaca Giat 🌱";
        else badgeRankTitle.textContent = "Pahlawan Pemula 🍃";
    }
}

/* =========================================================================
   LEADERBOARD (BOT & USER RANKING SYSTEM)
   ========================================================================= */
const botLeaderboardData = [
    { name: "Alya Eco Explorer 🌿", xp: 450, costume: "king", badgeTitle: "Master EcoLearn", avatarEmoji: "👧" },
    { name: "Bima Pemilah Sampah 🌱", xp: 380, costume: "astronaut", badgeTitle: "Pelindung Lingkungan", avatarEmoji: "👦" },
    { name: "Cinta Zero Waste ♻️", xp: 290, costume: "chef", badgeTitle: "Pelindung Lingkungan", avatarEmoji: "👩" },
    { name: "Dafa Daur Ulang 📦", xp: 210, costume: "default", badgeTitle: "Pilah Junior", avatarEmoji: "🧑" },
    { name: "Eka Penyelamat Bumi 🌍", xp: 160, costume: "default", badgeTitle: "Pilah Junior", avatarEmoji: "🧒" },
    { name: "Farhan Hijau 🍃", xp: 120, costume: "default", badgeTitle: "Pilah Junior", avatarEmoji: "👦" },
    { name: "Gita Clean Energy ⚡", xp: 75, costume: "default", badgeTitle: "Pahlawan Magang", avatarEmoji: "👧" },
    { name: "Hadi Pahlawan Laut 🌊", xp: 40, costume: "default", badgeTitle: "Pahlawan Magang", avatarEmoji: "👦" }
];

function renderLeaderboard() {
    const podiumContainer = document.getElementById('leaderboard-podium-container');
    const listContainer = document.getElementById('leaderboard-list-container');
    const userRankPill = document.getElementById('user-rank-status-pill');

    if (!podiumContainer || !listContainer) return;

    let userTitle = "Pahlawan Magang";
    if (playerState.xp >= 300) userTitle = "Ksatria Hijau Utama";
    else if (playerState.xp >= 150) userTitle = "Pelindung Lingkungan";
    else if (playerState.xp >= 50) userTitle = "Pilah Junior";

    const userEntry = {
        isUser: true,
        name: "Kamu (Pahlawan Eco) 🌟",
        xp: playerState.xp || 0,
        costume: playerState.activeCostume || 'default',
        badgeTitle: userTitle,
        avatarEmoji: "🌟"
    };

    const allPlayers = [...botLeaderboardData, userEntry];
    allPlayers.sort((a, b) => b.xp - a.xp);

    const userRank = allPlayers.findIndex(p => p.isUser) + 1;
    if (userRankPill) {
        userRankPill.textContent = `Peringkat Kamu: #${userRank} dari ${allPlayers.length} Pahlawan`;
    }

    const top3 = allPlayers.slice(0, 3);
    
    let podiumHtml = '';
    const podiumOrder = [
        { rank: 2, data: top3[1], crown: '🥈', class: 'rank-2' },
        { rank: 1, data: top3[0], crown: '👑', class: 'rank-1' },
        { rank: 3, data: top3[2], crown: '🥉', class: 'rank-3' }
    ];

    podiumOrder.forEach(item => {
        if (!item.data) return;
        const p = item.data;
        const isUserClass = p.isUser ? 'is-user-podium' : '';
        const nameDisplay = p.isUser ? 'Kamu 🌟' : p.name;
        
        let avatarContent = '';
        if (p.costume) {
            avatarContent = getLiloMascotHtml(p.costume, 54, 54);
        } else {
            avatarContent = p.avatarEmoji;
        }

        podiumHtml += `
            <div class="podium-card ${item.class} ${isUserClass}">
                <div class="podium-crown">${item.crown}</div>
                <div class="podium-avatar">
                    ${avatarContent}
                </div>
                <div class="podium-name">
                    ${nameDisplay}
                </div>
                <div class="podium-title-tag">${p.badgeTitle}</div>
                <div class="podium-xp-pill">⭐ ${p.xp} XP</div>
            </div>
        `;
    });

    podiumContainer.innerHTML = podiumHtml;

    const listPlayers = allPlayers.slice(3);
    let listHtml = '';

    listPlayers.forEach((p, idx) => {
        const actualRank = idx + 4;
        const isUserClass = p.isUser ? 'is-user' : '';
        const nameDisplay = p.isUser ? 'Kamu (Pahlawan Eco) 🌟' : p.name;

        let avatarContent = '';
        if (p.costume) {
            avatarContent = getLiloMascotHtml(p.costume, 38, 38);
        } else {
            avatarContent = p.avatarEmoji;
        }

        listHtml += `
            <div class="leaderboard-row ${isUserClass}">
                <div class="leaderboard-rank-num">#${actualRank}</div>
                <div class="leaderboard-player-info">
                    <div class="leaderboard-player-avatar">
                        ${avatarContent}
                    </div>
                    <div>
                        <div class="leaderboard-player-name">${nameDisplay}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">${p.badgeTitle}</div>
                    </div>
                </div>
                <div class="leaderboard-xp-val">⭐ ${p.xp} XP</div>
            </div>
        `;
    });

    listContainer.innerHTML = listHtml;
}

function initCostumeShop() {
    const buyButtons = document.querySelectorAll('.shop-item-card .btn-shop-action');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.shop-item-card');
            const costume = card.dataset.costume;
            const price = parseInt(card.dataset.price) || 0;
            
            if (playerState.purchasedCostumes.includes(costume)) {
                // Equip
                playerState.activeCostume = costume;
                savePlayerState();
                updateProfileUI();
                renderAllMascots();
            } else {
                // Buy
                if (playerState.coins >= price) {
                    playerState.coins -= price;
                    playerState.purchasedCostumes.push(costume);
                    playerState.activeCostume = costume;
                    savePlayerState();
                    updateProfileUI();
                    renderAllMascots();
                    triggerLocalConfettiBurst();
                } else {
                    alert('Koin kamu tidak cukup! Yuk mainkan game pemilahan lagi! 🪙');
                }
            }
        });
    });
}

/* =========================================================================
   TRASH SORTING GAME ENGINE
   ========================================================================= */
let gameLives = 3;
let gameScore = 0;
let gameTarget = 5;
let gameSpeed = 1.3;
let spawnRate = 2200;
let activeBins = [];
let gameInterval = null;
let gameAnimId = null;
let isGameActive = false;
let isLevelPaused = false;
let selectedTrashEl = null;
let currentLevel = 1;

const binInfo = {
    organic: { type: 'organic', label: 'Organik', emoji: '🟢', styleClass: 'organic' },
    plastic: { type: 'plastic', label: 'Plastik', emoji: '🔵', styleClass: 'plastic' },
    paper: { type: 'paper', label: 'Kertas', emoji: '⚪', styleClass: 'paper' },
    metal: { type: 'metal', label: 'Logam', emoji: '🟡', styleClass: 'metal' },
    hazard: { type: 'hazard', label: 'B3', emoji: '🔴', styleClass: 'hazard' }
};

function initGameControls() {
    const btnStart = document.getElementById('btn-start-sorting');
    const btnNext = document.getElementById('btn-next-level');
    const btnReplay = document.getElementById('btn-win-replay');
    const btnRetry = document.getElementById('btn-retry-game');
    const explanationCloseBtn = document.getElementById('explanation-modal-close');
    const explanationCloseOk = document.getElementById('btn-close-explanation');
    
    btnStart.addEventListener('click', () => {
        const levelSelect = document.getElementById('level-select');
        const level = parseInt(levelSelect.value);
        startTrashSortingGame(level);
    });
    
    btnNext.addEventListener('click', () => {
        const nextLvl = Math.min(5, currentLevel + 1);
        document.getElementById('level-select').value = nextLvl;
        startTrashSortingGame(nextLvl);
    });
    
    btnReplay.addEventListener('click', () => {
        startTrashSortingGame(currentLevel);
    });
    
    btnRetry.addEventListener('click', () => {
        startTrashSortingGame(currentLevel);
    });

    const closeExplanation = () => {
        document.getElementById('explanation-modal').classList.remove('active');
        isLevelPaused = false;
        if (gameLives <= 0) {
            endGame(false);
        }
    };
    
    explanationCloseBtn.addEventListener('click', closeExplanation);
    explanationCloseOk.addEventListener('click', closeExplanation);
}

function showGameScreen(screenId) {
    document.querySelectorAll('.game-screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startTrashSortingGame(level) {
    currentLevel = level;
    const config = levelConfig[level];
    
    gameLives = 3;
    gameScore = 0;
    gameTarget = config.target;
    gameSpeed = config.speed;
    spawnRate = config.spawnRate;
    activeBins = config.bins;
    isGameActive = true;
    isLevelPaused = false;
    selectedTrashEl = null;
    
    // Update Header HUD
    document.getElementById('game-current-level').textContent = level;
    document.getElementById('game-score-count').textContent = gameScore;
    document.getElementById('game-target-count').textContent = gameTarget;
    updateLivesDisplay();
    
    // Clear canvas
    const canvas = document.getElementById('game-canvas-area');
    canvas.innerHTML = '';
    
    // Generate Bins dynamically
    const binsContainer = document.getElementById('bins-container');
    binsContainer.innerHTML = '';
    
    activeBins.forEach(binType => {
        const info = binInfo[binType];
        const binEl = document.createElement('div');
        binEl.className = `trash-bin bin-${info.styleClass}`;
        binEl.dataset.binType = binType;
        binEl.innerHTML = `
            <div class="bin-emoji">${info.emoji}</div>
            <div style="font-size: 0.85rem; font-weight:800;">${info.label}</div>
        `;
        
        // Drag Over listeners for drag and drop
        binEl.addEventListener('dragover', (e) => e.preventDefault());
        
        // Tap sorting listener
        binEl.addEventListener('click', () => {
            if (selectedTrashEl) {
                flyToBinAndSort(selectedTrashEl, binEl, binType);
            }
        });
        
        binsContainer.appendChild(binEl);
    });
    
    // Setup falling game loop
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        if (isGameActive && !isLevelPaused) {
            spawnTrashItem();
        }
    }, spawnRate);
    
    if (gameAnimId) cancelAnimationFrame(gameAnimId);
    updatePhysicsLoop();
    
    showGameScreen('screen-game-playing');
}

function updateLivesDisplay() {
    const livesContainer = document.getElementById('game-lives-container');
    livesContainer.innerHTML = 'Nyawa: ' + '❤️'.repeat(gameLives) + '🖤'.repeat(3 - gameLives);
}

function spawnTrashItem() {
    const canvas = document.getElementById('game-canvas-area');
    const width = canvas.offsetWidth;
    
    // Determine categories available
    const config = levelConfig[currentLevel];
    const category = config.bins[Math.floor(Math.random() * config.bins.length)];
    
    let itemData;
    let isSimilar = false;
    
    // 30% chance of spawning similar/confusing item in Level 5
    if (config.spawnSimilar && Math.random() < 0.35) {
        const pool = trashItems.similar;
        itemData = pool[Math.floor(Math.random() * pool.length)];
        isSimilar = true;
    } else {
        const pool = trashItems[category];
        itemData = pool[Math.floor(Math.random() * pool.length)];
    }
    
    const trashEl = document.createElement('div');
    trashEl.className = 'falling-trash';
    trashEl.innerHTML = `
        <span class="trash-emoji">${itemData.emoji}</span>
        <span class="trash-label">${itemData.label}</span>
    `;
    
    // Set parameters
    trashEl.dataset.falling = 'true';
    trashEl.dataset.isSimilar = isSimilar ? 'true' : 'false';
    trashEl.dataset.correctBin = isSimilar ? itemData.correctBin : category;
    trashEl.dataset.label = itemData.label;
    if (isSimilar) {
        trashEl.dataset.explanation = itemData.explanation;
    }
    
    // Spawn X position
    const size = 70;
    const xPos = Math.random() * (width - size);
    trashEl.style.left = `${xPos}px`;
    trashEl.style.top = `-80px`;
    
    // Drag listeners via PointerEvents
    initPointerDragging(trashEl);
    
    // Tap to select listener
    trashEl.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent resetting select on canvas click
        if (selectedTrashEl) {
            selectedTrashEl.classList.remove('selected');
        }
        
        if (selectedTrashEl === trashEl) {
            selectedTrashEl = null;
        } else {
            trashEl.classList.add('selected');
            selectedTrashEl = trashEl;
        }
    });
    
    canvas.appendChild(trashEl);
}

/* Dual Controls: Pointer events for dragging */
let activeDragged = null;
let pointerOffsetX = 0;
let pointerOffsetY = 0;

function initPointerDragging(el) {
    el.addEventListener('pointerdown', (e) => {
        activeDragged = el;
        el.dataset.falling = 'false';
        el.classList.add('dragging');
        
        // Remove active tap selection if any
        if (selectedTrashEl) {
            selectedTrashEl.classList.remove('selected');
            selectedTrashEl = null;
        }
        
        const rect = el.getBoundingClientRect();
        pointerOffsetX = e.clientX - rect.left;
        pointerOffsetY = e.clientY - rect.top;
        
        // Highlight active targets
        const correct = el.dataset.correctBin;
        
        const moveHandler = (moveEvt) => {
            if (activeDragged !== el) return;
            const canvas = document.getElementById('game-canvas-area');
            const canvasRect = canvas.getBoundingClientRect();
            
            let x = moveEvt.clientX - canvasRect.left - pointerOffsetX;
            let y = moveEvt.clientY - canvasRect.top - pointerOffsetY;
            
            const maxLeft = canvasRect.width - el.offsetWidth;
            const maxTop = canvasRect.height - el.offsetHeight;
            
            x = Math.max(0, Math.min(x, maxLeft));
            y = Math.max(0, Math.min(y, maxTop));
            
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
            
            checkBinOverlaps(el);
        };
        
        const upHandler = (upEvt) => {
            window.removeEventListener('pointermove', moveHandler);
            window.removeEventListener('pointerup', upHandler);
            
            if (activeDragged !== el) return;
            activeDragged = null;
            el.classList.remove('dragging');
            
            const binType = getOverlappedBin(el);
            if (binType) {
                sortTrashItem(el, binType);
            } else {
                el.dataset.falling = 'true';
            }
        };
        
        window.addEventListener('pointermove', moveHandler);
        window.addEventListener('pointerup', upHandler);
    });
}

function checkBinOverlaps(el) {
    const bins = document.querySelectorAll('.trash-bin');
    const elRect = el.getBoundingClientRect();
    
    bins.forEach(bin => {
        const binRect = bin.getBoundingClientRect();
        const overlapping = !(
            elRect.right < binRect.left ||
            elRect.left > binRect.right ||
            elRect.bottom < binRect.top ||
            elRect.top > binRect.bottom
        );
        
        if (overlapping) {
            bin.classList.add('drag-over');
        } else {
            bin.classList.remove('drag-over');
        }
    });
}

function getOverlappedBin(el) {
    const bins = document.querySelectorAll('.trash-bin');
    const elRect = el.getBoundingClientRect();
    let foundBin = null;
    
    bins.forEach(bin => {
        const binRect = bin.getBoundingClientRect();
        const overlapping = !(
            elRect.right < binRect.left ||
            elRect.left > binRect.right ||
            elRect.bottom < binRect.top ||
            elRect.top > binRect.bottom
        );
        
        if (overlapping) {
            foundBin = bin.dataset.binType;
        }
        bin.classList.remove('drag-over');
    });
    
    return foundBin;
}

/* Dual Controls: Fly selected item into clicked bin */
function flyToBinAndSort(trashEl, binEl, binType) {
    trashEl.dataset.falling = 'false';
    trashEl.classList.remove('selected');
    selectedTrashEl = null;
    
    const canvas = document.getElementById('game-canvas-area');
    const canvasRect = canvas.getBoundingClientRect();
    const binRect = binEl.getBoundingClientRect();
    
    const targetX = binRect.left - canvasRect.left + (binRect.width / 2) - (trashEl.offsetWidth / 2);
    const targetY = binRect.top - canvasRect.top + 10;
    
    trashEl.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    trashEl.style.left = `${targetX}px`;
    trashEl.style.top = `${targetY}px`;
    trashEl.style.transform = 'scale(0.3) rotate(45deg)';
    trashEl.style.opacity = '0.5';
    
    setTimeout(() => {
        sortTrashItem(trashEl, binType);
    }, 310);
}

function sortTrashItem(el, binType) {
    const correctBin = el.dataset.correctBin;
    const isSimilar = el.dataset.isSimilar === 'true';
    const label = el.dataset.label;
    
    if (binType === correctBin) {
        // Correct Sort
        gameScore++;
        document.getElementById('game-score-count').textContent = gameScore;
        
        // Counter increment
        if (correctBin === 'organic') playerState.organicCount++;
        if (correctBin === 'hazard') playerState.hazardCount++;
        
        playerState.xp += 10;
        playerState.coins += 5;
        savePlayerState();
        updateProfileUI();
        checkBadges();
        
        // Little burst confetti
        triggerLocalConfettiBurst();
        el.remove();
        
        if (gameScore >= gameTarget) {
            endGame(true);
        }
    } else {
        // Incorrect Sort
        if (isSimilar) {
            // Show explanation modal
            const explanation = el.dataset.explanation;
            showMistakeExplanation(label, correctBin, explanation);
            el.remove();
        } else {
            // Standard wrong splat
            gameLives--;
            updateLivesDisplay();
            
            el.innerHTML = '<span style="font-size:2.5rem;">❌</span>';
            el.style.borderColor = '#ef4444';
            el.style.background = '#fef2f2';
            el.dataset.falling = 'false';
            
            setTimeout(() => {
                el.remove();
                if (gameLives <= 0) {
                    endGame(false);
                }
            }, 450);
        }
    }
}

function showMistakeExplanation(label, correctBin, text) {
    isLevelPaused = true;
    gameLives--;
    updateLivesDisplay();
    
    const modalContent = document.getElementById('explanation-modal-content');
    const binColorTag = binInfo[correctBin].emoji + ' ' + binInfo[correctBin].label;
    
    modalContent.innerHTML = `
        Kamu meletakkan <b>${label}</b> di tempat yang kurang tepat. Nyawa berkurang 1.
        <br><br>
        💡 <b>Tips Lilo:</b>
        <br>
        ${text}
        <br><br>
        Benda ini harusnya masuk ke: <b style="font-size: 1.25rem;">${binColorTag}</b>
    `;
    
    document.getElementById('explanation-modal').classList.add('active');
}

function triggerSplat(el) {
    el.dataset.falling = 'false';
    gameLives--;
    updateLivesDisplay();
    
    el.innerHTML = '<span style="font-size:2.2rem;">💥</span>';
    el.style.borderColor = '#ea580c';
    el.style.background = '#ffedd5';
    
    setTimeout(() => {
        el.remove();
        if (gameLives <= 0) {
            endGame(false);
        }
    }, 400);
}

function updatePhysicsLoop() {
    if (!isGameActive) return;
    
    if (!isLevelPaused) {
        const canvas = document.getElementById('game-canvas-area');
        const canvasHeight = canvas.offsetHeight;
        const items = document.querySelectorAll('.falling-trash');
        
        items.forEach(el => {
            if (el.dataset.falling === 'true') {
                let top = parseFloat(el.style.top) || 0;
                top += gameSpeed;
                el.style.top = `${top}px`;
                
                // If it hits bottom (missed)
                if (top >= canvasHeight - el.offsetHeight) {
                    triggerSplat(el);
                }
            }
        });
    }
    
    gameAnimId = requestAnimationFrame(updatePhysicsLoop);
}

function endGame(won) {
    isGameActive = false;
    if (gameInterval) clearInterval(gameInterval);
    if (gameAnimId) cancelAnimationFrame(gameAnimId);
    
    // Clear items
    document.getElementById('game-canvas-area').innerHTML = '';
    
    if (won) {
        // Upgrade complete state
        if (currentLevel === playerState.levelCompleted && currentLevel < 5) {
            playerState.levelCompleted = currentLevel + 1;
        }
        
        // Clearance Rewards
        let xpReward = 50;
        let coinsReward = 20;
        
        if (gameLives === 3) {
            playerState.perfectRuns++;
            xpReward += 20; // bonus perfect
            coinsReward += 10;
        }
        
        playerState.xp += xpReward;
        playerState.coins += coinsReward;
        savePlayerState();
        updateProfileUI();
        checkBadges();
        
        // Show feedback won
        document.getElementById('win-xp-reward').textContent = xpReward;
        document.getElementById('win-coins-reward').textContent = coinsReward;
        
        const feedbackText = document.getElementById('win-feedback-text');
        if (gameLives === 3) {
            feedbackText.innerHTML = "✨ <b>SEMPURNA!</b> Kamu menyelamatkan bumi dengan akurasi 100% tanpa ada sampah terlewat! Lilo bangga padamu! 🌿";
        } else {
            feedbackText.textContent = `Hebat! Misi pembersihan Level ${currentLevel} selesai dengan sukses!`;
        }
        
        startConfettiShower();
        showGameScreen('screen-level-won');
    } else {
        showGameScreen('screen-game-over');
    }
    
    // Update next level selection availability
    updateDropdownLevelList();
}

function updateDropdownLevelList() {
    const levelSelect = document.getElementById('level-select');
    const options = levelSelect.querySelectorAll('option');
    options.forEach(opt => {
        const lvl = parseInt(opt.value);
        if (lvl > playerState.levelCompleted) {
            opt.setAttribute('disabled', 'true');
            opt.textContent = opt.textContent.replace('🔒 ', '') + ' (Terkunci 🔒)';
        } else {
            opt.removeAttribute('disabled');
            opt.textContent = opt.textContent.replace(' (Terkunci 🔒)', '').replace('🔒 ', '');
        }
    });
}

/* =========================================================================
   QUIZ ENGINE
   ========================================================================= */
function initQuizEngine() {
    let currentQuizIdx = 0;
    let quizScore = 0;
    
    const welcomeScreen = document.getElementById('quiz-screen-welcome');
    const playScreen = document.getElementById('quiz-screen-play');
    const resultsScreen = document.getElementById('quiz-screen-results');
    
    const btnStart = document.getElementById('btn-quiz-start');
    const btnNext = document.getElementById('btn-quiz-next');
    const btnRestartResults = document.getElementById('btn-quiz-restart-results');
    
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
    
    btnStart.addEventListener('click', () => {
        showQuizScreen(playScreen);
        startQuiz();
    });
    
    btnNext.addEventListener('click', () => {
        currentQuizIdx++;
        if (currentQuizIdx < quizQuestions.length) {
            loadQuizQuestion();
        } else {
            finishQuiz();
        }
    });
    
    btnRestartResults.addEventListener('click', () => {
        showQuizScreen(welcomeScreen);
    });

    const btnToArcade = document.getElementById('btn-quiz-to-arcade');
    if (btnToArcade) {
        btnToArcade.addEventListener('click', () => {
            if (typeof window.exitArcade === 'function') {
                window.exitArcade();
            }
        });
    }
    
    function showQuizScreen(screen) {
        [welcomeScreen, playScreen, resultsScreen].forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }
    
    function startQuiz() {
        currentQuizIdx = 0;
        quizScore = 0;
        loadQuizQuestion();
    }
    
    function loadQuizQuestion() {
        const q = quizQuestions[currentQuizIdx];
        progressText.innerText = `Teka-teki ${currentQuizIdx + 1} dari ${quizQuestions.length}`;
        progressBar.style.width = `${(currentQuizIdx / quizQuestions.length) * 100}%`;
        questionText.innerText = q.question;
        
        optionsGrid.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<div class="option-letter">${String.fromCharCode(65 + idx)}</div><div>${opt}</div>`;
            btn.addEventListener('click', () => selectQuizOption(idx, btn));
            optionsGrid.appendChild(btn);
        });
        
        explanationBox.style.display = 'none';
        btnNext.style.display = 'none';
    }
    
    function selectQuizOption(selectedIdx, btnEl) {
        const q = quizQuestions[currentQuizIdx];
        const buttons = optionsGrid.querySelectorAll('.option-btn');
        buttons.forEach(b => b.setAttribute('disabled', 'true'));
        
        if (selectedIdx === q.correct) {
            btnEl.classList.add('correct');
            quizScore++;
            explanationTitle.innerText = "Yeeay! Jawabanmu BENAR! 🎉";
            triggerLocalConfettiBurst();
        } else {
            btnEl.classList.add('wrong');
            buttons[q.correct].classList.add('correct');
            explanationTitle.innerText = "Wah, Hampir Betul! 💡";
        }
        
        explanationText.innerText = q.explanation;
        explanationBox.style.display = 'block';
        
        btnNext.innerText = currentQuizIdx === quizQuestions.length - 1 ? "Lihat Nilai Akhirmu! 🏆" : "Soal Selanjutnya →";
        btnNext.style.display = 'block';
    }
    
    function finishQuiz() {
        showQuizScreen(resultsScreen);
        progressBar.style.width = '100%';
        
        const pct = Math.round((quizScore / quizQuestions.length) * 100);
        resultScore.innerText = pct;
        
        const offset = 440 - (pct / 100) * 440;
        resultCircle.style.strokeDashoffset = offset;
        
        // Quiz completed rewards
        let quizBonusXp = quizScore * 10;
        let quizBonusCoins = quizScore * 4;
        
        if (pct === 100) {
            resultTitle.innerText = "🏆 Pahlawan Kelestarian Bumi (Sempurna)";
            resultDesc.innerText = "WOW! Kamu menjawab semua teka-teki lingkungan dengan benar. Kamu siap membimbing teman-teman memilah sampah! +50 XP & +20 Koin! 🌿🛡️";
            
            // perfect quiz reward
            quizBonusXp += 20;
            quizBonusCoins += 10;
            startConfettiShower();
        } else if (pct >= 80) {
            resultTitle.innerText = "🛡️ Duta Pilah Sampah Cilik";
            resultDesc.innerText = "Luar biasa! Pengetahuan lingkunganmu sangat baik. Mari kita wujudkan aksi nyata memilah! +40 XP & +16 Koin!";
            startConfettiShower();
        } else if (pct >= 60) {
            resultTitle.innerText = "🏅 Detektif Hijau Pratama";
            resultDesc.innerText = "Bagus! Kamu sudah mengerti dasar pemilahan. Teruslah berlatih di game pemilahan di atas!";
        } else {
            resultTitle.innerText = "🌱 Anggota Hijau Magang";
            resultDesc.innerText = "Jangan berkecil hati! Yuk ajak Lilo bermain game pemilahan di atas lagi untuk belajar memilah sampah!";
        }
        
        // Apply rewards
        playerState.xp += quizBonusXp;
        playerState.coins += quizBonusCoins;
        savePlayerState();
        updateProfileUI();
        checkBadges();
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
    const colors = ['#22c55e', '#3b82f6', '#eab308', '#94a3b8', '#ef4444', '#10b981', '#f43f5e'];

    for (let i = 0; i < 150; i++) {
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
        if (active && Date.now() - startT < 6000) confettiAnimId = requestAnimationFrame(draw);
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
    const colors = ['#22c55e', '#3b82f6', '#eab308', '#94a3b8', '#ef4444'];
    const oX = c.width / 2, oY = c.height - 100;

    for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI + Math.PI;
        const speed = Math.random() * 10 + 5;
        particles.push({
            x: oX + (Math.random() * 40 - 20),
            y: oY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            r: Math.random() * 6 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            gravity: 0.25,
            opacity: 1
        });
    }

    let burstId = null;
    const startT = Date.now();
    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        let active = false;
        particles.forEach(p => {
            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.opacity -= 0.025;
            if (p.opacity > 0 && p.y <= c.height) {
                active = true;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fill();
            }
        });
        ctx.globalAlpha = 1.0;
        if (active && Date.now() - startT < 1200) burstId = requestAnimationFrame(draw);
        else { ctx.clearRect(0, 0, c.width, c.height); cancelAnimationFrame(burstId); }
    }
    draw();
}

/* =========================================================================
   SCROLL REVEAL EFFECTS
   ========================================================================= */
function initScrollEffects() {
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const reveals = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);

        let currentSection = "";
        document.querySelectorAll('section').forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
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
    }, { threshold: 0.08 });

    reveals.forEach(el => observer.observe(el));
}

/* =========================================================================
   MOBILE NAVIGATION
   ========================================================================= */
function initMobileNav() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileOverlay = document.getElementById('mobile-nav-overlay');
    const mobilePanel = document.getElementById('mobile-nav-panel');
    const mobileClose = document.getElementById('mobile-nav-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!hamburgerBtn || !mobilePanel) return;
    
    const openMenu = () => {
        mobileOverlay.classList.add('active');
        mobilePanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = () => {
        mobileOverlay.classList.remove('active');
        mobilePanel.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    hamburgerBtn.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);
    mobileOverlay.addEventListener('click', closeMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
            // Update active state
            mobileLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

/* =========================================================================
   BACK TO TOP BUTTON
   ========================================================================= */
function initBackToTop() {
    const btn = document.getElementById('btn-back-to-top');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* =========================================================================
   RIVER DEFENDER GAME ENGINE
   ========================================================================= */

// Polyfill for ctx.roundRect (not supported in older browsers)
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, radii) {
        let r = typeof radii === 'number' ? radii : (Array.isArray(radii) ? radii[0] : 0);
        r = Math.min(r, w / 2, h / 2);
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.arcTo(x + w, y, x + w, y + r, r);
        this.lineTo(x + w, y + h - r);
        this.arcTo(x + w, y + h, x + w - r, y + h, r);
        this.lineTo(x + r, y + h);
        this.arcTo(x, y + h, x, y + h - r, r);
        this.lineTo(x, y + r);
        this.arcTo(x, y, x + r, y, r);
        return this;
    };
}

let riverScore = 0;
let riverLives = 3;
let riverHighScore = 0;
let isRiverActive = false;
let riverAnimId = null;
let riverTrash = [];
let riverParticles = [];
let riverNetX = 300;
let riverNetY = 360;
let riverBoatX = 300;
let riverTargetNetX = 300;
let lastTrashSpawnTime = 0;
let riverWaterOffset = 0;
let riverScreenShake = 0;
const riverLiloImg = new Image();

const flowerPositions = [];
const bushPositions = [];

function updateRiverLiloImage() {
    const activeCostume = playerState.activeCostume || 'default';
    const svgString = getLiloMascotHtml(activeCostume, 60, 60);
    riverLiloImg.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
}

function playRiverSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        const now = ctx.currentTime;
        if (type === 'catch') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(450, now);
            osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
            osc.start(now);
            osc.stop(now + 0.12);
        } else if (type === 'miss') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(140, now);
            osc.frequency.linearRampToValueAtTime(70, now + 0.2);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'gameover') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(280, now);
            osc.frequency.setValueAtTime(220, now + 0.15);
            osc.frequency.setValueAtTime(180, now + 0.3);
            osc.frequency.exponentialRampToValueAtTime(90, now + 0.6);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
            osc.start(now);
            osc.stop(now + 0.6);
        } else if (type === 'start') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(261.63, now); // C4
            osc.frequency.setValueAtTime(329.63, now + 0.08); // E4
            osc.frequency.setValueAtTime(392.00, now + 0.16); // G4
            osc.frequency.setValueAtTime(523.25, now + 0.24); // C5
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        }
    } catch (e) {
        console.warn("Audio Context blocked or not supported", e);
    }
}

function initRiverDecorations() {
    flowerPositions.length = 0;
    bushPositions.length = 0;

    const leftXRange = [15, 80];
    const rightXRange = [520, 585];

    for (let y = 30; y < 520; y += 75) {
        // Left bank flowers and bushes
        if (Math.random() > 0.45) {
            flowerPositions.push({
                x: leftXRange[0] + Math.random() * (leftXRange[1] - leftXRange[0]),
                y: y + (Math.random() - 0.5) * 15
            });
        } else {
            bushPositions.push({
                x: leftXRange[0] + Math.random() * (leftXRange[1] - leftXRange[0]),
                y: y + (Math.random() - 0.5) * 15
            });
        }

        // Right bank flowers and bushes
        if (Math.random() > 0.45) {
            flowerPositions.push({
                x: rightXRange[0] + Math.random() * (rightXRange[1] - rightXRange[0]),
                y: y + (Math.random() - 0.5) * 15
            });
        } else {
            bushPositions.push({
                x: rightXRange[0] + Math.random() * (rightXRange[1] - rightXRange[0]),
                y: y + (Math.random() - 0.5) * 15
            });
        }
    }
}

function spawnRiverTrash() {
    const types = ['bottle', 'bag', 'can'];
    const type = types[Math.floor(Math.random() * types.length)];
    let radius = 22;
    if (type === 'bag') radius = 24;
    if (type === 'can') radius = 20;

    const startX = 130 + Math.random() * 340;
    riverTrash.push({
        type: type,
        radius: radius,
        x: startX,
        y: -30,
        baseX: startX,
        vy: 1.8 + Math.random() * 1.0,
        driftAmp: 5 + Math.random() * 12,
        driftFreq: 0.008 + Math.random() * 0.008,
        driftOffset: Math.random() * Math.PI * 2,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.035
    });
}

function spawnRiverCatchParticles(x, y) {
    for (let i = 0; i < 8; i++) {
        riverParticles.push({
            type: 'star',
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4.5,
            vy: (Math.random() - 0.5) * 4.5 - 2,
            size: 3.5 + Math.random() * 3.5,
            life: 1.0,
            decay: 0.04 + Math.random() * 0.02,
            color: Math.random() > 0.5 ? '#facc15' : '#ffffff'
        });
    }
}

function spawnRiverSplashParticles(x, y) {
    for (let i = 0; i < 8; i++) {
        riverParticles.push({
            type: 'bubble',
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 3,
            vy: -Math.random() * 3 - 0.8,
            size: 2.5 + Math.random() * 4,
            life: 1.0,
            decay: 0.045 + Math.random() * 0.02,
            color: Math.random() > 0.4 ? '#e0f2fe' : '#38bdf8'
        });
    }
}

function spawnRiverFloatingText(x, y, text, color) {
    riverParticles.push({
        type: 'text',
        x: x,
        y: y,
        vx: 0,
        vy: -1.2,
        text: text,
        size: 16,
        life: 1.0,
        decay: 0.025,
        color: color
    });
}

function updateRiverLivesUI() {
    const bar = document.getElementById('river-hp-bar');
    if (bar) {
        bar.innerHTML = 'Nyawa: ' + '❤️'.repeat(Math.max(0, riverLives)) + '🖤'.repeat(Math.max(0, 3 - riverLives));
    }
}

function showRiverScreen(screenId) {
    const startScreen = document.getElementById('screen-river-start');
    const gameoverScreen = document.getElementById('screen-river-gameover');
    
    if (startScreen) {
        startScreen.style.display = (screenId === 'start') ? 'flex' : 'none';
        startScreen.style.opacity = (screenId === 'start') ? '1' : '0';
        startScreen.style.pointerEvents = (screenId === 'start') ? 'auto' : 'none';
    }
    if (gameoverScreen) {
        gameoverScreen.style.display = (screenId === 'gameover') ? 'flex' : 'none';
        gameoverScreen.style.opacity = (screenId === 'gameover') ? '1' : '0';
        gameoverScreen.style.pointerEvents = (screenId === 'gameover') ? 'auto' : 'none';
    }
}

function resizeRiverCanvas() {
    const canvas = document.getElementById('river-canvas');
    const container = document.getElementById('river-play-area');
    if (!canvas || !container) return;
    
    // Keep canvas drawing resolution at 600x520 but ensure CSS fills container
    canvas.style.width = '100%';
    canvas.style.height = '100%';
}

function startRiverGame() {
    riverScore = 0;
    riverLives = 3;
    riverTrash = [];
    riverParticles = [];
    riverNetX = 300;
    riverBoatX = 300;
    riverTargetNetX = 300;
    riverWaterOffset = 0;
    riverScreenShake = 0;
    lastTrashSpawnTime = performance.now();

    document.getElementById('river-score').textContent = '0';
    updateRiverLivesUI();

    // Hide all overlay screens - show only the canvas
    showRiverScreen('playing');
    
    // Ensure canvas is properly sized
    resizeRiverCanvas();

    updateRiverLiloImage();
    playRiverSound('start');
    
    isRiverActive = true;
    
    if (riverAnimId) cancelAnimationFrame(riverAnimId);
    riverAnimId = requestAnimationFrame(riverGameLoop);
}

function endRiverGame() {
    isRiverActive = false;
    if (riverAnimId) cancelAnimationFrame(riverAnimId);

    playRiverSound('gameover');

    const xpReward = riverScore * 10;
    const coinsReward = riverScore * 5;

    // Save and sync with local playerState
    playerState.xp += xpReward;
    playerState.coins += coinsReward;
    savePlayerState();
    updateProfileUI();
    checkBadges();

    if (riverScore > riverHighScore) {
        riverHighScore = riverScore;
        localStorage.setItem('ecolearn_river_highscore', riverHighScore.toString());
        const hsElement = document.getElementById('river-highscore');
        if (hsElement) hsElement.textContent = riverHighScore.toString();
    }

    document.getElementById('river-final-score').textContent = riverScore.toString();
    document.getElementById('river-xp-reward').textContent = xpReward.toString();
    document.getElementById('river-coins-reward').textContent = coinsReward.toString();

    // Draw one final frame so the game background is visible behind gameover
    drawRiverGame();
    
    // Show the gameover screen
    showRiverScreen('gameover');
}

function updateRiverGame(timestamp) {
    const now = timestamp || performance.now();
    const speedMultiplier = 1.0 + Math.min(1.2, riverScore * 0.04);
    const dynamicSpawnInterval = Math.max(750, 1800 - riverScore * 40);

    if (now - lastTrashSpawnTime > dynamicSpawnInterval) {
        spawnRiverTrash();
        lastTrashSpawnTime = now;
    }

    // Lerp Net and Boat
    riverNetX += (riverTargetNetX - riverNetX) * 0.25;
    riverBoatX += (riverNetX - riverBoatX) * 0.12;

    // Update Water
    riverWaterOffset += 1.5 * speedMultiplier;
    if (riverWaterOffset > 120) riverWaterOffset = 0;

    // Update Trash
    for (let i = riverTrash.length - 1; i >= 0; i--) {
        const t = riverTrash[i];
        t.y += t.vy * speedMultiplier;
        t.angle += t.spinSpeed;
        t.x = t.baseX + Math.sin(t.y * t.driftFreq + t.driftOffset) * t.driftAmp;

        // Keep inside bounds
        if (t.x < 120) t.x = 120;
        if (t.x > 480) t.x = 480;

        // Collision Check with Net (centered at netX, netY=360)
        const dist = Math.hypot(t.x - riverNetX, t.y - riverNetY);
        if (dist < (t.radius + 35)) {
            riverScore++;
            document.getElementById('river-score').textContent = riverScore.toString();
            
            spawnRiverCatchParticles(t.x, t.y);
            spawnRiverFloatingText(t.x, t.y - 12, "+1", "#22c55e");
            playRiverSound('catch');

            riverTrash.splice(i, 1);
            continue;
        }

        // Check Escape
        if (t.y > 470) {
            riverLives--;
            updateRiverLivesUI();
            
            spawnRiverSplashParticles(t.x, 470);
            spawnRiverFloatingText(t.x, 440, "Lolos! 💔", "#ef4444");
            playRiverSound('miss');
            riverScreenShake = 12;

            riverTrash.splice(i, 1);

            if (riverLives <= 0) {
                endRiverGame();
            }
            continue;
        }
    }

    // Update Particles
    for (let i = riverParticles.length - 1; i >= 0; i--) {
        const p = riverParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
            riverParticles.splice(i, 1);
        }
    }
}

function drawRiverGrassBanks(ctx, canvasWidth, canvasHeight) {
    // Left Bank
    ctx.fillStyle = '#4ade80';
    ctx.fillRect(0, 0, 100, canvasHeight);

    // Right Bank
    ctx.fillStyle = '#4ade80';
    ctx.fillRect(500, 0, 100, canvasHeight);

    // Grass Borders
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(95, 0, 5, canvasHeight);
    ctx.fillRect(500, 0, 5, canvasHeight);

    // Flowers
    ctx.fillStyle = '#fef08a';
    for (let pos of flowerPositions) {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
        ctx.arc(pos.x - 4, pos.y, 3, 0, Math.PI * 2);
        ctx.arc(pos.x + 4, pos.y, 3, 0, Math.PI * 2);
        ctx.arc(pos.x, pos.y - 4, 3, 0, Math.PI * 2);
        ctx.arc(pos.x, pos.y + 4, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fef08a';
    }

    // Bushes
    ctx.fillStyle = '#16a34a';
    for (let pos of bushPositions) {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 11, 0, Math.PI * 2);
        ctx.arc(pos.x - 7, pos.y + 3, 9, 0, Math.PI * 2);
        ctx.arc(pos.x + 7, pos.y + 3, 9, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawRiverTrashItem(ctx, trash) {
    ctx.save();
    ctx.translate(trash.x, trash.y);
    ctx.rotate(trash.angle);

    ctx.shadowColor = 'rgba(0, 0, 0, 0.12)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 3;

    if (trash.type === 'bottle') {
        // Cap
        ctx.fillStyle = '#1d4ed8';
        ctx.beginPath();
        ctx.roundRect(-5, -18, 10, 5, 1.5);
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Neck
        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath();
        ctx.roundRect(-7, -13, 14, 7, 1.5);
        ctx.fill();
        ctx.stroke();

        // Body
        ctx.fillStyle = 'rgba(224, 242, 254, 0.88)';
        ctx.beginPath();
        ctx.roundRect(-12, -6, 24, 24, 5);
        ctx.fill();
        ctx.stroke();

        // Label
        ctx.fillStyle = '#4ade80';
        ctx.beginPath();
        ctx.rect(-11, -1, 22, 10);
        ctx.fill();
        ctx.stroke();

        // Highlight shininess
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.beginPath();
        ctx.ellipse(-5, -2, 2.5, 9, 0, 0, Math.PI * 2);
        ctx.fill();

    } else if (trash.type === 'bag') {
        ctx.fillStyle = 'rgba(248, 250, 252, 0.85)';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.8;

        // Handles
        ctx.beginPath();
        ctx.ellipse(-7, -11, 5, 9, -0.1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(7, -11, 5, 9, 0.1, 0, Math.PI * 2);
        ctx.stroke();

        // Body
        ctx.beginPath();
        ctx.moveTo(-14, -3);
        ctx.quadraticCurveTo(-20, 5, -16, 14);
        ctx.quadraticCurveTo(-12, 22, 0, 20);
        ctx.quadraticCurveTo(12, 22, 16, 14);
        ctx.quadraticCurveTo(20, 5, 14, -3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Wrinkles
        ctx.strokeStyle = 'rgba(71, 85, 105, 0.25)';
        ctx.beginPath();
        ctx.moveTo(-5, 2);
        ctx.lineTo(-2, 12);
        ctx.moveTo(5, 2);
        ctx.lineTo(2, 12);
        ctx.stroke();

    } else if (trash.type === 'can') {
        // Top Rim
        ctx.fillStyle = '#cbd5e1';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(0, -14, 11, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Body
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.rect(-11, -14, 22, 27);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-11, -14);
        ctx.lineTo(-11, 13);
        ctx.lineTo(11, 13);
        ctx.lineTo(11, -14);
        ctx.stroke();

        // Bottom Rim
        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.ellipse(0, 13, 11, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Wave decoration
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(-10, -2);
        ctx.bezierCurveTo(-5, -5, 5, 2, 10, -2);
        ctx.lineTo(10, 3);
        ctx.bezierCurveTo(5, 7, -5, 0, -10, 3);
        ctx.closePath();
        ctx.fill();
    }

    ctx.restore();
}

function drawRiverNet(ctx, netX, netY, boatX, boatY) {
    // 1. Draw Wood Handle
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 5.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(boatX, boatY - 12);
    ctx.lineTo(netX, netY);
    ctx.stroke();

    // 2. Draw Net Bag mesh
    ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(netX, netY, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Mesh Grid clip
    ctx.save();
    ctx.beginPath();
    ctx.arc(netX, netY, 35, 0, Math.PI * 2);
    ctx.clip();

    ctx.strokeStyle = 'rgba(2, 132, 199, 0.35)';
    ctx.lineWidth = 1.8;
    for (let offset = -30; offset <= 30; offset += 10) {
        ctx.beginPath();
        ctx.moveTo(netX + offset, netY - 35);
        ctx.lineTo(netX + offset, netY + 35);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(netX - 35, netY + offset);
        ctx.lineTo(netX + 35, netY + offset);
        ctx.stroke();
    }
    ctx.restore();

    // 3. Orange Rim
    ctx.strokeStyle = '#ff9f43';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.arc(netX, netY, 35, 0, Math.PI * 2);
    ctx.stroke();
}

function drawRiverParticles(ctx) {
    for (let p of riverParticles) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        
        if (p.type === 'star') {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            const cx = p.x;
            const cy = p.y;
            const spikes = 5;
            const outerRadius = p.size;
            const innerRadius = p.size / 2;
            let rot = Math.PI / 2 * 3;
            let x = cx;
            let y = cy;
            const step = Math.PI / spikes;

            ctx.moveTo(cx, cy - outerRadius);
            for (let j = 0; j < spikes; j++) {
                x = cx + Math.cos(rot) * outerRadius;
                y = cy + Math.sin(rot) * outerRadius;
                ctx.lineTo(x, y);
                rot += step;

                x = cx + Math.cos(rot) * innerRadius;
                y = cy + Math.sin(rot) * innerRadius;
                ctx.lineTo(x, y);
                rot += step;
            }
            ctx.lineTo(cx, cy - outerRadius);
            ctx.closePath();
            ctx.fill();
        } else if (p.type === 'bubble') {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (p.type === 'text') {
            ctx.font = 'bold 16px Outfit, sans-serif';
            ctx.fillStyle = p.color;
            ctx.textAlign = 'center';
            ctx.fillText(p.text, p.x, p.y);
        }

        ctx.restore();
    }
}

function drawRiverGame() {
    const canvas = document.getElementById('river-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    // Screen Shake Translation
    if (riverScreenShake > 0) {
        const shake = 5;
        const dx = (Math.random() - 0.5) * shake;
        const dy = (Math.random() - 0.5) * shake;
        ctx.translate(dx, dy);
        riverScreenShake--;
    }

    // 1. Water
    ctx.fillStyle = '#bae6fd';
    ctx.fillRect(100, 0, 400, canvas.height);

    // 2. Current lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.32)';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    for (let xPos of [180, 260, 340, 420]) {
        ctx.beginPath();
        for (let y = -20; y < canvas.height + 20; y += 15) {
            const waveX = xPos + Math.sin((y + riverWaterOffset) * 0.045) * 5.5;
            const waveY = y + (riverWaterOffset % 30);
            if (y === -20) ctx.moveTo(waveX, waveY);
            else ctx.lineTo(waveX, waveY);
        }
        ctx.stroke();
    }

    // 3. Ocean sea
    ctx.fillStyle = '#1d4ed8';
    ctx.fillRect(100, 470, 400, 50);

    // Sea ripples froth line
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    for (let x = 100; x <= 500; x += 20) {
        ctx.arc(x + 10, 470, 10, Math.PI, 0, false);
    }
    ctx.stroke();

    // 4. Grass banks
    drawRiverGrassBanks(ctx, canvas.width, canvas.height);

    // 5. Trash Items
    for (let trash of riverTrash) {
        drawRiverTrashItem(ctx, trash);
    }

    // 6. Jaring (Net)
    drawRiverNet(ctx, riverNetX, riverNetY, riverBoatX, 425);

    // 7. Boat
    ctx.fillStyle = '#b45309';
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(riverBoatX - 45, 435);
    ctx.quadraticCurveTo(riverBoatX, 455, riverBoatX + 45, 435);
    ctx.quadraticCurveTo(riverBoatX + 55, 420, riverBoatX + 35, 420);
    ctx.lineTo(riverBoatX - 35, 420);
    ctx.quadraticCurveTo(riverBoatX - 55, 420, riverBoatX - 45, 435);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#d97706';
    ctx.fillRect(riverBoatX - 25, 422, 50, 6);

    // 8. Lilo Mascot
    if (riverLiloImg.complete) {
        ctx.drawImage(riverLiloImg, riverBoatX - 25, 375, 50, 50);
    }

    // 9. Particles
    drawRiverParticles(ctx);

    ctx.restore();
}

function riverGameLoop(timestamp) {
    if (!isRiverActive) return;

    updateRiverGame(timestamp);
    drawRiverGame();

    riverAnimId = requestAnimationFrame(riverGameLoop);
}

function initRiverDefender() {
    const canvas = document.getElementById('river-canvas');
    if (!canvas) return;

    // Load highscore
    riverHighScore = parseInt(localStorage.getItem('ecolearn_river_highscore') || '0');
    const hsElement = document.getElementById('river-highscore');
    if (hsElement) hsElement.textContent = riverHighScore.toString();

    // Load initial Lilo image
    updateRiverLiloImage();

    // Setup static riverbank decorations
    initRiverDecorations();

    // Draw initial background on canvas so it's not blank
    drawRiverGame();

    // Event listeners for controlling jaring (Net)
    canvas.addEventListener('mousemove', (e) => {
        if (!isRiverActive) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX;
        const canvasX = (clientX - rect.left) * (canvas.width / rect.width);
        riverTargetNetX = Math.max(135, Math.min(465, canvasX));
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!isRiverActive) return;
        e.preventDefault(); // Stop mobile scrolling
        if (e.touches.length > 0) {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches[0].clientX;
            const canvasX = (clientX - rect.left) * (canvas.width / rect.width);
            riverTargetNetX = Math.max(135, Math.min(465, canvasX));
        }
    }, { passive: false });

    // Also handle mouse click/tap to move the net (for users who might click instead of drag)
    canvas.addEventListener('click', (e) => {
        if (!isRiverActive) return;
        const rect = canvas.getBoundingClientRect();
        const canvasX = (e.clientX - rect.left) * (canvas.width / rect.width);
        riverTargetNetX = Math.max(135, Math.min(465, canvasX));
    });

    // Buttons
    const btnStart = document.getElementById('btn-start-river');
    const btnRestart = document.getElementById('btn-restart-river');

    if (btnStart) {
        btnStart.addEventListener('click', (e) => {
            e.stopPropagation();
            startRiverGame();
        });
    }
    if (btnRestart) {
        btnRestart.addEventListener('click', (e) => {
            e.stopPropagation();
            startRiverGame();
        });
    }
}

/* =========================================================================
   INTERACTIVE LEARNING HUB & READER LOGIC
   ========================================================================= */

const learningMaterials = [
    {
        id: 'mat-1',
        title: 'Bab 1: Rahasia Pemilahan Sampah & 5 Warna Tong',
        category: 'sorting',
        categoryName: 'Pemilahan Sampah',
        categoryIcon: '🌱',
        categoryColor: '#f0fdf4',
        categoryBorder: '#bbf7d0',
        categoryTextColor: '#15803d',
        ageTarget: 'kids',
        ageLabel: '👶 Anak-Anak',
        readTime: '3 Menit',
        coverGradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
        coverIcon: '🗑️',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tahukah kamu mengapa tempat sampah di sekolah dan taman memiliki warna yang berbeda-beda? Yuk pelajari rahasia di baliknya!',
        mascotTip: 'Bacalah rahasia warna tempat sampah ini! Setelah membaca, kamu akan bisa membedakan mana organik dan mana anorganik!',
        contentHtml: `
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <span style="background: #f0fdf4; color: #15803d; border: 1.5px solid #bbf7d0; padding: 0.35rem 1rem; border-radius: 20px; font-weight: 800; font-size: 0.85rem;">Bab 1 • Dasar Lingkungan</span>
                <h2 style="font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; color: var(--text-dark); margin: 0.8rem 0 0.5rem;">Rahasia Pemilahan Sampah & 5 Warna Tong</h2>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Dipublikasikan oleh Tim EcoLearn • Membaca Interaktif untuk Anak-Anak & Remaja</p>
            </div>

            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sampah di sekitar kita bukanlah sekadar limbah buangan, melainkan sumber daya yang bisa dimanfaatkan kembali jika dipilah dengan benar!</p>

            <h3 class="reader-heading-2"><span>🟢</span> 1. Tempat Sampah Hijau (Organik)</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tong hijau diperuntukkan bagi sisa makanan, kulit buah, sisa sayuran, dan daun kering. Bahan-bahan ini bersifat alami dan mudah terurai kembali menjadi pupuk organik yang menyuburkan tanaman.</p>

            <div class="reader-callout fact">
                <strong>💡 Fakta Unik Eco:</strong>
                Lorem ipsum dolor sit amet. Sampah organik yang diolah menjadi pupuk kompos dapat berkontribusi mengurangi emisi gas metana hingga 45% dari tempat pembuangan akhir!
            </div>

            <h3 class="reader-heading-2"><span>🔵</span> 2. Tempat Sampah Biru (Plastik & Anorganik)</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Botol kemasan, gelas plastik, dan wadah sintetis dibuang di sini agar dapat dicacah dan didaur ulang menjadi barang bermanfaat kembali.</p>

            <h3 class="reader-heading-2"><span>🔴</span> 3. Tempat Sampah Merah (B3 & Residu Berbahaya)</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Baterai bekas, obat kadaluarsa, dan racun serangga termasuk dalam golongan ini karena mengandung racun berbahaya.</p>

            <div class="reader-callout warning">
                <strong>⚠️ Peringatan Penting Lilo:</strong>
                Jangan membuang baterai bekas ke tempat sampah hijau atau biru ya! Cairan kimia baterai bisa meracuni tanah dan air bersih kita!
            </div>

            <h3 class="reader-heading-2"><span>📌</span> Rangkuman Poin Penting</h3>
            <div class="reader-accordion-item">
                <div class="reader-accordion-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
                    <span>Mengapa kita wajib memilah sampah dari rumah?</span>
                    <span>▼</span>
                </div>
                <div class="reader-accordion-body" style="display: block;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dengan memilah sampah dari awal, kita memudahkan petugas daur ulang dan mencegah pencemaran tanah serta lautan.
                </div>
            </div>
        `,
        quiz: {
            question: 'Warna tempat sampah manakah yang digunakan khusus untuk menampung sampah organik seperti kulit buah & sisa makanan?',
            options: [
                'Wajah Biru (Plastik)',
                'Warna Hijau (Organik)',
                'Warna Merah (B3 Berbahaya)',
                'Warna Kuning (Logam)'
            ],
            correct: 1,
            explanation: 'Tepat sekali! Tempat sampah berwarna hijau diperuntukkan khusus bagi bahan organik alami yang mudah membusuk dan dapat dijadikan kompos.'
        }
    },
    {
        id: 'mat-2',
        title: 'Bab 2: Petualangan Plastik dari Sungai ke Samudra',
        category: 'river',
        categoryName: 'Sungai & Laut',
        categoryIcon: '🌊',
        categoryColor: '#e0f2fe',
        categoryBorder: '#bae6fd',
        categoryTextColor: '#0369a1',
        ageTarget: 'kids',
        ageLabel: '👶 Anak-Anak',
        readTime: '4 Menit',
        coverGradient: 'linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)',
        coverIcon: '🕸️',
        excerpt: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore. Pernahkah kamu membayangkan bagaimana sebotol plastik yang dibuang di got bisa sampai ke tengah lautan?',
        mascotTip: 'Jelajahi alur perjalanan sampah air ini! Lilo akan menunjukkan dampak buruk plastik bagi penyu dan ikan laut.',
        contentHtml: `
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <span style="background: #e0f2fe; color: #0369a1; border: 1.5px solid #bae6fd; padding: 0.35rem 1rem; border-radius: 20px; font-weight: 800; font-size: 0.85rem;">Bab 2 • Ekosistem Perairan</span>
                <h2 style="font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; color: var(--text-dark); margin: 0.8rem 0 0.5rem;">Petualangan Plastik dari Sungai ke Samudra</h2>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Dipublikasikan oleh Tim EcoLearn • Membaca Interaktif untuk Anak-Anak & Remaja</p>
            </div>

            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Ketika seseorang membuang kantong plastik atau botol minuman sembarangan di tepi jalan, hujan deras akan menyapu plastik tersebut ke dalam saluran air (drainase).</p>

            <h3 class="reader-heading-2"><span>💧</span> 1. Dari Got Bermuara ke Sungai Utama</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Air sungai berarus membawa plastik terus mengalir melewati pemukiman dan perkotaan. Sampah plastik ini terombang-ambing dan merusak keindahan ekosistem sungai.</p>

            <div class="reader-callout fact">
                <strong>🌊 Tahukah Kamu?</strong>
                Lorem ipsum dolor sit amet. Sekitar 80% sampah plastik yang berada di samudra samudra luas berasal dari daratan yang terbawa oleh aliran sungai!
            </div>

            <h3 class="reader-heading-2"><span>🐢</span> 2. Bahaya Mikroplastik Bagi Satwa Laut</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Di laut, paparan sinar matahari dan ombak memecah plastik besar menjadi serpihan kecil yang dinamakan <i>mikroplastik</i>. Penyu dan ikan sering terkecoh mengira kantong plastik transparan sebagai ubur-ubur makanan mereka.</p>

            <div class="reader-callout tip">
                <strong>🌿 Aksi Sederhana Penyelamat Laut:</strong>
                Membawa botol minum milik sendiri ke sekolah dan menggunakan kantong belanja berbahan kain dapat menyelamatkan ratusan hewan laut dari ancaman plastik!
            </div>
        `,
        quiz: {
            question: 'Mengapa kantong plastik transparan yang hanyut di laut sangat berbahaya bagi penyu laut?',
            options: [
                'Karena kantong plastik terlihat seperti ubur-ubur makanan favorit penyu',
                'Karena kantong plastik berbau harum seperti buah',
                'Karena plastik membuat air laut menjadi sangat panas',
                'Karena penyu suka mengumpulkan plastik untuk tempat tinggal'
            ],
            correct: 0,
            explanation: 'Hebat! Penyu sering terkecoh mengira kantong plastik melayang sebagai ubur-ubur. Jika termakan, plastik dapat menyumbat pencernaan satwa laut.'
        }
    },
    {
        id: 'mat-3',
        title: 'Bab 3: Misteri Sampah B3 & Bahaya Tersembunyi Baterai',
        category: 'sorting',
        categoryName: 'Pemilahan Sampah',
        categoryIcon: '🔋',
        categoryColor: '#fee2e2',
        categoryBorder: '#fecaca',
        categoryTextColor: '#991b1b',
        ageTarget: 'teens',
        ageLabel: '🧑‍🎓 Remaja',
        readTime: '5 Menit',
        coverGradient: 'linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)',
        coverIcon: '💡',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Membongkar bahaya zat kimia tersembunyi pada baterai bekas, lampu bohlam, dan e-waste bagi lingkungan.',
        mascotTip: 'Materi ini penting sekali untuk dipahami remaja! Yuk pelajari bahaya asam baterai dan logam berat.',
        contentHtml: `
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <span style="background: #fee2e2; color: #991b1b; border: 1.5px solid #fecaca; padding: 0.35rem 1rem; border-radius: 20px; font-weight: 800; font-size: 0.85rem;">Bab 3 • Bahaya Tersembunyi (B3)</span>
                <h2 style="font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; color: var(--text-dark); margin: 0.8rem 0 0.5rem;">Misteri Sampah B3 & Bahaya Tersembunyi Baterai</h2>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Dipublikasikan oleh Tim EcoLearn • Pembelajaran Mendalam untuk Remaja</p>
            </div>

            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. B3 adalah singkatan dari <b>Bahan Berbahaya dan Beracun</b>. Banyak barang elektronik rumah tangga yang kita gunakan sehari-hari mengandung senyawa beracun yang memerlukan penanganan khusus.</p>

            <h3 class="reader-heading-2"><span>⚡</span> 1. Kandungan Logam Berat pada Baterai Bekas</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Baterai bekas mengandung zat beracun seperti Kadmium, Merkuri, Timbal, dan Asam Sulfat. Ketika baterai dibuang ke tanah terbuka dan kehujanan, logam berat tersebut dapat meresap ke dalam air tanah yang kita minum.</p>

            <div class="reader-callout warning">
                <strong>⚠️ Bahaya Kebocoran B3:</strong>
                Lorem ipsum dolor sit amet. Membakar limbah B3 secara sembarangan akan melepaskan gas dioksin beracun yang dapat membahayakan paru-paru dan kesehatan lingkungan sekitar!
            </div>

            <h3 class="reader-heading-2"><span>📱</span> 2. Pengelolaan Sampah Elektronik (E-Waste)</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kabel bekas, smartphone rusak, dan komponen laptop harus dikumpulkan ke tempat penampungan e-waste khusus agar bahan logam langka di dalamnya dapat diekstrak kembali secara aman.</p>
        `,
        quiz: {
            question: 'Apa kepanjangan dari istilah sampah B3?',
            options: [
                'Bahan Bersih, Baru, dan Bekas',
                'Bahan Berbahaya dan Beracun',
                'Barang Buangan Buatan Manusia',
                'Batu Baterai dan Benda Logam'
            ],
            correct: 1,
            explanation: 'Benar! B3 adalah singkatan dari Bahan Berbahaya dan Beracun yang memerlukan penanganan khusus agar tidak merusak tanah dan air tanah.'
        }
    },
    {
        id: 'mat-4',
        title: 'Bab 4: Panduan Gaya Hidup Zero Waste untuk Remaja Modern',
        category: 'zerowaste',
        categoryName: 'Zero Waste',
        categoryIcon: '♻️',
        categoryColor: '#fef9c3',
        categoryBorder: '#fef08a',
        categoryTextColor: '#854d0e',
        ageTarget: 'teens',
        ageLabel: '🧑‍🎓 Remaja',
        readTime: '4 Menit',
        coverGradient: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)',
        coverIcon: '🛍️',
        excerpt: 'Lorem ipsum dolor sit amet, excepteur sint occaecat cupidatat non proident. Terapkan prinsip 5R untuk mengurangi jejak sampah plastik harianmu secara keren!',
        mascotTip: 'Menjadi gaya hidup hijau itu keren dan hemat! Yuk pelajari aksi 5R bersama Lilo.',
        contentHtml: `
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <span style="background: #fef9c3; color: #854d0e; border: 1.5px solid #fef08a; padding: 0.35rem 1rem; border-radius: 20px; font-weight: 800; font-size: 0.85rem;">Bab 4 • Gaya Hidup Hijau</span>
                <h2 style="font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; color: var(--text-dark); margin: 0.8rem 0 0.5rem;">Panduan Gaya Hidup Zero Waste untuk Remaja Modern</h2>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Dipublikasikan oleh Tim EcoLearn • Pembelajaran Gaya Hidup Remaja</p>
            </div>

            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zero waste bukan berarti tidak menghasilkan sampah sama sekali, melainkan usaha sadar untuk meminimalkan limbah yang berakhir di TPA dengan menerapkan prinsip 5R.</p>

            <h3 class="reader-heading-2"><span>✋</span> 1. Refuse (Menolak Plastik Sekali Pakai)</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Katakan tidak pada sedotan plastik sekali pakai, kantong kresek belanjaan ringan, dan pembungkus berlebih saat jajan di luar.</p>

            <h3 class="reader-heading-2"><span>🔄</span> 2. Reduce & Reuse (Mengurangi & Menggunakan Kembali)</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bawalah tumbler minum favoritmu, kotak bekal, dan totebag kain. Selain ramah lingkungan, ini juga bisa menghemat uang jajanmu!</p>

            <div class="reader-callout tip">
                <strong>🌿 Tips Zero Waste Keren:</strong>
                Lorem ipsum dolor sit amet. Manfaatkan botol kaca bekas selai atau wadah plastik bekas sebagai tempat pensil atau pot tanaman di meja belajarmu!
            </div>
        `,
        quiz: {
            question: 'Apa arti dari tindakan "Refuse" dalam gerakan Zero Waste?',
            options: [
                'Membuang sampah ke sungai',
                'Menolak penggunaan plastik sekali pakai yang tidak perlu',
                'Membakar sampah di halaman belakang',
                'Membeli barang plastik sebanyak-banyaknya'
            ],
            correct: 1,
            explanation: 'Pintar sekali! Refuse artinya menolak menggunakan produk sekali pakai yang berpotensi menjadi limbah jika ada alternatif yang lebih ramah lingkungan.'
        }
    },
    {
        id: 'mat-5',
        title: 'Bab 5: Keajaiban Kompos: Mengubah Sisa Sayur Jadi Emas Hijau',
        category: 'zerowaste',
        categoryName: 'Zero Waste',
        categoryIcon: '🪴',
        categoryColor: '#f0fdf4',
        categoryBorder: '#bbf7d0',
        categoryTextColor: '#15803d',
        ageTarget: 'kids',
        ageLabel: '👶 Anak-Anak',
        readTime: '3 Menit',
        coverGradient: 'linear-gradient(135deg, #bbf7d0 0%, #86efac 100%)',
        coverIcon: '🌱',
        excerpt: 'Lorem ipsum dolor sit amet, sed ut perspiciatis unde omnis iste natus error. Rahasia bagaimana cacing dan bakteri tanah mengubah sampah dapur menjadi pupuk tanaman.',
        mascotTip: 'Tahukah kamu sampah dapur bisa disulap jadi pupuk kaya nutrisi? Yuk baca petualangannya!',
        contentHtml: `
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <span style="background: #f0fdf4; color: #15803d; border: 1.5px solid #bbf7d0; padding: 0.35rem 1rem; border-radius: 20px; font-weight: 800; font-size: 0.85rem;">Bab 5 • Pengolahan Organik</span>
                <h2 style="font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; color: var(--text-dark); margin: 0.8rem 0 0.5rem;">Keajaiban Kompos: Mengubah Sisa Sayur Jadi Emas Hijau</h2>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Dipublikasikan oleh Tim EcoLearn • Membaca Praktis Praktikum Organik</p>
            </div>

            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kompos adalah bahan organik alami yang dihasilkan dari pelapukan sisa tanaman, kulit buah, dan dedaunan yang diurai oleh mikroorganisme tanah.</p>

            <h3 class="reader-heading-2"><span>🍂</span> 1. Bahan Hijau & Bahan Cokelat</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Untuk membuat kompos yang berkualitas, kita membutuhkan campuran kaya nitrogen (sisa sayur/buah segar) dan kaya karbon (daun kering, ranting kecil, kertas karton polos).</p>

            <div class="reader-callout fact">
                <strong>🪱 Teman Mikroorganismemu:</strong>
                Cacing tanah dan bakteri pengurai bekerja siang dan malam mengubah tumpukan sampah dapur menjadi humus tanah yang subur dan wangi seperti bau tanah hujan!
            </div>
        `,
        quiz: {
            question: 'Manakah dari bahan berikut yang SANGAT COCOK dimasukkan ke dalam wadah komposter di rumah?',
            options: [
                'Kaleng minuman alumunium & botol kaca',
                'Kulit pisang, sisa sayuran, dan daun kering',
                'Baterai bekas dan kabel listrik',
                'Kantong plastik dan styrofoam bekas'
            ],
            correct: 1,
            explanation: 'Luar biasa! Kulit pisang, sisa sayuran, dan daun kering adalah bahan alami organik yang mudah diurai oleh bakteri komposter.'
        }
    },
    {
        id: 'mat-6',
        title: 'Bab 6: Pemanasan Global & Peran Kita Menjaga Bumi',
        category: 'climate',
        categoryName: 'Iklim & Bumi',
        categoryIcon: '🌍',
        categoryColor: '#e0f2fe',
        categoryBorder: '#bae6fd',
        categoryTextColor: '#0284c7',
        ageTarget: 'teens',
        ageLabel: '🧑‍🎓 Remaja',
        readTime: '5 Menit',
        coverGradient: 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)',
        coverIcon: '☀️',
        excerpt: 'Lorem ipsum dolor sit amet, nemo enim ipsam voluptatem quia voluptas. Memahami efek rumah kaca, jejak karbon (carbon footprint), dan aksi nyata remaja penyelemat bumi.',
        mascotTip: 'Bumi butuh bantuan kita! Bacalah bagaimana langkah kecilmu berpengaruh besar bagi iklim global.',
        contentHtml: `
            <div style="margin-bottom: 1.5rem; text-align: center;">
                <span style="background: #e0f2fe; color: #0284c7; border: 1.5px solid #bae6fd; padding: 0.35rem 1rem; border-radius: 20px; font-weight: 800; font-size: 0.85rem;">Bab 6 • Perubahan Iklim</span>
                <h2 style="font-family: var(--font-outfit); font-size: 1.8rem; font-weight: 800; color: var(--text-dark); margin: 0.8rem 0 0.5rem;">Pemanasan Global & Peran Kita Menjaga Bumi</h2>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Dipublikasikan oleh Tim EcoLearn • Pengetahuan Iklim Global</p>
            </div>

            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pemanasan global merujuk pada peningkatan suhu rata-rata permukaan bumi akibat meningkatnya konsentrasi gas rumah kaca seperti karbon dioksida di atmosfer.</p>

            <h3 class="reader-heading-2"><span>🌱</span> 1. Mengurangi Jejak Karbon Pribadi</h3>
            <p class="reader-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Jejak karbon adalah jumlah total gas rumah kaca yang dihasilkan dari aktivitas kita sehari-hari, seperti penggunaan listrik rumah tangga, pengisian daya hp, dan penggunaan kendaraan bermotor.</p>

            <div class="reader-callout tip">
                <strong>⚡ Aksi Hemat Energi:</strong>
                Lorem ipsum dolor sit amet. Mematikan lampu ruangan saat siang hari dan berjalan kaki atau bersepeda ke lokasi dekat dapat menekan emisi jejak karbonmu!
            </div>
        `,
        quiz: {
            question: 'Manakah tindakan sederhana sehari-hari yang dapat membantu mengurangi jejak karbon pribadi?',
            options: [
                'Menyalakan lampu dan AC sepanjang hari meskipun kamar kosong',
                'Bersepeda atau berjalan kaki saat bepergian ke tempat yang dekat',
                'Membakar sampah plastik di pekarangan rumah',
                'Membiarkan colokan charger laptop menancap terus-menerus'
            ],
            correct: 1,
            explanation: 'Tepat sekali! Bersepeda atau berjalan kaki mengurangi penggunaan bahan bakar fosil sehingga menurunkan emisi karbon di udara.'
        }
    }
];

let activeCategoryFilter = 'all';
let activeAgeFilter = 'all';
let activeSearchQuery = '';
let currentOpenedMaterialId = null;
let currentFontSize = 1.05; // rem
let isAudioReading = false;
let currentSpeechUtterance = null;

function initLearningHub() {
    renderLearningCards();
    updateLearningProgressUI();
    setupLearningEvents();
}

function setupLearningEvents() {
    // Search input event
    const searchInput = document.getElementById('learning-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeSearchQuery = e.target.value.trim().toLowerCase();
            renderLearningCards();
        });
    }

    // Category Filter Pills
    const categoryBtns = document.querySelectorAll('.filter-pill');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategoryFilter = btn.getAttribute('data-category');
            renderLearningCards();
        });
    });

    // Age Target Filter Pills
    const ageBtns = document.querySelectorAll('.age-toggle-btn');
    ageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            ageBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeAgeFilter = btn.getAttribute('data-age');
            renderLearningCards();
        });
    });

    // Reader Modal Controls
    const btnCloseReader = document.getElementById('btn-close-reader');
    const btnReaderPrev = document.getElementById('btn-reader-prev');
    const btnComplete = document.getElementById('btn-complete-material');
    const btnFontInc = document.getElementById('btn-font-inc');
    const btnFontDec = document.getElementById('btn-font-dec');
    const btnAudio = document.getElementById('btn-reader-audio');
    const btnBookmark = document.getElementById('btn-reader-bookmark');

    if (btnCloseReader) btnCloseReader.addEventListener('click', closeReaderModal);
    if (btnReaderPrev) btnReaderPrev.addEventListener('click', closeReaderModal);

    if (btnFontInc) {
        btnFontInc.addEventListener('click', () => {
            if (currentFontSize < 1.4) {
                currentFontSize += 0.08;
                updateArticleFontSize();
            }
        });
    }
    if (btnFontDec) {
        btnFontDec.addEventListener('click', () => {
            if (currentFontSize > 0.85) {
                currentFontSize -= 0.08;
                updateArticleFontSize();
            }
        });
    }

    if (btnAudio) {
        btnAudio.addEventListener('click', toggleAudioReader);
    }

    if (btnBookmark) {
        btnBookmark.addEventListener('click', toggleMaterialBookmark);
    }

    if (btnComplete) {
        btnComplete.addEventListener('click', () => {
            if (currentOpenedMaterialId) {
                claimMaterialReward(currentOpenedMaterialId);
            }
        });
    }

    // Scroll listener for reading progress bar
    const articleBody = document.getElementById('reader-article-body');
    if (articleBody) {
        articleBody.addEventListener('scroll', () => {
            const scrollTop = articleBody.scrollTop;
            const scrollHeight = articleBody.scrollHeight - articleBody.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            const progressFill = document.getElementById('reader-scroll-progress');
            if (progressFill) {
                progressFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
            }
        });
    }
}

function updateArticleFontSize() {
    const bodyEl = document.getElementById('reader-article-body');
    if (bodyEl) {
        bodyEl.style.fontSize = `${currentFontSize}rem`;
    }
}

function renderLearningCards() {
    const container = document.getElementById('learning-cards-container');
    if (!container) return;

    const completed = Array.isArray(playerState.completedMaterials) ? playerState.completedMaterials : [];

    const filtered = learningMaterials.filter(mat => {
        // Category Filter
        if (activeCategoryFilter !== 'all' && mat.category !== activeCategoryFilter) {
            return false;
        }
        // Age Filter
        if (activeAgeFilter !== 'all' && mat.ageTarget !== activeAgeFilter) {
            return false;
        }
        // Search Filter
        if (activeSearchQuery !== '') {
            const matchTitle = mat.title.toLowerCase().includes(activeSearchQuery);
            const matchExcerpt = mat.excerpt.toLowerCase().includes(activeSearchQuery);
            const matchCat = mat.categoryName.toLowerCase().includes(activeSearchQuery);
            if (!matchTitle && !matchExcerpt && !matchCat) return false;
        }
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: rgba(255,255,255,0.7); border-radius: 24px; border: 2px dashed #cbd5e1;">
                <div style="font-size: 3.5rem; margin-bottom: 0.8rem;">🔍</div>
                <h3 style="font-family: var(--font-outfit); font-size: 1.4rem; color: var(--text-dark); font-weight: 800; margin-bottom: 0.4rem;">Materi Tidak Ditemukan</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto 1.2rem;">Coba gunakan kata kunci pencarian yang lain atau ubah filter topik dan target usia di atas.</p>
                <button class="btn-hero-primary" onclick="resetLearningFilters()" style="padding: 0.6rem 1.4rem; font-size: 0.9rem;">Reset Filter 🔄</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(mat => {
        const isDone = completed.includes(mat.id);
        const isBookmarked = Array.isArray(playerState.bookmarkedMaterials) && playerState.bookmarkedMaterials.includes(mat.id);

        return `
            <div class="material-card" onclick="openReaderModal('${mat.id}')">
                <div class="material-card-header" style="background: ${mat.coverGradient};">
                    <div class="material-header-icon">${mat.coverIcon}</div>
                    <div style="display: flex; gap: 0.4rem; align-items: center;">
                        ${isBookmarked ? `<span style="background: #ffffff; padding: 0.2rem 0.5rem; border-radius: 10px; font-size: 0.75rem;">🔖 Bookmark</span>` : ''}
                        <span class="material-badge-age">${mat.ageLabel}</span>
                    </div>
                </div>

                <div class="material-card-body">
                    <div class="material-meta-row">
                        <span class="material-tag-pill" style="background: ${mat.categoryColor}; color: ${mat.categoryTextColor}; border: 1px solid ${mat.categoryBorder};">
                            ${mat.categoryIcon} ${mat.categoryName}
                        </span>
                        <span class="material-read-time">⏱️ ${mat.readTime}</span>
                    </div>
                    <h3 class="material-card-title">${mat.title}</h3>
                    <p class="material-card-excerpt">${mat.excerpt}</p>
                </div>

                <div class="material-card-footer">
                    <span class="material-status-tag ${isDone ? 'completed' : 'unread'}">
                        ${isDone ? '✅ Selesai Dibaca' : '📖 Belum Dibaca'}
                    </span>
                    <button class="btn-hero-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem; border-radius: 12px; pointer-events: none;">
                        ${isDone ? 'Baca Lagi ➔' : 'Mulai Baca ➔'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

window.resetLearningFilters = function() {
    activeCategoryFilter = 'all';
    activeAgeFilter = 'all';
    activeSearchQuery = '';
    const searchInput = document.getElementById('learning-search-input');
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.filter-pill').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === 'all');
    });
    document.querySelectorAll('.age-toggle-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-age') === 'all');
    });
    renderLearningCards();
};

function updateLearningProgressUI() {
    const completed = Array.isArray(playerState.completedMaterials) ? playerState.completedMaterials : [];
    const total = learningMaterials.length;
    const count = completed.length;
    const percent = Math.round((count / total) * 100);

    const textEl = document.getElementById('learning-progress-text');
    const fillEl = document.getElementById('learning-progress-bar-fill');

    if (textEl) textEl.textContent = `Progres: ${count} / ${total} Materi (${percent}%)`;
    if (fillEl) fillEl.style.width = `${percent}%`;
}

function openReaderModal(materialId) {
    const mat = learningMaterials.find(m => m.id === materialId);
    if (!mat) return;

    currentOpenedMaterialId = materialId;

    const modal = document.getElementById('reader-modal');
    if (!modal) return;

    // Set Header UI
    const catIcon = document.getElementById('reader-category-icon');
    const catBadge = document.getElementById('reader-category-badge');
    const modalTitle = document.getElementById('reader-modal-title');
    const mascotTip = document.getElementById('reader-mascot-tip');
    const metaTime = document.getElementById('reader-meta-time');
    const metaAge = document.getElementById('reader-meta-age');
    const metaStatus = document.getElementById('reader-meta-status');
    const mascotContainer = document.getElementById('reader-mascot-container');

    if (catIcon) catIcon.textContent = mat.categoryIcon;
    if (catBadge) {
        catBadge.textContent = `${mat.categoryIcon} ${mat.categoryName}`;
        catBadge.style.background = mat.categoryColor;
        catBadge.style.color = mat.categoryTextColor;
        catBadge.style.border = `1px solid ${mat.categoryBorder}`;
    }
    if (modalTitle) modalTitle.textContent = mat.title;
    if (mascotTip) mascotTip.textContent = `"${mat.mascotTip}"`;
    if (metaTime) metaTime.textContent = `⏱️ ${mat.readTime}`;
    if (metaAge) metaAge.textContent = mat.ageLabel;

    const completed = Array.isArray(playerState.completedMaterials) ? playerState.completedMaterials : [];
    const isDone = completed.includes(materialId);

    if (metaStatus) {
        metaStatus.textContent = isDone ? '✅ Selesai Dibaca' : '📖 Belum Selesai';
        metaStatus.style.color = isDone ? '#16a34a' : '#ca8a04';
    }

    if (mascotContainer) {
        mascotContainer.innerHTML = getLiloMascotHtml(playerState.activeCostume || 'default', 70, 70);
    }

    // Bookmark button state
    updateBookmarkButtonUI(materialId);

    // Build Content + Quiz HTML
    const articleBody = document.getElementById('reader-article-body');
    if (articleBody) {
        articleBody.scrollTop = 0;
        articleBody.innerHTML = `
            ${mat.contentHtml}

            <!-- End of Article Interactive Reflection Quiz -->
            <div class="reader-quiz-box" id="reader-quiz-box">
                <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
                    <span style="font-size: 1.8rem;">💡</span>
                    <h3 style="font-family: var(--font-outfit); font-size: 1.25rem; font-weight: 800; color: var(--text-dark); margin: 0;">Refleksi & Kuis Singkat</h3>
                </div>
                <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.2rem;">Uji pemahamanmu seputar materi yang baru saja kamu baca untuk memastikan kamu sudah paham!</p>
                <h4 style="font-size: 1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 1rem;">${mat.quiz.question}</h4>
                <div class="reader-quiz-options-grid">
                    ${mat.quiz.options.map((opt, idx) => `
                        <div class="reader-quiz-option" onclick="handleReaderQuizSelect(${idx}, ${mat.quiz.correct}, '${mat.quiz.explanation.replace(/'/g, "\\'")}')">
                            ${opt}
                        </div>
                    `).join('')}
                </div>
                <div id="reader-quiz-feedback" style="display: none; margin-top: 1rem; padding: 1rem; border-radius: 14px; font-weight: 700; font-size: 0.92rem; line-height: 1.5;"></div>
            </div>
        `;
    }

    // Reset scroll progress bar
    const progressFill = document.getElementById('reader-scroll-progress');
    if (progressFill) progressFill.style.width = '0%';

    // Display modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeReaderModal() {
    const modal = document.getElementById('reader-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
    stopAudioReader();
}

window.handleReaderQuizSelect = function(selectedIndex, correctIndex, explanation) {
    const options = document.querySelectorAll('.reader-quiz-option');
    const feedback = document.getElementById('reader-quiz-feedback');

    options.forEach((opt, idx) => {
        opt.classList.remove('correct', 'wrong');
        if (idx === correctIndex) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex) {
            opt.classList.add('wrong');
        }
    });

    if (feedback) {
        feedback.style.display = 'block';
        if (selectedIndex === correctIndex) {
            feedback.style.background = '#dcfce7';
            feedback.style.color = '#15803d';
            feedback.style.border = '1.5px solid #86efac';
            feedback.innerHTML = `🎉 <b>Benar Sekali!</b> ${explanation}`;
            playerState.quizPerfect = true;
            savePlayerState();
            checkBadges();
        } else {
            feedback.style.background = '#fee2e2';
            feedback.style.color = '#b91c1c';
            feedback.style.border = '1.5px solid #fecaca';
            feedback.innerHTML = `Wah, belum tepat! Jawaban yang benar adalah pilihan ke-${correctIndex + 1}. ${explanation}`;
        }
    }
};

function toggleMaterialBookmark() {
    if (!currentOpenedMaterialId) return;

    if (!Array.isArray(playerState.bookmarkedMaterials)) {
        playerState.bookmarkedMaterials = [];
    }

    const idx = playerState.bookmarkedMaterials.indexOf(currentOpenedMaterialId);
    if (idx >= 0) {
        playerState.bookmarkedMaterials.splice(idx, 1);
    } else {
        playerState.bookmarkedMaterials.push(currentOpenedMaterialId);
    }

    savePlayerState();
    updateBookmarkButtonUI(currentOpenedMaterialId);
    renderLearningCards();
}

function updateBookmarkButtonUI(materialId) {
    const icon = document.getElementById('bookmark-icon');
    const isBookmarked = Array.isArray(playerState.bookmarkedMaterials) && playerState.bookmarkedMaterials.includes(materialId);
    if (icon) {
        icon.textContent = isBookmarked ? '🔖 Marked' : '🔖 Bookmark';
    }
}

function toggleAudioReader() {
    if (isAudioReading) {
        stopAudioReader();
    } else {
        startAudioReader();
    }
}

function startAudioReader() {
    const btn = document.getElementById('btn-reader-audio');
    const audioIcon = document.getElementById('reader-audio-icon');
    const audioText = document.getElementById('reader-audio-text');

    if ('speechSynthesis' in window) {
        const articleText = document.getElementById('reader-article-body')?.innerText || '';
        if (articleText) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(articleText.substring(0, 300));
            utterance.lang = 'id-ID';
            utterance.onend = () => {
                stopAudioReader();
            };
            window.speechSynthesis.speak(utterance);
            currentSpeechUtterance = utterance;
        }
    }

    isAudioReading = true;
    if (btn) btn.classList.add('active-audio');
    if (audioIcon) audioIcon.textContent = '🔊';
    if (audioText) audioText.textContent = 'Sedang Membaca...';
}

function stopAudioReader() {
    isAudioReading = false;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    const btn = document.getElementById('btn-reader-audio');
    const audioIcon = document.getElementById('reader-audio-icon');
    const audioText = document.getElementById('reader-audio-text');

    if (btn) btn.classList.remove('active-audio');
    if (audioIcon) audioIcon.textContent = '🔊';
    if (audioText) audioText.textContent = 'Dengarkan';
}

function claimMaterialReward(materialId) {
    if (!Array.isArray(playerState.completedMaterials)) {
        playerState.completedMaterials = [];
    }

    const isFirstTime = !playerState.completedMaterials.includes(materialId);

    if (isFirstTime) {
        playerState.completedMaterials.push(materialId);
        playerState.xp += 30;
        playerState.coins += 15;
        savePlayerState();
        triggerLocalConfettiBurst();
    }

    updateProfileUI();
    checkBadges();
    updateLearningProgressUI();
    renderLearningCards();

    closeReaderModal();
}

// Global scope bindings
window.openReaderModal = openReaderModal;
window.closeReaderModal = closeReaderModal;

/* =========================================================================
   DOM CONTENT LOADED INITIALIZATION
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    loadPlayerState();
    renderAllMascots();
    updateProfileUI();
    checkBadges();
    
    initScrollEffects();

    initCostumeShop();
    initLearningHub();
    initMobileNav();
    initBackToTop();
});

