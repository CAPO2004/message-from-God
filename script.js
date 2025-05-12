const verses = {
    "السعادة": [
        "فَبِمَا رَحْمَةٍ مِنَ اللَّهِ لِنتَ لَهُمْ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانْفَضُّوا مِنْ حَوْلِكَ فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِي الْأَمْرِ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ (آل عمران: 159)",
        "وَأَنَّهُ هُوَ أَضْحَكَ وَأَبْكَىٰ (النجم: 43)",
        "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ فَسَأَكْتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤْتُونَ الزَّكَاةَ وَالَّذِينَ هُمْ بِآيَاتِنَا يُؤْمِنُونَ (الأعراف: 156)",
        "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ (يونس: 58)",
        "وَلَقَدْ آتَيْنَاكَ سَبْعًا مِّنَ الْمَثَانِي وَالْقُرْآنَ الْعَظِيمَ (الحجر: 87)"
    ],
    "القلق": [
        "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ (الرعد: 28)",
        "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (الشرح: 6)",
        "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا (الطلاق: 2)",
        "وَتَوَكَّلْ عَلَى الْعَزِيزِ الرَّحِيمِ (الشعراء: 217)",
        "قُلْ لَن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ (التوبة: 51)"
    ],
    "الوحدة": [
        "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ (الحديد: 4)",
        "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (البقرة: 153)",
        "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا (التوبة: 40)",
        "وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا (الطور: 48)",
        "أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ (الزمر: 36)"
    ],
    "الشكر": [
        "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ (إبراهيم: 7)",
        "فَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا وَاشْكُرُوا نِعْمَتَ اللَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ (البقرة: 172)",
        "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ (المائدة: 7)",
        "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ (البقرة: 152)",
        "وَسَنَجْزِي الشَّاكِرِينَ (آل عمران: 145)"
    ],
    "الحزن": [
        "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا (التوبة: 40)",
        "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ (آل عمران: 139)",
        "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ (يوسف: 87)",
        "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ فَسَأَكْتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤْتُونَ الزَّكَاةَ وَالَّذِينَ هُمْ بِآيَاتِنَا يُؤْمِنُونَ (الأعراف: 156)",
        "وَبَشِّرِ الصَّابِرِينَ (البقرة: 155)"
    ],
    "الغضب": [
        "الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ (آل عمران: 134)",
        "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ (الشورى: 37)",
        "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ (الأعراف: 199)",
        "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ (فصلت: 34)",
        "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ (الشورى: 40)"
    ]
};

const audioUrls = {
    "ياسر الدوسري": {
        "آل عمران: 159": "./audio/al_imran_159.mp3",
        "النجم: 43": "./audio/an_najm_43.mp3",
        "الأعراف: 156": "./audio/al_araf_156.mp3",
        "يونس: 58": "./audio/yunus_58.mp3",
        "الحجر: 87": "./audio/al_hijr_87.mp3",
        "الرعد: 28": "./audio/ar_rad_28.mp3",
        "الشرح: 6": "./audio/ash_sharh_6.mp3",
        "الطلاق: 2": "./audio/at_talaq_2.mp3",
        "الشعراء: 217": "./audio/ash_shuara_217.mp3",
        "التوبة: 51": "./audio/at_tawbah_51.mp3",
        "الحديد: 4": "./audio/al_hadid_4.mp3",
        "البقرة: 153": "./audio/al_baqarah_153.mp3",
        "التوبة: 40": "./audio/at_tawbah_40.mp3",
        "الطور: 48": "./audio/at_tur_48.mp3",
        "الزمر: 36": "./audio/az_zumar_36.mp3",
        "إبراهيم: 7": "./audio/ibrahim_7.mp3",
        "البقرة: 172": "./audio/al_baqarah_172.mp3",
        "المائدة: 7": "./audio/al_maidah_7.mp3",
        "البقرة: 152": "./audio/al_baqarah_152.mp3",
        "آل عمران: 145": "./audio/al_imran_145.mp3",
        "آل عمران: 139": "./audio/al_imran_139.mp3",
        "يوسف: 87": "./audio/yusuf_87.mp3",
        "البقرة: 155": "./audio/al_baqarah_155.mp3",
        "آل عمران: 134": "./audio/al_imran_134.mp3",
        "الشورى: 37": "./audio/ash_shura_37.mp3",
        "الأعراف: 199": "./audio/al_araf_199.mp3",
        "فصلت: 34": "./audio/fussilat_34.mp3",
        "الشورى: 40": "./audio/ash_shura_40.mp3"
    },
    "ناصر القطامي": {
        "آل عمران: 159": "./audio/al_imran_159_qatami.mp3",
        "النجم: 43": "./audio/an_najm_43_qatami.mp3",
        "الأعراف: 156": "./audio/al_araf_156_qatami.mp3",
        "يونس: 58": "./audio/yunus_58_qatami.mp3",
        "الحجر: 87": "./audio/al_hijr_87_qatami.mp3",
        "الرعد: 28": "./audio/ar_rad_28_qatami.mp3",
        "الشرح: 6": "./audio/ash_sharh_6_qatami.mp3",
        "الطلاق: 2": "./audio/at_talaq_2_qatami.mp3",
        "الشعراء: 217": "./audio/ash_shuara_217_qatami.mp3",
        "التوبة: 51": "./audio/at_tawbah_51_qatami.mp3",
        "الحديد: 4": "./audio/al_hadid_4_qatami.mp3",
        "البقرة: 153": "./audio/al_baqarah_153_qatami.mp3",
        "التوبة: 40": "./audio/at_tawbah_40_qatami.mp3",
        "الطور: 48": "./audio/at_tur_48_qatami.mp3",
        "الزمر: 36": "./audio/az_zumar_36_qatami.mp3",
        "إبراهيم: 7": "./audio/ibrahim_7_qatami.mp3",
        "البقرة: 172": "./audio/al_baqarah_172_qatami.mp3",
        "المائدة: 7": "./audio/al_maidah_7_qatami.mp3",
        "البقرة: 152": "./audio/al_baqarah_152_qatami.mp3",
        "آل عمران: 145": "./audio/al_imran_145_qatami.mp3",
        "آل عمران: 139": "./audio/al_imran_139_qatami.mp3",
        "يوسف: 87": "./audio/yusuf_87_qatami.mp3",
        "البقرة: 155": "./audio/al_baqarah_155_qatami.mp3",
        "آل عمران: 134": "./audio/al_imran_134_qatami.mp3",
        "الشورى: 37": "./audio/ash_shura_37_qatami.mp3",
        "الأعراف: 199": "./audio/al_araf_199_qatami.mp3",
        "فصلت: 34": "./audio/fussilat_34_qatami.mp3",
        "الشورى: 40": "./audio/ash_shura_40_qatami.mp3"
    }
};

