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

// --- بداية التعديلات لدمج Everyayah ---

// قاموس لربط أسماء السور بأرقامها (يمكن توسيعه حسب الحاجة)
const surahNameToNumber = {
    "الفاتحة": 1,
    "البقرة": 2,
    "آل عمران": 3,
    "النساء": 4,
    "المائدة": 5,
    "الأنعام": 6,
    "الأعراف": 7,
    "الأنفال": 8,
    "التوبة": 9,
    "يونس": 10,
    "هود": 11,
    "يوسف": 12,
    "الرعد": 13,
    "إبراهيم": 14,
    "الحجر": 15,
    "النحل": 16,
    "الإسراء": 17,
    "الكهف": 18,
    "مريم": 19,
    "طه": 20,
    "الأنبياء": 21,
    "الحج": 22,
    "المؤمنون": 23,
    "النور": 24,
    "الفرقان": 25,
    "الشعراء": 26,
    "النمل": 27,
    "القصص": 28,
    "العنكبوت": 29,
    "الروم": 30,
    "لقمان": 31,
    "السجدة": 32,
    "الأحزاب": 33,
    "سبأ": 34,
    "فاطر": 35,
    "يس": 36,
    "الصافات": 37,
    "ص": 38,
    "الزمر": 39,
    "غافر": 40,
    "فصلت": 41,
    "الشورى": 42,
    "الزخرف": 43,
    "الدخان": 44,
    "الجاثية": 45,
    "الأحقاف": 46,
    "محمد": 47,
    "الفتح": 48,
    "الحجرات": 49,
    "ق": 50,
    "الذاريات": 51,
    "الطور": 52,
    "النجم": 53,
    "القمر": 54,
    "الرحمن": 55,
    "الواقعة": 56,
    "الحديد": 57,
    "المجادلة": 58,
    "الحشر": 59,
    "الممتحنة": 60,
    "الصف": 61,
    "الجمعة": 62,
    "المنافقون": 63,
    "التغابن": 64,
    "الطلاق": 65,
    "التحريم": 66,
    "الملك": 67,
    "القلم": 68,
    "الحاقة": 69,
    "المعارج": 70,
    "نوح": 71,
    "الجن": 72,
    "المزمل": 73,
    "المدثر": 74,
    "القيامة": 75,
    "الإنسان": 76,
    "المرسلات": 77,
    "النبأ": 78,
    "النازعات": 79,
    "عبس": 80,
    "التكوير": 81,
    "الإنفطار": 82,
    "المطففين": 83,
    "الإنشقاق": 84,
    "البروج": 85,
    "الطارق": 86,
    "الأعلى": 87,
    "الغاشية": 88,
    "الفجر": 89,
    "البلد": 90,
    "الشمس": 91,
    "الليل": 92,
    "الضحى": 93,
    "الشرح": 94,
    "التين": 95,
    "العلق": 96,
    "القدر": 97,
    "البينة": 98,
    "الزلزلة": 99,
    "العاديات": 100,
    "القارعة": 101,
    "التكاثر": 102,
    "العصر": 103,
    "الهمزة": 104,
    "الفيل": 105,
    "قريش": 106,
    "الماعون": 107,
    "الكوثر": 108,
    "الكافرون": 109,
    "النصر": 110,
    "المسد": 111,
    "الإخلاص": 112,
    "الفلق": 113,
    "الناس": 114
};

// قاموس لربط اسم القارئ المعروض في القائمة المنسدلة باسم المجلد على Everyayah
const reciterFolderNames = {
    "ياسر الدوسري": "Yasser_Ad-Dussary_128kbps", // مثال، قد تحتاج لتأكيد اسم المجلد الصحيح
    "ناصر القطامي": "Nasser_Alqatami_128kbps" // مثال، قد تحتاج لتأكيد اسم المجلد الصحيح
    // يمكنك إضافة المزيد من القراء هنا
};

// دالة لتوليد رابط الصوت من Everyayah
function getEveryayahAudioUrl(reciterFolderName, surahNumber, ayahNumber) {
    if (!reciterFolderName || !surahNumber || !ayahNumber) {
        console.error("معلومات غير كافية لتوليد رابط الصوت من Everyayah", reciterFolderName, surahNumber, ayahNumber);
        return null;
    }
    const formattedSurah = String(surahNumber).padStart(3, '0');
    const formattedAyah = String(ayahNumber).padStart(3, '0');
    return `https://everyayah.com/data/${reciterFolderName}/${formattedSurah}${formattedAyah}.mp3`;
}

