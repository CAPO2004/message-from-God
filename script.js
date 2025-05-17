const verses = {
    "السعادة": [
        "فَبِمَا رَحْمَةٍ مِنَ اللَّهِ لِنتَ لَهُمْ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانْفَضُّوا مِنْ حَوْلِكَ فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِي الْأَمْرِ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ (آل عمران: 159)",
        "وَأَنَّهُ هُوَ أَضْحَكَ وَأَبْكَىٰ (النجم: 43)",
        "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ فَسَأَكْتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤْتُونَ الزَّكَاةَ وَالَّذِينَ هُمْ بِآيَاتِنَا يُؤْمِنُونَ (الأعراف: 156)",
        "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ (يونس: 58)",
        "وَلَقَدْ آتَيْنَاكَ سَبْعًا مِّنَ الْمَثَانِي وَالْقُرْآنَ الْعَظِيمَ (الحجر: 87)",
        "مَا أَصَابَ مِن مُّصِيبَةٍ إِلَّا بِإِذْنِ اللَّهِ ۗ وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ ۚ وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ (التغابن: 11)",
        "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً ۖ وَلَنَجْزِيَنَّهُمْ أَجْرَهُم بِأَحْسَنِ مَا كَانُوا يَعْمَلُونَ (النحل: 97)",
        "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَنُدْخِلُهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ لَّهُمْ فِيهَا أَزْوَاجٌ مُّطَهَّرَةٌ ۖ وَنُدْخِلُهُمْ ظِلًّا ظَلِيلًا (النساء: 57)",
        "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُبَوِّئَنَّهُم مِّنَ الْجَنَّةِ غُرَفًا تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا ۚ نِعْمَ أَجْرُ الْعَامِلِينَ (العنكبوت: 58)",
        "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ (الانفطار: 13)"
    ],
    "القلق": [
        "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ (الرعد: 28)",
        "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (الشرح: 5)",
        "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا (الطلاق: 2)",
        "وَتَوَكَّلْ عَلَى الْعَزِيزِ الرَّحِيمِ (الشعراء: 217)",
        "قُلْ لَن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ (التوبة: 51)",
        "قَالَ رَبِّ اشْرَحْ لِي صَدْرِي (طه: 25)",
        "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ (هود: 88)",
        "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ (الفرقان: 58)"
    ],
    "الوحدة": [
        "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ (الحديد: 4)",
        "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (البقرة: 153)",
        "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا (التوبة: 40)",
        "وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا (الطور: 48)",
        "أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ (الزمر: 36)",
        "وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ ۚ إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَّحِيمٌ (البقرة: 143)",
        "وَمَا تَفْعَلُوا مِنْ خَيْرٍ فَإِنَّ اللَّهَ بِهِ عَلِيمٌ (البقرة: 215)",
        "وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللَّهُ ۗ وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ ۚ وَاتَّقُونِ يَا أُولِي الْأَلْبَابِ (البقرة: 197)",
        "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُم مُّحْسِنُونَ (النحل: 128)"
    ],
    "الشكر": [
        "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ (إبراهيم: 7)",
        "فَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا وَاشْكُرُوا نِعْمَتَ اللَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ (النحل: 114)",
        "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ (المائدة: 11)",
        "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ (البقرة: 152)",
        "وَسَنَجْزِي الشَّاكِرِينَ (آل عمران: 145)",
        "يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ وَاشْكُرُوا لِلَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ (البقرة: 172)",
        "وَلَقَدْ آتَيْنَا لُقْمَانَ الْحِكْمَةَ أَنِ اشْكُرْ لِلَّهِ ۚ وَمَن يَشْكُرْ فَإِنَّمَا يَشْكُرْ لِنَفْسِهِ ۖ وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ حَمِيدٌ (لقمان: 12)",
        "وَاللَّهُ فَضَّلَ بَعْضَكُمْ عَلَىٰ بَعْضٍ فِي الرِّزْقِ ۚ فَمَا الَّذِينَ فُضِّلُوا بِرَادِّي رِزْقِهِمْ عَلَىٰ مَا مَلَكَتْ أَيْمَانُهُمْ فَهُمْ فِيهِ سَوَاءٌ ۚ أَفَبِنِعْمَةِ اللَّهِ يَجْحَدُونَ (النحل: 71)",
        "الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ (آل عمران: 134)",
        "أَلَمْ تَرَ إِلَى الَّذِينَ خَرَجُوا مِن دِيَارِهِمْ وَهُمْ أُلُوفٌ حَذَرَ الْمَوْتِ فَقَالَ لَهُمُ اللَّهُ مُوتُوا ثُمَّ أَحْيَاهُمْ ۚ إِنَّ اللَّهَ لَذُو فَضْلٍ عَلَى النَّاسِ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَشْكُرُونَ (البقرة: 243)"
    ],
    "الحزن": [
        "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا (التوبة: 40)",
        "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ (آل عمران: 139)",
        "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ (يوسف: 87)",
        "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ فَسَأَكْتُبُهَا لِلَّذِينَ يَتَّقُونَ وَيُؤْتُونَ الزَّكَاةَ وَالَّذِينَ هُمْ بِآيَاتِنَا يُؤْمِنُونَ (الأعراف: 156)",
        "وَبَشِّرِ الصَّابِرِينَ (البقرة: 155)",
        "قَالَ إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ (يوسف: 86)",
        "فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ (يوسف: 18)",
        "إِنَّ مَعَ الْعُسْرِ يُسْرًا (الشرح: 6)"
    ],
    "الغضب": [
        "الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ (آل عمران: 134)",
        "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ (الشورى: 37)",
        "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ (الأعراف: 199)",
        "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ (فصلت: 34)",
        "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا ۖ فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ ۚ إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ (الشورى: 40)",
        "وَقُولُوا لِلنَّاسِ حُسْنًا (البقرة: 83)",
        "وَقُل لِعِبَادِي يَقُولُوا الَّتِي هِيَ أَحْسَنُ ۚ إِنَّ الشَّيْطَانَ يَنزَغُ بَيْنَهُمْ ۚ إِنَّ الشَّيْطَانَ كَانَ لِلْإِنسَانِ عَدُوًّا مُّبِينًا (الإسراء: 53)"
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
        "الشورى: 40": "./audio/ash_shura_40.mp3",
        "التغابن: 11": "./audio/at_taghabun_11.mp3",
        "النحل: 97": "./audio/an_nahl_97.mp3",
        "النساء: 57": "./audio/an_nisa_57.mp3",
        "العنكبوت: 58": "./audio/al_ankabut_58.mp3",
        "الانفطار: 13": "./audio/al_infitar_13.mp3",
        "طه: 25": "./audio/taha_25.mp3",
        "هود: 88": "./audio/hud_88.mp3",
        "الفرقان: 58": "./audio/al_furqan_58.mp3",
        "البقرة: 143": "./audio/al_baqarah_143.mp3",
        "البقرة: 215": "./audio/al_baqarah_215.mp3",
        "البقرة: 197": "./audio/al_baqarah_197.mp3",
        "النحل: 128": "./audio/an_nahl_128.mp3",
        "لقمان: 12": "./audio/luqman_12.mp3",
        "النحل: 71": "./audio/an_nahl_71.mp3",
        "البقرة: 243": "./audio/al_baqarah_243.mp3",
        "يوسف: 86": "./audio/yusuf_86.mp3",
        "يوسف: 18": "./audio/yusuf_18.mp3",
        "الشرح: 6": "./audio/ash_sharh_6.mp3",
        "البقرة: 83": "./audio/al_baqarah_83.mp3",
        "الإسراء: 53": "./audio/al_isra_53.mp3"
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
        "الشورى: 40": "./audio/ash_shura_40_qatami.mp3",
        "التغابن: 11": "./audio/at_taghabun_11_qatami.mp3",
        "النحل: 97": "./audio/an_nahl_97_qatami.mp3",
        "النساء: 57": "./audio/an_nisa_57_qatami.mp3",
        "العنكبوت: 58": "./audio/al_ankabut_58_qatami.mp3",
        "الانفطار: 13": "./audio/al_infitar_13_qatami.mp3",
        "طه: 25": "./audio/taha_25_qatami.mp3",
        "هود: 88": "./audio/hud_88_qatami.mp3",
        "الفرقان: 58": "./audio/al_furqan_58_qatami.mp3",
        "البقرة: 143": "./audio/al_baqarah_143_qatami.mp3",
        "البقرة: 215": "./audio/al_baqarah_215_qatami.mp3",
        "البقرة: 197": "./audio/al_baqarah_197_qatami.mp3",
        "النحل: 128": "./audio/an_nahl_128_qatami.mp3",
        "لقمان: 12": "./audio/luqman_12_qatami.mp3",
        "النحل: 71": "./audio/an_nahl_71_qatami.mp3",
        "البقرة: 243": "./audio/al_baqarah_243_qatami.mp3",
        "يوسف: 86": "./audio/yusuf_86_qatami.mp3",
        "يوسف: 18": "./audio/yusuf_18_qatami.mp3",
        "الشرح: 6": "./audio/ash_sharh_6_qatami.mp3",
        "البقرة: 83": "./audio/al_baqarah_83_qatami.mp3",
        "الإسراء: 53": "./audio/al_isra_53_qatami.mp3"
    }
};