// جمع كل الآيات في مصفوفة واحدة للاختيار العشوائي
const allVerses = Object.values(verses).flat();

// تعريف الألوان بناءً على الحالة
const moodColors = {
    "السعادة": "#6d4c41",
    "القلق": "#0288d1",
    "الوحدة": "#78909c",
    "الشكر": "#f9a825",
    "الحزن": "#5e35b1",
    "الغضب": "#d32f2f",
    "random": "#4caf50" // لون زر الرسالة العشوائية
};

const moodButtons = document.querySelectorAll('.mood-btn');
const randomVerseBtn = document.getElementById('random-verse-btn');
const resultDiv = document.getElementById('result');
const verseP = document.getElementById('verse');
const reciterSelect = document.getElementById('reciter');
const playAudioBtn = document.getElementById('play-audio');
const stopAudioBtn = document.getElementById('stop-audio');
const shareVerseBtn = document.getElementById('share-verse');
const reciterLabel = document.querySelector('#result h3');
const audioProgress = document.getElementById('audio-progress');
const progressBar = document.getElementById('progress-bar');
const progressThumb = document.getElementById('progress-thumb');
const currentTimeSpan = document.getElementById('current-time');
const durationSpan = document.getElementById('duration');
const rewindAudioBtn = document.getElementById('rewind-audio');
const volumeControlBtn = document.getElementById('volume-control');
const themeToggleBtn = document.querySelector('.theme-toggle');
let audio = new Audio();
let currentVerse = "";
let currentMoodColor = "#6d4c41"; // اللون الافتراضي
let isMuted = false;
let isDragging = false;

// دالة تحويل الثواني إلى تنسيق زمني (mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// دالة لتشغيل الصوت
function playAudio(reciter, verseKey) {
    const audioUrl = audioUrls[reciter][verseKey];
    if (audioUrl) {
        // إيقاف الصوت الحالي وإعادة تعيين الشريط
        audio.pause();
        progressBar.style.width = "0";
        progressThumb.style.left = "-10px";
        currentTimeSpan.textContent = "0:00";
        durationSpan.textContent = "0:00";

        audio.src = audioUrl;
        audio.load(); // إعادة تحميل الملف
        audio.muted = isMuted;

        // الانتظار حتى يتم تحميل البيانات الوصفية للصوت
        audio.addEventListener('loadedmetadata', () => {
            audio.currentTime = 0; // التأكد من البدء من الصفر
            durationSpan.textContent = formatTime(audio.duration);
            audio.play().then(() => {
                updateProgress();
            }).catch(() => {
                // لا رسائل خطأ
            });
        }, { once: true });
    }
}

// دالة لتحديث شريط التقدم والزمن
function updateProgress() {
    if (audio.duration && !audio.paused && !isDragging) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        progressThumb.style.left = `calc(${progress}% - 10px)`; // تحريك الدائرة
        currentTimeSpan.textContent = formatTime(audio.currentTime);
        requestAnimationFrame(updateProgress);
    }
}

