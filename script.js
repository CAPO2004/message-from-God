const verses = {
    "السعادة": [
        '"فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ..." (آل عمران: 159)',
        '"وَأَنَّهُ هُوَ أَضْحَكَ وَأَبْكَى..." (النجم: 43)',
        '"وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ..." (الأعراف: 156)',
        '"قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا..." (يونس: 58)',
        '"وَلَقَدْ آتَيْنَاكَ سَبْعًا مِّنَ الْمَثَانِي وَالْقُرْآنَ الْعَظِيمَ..." (الحجر: 87)'
    ],
    "القلق": [
        '"أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ" (الرعد: 28)',
        '"فَإِنَّ مَعَ الْعُسْرِ يُسْرًا..." (الشرح: 6)',
        '"وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا..." (الطلاق: 2)',
        '"وَتَوَكَّلْ عَلَى الْعَزِيزِ الرَّحِيمِ..." (الشعراء: 217)',
        '"قُلْ لَن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا..." (التوبة: 51)'
    ],
    "الوحدة": [
        '"وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ..." (الحديد: 4)',
        '"إِنَّ اللَّهَ مَعَ الصَّابِرِينَ..." (البقرة: 153)',
        '"فَإِنَّ اللَّهَ مَعَنَا..." (التوبة: 40)',
        '"وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا..." (الطور: 48)',
        '"أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ..." (الزمر: 36)'
    ],
    "الشكر": [
        '"لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ..." (إبراهيم: 7)',
        '"وَاشْكُرُوا لِلَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ..." (البقرة: 172)',
        '"وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ..." (المائدة: 7)',
        '"فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي..." (البقرة: 152)',
        '"وَسَنَجْزِي الشَّاكِرِينَ..." (آل عمران: 145)'
    ],
    "الحزن": [
        '"لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا..." (التوبة: 40)',
        '"وَلَا تَهِنُوا وَلَا تَحْزَنُوا..." (آل عمران: 139)',
        '"وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ..." (يوسف: 87)',
        '"إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ..." (الأعراف: 56)',
        '"وَبَشِّرِ الصَّابِرِينَ..." (البقرة: 155)'
    ],
    "الغضب": [
        '"وَالْكَاظِمِينَ الْغَيْظَ..." (آل عمران: 134)',
        '"وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ..." (الشورى: 37)',
        '"خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ..." (الأعراف: 199)',
        '"وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ..." (فصلت: 34)',
        '"وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ..." (الشورى: 40)'
    ]
};

const moodButtons = document.querySelectorAll('.mood-btn');
const resultDiv = document.getElementById('result');
const verseP = document.getElementById('verse');
const reciterSelect = document.getElementById('reciter');
const playAudioBtn = document.getElementById('play-audio');
const themeToggleBtn = document.querySelector('.theme-toggle i');
let audio = new Audio();
let clickSound = new Audio('https://www.soundjay.com/buttons/button-3.mp3'); // رابط صوت تأثير بسيط

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        clickSound.play(); // تشغيل صوت عند الضغط
        const mood = button.getAttribute('data-mood');
        const verseList = verses[mood];
        const randomVerse = verseList[Math.floor(Math.random() * verseList.length)];
        
        verseP.textContent = randomVerse;
        resultDiv.classList.remove('hidden');
        resultDiv.style.opacity = 1;
    });
});

playAudioBtn.addEventListener('click', () => {
    clickSound.play(); // تشغيل صوت عند الضغط
    const reciter = reciterSelect.value;
    // استبدل هذه الروابط بروابط صوتية حقيقية
    const audioUrl = reciter === 'ياسر الدوسري' 
        ? 'https://example.com/yasser_audio.mp3' 
        : 'https://example.com/nasser_audio.mp3';
    audio.src = audioUrl;
    audio.play().catch(error => alert('يرجى إضافة رابط صوتي صالح!'));
});

function toggleTheme() {
    clickSound.play(); // تشغيل صوت عند الضغط
    document.body.classList.toggle('dark');
    themeToggleBtn.classList.toggle('fa-sun');
    themeToggleBtn.classList.toggle('fa-moon');
}