// كائن جديد لإضافة لينكات الصوت يدويًا
const customAudioLinks = {
    "ياسر الدوسري": {
        "آل عمران: 159": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/003159.mp3",
        "النجم: 43": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/053043.mp3",
        "الأعراف: 156": "",
        "يونس: 58": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/010058.mp3",
        "الحجر: 87": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/015087.mp3",
        "الرعد: 28": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/013028.mp3",
        "الشرح: 5": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/094005.mp3",
        "الطلاق: 2": "",
        "الشعراء: 217": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/026217.mp3",
        "التوبة: 51": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/009051.mp3",
        "الحديد: 4": "",
        "البقرة: 153": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002153.mp3",
        "التوبة: 40": "",
        "الطور: 48": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/052048.mp3",
        "الزمر: 36": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/039036.mp3",
        "إبراهيم: 7": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/014007.mp3",
        "النحل: 114": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/016114.mp3",
        "المائدة: 11": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/005011.mp3",
        "البقرة: 152": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002152.mp3",
        "آل عمران: 145": "",
        "آل عمران: 139": "",
        "يوسف: 87": "",
        "البقرة: 155": "",
        "آل عمران: 134": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/003134.mp3",
        "الشورى: 37": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/042037.mp3",
        "الأعراف: 199": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/007199.mp3",
        "فصلت: 34": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/041034.mp3",
        "الشورى: 40": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/042040.mp3",
        "التغابن: 11": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/064011.mp3",
        "النحل: 97": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/016097.mp3",
        "النساء: 57": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/004057.mp3",
        "العنكبوت: 58": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/029058.mp3",
        "الانفطار: 13": "",
        "طه: 25": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/020025.mp3",
        "هود: 88": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/011088.mp3",
        "الفرقان: 58": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/025058.mp3",
        "البقرة: 143": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002143.mp3",
        "البقرة: 215": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002215.mp3",
        "البقرة: 197": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002197.mp3",
        "النحل: 128": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/016128.mp3",
        "لقمان: 12": "",
        "النحل: 71": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/016071.mp3",
        "البقرة: 243": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002243.mp3",
        "يوسف: 86": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/012086.mp3",
        "يوسف: 18": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/012018.mp3",
        "الشرح: 6": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/094006.mp3",
        "البقرة: 83": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002083.mp3",
        "الإسراء: 53": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/017053.mp3"
        "البقرة: 172": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/002172.mp3",
    },
    "ناصر القطامي": {
        "آل عمران: 159": "https://everyayah.com/data/Nasser_Alqatami_128kbps/003159.mp3",
        "النجم: 43": "https://everyayah.com/data/Nasser_Alqatami_128kbps/053043.mp3",
        "الأعراف: 156": "",
        "يونس: 58": "https://everyayah.com/data/Nasser_Alqatami_128kbps/010058.mp3",
        "الحجر: 87": "https://everyayah.com/data/Nasser_Alqatami_128kbps/015087.mp3",
        "الرعد: 28": "https://everyayah.com/data/Nasser_Alqatami_128kbps/013028.mp3",
        "الشرح: 5": "https://everyayah.com/data/Nasser_Alqatami_128kbps/094005.mp3",
        "الطلاق: 2": "",
        "الشعراء: 217": "https://everyayah.com/data/Nasser_Alqatami_128kbps/026217.mp3",
        "التوبة: 51": "https://everyayah.com/data/Nasser_Alqatami_128kbps/009051.mp3",
        "الحديد: 4": "",
        "البقرة: 153": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002153.mp3",
        "التوبة: 40": "",
        "الطور: 48": "https://everyayah.com/data/Nasser_Alqatami_128kbps/052048.mp3",
        "الزمر: 36": "https://everyayah.com/data/Nasser_Alqatami_128kbps/039036.mp3",
        "إبراهيم: 7": "https://everyayah.com/data/Nasser_Alqatami_128kbps/014007.mp3",
        "النحل: 114": "https://everyayah.com/data/Nasser_Alqatami_128kbps/016114.mp3",
        "المائدة: 11": "https://everyayah.com/data/Nasser_Alqatami_128kbps/005011.mp3",
        "البقرة: 152": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002152.mp3",
        "آل عمران: 145": "",
        "آل عمران: 139": "",
        "يوسف: 87": "",
        "البقرة: 155": "",
        "آل عمران: 134": "https://everyayah.com/data/Nasser_Alqatami_128kbps/003134.mp3",
        "الشورى: 37": "https://everyayah.com/data/Nasser_Alqatami_128kbps/042037.mp3",
        "الأعراف: 199": "https://everyayah.com/data/Nasser_Alqatami_128kbps/007199.mp3",
        "فصلت: 34": "https://everyayah.com/data/Nasser_Alqatami_128kbps/041034.mp3",
        "الشورى: 40": "https://everyayah.com/data/Nasser_Alqatami_128kbps/042040.mp3",
        "التغابن: 11": "https://everyayah.com/data/Nasser_Alqatami_128kbps/064011.mp3",
        "النحل: 97": "https://everyayah.com/data/Nasser_Alqatami_128kbps/016097.mp3",
        "النساء: 57": "https://everyayah.com/data/Nasser_Alqatami_128kbps/004057.mp3",
        "العنكبوت: 58": "https://everyayah.com/data/Nasser_Alqatami_128kbps/029058.mp3",
        "الانفطار: 13": "https://everyayah.com/data/Nasser_Alqatami_128kbps/082013.mp3",
        "طه: 25": "https://everyayah.com/data/Nasser_Alqatami_128kbps/020025.mp3",
        "هود: 88": "https://everyayah.com/data/Nasser_Alqatami_128kbps/011088.mp3",
        "الفرقان: 58": "https://everyayah.com/data/Nasser_Alqatami_128kbps/025058.mp3",
        "البقرة: 143": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002143.mp3",
        "البقرة: 215": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002215.mp3",
        "البقرة: 197": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002197.mp3",
        "النحل: 128": "https://everyayah.com/data/Nasser_Alqatami_128kbps/016128.mp3",
        "لقمان: 12": "https://everyayah.com/data/Nasser_Alqatami_128kbps/031012.mp3",
        "النحل: 71": "https://everyayah.com/data/Nasser_Alqatami_128kbps/016071.mp3",
        "البقرة: 243": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002243.mp3",
        "يوسف: 86": "https://everyayah.com/data/Nasser_Alqatami_128kbps/012086.mp3",
        "يوسف: 18": "https://everyayah.com/data/Nasser_Alqatami_128kbps/012018.mp3",
        "الشرح: 6": "https://everyayah.com/data/Nasser_Alqatami_128kbps/094006.mp3",
        "البقرة: 83": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002083.mp3",
        "الإسراء: 53": "https://everyayah.com/data/Nasser_Alqatami_128kbps/017053.mp3"
        "البقرة: 172": "https://everyayah.com/data/Nasser_Alqatami_128kbps/002172.mp3",
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
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// دالة لتشغيل الصوت
function playAudio(reciter, verseKey) {
    const customUrl = customAudioLinks[reciter][verseKey];
    const audioUrl = customUrl && customUrl !== "" ? customUrl : audioUrls[reciter][verseKey];
    if (audioUrl) {
        // إعادة تعيين الشريط والزمن قبل التشغيل
        progressBar.style.width = "0";
        currentTimeSpan.textContent = "0:00";
        audio.src = audioUrl;
        audio.load(); // إعادة تحميل الملف لضمان البدء من الصفر
        audio.muted = isMuted;
        audio.currentTime = 0; // التأكد من بدء الصوت من الصفر
        audio.play().then(() => {
            durationSpan.textContent = formatTime(audio.duration || 0);
            updateProgress();
        }).catch(() => {
            // لا رسائل خطأ
        });
    }
}

// دالة لتحديث شريط التقدم والزمن
function updateProgress() {
    if (audio.duration && !audio.paused && !isDragging) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`; // تحديث الشريط بنسبة التقدم
        progressThumb.style.left = `calc(${progress}% - 8px)`; // تحريك الدائرة مع الشريط
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
    progressThumb.style.left = `calc(${progressPercent * 100}% - 8px)`; // تحريك الدائرة بدقة
    currentTimeSpan.textContent = formatTime(audio.currentTime);
}

// جعل الخط الزمني تفاعليًا (النقر)
audioProgress.addEventListener('click', (e) => {
    if (audio.duration) {
        updateAudioPosition(e.clientX);
        if (audio.paused) audio.play(); // استئناف التشغيل إذا كان متوقفًا
        updateProgress();
    }
});

// جعل الدائرة قابلة للسحب
progressThumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    audio.pause(); // إيقاف الصوت مؤقتًا أثناء السحب
    e.preventDefault(); // منع السلوك الافتراضي
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
            audio.play(); // استئناف التشغيل بعد السحب
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
    progressThumb.style.left = "-8px";
    currentTimeSpan.textContent = "0:00";

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
    audio.pause(); // إيقاف الصوت الحالي
    const reciter = reciterSelect.value;
    const verseKey = currentVerse.match(/\(.*?\)/)[0].replace(/[()]/g, "");
    playAudio(reciter, verseKey);
});

// إيقاف الصوت
stopAudioBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    progressBar.style.width = "0";
    progressThumb.style.left = "-8px";
    currentTimeSpan.textContent = "0:00";
});

// إعادة الصوت إلى البداية
rewindAudioBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    progressBar.style.width = "0";
    progressThumb.style.left = "-8px";
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
        // إزالة أي قائمة سابقة
        const existingMenu = document.getElementById('social-menu');
        if (existingMenu) existingMenu.remove();

        // إظهار قائمة منصات التواصل
        const socialOptions = `
            <div id="social-menu">
                <a href="https://wa.me/?text=${encodeURIComponent(shareText)}" target="_blank" style="color: #25D366;"><i class="fab fa-whatsapp"></i> واتساب</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=[https://message-from-god.netlify.app/]&quote=${encodeURIComponent(shareText)}" target="_blank" style="color: #3b5998;"><i class="fab fa-facebook"></i> فيسبوك</a>
                <a href="https://www.instagram.com/?url=[https://message-from-god.netlify.app/]&text=${encodeURIComponent(shareText)}" target="_blank" style="color: #E1306C;"><i class="fab fa-instagram"></i> إنستغرام</a>
            </div>
        `;
        resultDiv.insertAdjacentHTML('beforeend', socialOptions);
        setTimeout(() => {
            const menu = document.getElementById('social-menu');
            if (menu) menu.remove();
        }, 5000); // إزالة القائمة بعد 5 ثواني
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
