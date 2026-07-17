import './bootstrap';

// Disaster Mitigation Data Store
const disasterData = {
    fire: {
        title: "Kebakaran Hutan",
        category: "Bencana Alam / Lingkungan",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
        class: "fire",
        color: "#f59e0b",
        sebelum: [
            { title: "Pantau Indeks Risiko Kebakaran", desc: "Selalu periksa informasi prakiraan cuaca dan peta potensi kebakaran hutan dari BMKG." },
            { title: "Buat Sekat Bakar (Firebreak)", desc: "Bersihkan area sekitar pemukiman dari daun kering, ranting, dan bahan mudah terbakar sebagai pembatas api." },
            { title: "Jangan Sembarang Membakar", desc: "Hindari membuka lahan dengan cara membakar. Jangan membuang puntung rokok sembarangan di area vegetasi kering." },
            { title: "Siapkan Perlengkapan Darurat", desc: "Sediakan masker N95, pelindung mata, dan tabung pemadam api ringan (APAR) di rumah." }
        ],
        saat: [
            { title: "Evakuasi Lewat Jalur Aman", desc: "Segera ikuti instruksi evakuasi petugas. Bergeraklah melawan arah angin agar terhindar dari sebaran api." },
            { title: "Lindungi Saluran Pernapasan", desc: "Pakai masker respirator (N95) atau gunakan kain/masker yang telah dibasahi air untuk menyaring partikel debu abu." },
            { title: "Tutup Semua Ventilasi Rumah", desc: "Jika terpaksa bertahan di dalam ruangan, tutup semua pintu, jendela, dan lubang ventilasi rapat-rapat." },
            { title: "Gunakan Pakaian Pelindung", desc: "Kenakan pakaian lengan panjang, celana panjang, dan sepatu tertutup untuk meminimalisir luka bakar akibat hawa panas." }
        ],
        setelah: [
            { title: "Hindari Area Bekas Terbakar", desc: "Jangan mendekati hutan yang baru saja terbakar. Pepohonan yang rapuh bisa tumbang sewaktu-waktu." },
            { title: "Waspadai Bara Tersembunyi", desc: "Periksa lingkungan sekitar rumah Anda untuk memastikan tidak ada sisa bara yang dapat memicu api baru." },
            { title: "Gunakan Masker Saat Bersih-bersih", desc: "Partikel abu halus yang menumpuk di halaman bisa terbang kembali dan terhirup. Gunakan masker N95 saat membersihkannya." },
            { title: "Pantau Kualitas Udara", desc: "Gunakan aplikasi indeks kualitas udara (AQI). Kurangi aktivitas luar ruangan jika udara masih berkabut asap." }
        ]
    },
    gas: {
        title: "Gas Bocor di Rumah",
        category: "Bencana Domestik / Rumah Tangga",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        class: "gas",
        color: "#fb923c",
        sebelum: [
            { title: "Gunakan Alat Berstandar SNI", desc: "Gunakan selang, regulator, klem, dan kompor yang sudah bersertifikat standar nasional Indonesia." },
            { title: "Ventilasi Dapur Memadai", desc: "Pastikan dapur memiliki ventilasi udara yang baik, terutama ventilasi dekat permukaan lantai karena gas LPG lebih berat dari udara." },
            { title: "Uji Kebocoran Mandiri", desc: "Secara rutin oleskan air sabun pada sambungan selang dan regulator. Jika terbentuk gelembung, berarti ada kebocoran." },
            { title: "Pahami Bau Khas Gas", desc: "Edukasi seluruh anggota keluarga untuk mengenali bau tajam belerang (merkaptan) yang sengaja dicampur pada LPG." }
        ],
        saat: [
            { title: "Haramkan Percikan Api & Listrik", desc: "Jangan menyalakan/mematikan sakelar lampu, kompor, korek, atau mencabut kabel. Percikan listrik mikro dapat memicu ledakan instan." },
            { title: "Buka Lebar Pintu & Jendela", desc: "Segera buka semua pintu dan jendela agar udara segar masuk dan konsentrasi gas di dalam ruangan berkurang." },
            { title: "Lepaskan Regulator Gas", desc: "Cabut regulator dari tabung gas secara hati-hati agar suplai gas bocor dari tabung segera terhenti." },
            { title: "Evakuasi Tabung Keluar Rumah", desc: "Jika aman, bawa tabung gas ke area terbuka di luar rumah yang memiliki sirkulasi udara bebas." }
        ],
        setelah: [
            { title: "Periksa Selang & Regulator", desc: "Ganti selang atau regulator yang rusak dengan yang baru. Jangan gunakan solatip atau karet gelang untuk memodifikasinya." },
            { title: "Jangan Nyalakan Kompor Dahulu", desc: "Biarkan sirkulasi udara berjalan selama minimal 15-30 menit sampai bau gas benar-benar hilang sepenuhnya dari dapur." },
            { title: "Hubungi Teknisi Berpengalaman", desc: "Jika Anda ragu atau gas bocor berlanjut, hubungi agen gas resmi atau layanan darurat terdekat." }
        ]
    },
    flood: {
        title: "Banjir Bandang",
        category: "Bencana Alam Hidrometeorologi",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M3 17h18M3 7h18"/></svg>`,
        class: "flood",
        color: "#06b6d4",
        sebelum: [
            { title: "Siapkan Tas Siaga Bencana", desc: "Siapkan tas tahan air berisi air minum, makanan instan, obat-obatan, dokumen penting, senter, dan peluit." },
            { title: "Identifikasi Jalur Evakuasi", desc: "Ketahui lokasi posko banjir terdekat serta jalur paling aman dari tempat tinggal Anda yang bebas banjir." },
            { title: "Tinggikan Stop Kontak Listrik", desc: "Pindahkan sakelar atau stop kontak listrik di rumah ke posisi yang lebih tinggi dari batas rata-rata banjir sebelumnya." },
            { title: "Pelihara Saluran Air", desc: "Gotong royong membersihkan selokan dan hindari membuang sampah ke sungai agar daya tampung air maksimal." }
        ],
        saat: [
            { title: "Matikan Listrik dari kWh Meter", desc: "Segera matikan sakelar utama listrik (MCB) di rumah Anda untuk menghindari bahaya sengatan listrik di dalam air." },
            { title: "Amankan Barang Berharga", desc: "Pindahkan dokumen berharga dan peralatan elektronik ke lantai atas atau tempat tertinggi yang aman." },
            { title: "Evakuasi Sebelum Air Tinggi", desc: "Segera menuju ke tempat yang lebih tinggi. Jangan menunggu air naik tinggi atau arus menjadi terlalu deras." },
            { title: "Jangan Terobos Arus Air", desc: "Hindari berjalan atau berkendara menerobos banjir. Arus setinggi 30 cm sanggup menyeret tubuh manusia dan mobil." }
        ],
        setelah: [
            { title: "Waspada Sengatan Listrik", desc: "Pastikan instalasi rumah benar-benar kering sebelum menyalakan kembali sakelar listrik. Minta bantuan PLN jika ragu." },
            { title: "Waspada Binatang Berbisa", desc: "Ular, kalajengking, atau lipan seringkali mencari tempat kering dan masuk ke dalam rumah pasca-banjir." },
            { title: "Bersihkan Rumah Dengan Desinfektan", desc: "Air banjir membawa banyak bakteri dan kuman. Bersihkan lantai dan perabotan menggunakan cairan pembersih kuman." },
            { title: "Gunakan Air Bersih Higienis", desc: "Hindari mengonsumsi air sumur yang tercemar banjir sebelum diuji atau disaring. Konsumsi air kemasan atau air yang direbus matang." }
        ]
    },
    quake: {
        title: "Gempa Bumi",
        category: "Bencana Geologi / Tektonik",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-4M8 14l4 4 4-4M4 10l8 8 8-8M12 2v4M8 6h8"/></svg>`,
        class: "quake",
        color: "#a16207",
        sebelum: [
            { title: "Tata Letak Furnitur Aman", desc: "Pastikan lemari, rak buku, dan benda berat lainnya dipasang menempel kuat pada dinding agar tidak roboh menimpa Anda." },
            { title: "Pahami Konsep Drop, Cover, Hold", desc: "Latih diri dan keluarga untuk sigap berlutut, berlindung di bawah meja, dan berpegangan saat merasakan getaran." },
            { title: "Siapkan Jalur Keluar Bebas Hambatan", desc: "Jangan meletakkan benda besar yang dapat menghalangi pintu keluar utama rumah." },
            { title: "Ketahui Titik Kumpul Aman", desc: "Tentukan area terbuka (seperti lapangan) di sekitar lingkungan rumah sebagai lokasi berkumpul pasca-gempa." }
        ],
        saat: [
            { title: "Terapkan Drop, Cover, Hold On", desc: "Berlututlah (Drop), lindungi kepala dan leher di bawah meja kokoh (Cover), dan pegang kaki meja dengan erat (Hold On) sampai getaran selesai." },
            { title: "Jauhi Kaca dan Furnitur Tinggi", desc: "Hindari berdiri di dekat jendela kaca, cermin, lampu gantung, atau lemari tinggi yang berisiko pecah atau roboh." },
            { title: "Jangan Gunakan Lift", desc: "Jika berada di dalam gedung bertingkat, gunakan tangga darurat. Jangan sekali-kali naik lift karena berpotensi macet akibat listrik padam." },
            { title: "Jika di Luar, Cari Lapangan Terbuka", desc: "Menjauhlah dari tiang listrik, gedung, jembatan layang, papan baliho, atau tebing yang rentan longsor." }
        ],
        setelah: [
            { title: "Keluar Dengan Tertib", desc: "Setelah getaran utama berhenti, segera keluar bangunan dengan melindungi kepala menggunakan tas atau helm." },
            { title: "Waspada Gempa Susulan", desc: "Siaga terhadap potensi gempa susulan yang biasanya memiliki kekuatan getaran lebih kecil namun tetap membahayakan bangunan retak." },
            { title: "Periksa Luka & Cedera", desc: "Periksa diri sendiri dan orang sekitar. Berikan pertolongan pertama jika ada yang terluka ringan." },
            { title: "Evakuasi ke Pantai Tinggi (Tsunami)", desc: "Jika Anda merasakan gempa kuat di dekat pantai, segera evakuasi diri ke dataran tinggi tanpa menunggu peringatan resmi." }
        ]
    }
};