// دالة لاستخراج اسم السورة ورقم الآية من نص الآية الكامل
function parseVerseInfo(verseText) {
    const match = verseText.match(/\(([^:]+):\s*(\d+)\)/);
    if (match && match[2] && match[3]) {
        const surahName = match[2].trim();
        const ayahNumber = parseInt(match[3], 10);
        const surahNumber = surahNameToNumber[surahName];
        if (surahNumber) {
            return { surahName, ayahNumber, surahNumber };
        }
    }
    console.warn("لم يتمكن من استخراج معلومات السورة والآية من: ", verseText);
    return null;
}

// --- نهاية التعديلات لدمج Everyayah ---

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
let currentVerseInfo = null; // لتخزين معلومات الآية الحالية (بما في ذلك رقم السورة والآية)
let currentMoodColor = "#6d4c41"; // اللون الافتراضي
let isMuted = false;
let isDragging = false;

// دالة تحويل الثواني إلى تنسيق زمني (mm:ss)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// دالة لتشغيل الصوت (معدلة لاستخدام Everyayah)
function playCurrentVerseAudio() {
    if (!currentVerseInfo || !currentVerseInfo.surahNumber || !currentVerseInfo.ayahNumber) {
        // console.log("لا توجد معلومات آية حالية لتشغيل الصوت.");
        return;
    }

    const selectedReciterName = reciterSelect.value;
    const reciterFolderName = reciterFolderNames[selectedReciterName];

    if (!reciterFolderName) {
        // console.error(`لم يتم العثور على اسم مجلد للقارئ: ${selectedReciterName}`);
        return;
    }

    const audioUrl = getEveryayahAudioUrl(reciterFolderName, currentVerseInfo.surahNumber, currentVerseInfo.ayahNumber);
    
    if (audioUrl) {
        progressBar.style.width = "0";
        progressThumb.style.left = "-8px";
        currentTimeSpan.textContent = "0:00";
        durationSpan.textContent = "0:00"; // إعادة تعيين المدة
        audio.src = audioUrl;
        audio.load(); 
        audio.muted = isMuted;
        // audio.currentTime = 0; // تم إزالتها لأن load() يجب أن تعيد التعيين
        audio.play().then(() => {
            durationSpan.textContent = formatTime(audio.duration || 0);
            updateProgress();
        }).catch((error) => {
            // console.error("خطأ في تشغيل الصوت: ", error);
            durationSpan.textContent = "خطأ"; // إظهار خطأ في حالة فشل التحميل
        });
    } else {
        // console.log("لم يتمكن من الحصول على رابط الصوت.");
         durationSpan.textContent = "غير متاح";
    }
}

// دالة لتحديث شريط التقدم والزمن
function updateProgress() {
    if (audio.duration && !audio.paused && !isDragging) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        progressThumb.style.left = `calc(${progress}% - 8px)`;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
        requestAnimationFrame(updateProgress);
    }
}

// دالة لتحديث موضع الصوت بناءً على النقر أو السحب
function updateAudioPosition(clientX) {
    const rect = audioProgress.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const progressPercent = offsetX / rect.width;
    if (audio.duration) { // التأكد من أن المدة موجودة قبل التعيين
        audio.currentTime = progressPercent * audio.duration;
        progressBar.style.width = `${progressPercent * 100}%`;
        progressThumb.style.left = `calc(${progressPercent * 100}% - 8px)`;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
    }
}

audioProgress.addEventListener('click', (e) => {
    if (audio.readyState >= 2) { // التأكد من أن بيانات كافية قد تم تحميلها (HAVE_CURRENT_DATA أو أكثر)
        updateAudioPosition(e.clientX);
        if (audio.paused) audio.play().catch(()=>{}); 
        updateProgress();
    }
});

progressThumb.addEventListener('mousedown', (e) => {
    if (audio.readyState >= 2) {
        isDragging = true;
        audio.pause(); 
        e.preventDefault(); 
    }
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && audio.readyState >= 2) {
        updateAudioPosition(e.clientX);
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging && audio.readyState >= 2) {
        isDragging = false;
        if (!audio.paused) {
            audio.play().catch(()=>{}); 
            updateProgress();
        }
    }
});

