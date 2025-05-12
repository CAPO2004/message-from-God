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
        "فَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ (آل عمران: 139)",
        "وَلَا تَايْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ (يوسف: 87)",
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

// تعريف مسارات الملفات الصوتية المحلية لكل آية
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
    },
    "مشاري العفاسي": {
        "آل عمران: 159": "./audio/al_imran_159_alafasy.mp3",
        "النجم: 43": "./audio/an_najm_43_alafasy.mp3",
        "الأعراف: 156": "./audio/al_araf_156_alafasy.mp3",
        "يونس: 58": "./audio/yunus_58_alafasy.mp3",
        "الحجر: 87": "./audio/al_hijr_87_alafasy.mp3",
        "الرعد: 28": "./audio/ar_rad_28_alafasy.mp3",
        "الشرح: 6": "./audio/ash_sharh_6_alafasy.mp3",
        "الطلاق: 2": "./audio/at_talaq_2_alafasy.mp3",
        "الشعراء: 217": "./audio/ash_shuara_217_alafasy.mp3",
        "التوبة: 51": "./audio/at_tawbah_51_alafasy.mp3",
        "الحديد: 4": "./audio/al_hadid_4_alafasy.mp3",
        "البقرة: 153": "./audio/al_baqarah_153_alafasy.mp3",
        "التوبة: 40": "./audio/at_tawbah_40_alafasy.mp3",
        "الطور: 48": "./audio/at_tur_48_alafasy.mp3",
        "الزمر: 36": "./audio/az_zumar_36_alafasy.mp3",
        "إبراهيم: 7": "./audio/ibrahim_7_alafasy.mp3",
        "البقرة: 172": "./audio/al_baqarah_172_alafasy.mp3",
        "المائدة: 7": "./audio/al_maidah_7_alafasy.mp3",
        "البقرة: 152": "./audio/al_baqarah_152_alafasy.mp3",
        "آل عمران: 145": "./audio/al_imran_145_alafasy.mp3",
        "آل عمران: 139": "./audio/al_imran_139_alafasy.mp3",
        "يوسف: 87": "./audio/yusuf_87_alafasy.mp3",
        "البقرة: 155": "./audio/al_baqarah_155_alafasy.mp3",
        "آل عمران: 134": "./audio/al_imran_134_alafasy.mp3",
        "الشورى: 37": "./audio/ash_shura_37_alafasy.mp3",
        "الأعراف: 199": "./audio/al_araf_199_alafasy.mp3",
        "فصلت: 34": "./audio/fussilat_34_alafasy.mp3",
        "الشورى: 40": "./audio/ash_shura_40_alafasy.mp3"
    },
    "عبد الباسط": {
        "آل عمران: 159": "./audio/al_imran_159_abdulbasit.mp3",
        "النجم: 43": "./audio/an_najm_43_abdulbasit.mp3",
        "الأعراف: 156": "./audio/al_araf_156_abdulbasit.mp3",
        "يونس: 58": "./audio/yunus_58_abdulbasit.mp3",
        "الحجر: 87": "./audio/al_hijr_87_abdulbasit.mp3",
        "الرعد: 28": "./audio/ar_rad_28_abdulbasit.mp3",
        "الشرح: 6": "./audio/ash_sharh_6_abdulbasit.mp3",
        "الطلاق: 2": "./audio/at_talaq_2_abdulbasit.mp3",
        "الشعراء: 217": "./audio/ash_shuara_217_abdulbasit.mp3",
        "التوبة: 51": "./audio/at_tawbah_51_abdulbasit.mp3",
        "الحديد: 4": "./audio/al_hadid_4_abdulbasit.mp3",
        "البقرة: 153": "./audio/al_baqarah_153_abdulbasit.mp3",
        "التوبة: 40": "./audio/at_tawbah_40_abdulbasit.mp3",
        "الطور: 48": "./audio/at_tur_48_abdulbasit.mp3",
        "الزمر: 36": "./audio/az_zumar_36_abdulbasit.mp3",
        "إبراهيم: 7": "./audio/ibrahim_7_abdulbasit.mp3",
        "البقرة: 172": "./audio/al_baqarah_172_abdulbasit.mp3",
        "المائدة: 7": "./audio/al_maidah_7_abdulbasit.mp3",
        "البقرة: 152": "./audio/al_baqarah_152_abdulbasit.mp3",
        "آل عمران: 145": "./audio/al_imran_145_abdulbasit.mp3",
        "آل عمران: 139": "./audio/al_imran_139_abdulbasit.mp3",
        "يوسف: 87": "./audio/yusuf_87_abdulbasit.mp3",
        "البقرة: 155": "./audio/al_baqarah_155_abdulbasit.mp3",
        "آل عمران: 134": "./audio/al_imran_134_abdulbasit.mp3",
        "الشورى: 37": "./audio/ash_shura_37_abdulbasit.mp3",
        "الأعراف: 199": "./audio/al_araf_199_abdulbasit.mp3",
        "فصلت: 34": "./audio/fussilat_34_abdulbasit.mp3",
        "الشورى: 40": "./audio/ash_shura_40_abdulbasit.mp3"
    }
};

// جمع كل الآيات في مصفوفة واحدة للاختيار العشوائي
const allVerses = Object.values(verses).flat();

const moodButtons = document.querySelectorAll('.mood-btn');
const randomVerseBtn = document.getElementById('random-verse-btn');
const resultDiv = document.getElementById('result');
const verseP = document.getElementById('verse');
const reciterSelect = document.getElementById('reciter');
const playAudioBtn = document.getElementById('play-audio');
const themeToggleBtn = document.querySelector('.theme-toggle');
let audio = new Audio();
let currentVerse = "";

// دالة لعرض الآية
function displayVerse(verse) {
    verseP.textContent = verse;
    currentVerse = verse;
    resultDiv.classList.remove('hidden');
    resultDiv.style.opacity = 1;
}

// التعامل مع أزرار الحالة
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        const verseList = verses[mood];
        const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
        displayVerse(randomVerse);
    });
});

// زر الآية العشوائية
randomVerseBtn.addEventListener('click', () => {
    const randomVerse = allVerses[Math.floor(Math.random() * allVerses.length)];
    displayVerse(randomVerse);
});

// تشغيل الصوت
playAudioBtn.addEventListener('click', () => {
    const reciter = reciterSelect.value;
    const verseKey = currentVerse.match(/\(.*?\)/)[0].replace(/[()]/g, ""); // استخراج المرجع مثل "آل عمران: 159"
    const audioUrl = audioUrls[reciter][verseKey];
    
    if (audioUrl) {
        audio.src = audioUrl;
        audio.play().catch(error => alert('خطأ في تشغيل الصوت، تأكد من وجود الملف في مجلد audio!'));
    } else {
        alert('لا يوجد ملف صوتي متاح لهذه الآية، يرجى إضافة الملف في مجلد audio!');
    }
});

// التبديل بين الوضع الفاتح والداكن
function toggleTheme() {
    document.body.classList.toggle('dark');
    const icon = themeToggleBtn.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
}

themeToggleBtn.addEventListener('click', toggleTheme);
