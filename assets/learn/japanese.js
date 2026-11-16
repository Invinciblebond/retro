/* Learn · Japanese. Rendered by assets/learn.js (kind:'lang').
   Romanisation is Hepburn. A line over a vowel (ā ī ū ē ō) means hold it twice as long. */
window.LEARN = {
  kind: 'lang', id: 'japanese', title: 'Japanese', voice: 'ja-JP|ja', rate: .85,

  sounds: {
    tab: 'Hiragana & Katakana', level: 'Introductory',
    h: 'The two alphabets: <span>ひらがな と カタカナ</span>',
    intro: ['Japanese is written with three scripts mixed together. <b>Hiragana</b> spells grammar and native words. <b>Katakana</b> spells foreign words and names. <b>Kanji</b>, characters borrowed from Chinese, carry the meaning of most nouns and verb stems.',
      'Start with hiragana. It has 46 basic characters, each standing for one syllable, and every Japanese word can be written with it. Each card shows the hiragana large and its katakana twin beside it.'],
    facts: ['46 hiragana · 46 katakana', '5 vowel sounds', 'Each character is one beat'],
    hint: 'The green tag is the sound in Roman letters (<b>rōmaji</b>). Tap a card to hear the sample word. Every syllable gets the same length and weight.',
    groups: [['v', 'The five vowels', 'Short, clean, and always the same. Order: a, i, u, e, o. Every other row is a consonant plus these five.'],
      ['k', 'K row', 'か き く け こ'], ['s', 'S row', 'Note し is "shi", not "si".'], ['t', 'T row', 'Note ち is "chi" and つ is "tsu".'],
      ['n', 'N row', 'な に ぬ ね の'], ['h', 'H row', 'Note ふ is "fu", a soft f made with both lips.'], ['m', 'M row', 'ま み む め も'],
      ['y', 'Y row', 'Only three: ya, yu, yo.'], ['r', 'R row', 'The Japanese r is one quick tap of the tongue, between English r, l and d.'],
      ['w', 'W row and ん', 'わ, the object marker を, and ん, the only consonant that stands alone.']],
    cards: [
      ['あ','ア','a','like “a” in father','あめ','ame','rain','v'],['い','イ','i','like “ee” in see','いぬ','inu','dog','v'],['う','ウ','u','like “oo” in food, lips relaxed','うみ','umi','sea','v'],['え','エ','e','like “e” in bed','えき','eki','station','v'],['お','オ','o','like “o” in more, short','おちゃ','ocha','tea','v'],
      ['か','カ','ka','','かさ','kasa','umbrella','k'],['き','キ','ki','','きた','kita','north','k'],['く','ク','ku','','くち','kuchi','mouth','k'],['け','ケ','ke','','いけ','ike','pond','k'],['こ','コ','ko','','こども','kodomo','child','k'],
      ['さ','サ','sa','','さかな','sakana','fish','s'],['し','シ','shi','like “she”','しお','shio','salt','s'],['す','ス','su','','すし','sushi','sushi','s'],['せ','セ','se','','せかい','sekai','world','s'],['そ','ソ','so','','そら','sora','sky','s'],
      ['た','タ','ta','','たべる','taberu','to eat','t'],['ち','チ','chi','like “chee” in cheese','ちち','chichi','father','t'],['つ','ツ','tsu','like “ts” in cats + u','つき','tsuki','moon','t'],['て','テ','te','','て','te','hand','t'],['と','ト','to','','ともだち','tomodachi','friend','t'],
      ['な','ナ','na','','なまえ','namae','name','n'],['に','ニ','ni','','にく','niku','meat','n'],['ぬ','ヌ','nu','','いぬ','inu','dog','n'],['ね','ネ','ne','','ねこ','neko','cat','n'],['の','ノ','no','','のむ','nomu','to drink','n'],
      ['は','ハ','ha','“wa” when it is the topic particle','はな','hana','flower','h'],['ひ','ヒ','hi','','ひと','hito','person','h'],['ふ','フ','fu','blow through both lips','ふね','fune','boat','h'],['へ','ヘ','he','“e” when it is the direction particle','へや','heya','room','h'],['ほ','ホ','ho','','ほん','hon','book','h'],
      ['ま','マ','ma','','まち','machi','town','m'],['み','ミ','mi','','みず','mizu','water','m'],['む','ム','mu','','むし','mushi','insect','m'],['め','メ','me','','め','me','eye','m'],['も','モ','mo','','もり','mori','forest','m'],
      ['や','ヤ','ya','','やま','yama','mountain','y'],['ゆ','ユ','yu','','ゆき','yuki','snow','y'],['よ','ヨ','yo','','よる','yoru','night','y'],
      ['ら','ラ','ra','','そら','sora','sky','r'],['り','リ','ri','','りんご','ringo','apple','r'],['る','ル','ru','','くるま','kuruma','car','r'],['れ','レ','re','','これ','kore','this','r'],['ろ','ロ','ro','','ろく','roku','six','r'],
      ['わ','ワ','wa','','わたし','watashi','I','w'],['を','ヲ','o','used only as the object particle','','','','w'],['ん','ン','n','like “n” in sing or “m” before b, p, m','ほん','hon','book','w']
    ],
    tipsTitle: 'Six additions that complete the system',
    tips: [
      ['Two dots change the sound', 'Add ゛ and k becomes g, s becomes z, t becomes d, h becomes b: <code>か ka → が ga</code>, <code>は ha → ば ba</code>. A small circle ゜ turns h into p: <code>ぱ pa</code>.'],
      ['Small や ゆ よ', 'A small ゃ ゅ ょ blends with the character before it: <code>きゃ kya</code>, <code>しゅ shu</code>, <code>ちょ cho</code>. One beat, not two.'],
      ['Small っ doubles a consonant', 'A small っ means pause for one beat and double the next consonant: <code>きって kitte</code> (stamp) against <code>きて kite</code> (come).'],
      ['Long vowels', 'A vowel held for two beats changes the word: <code>おばさん obasan</code> (aunt), <code>おばあさん obāsan</code> (grandmother). Katakana marks it with ー: <code>コーヒー kōhī</code>.'],
      ['No stress, even beats', 'English stresses one syllable. Japanese gives every beat the same length and uses rises and falls in pitch.'],
      ['Three particles are spelled oddly', '<code>は</code> is said "wa", <code>へ</code> is said "e" and <code>を</code> is said "o" when they are grammar particles.']
    ],
    practiceNote: 'These are English words in katakana. Read each one aloud, then tap to check.',
    practice: [['コーヒー','kōhī','coffee'],['テレビ','terebi','television'],['ホテル','hoteru','hotel'],['カメラ','kamera','camera'],['タクシー','takushī','taxi'],['レストラン','resutoran','restaurant'],['アメリカ','Amerika','America'],['コンピューター','konpyūtā','computer'],['アイスクリーム','aisukurīmu','ice cream'],['インターネット','intānetto','internet'],['スマホ','sumaho','smartphone'],['パン','pan','bread (from Portuguese)']]
  },

  words: {
    tab: 'Core Words', level: 'Beginner',
    h: 'Core Words: <span>基本の言葉</span>',
    intro: ['The words that carry everyday conversation, written the way you will meet them (with kanji), with the reading in Roman letters underneath. Examples use the polite <b>-masu / desu</b> style, which is safe with everyone.'],
    cats: [['expressions','Common expressions'],['people','People & pronouns'],['questions','Question words'],['time','Time'],['numbers','Numbers'],['food','Food & drink'],['places','Places & things'],['verbs','Verbs'],['adjectives','Adjectives']],
    list: [
      ['こんにちは','phr','konnichiwa','hello; good afternoon','こんにちは、元気ですか。','Konnichiwa, genki desu ka.','Hello, how are you?','expressions'],
      ['おはよう','phr','ohayō','good morning','おはようございます。','Ohayō gozaimasu.','Good morning. (polite)','expressions'],
      ['ありがとう','phr','arigatō','thank you','ありがとうございます。','Arigatō gozaimasu.','Thank you very much.','expressions'],
      ['すみません','phr','sumimasen','excuse me; sorry','すみません、トイレはどこですか。','Sumimasen, toire wa doko desu ka.','Excuse me, where is the toilet?','expressions'],
      ['お願いします','phr','onegai shimasu','please','コーヒーをお願いします。','Kōhī o onegai shimasu.','A coffee, please.','expressions'],
      ['はい','interj','hai','yes','はい、そうです。','Hai, sō desu.','Yes, that is right.','expressions'],
      ['いいえ','interj','iie','no','いいえ、違います。','Iie, chigaimasu.','No, that is not right.','expressions'],
      ['さようなら','phr','sayōnara','goodbye','じゃあ、また明日。','Jā, mata ashita.','Well then, see you tomorrow. (the everyday goodbye)','expressions'],
      ['わかりません','phr','wakarimasen',"I don't understand",'すみません、わかりません。','Sumimasen, wakarimasen.',"Sorry, I don't understand.",'expressions'],
      ['どういたしまして','phr','dō itashimashite',"you're welcome",'いいえ、どういたしまして。','Iie, dō itashimashite.',"Not at all, you're welcome.",'expressions'],
      ['私','pron','watashi','I','私は学生です。','Watashi wa gakusei desu.','I am a student.','people'],
      ['あなた','pron','anata','you','お名前は何ですか。','O-namae wa nan desu ka.','What is your name? (Japanese avoids "you")','people'],
      ['彼 / 彼女','pron','kare / kanojo','he / she','彼女は私の姉です。','Kanojo wa watashi no ane desu.','She is my older sister.','people'],
      ['友達','n','tomodachi','friend','彼は友達です。','Kare wa tomodachi desu.','He is a friend.','people'],
      ['家族','n','kazoku','family','家族は四人です。','Kazoku wa yonin desu.','There are four in my family.','people'],
      ['人','n','hito','person','あの人は誰ですか。','Ano hito wa dare desu ka.','Who is that person?','people'],
      ['子供','n','kodomo','child','子供が二人います。','Kodomo ga futari imasu.','I have two children.','people'],
      ['先生','n','sensei','teacher; doctor','田中先生は親切です。','Tanaka-sensei wa shinsetsu desu.','Mr/Ms Tanaka (the teacher) is kind.','people'],
      ['何','pron','nani / nan','what','これは何ですか。','Kore wa nan desu ka.','What is this?','questions'],
      ['誰','pron','dare','who','誰が来ますか。','Dare ga kimasu ka.','Who is coming?','questions'],
      ['どこ','pron','doko','where','駅はどこですか。','Eki wa doko desu ka.','Where is the station?','questions'],
      ['いつ','adv','itsu','when','いつ行きますか。','Itsu ikimasu ka.','When are you going?','questions'],
      ['どうして','adv','dōshite','why','どうしてですか。','Dōshite desu ka.','Why is that?','questions'],
      ['どう','adv','dō','how','これはどうですか。','Kore wa dō desu ka.','How about this one?','questions'],
      ['いくら','adv','ikura','how much','これはいくらですか。','Kore wa ikura desu ka.','How much is this?','questions'],
      ['今日','n','kyō','today','今日は暑いです。','Kyō wa atsui desu.','It is hot today.','time'],
      ['明日','n','ashita','tomorrow','明日、行きます。','Ashita, ikimasu.','I will go tomorrow.','time'],
      ['昨日','n','kinō','yesterday','昨日は雨でした。','Kinō wa ame deshita.','It rained yesterday.','time'],
      ['今','n','ima','now','今、家にいます。','Ima, ie ni imasu.','I am at home now.','time'],
      ['毎日','n','mainichi','every day','毎日勉強します。','Mainichi benkyō shimasu.','I study every day.','time'],
      ['来週','n','raishū','next week','来週、東京に行きます。','Raishū, Tōkyō ni ikimasu.','Next week I am going to Tokyo.','time'],
      ['今年','n','kotoshi','this year','今年は忙しいです。','Kotoshi wa isogashii desu.','This year is busy.','time'],
      ['時間','n','jikan','time; hour','時間がありません。','Jikan ga arimasen.','There is no time.','time'],
      ['一','num','ichi','one','一つください。','Hitotsu kudasai.','One, please.','numbers'],
      ['二','num','ni','two','二人です。','Futari desu.','Two people.','numbers'],
      ['三','num','san','three','三時です。','Sanji desu.','It is three o\'clock.','numbers'],
      ['四','num','yon / shi','four','四時です。','Yoji desu.','It is four o\'clock.','numbers'],
      ['五','num','go','five','五分待ってください。','Gofun matte kudasai.','Please wait five minutes.','numbers'],
      ['六','num','roku','six','六月です。','Rokugatsu desu.','It is June.','numbers'],
      ['七','num','nana / shichi','seven','七時に起きます。','Shichiji ni okimasu.','I get up at seven.','numbers'],
      ['八','num','hachi','eight','八時に会いましょう。','Hachiji ni aimashō.','Let us meet at eight.','numbers'],
      ['九','num','kyū / ku','nine','九時です。','Kuji desu.','It is nine o\'clock.','numbers'],
      ['十','num','jū','ten','十年です。','Jūnen desu.','It is ten years.','numbers'],
      ['百','num','hyaku','one hundred','百円です。','Hyaku en desu.','It is one hundred yen.','numbers'],
      ['水','n','mizu','water','水をください。','Mizu o kudasai.','Water, please.','food'],
      ['お茶','n','ocha','tea','お茶を飲みます。','Ocha o nomimasu.','I drink tea.','food'],
      ['ご飯','n','gohan','cooked rice; a meal','ご飯を食べましょう。','Gohan o tabemashō.','Let us eat.','food'],
      ['肉','n','niku','meat','肉は食べません。','Niku wa tabemasen.','I do not eat meat.','food'],
      ['魚','n','sakana','fish','魚が好きです。','Sakana ga suki desu.','I like fish.','food'],
      ['おいしい','adj','oishii','delicious','とてもおいしいです。','Totemo oishii desu.','It is very delicious.','food'],
      ['お会計','n','o-kaikei','the bill','お会計をお願いします。','O-kaikei o onegai shimasu.','The bill, please.','food'],
      ['家','n','ie','house; home','家に帰ります。','Ie ni kaerimasu.','I am going home.','places'],
      ['仕事','n','shigoto','work; job','仕事に行きます。','Shigoto ni ikimasu.','I am going to work.','places'],
      ['駅','n','eki','station','駅まで歩きます。','Eki made arukimasu.','I walk to the station.','places'],
      ['店','n','mise','shop','店は閉まっています。','Mise wa shimatte imasu.','The shop is closed.','places'],
      ['お金','n','okane','money','お金がありません。','Okane ga arimasen.','I have no money.','places'],
      ['本','n','hon','book','面白い本です。','Omoshiroi hon desu.','It is an interesting book.','places'],
      ['日本語','n','nihongo','Japanese (language)','日本語を少し話します。','Nihongo o sukoshi hanashimasu.','I speak a little Japanese.','places'],
      ['です','v','desu','is, am, are','学生です。','Gakusei desu.','I am a student.','verbs'],
      ['ある / いる','v','aru / iru','to exist (things / living beings)','猫がいます。','Neko ga imasu.','There is a cat.','verbs'],
      ['する','v','suru','to do','何をしますか。','Nani o shimasu ka.','What will you do?','verbs'],
      ['行く','v','iku','to go','学校に行きます。','Gakkō ni ikimasu.','I go to school.','verbs'],
      ['来る','v','kuru','to come','友達が来ます。','Tomodachi ga kimasu.','A friend is coming.','verbs'],
      ['食べる','v','taberu','to eat','寿司を食べます。','Sushi o tabemasu.','I eat sushi.','verbs'],
      ['飲む','v','nomu','to drink','水を飲みます。','Mizu o nomimasu.','I drink water.','verbs'],
      ['見る','v','miru','to see; to watch','映画を見ます。','Eiga o mimasu.','I watch a film.','verbs'],
      ['話す','v','hanasu','to speak','英語を話しますか。','Eigo o hanashimasu ka.','Do you speak English?','verbs'],
      ['わかる','v','wakaru','to understand','はい、わかりました。','Hai, wakarimashita.','Yes, I understand.','verbs'],
      ['いい','adj','ii','good','いい天気ですね。','Ii tenki desu ne.','Nice weather, isn\'t it?','adjectives'],
      ['悪い','adj','warui','bad','天気が悪いです。','Tenki ga warui desu.','The weather is bad.','adjectives'],
      ['大きい','adj','ōkii','big','大きい家です。','Ōkii ie desu.','It is a big house.','adjectives'],
      ['小さい','adj','chiisai','small','小さい犬です。','Chiisai inu desu.','It is a small dog.','adjectives'],
      ['新しい','adj','atarashii','new','新しい車です。','Atarashii kuruma desu.','It is a new car.','adjectives'],
      ['古い','adj','furui','old (of things)','古い本です。','Furui hon desu.','It is an old book.','adjectives'],
      ['暑い / 寒い','adj','atsui / samui','hot / cold (weather)','今日は寒いです。','Kyō wa samui desu.','It is cold today.','adjectives'],
      ['難しい','adj','muzukashii','difficult','日本語は難しいです。','Nihongo wa muzukashii desu.','Japanese is difficult.','adjectives']
    ]
  },

  grammar: {
    tab: 'Grammar Basics', level: 'Intermediate',
    h: 'Grammar Basics: <span>文法</span>',
    intro: ['Japanese grammar is very regular. There is no gender, no plural, no articles, and verbs do not change for person. The work is done by small tags after each word, called particles, and by the verb at the end.'],
    units: [
      { t: 'How a sentence is built', p: 'The verb goes last. Everything before it is labelled with a particle.', rules: [
        ['The verb comes last', '語順', 'English: I eat sushi. Japanese: I sushi eat.', [
          ['x', ['私は寿司を食べます。', 'Watashi wa sushi o tabemasu.', 'I eat sushi. (I + topic, sushi + object, eat)']],
          'Because particles label each part, the order before the verb is flexible. The verb stays at the end.']],
        ['What Japanese leaves out', '省略', 'No "a" or "the", no plural, no gender, and no pronoun when it is obvious.', [
          ['x', ['本です。', 'Hon desu.', 'It is a book. / They are books.'], ['行きます。', 'Ikimasu.', 'I\'m going. / We\'re going. / She\'s going. (context decides)']],
          ['note', 'Names instead of "you"', 'Use the person\'s name plus <b>さん (-san)</b> where English says "you": <b>田中さんは？</b> "And you, Tanaka-san?" Never add -san to your own name.']]],
        ['です: "is"', 'です', 'A is B: A は B です.', [
          ['tb', ['', 'Polite', 'Meaning'], ['Present', 'です', 'is'], ['Negative', 'じゃありません', 'is not'], ['Past', 'でした', 'was'], ['Past negative', 'じゃありませんでした', 'was not']],
          ['x', ['これはペンです。', 'Kore wa pen desu.', 'This is a pen.'], ['学生じゃありません。', 'Gakusei ja arimasen.', 'I am not a student.']]]],
        ['Questions end in か', '疑問文', 'Add か to a statement. The word order does not change.', [
          ['x', ['学生ですか。', 'Gakusei desu ka.', 'Are you a student?'], ['どこに行きますか。', 'Doko ni ikimasu ka.', 'Where are you going?']],
          'A question word stays in the place where the answer would go.']]
      ]},
      { t: 'Particles', p: 'One or two characters after a word that say what job it does.', rules: [
        ['は and が', 'は・が', 'は marks the topic ("as for…"). が marks the subject, often new or emphasised information.', [
          ['x', ['私は田中です。', 'Watashi wa Tanaka desu.', 'I am Tanaka. (as for me…)'], ['誰が来ましたか。田中さんが来ました。', 'Dare ga kimashita ka. Tanaka-san ga kimashita.', 'Who came? Tanaka came.'], ['私は魚が好きです。', 'Watashi wa sakana ga suki desu.', 'I like fish. (as for me, fish is liked)']],
          ['tip', 'Rule of thumb', 'Use <b>が</b> after question words and to answer them, and with <b>好き</b> (like), <b>ある / いる</b> (there is) and <b>わかる</b> (understand). Otherwise start with <b>は</b>.']]],
        ['The everyday particles', '助詞', 'を, に, で, へ, と, の, も, から, まで.', [
          ['tb', ['Particle', 'Job', 'Example'], ['を o', 'direct object', '水を飲みます (drink water)'], ['に ni', 'destination; point in time; "to" a person', '学校に行きます · 七時に'], ['で de', 'where an action happens; by means of', '家で食べます · バスで'], ['へ e', 'direction', '日本へ行きます'], ['と to', 'and; with', '友達と行きます'], ['の no', 'of; \'s', '私の本 (my book)'], ['も mo', 'also', '私も行きます'], ['から / まで', 'from / until', '九時から五時まで']]]],
        ['There is: あります and います', '存在', 'あります for things. います for people and animals.', [
          ['x', ['机の上に本があります。', 'Tsukue no ue ni hon ga arimasu.', 'There is a book on the desk.'], ['公園に犬がいます。', 'Kōen ni inu ga imasu.', 'There is a dog in the park.'], ['時間がありません。', 'Jikan ga arimasen.', 'I have no time.']]]]
      ]},
      { t: 'Verbs and adjectives', p: 'Verbs do not change for person. They change for tense, negation and politeness.', rules: [
        ['Three verb groups and the ます form', '動詞', 'The polite present. One ending for I, you, he, we, they.', [
          ['tb', ['Group', 'Dictionary form', 'ます form', 'How'], ['1 (u-verbs)', '飲む nomu · 行く iku · 話す hanasu', 'nomimasu · ikimasu · hanashimasu', 'final -u becomes -i, add masu'], ['2 (ru-verbs)', '食べる taberu · 見る miru', 'tabemasu · mimasu', 'drop -ru, add masu'], ['3 (irregular)', 'する suru · 来る kuru', 'shimasu · kimasu', 'learn these two']],
          'The same form covers present and future: <b>行きます</b> is "I go" and "I will go".']],
        ['Negative and past', '否定・過去', 'Four endings cover everything polite.', [
          ['tb', ['', 'Positive', 'Negative'], ['Present / future', '食べます tabemasu', '食べません tabemasen'], ['Past', '食べました tabemashita', '食べませんでした tabemasen deshita']],
          ['x', ['昨日、映画を見ました。', 'Kinō, eiga o mimashita.', 'Yesterday I watched a film.'], ['朝ご飯を食べませんでした。', 'Asagohan o tabemasen deshita.', 'I did not eat breakfast.']]]],
        ['Two kinds of adjective', '形容詞', 'い-adjectives change their own ending. な-adjectives use です.', [
          ['tb', ['', 'い-adjective: 高い takai (expensive)', 'な-adjective: 静か shizuka (quiet)'], ['is', '高いです', '静かです'], ['is not', '高くないです', '静かじゃありません'], ['was', '高かったです', '静かでした'], ['before a noun', '高い本', '静かな町']],
          ['warn', 'One irregular', '<b>いい</b> (good) changes from the older form よい: <b>よくない</b> (not good), <b>よかった</b> (was good).']]],
        ['The て-form', 'て形', 'One form with many uses: requests, ongoing actions, linking.', [
          ['tb', ['Verb', 'て-form'], ['食べる taberu', '食べて tabete'], ['見る miru', '見て mite'], ['飲む nomu', '飲んで nonde'], ['話す hanasu', '話して hanashite'], ['行く iku', '行って itte'], ['する / 来る', 'して shite / 来て kite']],
          ['x', ['待ってください。', 'Matte kudasai.', 'Please wait. (te + kudasai = please do)'], ['今、食べています。', 'Ima, tabete imasu.', 'I am eating now. (te + imasu = -ing)'], ['起きて、コーヒーを飲みます。', 'Okite, kōhī o nomimasu.', 'I get up and drink coffee. (te links actions)']]]],
        ['Wanting and inviting', '願望・勧誘', '-たい = want to. -ましょう = let\'s. -ませんか = won\'t you?', [
          ['x', ['日本に行きたいです。', 'Nihon ni ikitai desu.', 'I want to go to Japan.'], ['行きましょう。', 'Ikimashō.', 'Let\'s go.'], ['一緒に食べませんか。', 'Issho ni tabemasen ka.', 'Won\'t you eat with me? (a polite invitation)']],
          'For -たい, take the ます stem and add たい: tabemasu → tabetai.']]
      ]},
      { t: 'Sounding natural', p: 'Politeness is built into the grammar.', rules: [
        ['Polite and plain speech', '丁寧語・普通形', 'です / ます with strangers and at work. Plain forms with friends and family.', [
          ['tb', ['Polite', 'Plain', 'Meaning'], ['食べます', '食べる', 'eat'], ['食べません', '食べない', 'do not eat'], ['食べました', '食べた', 'ate'], ['学生です', '学生だ', 'am a student']],
          'Above polite speech there is <b>keigo</b>, honorific language for customers and superiors. You will hear it in shops: <b>いらっしゃいませ</b> (welcome).']],
        ['Because, but, and sentence endings', '接続・終助詞', 'から = because. が / けど = but. ね seeks agreement. よ adds emphasis.', [
          ['x', ['高いから、買いません。', 'Takai kara, kaimasen.', 'It is expensive, so I will not buy it.'], ['行きたいですが、時間がありません。', 'Ikitai desu ga, jikan ga arimasen.', 'I want to go, but I have no time.'], ['おいしいですね。', 'Oishii desu ne.', 'It is delicious, isn\'t it?'], ['大丈夫ですよ。', 'Daijōbu desu yo.', 'It is fine, really.']]]]
      ]}
    ]
  },

  reading: {
    tab: 'Reading & Pronunciation', level: 'Advanced',
    h: 'Reading real Japanese: <span>Sōseki and Bashō</span>',
    intro: ['Short original texts, read line by line with the reading in Roman letters and a plain translation. Start with the proverbs, then the most famous haiku, then the opening of Natsume Sōseki\'s novel <i>I Am a Cat</i>.'],
    rulesTitle: 'How it is really pronounced',
    rules: [
      ['Whispered i and u', 'Between voiceless consonants, or at the end after s, the vowels i and u are barely sounded.', [['です', 'des(u)'], ['好き', 's(u)ki'], ['でした', 'desh(i)ta']]],
      ['ん changes with its neighbour', 'It is "m" before b, p, m; "ng" before k, g; a nasal vowel at the end.', [['新聞', 'shimbun'], ['日本語', 'nihongo']]],
      ['Long vowels and double consonants are full beats', 'Tap the rhythm. Each character, including ん, small っ and the second half of a long vowel, is one beat.', [['東京', 'To-o-kyo-o (4 beats)'], ['切手', 'ki-t-te (3 beats)']]],
      ['Pitch, not stress', 'Words are told apart by where the pitch falls.', [['箸', 'HAshi (chopsticks)'], ['橋', 'haSHI (bridge)']]]
    ],
    excerpts: [
      { ref: 'Traditional proverbs', title: 'Four sayings everyone knows', lvl: 1,
        ctx: 'Japanese proverbs (<b>ことわざ</b>) are short and vivid. The third is a four-character idiom from the tea ceremony.',
        lines: [['七転び八起き', 'Nanakorobi yaoki', 'Fall seven times, get up eight.'],
          ['猿も木から落ちる', 'Saru mo ki kara ochiru', 'Even monkeys fall from trees. (Anyone can make a mistake.)'],
          ['一期一会', 'Ichigo ichie', 'One time, one meeting. (Treasure each encounter; it will not come again.)'],
          ['石の上にも三年', 'Ishi no ue ni mo sannen', 'Three years on a stone. (Sit on a cold stone long enough and it warms: persevere.)']],
        traps: ['<b>も</b> means "even" or "also": 猿も, "even monkeys".', '<b>から</b> = from. <b>の上に</b> = on top of.', 'Native number words appear here: <b>nana</b> (seven), <b>ya</b> (eight).'],
        vocab: [['転ぶ', 'korobu', 'to fall over'], ['起きる', 'okiru', 'to get up'], ['猿', 'saru', 'monkey'], ['木', 'ki', 'tree'], ['石', 'ishi', 'stone']] },
      { ref: 'Matsuo Bashō, 1686', title: 'The old pond', lvl: 2,
        ctx: 'The best-known haiku in the language: 17 beats arranged 5, 7, 5. A still scene, a sudden movement, and the sound that follows.',
        lines: [['古池や', 'Furuike ya', 'An old pond:'],
          ['蛙飛びこむ', 'kawazu tobikomu', 'a frog jumps in,'],
          ['水の音', 'mizu no oto', 'the sound of water.']],
        traps: ['<b>や</b> is a "cutting word". It works like a colon or a held breath.', '<b>蛙</b> is read <b>kawazu</b> here, the old poetic word. In daily speech a frog is <b>kaeru</b>.', '<b>水の音</b>: の links two nouns, "water\'s sound".'],
        vocab: [['古い', 'furui', 'old'], ['池', 'ike', 'pond'], ['飛びこむ', 'tobikomu', 'to jump in'], ['音', 'oto', 'sound']] },
      { ref: 'Natsume Sōseki, 吾輩は猫である (1905)', title: 'I Am a Cat: the opening', lvl: 3,
        ctx: 'The narrator is a nameless stray cat who speaks in a grand, pompous style. <b>吾輩 (wagahai)</b> is a lofty old word for "I" that a statesman might use, and <b>である</b> is a formal written "is". The joke is that a kitten is talking this way.',
        lines: [['吾輩は猫である。', 'Wagahai wa neko de aru.', 'I am a cat.'],
          ['名前はまだ無い。', 'Namae wa mada nai.', 'As yet I have no name.'],
          ['どこで生れたかとんと見当がつかぬ。', 'Doko de umareta ka tonto kentō ga tsukanu.', 'I have not the faintest idea where I was born.'],
          ['何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。', 'Nan demo usugurai jimejime shita tokoro de nyānyā naite ita koto dake wa kioku shite iru.', 'All I remember is that I was mewing in some dim, damp place.']],
        traps: ['<b>である</b> is the written form of です / だ.', '<b>無い (nai)</b> is the plain negative of ある: "there is not".', '<b>つかぬ</b> is an older negative; today <b>つかない</b>.', '<b>泣いていた</b>: て-form + いた, "was crying" (rule 11).', '<b>じめじめ</b> and <b>ニャーニャー</b> are sound-symbolic words, which Japanese uses constantly.'],
        vocab: [['吾輩', 'wagahai', 'I (pompous, archaic)'], ['名前', 'namae', 'name'], ['生まれる', 'umareru', 'to be born'], ['薄暗い', 'usugurai', 'dim'], ['記憶', 'kioku', 'memory']] }
    ]
  },

  sources: [
    ['Japan Foundation: Marugoto and JF Standard for Japanese-Language Education', 'https://www.jpf.go.jp/e/project/japanese/', 'the standard beginner syllabus'],
    ['NHK World-Japan: Easy Japanese', 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/', 'free graded lessons with audio'],
    ['Agency for Cultural Affairs: 現代仮名遣い (Modern kana usage)', 'https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gendaikana/', 'official kana spelling rules'],
    ['Jisho.org Japanese-English dictionary', 'https://jisho.org/', 'readings and meanings of every word here'],
    ['夏目漱石「吾輩は猫である」(Aozora Bunko)', 'https://www.aozora.gr.jp/cards/000148/card789.html', 'the 1905 text'],
    ['Matsuo Bashō (Encyclopaedia Britannica)', 'https://www.britannica.com/biography/Basho', 'the poet and the frog haiku']
  ]
};