// دالة لعرض الآية وتحديث الألوان وتشغيل الصوت تلقائيًا
function displayVerse(verseText, mood) {
    verseP.textContent = verseText;
    currentVerseInfo = parseVerseInfo(verseText); // استخراج معلومات الآية وتخزينها
    
    resultDiv.classList.remove('hidden');
    resultDiv.style.opacity = 1;

    currentMoodColor = moodColors[mood] || "#4caf50";
    playAudioBtn.style.backgroundColor = currentMoodColor;
    reciterLabel.style.color = currentMoodColor;
    verseP.style.borderLeftColor = currentMoodColor;

    progressBar.style.width = "0";
    progressThumb.style.left = "-8px";
    currentTimeSpan.textContent = "0:00";
    durationSpan.textContent = "0:00"; // إعادة تعيين المدة عند عرض آية جديدة
    
    audio.pause(); // إيقاف أي صوت سابق
    audio.currentTime = 0; // إعادة تعيين الوقت

    if (currentVerseInfo) {
        playCurrentVerseAudio(); // تشغيل الصوت للآية الجديدة
    }
}

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        const verseList = verses[mood];
        const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
        displayVerse(randomVerse, mood);
    });
});

randomVerseBtn.addEventListener('click', () => {
    const randomVerse = allVerses[Math.floor(Math.random() * allVerses.length)];
    displayVerse(randomVerse, "random");
});

playAudioBtn.addEventListener('click', () => {
    if (audio.paused && currentVerseInfo) {
        playCurrentVerseAudio(); // إذا كان متوقفًا، شغله
    } else if (!audio.paused) {
        audio.pause(); // إذا كان يعمل، أوقفه
    } else if (!currentVerseInfo) {
        // لا تفعل شيئًا إذا لم تكن هناك آية معروضة
    }
});

stopAudioBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    progressBar.style.width = "0";
    progressThumb.style.left = "-8px";
    currentTimeSpan.textContent = "0:00";
});

rewindAudioBtn.addEventListener('click', () => {
    if (audio.readyState >= 2) {
        audio.currentTime = 0;
        progressBar.style.width = "0";
        progressThumb.style.left = "-8px";
        currentTimeSpan.textContent = "0:00";
    }
});

volumeControlBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    volumeControlBtn.querySelector('i').classList.toggle('fa-volume-up');
    volumeControlBtn.querySelector('i').classList.toggle('fa-volume-mute');
});

// عند تغيير القارئ، أعد تشغيل الصوت للآية الحالية
reciterSelect.addEventListener('change', () => {
    if (currentVerseInfo && !audio.paused) { // إذا كان هناك آية معروضة والصوت يعمل أو متوقف مؤقتًا
        playCurrentVerseAudio();
    } else if (currentVerseInfo && audio.paused && audio.currentTime > 0) {
         playCurrentVerseAudio(); // إذا كان متوقفًا ولكن ليس في البداية
    }
});

shareVerseBtn.addEventListener('click', () => {
    const verseText = verseP.textContent;
    const siteUrl = "https://capo2004.github.io/message-from-God/"; // رابط الموقع الفعلي
    const shareText = `${verseText}\n\nرسالة من الله - تفضل بزيارة الموقع: ${siteUrl}`;
    navigator.clipboard.writeText(shareText).then(() => {
        const existingMenu = document.getElementById('social-menu');
        if (existingMenu) existingMenu.remove();

        const socialOptions = `
            <div id="social-menu">
                <a href="https://wa.me/?text=${encodeURIComponent(shareText)}" target="_blank" style="color: #25D366;"><i class="fab fa-whatsapp"></i> واتساب</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(verseText)}" target="_blank" style="color: #3b5998;"><i class="fab fa-facebook"></i> فيسبوك</a>
                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(verseText)}&url=${encodeURIComponent(siteUrl)}" target="_blank" style="color: #1DA1F2;"><i class="fab fa-twitter"></i> تويتر</a>
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

function toggleTheme() {
    document.body.classList.toggle('dark');
    const icon = themeToggleBtn.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
}

themeToggleBtn.addEventListener('click', toggleTheme);

// إضافة مستمع لانتهاء الصوت لإعادة تعيين الشريط
audio.addEventListener('ended', () => {
    progressBar.style.width = "0";
    progressThumb.style.left = "-8px";
    currentTimeSpan.textContent = "0:00";
});

// معالجة الأخطاء العامة في تحميل الصوت
audio.addEventListener('error', (e) => {
    // console.error("خطأ في عنصر الصوت: ", e);
    durationSpan.textContent = "خطأ بالتحميل";
    // يمكنك إضافة رسالة للمستخدم هنا إذا أردت
});

