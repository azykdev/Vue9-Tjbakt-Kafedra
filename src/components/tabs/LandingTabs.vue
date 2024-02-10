<template>
  <v-card class="">
    <v-tabs show-arrows next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline"
      center-active fixed-tabs v-model="tab" class=" bg-slate-200 dark:bg-slate-700 dark:text-slate-100">
      <v-tab value="one"><span>Kafedra Tarixi</span></v-tab>
      <v-tab value="two">O'qituvchilar</v-tab>
      <v-tab value="three">Mutaxasisliklar</v-tab>
      <v-tab value="four">Fanlar</v-tab>
      <v-tab value="five">Lavhalar</v-tab>
      <v-tab value="six">Darslik va Maqolalar</v-tab>
      <v-tab value="seven">ILMIY ISHLAR</v-tab>
      <v-tab value="eight">Rejalar</v-tab>

    </v-tabs>

    <v-card-text class=" bg-slate-50 dark:bg-slate-900 dark:text-slate-100  max-h-[80vh] overflow-auto">
      <v-window v-model="tab" class="p-5 md:p-7">
        <v-window-item value="one">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5">Texnalogik jarayonlarni boshqarishning
            axborot-kommunikatsiya tizimlari kafedrasi tarixi</h3>

          Buxoro oziq – ovqat va yengil sanoat texnologiyasi intituti 1977-yilda tashkil etilgan bo’lib, 1979-yildan
          boshlab “Ishlab chiqarish jarayonlari, apparatlari va ularni avtomatlashtirish” kafedrasi tashkil etilgan va
          unga professor A.O.Ortiqov rahbarlik qilgan. Kafedraning nomi 2003-yilda “Texnologik mashinalar, jihozlar va
          ishlab chiqarishni avtomatlashtirish” , 2011-yilda “Zamonaviy texnika va texnologik jarayonlarni
          avtomatlashtirish” nomi bilan faoliyat olib borilgan. 2013-yildan boshlab O’zbekiston Respublikasi
          prezidentining PQ-1954 qaroriga muvofiq “Texnologik jarayonlarni boshqarishning axborot-kommunikatsiya
          tizimlari” kafedrasi tashkil etildi. <br> <br>

          Kafedra 2013-yildan to hoziga qadar 5321700 – “Texnologik jarayonlarni boshqarishning axborot-kommunikatsiya
          tizimlari” ta’lim yo’nalishi bo’yicha bakalavrlarni hamda 5A321701- “Texnologik jarayonlarni boshqarishning
          axborot-kommunikatsiya tizimlari” mutaxassisligi bo’yicha magistrlarni tayyorlab kelmoqda. 2019-yildan boshlab
          ushbu yo’nalishni kechki va sirtqi ta’lim shakllari bo’yicha ham bakalavrlar tayyorlash yo’lga qo’yilgan. <br>
          <br>

          Kafedrada quyidagi yo’nalishlar bo’yicha ilmiy tadqiqot ishlari olib boriladi: 1) Qishloq xo’jalik
          mahsulotlarini qayta ishlashda energiya tejamkor texnologiyalar va jihozlarni yaratish; 2) Ishlab chiqarish va
          iqtisodiyot sohalari ish samaradorligini oshirishga qaratilgan axborot kommunikatsiya tizimlarini yaratish; 3)
          Texnik ta’limda mutaxasis fanlaridan raqamli texnologiyalar asosida ta’lim sifatini ta’minlash metodikasi;
          Kafedrada raqobatbardosh kadrlarni tayyorlash, ishlab chiqarishda mavjud muommolarni bartaraf etishga qaratilgan
          ilmiy tadqiqot ishlarini olib borish hamda fanlardan iqtidorli talabalar ishlashi uchun fan to’garaklari,
          shuningdek zamonaviy labaratoriya xonalari va internet tarmog’iga ulangan kompyuter sinflari tashkil etilgan.
          <br> <br>

          Kafedrada Respublikaning yutuk ishlab chiqarish korxonalari “Buxoro neftni qayta ishlash zavodi”, “Navoiy
          kon-metallurgiya konbinati”, “Navoiyazot ishlab chiqarish birlashmasi”, “Lukoil O’zbekiston” ishlab chiqarish
          kompaniyasi, “Sho’rtangazkimyo” majmuasi, “Muborak gazni qayta ishlash” zavodi, “Navoiy erkin-iqtisodiy zona”,
          “Uztelekom” AJ, “Uz Daewoo Textile” QK, “Ark Eco Tekstile” MCHJ, “Merganteks” korxonalari, “Gala-river” QK,
          “Dehqonobot kaliy zavodi”, “Ximavtomatika” ochiq aksionerlik jamiyati va xorijiy rivojlangan oliy ta’lim
          muassasalari, jumladan Shvetsiya qirollik texnologiya instituti(Shvetsiya), Turin Politexnika
          Universiteti(Italiya), Leeds Universiteti(Аngliya), Lyoven Universiteti(Belgiya), Sentyago de Kompostela
          Universiteti(Ispaniya), Primorska Universitet(Sloveniya), Yuxanes Kepler nomidagi texnologiya
          instituti(Аvstriya) hamda MDH davlatlaridan, Stankin nomidagi Moskva davlat texnologiyalar universiteti
          (Rossiya), Magilov davlat oziq ovqat universiteti (Belarusya), Kostanay davlat universiteti (Qozog’iston),
          Almata xalqaro informatsion texnologiyalar universiteti (Qozog’iston) bilan hamkorlik ishlari yo’lga qo’yilgan.
          Hozirgi kunda kafedrada 3 ta fan doktori va 6 ta fan nomzodlari ilmiy pedagogik faoliyat olib bormoqda.
          Kafedraning ilmiy salohiyati 43% ni tashkil etadi. Hozirgi kunda kafedraga t.f.n., dotsent H.X.Qobilov rahbarlik
          qilmoqda. <br> <br>
        </v-window-item>

        <v-window-item value="two">
          <v-row>
            <v-col cols="12" sm="6" class=" " v-for="item in teachers" :key="item.title">
              <div class="flex items-center border-b-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                style="box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);">
                <img :src="item.image" alt="" class="rounded-full w-20 h-20 object-cover" />
                <div>
                  <h4 class="ms-3 font-semibold">{{ item.fio }}</h4>
                  <p class="ms-3 text-sm text-gray-500 dark:text-gray-400">{{ item.level }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="three">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">BAKALAVRIAT</h3>
          <p class="text-gray-700 dark:text-gray-400">60711900-Texnologik jarayonlarni boshqarishning
            axborot- kommunikatsiya tizimlari</p>

          <br>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">MAGISTRATURA</h3>
          <p class="text-gray-700 dark:text-gray-400">70711901-Texnologik jarayonlarni boshqarishning
            axborot-kommunikatsiya
            tizimlari</p>
        </v-window-item>

        <v-window-item value="four">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">BAKALAVRIAT:</h3>
          <ul class="text-gray-700 dark:text-gray-400 list-disc">
            <li class=" text-gray-700 dark:text-gray-400" v-for="item in bakalavrSciences" :key="item.name">{{
              item.name
            }}</li>
          </ul>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">MAGISTRATURA:</h3>
          <ul class="text-gray-700 dark:text-gray-400 list-disc">
            <li class=" text-gray-700 dark:text-gray-400" v-for="item in magistrSciences" :key="item.name">{{
              item.name
            }}</li>
          </ul>
        </v-window-item>
        <v-window-item value="five">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5">Ilmiy tadqidot ishlaridan foto lavhalar
          </h3>
          <img class="rounded-lg border p-3 md:p-5 mb-3 bg-slate-300" src="@/assets/images/lavhalar/f1.jpg" alt="">
          <img class="rounded-lg border p-3 md:p-5 mb-3 bg-slate-300" src="@/assets/images/lavhalar/f2.jpg" alt="">
          <img class="rounded-lg border p-3 md:p-5 mb-3 bg-slate-300" src="@/assets/images/lavhalar/f6.jpg" alt="">
          <img class="rounded-lg border p-3 md:p-5 mb-3 bg-slate-300" src="@/assets/images/lavhalar/f9.jpg" alt="">
          <img class="rounded-lg border p-3 md:p-5 mb-3 bg-slate-300" src="@/assets/images/lavhalar/f11.jpg" alt="">
        </v-window-item>
        <v-window-item value="six">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 my-4">DARSLIK VA O‘QUV QO‘LLANMALAR</h3>
          <p class="mb-3">1. B.T. Ergashev 5321700-Texnologik jarayonlarni boshqarishning axborot-kommunikatsiya tizimlari
            Ma’lumotlar
            bazasini boshqarish tizimlari </p>
          <p class="mb-3">2.Abidov Kamildjan Zarifovich Ubaydullayeva Shaxnoza Raximjanovna 0.51.06.00-Elektr texnikasi,
            elektr
            mexanikasi va elektrtexnologiyalari Avtomatika asoslari va mikroprotsessor texnikasi </p>
          <p class="mb-3">3.Usmonov Axtam Usmonovich Rasulov SHuhrat Xo’jaqulovich Ibragimov SHohruh Ramazon o’g’li
            5321700- Texnologik
            jarayonlarni boshqarishning axborot kommunikatsiya tizimlari Intellektual nazorat o'lchov asboblari </p>
          <p class="mb-3">4. Abduraxmonov Olim Rustamovich Ibragimov SHohruh Ramazon o’g’li 5321700- Texnologik
            jarayonlarni
            boshqarishning axborot-kommunikatsiya tizimlari Boshqarish sistemalarining elementlari va qurilmalari </p>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 my-4">ANJUMANLARDAGI TЕZIS VA MAQOLALAR</h3>
          <p class="mb-3">1. Ибрагимов Улуғбек Мурадиллоевич Science and Education BO‘LAJAK MUHANDIS-KADRLARNI MASOFAVIY
            O‘QITISH
            NATIJALARINI “SMART” TEXNOLOGIYASI YORDAMIDA BAHOLASH ISSN 2181-0842 VOLUME 2, ISSUE 2 FEBRUARY 2021, 370-376
            б </p>
          <p class="mb-3">2. Қобилов Ҳасан Халилович SCIENTIFIC-METHODICAL JOURNAL OF “SCIENTIFIC PROGRESS”, ISSN:
            2181-1601 ОЛИЙ
            ТАЪЛИМДА ТАЛАБАЛАРНИНГ ШАХСИЙ-КРЕАТИВ КОМПЕТЕНЦИЯСИНИ РИВОЖЛАНТИРИШ ОМИЛЛАРИ VOLUME 2 ǀ ISSUE 5 ǀ 2021 ISSN:
            2181-1601 cентябрь 2021, 327-329 б </p>
          <p class="mb-3">3. Абдурахмонов Олим Рустамович, Қобилов Ҳасан Халилович З. С. Салимов, Ш. М. Сайдахмедов
            Технология нефти и
            газа. Москва, 2012. – № 5. –С. 8-11. Интенсификация процесса перегонки углеводородных смесей с применением
            альтернативных отпаривающих агентов </p>
          <p class="mb-3">4. Кобилов Хасан Халилович, Д.Ф. Гойибов, А.П. Назаров Молодой учёный Научный журнал выходит два
            раза в месяц
            01.04.2015 Низкотемпературная сепарация углеводородов из природного и нефтяного попутных газов </p>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 my-4">SCOPUS VA WEB OF SCIENCE BAZASIGA KIRGAN
            ILMIY ISHLAR</h3>
          <p class="mb-3">1. Кобилов Х. Х., Абдурахмонов О. Р., Шарипова Н. Р., Адизова М. Р. Development of the
            installation device
            pressing the volume of briquetted material and computer modeling of the technological process. V International
            conference AGRITECH-2021: Agribusiness, environmental engineering and biotechnologies. Krasnoyarsk-Volgograd,
            Russia/T. Bukhara, Uzbekistan, June 16-19 2021. P.1-7 (3) Scopus. </p>
          <p class="mb-3">2. Артиқов А. A., Джураев Х. Ф., Нарзиев М. С., Қобилов Ҳ. Х., Увайзов С. К. Брикет материалини
            сиқиш
            жараёнини преслаш ускунасида ҳисоблаш дастури Гувоҳнома № DGU 12459 </p>
          <p class="mb-3">3. Артиков А. А., Нарзиев М. С., Қобилов Х. Х., Tо the question of modeling the process of
            compacting a
            briquetted material in a pressing plant SJIF Impakt Faktor: 7.492 Academia an International Multidisciplinary
            Research Journal DOI: 10.5958/2249-7137.2021.00437.7 ttps://eprajournals.com/article.php </p>
          <p class="mb-3">4. Абдурахмонов О. Р., Қобилов Х. Х., Абидов К. З. Creation of new technology of coal briquette
            manufacturing SJIF Impakt Faktor: 7.032 EPRA International Journal of Multidisciplinary research (IJMR)
            01.11.2020. 390-393 б https://eprajournals.com/article.php </p>



        </v-window-item>
        <v-window-item value="seven">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">KAFEDRADA OLIB BORILAYOTGAN ILMIY ISHLAR
          </h3>
          <p class="mb-3">1. И-ОТ-2017-5-5 “Создание технологии производства угольных брикетов с высокой энергетической
            эффективностью
            и экологическими показателями” раҳбар: проф. О.Р.Абдурахмонов, ажратилган сумма – 210 млн сўм; </p>
          <p class="mb-3">2. А-9-1 “Разработка ресурсосберегающей экологически чистой технологии производства ингредиентов
            из
            растительного сырья с применением сжижененного углекислого газа” раҳбар: доц. К.Х.Гафуров ажратилган сумма –
            95 млн сўм; </p>
          <p class="mb-3">3. А-5-7 “Разработка и создание информационно коммуникационной системы управления процессом
            производства
            экстрактов из растительного сырья, работающего под высоким давлением с сжиженным газом” раҳбар: доц.
            А.У.Усмонов ажратилган сумма: 120 млн сўм. </p>
          <p class="mb-3">4. 610170-EPP-1-2019-1-ES-EPPKA2-CBHE-JP ELBA ELBA: Markaziy Osiyoda “BigData Intelligent
            Analysis” bo'yicha o'quv va ilmiy markazlarni tashkil qilish va kurslarni ishlab chiqish/ Establishment of
            training and research centres and Courses development on Intelligent Big Data Analysis in CA” раҳбар: PhD.
            У.М.Ибрагимов ажратилган сумма: 78000 EVRO </p>

        </v-window-item>
        <v-window-item value="eight">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Kafedraning istiqbolli rejalari</h3>

          <ul class="list-disc list-inside" q>
            <li class=" text-gray-700 dark:text-gray-400 mb-3">Kafedra professor o’qituvchilarining ilmiy salohiyatini
              2024-yil oxiriga qadar 70 foizga yetkazish </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3">Har yili ishlab chiqarish korxonalarida mavjud muammolarni
              hal qilishga qaratilgan, kamida 200 million
              so’mlik xo’jalik shartnomalarini amalga oshirish </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3"> Nufuzli xorijiy OTMlar bilan hamkorlikda davlat grandlari
              bajarishni yo’lga qo’yish </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3"> Professor-o’qituvchilar va iqtidorli talabalarni start-up
              loyihalarida ishtirok etishlarini ta’minlash
            </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3">Mutaxasislik fanlaridan bugungi kun talablari asosida
              darslik va o’quv qo’llanmalar yaratish </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3">Ilmiy tadqiqot ishlari natijalarini tijoratlashtirishni
              yo’lga qo’yish </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3">Kafedrada to’garaklar faoliyatiga iqtidorli talabalarni
              jalb qilish hisobiga yaxshilashga </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3">Mutaxassislik fanlaridan amaliy va tajriba
              mashg’ulotalarini ishlab chiqarish korxonalarida olib
              borilishini yo’lga qo’yish </li>
            <li class=" text-gray-700 dark:text-gray-400 mb-3">Yosh o’qituvchilar va iqtidorli talabalarni olimpiadalarda
              va turli ko’rik tanlovlarda ishtirokini
              ta’minlash </li>
          </ul>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
  computed: {
    teachers() {
      return this.$store.state.teachers.teachers
    },
    bakalavrSciences() {
      return this.$store.state.sciences.sciences.filter(item => item.level === 'Bakalavr')
    },
    magistrSciences() {
      return this.$store.state.sciences.sciences.filter(item => item.level === 'Magistr')
    }

  }
}
</script>

<style scoped></style>