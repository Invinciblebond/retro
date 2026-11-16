/* Learn · Spanish. Rendered by assets/learn.js (kind:'lang').
   Pronunciations are English sound-alikes, CAPS = stressed syllable, Latin American
   standard; notes mark where Spain differs. */
window.LEARN = {
  kind: 'lang', id: 'spanish', title: 'Spanish', voice: 'es-ES|es-MX|es-US|es', rate: .85,

  sounds: {
    tab: 'Sounds & Alphabet', level: 'Introductory',
    h: 'The Spanish Alphabet: <span>el abecedario</span>',
    intro: ['Spanish has 27 letters: the 26 you know plus <b>ñ</b>. It is spoken by about 500 million people as a first language, across Spain and most of the Americas.',
      'The good news: Spanish is spelled the way it sounds. Each vowel has one sound, always. Learn the handful of letters that differ from English and you can read any word out loud.'],
    facts: ['27 letters', '5 pure vowels', 'Spelled the way it sounds'],
    hint: 'Pronunciations are English sound-alikes, <b>CAPS</b> = stressed syllable. Tap a card to hear the sample word.',
    groups: [['vowels', 'The five vowels', 'One sound each, short and clean. They never slide into another sound the way English vowels do.'],
      ['same', 'Old friends', 'These sound close enough to English to read straight off.'],
      ['diff', 'Different from English', 'These are the letters that give an accent away. Learn them first.']],
    cards: [
      ['A','a','ah','like “a” in father','casa','KAH-sah','house','vowels','a','ah'],
      ['E','e','eh','like “e” in met','mesa','MEH-sah','table','vowels','e','eh'],
      ['I','i','ee','like “ee” in see','vino','BEE-noh','wine','vowels','i','ee'],
      ['O','o','oh','like “o” in more, kept short','sol','SOHL','sun','vowels','o','oh'],
      ['U','u','oo','like “oo” in moon','luna','LOO-nah','moon','vowels','u','oo'],
      ['B','b','b','like “b” in boy; softer between vowels','bueno','BWEH-noh','good','same','be','beh'],
      ['D','d','d','like “d”; between vowels close to “th” in this','día','DEE-ah','day','same','de','deh'],
      ['F','f','f','like “f” in fun','familia','fah-MEE-lyah','family','same','efe','EH-feh'],
      ['K','k','k','like “k”; only in borrowed words','kilo','KEE-loh','kilo','same','ka','kah'],
      ['L','l','l','like “l” in light','libro','LEE-broh','book','same','ele','EH-leh'],
      ['M','m','m','like “m” in man','madre','MAH-dreh','mother','same','eme','EH-meh'],
      ['N','n','n','like “n” in no','noche','NOH-cheh','night','same','ene','EH-neh'],
      ['P','p','p','like “p” in spot, no puff of air','padre','PAH-dreh','father','same','pe','peh'],
      ['S','s','s','like “s” in sun, never “z”','siempre','SYEM-preh','always','same','ese','EH-seh'],
      ['T','t','t','like “t” in stop, tongue on the teeth','tiempo','TYEM-poh','time; weather','same','te','teh'],
      ['CH','ch','ch','like “ch” in church','chocolate','choh-koh-LAH-teh','chocolate','same','che','cheh'],
      ['C','c','k / s','“k” before a, o, u. “s” before e, i (in Spain: “th” in think)','cena','SEH-nah','dinner','diff','ce','seh'],
      ['G','g','g / h','hard “g” before a, o, u. A rough “h” before e, i','gente','HEN-teh','people','diff','ge','heh'],
      ['H','h','silent','always silent','hola','OH-lah','hello','diff','hache','AH-cheh'],
      ['J','j','h','a rough “h”, like “ch” in Scottish loch','jugo','HOO-goh','juice','diff','jota','HOH-tah'],
      ['LL','ll','y','like “y” in yes','llave','YAH-beh','key','diff','elle','EH-yeh'],
      ['Ñ','ñ','ny','like “ny” in canyon','niño','NEE-nyoh','child','diff','eñe','EH-nyeh'],
      ['Q','q','k','always “qu” + e or i, said “k”; the u is silent','queso','KEH-soh','cheese','diff','cu','koo'],
      ['R','r','r (tap)','one quick tap of the tongue, like “tt” in American butter','pero','PEH-roh','but','diff','erre','EH-rreh'],
      ['RR','rr','rr (roll)','a rolled trill. Also how a single r sounds at the start of a word','perro','PEH-rroh','dog','diff'],
      ['V','v','b','exactly the same sound as b','vaca','BAH-kah','cow','diff','uve','OO-beh'],
      ['W','w','w','only in foreign words','wifi','WEE-fee','wifi','diff','uve doble','OO-beh DOH-bleh'],
      ['X','x','ks','like “x” in taxi; like “h” in México','examen','ek-SAH-men','exam','diff','equis','EH-kees'],
      ['Y','y','y / ee','like “y” in yes; “ee” when it stands alone (y = and)','yo','YOH','I','diff','ye','yeh'],
      ['Z','z','s','like “s” (in Spain: “th” in think). Never a buzzing “z”','zapato','sah-PAH-toh','shoe','diff','zeta','SEH-tah']
    ],
    tipsTitle: 'Four rules that make it click',
    tips: [
      ['Where the stress goes', 'Word ends in a vowel, <code>n</code> or <code>s</code>: stress the second-to-last syllable (<code>CA-sa</code>, <code>HA-blan</code>). Ends in any other consonant: stress the last (<code>ha-BLAR</code>).'],
      ['The accent mark overrides', 'A written accent (<code>á é í ó ú</code>) means "stress here instead": <code>teléfono</code>, <code>café</code>. It never changes the vowel sound.'],
      ['Silent u', 'In <code>gue, gui, que, qui</code> the u is silent: <code>guitarra</code> is gee-TAH-rrah. Two dots bring it back: <code>pingüino</code> is peen-GWEE-noh.'],
      ['Upside-down marks', 'Questions and exclamations are marked at both ends: <code>¿Cómo estás?</code> <code>¡Hola!</code>']
    ],
    practiceNote: 'Each of these is a word you already know in English. Sound it out the Spanish way, then tap to check.',
    practice: [['hospital','os-pee-TAHL','hospital'],['animal','ah-nee-MAHL','animal'],['doctor','dok-TOR','doctor'],['música','MOO-see-kah','music'],['restaurante','res-tow-RAHN-teh','restaurant'],['teléfono','teh-LEH-foh-noh','telephone'],['importante','eem-por-TAHN-teh','important'],['universidad','oo-nee-ber-see-DAHD','university'],['guitarra','gee-TAH-rrah','guitar'],['problema','proh-BLEH-mah','problem'],['general','heh-neh-RAHL','general'],['julio','HOO-lyoh','July']]
  },

  words: {
    tab: 'Core Words', level: 'Beginner',
    h: 'Core Words: <span>palabras esenciales</span>',
    intro: ['These are the words that carry everyday conversation. Each comes with a sentence so you see it at work. Tap a word or its example to hear it.'],
    cats: [['expressions','Common expressions'],['people','People & pronouns'],['questions','Question words'],['time','Time'],['numbers','Numbers'],['food','Food & drink'],['places','Places & things'],['verbs','Verbs'],['adjectives','Adjectives']],
    list: [
      ['hola','interj','OH-lah','hello','Hola, ¿cómo estás?','OH-lah, KOH-moh es-TAHS?','Hello, how are you?','expressions'],
      ['adiós','interj','ah-DYOHS','goodbye','Adiós, hasta mañana.','ah-DYOHS, AHS-tah mah-NYAH-nah.','Goodbye, see you tomorrow.','expressions'],
      ['gracias','interj','GRAH-syahs','thank you','Muchas gracias.','MOO-chahs GRAH-syahs.','Thank you very much.','expressions'],
      ['por favor','phr','por fah-BOR','please','Un café, por favor.','oon kah-FEH, por fah-BOR.','A coffee, please.','expressions'],
      ['de nada','phr','deh NAH-dah',"you're welcome",'De nada, amigo.','deh NAH-dah, ah-MEE-goh.',"You're welcome, friend.",'expressions'],
      ['sí','adv','SEE','yes','Sí, claro.','SEE, KLAH-roh.','Yes, of course.','expressions'],
      ['no','adv','NOH','no; not','No, gracias.','NOH, GRAH-syahs.','No, thank you.','expressions'],
      ['perdón','interj','pehr-DOHN','sorry; excuse me','Perdón, ¿dónde está el baño?','pehr-DOHN, DOHN-deh es-TAH el BAH-nyoh?','Excuse me, where is the bathroom?','expressions'],
      ['buenos días','phr','BWEH-nohs DEE-ahs','good morning','Buenos días, señora.','BWEH-nohs DEE-ahs, seh-NYOH-rah.','Good morning, madam.','expressions'],
      ['no entiendo','phr','noh en-TYEN-doh',"I don't understand",'Lo siento, no entiendo.','loh SYEN-toh, noh en-TYEN-doh.',"I'm sorry, I don't understand.",'expressions'],
      ['yo','pron','YOH','I','Yo soy estudiante.','YOH soy es-too-DYAHN-teh.','I am a student.','people'],
      ['tú','pron','TOO','you (informal)','¿Tú hablas inglés?','TOO AH-blahs een-GLEHS?','Do you speak English?','people'],
      ['él / ella','pron','EHL / EH-yah','he / she','Ella es mi hermana.','EH-yah es mee ehr-MAH-nah.','She is my sister.','people'],
      ['nosotros','pron','noh-SOH-trohs','we','Nosotros vivimos aquí.','noh-SOH-trohs bee-BEE-mohs ah-KEE.','We live here.','people'],
      ['amigo','n · masc','ah-MEE-goh','friend','Es mi mejor amigo.','es mee meh-HOR ah-MEE-goh.','He is my best friend.','people'],
      ['familia','n · fem','fah-MEE-lyah','family','Mi familia es grande.','mee fah-MEE-lyah es GRAHN-deh.','My family is big.','people'],
      ['hombre / mujer','n','OHM-breh / moo-HEHR','man / woman','Un hombre y una mujer.','oon OHM-breh ee OO-nah moo-HEHR.','A man and a woman.','people'],
      ['gente','n · fem','HEN-teh','people','Hay mucha gente.','eye MOO-chah HEN-teh.','There are a lot of people.','people'],
      ['qué','pron','KEH','what','¿Qué es esto?','KEH es ES-toh?','What is this?','questions'],
      ['quién','pron','KYEN','who','¿Quién es?','KYEN es?','Who is it?','questions'],
      ['dónde','adv','DOHN-deh','where','¿Dónde vives?','DOHN-deh BEE-behs?','Where do you live?','questions'],
      ['cuándo','adv','KWAHN-doh','when','¿Cuándo llegas?','KWAHN-doh YEH-gahs?','When do you arrive?','questions'],
      ['por qué','adv','por KEH','why','¿Por qué no?','por KEH noh?','Why not?','questions'],
      ['cómo','adv','KOH-moh','how','¿Cómo te llamas?','KOH-moh teh YAH-mahs?','What is your name?','questions'],
      ['cuánto','adv','KWAHN-toh','how much','¿Cuánto cuesta?','KWAHN-toh KWES-tah?','How much does it cost?','questions'],
      ['hoy','adv','OY','today','Hoy hace calor.','OY AH-seh kah-LOR.','It is hot today.','time'],
      ['mañana','adv / n','mah-NYAH-nah','tomorrow; morning','Nos vemos mañana.','nohs BEH-mohs mah-NYAH-nah.','See you tomorrow.','time'],
      ['ayer','adv','ah-YEHR','yesterday','Ayer llovió.','ah-YEHR yoh-BYOH.','It rained yesterday.','time'],
      ['ahora','adv','ah-OH-rah','now','Estoy en casa ahora.','es-TOY en KAH-sah ah-OH-rah.','I am at home now.','time'],
      ['día','n · masc','DEE-ah','day','Todo el día.','TOH-doh el DEE-ah.','All day.','time'],
      ['semana','n · fem','seh-MAH-nah','week','La próxima semana.','lah PROK-see-mah seh-MAH-nah.','Next week.','time'],
      ['año','n · masc','AH-nyoh','year','¡Feliz Año Nuevo!','feh-LEES AH-nyoh NWEH-boh!','Happy New Year!','time'],
      ['hora','n · fem','OH-rah','hour; time','¿Qué hora es?','KEH OH-rah es?','What time is it?','time'],
      ['uno','num','OO-noh','one','un café','oon kah-FEH','one coffee','numbers'],
      ['dos','num','DOHS','two','dos cervezas','dohs sehr-BEH-sahs','two beers','numbers'],
      ['tres','num','TREHS','three','tres días','trehs DEE-ahs','three days','numbers'],
      ['cuatro','num','KWAH-troh','four','cuatro personas','KWAH-troh pehr-SOH-nahs','four people','numbers'],
      ['cinco','num','SEEN-koh','five','cinco minutos','SEEN-koh mee-NOO-tohs','five minutes','numbers'],
      ['seis','num','SAYS','six','seis meses','says MEH-sehs','six months','numbers'],
      ['siete','num','SYEH-teh','seven','siete días','SYEH-teh DEE-ahs','seven days','numbers'],
      ['ocho','num','OH-choh','eight','a las ocho','ah lahs OH-choh','at eight o\'clock','numbers'],
      ['nueve','num','NWEH-beh','nine','nueve euros','NWEH-beh EH-oo-rohs','nine euros','numbers'],
      ['diez','num','DYEHS','ten','diez años','dyehs AH-nyohs','ten years','numbers'],
      ['cien','num','SYEN','one hundred','cien por ciento','syen por SYEN-toh','one hundred percent','numbers'],
      ['agua','n · fem','AH-gwah','water','Un vaso de agua.','oon BAH-soh deh AH-gwah.','A glass of water.','food'],
      ['café','n · masc','kah-FEH','coffee','café con leche','kah-FEH kohn LEH-cheh','coffee with milk','food'],
      ['pan','n · masc','PAHN','bread','pan con queso','pahn kohn KEH-soh','bread with cheese','food'],
      ['carne','n · fem','KAR-neh','meat','No como carne.','noh KOH-moh KAR-neh.','I do not eat meat.','food'],
      ['pescado','n · masc','pes-KAH-doh','fish (as food)','pescado y arroz','pes-KAH-doh ee ah-RROHS','fish and rice','food'],
      ['fruta','n · fem','FROO-tah','fruit','fruta fresca','FROO-tah FRES-kah','fresh fruit','food'],
      ['comida','n · fem','koh-MEE-dah','food; meal','La comida está lista.','lah koh-MEE-dah es-TAH LEES-tah.','The food is ready.','food'],
      ['cuenta','n · fem','KWEN-tah','bill','La cuenta, por favor.','lah KWEN-tah, por fah-BOR.','The bill, please.','food'],
      ['casa','n · fem','KAH-sah','house; home','Estoy en casa.','es-TOY en KAH-sah.','I am at home.','places'],
      ['trabajo','n · masc','trah-BAH-hoh','work; job','Voy al trabajo.','boy ahl trah-BAH-hoh.','I am going to work.','places'],
      ['ciudad','n · fem','syoo-DAHD','city','una ciudad grande','OO-nah syoo-DAHD GRAHN-deh','a big city','places'],
      ['calle','n · fem','KAH-yeh','street','en esta calle','en ES-tah KAH-yeh','on this street','places'],
      ['tienda','n · fem','TYEN-dah','shop','La tienda está cerrada.','lah TYEN-dah es-TAH seh-RRAH-dah.','The shop is closed.','places'],
      ['dinero','n · masc','dee-NEH-roh','money','No tengo dinero.','noh TEN-goh dee-NEH-roh.','I have no money.','places'],
      ['libro','n · masc','LEE-broh','book','un libro interesante','oon LEE-broh een-teh-reh-SAHN-teh','an interesting book','places'],
      ['ser','v','SEHR','to be (what something is)','Soy de México.','soy deh MEH-hee-koh.','I am from Mexico.','verbs'],
      ['estar','v','es-TAR','to be (state, place)','Estoy cansado.','es-TOY kahn-SAH-doh.','I am tired.','verbs'],
      ['tener','v','teh-NEHR','to have','Tengo dos hermanos.','TEN-goh dohs ehr-MAH-nohs.','I have two brothers.','verbs'],
      ['hacer','v','ah-SEHR','to do; to make','¿Qué haces?','KEH AH-sehs?','What are you doing?','verbs'],
      ['ir','v','EER','to go','Voy a casa.','boy ah KAH-sah.','I am going home.','verbs'],
      ['querer','v','keh-REHR','to want; to love','Quiero agua.','KYEH-roh AH-gwah.','I want water.','verbs'],
      ['poder','v','poh-DEHR','can; to be able','¿Puedes ayudarme?','PWEH-dehs ah-yoo-DAR-meh?','Can you help me?','verbs'],
      ['hablar','v','ah-BLAR','to speak','Hablo un poco de español.','AH-bloh oon POH-koh deh es-pah-NYOHL.','I speak a little Spanish.','verbs'],
      ['comer','v','koh-MEHR','to eat','Comemos a las dos.','koh-MEH-mohs ah lahs dohs.','We eat at two.','verbs'],
      ['vivir','v','bee-BEER','to live','Vivo en Madrid.','BEE-boh en mah-DREED.','I live in Madrid.','verbs'],
      ['bueno','adj','BWEH-noh','good','un buen día','oon bwen DEE-ah','a good day','adjectives'],
      ['malo','adj','MAH-loh','bad','mal tiempo','mahl TYEM-poh','bad weather','adjectives'],
      ['grande','adj','GRAHN-deh','big','una casa grande','OO-nah KAH-sah GRAHN-deh','a big house','adjectives'],
      ['pequeño','adj','peh-KEH-nyoh','small','un perro pequeño','oon PEH-rroh peh-KEH-nyoh','a small dog','adjectives'],
      ['nuevo','adj','NWEH-boh','new','un coche nuevo','oon KOH-cheh NWEH-boh','a new car','adjectives'],
      ['viejo','adj','BYEH-hoh','old','un viejo amigo','oon BYEH-hoh ah-MEE-goh','an old friend','adjectives'],
      ['fácil / difícil','adj','FAH-seel / dee-FEE-seel','easy / difficult','Es fácil.','es FAH-seel.','It is easy.','adjectives'],
      ['caliente / frío','adj','kah-LYEN-teh / FREE-oh','hot / cold','agua fría','AH-gwah FREE-ah','cold water','adjectives']
    ]
  },

  grammar: {
    tab: 'Grammar Basics', level: 'Intermediate',
    h: 'Grammar Basics: <span>la gramática</span>',
    intro: ['Fifteen rules that explain most of what you will meet. Each one is short and stands by itself. Tap any example to hear it.'],
    units: [
      { t: 'Nouns and describing words', p: 'Every noun has a gender, and the words around it change to match.', rules: [
        ['Gender and "the"', 'El género', 'Nouns are masculine or feminine. The word for "the" and "a" changes to match.', [
          'Most nouns ending in <b>-o</b> are masculine. Most ending in <b>-a</b> are feminine. The rest you learn with the article.',
          ['tb', ['', 'the', 'a / some'], ['Masculine singular', 'el', 'un'], ['Feminine singular', 'la', 'una'], ['Masculine plural', 'los', 'unos'], ['Feminine plural', 'las', 'unas']],
          ['x', ['el libro', 'el LEE-broh', 'the book'], ['la casa', 'lah KAH-sah', 'the house'], ['un amigo', 'oon ah-MEE-goh', 'a (male) friend'], ['una amiga', 'OO-nah ah-MEE-gah', 'a (female) friend']],
          ['warn', 'Exceptions to learn', '<b>el día</b>, <b>el problema</b>, <b>el mapa</b> are masculine. <b>la mano</b>, <b>la foto</b> are feminine.']]],
        ['Plurals', 'El plural', 'Add -s after a vowel, -es after a consonant.', [
          ['x', ['casa → casas', 'KAH-sahs', 'houses'], ['ciudad → ciudades', 'syoo-DAH-dehs', 'cities'], ['lápiz → lápices', 'LAH-pee-sehs', 'pencils (z becomes c)']]]],
        ['Adjectives agree and usually follow', 'Los adjetivos', 'Describing words match the noun in gender and number, and come after it.', [
          ['x', ['el coche rojo', 'el KOH-cheh RROH-hoh', 'the red car'], ['la casa roja', 'lah KAH-sah RROH-hah', 'the red house'], ['los coches rojos', 'lohs KOH-chehs RROH-hohs', 'the red cars']],
          'Adjectives ending in <b>-e</b> or a consonant do not change for gender: <b>grande</b>, <b>fácil</b>.',
          ['note', 'Before the noun', 'A few common ones go first and shorten: <b>un buen día</b>, <b>un gran hombre</b> (a great man, not a big one).']]]
      ]},
      { t: 'Verbs in the present', p: 'The verb ending tells you who is doing it, so the pronoun is usually dropped.', rules: [
        ['Pronouns, and when to drop them', 'Los pronombres', 'yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes.', [
          '<b>Hablo</b> already means "I speak". Add <b>yo</b> only for emphasis or contrast.',
          ['tb', ['Spanish', 'English', 'Note'], ['tú', 'you', 'friends, family, children'], ['usted', 'you', 'polite; takes the he/she verb form'], ['vosotros', 'you all', 'Spain only'], ['ustedes', 'you all', 'everywhere; the only plural "you" in Latin America']]]],
        ['Regular present tense', 'El presente', 'Three families: -ar, -er, -ir. Drop the ending, add the new one.', [
          ['tb', ['', 'hablar (speak)', 'comer (eat)', 'vivir (live)'], ['yo', 'hablo', 'como', 'vivo'], ['tú', 'hablas', 'comes', 'vives'], ['él, ella, usted', 'habla', 'come', 'vive'], ['nosotros', 'hablamos', 'comemos', 'vivimos'], ['vosotros', 'habláis', 'coméis', 'vivís'], ['ellos, ustedes', 'hablan', 'comen', 'viven']],
          'The same form covers "I speak", "I am speaking" and "I do speak".']],
        ['Ser and estar: two verbs for "to be"', 'Ser y estar', 'Ser for what something is. Estar for how or where it is.', [
          ['tb', ['', 'ser', 'estar'], ['yo', 'soy', 'estoy'], ['tú', 'eres', 'estás'], ['él, ella, usted', 'es', 'está'], ['nosotros', 'somos', 'estamos'], ['ellos, ustedes', 'son', 'están']],
          ['tb', ['Use ser for', 'Use estar for'], ['identity, job, nationality', 'location'], ['lasting traits', 'moods and temporary states'], ['time and dates', 'actions in progress (estoy comiendo)']],
          ['x', ['Soy médico.', 'soy MEH-dee-koh', 'I am a doctor.'], ['Estoy en casa.', 'es-TOY en KAH-sah', 'I am at home.'], ['Es aburrido.', 'es ah-boo-RREE-doh', 'He is boring.'], ['Está aburrido.', 'es-TAH ah-boo-RREE-doh', 'He is bored.']]]],
        ['The irregular verbs you need daily', 'Verbos irregulares', 'ir, tener, hacer, querer, poder: learn the "yo" form and the vowel change.', [
          ['tb', ['', 'ir (go)', 'tener (have)', 'querer (want)', 'poder (can)'], ['yo', 'voy', 'tengo', 'quiero', 'puedo'], ['tú', 'vas', 'tienes', 'quieres', 'puedes'], ['él, ella', 'va', 'tiene', 'quiere', 'puede'], ['nosotros', 'vamos', 'tenemos', 'queremos', 'podemos'], ['ellos', 'van', 'tienen', 'quieren', 'pueden']],
          ['note', 'Boot verbs', 'In many verbs the stem vowel changes (e → ie, o → ue) in every form except <b>nosotros</b> and <b>vosotros</b>.'],
          '<b>Tener</b> also covers age and feelings: <b>Tengo 30 años</b> (I am 30), <b>tengo hambre</b> (I am hungry).']],
        ['Saying no and asking questions', 'Negación y preguntas', 'Put "no" before the verb. For a question, just raise your voice.', [
          ['x', ['No hablo francés.', 'noh AH-bloh frahn-SEHS', 'I do not speak French.'], ['¿Hablas inglés?', 'AH-blahs een-GLEHS?', 'Do you speak English?'], ['No tengo nada.', 'noh TEN-goh NAH-dah', 'I have nothing. (double negative is correct)']],
          'There is no word for "do" in questions. Question words carry an accent: <b>qué, dónde, cuándo, cómo, quién, por qué</b>.']],
        ['Gustar: "it pleases me"', 'Gustar', 'To say you like something, the thing liked is the subject.', [
          ['x', ['Me gusta el café.', 'meh GOOS-tah el kah-FEH', 'I like coffee. (Coffee pleases me.)'], ['Me gustan los perros.', 'meh GOOS-tahn lohs PEH-rrohs', 'I like dogs.'], ['¿Te gusta bailar?', 'teh GOOS-tah bye-LAR?', 'Do you like dancing?']],
          'Use <b>gusta</b> for one thing or a verb, <b>gustan</b> for several. The person goes in front: <b>me, te, le, nos, les</b>.']]
      ]},
      { t: 'Past and future', p: 'Spanish has two simple past tenses. Picking between them is the main skill.', rules: [
        ['Preterite: finished actions', 'El pretérito', 'One completed event at a definite time.', [
          ['tb', ['', 'hablar', 'comer / vivir'], ['yo', 'hablé', 'comí'], ['tú', 'hablaste', 'comiste'], ['él, ella', 'habló', 'comió'], ['nosotros', 'hablamos', 'comimos'], ['ellos', 'hablaron', 'comieron']],
          ['x', ['Ayer comí paella.', 'ah-YEHR koh-MEE pah-EH-yah', 'Yesterday I ate paella.'], ['Fui a Madrid.', 'fwee ah mah-DREED', 'I went to Madrid. (fui: irregular past of ir and ser)']]]],
        ['Imperfect: background and habits', 'El imperfecto', '"Was doing" and "used to do".', [
          ['tb', ['', 'hablar', 'comer / vivir'], ['yo, él, ella', 'hablaba', 'comía'], ['tú', 'hablabas', 'comías'], ['nosotros', 'hablábamos', 'comíamos'], ['ellos', 'hablaban', 'comían']],
          ['x', ['Cuando era niño, vivía en Lima.', 'KWAHN-doh EH-rah NEE-nyoh, bee-BEE-ah en LEE-mah', 'When I was a child, I lived in Lima.'], ['Llovía cuando salí.', 'yoh-BEE-ah KWAHN-doh sah-LEE', 'It was raining (background) when I left (event).']]]],
        ['The future', 'El futuro', 'Everyday speech uses "ir a" + verb. The formal future adds endings to the whole infinitive.', [
          ['x', ['Voy a estudiar.', 'boy ah es-too-DYAR', 'I am going to study.'], ['Hablaré con ella.', 'ah-blah-REH kohn EH-yah', 'I will speak with her.']],
          ['tb', ['yo', 'tú', 'él, ella', 'nosotros', 'ellos'], ['hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablarán']]]]
      ]},
      { t: 'Building longer sentences', p: 'The pieces that make Spanish sound natural.', rules: [
        ['Object pronouns and reflexives', 'Pronombres de objeto', 'lo, la, le, me, te, se go before the verb.', [
          ['x', ['Lo veo.', 'loh BEH-oh', 'I see him / it.'], ['Te quiero.', 'teh KYEH-roh', 'I love you.'], ['Me llamo Ana.', 'meh YAH-moh AH-nah', 'My name is Ana. (I call myself Ana.)'], ['Se levanta a las siete.', 'seh leh-BAHN-tah ah lahs SYEH-teh', 'He gets up at seven.']],
          'With an infinitive they may attach to the end instead: <b>Quiero verlo</b> = <b>Lo quiero ver</b>.']],
        ['Por and para', 'Por y para', 'Both mean "for". Para looks forward to a goal. Por looks back at a cause or path.', [
          ['tb', ['para', 'por'], ['purpose: para aprender (in order to learn)', 'cause: por la lluvia (because of the rain)'], ['recipient: para ti (for you)', 'exchange: diez euros por el libro'], ['deadline: para el lunes (by Monday)', 'duration, route: por dos horas, por el parque']]]],
        ['The subjunctive, in one page', 'El subjuntivo', 'A verb mood for things that are wished, doubted or not yet real.', [
          'It appears after <b>que</b> when the first half expresses a wish, an emotion, doubt or a command, and the subject changes.',
          'To form it, swap the vowel: -ar verbs take <b>e</b>, -er and -ir verbs take <b>a</b>. <b>hablar → hable</b>, <b>comer → coma</b>.',
          ['x', ['Quiero que vengas.', 'KYEH-roh keh BEN-gahs', 'I want you to come.'], ['Espero que estés bien.', 'es-PEH-roh keh es-TEHS byen', 'I hope you are well.'], ['Ojalá llueva.', 'oh-hah-LAH YWEH-bah', 'I hope it rains.']],
          ['tip', 'First step', 'Learn it as fixed phrases first. <b>Espero que…</b> and <b>Quiero que…</b> will carry you a long way.']]]
      ]}
    ]
  },

  reading: {
    tab: 'Reading & Pronunciation', level: 'Advanced',
    h: 'Reading real Spanish: <span>Cervantes and Bécquer</span>',
    intro: ['Short original texts, read line by line with pronunciation and a plain translation. Start with the proverbs, then try the most famous opening sentence in Spanish literature.'],
    rulesTitle: 'How it is really pronounced',
    rules: [
      ['Words link together', 'A final consonant slides onto the next vowel, and two vowels that meet merge: <b>los amigos</b> sounds like "lo-sa-mi-gos".', [['los amigos', 'loh-sah-MEE-gohs'], ['mi hijo', 'mee-EE-hoh']]],
      ['B and V are one sound', 'After a pause or m/n it is a firm "b". Between vowels the lips do not quite close.', [['vino', 'BEE-noh'], ['la vaca', 'lah BAH-kah']]],
      ['Soft d and g between vowels', 'D between vowels is like "th" in this. G softens the same way.', [['nada', 'NAH-thah'], ['amigo', 'ah-MEE-goh']]],
      ['Spain versus the Americas', 'In most of Spain, z and c (before e, i) are "th" as in think. In the Americas they are "s".', [['gracias', 'GRAH-syahs'], ['zapato', 'sah-PAH-toh']]]
    ],
    excerpts: [
      { ref: 'Traditional proverbs', title: 'Four sayings everyone knows', lvl: 1,
        ctx: 'Proverbs (<b>refranes</b>) are short, rhythmic and used all the time in conversation.',
        lines: [['Más vale tarde que nunca.', 'mahs BAH-leh TAR-deh keh NOON-kah.', 'Better late than never.'],
          ['A quien madruga, Dios le ayuda.', 'ah kyen mah-DROO-gah, dyohs leh ah-YOO-dah.', 'God helps the one who gets up early.'],
          ['No hay mal que por bien no venga.', 'noh eye mahl keh por byen noh BEN-gah.', 'There is no bad thing that does not bring some good.'],
          ['En boca cerrada no entran moscas.', 'en BOH-kah seh-RRAH-dah noh EN-trahn MOHS-kahs.', 'Flies do not enter a closed mouth.']],
        traps: ['<b>hay</b> ("there is") is said like English "eye". The h is silent.', '<b>venga</b> is the subjunctive of venir (rule 15).', '<b>cerrada</b> has the rolled rr.'],
        vocab: [['madrugar', 'mah-droo-GAR', 'to get up very early'], ['ayudar', 'ah-yoo-DAR', 'to help'], ['boca', 'BOH-kah', 'mouth'], ['mosca', 'MOHS-kah', 'fly']] },
      { ref: 'Bécquer, Rima XXI (1871)', title: '"What is poetry?"', lvl: 1,
        ctx: 'Gustavo Adolfo Bécquer wrote the best-known short poem in Spanish. Four lines, one idea.',
        lines: [['¿Qué es poesía?, dices mientras clavas', 'keh es poh-eh-SEE-ah, DEE-sehs MYEN-trahs KLAH-bahs', '"What is poetry?" you say, as you fix'],
          ['en mi pupila tu pupila azul.', 'en mee poo-PEE-lah too poo-PEE-lah ah-SOOL.', 'your blue eye upon my eye.'],
          ['¿Qué es poesía? ¿Y tú me lo preguntas?', 'keh es poh-eh-SEE-ah? ee too meh loh preh-GOON-tahs?', 'What is poetry? And you are asking me?'],
          ['Poesía... eres tú.', 'poh-eh-SEE-ah... EH-rehs too.', 'Poetry... is you.']],
        traps: ['<b>poesía</b> has four syllables: po-e-sí-a. The accent keeps í apart from a.', '<b>me lo preguntas</b>: two object pronouns before the verb, "to me" then "it" (rule 13).'],
        vocab: [['mientras', 'MYEN-trahs', 'while'], ['clavar', 'klah-BAR', 'to fix, to nail'], ['pupila', 'poo-PEE-lah', 'pupil of the eye'], ['preguntar', 'preh-goon-TAR', 'to ask']] },
      { ref: 'Cervantes, Don Quijote, Part I, ch. 1 (1605)', title: 'The opening sentence', lvl: 3,
        ctx: 'The first words of the first modern novel. The narrator refuses to say where his hero lived, then lists what a poor country gentleman owned.',
        lines: [['En un lugar de la Mancha, de cuyo nombre no quiero acordarme,', 'en oon loo-GAR deh lah MAHN-chah, deh KOO-yoh NOHM-breh noh KYEH-roh ah-kor-DAR-meh,', 'In a village of La Mancha, whose name I do not care to remember,'],
          ['no ha mucho tiempo que vivía un hidalgo', 'noh ah MOO-choh TYEM-poh keh bee-BEE-ah oon ee-DAHL-goh', 'there lived not long ago a gentleman'],
          ['de los de lanza en astillero, adarga antigua,', 'deh lohs deh LAHN-sah en ahs-tee-YEH-roh, ah-DAR-gah ahn-TEE-gwah,', 'of the kind with a lance in the rack, an old shield,'],
          ['rocín flaco y galgo corredor.', 'rroh-SEEN FLAH-koh ee GAHL-goh koh-rreh-DOR.', 'a skinny nag and a greyhound for racing.']],
        traps: ['<b>hidalgo</b>: silent h. A low-ranking nobleman.', '<b>no ha mucho tiempo que</b> is old Spanish for today\'s <b>no hace mucho tiempo que</b>.', '<b>vivía</b> is the imperfect: background description (rule 11).', '<b>acordarme</b>: the pronoun me is attached to the infinitive (rule 13).'],
        vocab: [['lugar', 'loo-GAR', 'place; village'], ['cuyo', 'KOO-yoh', 'whose'], ['hidalgo', 'ee-DAHL-goh', 'minor nobleman'], ['rocín', 'rroh-SEEN', 'old workhorse, nag'], ['galgo', 'GAHL-goh', 'greyhound']] },
      { ref: 'Cervantes, Don Quijote, Part I, ch. 1 (1605)', title: 'How he lost his mind', lvl: 3,
        ctx: 'Alonso Quijano reads so many tales of knights that he decides to become one.',
        lines: [['En resolución, él se enfrascó tanto en su lectura,', 'en rreh-soh-loo-SYOHN, el seh en-frahs-KOH TAHN-toh en soo lek-TOO-rah,', 'In short, he buried himself so deeply in his reading'],
          ['que se le pasaban las noches leyendo de claro en claro,', 'keh seh leh pah-SAH-bahn lahs NOH-chehs leh-YEN-doh deh KLAH-roh en KLAH-roh,', 'that he spent his nights reading from dusk to dawn,'],
          ['y los días de turbio en turbio;', 'ee lohs DEE-ahs deh TOOR-byoh en TOOR-byoh;', 'and his days from dawn to dusk;'],
          ['y así, del poco dormir y del mucho leer se le secó el celebro,', 'ee ah-SEE, del POH-koh dor-MEER ee del MOO-choh leh-EHR seh leh seh-KOH el seh-LEH-broh,', 'and so, from little sleep and much reading, his brain dried up,'],
          ['de manera que vino a perder el juicio.', 'deh mah-NEH-rah keh BEE-noh ah pehr-DEHR el HWEE-syoh.', 'so that he came to lose his wits.']],
        traps: ['<b>enfrascó, secó, vino</b> are preterites: single finished events (rule 10). <b>pasaban</b> is imperfect: a repeated habit (rule 11).', '<b>celebro</b> is the 1605 spelling of modern <b>cerebro</b>, brain.', '<b>juicio</b>: j is the rough "h": HWEE-syoh.'],
        vocab: [['enfrascarse', 'en-frahs-KAR-seh', 'to become absorbed'], ['lectura', 'lek-TOO-rah', 'reading'], ['secar', 'seh-KAR', 'to dry'], ['juicio', 'HWEE-syoh', 'judgement, sanity']] }
    ]
  },

  sources: [
    ['Real Academia Española: Ortografía de la lengua española (2010)', 'https://www.rae.es/ortografia', 'the 27-letter alphabet, letter names, accent rules'],
    ['Real Academia Española: Diccionario de la lengua española', 'https://dle.rae.es/', 'meanings and genders'],
    ['Instituto Cervantes: El español en el mundo', 'https://cvc.cervantes.es/lengua/anuario/', 'number of speakers'],
    ['Cervantes, Don Quijote de la Mancha (Centro Virtual Cervantes edition)', 'https://cvc.cervantes.es/literatura/clasicos/quijote/', 'the 1605 text'],
    ['Bécquer, Rimas (Biblioteca Virtual Miguel de Cervantes)', 'https://www.cervantesvirtual.com/portales/gustavo_adolfo_becquer/', 'Rima XXI']
  ]
};
