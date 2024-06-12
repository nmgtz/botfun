function kiswahiliWords(matchedswahiliWord) {
    let botResponse = "";
    if (matchedswahiliWord === "kiswahili") {
                                botResponse = `Kiswahili ni lugha ya Kiafrika inayotumiwa sana katika nchi za Afrika Mashariki na Kati, pamoja na sehemu za Kusini mwa Afrika. Ni moja ya lugha rasmi katika nchi kadhaa kama vile Tanzania, Kenya, Uganda, na Jamhuri ya Kidemokrasia ya Kongo. Kiswahili kinachukuliwa kama lugha ya mawasiliano na biashara katika eneo hilo na pia kimekuwa kikienea kimataifa kama lugha ya pili au ya tatu kwa idadi kubwa ya watu duniani.`;
                            } else if (matchedswahiliWord === "habari") {
                                botResponse = "Nzuri, wewe je?";
                            } else if (matchedswahiliWord === "karibu") {
                                botResponse = "Asante!";
                            } else if (matchedswahiliWord === "asante") {
                                botResponse = "Karibu!";
                            } else if (matchedswahiliWord === "samahani") {
                                botResponse = "Hakuna shida.";
                            } else if (matchedswahiliWord === "tafadhali") {
                                botResponse = "Unahitaji nini?";
                            } else if (matchedswahiliWord === "ndiyo") {
                                botResponse = "Sawa.";
                            } else if (matchedswahiliWord === "hapana") {
                                botResponse = "Pole.";
                            } else if (matchedswahiliWord === "pole") {
                                botResponse = "Asante, pole pia.";
                            } else if (matchedswahiliWord === "rafiki") {
                                botResponse = "Rafiki ni mtu wa karibu na mwenye uhusiano mzuri na wewe. Mfano: 'Yule ni rafiki yangu wa karibu.'";
                            } else if (matchedswahiliWord === "chakula") {
                                botResponse = "Chakula ni kitu chochote kinacholiwa ili kupata nguvu na virutubisho. Mfano: 'Leo nimekula chakula kizuri.'";
                            } else if (matchedswahiliWord === "maji") {
                                botResponse = "Maji ni kimiminika kisicho na rangi, harufu wala ladha kinachopatikana katika mito, maziwa, na bahari. Mfano: 'Nahitaji kunywa maji baada ya kazi ngumu.'";
                            } else if (matchedswahiliWord === "ndizi") {
                                botResponse = "Ndizi ni tunda lenye umbo la duara na rangi ya manjano likiwa bivu. Mfano: 'Ndizi ni tunda lenye virutubisho vingi.'";
                            } else if (matchedswahiliWord === "mtoto") {
                                botResponse = "Mtoto ni mwanadamu mwenye umri mdogo. Mfano: 'Mtoto anahitaji upendo na malezi bora.'";
                            } else if (matchedswahiliWord === "mama") {
                                botResponse = "Mama ni mwanamke aliyekuzaa au anayekulea. Mfano: 'Mama yangu ni mchapakazi hodari.'";
                            } else if (matchedswahiliWord === "baba") {
                                botResponse = "Baba ni mwanaume aliyekuzaa au anayekulea. Mfano: 'Baba yangu anafanya kazi katika shamba.'";
                            } else if (matchedswahiliWord === "nina") {
                                botResponse = "Nina ni kitenzi kinachoashiria kumiliki kitu. Mfano: 'Nina vitabu vitano.'";
                            } else if (matchedswahiliWord === "sijui") {
                                botResponse = "Sijui ni kitenzi kinachoashiria kutokujua jambo fulani. Mfano: 'Sijui majibu ya swali hilo.'";
                            } else if (matchedswahiliWord === "nasema") {
                                botResponse = "Nasema ni kitenzi kinachoashiria kutoa maoni au kuelezea jambo. Mfano: 'Nasema ukweli kuhusu tukio hilo.'";
                            } else if (matchedswahiliWord === "ninapenda") {
                                botResponse = "Ninapenda ni kitenzi kinachoashiria hisia ya upendo au kupendelea kitu. Mfano: 'Ninapenda kusoma vitabu vya hadithi.'";
                            } else if (matchedswahiliWord === "kutoka") {
                                botResponse = "Kutoka ni kitenzi kinachoashiria asili au mahali mtu au kitu kinapotoka. Mfano: 'Ninatoka nyumbani saa mbili asubuhi.'";
                            } else if (matchedswahiliWord === "safari") {
                                botResponse = "Safari ni tendo la kusafiri kutoka sehemu moja kwenda nyingine. Mfano: 'Safari yetu ya kwenda kijijini ilikuwa nzuri.'";
                            } else if (matchedswahiliWord === "mchezo") {
                                botResponse = "Mchezo ni shughuli yoyote ya kuburudisha au ya kushindana, kama vile mpira au michezo mingine. Mfano: 'Watoto wanapenda kucheza michezo mbalimbali.'";
                            } else if (matchedswahiliWord === "tutaonana") {
                                botResponse = "Tutaonana inamaanisha 'see you'.";
                            } else if (matchedswahiliWord === "nzuri") {
                                botResponse = "Nzuri ni neno la kusifia au kuelezea hali nzuri ya kitu au mtu. Mfano: 'Hali ya hewa leo ni nzuri.'";
                            } else if (matchedswahiliWord === "kesho") {
                                botResponse = "Kesho ni siku inayofuata baada ya leo. Mfano: 'Kesho nitakwenda sokoni.'";
                            } else if (matchedswahiliWord === "leo") {
                                botResponse = "Leo ni siku ya sasa. Mfano: 'Leo ni siku ya furaha.'";
                            } else if (matchedswahiliWord === "jana") {
                                botResponse = "Jana ni siku iliyopita kabla ya leo. Mfano: 'Jana tulitembelea marafiki.'";
                            } else if (matchedswahiliWord === "ndugu") {
                                botResponse = "Ndugu ni mtu wa familia yako au wa ukoo wako. Mfano: 'Ndugu zangu wote wanaishi mjini.'";
                            } else if (matchedswahiliWord === "daktari") {
                                botResponse = "Daktari ni mtaalamu wa afya anayetoa matibabu kwa wagonjwa. Mfano: 'Nilimtembelea daktari kwa ajili ya uchunguzi wa afya.'";
                            } else if (matchedswahiliWord === "shule") {
                                botResponse = "Shule ni taasisi inayotoa elimu kwa wanafunzi. Mfano: 'Shule yetu ina walimu bora.'";
                            } else if (matchedswahiliWord === "nyumbani") {
                                botResponse = "Nyumbani ni mahali mtu anaishi, kama nyumba au makazi. Mfano: 'Nitarudi nyumbani baada ya kazi.'";
                            } else if (matchedswahiliWord === "sawa") {
                                botResponse = "Sawa inamaanisha 'okay'.";
                            } else if (matchedswahiliWord === "kwaheri") {
                                botResponse = "Kwaheri inamaanisha 'goodbye'.";
                            } else if (matchedswahiliWord === "mwalimu") {
                                botResponse = "Mwalimu ni mtu anayefundisha wanafunzi katika shule au taasisi ya elimu. Mfano: 'Mwalimu wetu anafundisha masomo ya sayansi.'";
                            } else if (matchedswahiliWord === "kazi") {
                                botResponse = "Kazi ni shughuli inayofanywa na mtu ili kupata kipato au kutimiza majukumu fulani. Mfano: 'Nina kazi ya kuandika ripoti.'";
                            } else if (matchedswahiliWord === "mji") {
                                botResponse = "Mji ni eneo lenye watu wengi na majengo mengi, kama vile jiji. Mfano: 'Mji wetu una mandhari nzuri.'";
                            } else if (matchedswahiliWord === "barabara") {
                                botResponse = "Barabara ni njia pana inayotumika kwa magari na watembea kwa miguu. Mfano: 'Barabara kuu ya kwenda mjini imejengwa vizuri.'";
                            } else if (matchedswahiliWord === "gari") {
                                botResponse = "Gari ni chombo kinachotumika kwa usafiri wa barabarani. Mfano: 'Gari langu linahitaji matengenezo.'";
                            } else if (matchedswahiliWord === "moto") {
                                botResponse = "Moto ni mwako unaotokea kutokana na uchomaji wa vitu mbalimbali. Mfano: 'Moto umeteketeza sehemu kubwa ya msitu.'";
                            } else if (matchedswahiliWord === "nguo") {
                                botResponse = "Nguo ni vazi linalovaliwa ili kufunika mwili. Mfano: 'Nimenunua nguo mpya kwa ajili ya sherehe.'";
                            } else if (matchedswahiliWord === "pesa") {
                                botResponse = "Pesa ni njia ya kubadilishana thamani kwa bidhaa na huduma. Mfano: 'Nina pesa za kutosha kununua bidhaa zote.'";
                            } else if (matchedswahiliWord === "dukani") {
                                botResponse = "Dukani ni mahali pa kuuza bidhaa na huduma. Mfano: 'Nimeenda dukani kununua mahitaji ya nyumbani.'";
                            } else if (matchedswahiliWord === "kijiji") {
                                botResponse = "Kijiji ni eneo dogo lenye wakazi wachache, kawaida vijijini. Mfano: 'Wakazi wa kijiji chetu ni wakarimu.'";
                            } else if (matchedswahiliWord === "mchana") {
                                botResponse = "Mchana ni kipindi cha kati ya asubuhi na jioni. Mfano: 'Tutakutana mchana kwa chakula cha mchana.'";
                            } else if (matchedswahiliWord === "usiku") {
                                botResponse = "Usiku ni kipindi cha baada ya jioni hadi alfajiri. Mfano: 'Usiku ni wakati wa kupumzika.'";
                            } else if (matchedswahiliWord === "asubuhi") {
                                botResponse = "Asubuhi ni kipindi cha kwanza cha siku, kuanzia mapambazuko hadi saa sita mchana. Mfano: 'Ninaamka mapema asubuhi kila siku.'";
                            } else if (matchedswahiliWord === "jioni") {
                                botResponse = "Jioni ni kipindi cha kati ya saa kumi na mbili jioni hadi usiku. Mfano: 'Jioni ni wakati mzuri wa kutembea nje.'";
                            } else if (matchedswahiliWord === "swahili") {
                                botResponse = `Inaonekana kama unataka kufahamu kuhusiana na neno "Kiswahili", kama ndivyo ... Kiswahili ni lugha ya Kiafrika inayotumiwa sana katika nchi za Afrika Mashariki na Kati, pamoja na sehemu za Kusini mwa Afrika. Ni moja ya lugha rasmi katika nchi kadhaa kama vile Tanzania, Kenya, Uganda, na Jamhuri ya Kidemokrasia ya Kongo. Kiswahili kinachukuliwa kama lugha ya mawasiliano na biashara katika eneo hilo na pia kimekuwa kikienea kimataifa kama lugha ya pili au ya tatu kwa idadi kubwa ya watu duniani.`;
                            } else if (matchedswahiliWord === "maneno") {
                                botResponse = `Maneno ni sehemu ndogo ya lugha ambayo ina maana na inaweza kutumika kujenga sentensi na kueleza mawazo. Kuna aina nyingi za maneno katika lugha, na kila aina ina majukumu yake katika ujenzi wa sentensi na maana ya mawasiliano. Hapa kuna baadhi ya aina za maneno:

[ "Nomino:" ] - Maneno yanayotaja vitu, watu, mahali au dhana, kama vile "kitabu", "mti", "msichana", na "furaha".
[ "Vitenzi:" ] - Maneno yanayoelezea vitendo, hali, au mchakato, kama vile "kula", "kwenda", "kucheza", na "kuimba".
[ "Vivumishi:" ] - Maneno yanayotumika kuelezea sifa au hali ya nomino, kama vile "nzuri", "kubwa", "nyekundu", na "mzuri".
[ "Vielezi:" ] - Maneno yanayotumika kuelezea jinsi, wakati, mahali au kiwango cha vitendo au vivumishi, kama vile "haraka", "vizuri", "hapa", na "sana".
[ "Vishazi:" ] - Maneno yanayotumika badala ya nomino, kama vile "yeye", "wao", "sisi", na "hizo".
[ "Viunganishi:" ] - Maneno yanayotumika kuunganisha maneno, sentensi au vishazi, kama vile "na", "au", "lakini", na "kwa sababu".
[ "Viwakilishi:"] - Maneno yanayotumika kuonyesha mahusiano kati ya nomino na maneno mengine katika sentensi, kama vile "kwa", "katika", "kwenye", na "kwa ajili ya".
[ "Vihisishi:" ] - Maneno ya kupasha hisia au mshangao, kama vile "ah!", "oh!", "hebu!", na "yey".
Hizi ni baadhi tu ya aina za maneno, na kila aina ina jukumu lake katika ujenzi wa lugha ya asili.`;
                            } else if (matchedswahiliWord === "vishazi") {
                                botResponse = `Vishazi ni aina ya maneno ambayo hutumiwa badala ya nomino katika sentensi ili kurejelea vitu au watu bila kuhitaji kutaja tena jina lake. Vishazi hufanya lugha iwe rahisi kwa kuzuia kurudia nomino mara kwa mara. Kuna aina kuu mbili za vishazi ambazo ni Vishazi huru - ("maneno ambayo hutumiwa pekee yake katika sentensi bila kufuatiwa na nomino") na vishazi tegemezi - ("maneno ambayo vinahitaji kuambatana na nomino ili kutoa maana kamili katika sentensi."). Vishazi pia vinaweza kuwekwa katika aina ndogo ndogo mbalimbali, zinazojumuisha:

/Vishazi vya Kibinafsi:/ - Hivi hutumiwa kumaanisha watu au kikundi cha watu. Mifano ni "mimi", "wewe", "yeye", "sisi", "ninyi", na "wao".

/Vishazi vya Kinachukuliwa:/ - Hivi hutumiwa kumaanisha vitu au dhana fulani. Mifano ni "hicho", "hiki", "huyo", "ile", "izo", "hayo", "vile", na "vya".

/Vishazi vya Kutaja :/ - Hivi hutumiwa kuelezea au kubainisha vitu au watu fulani. Mifano ni "huyu", "huyo", "hizi", "hizo", "hiyo", "ile", na "izo".

/Vishazi vya Kuuliza :/ - Hivi hutumiwa kuuliza maswali kuhusu vitu au watu. Mifano ni "nani", "nini", "wapi", "lini", "kwa nini", na "vipi".

/Vishazi vya Kutaja Kiasi:/ - Hivi hutumiwa kurejelea vitu au watu bila kuhitaji kutoa maelezo kamili. Mifano ni "mtu", "kitu", "watu", "vitu", "chache", "wengi", "kila mtu", na "kila kitu".

Kwa kila aina ya vishazi, kuna jukumu lake katika kufanya mawasiliano kuwa wazi na rahisi. Vishazi hufanya sentensi ziweze kueleweka zaidi kwa kuwahusu watu au vitu bila kuhitaji kutaja jina lake kila wakati.`
                            } else if (matchedswahiliWord === "huru") {
                                botResponse = `Vishazi huru ni aina ya maneno ambayo hutumiwa pekee yake katika sentensi bila kufuatiwa na nomino. Wanaweza kujitegemea na kutoa maana kamili katika sentensi. Hapa kuna mifano ya vishazi huru katika Kiswahili:

/Mimi:/ - Mfano, "Mimi nilienda dukani."

/Wewe:/ - Mfano, "Wewe ulifika saa ngapi?"

/ Yeye:/ - Mfano, "Yeye anaendelea vizuri."

/ Sisi: / - Mfano, "Sisi tumechoka sana leo."

/ Ninyi: / - Mfano, "Ninyi mnafanya kazi nzuri."

/ Wao: / - Mfano, "Wao walikuja kwa gari jekundu."

Katika sentensi hizi, vishazi huru ("mimi", "wewe", "yeye", "sisi", "ninyi", "wao") vinaweza kusimama peke yake na kutoa maana kamili bila kutegemea nomino yoyote. Hii ni tofauti na vishazi ambavyo vinahitaji kuambatana na nomino ili kutoa maana kamili.`
                            } else if (matchedswahiliWord === "tegemezi") {
                                botResponse = `Vishazi tegemezi ni aina ya maneno ambayo vinahitaji kuambatana na nomino ili kutoa maana kamili katika sentensi. Hayawezi kusimama peke yao kama vishazi huru. Hapa kuna baadhi ya vishazi tegemezi katika Kiswahili:

/ Anavyopenda: / - Mfano, "Juma anavyopenda michezo."

/ Walioandika: / - Mfano, "Wanafunzi walioandika mitihani vizuri watapata alama nzuri."

/ Wakifanya: / - Mfano, "Wakulima wakifanya kazi kwa bidii, watavuna mavuno mengi."

/ Waliochaguliwa: / - Mfano, "Wanasiasa waliochaguliwa wanahudumu kwa muda wa miaka mitano."

/ Wakati aliyefika: / - Mfano, "Wakati uliofika wa kufanya maamuzi ni sasa."

Katika sentensi hizi, vishazi kama "anavyopenda", "walioandika", "wakifanya", "waliochaguliwa", na "wakati aliyefika" vinaambatana na nomino ili kutoa maana kamili. Hivyo, hizi ni mifano ya vishazi tegemezi katika lugha ya Kiswahili.`
                            } else if (matchedswahiliWord === "neno") {
                                botResponse = `"Neno" - linaweza kumaanisha kitu au dhana fulani, ambayo inaweza kuelezea kwa maneno. Katika lugha, neno ni kitengo cha msingi cha lugha ambacho huleta maana au hujenga sentensi. Neno linaweza kuwa jina (kama "kitabu", "nyumba", au "mti"), kitenzi (kama "kula", "kwenda", au "kusoma"), sifa (kama "mrefu", "mzuri", au "mkali"), kielezi (kama "vizuri", "sana", au "pia"), au maneno mengine ambayo huleta maana au kazi katika lugha. Katika muktadha wa sarufi, neno linaweza kutumika kumaanisha kitu kimoja, au inaweza kurejelea kikundi cha maneno yanayofanya kazi pamoja kwa kusudi moja.`
                            } else if (matchedswahiliWord === "nomino") {
                                botResponse = `"Nomino" - ni jina lingine linalotumika kwa "kivumishi". Ni aina ya maneno ambayo hufafanua vitu, watu, mahali au dhana. Nomino inaweza kuwa kitu cha mwili (kama "gari", "mnyama", au "nyumba"), kiumbe hai (kama "mtu", "mbwa", au "ndege"), mahali (kama "jiji", "shule", au "bahari"), au dhana (kama "furaha", "upendo", au "amani"). Nomino inaweza kuwa na aina mbalimbali, kama nomino za kawaida (kama "kitabu") au nomino za kipekee (kama majina ya watu au majina ya makampuni). Katika lugha ya Kiswahili, nomino pia inaweza kubadilika kulingana na majina (namba), hali (kama vile umoja au wingi), na hatua nyingine za sarufi.`;
                            } else if (matchedswahiliWord === "vitenzi") {
                                botResponse = `"Vitenzi" - ni aina ya maneno ambayo hufafanua vitendo, hali, au mchakato. Wanaweza kuelezea kitendo kinachofanyika (kama "kukimbia", "kula", "kucheza"), hali ya kitu au mtu (kama "kuwa na njaa", "kuwa na furaha", "kuwa na usingizi"), au mchakato wa kubadilika (kama "kukua", "kubadilika", "kufanikiwa").

                            Vitenzi katika lugha ya Kiswahili vinaweza kubadilika kulingana na muda (wakati), kitendo (kisarufi), na hatua nyingine za sarufi. Kwa mfano, katika Kiswahili, "kula" inaweza kubadilika kuwa "nakula" (sasa), "nalikuwa" (past), au "nitala" (futuri), kulingana na muktadha na sarufi.`
                            } else if (matchedswahiliWord === "vielezi") {
                                botResponse = `"Vielezi" - ni aina ya maneno ambayo hufafanua vitenzi, hali, au hali ya kitendo. Wanaweza kusaidia kufafanua jinsi kitendo kinavyofanyika, kwa mfano, kama kitendo kinavyofanyika kwa ufanisi, kwa kasi, au kwa bidii. Katika lugha ya Kiswahili, vielezi hujumuisha maneno kama "vizuri", "polepole", "kwa bidii", "kwa furaha", "kwa haraka", na kadhalika. Vielezi hufanya maelezo ya vitenzi kuwa zaidi na kutoa maelezo zaidi juu ya jinsi kitendo kinavyofanyika.`;
                            } else if (matchedswahiliWord === "vivumishi") {
                                botResponse = `"Vivumishi" - ni aina ya maneno ambayo hufanya kazi kama sifa au vielezi kwa nomino au vitenzi. Wanaweza kuelezea hali, hali, au sifa za nomino. Katika lugha ya Kiswahili, vivumishi vinaweza kuelezea mambo kama ukubwa, rangi, umri, au hali ya nomino. Mifano ya vivumishi ni pamoja na "mkubwa", "mweusi", "mdogo", "wazee", "wote", "chache", na kadhalika. Vivumishi huongeza maelezo zaidi kwa nomino na kusaidia kuelezea sifa zake.`;
                            } else if (matchedswahiliWord === "vihisishi") {
                                botResponse = `"Vihisishi" ni aina ya maneno ambayo hufanya kazi kama vigezo vya nomino na hurejelea nomino nyingine au vitenzi katika sentensi. Kwa mfano, katika sentensi "Yule mtoto anapenda kusoma, na yeye hupenda hadithi za kusisimua," neno "yule" ni kihisishi kinachorejelea "mtoto" na "yeye" ni kihisishi kinachorejelea "mtoto" pia. Kihisishi hufanya kazi ya kurejelea nomino iliyotajwa hapo awali ili kuifanya sentensi iweze kueleweka bila kurudia nomino hiyo hiyo mara kwa mara. Katika lugha ya Kiswahili, mifano ya vihisishi ni pamoja na "huyu", "hizi", "hilo", "kile", na kadhalika.`;
                            } else if (matchedswahiliWord === "msamiati") {
                                botResponse = `"Msamiati" - Ni mkusanyiko wa maneno na istilahi zinazotumiwa katika lugha fulani. Hizi ni maneno ambayo watu hutumia kuelezea mawazo, vitu, hali, au dhana mbalimbali katika mazungumzo yao ya kila siku. Msamiati unaweza kujumuisha maneno ya kawaida, maneno maalum au ya kitaaluma, na hata misemo au methali za lugha hiyo. Kwa mfano, msamiati wa lugha ya Kiingereza unaweza kujumuisha maneno kama "apple" (tufaa), "computer" (kompyuta), "science" (sayansi), na kadhalika.`;
                            } else if (matchedswahiliWord === "misamiati") {
                                botResponse = `"Misamiati" - ni mkusanyiko wa maneno au istilahi ambazo zinahusiana na mada au eneo fulani la maarifa, kazi, au shughuli. Misamiati inaweza kuwa ya kawaida au ya kitaaluma, na hutumika kwa lengo la kufafanua dhana au maelezo katika uwanja husika. Kwa mfano, misamiati ya matibabu inaweza kujumuisha maneno kama "shinikizo la damu," "kisukari," na "ugonjwa wa moyo," wakati misamiati ya teknolojia inaweza kujumuisha maneno kama "programu," "mtandao," na "intaneti."

                            Kuwepo kwa misamiati husaidia katika mawasiliano kwa kuwezesha uelewa mzuri na wa kina kati ya watu wanaoshiriki katika uwanja husika. Misamiati inaweza pia kusaidia katika kuunda lugha ya kitaalamu au ya kiufundi ambayo inawaruhusu wataalamu kubadilishana mawazo na kufanya kazi kwa ufanisi zaidi katika uwanja wao.`;
                            }  else if (matchedswahiliWord === "lugha") {
                                botResponse = `"Lugha" - Ni mfumo wa sauti, ishara, au maandishi yanayotumiwa na watu katika mawasiliano na kubadilishana mawazo. Ni zana muhimu sana ya mawasiliano na utambulisho wa kitamaduni kwa jamii na makundi mbalimbali ya watu. Lugha hutoa njia ya kuelezea fikra, hisia, na mawazo, na inaweza kujumuisha sarufi, msamiati, na kanuni za matamshi.

                            Kwa kifupi, lugha ni chombo cha msingi cha mawasiliano kinachotumiwa na binadamu kuelewa na kuelezea ulimwengu wao.`;
                            }  else if (matchedswahiliWord === "kishazi") {
                                botResponse = `"Kishazi" ni neno la Kiswahili ambalo linamaanisha "kizazi" au "kizazi cha watu walioungana kwa ukoo au asili ya kawaida." Kwa kawaida, linatumika kuelezea kundi la watu waliozaliwa na kufuata vizazi vya mababu zao, wakionyesha uhusiano wa damu na urithi wa tamaduni na mila.
                                Lakini pia hili neno lisichanganywe na neno "vishazi" kwani neno hili humaanisha aina moja wapo ya maneno`;
                            } else if (matchedswahiliWord === "asili" ||matchedswahiliWord === "chimbuko") {
                                botResponse = `Lugha ya Kiswahili ina chimbuko au asili  katika familia ya lugha za Kibantu, ambazo zinazungumzwa hasa katika maeneo ya Afrika Mashariki na Kati. Historia ya Kiswahili ina mizizi yake katika biashara na mawasiliano kati ya jamii za pwani ya Afrika Mashariki na wafanyabiashara wa Kiarabu na Waajemi katika karne za kati. Maneno mengi ya Kiswahili yana asili ya Kiarabu, Kireno, Kiingereza, na lugha nyingine za Kiafrika ambazo ziliongezeka kutokana na mwingiliano wa kitamaduni na biashara.

                            Kiswahili kiliendelea kukua na kuenea katika maeneo mengine ya Afrika Mashariki na Kati kutokana na biashara, utawala, na harakati za kijamii. Baadaye, Kiswahili kilitambuliwa kama lugha rasmi ya Kenya, Tanzania, na Uganda, na pia kuwa moja ya lugha za kufundishia katika shule na vyuo vikuu katika nchi hizi.

                            Leo hii, Kiswahili ni mojawapo ya lugha zinazokua kwa kasi zaidi barani Afrika, na imeenea katika maeneo mengi ya bara hilo kama lugha ya mawasiliano ya kikanda, biashara, na utamaduni.`;
                            } else {
                                botResponse = `Samahani kwa sasa siwezi kujibu hili swali kwa sababu sijapatiwa taarifa za kutosha kuhus `+`"${usersInpt}"`+`.nitajitahidi kukujibu pale tu nitakapofundishwa. unaweza pia kuandika au kuuliza kwa namna nyingine na niko tayari kukusaidia.pole kwa usumbufu.`;
                            }
    return botResponse;
}
