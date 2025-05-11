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

// تعريف الروابط الصوتية بناءً على السورة والآية
const audioUrls = {
    "ياسر الدوسري": {
        "آل عمران: 159": "https://www.mp3quran.net/eng/play/3/yasser_al_dosari/003159.mp3",
        "النجم: 43": "https://www.mp3quran.net/eng/play/53/yasser_al_dosari/053043.mp3",
        "الأعراف: 156": "https://www.mp3quran.net/eng/play/7/yasser_al_dosari/007156.mp3",
        "يونس: 58": "https://www.mp3quran.net/eng/play/10/yasser_al_dosari/010058.mp3",
        "الحجر: 87": "https://www.mp3quran.net/eng/play/15/yasser_al_dosari/015087.mp3",
        "الرعد: 28": "https://www.mp3quran.net/eng/play/13/yasser_al_dosari/013028.mp3",
        "الشرح: 6": "https://www.mp3quran.net/eng/play/94/yasser_al_dosari/094006.mp3",
        "الطلاق: 2": "https://www.mp3quran.net/eng/play/65/yasser_al_dosari/065002.mp3",
        "الشعراء: 217": "https://www.mp3quran.net/eng/play/26/yasser_al_dosari/026217.mp3",
        "التوبة: 51": "https://www.mp3quran.net/eng/play/9/yasser_al_dosari/009051.mp3",
        "الحديد: 4": "https://www.mp3quran.net/eng/play/57/yasser_al_dosari/057004.mp3",
        "البقرة: 153": "https://www.mp3quran.net/eng/play/2/yasser_al_dosari/002153.mp3",
        "التوبة: 40": "https://www.mp3quran.net/eng/play/9/yasser_al_dosari/009040.mp3",
        "الطور: 48": "https://www.mp3quran.net/eng/play/52/yasser_al_dosari/052048.mp3",
        "الزمر: 36": "https://www.mp3quran.net/eng/play/39/yasser_al_dosari/039036.mp3",
        "إبراهيم: 7": "https://www.mp3quran.net/eng/play/14/yasser_al_dosari/014007.mp3",
        "البقرة: 172": "https://www.mp3quran.net/eng/play/2/yasser_al_dosari/002172.mp3",
        "المائدة: 7": "https://www.mp3quran.net/eng/play/5/yasser_al_dosari/005007.mp3",
        "البقرة: 152": "https://www.mp3quran.net/eng/play/2/yasser_al_dosari/002152.mp3",
        "آل عمران: 145": "https://www.mp3quran.net/eng/play/3/yasser_al_dosari/003145.mp3",
        "آل عمران: 139": "https://www.mp3quran.net/eng/play/3/yasser_al_dosari/003139.mp3",
        "يوسف: 87": "https://www.mp3quran.net/eng/play/12/yasser_al_dosari/012087.mp3",
        "الأعراف: 156": "https://www.mp3quran.net/eng/play/7/yasser_al_dosari/007156.mp3",
        "البقرة: 155": "https://www.mp3quran.net/eng/play/2/yasser_al_dosari/002155.mp3",
        "آل عمران: 134": "https://www.mp3quran.net/eng/play/3/yasser_al_dosari/003134.mp3",
        "الشورى: 37": "https://www.mp3quran.net/eng/play/42/yasser_al_dosari/042037.mp3",
        "الأعراف: 199": "https://www.mp3quran.net/eng/play/7/yasser_al_dosari/007199.mp3",
        "فصلت: 34": "https://www.mp3quran.net/eng/play/41/yasser_al_dosari/041034.mp3",
        "الشورى: 40": "https://www.mp3quran.net/eng/play/42/yasser_al_dosari/042040.mp3"
    },
    "ناصر القطامي": {
        "آل عمران: 159": "https://www.mp3quran.net/eng/play/3/nasser_al_qatami/003159.mp3",
        "النجم: 43": "https://www.mp3quran.net/eng/play/53/nasser_al_qatami/053043.mp3",
        "الأعراف: 156": "https://www.mp3quran.net/eng/play/7/nasser_al_qatami/007156.mp3",
        "يونس: 58": "https://www.mp3quran.net/eng/play/10/nasser_al_qatami/010058.mp3",
        "الحجر: 87": "https://www.mp3quran.net/eng/play/15/nasser_al_qatami/015087.mp3",
        "الرعد: 28": "https://www.mp3quran.net/eng/play/13/nasser_al_qatami/013028.mp3",
        "الشرح: 6": "https://www.mp3quran.net/eng/play/94/nasser_al_qatami/094006.mp3",
        "الطلاق: 2": "https://www.mp3quran.net/eng/play/65/nasser_al_qatami/065002.mp3",
        "الشعراء: 217": "https://www.mp3quran.net/eng/play/26/nasser_al_qatami/026217.mp3",
        "التوبة: 51": "https://www.mp3quran.net/eng/play/9/nasser_al_qatami/009051.mp3",
        "الحديد: 4": "https://www.mp3quran.net/eng/play/57/nasser_al_qatami/057004.mp3",
        "البقرة: 153": "https://www.mp3quran.net/eng/play/2/nasser_al_qatami/002153.mp3",
        "التوبة: 40": "https://www.mp3quran.net/eng/play/9/nasser_al_qatami/009040.mp3",
        "الطور: 48": "https://www.mp3quran.net/eng/play/52/nasser_al_qatami/052048.mp3",
        "الزمر: 36": "https://www.mp3quran.net/eng/play/39/nasser_al_qatami/039036.mp3",
        "إبراهيم: 7": "https://www.mp3quran.net/eng/play/14/nasser_al_qatami/014007.mp3",
        "البقرة: 172": "https://www.mp3quran.net/eng/play/2/nasser_al_qatami/002172.mp3",
        "المائدة: 7": "https://www.mp3quran.net/eng/play/5/nasser_al_qatami/005007.mp3",
        "البقرة: 152": "https://www.mp3quran.net/eng/play/2/nasser_al_qatami/002152.mp3",
        "آل عمران: 145": "https://www.mp3quran.net/eng/play/3/nasser_al_qatami/003145.mp3",
        "آل عمران: 139": "https://www.mp3quran.net/eng/play/3/nasser_al_qatami/003139.mp3",
        "يوسف: 87": "https://www.mp3quran.net/eng/play/12/nasser_al_qatami/012087.mp3",
        "الأعراف: 156": "https://www.mp3quran.net/eng/play/7/nasser_al_qatami/007156.mp3",
        "البقرة: 155": "https://www.mp3quran.net/eng/play/2/nasser_al_qatami/002155.mp3",
        "آل عمران: 134": "https://www.mp3quran.net/eng/play/3/nasser_al_qatami/003134.mp3",
        "الشورى: 37": "https://www.mp3quran.net/eng/play/42/nasser_al_qatami/042037.mp3",
        "الأعراف: 199": "https://www.mp3quran.net/eng/play/7/nasser_al_qatami/007199.mp3",
        "فصلت: 34": "https://www.mp3quran.net/eng/play/41/nasser_al_qatami/041034.mp3",
        "الشورى: 40": "https://www.mp3quran.net/eng/play/42/nasser_al_qatami/042040.mp3"
    }
};