// Quiz Data Store
const quizQuestions = [
    {
        question: "Apa tindakan pertama yang paling aman ketika mendeteksi bau gas menyengat di dapur rumah?",
        options: [
            "Menyalakan lampu dapur untuk memeriksa kompor",
            "Membuka pintu & jendela selebar mungkin serta melepaskan regulator gas",
            "Menelepon petugas pemadam kebakaran tepat di sebelah tabung gas",
            "Menggosok sambungan regulator dengan korek api untuk mencari titik bocor"
        ],
        correct: 1,
        explanation: "Gas LPG lebih berat dari udara dan akan mengendap di bagian bawah. Menyalakan sakelar listrik dapat memicu percikan api mikro yang menyebabkan ledakan gas. Langkah terbaik adalah menghentikan pasokan dengan melepas regulator dan membuka ventilasi agar gas keluar ditiup angin."
    },
    {
        question: "Bila Anda berada di lantai 3 sekolah/kantor saat gempa bumi terjadi, langkah penyelamatan diri apa yang pertama kali harus dilakukan?",
        options: [
            "Segera berlari menuju lift terdekat agar cepat sampai bawah",
            "Berteriak histeris dan langsung melompat dari jendela terdekat",
            "Melakukan gerakan Drop, Cover, Hold On (Berlutut berlindung di bawah meja kokoh)",
            "Berdiri tegak di tengah koridor gedung sambil merekam video"
        ],
        correct: 2,
        explanation: "Berlari saat gempa sangat berbahaya karena guncangan dapat menjatuhkan Anda, serta reruntuhan plafon dapat menimpa Anda. Gunakan teknik Drop, Cover, Hold On di bawah meja untuk melindungi organ vital (kepala & leher) sampai guncangan benar-benar reda."
    },
    {
        question: "Saat terjadi bencana kebakaran hutan di sekitar wilayah pemukiman Anda, langkah penyelamatan apa yang paling tepat?",
        options: [
            "Berjalan mendekati api untuk mendokumentasikan kejadian",
            "Membuka lebar semua jendela rumah agar udara panas keluar",
            "Membasahi masker kain biasa dengan air lalu bernapas perlahan saat evakuasi melawan arah angin",
            "Menimbun seluruh perabot rumah di halaman luar"
        ],
        correct: 2,
        explanation: "Asap kebakaran hutan mengandung partikulat beracun. Menggunakan masker/kain basah membantu menyaring sebagian debu abu saat Anda segera melakukan evakuasi menentang arah gerak asap (melawan arah tiup angin) ke tempat aman."
    },
    {
        question: "Mengapa mematikan aliran listrik utama (MCB/kWh Meter) menjadi prioritas saat air banjir mulai menggenangi halaman rumah?",
        options: [
            "Agar peralatan elektronik tidak mati mendadak",
            "Untuk menghindari tagihan listrik bulanan yang melonjak tajam",
            "Mencegah korsleting arus pendek dan sengatan listrik yang mematikan melalui media air",
            "Karena diperintahkan oleh ketua RT setempat secara paksa"
        ],
        correct: 2,
        explanation: "Air adalah konduktor listrik yang sangat baik. Jika listrik rumah tetap menyala saat terendam banjir, sengatan listrik fatal dapat merambat melalui air genangan dan membahayakan keselamatan penghuni rumah."
    },
    {
        question: "Manakah di bawah ini kumpulan barang yang paling krusial untuk dimasukkan ke dalam Tas Siaga Bencana (TSB)?",
        options: [
            "Konsol game portable, kartu memori, dan headset bluetooth",
            "Dokumen berharga, air minum, makanan instan, obat-obatan pribadi, senter, dan peluit",
            "Koleksi komik kesayangan, bantal tidur guling, dan pakaian pesta",
            "Peralatan makeup lengkap, catokan rambut, dan parfum mahal"
        ],
        correct: 1,
        explanation: "Tas Siaga Bencana (TSB) dirancang untuk menunjang kehidupan mandiri Anda selama minimal 3 hari pertama pasca-bencana sebelum bantuan tiba. Air minum, makanan instan, obat-obatan, senter, peluit (alat panggil penolong), dan surat penting adalah kebutuhan utama darurat."
    }
];

