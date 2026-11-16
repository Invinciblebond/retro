/* Learn · French. Rendered by assets/learn.js (kind:'lang').
   Pronunciation key: CAPS = stressed syllable · ü = "ee" said with rounded lips ·
   zh = "s" in pleasure · AHN / OHN / AN / UHN = nasal vowels, the n is not sounded. */
window.LEARN = {
  kind: 'lang', id: 'french', title: 'French', voice: 'fr-FR|fr-CA|fr', rate: .85,

  sounds: {
    tab: 'Sounds & Spelling', level: 'Introductory',
    h: 'French sounds: <span>les sons du français</span>',
    intro: ['French uses the same 26 letters as English, plus five accent marks. About 320 million people speak it, on every continent.',
      'French spelling looks hard because many letters are silent. But it is regular: the same letter group nearly always makes the same sound. Learn the groups below and you can read almost any word.'],
    facts: ['26 letters + accents', '4 nasal vowels', 'Final consonants are usually silent'],
    hint: '<b>CAPS</b> = stressed syllable. <b>ü</b> = say "ee" with rounded lips. <b>zh</b> = "s" in pleasure. <b>AHN, OHN, AN, UHN</b> are nasal: air goes through the nose and the n is not sounded.',
    groups: [['vowels', 'Vowels and vowel pairs', 'French vowels are short and pure. Two or three letters together usually make one sound.'],
      ['nasal', 'The nasal vowels', 'A vowel followed by n or m in the same syllable becomes nasal. Do not pronounce the n.'],
      ['cons', 'Consonants that differ', 'Most consonants match English. These do not.']],
    cards: [
      ['a','à â','ah','like “a” in father','chat','SHAH','cat','vowels'],
      ['e','','uh','a weak “uh”; silent at the end of most words','le','LUH','the','vowels'],
      ['é','','ay','like “ay” in say, cut short','café','kah-FAY','coffee','vowels'],
      ['è','ê','eh','like “e” in bed','mère','MEHR','mother','vowels'],
      ['i','î y','ee','like “ee” in see','ami','ah-MEE','friend','vowels'],
      ['o','ô','oh','like “o” in go, cut short','mot','MOH','word','vowels'],
      ['u','û','ü','say “ee” and round your lips tightly','tu','TÜ','you','vowels'],
      ['ou','','oo','like “oo” in food','vous','VOO','you (polite)','vowels'],
      ['oi','','wah','like “wa” in watt','moi','MWAH','me','vowels'],
      ['au','eau','oh','same sound as o','eau','OH','water','vowels'],
      ['ai','ei','eh','like “e” in bed','lait','LEH','milk','vowels'],
      ['eu','œu','uh','like “ur” in fur without the r','bleu','BLUH','blue','vowels'],
      ['an','en am em','AHN','nasal “ah”','enfant','ahn-FAHN','child','nasal'],
      ['on','om','OHN','nasal “oh”','bon','BOHN','good','nasal'],
      ['in','ain ein im','AN','nasal “a” as in sang, without the ng','vin','VAN','wine','nasal'],
      ['un','um','UHN','nasal “uh”; many speakers say it like “in”','lundi','luhn-DEE','Monday','nasal'],
      ['c','ç','k / s','“k” before a, o, u. “s” before e, i. ç is always “s”','garçon','gar-SOHN','boy','cons'],
      ['ch','','sh','like “sh” in shoe','chocolat','shoh-koh-LAH','chocolate','cons'],
      ['g','','g / zh','hard “g” before a, o, u. “zh” before e, i','rouge','ROOZH','red','cons'],
      ['gn','','ny','like “ny” in canyon','montagne','mohn-TAHN-yuh','mountain','cons'],
      ['h','','silent','always silent','homme','OHM','man','cons'],
      ['j','','zh','like “s” in pleasure','je','ZHUH','I','cons'],
      ['ill','','y','after a vowel or in -ille: like “y” in yes','fille','FEE-yuh','girl; daughter','cons'],
      ['qu','','k','like “k”; the u is silent','qui','KEE','who','cons'],
      ['r','','r','made at the back of the throat, like a soft gargle','rue','RÜ','street','cons'],
      ['s','','s / z','“z” between two vowels, otherwise “s”','maison','meh-ZOHN','house','cons'],
      ['th','','t','always “t”','thé','TAY','tea','cons']
    ],
    tipsTitle: 'Four rules that make it click',
    tips: [
      ['Final consonants are silent', 'A consonant at the end of a word is usually not said: <code>petit</code> is puh-TEE, <code>trop</code> is TROH. The common exceptions are <code>c, r, f, l</code> (think "CaReFuL"): <code>avec</code>, <code>pour</code>, <code>neuf</code>, <code>il</code>.'],
      ['Liaison', 'A silent final consonant wakes up before a vowel: <code>les amis</code> is lay-zah-MEE, <code>vous avez</code> is voo-zah-VAY.'],
      ['Stress the last syllable', 'French has no strong word stress. Each phrase rises gently to its last syllable.'],
      ['Elision', '<code>le, la, je, ne, de, que</code> drop their vowel before a vowel or silent h: <code>l\'ami</code>, <code>j\'aime</code>, <code>l\'homme</code>.']
    ],
    practiceNote: 'Each of these is a word you already know in English. Say it the French way, then tap to check.',
    practice: [['restaurant','res-toh-RAHN','restaurant'],['important','an-por-TAHN','important'],['nation','nah-SYOHN','nation'],['musique','mü-ZEEK','music'],['hôtel','oh-TEL','hotel'],['théâtre','tay-AHTR','theatre'],['question','kes-TYOHN','question'],['différent','dee-fay-RAHN','different'],['université','ü-nee-vehr-see-TAY','university'],['orange','oh-RAHNZH','orange'],['champagne','shahn-PAHN-yuh','champagne'],['train','TRAN','train']]
  },

  words: {
    tab: 'Core Words', level: 'Beginner',
    h: 'Core Words: <span>les mots essentiels</span>',
    intro: ['The words that carry everyday conversation, each with a sentence to show it at work. Tap a word or its example to hear it.'],
    cats: [['expressions','Common expressions'],['people','People & pronouns'],['questions','Question words'],['time','Time'],['numbers','Numbers'],['food','Food & drink'],['places','Places & things'],['verbs','Verbs'],['adjectives','Adjectives']],
    list: [
      ['bonjour','interj','bohn-ZHOOR','hello; good day','Bonjour, ça va ?','bohn-ZHOOR, sah VAH?','Hello, how are you?','expressions'],
      ['au revoir','phr','oh ruh-VWAHR','goodbye','Au revoir, à demain.','oh ruh-VWAHR, ah duh-MAN.','Goodbye, see you tomorrow.','expressions'],
      ['merci','interj','mehr-SEE','thank you','Merci beaucoup.','mehr-SEE boh-KOO.','Thank you very much.','expressions'],
      ["s'il vous plaît",'phr','seel voo PLEH','please','Un café, s\'il vous plaît.','uhn kah-FAY, seel voo PLEH.','A coffee, please.','expressions'],
      ['de rien','phr','duh RYAN',"you're welcome",'De rien, monsieur.','duh RYAN, muh-SYUH.',"You're welcome, sir.",'expressions'],
      ['oui','adv','WEE','yes','Oui, bien sûr.','WEE, byan SÜR.','Yes, of course.','expressions'],
      ['non','adv','NOHN','no','Non, merci.','NOHN, mehr-SEE.','No, thank you.','expressions'],
      ['pardon','interj','par-DOHN','sorry; excuse me','Pardon, où sont les toilettes ?','par-DOHN, oo sohn lay twah-LET?','Excuse me, where are the toilets?','expressions'],
      ['je ne comprends pas','phr','zhuh nuh kohn-PRAHN pah',"I don't understand",'Désolé, je ne comprends pas.','day-zoh-LAY, zhuh nuh kohn-PRAHN pah.',"Sorry, I don't understand.",'expressions'],
      ['bonne nuit','phr','bun NWEE','good night','Bonne nuit, à demain.','bun NWEE, ah duh-MAN.','Good night, see you tomorrow.','expressions'],
      ['je','pron','ZHUH','I','Je suis étudiant.','zhuh swee zay-tü-DYAHN.','I am a student.','people'],
      ['tu','pron','TÜ','you (informal)','Tu parles anglais ?','tü parl ahn-GLEH?','Do you speak English?','people'],
      ['il / elle','pron','EEL / EL','he / she','Elle est ma sœur.','el eh mah SUHR.','She is my sister.','people'],
      ['nous','pron','NOO','we','Nous habitons ici.','noo zah-bee-TOHN ee-SEE.','We live here.','people'],
      ['vous','pron','VOO','you (polite or plural)','Vous êtes français ?','voo zet frahn-SEH?','Are you French?','people'],
      ['ami','n · masc','ah-MEE','friend','C\'est mon meilleur ami.','seh mohn meh-YUHR ah-MEE.','He is my best friend.','people'],
      ['famille','n · fem','fah-MEE-yuh','family','Ma famille est grande.','mah fah-MEE-yuh eh GRAHND.','My family is big.','people'],
      ['homme / femme','n','OHM / FAHM','man / woman','Un homme et une femme.','uhn OHM ay ün FAHM.','A man and a woman.','people'],
      ['enfant','n','ahn-FAHN','child','Les enfants jouent.','lay zahn-FAHN ZHOO.','The children are playing.','people'],
      ['quoi','pron','KWAH','what','C\'est quoi ?','seh KWAH?','What is it?','questions'],
      ['qui','pron','KEE','who','Qui est là ?','kee eh LAH?','Who is there?','questions'],
      ['où','adv','OO','where','Où habites-tu ?','oo ah-beet TÜ?','Where do you live?','questions'],
      ['quand','adv','KAHN','when','Quand arrives-tu ?','kahn ah-reev TÜ?','When do you arrive?','questions'],
      ['pourquoi','adv','poor-KWAH','why','Pourquoi pas ?','poor-KWAH pah?','Why not?','questions'],
      ['comment','adv','koh-MAHN','how','Comment tu t\'appelles ?','koh-MAHN tü tah-PEL?','What is your name?','questions'],
      ['combien','adv','kohn-BYAN','how much; how many','C\'est combien ?','seh kohn-BYAN?','How much is it?','questions'],
      ["aujourd'hui",'adv','oh-zhoor-DWEE','today','Il fait chaud aujourd\'hui.','eel feh SHOH oh-zhoor-DWEE.','It is hot today.','time'],
      ['demain','adv','duh-MAN','tomorrow','À demain !','ah duh-MAN!','See you tomorrow!','time'],
      ['hier','adv','YEHR','yesterday','Hier, il a plu.','YEHR, eel ah PLÜ.','It rained yesterday.','time'],
      ['maintenant','adv','mant-NAHN','now','Je suis à la maison maintenant.','zhuh swee ah lah meh-ZOHN mant-NAHN.','I am at home now.','time'],
      ['jour','n · masc','ZHOOR','day','toute la journée','toot lah zhoor-NAY','all day','time'],
      ['semaine','n · fem','suh-MEN','week','la semaine prochaine','lah suh-MEN proh-SHEN','next week','time'],
      ['année','n · fem','ah-NAY','year','Bonne année !','bun ah-NAY!','Happy New Year!','time'],
      ['heure','n · fem','UHR','hour; time','Quelle heure est-il ?','kel UHR eh-TEEL?','What time is it?','time'],
      ['un','num','UHN','one','un café','uhn kah-FAY','one coffee','numbers'],
      ['deux','num','DUH','two','deux bières','duh BYEHR','two beers','numbers'],
      ['trois','num','TRWAH','three','trois jours','trwah ZHOOR','three days','numbers'],
      ['quatre','num','KATR','four','quatre personnes','katr pehr-SUN','four people','numbers'],
      ['cinq','num','SANK','five','cinq minutes','sank mee-NÜT','five minutes','numbers'],
      ['six','num','SEES','six','six mois','see MWAH','six months','numbers'],
      ['sept','num','SET','seven','sept jours','set ZHOOR','seven days','numbers'],
      ['huit','num','WEET','eight','à huit heures','ah wee TUHR','at eight o\'clock','numbers'],
      ['neuf','num','NUHF','nine','neuf euros','nuhf uh-ROH','nine euros','numbers'],
      ['dix','num','DEES','ten','dix ans','dee ZAHN','ten years','numbers'],
      ['cent','num','SAHN','one hundred','cent pour cent','sahn poor SAHN','one hundred percent','numbers'],
      ['eau','n · fem','OH','water','un verre d\'eau','uhn vehr DOH','a glass of water','food'],
      ['pain','n · masc','PAN','bread','du pain et du fromage','dü pan ay dü froh-MAHZH','bread and cheese','food'],
      ['viande','n · fem','VYAHND','meat','Je ne mange pas de viande.','zhuh nuh mahnzh pah duh VYAHND.','I do not eat meat.','food'],
      ['poisson','n · masc','pwah-SOHN','fish','du poisson et du riz','dü pwah-SOHN ay dü REE','fish and rice','food'],
      ['fromage','n · masc','froh-MAHZH','cheese','un plateau de fromages','uhn plah-TOH duh froh-MAHZH','a cheese board','food'],
      ['vin','n · masc','VAN','wine','un verre de vin rouge','uhn vehr duh van ROOZH','a glass of red wine','food'],
      ['addition','n · fem','ah-dee-SYOHN','bill','L\'addition, s\'il vous plaît.','lah-dee-SYOHN, seel voo PLEH.','The bill, please.','food'],
      ['maison','n · fem','meh-ZOHN','house; home','Je suis à la maison.','zhuh swee ah lah meh-ZOHN.','I am at home.','places'],
      ['travail','n · masc','trah-VYE','work; job','Je vais au travail.','zhuh veh oh trah-VYE.','I am going to work.','places'],
      ['ville','n · fem','VEEL','city; town','une grande ville','ün grahnd VEEL','a big city','places'],
      ['rue','n · fem','RÜ','street','dans cette rue','dahn set RÜ','in this street','places'],
      ['magasin','n · masc','mah-gah-ZAN','shop','Le magasin est fermé.','luh mah-gah-ZAN eh fehr-MAY.','The shop is closed.','places'],
      ['argent','n · masc','ar-ZHAHN','money','Je n\'ai pas d\'argent.','zhuh nay pah dar-ZHAHN.','I have no money.','places'],
      ['livre','n · masc','LEEVR','book','un livre intéressant','uhn leevr an-tay-reh-SAHN','an interesting book','places'],
      ['être','v','ETR','to be','Je suis fatigué.','zhuh swee fah-tee-GAY.','I am tired.','verbs'],
      ['avoir','v','ah-VWAHR','to have','J\'ai deux frères.','zhay duh FREHR.','I have two brothers.','verbs'],
      ['faire','v','FEHR','to do; to make','Qu\'est-ce que tu fais ?','kes-kuh tü FEH?','What are you doing?','verbs'],
      ['aller','v','ah-LAY','to go','Je vais à Paris.','zhuh veh ah pah-REE.','I am going to Paris.','verbs'],
      ['vouloir','v','voo-LWAHR','to want','Je voudrais un thé.','zhuh voo-DREH uhn TAY.','I would like a tea.','verbs'],
      ['pouvoir','v','poo-VWAHR','can; to be able','Tu peux m\'aider ?','tü puh meh-DAY?','Can you help me?','verbs'],
      ['parler','v','par-LAY','to speak','Je parle un peu français.','zhuh parl uhn puh frahn-SEH.','I speak a little French.','verbs'],
      ['manger','v','mahn-ZHAY','to eat','Nous mangeons à midi.','noo mahn-ZHOHN ah mee-DEE.','We eat at noon.','verbs'],
      ['savoir','v','sah-VWAHR','to know (a fact)','Je ne sais pas.','zhuh nuh seh PAH.','I do not know.','verbs'],
      ['aimer','v','eh-MAY','to like; to love','J\'aime le café.','zhem luh kah-FAY.','I like coffee.','verbs'],
      ['bon','adj','BOHN','good','un bon repas','uhn bohn ruh-PAH','a good meal','adjectives'],
      ['mauvais','adj','moh-VEH','bad','mauvais temps','moh-veh TAHN','bad weather','adjectives'],
      ['grand','adj','GRAHN','big; tall','une grande maison','ün grahnd meh-ZOHN','a big house','adjectives'],
      ['petit','adj','puh-TEE','small','un petit chien','uhn puh-tee SHYAN','a small dog','adjectives'],
      ['nouveau','adj','noo-VOH','new','une nouvelle voiture','ün noo-VEL vwah-TÜR','a new car','adjectives'],
      ['vieux','adj','VYUH','old','un vieil ami','uhn vyey ah-MEE','an old friend','adjectives'],
      ['facile / difficile','adj','fah-SEEL / dee-fee-SEEL','easy / difficult','C\'est facile.','seh fah-SEEL.','It is easy.','adjectives'],
      ['chaud / froid','adj','SHOH / FRWAH','hot / cold','de l\'eau froide','duh loh FRWAHD','cold water','adjectives']
    ]
  },

  grammar: {
    tab: 'Grammar Basics', level: 'Intermediate',
    h: 'Grammar Basics: <span>la grammaire</span>',
    intro: ['Fifteen rules that explain most of what you will meet. Each one is short and stands by itself. Tap any example to hear it.'],
    units: [
      { t: 'Nouns and describing words', p: 'Every noun is masculine or feminine, and the small words around it change to match.', rules: [
        ['Gender and articles', 'Le genre', 'le / la / les for "the"; un / une / des for "a" and "some".', [
          ['tb', ['', 'the', 'a / some'], ['Masculine', 'le (l\' before a vowel)', 'un'], ['Feminine', 'la (l\' before a vowel)', 'une'], ['Plural', 'les', 'des']],
          ['x', ['le livre', 'luh LEEVR', 'the book'], ['la maison', 'lah meh-ZOHN', 'the house'], ['l\'ami', 'lah-MEE', 'the friend'], ['des livres', 'day LEEVR', 'some books']],
          ['tip', 'Guessing gender', 'Endings help. <b>-tion, -té, -ette, -ie</b> are usually feminine. <b>-age, -ment, -eau, -isme</b> are usually masculine. Always learn a noun with its article.']]],
        ['Plurals', 'Le pluriel', 'Add -s. You write it but do not say it.', [
          'You hear the plural in the article, not the noun: <b>le chat</b> (luh shah) → <b>les chats</b> (lay shah).',
          ['x', ['le chat → les chats', 'lay SHAH', 'the cats'], ['le bateau → les bateaux', 'lay bah-TOH', 'the boats (-eau takes -x)'], ['le journal → les journaux', 'lay zhoor-NOH', 'the newspapers (-al becomes -aux)']]]],
        ['Adjectives agree, and most follow the noun', 'Les adjectifs', 'Add -e for feminine, -s for plural.', [
          ['x', ['un livre vert', 'uhn leevr VEHR', 'a green book'], ['une voiture verte', 'ün vwah-TÜR VEHRT', 'a green car'], ['des livres verts', 'day leevr VEHR', 'green books']],
          'The added <b>-e</b> often makes a silent consonant sound: <b>petit</b> (puh-TEE) → <b>petite</b> (puh-TEET).',
          ['note', 'Before the noun', 'A short list goes in front: beauty, age, goodness, size. <b>un beau jour</b>, <b>un vieux livre</b>, <b>un bon repas</b>, <b>une petite ville</b>.']]],
        ['"Some": du, de la, des', 'Le partitif', 'French marks an unspecified amount where English says nothing.', [
          ['x', ['Je bois du café.', 'zhuh bwah dü kah-FAY', 'I drink (some) coffee.'], ['Je mange de la viande.', 'zhuh mahnzh duh lah VYAHND', 'I eat (some) meat.'], ['Je ne bois pas de café.', 'zhuh nuh bwah pah duh kah-FAY', 'I do not drink coffee. (after a negative: just de)']],
          ['tb', ['de + le', 'de + la', 'de + les', 'à + le', 'à + les'], ['du', 'de la', 'des', 'au', 'aux']]]]
      ]},
      { t: 'Verbs in the present', p: 'French verbs change for each person, but many of the endings sound the same.', rules: [
        ['Pronouns: tu, vous and on', 'Les pronoms', 'je, tu, il/elle/on, nous, vous, ils/elles.', [
          ['tb', ['Pronoun', 'Use'], ['tu', 'one person you know well: friends, family, children'], ['vous', 'one person politely, or any group'], ['on', 'everyday word for "we"; also "people in general". Takes the il/elle verb form.']],
          ['x', ['On y va ?', 'ohn nee VAH?', 'Shall we go?']]]],
        ['Regular -er verbs', 'Le présent', 'Most French verbs end in -er and follow one pattern.', [
          ['tb', ['', 'parler (speak)', 'Sounds like'], ['je', 'parle', 'parl'], ['tu', 'parles', 'parl'], ['il, elle, on', 'parle', 'parl'], ['nous', 'parlons', 'par-LOHN'], ['vous', 'parlez', 'par-LAY'], ['ils, elles', 'parlent', 'parl']],
          'Four of the six forms sound identical. That is why French cannot drop the pronoun.']],
        ['The four verbs you cannot avoid', 'Être, avoir, aller, faire', 'To be, to have, to go, to do. All irregular.', [
          ['tb', ['', 'être', 'avoir', 'aller', 'faire'], ['je', 'suis', 'ai', 'vais', 'fais'], ['tu', 'es', 'as', 'vas', 'fais'], ['il, elle, on', 'est', 'a', 'va', 'fait'], ['nous', 'sommes', 'avons', 'allons', 'faisons'], ['vous', 'êtes', 'avez', 'allez', 'faites'], ['ils, elles', 'sont', 'ont', 'vont', 'font']],
          '<b>Avoir</b> covers age and feelings: <b>J\'ai 30 ans</b> (I am 30), <b>j\'ai faim</b> (I am hungry), <b>j\'ai froid</b> (I am cold).']],
        ['Negation: ne … pas', 'La négation', 'Wrap the verb: ne before, pas after.', [
          ['x', ['Je ne sais pas.', 'zhuh nuh seh PAH', 'I do not know.'], ['Je n\'ai jamais vu ça.', 'zhuh nay zhah-MEH vü SAH', 'I have never seen that.'], ['Il n\'y a rien.', 'eel nyah RYAN', 'There is nothing.']],
          ['note', 'In speech', 'People usually drop the <b>ne</b>: <b>Je sais pas</b>. Write it; expect not to hear it.']]],
        ['Three ways to ask a question', 'Les questions', 'Raise your voice, add est-ce que, or swap verb and pronoun.', [
          ['x', ['Tu parles français ?', 'tü parl frahn-SEH?', 'Casual: voice rises.'], ['Est-ce que tu parles français ?', 'es-kuh tü parl frahn-SEH?', 'Neutral: works everywhere.'], ['Parlez-vous français ?', 'par-lay VOO frahn-SEH?', 'Formal: inversion.']]]]
      ]},
      { t: 'Past and future', p: 'Two past tenses do most of the work. One is for events, one for background.', rules: [
        ['Passé composé: what happened', 'Le passé composé', 'avoir (or être) + past participle.', [
          'Participle: <b>-er → -é</b> (parlé), <b>-ir → -i</b> (fini), <b>-re → -u</b> (vendu).',
          ['x', ['J\'ai mangé.', 'zhay mahn-ZHAY', 'I ate / I have eaten.'], ['Nous avons fini.', 'noo zah-vohn fee-NEE', 'We have finished.'], ['Elle est partie.', 'el eh par-TEE', 'She left. (être; participle agrees)']],
          ['warn', 'Verbs that take être', 'About 17 verbs of movement or change (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…) and all reflexive verbs use <b>être</b>.']]],
        ['Imparfait: how things were', "L'imparfait", '"Was doing" and "used to do".', [
          'Take the <b>nous</b> form, drop <b>-ons</b>, add <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.',
          ['x', ['Quand j\'étais petit, j\'habitais à Lyon.', 'kahn zhay-teh puh-TEE, zhah-bee-teh ah LYOHN', 'When I was little, I lived in Lyon.'], ['Il pleuvait quand je suis sorti.', 'eel pluh-VEH kahn zhuh swee sor-TEE', 'It was raining (background) when I went out (event).']]]],
        ['The future', 'Le futur', 'Everyday: aller + verb. Formal: endings on the infinitive.', [
          ['x', ['Je vais partir.', 'zhuh veh par-TEER', 'I am going to leave.'], ['Je partirai demain.', 'zhuh par-tee-RAY duh-MAN', 'I will leave tomorrow.']],
          ['tb', ['je', 'tu', 'il, elle', 'nous', 'vous', 'ils, elles'], ['parlerai', 'parleras', 'parlera', 'parlerons', 'parlerez', 'parleront']]]]
      ]},
      { t: 'Building longer sentences', p: 'Small words that hold French sentences together.', rules: [
        ['Object pronouns go before the verb', 'Les pronoms objets', 'me, te, le, la, lui, nous, vous, les, leur.', [
          ['x', ['Je le vois.', 'zhuh luh VWAH', 'I see him / it.'], ['Je t\'aime.', 'zhuh TEM', 'I love you.'], ['Je lui parle.', 'zhuh lwee PARL', 'I am speaking to him / her.'], ['Je m\'appelle Marie.', 'zhuh mah-PEL mah-REE', 'My name is Marie. (I call myself Marie.)']]]],
        ['Y and en', 'Y et en', 'y = there, to it. en = of it, some.', [
          ['x', ['J\'y vais.', 'zhee VEH', 'I am going there.'], ['J\'en veux.', 'zhahn VUH', 'I want some.'], ['Il y en a trois.', 'eel yahn nah TRWAH', 'There are three of them.']]]],
        ['Joining ideas: qui, que, parce que', 'Les liaisons', 'qui = who/which as subject. que = whom/which/that as object.', [
          ['x', ['l\'homme qui parle', 'lum kee PARL', 'the man who is speaking'], ['le livre que je lis', 'luh leevr kuh zhuh LEE', 'the book that I am reading'], ['Je reste parce qu\'il pleut.', 'zhuh rest pars-keel PLUH', 'I am staying because it is raining.']]]]
      ]}
    ]
  },

  reading: {
    tab: 'Reading & Pronunciation', level: 'Advanced',
    h: 'Reading real French: <span>La Fontaine and Voltaire</span>',
    intro: ['Short original texts, read line by line with pronunciation and a plain translation. Start with the sayings, then try a fable every French child learns by heart.'],
    rulesTitle: 'How it is really pronounced',
    rules: [
      ['Liaison', 'A normally silent final consonant is sounded when the next word starts with a vowel. S and x sound like "z"; d sounds like "t".', [['les enfants', 'lay zahn-FAHN'], ['un grand homme', 'uhn grahn TOHM']]],
      ['Enchaînement', 'A sounded final consonant always slides onto a following vowel, so words run together.', [['il a', 'ee-LAH'], ['elle est', 'eh-LEH']]],
      ['The disappearing e', 'An unstressed e often drops in speech.', [['samedi', 'sam-DEE'], ['je ne sais pas', 'zhuhn seh PAH']]],
      ['-ent on verbs is silent', 'The plural verb ending -ent is never pronounced.', [['ils parlent', 'eel PARL'], ['elles aiment', 'el ZEM']]]
    ],
    excerpts: [
      { ref: 'Proverbs and one famous sentence', title: 'Five lines everyone knows', lvl: 1,
        ctx: 'Four traditional proverbs and Descartes\'s best-known sentence, from the <b>Discours de la méthode</b> (1637).',
        lines: [['Petit à petit, l\'oiseau fait son nid.', 'puh-tee tah puh-TEE, lwah-ZOH feh sohn NEE.', 'Little by little, the bird builds its nest.'],
          ['Mieux vaut tard que jamais.', 'myuh voh TAR kuh zhah-MEH.', 'Better late than never.'],
          ['L\'habit ne fait pas le moine.', 'lah-BEE nuh feh pah luh MWAHN.', 'The habit does not make the monk. (Do not judge by appearances.)'],
          ['Qui vivra verra.', 'kee vee-VRAH veh-RAH.', 'Who lives will see. (Time will tell.)'],
          ['Je pense, donc je suis.', 'zhuh PAHNS, dohnk zhuh SWEE.', 'I think, therefore I am.']],
        traps: ['<b>petit à petit</b>: liaison, the first t is sounded.', '<b>habit</b>: silent h and silent t: ah-BEE.', '<b>vivra, verra</b> are futures of vivre and voir (rule 12).'],
        vocab: [['oiseau', 'wah-ZOH', 'bird'], ['nid', 'NEE', 'nest'], ['moine', 'MWAHN', 'monk'], ['donc', 'DOHNK', 'therefore, so']] },
      { ref: 'La Fontaine, Fables, I, 1 (1668)', title: 'The Cicada and the Ant', lvl: 2,
        ctx: 'The opening of the first fable in La Fontaine\'s collection. The cicada sang all summer and now has nothing to eat.',
        lines: [['La Cigale, ayant chanté', 'lah see-GAHL, ay-YAHN shahn-TAY', 'The Cicada, having sung'],
          ['Tout l\'été,', 'too lay-TAY,', 'all summer long,'],
          ['Se trouva fort dépourvue', 'suh troo-VAH for day-poor-VÜ', 'found herself quite without supplies'],
          ['Quand la bise fut venue.', 'kahn lah BEEZ fü vuh-NÜ.', 'when the north wind had come.']],
        traps: ['<b>ayant chanté</b>: "having sung", a participle phrase.', '<b>se trouva, fut</b> are in the passé simple, a past tense used only in writing. In speech: s\'est trouvée, a été.', '<b>fort</b> here means "very", an older use.'],
        vocab: [['cigale', 'see-GAHL', 'cicada'], ['été', 'ay-TAY', 'summer'], ['dépourvu', 'day-poor-VÜ', 'lacking, destitute'], ['bise', 'BEEZ', 'cold north wind']] },
      { ref: 'Voltaire, Candide, ch. 1 (1759)', title: 'The opening sentence', lvl: 3,
        ctx: 'Voltaire introduces his innocent hero with a deliberately absurd German name for the castle.',
        lines: [['Il y avait en Westphalie,', 'eel yah-VEH ahn vest-fah-LEE,', 'There was in Westphalia,'],
          ['dans le château de monsieur le baron de Thunder-ten-tronckh,', 'dahn luh shah-TOH duh muh-SYUH luh bah-ROHN duh tün-dehr-ten-TRONK,', 'in the castle of the Baron of Thunder-ten-tronckh,'],
          ['un jeune garçon à qui la nature avait donné', 'uhn zhuhn gar-SOHN ah kee lah nah-TÜR ah-veh doh-NAY', 'a young boy to whom nature had given'],
          ['les mœurs les plus douces.', 'lay muhrs lay plü DOOS.', 'the gentlest of characters.']],
        traps: ['<b>il y avait</b> is the imparfait of <b>il y a</b>, "there is" (rule 11).', '<b>avait donné</b>: "had given", the pluperfect.', '<b>mœurs</b>: œ is the "uh" sound; the final s is sounded by most speakers.', '<b>les plus douces</b>: "the most gentle", superlative with le/la/les plus.'],
        vocab: [['château', 'shah-TOH', 'castle'], ['jeune', 'ZHUHN', 'young'], ['mœurs', 'MUHRS', 'manners, character'], ['doux, douce', 'DOO, DOOS', 'gentle, sweet']] },
      { ref: 'Voltaire, Candide, ch. 30 (1759)', title: 'The last line', lvl: 2,
        ctx: 'After every disaster imaginable, Candide answers his teacher\'s philosophy with one practical sentence.',
        lines: [['« Cela est bien dit, répondit Candide,', 'suh-lah eh byan DEE, ray-pohn-DEE kahn-DEED,', '"That is well said," replied Candide,'],
          ['mais il faut cultiver notre jardin. »', 'meh eel foh kül-tee-VAY notr zhar-DAN.', '"but we must cultivate our garden."']],
        traps: ['<b>il faut</b> + infinitive = "it is necessary to", "one must".', '<b>répondit</b> is passé simple of répondre.', '<b>jardin</b> ends in the nasal AN.'],
        vocab: [['cela', 'suh-LAH', 'that'], ['il faut', 'eel FOH', 'it is necessary'], ['cultiver', 'kül-tee-VAY', 'to cultivate'], ['jardin', 'zhar-DAN', 'garden']] }
    ]
  },

  sources: [
    ['Académie française: Dictionnaire de l\'Académie française', 'https://www.dictionnaire-academie.fr/', 'meanings, genders, spelling'],
    ['CNRTL: Trésor de la langue française informatisé', 'https://www.cnrtl.fr/definition/', 'definitions with phonetic transcription'],
    ['Organisation internationale de la Francophonie: La langue française dans le monde', 'https://www.francophonie.org/la-langue-francaise-dans-le-monde-305', 'number of speakers'],
    ['La Fontaine, Fables, Livre I (Wikisource)', 'https://fr.wikisource.org/wiki/Fables_de_La_Fontaine', 'the 1668 text'],
    ['Voltaire, Candide ou l\'Optimisme (Wikisource)', 'https://fr.wikisource.org/wiki/Candide,_ou_l%E2%80%99Optimisme', 'the 1759 text']
  ]
};