const moodButtons = document.querySelectorAll('.mood-btn');
const resultDiv = document.getElementById('result');
const verseP = document.getElementById('verse');
const reciterSelect = document.getElementById('reciter');
const playAudioBtn = document.getElementById('play-audio');
const themeToggleBtn = document.querySelector('.theme-toggle i');
let audio = new Audio();
let currentVerse = "";

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        const verseList = verses[mood];
        const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
        
        verseP.textContent = randomVerse;
        currentVerse = randomVerse;
        resultDiv.classList.remove('hidden');
        resultDiv.style.opacity = 1;
    });
});

playAudioBtn.addEventListener('click', () => {
    const reciter = reciterSelect.value;
    const verseKey = currentVerse.match(/\(.*?\)/)[0].replace(/[()]/g, ""); // استخراج المرجع مثل "آل عمران: 159"
    const audioUrl = audioUrls[reciter][verseKey];
    
    if (audioUrl) {
        audio.src = audioUrl;
        audio.play().catch(error => alert('خطأ في تشغيل الصوت، تأكد من الرابط أو الاتصال بالإنترنت!'));
    } else {
        alert('لا يوجد رابط صوتي متاح لهذه الآية، يرجى إضافة رابط صالح!');
    }
});

function toggleTheme() {
    document.body.classList.toggle('dark');
    themeToggleBtn.classList.toggle('fa-sun');
    themeToggleBtn.classList.toggle('fa-moon');
}