// Document Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initDisasterModals();
    initQuizApp();
});

// Scroll Effects
function initScrollEffects() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const reveals = document.querySelectorAll('.reveal');

    // Header scroll background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Highlight active nav link on scroll
        let currentSection = "";
        const sections = document.querySelectorAll('section, header');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id') || "";
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Reveal elements on scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => revealObserver.observe(el));
}

// Disaster Modals Logic
function initDisasterModals() {
    const cards = document.querySelectorAll('.disaster-card');
    const overlay = document.getElementById('disaster-modal');
    const closeBtn = document.getElementById('modal-close');
    const modalBox = overlay.querySelector('.modal-box');
    
    // Elements to update
    const modalTitle = document.getElementById('modal-title');
    const modalCat = document.getElementById('modal-category');
    const modalIcon = document.getElementById('modal-icon-container');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = {
        sebelum: document.getElementById('tab-sebelum'),
        saat: document.getElementById('tab-saat'),
        setelah: document.getElementById('tab-setelah')
    };

    let activeDisasterKey = null;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.type;
            const data = disasterData[type];
            if (!data) return;

            activeDisasterKey = type;

            // Update modal headers
            modalTitle.innerText = data.title;
            modalCat.innerText = data.category;
            modalIcon.className = `modal-header-icon ${data.class}`;
            modalIcon.innerHTML = data.icon;
            
            // Set dynamic accent styling on modal header icon
            modalIcon.style.color = data.color;
            modalIcon.style.background = `rgba(${hexToRgb(data.color)}, 0.15)`;
            modalIcon.style.border = `1px solid rgba(${hexToRgb(data.color)}, 0.3)`;

            // Render content lists
            renderGuideList(tabContents.sebelum, data.sebelum);
            renderGuideList(tabContents.saat, data.saat);
            renderGuideList(tabContents.setelah, data.setelah);

            // Set default active tab
            switchTab('sebelum');

            // Open Modal
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        });
    });

    // Close Modal
    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });

    function switchTab(tabName) {
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelector(`.tab-btn[data-tab="${tabName}"]`).classList.add('active');

        Object.keys(tabContents).forEach(key => {
            if (key === tabName) {
                tabContents[key].classList.add('active');
            } else {
                tabContents[key].classList.remove('active');
            }
        });
    }

    function renderGuideList(container, list) {
        container.innerHTML = '';
        const ul = document.createElement('ul');
        ul.className = 'guide-list';
        
        list.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'guide-item';
            li.innerHTML = `
                <div class="guide-num">${index + 1}</div>
                <div class="guide-item-text">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
            ul.appendChild(li);
        });
        
        container.appendChild(ul);
    }
}

// Quiz Application Logic
function initQuizApp() {
    // State
    let currentQuestionIdx = 0;
    let score = 0;
    let quizActive = false;

    // Screens
    const screenWelcome = document.getElementById('quiz-screen-welcome');
    const screenPlay = document.getElementById('quiz-screen-play');
    const screenResults = document.getElementById('quiz-screen-results');

    // Controls
    const btnStart = document.getElementById('btn-quiz-start');
    const btnNext = document.getElementById('btn-quiz-next');
    const btnRestart = document.getElementById('btn-quiz-restart');

    // Display elements
    const progressText = document.getElementById('quiz-progress-text');
    const progressBar = document.getElementById('quiz-progress-bar');
    const questionText = document.getElementById('quiz-question');
    const optionsGrid = document.getElementById('quiz-options');
    const explanationBox = document.getElementById('quiz-explanation');
    const explanationTitle = document.getElementById('explanation-title');
    const explanationText = document.getElementById('explanation-text');
    
    // Result display elements
    const resultCircle = document.getElementById('result-circle');
    const resultScore = document.getElementById('result-score');
    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');

    // Start Quiz
    btnStart.addEventListener('click', () => {
        showScreen(screenPlay);
        startQuiz();
    });

    // Next Question
    btnNext.addEventListener('click', () => {
        currentQuestionIdx++;
        if (currentQuestionIdx < quizQuestions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    });

    // Restart Quiz
    btnRestart.addEventListener('click', () => {
        showScreen(screenWelcome);
    });

    function showScreen(screen) {
        [screenWelcome, screenPlay, screenResults].forEach(s => s.classList.remove('active'));
        screen.classList.add('active');
    }

    function startQuiz() {
        currentQuestionIdx = 0;
        score = 0;
        loadQuestion();
    }

    function loadQuestion() {
        const question = quizQuestions[currentQuestionIdx];
        
        // Update header & progress bar
        progressText.innerText = `Pertanyaan ${currentQuestionIdx + 1} dari ${quizQuestions.length}`;
        const progressPercentage = ((currentQuestionIdx) / quizQuestions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Load Question Text
        questionText.innerText = question.question;

        // Load Options
        optionsGrid.innerHTML = '';
        question.options.forEach((option, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = `
                <div class="option-letter">${letter}</div>
                <div class="option-text">${option}</div>
            `;
            button.addEventListener('click', () => selectOption(idx, button));
            optionsGrid.appendChild(button);
        });

        // Hide explanation & next button
        explanationBox.style.display = 'none';
        btnNext.style.display = 'none';
    }

    function selectOption(selectedIdx, selectedButton) {
        const question = quizQuestions[currentQuestionIdx];
        const buttons = optionsGrid.querySelectorAll('.option-btn');

        // Disable all buttons
        buttons.forEach(btn => btn.setAttribute('disabled', 'true'));

        // Check answer
        if (selectedIdx === question.correct) {
            selectedButton.classList.add('correct');
            score++;
            explanationTitle.innerText = "Benar sekali!";
            explanationBox.style.borderLeftColor = "var(--primary)";
        } else {
            selectedButton.classList.add('wrong');
            // Show correct answer in green
            buttons[question.correct].classList.add('correct');
            explanationTitle.innerText = "Kurang Tepat";
            explanationBox.style.borderLeftColor = "var(--danger)";
        }

        // Show explanation
        explanationText.innerText = question.explanation;
        explanationBox.style.display = 'block';

        // Show Next Button
        if (currentQuestionIdx === quizQuestions.length - 1) {
            btnNext.innerText = "Lihat Hasil";
        } else {
            btnNext.innerText = "Pertanyaan Berikutnya";
        }
        btnNext.style.display = 'block';
    }

    function finishQuiz() {
        showScreen(screenResults);
        
        // Update final progress bar to 100%
        progressBar.style.width = '100%';

        // Calculate score
        const scorePercentage = Math.round((score / quizQuestions.length) * 100);
        resultScore.innerText = scorePercentage;

        // Animated radial score calculation
        // Circumference of r=70 circle is 2 * pi * 70 = 439.82 (approx 440)
        const circumference = 440;
        const offset = circumference - (scorePercentage / 100) * circumference;
        resultCircle.style.strokeDashoffset = offset;

        // Set Badges and descriptions
        if (scorePercentage === 100) {
            resultTitle.innerText = "Mitigator Ahli (Sempurna)";
            resultDesc.innerText = "Luar biasa! Anda memahami seluruh prosedur keselamatan dengan sempurna. Anda adalah Ksatria Kesiapsiagaan Bencana EcoLearn!";
        } else if (scorePercentage >= 80) {
            resultTitle.innerText = "Warga Siaga Bencana";
            resultDesc.innerText = "Bagus sekali! Pemahaman mitigasi Anda sangat tinggi. Anda siap bertindak sigap saat situasi darurat terjadi.";
        } else if (scorePercentage >= 60) {
            resultTitle.innerText = "Pemula Tanggap Darurat";
            resultDesc.innerText = "Cukup baik, namun masih ada ruang untuk belajar. Bacalah panduan di atas sekali lagi untuk melengkapi kesiapan Anda.";
        } else {
            resultTitle.innerText = "Butuh Edukasi Lebih Lanjut";
            resultDesc.innerText = "Keselamatan adalah prioritas utama. Mari pelajari lagi panduan mitigasi bencana di atas agar Anda lebih siap menghadapi bahaya.";
        }
    }
}

// Utility function to convert Hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
        : null;
}
