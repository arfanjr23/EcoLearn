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
    perfectRuns: 0
};

function loadPlayerState() {
    const saved = localStorage.getItem('ecolearn_player_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            playerState = { ...playerState, ...parsed };
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
    const badges = [
        { id: 'badge-rookie', check: () => playerState.xp >= 50 },
        { id: 'badge-coins', check: () => playerState.coins >= 50 },
        { id: 'badge-organic', check: () => playerState.organicCount >= 10 },
        { id: 'badge-hazardous', check: () => playerState.hazardCount >= 5 },
        { id: 'badge-master', check: () => playerState.levelCompleted >= 5 },
        { id: 'badge-perfect', check: () => playerState.perfectRuns >= 1 }
    ];
    
    badges.forEach(b => {
        const el = document.getElementById(b.id);
        if (el) {
            const wasLocked = el.classList.contains('locked');
            if (b.check()) {
                el.classList.remove('locked');
                // Trigger burst confetti if newly unlocked!
                if (wasLocked) {
                    triggerLocalConfettiBurst();
                }
            } else {
                el.classList.add('locked');
            }
        }
    });
}

/* Dashboard tabs removed — badges and shop are now in separate section cards */

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
   ECO ARCADE LOGIC
   ========================================================================= */
function initEcoArcade() {
    const cardSorting = document.getElementById('card-play-sorting');
    const cardRiver = document.getElementById('card-play-river');
    const cardQuiz = document.getElementById('card-play-quiz');
    const btnExit = document.getElementById('btn-arcade-exit');
    
    if (cardSorting) {
        cardSorting.addEventListener('click', () => {
            launchArcadeGame('sorting');
        });
    }
    if (cardRiver) {
        cardRiver.addEventListener('click', () => {
            launchArcadeGame('river');
        });
    }
    if (cardQuiz) {
        cardQuiz.addEventListener('click', () => {
            launchArcadeGame('quiz');
        });
    }
    if (btnExit) {
        btnExit.addEventListener('click', () => {
            exitArcade();
        });
    }
}

function launchArcadeGame(gameType) {
    // 1. Hide selection menu
    const menu = document.getElementById('arcade-menu');
    if (menu) menu.style.display = 'none';
    
    // 2. Show arcade stage
    const stage = document.getElementById('arcade-stage');
    if (stage) stage.style.display = 'block';
    
    // 3. Hide all games first
    const sorting = document.getElementById('arcade-sorting-wrapper');
    const river = document.getElementById('arcade-river-wrapper');
    const quiz = document.getElementById('arcade-quiz-wrapper');
    
    if (sorting) sorting.style.display = 'none';
    if (river) river.style.display = 'none';
    if (quiz) quiz.style.display = 'none';
    
    // 4. Reset/Stop any ongoing games
    stopAllGames();
    
    // 5. Show target game and update headers
    const iconEl = document.getElementById('active-game-icon');
    const titleEl = document.getElementById('active-game-title');
    
    if (gameType === 'sorting') {
        if (sorting) sorting.style.display = 'block';
        if (iconEl) iconEl.textContent = '🗑️';
        if (titleEl) titleEl.textContent = 'Game Pemilahan Sampah';
        showGameScreen('screen-game-start');
    } else if (gameType === 'river') {
        if (river) river.style.display = 'block';
        if (iconEl) iconEl.textContent = '🕸️';
        if (titleEl) titleEl.textContent = 'Penyelamat Sungai';
        // Reset river game state and show start screen
        isRiverActive = false;
        if (riverAnimId) cancelAnimationFrame(riverAnimId);
        riverTrash = [];
        riverParticles = [];
        showRiverScreen('start');
        // Draw initial background on canvas so it's not blank behind overlay
        resizeRiverCanvas();
        drawRiverGame();
    } else if (gameType === 'quiz') {
        if (quiz) quiz.style.display = 'block';
        if (iconEl) iconEl.textContent = '💡';
        if (titleEl) titleEl.textContent = 'Kuis Pahlawan Lingkungan';
        document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
        const quizWelcome = document.getElementById('quiz-screen-welcome');
        if (quizWelcome) quizWelcome.classList.add('active');
    }
    
    if (stage) {
        stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function exitArcade() {
    stopAllGames();
    
    const menu = document.getElementById('arcade-menu');
    if (menu) menu.style.display = 'block';
    
    const stage = document.getElementById('arcade-stage');
    if (stage) stage.style.display = 'none';
    
    const section = document.getElementById('eco-arcade');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function stopAllGames() {
    // Stop trash sorting game
    isGameActive = false;
    if (typeof gameInterval !== 'undefined' && gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
    if (typeof gameAnimId !== 'undefined' && gameAnimId) {
        cancelAnimationFrame(gameAnimId);
        gameAnimId = null;
    }
    const canvasArea = document.getElementById('game-canvas-area');
    if (canvasArea) canvasArea.innerHTML = '';
    
    // Stop river defender game
    isRiverActive = false;
    if (typeof riverAnimId !== 'undefined' && riverAnimId) {
        cancelAnimationFrame(riverAnimId);
        riverAnimId = null;
    }
    riverTrash = [];
    riverParticles = [];
}

// Make them globally available
window.launchArcadeGame = launchArcadeGame;
window.exitArcade = exitArcade;

/* =========================================================================
   DOM CONTENT LOADED INITIALIZATION
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    loadPlayerState();
    renderAllMascots();
    updateProfileUI();
    checkBadges();
    updateDropdownLevelList();
    
    initScrollEffects();

    initCostumeShop();
    initGameControls();
    initRiverDefender();
    initQuizEngine();
    initEcoArcade();
    initMobileNav();
    initBackToTop();
});