// دالة لتحديث موضع الصوت بناءً على النقر أو السحب
function updateAudioPosition(clientX) {
    const rect = audioProgress.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const progressPercent = offsetX / rect.width;
    audio.currentTime = progressPercent * audio.duration;
    progressBar.style.width = `${progressPercent * 100}%`;
    progressThumb.style.left = `calc(${progressPercent * 100}% - 10px)`;
    currentTimeSpan.textContent = formatTime(audio.currentTime);
}

// جعل الخط الزمني تفاعليًا (النقر)
audioProgress.addEventListener('click', (e) => {
    if (audio.duration) {
        updateAudioPosition(e.clientX);
        if (audio.paused) audio.play();
        updateProgress();
    }
});

// جعل الدائرة قابلة للسحب
progressThumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    audio.pause();
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && audio.duration) {
        updateAudioPosition(e.clientX);
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        if (!audio.paused) {
            audio.play();
            updateProgress();
        }
    }
});

// دالة لعرض الآية وتحديث الألوان وتشغيل الصوت تلقائيًا
function displayVerse(verse, mood) {
    verseP.textContent = verse;
    currentVerse = verse;
    resultDiv.classList.remove('hidden');
    resultDiv.style.opacity = 1;

    // تحديث الألوان بناءً على زر الحالة
    currentMoodColor = moodColors[mood] || "#4caf50";
    playAudioBtn.style.backgroundColor = currentMoodColor;
    reciterLabel.style.color = currentMoodColor;
    verseP.style.borderLeftColor = currentMoodColor;

    // إعادة تعيين الشريط قبل تشغيل الصوت
    progressBar.style.width = "0";
    progressThumb.style.left = "-10px";
    currentTimeSpan.textContent = "0:00";
    durationSpan.textContent = "0:00";

    // تشغيل الصوت تلقائيًا بناءً على القارئ الافتراضي
    const reciter = reciterSelect.value;
    const verseKey = currentVerse.match(/\(.*?\)/)[0].replace(/[()]/g, "");
    playAudio(reciter, verseKey);
}

// التعامل مع أزرار الحالة
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        const verseList = verses[mood];
        const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
        displayVerse(randomVerse, mood);
    });
});

// زر الآية العشوائية
randomVerseBtn.addEventListener('click', () => {
    const randomVerse = allVerses[Math.floor(Math.random() * allVerses.length)];
    displayVerse(randomVerse, "random");
});

// تشغيل الصوت يدويًا (مع تغيير القارئ فورًا)
playAudioBtn.addEventListener('click', () => {
    audio.pause();
    const reciter = reciterSelect.value;
    const verseKey = currentVerse.match(/\(.*?\)/)[0].replace(/[()]/g, "");
    playAudio(reciter, verseKey);
});

// إيقاف الصوت
stopAudioBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    progressBar.style.width = "0";
    progressThumb.style.left = "-10px";
    currentTimeSpan.textContent = "0:00";
});

// إعادة الصوت إلى البداية
rewindAudioBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    progressBar.style.width = "0";
    progressThumb.style.left = "-10px";
    currentTimeSpan.textContent = "0:00";
});

// كتم/إلغاء كتم الصوت
volumeControlBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    volumeControlBtn.querySelector('i').classList.toggle('fa-volume-up');
    volumeControlBtn.querySelector('i').classList.toggle('fa-volume-mute');
});

// مشاركة الآية مع قائمة منصات التواصل
shareVerseBtn.addEventListener('click', () => {
    const verseText = verseP.textContent;
    const shareText = `${verseText}\n\nرسالة من الله - تفضل بزيارة الموقع: [https://message-from-god.netlify.app/]`;
    navigator.clipboard.writeText(shareText).then(() => {
        const existingMenu = document.getElementById('social-menu');
        if (existingMenu) existingMenu.remove();

        const socialOptions = `
            <div id="social-menu">
                <a href="https://wa.me/?text=${encodeURIComponent(shareText)}" target="_blank" style="color: #25D366;"><i class="fab fa-whatsapp"></i> واتساب</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=[https://message-from-god.netlify.app/]"e=${encodeURIComponent(shareText)}" target="_blank" style="color: #3b5998;"><i class="fab fa-facebook"></i> فيسبوك</a>
                <a href="https://www.instagram.com/?url=[https://message-from-god.netlify.app/]&text=${encodeURIComponent(shareText)}" target="_blank" style="color: #E1306C;"><i class="fab fa-instagram"></i> إنستغرام</a>
            </div>
        `;
        resultDiv.insertAdjacentHTML('beforeend', socialOptions);
        setTimeout(() => {
            const menu = document.getElementById('social-menu');
            if (menu) menu.remove();
        }, 5000);
        alert('تم نسخ الآية! اختر منصة للمشاركة.');
    }).catch(() => {
        alert('فشل في النسخ، يرجى المحاولة يدويًا.');
    });
});

// التبديل بين الوضع الفاتح والداكن
function toggleTheme() {
    document.body.classList.toggle('dark');
    const icon = themeToggleBtn.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
}

themeToggleBtn.addEventListener('click', toggleTheme);
