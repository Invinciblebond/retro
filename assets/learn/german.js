/* Learn · German. Rendered by assets/learn.js (kind:'lang').
   Pronunciation key: CAPS = stressed syllable · kh = "ch" in Scottish loch ·
   ü = "ee" with rounded lips · œ = "e" in bed with rounded lips. */
window.LEARN = {
  kind: 'lang', id: 'german', title: 'German', voice: 'de-DE|de-AT|de', rate: .85,

  sounds: {
    tab: 'Sounds & Alphabet', level: 'Introductory',
    h: 'The German Alphabet: <span>das Alphabet</span>',
    intro: ['German uses the 26 letters of English plus four of its own: <b>ä, ö, ü</b> and <b>ß</b>. It is the most widely spoken first language in the European Union, with about 95 million native speakers.',
      'German is pronounced very much as it is written. Once you know what each letter and letter group does, you can read any word aloud, however long.'],
    facts: ['26 letters + ä ö ü ß', 'Every noun has a capital letter', 'Stress is usually on the first syllable'],
    hint: '<b>CAPS</b> = stressed syllable. <b>kh</b> = "ch" in Scottish loch. <b>ü</b> = "ee" with rounded lips. <b>œ</b> = "e" in bed with rounded lips.',
    groups: [['vowels', 'Vowels and umlauts', 'Each vowel is either long or short. The two dots (umlaut) move the sound forward in the mouth.'],
      ['pairs', 'Vowel pairs', 'Two letters, one fixed sound. These never vary.'],
      ['cons', 'Consonants that differ', 'The letters that do not do what an English speaker expects.']],
    cards: [
      ['A','a','ah','like “a” in father','Vater','FAH-ter','father','vowels'],
      ['E','e','ay / eh','long: like “ay” in say. Short: like “e” in bed','gehen','GAY-en','to go','vowels'],
      ['I','i','ee / ih','long: “ee”. Short: like “i” in sit','Kind','KINT','child','vowels'],
      ['O','o','oh','like “o” in go, cut short','Brot','BROHT','bread','vowels'],
      ['U','u','oo','like “oo” in food','gut','GOOT','good','vowels'],
      ['Ä','ä','eh','like “e” in bed','Mädchen','MAYT-khen','girl','vowels'],
      ['Ö','ö','œ','say “e” as in bed and round your lips','schön','SHŒN','beautiful','vowels'],
      ['Ü','ü','ü','say “ee” and round your lips','Tür','TÜR','door','vowels'],
      ['ei','','eye','like “eye”','mein','MINE','my','pairs'],
      ['ie','','ee','like “ee” in see','Liebe','LEE-buh','love','pairs'],
      ['eu','äu','oy','like “oy” in boy','heute','HOY-tuh','today','pairs'],
      ['au','','ow','like “ow” in now','Haus','HOWS','house','pairs'],
      ['ch','(a o u)','kh','after a, o, u: rough, like Scottish loch','Buch','BOOKH','book','cons'],
      ['ch','(e i)','kh (soft)','after e, i and consonants: a soft hiss, like “h” in huge','ich','IKH','I','cons'],
      ['sch','','sh','like “sh” in shoe','Schule','SHOO-luh','school','cons'],
      ['st','sp','sht / shp','at the start of a word: “sht”, “shp”','Straße','SHTRAH-suh','street','cons'],
      ['J','j','y','like “y” in yes','ja','YAH','yes','cons'],
      ['V','v','f','usually “f”','Vogel','FOH-gel','bird','cons'],
      ['W','w','v','like “v” in very','Wasser','VAH-ser','water','cons'],
      ['Z','z','ts','like “ts” in cats','Zeit','TSITE','time','cons'],
      ['S','s','z / s','“z” before a vowel, “s” at the end','Sonne','ZON-uh','sun','cons'],
      ['ß','','ss','always a sharp “s”; follows a long vowel','heiß','HICE','hot','cons'],
      ['R','r','r','made in the throat; at the end of a word it fades to “uh”','rot','ROHT','red','cons'],
      ['qu','','kv','like “kv”','Quelle','KVEL-uh','source; spring','cons'],
      ['pf','','pf','both letters, said together','Apfel','AHP-fel','apple','cons'],
      ['b d g','(final)','p t k','at the end of a word they harden to p, t, k','Tag','TAHK','day','cons']
    ],
    tipsTitle: 'Four rules that make it click',
    tips: [
      ['Long or short?', 'A vowel is <b>short</b> before a double consonant (<code>Bett</code>, <code>kommen</code>) and <b>long</b> before a single one, when doubled, or before h (<code>Tag</code>, <code>Boot</code>, <code>Jahr</code>).'],
      ['Silent h', 'After a vowel, <code>h</code> is not pronounced. It only makes the vowel long: <code>gehen</code> is GAY-en.'],
      ['Every noun is capitalised', '<code>das Haus</code>, <code>die Zeit</code>, <code>der Hund</code>. It makes nouns easy to spot in a sentence.'],
      ['Long words are short words joined', 'Read them piece by piece from the left. The last piece is the main noun: <code>Hand|schuh</code> (hand-shoe) is a glove.']
    ],
    practiceNote: 'Each of these looks like its English cousin. Say it the German way, then tap to check.',
    practice: [['Hand','HAHNT','hand'],['Finger','FING-er','finger'],['Winter','VIN-ter','winter'],['Butter','BOO-ter','butter'],['Musik','moo-ZEEK','music'],['Telefon','TAY-leh-fohn','telephone'],['Kindergarten','KIN-der-gar-ten','kindergarten'],['wunderbar','VOON-der-bar','wonderful'],['Universität','oo-nee-vehr-zee-TAYT','university'],['Schokolade','shoh-koh-LAH-duh','chocolate'],['Zentrum','TSEN-troom','centre'],['Volkswagen','FOLKS-vah-gen','"people\'s car"']]
  },

  words: {
    tab: 'Core Words', level: 'Beginner',
    h: 'Core Words: <span>die wichtigsten Wörter</span>',
    intro: ['The words that carry everyday conversation, each with a sentence to show it at work. Nouns are listed with their article: learn them together.'],
    cats: [['expressions','Common expressions'],['people','People & pronouns'],['questions','Question words'],['time','Time'],['numbers','Numbers'],['food','Food & drink'],['places','Places & things'],['verbs','Verbs'],['adjectives','Adjectives']],
    list: [
      ['hallo','interj','HAH-loh','hello','Hallo, wie geht\'s?','HAH-loh, vee GAYTS?','Hello, how are you?','expressions'],
      ['guten Tag','phr','GOO-ten TAHK','good day','Guten Tag, Herr Müller.','GOO-ten TAHK, hehr MÜ-ler.','Good day, Mr Müller.','expressions'],
      ['tschüss','interj','CHÜSS','bye','Tschüss, bis morgen!','CHÜSS, bis MOR-gen!','Bye, see you tomorrow!','expressions'],
      ['auf Wiedersehen','phr','owf VEE-der-zayn','goodbye','Auf Wiedersehen und danke.','owf VEE-der-zayn oont DAHN-kuh.','Goodbye and thank you.','expressions'],
      ['danke','interj','DAHN-kuh','thank you','Vielen Dank!','FEE-len DAHNK!','Thank you very much!','expressions'],
      ['bitte','interj','BIT-uh',"please; you're welcome",'Einen Kaffee, bitte.','INE-en KAH-fay, BIT-uh.','A coffee, please.','expressions'],
      ['ja','adv','YAH','yes','Ja, natürlich.','YAH, nah-TÜR-likh.','Yes, of course.','expressions'],
      ['nein','adv','NINE','no','Nein, danke.','NINE, DAHN-kuh.','No, thank you.','expressions'],
      ['Entschuldigung','interj','ent-SHOOL-dih-goong','excuse me; sorry','Entschuldigung, wo ist die Toilette?','ent-SHOOL-dih-goong, voh ist dee toy-LET-uh?','Excuse me, where is the toilet?','expressions'],
      ['ich verstehe nicht','phr','ikh fehr-SHTAY-uh nikht',"I don't understand",'Es tut mir leid, ich verstehe nicht.','es toot meer LITE, ikh fehr-SHTAY-uh nikht.',"I'm sorry, I don't understand.",'expressions'],
      ['ich','pron','IKH','I','Ich bin Student.','ikh bin shtoo-DENT.','I am a student.','people'],
      ['du','pron','DOO','you (informal)','Sprichst du Englisch?','SHPRIKHST doo ENG-lish?','Do you speak English?','people'],
      ['er / sie','pron','EHR / ZEE','he / she','Sie ist meine Schwester.','zee ist MINE-uh SHVES-ter.','She is my sister.','people'],
      ['wir','pron','VEER','we','Wir wohnen hier.','veer VOH-nen HEER.','We live here.','people'],
      ['Sie','pron','ZEE','you (polite)','Sprechen Sie Deutsch?','SHPREKH-en zee DOYCH?','Do you speak German?','people'],
      ['der Freund','n · masc','FROYNT','friend','Er ist mein bester Freund.','ehr ist mine BES-ter FROYNT.','He is my best friend.','people'],
      ['die Familie','n · fem','fah-MEE-lee-uh','family','Meine Familie ist groß.','MINE-uh fah-MEE-lee-uh ist GROHS.','My family is big.','people'],
      ['der Mann / die Frau','n','MAHN / FROW','man / woman','ein Mann und eine Frau','ine MAHN oont INE-uh FROW','a man and a woman','people'],
      ['das Kind','n · neut','KINT','child','Die Kinder spielen.','dee KIN-der SHPEE-len.','The children are playing.','people'],
      ['was','pron','VAHS','what','Was ist das?','vahs ist DAHS?','What is that?','questions'],
      ['wer','pron','VEHR','who','Wer ist da?','vehr ist DAH?','Who is there?','questions'],
      ['wo','adv','VOH','where','Wo wohnst du?','voh VOHNST doo?','Where do you live?','questions'],
      ['wann','adv','VAHN','when','Wann kommst du?','vahn KOMST doo?','When are you coming?','questions'],
      ['warum','adv','vah-ROOM','why','Warum nicht?','vah-ROOM nikht?','Why not?','questions'],
      ['wie','adv','VEE','how','Wie heißt du?','vee HYST doo?','What is your name?','questions'],
      ['wie viel','adv','vee FEEL','how much','Wie viel kostet das?','vee feel KOS-tet dahs?','How much does that cost?','questions'],
      ['heute','adv','HOY-tuh','today','Heute ist es warm.','HOY-tuh ist es VARM.','It is warm today.','time'],
      ['morgen','adv','MOR-gen','tomorrow','Bis morgen!','bis MOR-gen!','See you tomorrow!','time'],
      ['gestern','adv','GES-tern','yesterday','Gestern hat es geregnet.','GES-tern haht es guh-RAYG-net.','It rained yesterday.','time'],
      ['jetzt','adv','YETST','now','Ich bin jetzt zu Hause.','ikh bin yetst tsoo HOW-zuh.','I am at home now.','time'],
      ['der Tag','n · masc','TAHK','day','den ganzen Tag','dayn GAHN-tsen TAHK','all day','time'],
      ['die Woche','n · fem','VOKH-uh','week','nächste Woche','NAYKH-stuh VOKH-uh','next week','time'],
      ['das Jahr','n · neut','YAHR','year','Frohes neues Jahr!','FROH-es NOY-es YAHR!','Happy New Year!','time'],
      ['die Uhr','n · fem','OOR','clock; o\'clock','Wie viel Uhr ist es?','vee feel OOR ist es?','What time is it?','time'],
      ['eins','num','INES','one','ein Kaffee','ine KAH-fay','one coffee','numbers'],
      ['zwei','num','TSVY','two','zwei Bier','tsvy BEER','two beers','numbers'],
      ['drei','num','DRY','three','drei Tage','dry TAH-guh','three days','numbers'],
      ['vier','num','FEER','four','vier Personen','feer pehr-ZOH-nen','four people','numbers'],
      ['fünf','num','FÜNF','five','fünf Minuten','fünf mee-NOO-ten','five minutes','numbers'],
      ['sechs','num','ZEKS','six','sechs Monate','zeks MOH-nah-tuh','six months','numbers'],
      ['sieben','num','ZEE-ben','seven','sieben Tage','ZEE-ben TAH-guh','seven days','numbers'],
      ['acht','num','AHKHT','eight','um acht Uhr','oom ahkht OOR','at eight o\'clock','numbers'],
      ['neun','num','NOYN','nine','neun Euro','noyn OY-roh','nine euros','numbers'],
      ['zehn','num','TSAYN','ten','zehn Jahre','tsayn YAH-ruh','ten years','numbers'],
      ['hundert','num','HOON-dert','one hundred','hundert Prozent','HOON-dert proh-TSENT','one hundred percent','numbers'],
      ['das Wasser','n · neut','VAH-ser','water','ein Glas Wasser','ine glahs VAH-ser','a glass of water','food'],
      ['der Kaffee','n · masc','KAH-fay','coffee','Kaffee mit Milch','KAH-fay mit MILKH','coffee with milk','food'],
      ['das Brot','n · neut','BROHT','bread','Brot mit Käse','broht mit KAY-zuh','bread with cheese','food'],
      ['das Fleisch','n · neut','FLYSH','meat','Ich esse kein Fleisch.','ikh ES-uh kine FLYSH.','I do not eat meat.','food'],
      ['der Fisch','n · masc','FISH','fish','Fisch und Reis','fish oont RICE','fish and rice','food'],
      ['der Käse','n · masc','KAY-zuh','cheese','ein Stück Käse','ine shtük KAY-zuh','a piece of cheese','food'],
      ['das Bier','n · neut','BEER','beer','Ein Bier, bitte.','ine BEER, BIT-uh.','A beer, please.','food'],
      ['die Rechnung','n · fem','REKH-noong','bill','Die Rechnung, bitte.','dee REKH-noong, BIT-uh.','The bill, please.','food'],
      ['das Haus','n · neut','HOWS','house','Ich bin zu Hause.','ikh bin tsoo HOW-zuh.','I am at home.','places'],
      ['die Arbeit','n · fem','AR-bite','work','Ich gehe zur Arbeit.','ikh GAY-uh tsoor AR-bite.','I am going to work.','places'],
      ['die Stadt','n · fem','SHTAHT','city; town','eine große Stadt','INE-uh GROH-suh SHTAHT','a big city','places'],
      ['die Straße','n · fem','SHTRAH-suh','street','in dieser Straße','in DEE-zer SHTRAH-suh','in this street','places'],
      ['das Geschäft','n · neut','guh-SHEFT','shop','Das Geschäft ist geschlossen.','dahs guh-SHEFT ist guh-SHLOS-en.','The shop is closed.','places'],
      ['das Geld','n · neut','GELT','money','Ich habe kein Geld.','ikh HAH-buh kine GELT.','I have no money.','places'],
      ['das Buch','n · neut','BOOKH','book','ein interessantes Buch','ine in-teh-reh-SAHN-tes BOOKH','an interesting book','places'],
      ['sein','v','ZINE','to be','Ich bin müde.','ikh bin MÜ-duh.','I am tired.','verbs'],
      ['haben','v','HAH-ben','to have','Ich habe zwei Brüder.','ikh HAH-buh tsvy BRÜ-der.','I have two brothers.','verbs'],
      ['machen','v','MAHKH-en','to do; to make','Was machst du?','vahs MAHKHST doo?','What are you doing?','verbs'],
      ['gehen','v','GAY-en','to go','Ich gehe nach Hause.','ikh GAY-uh nahkh HOW-zuh.','I am going home.','verbs'],
      ['wollen','v','VOL-en','to want','Ich will schlafen.','ikh vil SHLAH-fen.','I want to sleep.','verbs'],
      ['können','v','KŒN-en','can; to be able','Kannst du mir helfen?','kahnst doo meer HEL-fen?','Can you help me?','verbs'],
      ['sprechen','v','SHPREKH-en','to speak','Ich spreche ein bisschen Deutsch.','ikh SHPREKH-uh ine BIS-khen DOYCH.','I speak a little German.','verbs'],
      ['essen','v','ES-en','to eat','Wir essen um zwölf.','veer ES-en oom TSVŒLF.','We eat at twelve.','verbs'],
      ['wissen','v','VIS-en','to know (a fact)','Ich weiß nicht.','ikh VICE nikht.','I do not know.','verbs'],
      ['mögen','v','MŒ-gen','to like','Ich mag Kaffee.','ikh mahk KAH-fay.','I like coffee.','verbs'],
      ['gut','adj','GOOT','good','ein guter Tag','ine GOO-ter TAHK','a good day','adjectives'],
      ['schlecht','adj','SHLEKHT','bad','schlechtes Wetter','SHLEKH-tes VET-er','bad weather','adjectives'],
      ['groß','adj','GROHS','big; tall','ein großes Haus','ine GROH-ses HOWS','a big house','adjectives'],
      ['klein','adj','KLINE','small','ein kleiner Hund','ine KLINE-er HOONT','a small dog','adjectives'],
      ['neu','adj','NOY','new','ein neues Auto','ine NOY-es OW-toh','a new car','adjectives'],
      ['alt','adj','AHLT','old','ein alter Freund','ine AHL-ter FROYNT','an old friend','adjectives'],
      ['einfach / schwer','adj','INE-fahkh / SHVEHR','easy / difficult','Das ist einfach.','dahs ist INE-fahkh.','That is easy.','adjectives'],
      ['heiß / kalt','adj','HICE / KAHLT','hot / cold','kaltes Wasser','KAHL-tes VAH-ser','cold water','adjectives']
    ]
  },

  grammar: {
    tab: 'Grammar Basics', level: 'Intermediate',
    h: 'Grammar Basics: <span>die Grammatik</span>',
    intro: ['Fourteen rules that explain most of what you will meet. German grammar has a reputation, but it is mostly two ideas: nouns show their job with a case, and the verb has a fixed place.'],
    units: [
      { t: 'Nouns', p: 'Three genders, four cases. The article does most of the work.', rules: [
        ['Three genders', 'Das Genus', 'der (masculine), die (feminine), das (neuter). Plural is always die.', [
          'Gender belongs to the word, not the thing: <b>das Mädchen</b> (the girl) is neuter. Learn every noun with its article.',
          ['x', ['der Tisch', 'dehr TISH', 'the table (masc)'], ['die Lampe', 'dee LAHM-puh', 'the lamp (fem)'], ['das Buch', 'dahs BOOKH', 'the book (neut)']],
          ['tip', 'Endings that give it away', '<b>-ung, -heit, -keit, -schaft, -ion</b>: always <b>die</b>. <b>-chen, -lein</b>: always <b>das</b>. <b>-er</b> for people, days, months, seasons: <b>der</b>.']]],
        ['Plurals', 'Der Plural', 'No single rule. Five common patterns.', [
          ['tb', ['Pattern', 'Example'], ['-e (often with umlaut)', 'der Tag → die Tage; die Stadt → die Städte'], ['-er (with umlaut)', 'das Kind → die Kinder; das Buch → die Bücher'], ['-(e)n', 'die Frau → die Frauen; die Lampe → die Lampen'], ['no change (or just umlaut)', 'der Lehrer → die Lehrer; der Vater → die Väter'], ['-s (borrowed words)', 'das Auto → die Autos']]]],
        ['The four cases', 'Die Fälle', 'A case shows what job the noun does. The article changes to mark it.', [
          ['tb', ['Case', 'Job', 'Masc', 'Fem', 'Neut', 'Plural'], ['Nominative', 'the subject', 'der', 'die', 'das', 'die'], ['Accusative', 'the direct object', '<b>den</b>', 'die', 'das', 'die'], ['Dative', 'the receiver ("to, for")', 'dem', 'der', 'dem', 'den + n'], ['Genitive', 'the owner ("of")', 'des + s', 'der', 'des + s', 'der']],
          ['x', ['Der Mann sieht den Hund.', 'dehr MAHN zeet dayn HOONT', 'The man sees the dog.'], ['Ich gebe dem Kind das Buch.', 'ikh GAY-buh daym KINT dahs BOOKH', 'I give the child the book.'], ['das Auto des Mannes', 'dahs OW-toh des MAH-nes', 'the man\'s car']],
          ['note', 'Good news', 'In the accusative, only the masculine changes (der → den). Feminine, neuter and plural look the same as the nominative.']]],
        ['Prepositions pick a case', 'Präpositionen', 'Each preposition forces a case on the noun after it.', [
          ['tb', ['Always accusative', 'Always dative', 'Either: accusative for movement to, dative for location'], ['für, ohne, durch, gegen, um', 'mit, nach, bei, von, zu, aus, seit', 'in, an, auf, über, unter, vor, hinter, neben, zwischen']],
          ['x', ['Ich gehe in die Stadt.', 'ikh GAY-uh in dee SHTAHT', 'I am going into town. (movement: accusative)'], ['Ich bin in der Stadt.', 'ikh bin in dehr SHTAHT', 'I am in town. (location: dative)']]]]
      ]},
      { t: 'Verbs and word order', p: 'The verb\'s position is the backbone of every German sentence.', rules: [
        ['du and Sie', 'Du oder Sie', 'du for friends, family and children. Sie (capital S) for adults you do not know well.', [
          '<b>Sie</b> takes the same verb form as "they". When in doubt with a stranger, use Sie.',
          ['x', ['Wie heißt du?', 'vee HYST doo?', 'What is your name? (informal)'], ['Wie heißen Sie?', 'vee HY-sen zee?', 'What is your name? (polite)']]]],
        ['Present tense', 'Das Präsens', 'Drop -en, add -e, -st, -t, -en, -t, -en.', [
          ['tb', ['', 'machen (do)', 'sein (be)', 'haben (have)'], ['ich', 'mache', 'bin', 'habe'], ['du', 'machst', 'bist', 'hast'], ['er, sie, es', 'macht', 'ist', 'hat'], ['wir', 'machen', 'sind', 'haben'], ['ihr', 'macht', 'seid', 'habt'], ['sie, Sie', 'machen', 'sind', 'haben']],
          'One form covers "I do", "I am doing" and often "I will do". Some strong verbs change their vowel for <b>du</b> and <b>er</b>: sprechen → du sprichst; fahren → er fährt.']],
        ['The verb comes second', 'Verbzweitstellung', 'In a statement, the conjugated verb is always the second element.', [
          'You can start with almost anything. Whatever you start with, the verb follows at once, and the subject moves behind it if needed.',
          ['x', ['Ich gehe heute ins Kino.', 'ikh GAY-uh HOY-tuh ins KEE-noh', 'I am going to the cinema today.'], ['Heute gehe ich ins Kino.', 'HOY-tuh GAY-uh ikh ins KEE-noh', 'Today I am going to the cinema.']]]],
        ['Questions and "not"', 'Fragen und Verneinung', 'Yes/no questions start with the verb. nicht negates verbs; kein negates nouns.', [
          ['x', ['Kommst du mit?', 'KOMST doo MIT?', 'Are you coming along?'], ['Ich komme nicht.', 'ikh KOM-uh NIKHT', 'I am not coming.'], ['Ich habe kein Auto.', 'ikh HAH-buh kine OW-toh', 'I have no car.']]]],
        ['Modal verbs push the other verb to the end', 'Modalverben', 'können, müssen, wollen, sollen, dürfen, mögen.', [
          ['tb', ['', 'können (can)', 'müssen (must)', 'wollen (want)'], ['ich, er', 'kann', 'muss', 'will'], ['du', 'kannst', 'musst', 'willst'], ['wir, sie', 'können', 'müssen', 'wollen']],
          ['x', ['Ich kann gut schwimmen.', 'ikh kahn goot SHVIM-en', 'I can swim well.'], ['Wir müssen jetzt gehen.', 'veer MÜS-en yetst GAY-en', 'We must go now.']]]],
        ['Separable verbs', 'Trennbare Verben', 'The prefix splits off and goes to the end.', [
          ['x', ['aufstehen → Ich stehe um sieben auf.', 'ikh SHTAY-uh oom ZEE-ben OWF', 'to get up → I get up at seven.'], ['anrufen → Ich rufe dich an.', 'ikh ROO-fuh dikh AHN', 'to call → I will call you.']],
          'Common separable prefixes: <b>an-, auf-, aus-, ein-, mit-, zu-, zurück-</b>. They carry the stress.']]
      ]},
      { t: 'Past, future and longer sentences', p: 'Spoken German uses one past tense for nearly everything.', rules: [
        ['The spoken past: Perfekt', 'Das Perfekt', 'haben or sein in second place, past participle at the end.', [
          'Participle: <b>ge- + stem + -t</b> (gemacht) for regular verbs, <b>ge- + stem + -en</b> (gegangen) for strong ones.',
          ['x', ['Ich habe gegessen.', 'ikh HAH-buh guh-GES-en', 'I ate / I have eaten.'], ['Wir haben einen Film gesehen.', 'veer HAH-ben INE-en FILM guh-ZAY-en', 'We watched a film.'], ['Sie ist nach Berlin gefahren.', 'zee ist nahkh behr-LEEN guh-FAH-ren', 'She went to Berlin. (movement: sein)']],
          ['note', 'haben or sein?', 'Use <b>sein</b> for movement from A to B and changes of state (gehen, kommen, fahren, werden, sterben), plus <b>sein</b> and <b>bleiben</b>. Everything else takes <b>haben</b>.']]],
        ['war and hatte', 'Das Präteritum', 'For "was" and "had", German uses the simple past even in speech.', [
          ['tb', ['', 'sein', 'haben'], ['ich, er', 'war', 'hatte'], ['du', 'warst', 'hattest'], ['wir, sie', 'waren', 'hatten']],
          ['x', ['Ich war müde.', 'ikh vahr MÜ-duh', 'I was tired.'], ['Wir hatten keine Zeit.', 'veer HAH-ten KINE-uh TSITE', 'We had no time.']]]],
        ['The future', 'Das Futur', 'Usually just the present plus a time word. Formal: werden + infinitive at the end.', [
          ['x', ['Ich komme morgen.', 'ikh KOM-uh MOR-gen', 'I am coming tomorrow.'], ['Es wird regnen.', 'es veert RAYG-nen', 'It will rain.']]]],
        ['Subordinate clauses: verb last', 'Nebensätze', 'After weil, dass, wenn, ob, the conjugated verb goes to the very end.', [
          ['x', ['Ich bleibe zu Hause, weil ich krank bin.', 'ikh BLY-buh tsoo HOW-zuh, vile ikh KRAHNK bin', 'I am staying home because I am ill.'], ['Ich weiß, dass er kommt.', 'ikh VICE, dahs ehr KOMT', 'I know that he is coming.']],
          ['warn', 'Compare', '<b>denn</b> also means "because" but does not move the verb: <b>…, denn ich bin krank</b>.']]]
      ]}
    ]
  },

  reading: {
    tab: 'Reading & Pronunciation', level: 'Advanced',
    h: 'Reading real German: <span>Goethe and Kafka</span>',
    intro: ['Short original texts, read line by line with pronunciation and a plain translation. Start with the proverbs, then one of the most famous short poems in the language, then the opening of Kafka\'s Metamorphosis.'],
    rulesTitle: 'How it is really pronounced',
    rules: [
      ['Final devoicing', 'b, d, g, s at the end of a word or syllable harden to p, t, k, s.', [['Hund', 'HOONT'], ['Weg', 'VAYK'], ['halb', 'HAHLP']]],
      ['The fading r', 'After a vowel, r turns into a short "uh". -er at the end of a word is one weak vowel.', [['Wasser', 'VAH-suh'], ['hier', 'HEE-uh']]],
      ['The glottal stop', 'A word or syllable that begins with a vowel starts with a tiny catch in the throat. Words do not run together as in French.', [['ein Apfel', 'ine | AHP-fel'], ['beenden', 'buh | EN-den']]],
      ['Two kinds of ch', 'Rough after a, o, u, au. Soft everywhere else.', [['Nacht', 'NAHKHT'], ['nicht', 'NIKHT']]]
    ],
    excerpts: [
      { ref: 'Traditional proverbs', title: 'Four sayings everyone knows', lvl: 1,
        ctx: 'German proverbs (<b>Sprichwörter</b>) are short and often rhyme.',
        lines: [['Übung macht den Meister.', 'Ü-boong mahkht dayn MICE-ter.', 'Practice makes the master.'],
          ['Aller Anfang ist schwer.', 'AH-ler AHN-fahng ist SHVEHR.', 'Every beginning is hard.'],
          ['Ende gut, alles gut.', 'EN-duh GOOT, AH-les GOOT.', 'All is well that ends well.'],
          ['Morgenstund hat Gold im Mund.', 'MOR-gen-shtoont haht GOLT im MOONT.', 'The morning hour has gold in its mouth. (The early bird catches the worm.)']],
        traps: ['<b>den Meister</b>: accusative masculine, der → den (rule 3).', '<b>Morgenstund, Mund</b>: final d sounds like t.', '<b>im</b> = in + dem (dative).'],
        vocab: [['die Übung', 'Ü-boong', 'practice, exercise'], ['der Anfang', 'AHN-fahng', 'beginning'], ['schwer', 'SHVEHR', 'hard; heavy'], ['der Mund', 'MOONT', 'mouth']] },
      { ref: 'Goethe, "Wandrers Nachtlied" (1780)', title: 'The Wanderer\'s Night Song', lvl: 2,
        ctx: 'Goethe wrote these eight lines on the wall of a mountain hut. Every German speaker knows them. Quiet falls from the hilltops, to the trees, to the birds, and finally to the reader.',
        lines: [['Über allen Gipfeln', 'Ü-ber AH-len GIP-feln', 'Over all the hilltops'],
          ['Ist Ruh,', 'ist ROO,', 'is peace,'],
          ['In allen Wipfeln', 'in AH-len VIP-feln', 'in all the treetops'],
          ['Spürest du', 'SHPÜ-rest doo', 'you feel'],
          ['Kaum einen Hauch;', 'kowm INE-en HOWKH;', 'hardly a breath;'],
          ['Die Vögelein schweigen im Walde.', 'dee FŒ-guh-line SHVY-gen im VAHL-duh.', 'the little birds are silent in the wood.'],
          ['Warte nur, balde', 'VAR-tuh noor, BAHL-duh', 'Only wait: soon'],
          ['Ruhest du auch.', 'ROO-est doo OWKH.', 'you too will rest.']],
        traps: ['<b>spürest, ruhest</b> are older, fuller forms of spürst, ruhst.', '<b>Vögelein</b>: -lein makes a diminutive, "little birds" (always neuter).', '<b>Walde, balde</b>: an old extra -e, kept for the rhyme.', '<b>Hauch, auch</b>: the rough ch after au.'],
        vocab: [['der Gipfel', 'GIP-fel', 'summit'], ['die Ruhe', 'ROO-uh', 'peace, rest'], ['der Wipfel', 'VIP-fel', 'treetop'], ['der Hauch', 'HOWKH', 'breath of air'], ['schweigen', 'SHVY-gen', 'to be silent']] },
      { ref: 'Kafka, Die Verwandlung (1915)', title: 'The opening sentence', lvl: 3,
        ctx: 'One of the most famous first lines in literature, and a perfect example of German word order: the key word, <b>verwandelt</b> (transformed), waits until the very end.',
        lines: [['Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte,', 'ahls GRAY-gor ZAHM-zah INE-es MOR-gens ows OON-roo-ih-gen TROY-men ehr-VAHKH-tuh,', 'When Gregor Samsa woke one morning from uneasy dreams,'],
          ['fand er sich in seinem Bett', 'fahnt ehr zikh in ZINE-em BET', 'he found himself in his bed'],
          ['zu einem ungeheueren Ungeziefer verwandelt.', 'tsoo INE-em OON-guh-hoy-er-en OON-guh-tsee-fer fehr-VAHN-delt.', 'transformed into a monstrous vermin.']],
        traps: ['<b>Als … erwachte</b>: a subordinate clause, so the verb goes last (rule 14).', '<b>fand er</b>: the main clause then starts with its verb, because the whole als-clause counts as position one (rule 7).', '<b>eines Morgens</b>: genitive used for an indefinite time, "one morning".', '<b>ungeheueren</b> is Kafka\'s spelling; today usually <b>ungeheuren</b>.'],
        vocab: [['der Traum', 'TROWM', 'dream'], ['erwachen', 'ehr-VAHKH-en', 'to wake up'], ['ungeheuer', 'OON-guh-hoy-er', 'monstrous, enormous'], ['das Ungeziefer', 'OON-guh-tsee-fer', 'vermin'], ['verwandeln', 'fehr-VAHN-deln', 'to transform']] }
    ]
  },

  sources: [
    ['Duden: Die deutsche Rechtschreibung and online dictionary', 'https://www.duden.de/', 'spelling, gender, plurals, pronunciation'],
    ['Goethe-Institut: Deutsch lernen', 'https://www.goethe.de/de/spr/ueb.html', 'graded practice material'],
    ['DWDS: Digitales Wörterbuch der deutschen Sprache', 'https://www.dwds.de/', 'meanings and usage'],
    ['Goethe, "Wandrers Nachtlied" (Wikisource)', 'https://de.wikisource.org/wiki/Wandrers_Nachtlied', 'the poem'],
    ['Kafka, Die Verwandlung (Projekt Gutenberg-DE)', 'https://www.projekt-gutenberg.org/kafka/verwandl/verwandl.html', 'the 1915 text']
  ]
};
