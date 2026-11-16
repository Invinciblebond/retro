/* Learn · Signs & Symbols (Other fields). Content blocks are rendered by assets/learn.js.
   These lessons describe belief systems and their symbols as history. Where a tradition
   makes a factual claim, the lesson says what the evidence shows. */
window.LEARN = {
  kind: 'course', id: 'signs', title: 'Signs & Symbols',
  lessons: [
    { id: 'numbers', tab: 'Numerology & gematria', level: 'Introductory',
      h: 'Numbers as symbols: <span>numerology and gematria</span>',
      intro: ['For most of history, numbers were not only for counting. They carried meaning. Knowing those meanings lets you read old texts, buildings and art the way their makers intended.',
        'This lesson teaches the systems as history and culture. It also says plainly what they can and cannot do.'],
      facts: ['Pythagoras, 6th century BC', 'Hebrew letters double as numbers', 'No evidence numbers predict character or events'],
      b: [
        '## Where it began',
        'The followers of Pythagoras in ancient Greece taught that number was the hidden structure of everything. They found that musical harmony follows simple ratios (a string half as long sounds an octave higher) and concluded the whole cosmos did too. Their holiest figure was the <b>tetractys</b>: ten dots in a triangle, 1 + 2 + 3 + 4 = 10.',
        '## Numbers you will meet again and again',
        ['tb', ['Number', 'Traditional meaning', 'Where you see it'], ['1', 'Unity, the source', 'One God; the monad'], ['2', 'Duality, opposites', 'Light and dark, yin and yang, the two pillars'], ['3', 'Completeness, harmony', 'Trinity; three degrees; beginning, middle, end'], ['4', 'The material world, stability', 'Four elements, seasons, directions, gospels'], ['5', 'The human being', 'Five senses, five fingers; the pentagram'], ['7', 'The sacred, perfection', 'Seven days, seven classical planets, seven heavens'], ['8', 'Renewal; in China, prosperity', 'Octagonal baptismal fonts; lucky phone numbers'], ['9', 'Completion', 'Three times three; the last digit'], ['12', 'Cosmic order', 'Months, zodiac signs, tribes of Israel, apostles'], ['13', 'Bad luck in the West', 'Missing 13th floors and rows'], ['40', 'A time of trial', 'Forty days of flood; forty years in the desert'], ['108', 'Sacred wholeness in Hinduism and Buddhism', 'Beads on a mala']],
        ['note', 'Meaning depends on culture', 'In Chinese, 8 (bā) sounds like the word for "prosper" and is lucky. 4 (sì) sounds like "death" and is avoided. Neither idea exists in Europe.'],
        '## Modern numerology',
        'The numerology found in books and apps today dates from the early 1900s, not from Pythagoras. It turns names and birth dates into single digits.',
        ['eq', 'Life path number: add every digit of the birth date, repeat until one digit\n14 July 1990  ->  1+4 + 7 + 1+9+9+0  =  31  ->  3+1  =  4\n\nName number: A=1 B=2 ... I=9, then J=1 again, and so on; add and reduce'],
        '## Gematria',
        'Hebrew has no separate numerals: each letter is also a number. So every word has a total, and words with the same total can be linked. This is <b>gematria</b>, used in Jewish interpretation for about two thousand years. The Greek version is called isopsephy.',
        ['tb', ['Letters', 'Values'], ['א ב ג ד ה ו ז ח ט (aleph to tet)', '1 to 9'], ['י כ ל מ נ ס ע פ צ (yod to tsadi)', '10 to 90'], ['ק ר ש ת (qof to tav)', '100, 200, 300, 400']],
        ['kv', ['חי chai, "life" = 18', 'Chet (8) + yod (10). This is why gifts in Jewish tradition are often given in multiples of 18.'], ['666', 'The "number of the beast" in Revelation 13:18. The usual scholarly reading: "Nero Caesar" written in Hebrew letters adds up to 666. Some early manuscripts have 616, which fits the Latin spelling of the name.'], ['888', 'The Greek letters of Ἰησοῦς (Jesus) add up to 888. Early Christians noticed and used it.'], ['Atbash', 'A related letter code: first letter swaps with last, second with second-last. It appears in the Book of Jeremiah.']],
        '## What the evidence says',
        ['ul', 'No controlled test has shown that numerology predicts personality or the future. It is classed as a pseudoscience.', 'It feels accurate because of the <b>Barnum effect</b>: vague, flattering statements seem personal to almost everyone.', 'With enough counting methods, any name can be made to match any number. A match found after the fact proves nothing.', 'As a key to how ancient authors wrote, number symbolism is real and useful. As a way to forecast, it is not.']
      ],
      quiz: [
        ['The tetractys is:', ['Ten dots arranged in a triangle', 'A seven-pointed star', 'A Hebrew letter', 'A magic square'], 0, '1 + 2 + 3 + 4 = 10, sacred to the Pythagoreans.'],
        ['Gematria works because in Hebrew:', ['Each letter is also a number', 'Words are spelled backwards', 'Vowels are numbers', 'Numbers are holy names'], 0, 'So every word has a sum.'],
        ['The Hebrew word chai ("life") has the value:', ['18', '7', '40', '666'], 0, 'Chet 8 + yod 10.'],
        ['Scholars most often link 666 to:', ['The name Nero Caesar in Hebrew letters', 'The year 666', 'The number of angels', 'A printing error'], 0, 'The variant 616 fits another spelling of the same name.'],
        ['Why do numerology readings feel accurate?', ['Vague statements fit almost anyone', 'Numbers control fate', 'They are tested in trials', 'They use real statistics'], 0, 'The Barnum effect.'],
        ['In Chinese culture the number 4 is avoided because it:', ['Sounds like the word for death', 'Is an even number', 'Means poverty', 'Is linked to the moon'], 0, 'Sì (four) and sǐ (death) sound alike.']
      ] },

    { id: 'geometry', tab: 'Sacred geometry', level: 'Beginner',
      h: 'Sacred geometry: <span>shapes that carry meaning</span>',
      intro: ['Builders of temples, cathedrals and mosques chose their shapes on purpose. A circle, a square or a particular ratio said something about heaven, earth and order. Learn a dozen shapes and you will start seeing them everywhere.'],
      facts: ['5 Platonic solids', 'φ ≈ 1.618', 'Check the measurements before believing a golden-ratio claim'],
      b: [
        '## The basic vocabulary',
        ['tb', ['Shape', 'Traditional meaning', 'Where to look'], ['Circle', 'Heaven, eternity, unity: no beginning or end', 'Domes, halos, rose windows, mandalas'], ['Square', 'Earth, the material world, the four directions', 'Floor plans, altars, city grids'], ['Triangle', 'Three in one; pointing up: fire, spirit; pointing down: water, matter', 'The Trinity; the Eye of Providence'], ['Hexagram', 'Up and down triangles joined: the meeting of opposites', 'Star of David; Seal of Solomon; Hindu yantras'], ['Pentagram', 'The human body; the five elements; protection', 'Pythagorean badge; Renaissance magic'], ['Spiral', 'Growth, journey inward or outward', 'Celtic stones, labyrinths'], ['Cross', 'The meeting of vertical and horizontal, heaven and earth', 'Far older and wider than Christianity']],
        '## Vesica piscis',
        ['fig', '<svg viewBox="0 0 520 190"><circle cx="215" cy="95" r="80" fill="none" stroke="#888" stroke-width="1.5"/><circle cx="295" cy="95" r="80" fill="none" stroke="#888" stroke-width="1.5"/><path d="M255 26 A80 80 0 0 1 255 164 A80 80 0 0 1 255 26 Z" fill="#00ffa3" opacity=".22" stroke="#00ffa3"/><line x1="255" y1="26" x2="255" y2="164" stroke="#00ffa3" stroke-dasharray="3 3"/><line x1="215" y1="95" x2="295" y2="95" stroke="#f5a623" stroke-dasharray="3 3"/><text x="262" y="60" fill="#00ffa3">height = √3</text><text x="232" y="112" fill="#f5a623">width = 1</text><text x="395" y="60">Two equal circles,</text><text x="395" y="78">each through the</text><text x="395" y="96">other\'s centre.</text></svg>', 'The almond shape in the middle is the vesica piscis ("fish bladder"). Its height is √3 times its width.'],
        'It is the first shape you get when one circle becomes two. In Christian art it frames Christ or Mary and is called a <b>mandorla</b>. Turned sideways it is the fish sign of the early church. From it you can construct an equilateral triangle, a hexagon and the pointed Gothic arch.',
        '## The five Platonic solids',
        'Only five solid shapes have identical regular faces and identical corners. Plato, in the <i>Timaeus</i>, matched each to an element.',
        ['tb', ['Solid', 'Faces', 'Plato\'s element'], ['Tetrahedron', '4 triangles', 'Fire'], ['Cube', '6 squares', 'Earth'], ['Octahedron', '8 triangles', 'Air'], ['Icosahedron', '20 triangles', 'Water'], ['Dodecahedron', '12 pentagons', 'The cosmos']],
        '## The golden ratio',
        ['eq', 'φ = (1 + √5) / 2 ≈ 1.618\n\nA line is cut so that  whole : long part  =  long part : short part\n\nFibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34 ...  each ratio (21/13, 34/21) gets closer to φ'],
        ['tb', ['Claim', 'Verdict'], ['The diagonal of a regular pentagon is φ times its side', 'True. It is pure geometry.'], ['Sunflower seeds and pine cones spiral in Fibonacci numbers', 'True. It is the most efficient packing.'], ['The nautilus shell is a golden spiral', 'Mostly false. It is a logarithmic spiral, but usually with a different ratio.'], ['The Parthenon and the pyramids were designed around φ', 'Not supported. Measurements fit only if you pick your points.'], ['People find golden rectangles the most beautiful', 'Experiments are mixed and weak.']],
        '## Patterns with modern names',
        ['kv', ['Flower of Life', 'Overlapping circles in a six-fold pattern. The pattern is ancient and found worldwide. The name and its mystical reading date from the late 20th century.'], ['Metatron\'s Cube', 'Thirteen circles joined by straight lines. All five Platonic solids can be traced in it. A modern construction with an angel\'s name.'], ['Mandala', 'A circle-in-square diagram of the cosmos used for meditation in Hinduism and Buddhism.'], ['Labyrinth', 'A single winding path to a centre, such as the one in the floor of Chartres Cathedral (about 1200). Walked as a small pilgrimage.']],
        ['note', 'Squaring the circle', 'Constructing a square with the same area as a given circle, using only compass and straightedge, became a symbol of uniting heaven and earth. In 1882 it was proved impossible, because π is transcendental.']
      ],
      quiz: [
        ['How many Platonic solids are there?', ['5', '4', '7', '12'], 0, 'Tetrahedron, cube, octahedron, dodecahedron, icosahedron.'],
        ['The golden ratio is about:', ['1.618', '3.142', '2.718', '1.414'], 0, '(1 + √5) / 2.'],
        ['The vesica piscis is formed by:', ['Two overlapping equal circles', 'A square in a circle', 'Two triangles', 'A spiral'], 0, 'Each circle passes through the other\'s centre.'],
        ['Plato linked the cube with:', ['Earth', 'Fire', 'Water', 'Air'], 0, 'The most stable solid for the most stable element.'],
        ['Which golden-ratio claim is solid mathematics?', ['Pentagon diagonal to side', 'The Parthenon\'s façade', 'The human face', 'The nautilus shell'], 0, 'The others depend on selective measuring.'],
        ['In traditional symbolism the square stands for:', ['Earth and the material world', 'Heaven', 'Fire', 'The soul'], 0, 'The circle stands for heaven.']
      ] },

    { id: 'alchemy', tab: 'Alchemy', level: 'Intermediate',
      h: 'Alchemy: <span>the art of transformation</span>',
      intro: ['Alchemy was the ancestor of chemistry and, at the same time, a spiritual discipline. Its practitioners tried to turn lead into gold and to perfect the soul, and they recorded both in the same coded pictures.'],
      facts: ['About 2,000 years of practice', 'Four stages of the Great Work', 'Newton wrote about a million words on it'],
      b: [
        '## A short history',
        ['tl', ['1st to 4th century', 'Greek-speaking Egypt. Metalworking recipes meet Greek philosophy. Zosimos of Panopolis writes the earliest surviving texts.'], ['8th to 10th century', 'The Islamic world. Jabir ibn Hayyan and al-Razi add systematic experiment. The word comes from Arabic al-kīmiyā.'], ['12th century on', 'Arabic texts are translated into Latin. Alchemy spreads through Europe.'], ['16th century', 'Paracelsus turns alchemy towards making medicines.'], ['17th century', 'Boyle and Newton practise it seriously. Boyle\'s Sceptical Chymist (1661) begins to separate chemistry from it.'], ['18th century', 'Lavoisier\'s chemistry of elements replaces it.']],
        '## What alchemists believed',
        ['ul', 'All matter is made of the <b>four elements</b>: earth, water, air and fire.', 'Metals grow and ripen in the earth. Lead is unripe; gold is perfect. The alchemist speeds up nature.', 'Metals are made of two principles, <b>sulphur</b> (what burns) and <b>mercury</b> (what flows). Paracelsus added <b>salt</b> (what is solid): the <i>tria prima</i>.', 'The <b>philosopher\'s stone</b> would perfect any metal into gold and, as the elixir of life, perfect the body too.', '"<b>As above, so below</b>": the heavens and the earth mirror each other. The line comes from the Emerald Tablet, credited to the legendary Hermes Trismegistus.'],
        '## Reading the symbols',
        ['fig', '<svg viewBox="0 0 520 120"><g fill="none" stroke="#00ffa3" stroke-width="2"><path d="M40 85 L75 25 L110 85 Z"/><path d="M170 25 L205 85 L240 25 Z"/><path d="M300 85 L335 25 L370 85 Z M312 55 H358"/><path d="M430 25 L465 85 L500 25 Z M442 55 H488"/></g><text x="58" y="108">Fire</text><text x="186" y="108">Water</text><text x="322" y="108">Air</text><text x="448" y="108">Earth</text></svg>', 'The four elements. Up is rising and hot; down is falling and cold. The bar marks the two "in between" elements.'],
        ['tb', ['Metal', 'Planet', 'Sign'], ['Gold', 'Sun', '☉'], ['Silver', 'Moon', '☽'], ['Mercury (quicksilver)', 'Mercury', '☿'], ['Copper', 'Venus', '♀'], ['Iron', 'Mars', '♂'], ['Tin', 'Jupiter', '♃'], ['Lead', 'Saturn', '♄']],
        ['kv', ['Ouroboros', 'A snake eating its tail. The cycle with no end; "the all is one".'], ['Green lion eating the sun', 'A strong acid dissolving gold.'], ['King and queen', 'Sulphur and mercury, the two principles that must be joined.'], ['Rebis', 'A two-headed figure, male and female in one body: the opposites united.'], ['Phoenix', 'The final red stage; rebirth from fire.'], ['Pelican', 'A vessel that feeds its contents back on itself; sacrifice.']],
        '## The Great Work in four colours',
        ['tb', ['Stage', 'Colour', 'In the flask', 'In the soul'], ['Nigredo', 'Black', 'Breaking down, rotting', 'Facing what is dark in oneself'], ['Albedo', 'White', 'Washing, purifying', 'Clarity'], ['Citrinitas', 'Yellow', 'Dawning', 'Awakening'], ['Rubedo', 'Red', 'The stone is complete', 'Wholeness']],
        '## What was real',
        ['ul', 'Alchemists invented or refined distillation, the still, the water bath and many lab vessels.', 'They discovered mineral acids, alcohol distillation and, in 1669, phosphorus (Hennig Brand, while boiling down urine in search of the stone).', 'They never made gold. Chemical reactions cannot change one element into another.', 'Nuclear reactions can. In 1980 physicists turned a little bismuth into gold in a particle accelerator, at a cost far above its value.', 'The psychologist Carl Jung read alchemical images as a map of inner growth, which is how many people meet them today.']
      ],
      quiz: [
        ['The philosopher\'s stone was meant to:', ['Turn base metals into gold', 'Predict the future', 'Summon spirits', 'Measure the stars'], 0, 'And, as an elixir, to heal and prolong life.'],
        ['Paracelsus\'s three principles were sulphur, mercury and:', ['Salt', 'Gold', 'Water', 'Iron'], 0, 'The tria prima.'],
        ['Which metal was linked to Saturn?', ['Lead', 'Gold', 'Copper', 'Tin'], 0, 'Heavy, dull and slow.'],
        ['The first, black stage of the Great Work is:', ['Nigredo', 'Albedo', 'Rubedo', 'Citrinitas'], 0, 'Then white, yellow and red.'],
        ['The ouroboros shows:', ['A snake eating its own tail', 'A lion eating the sun', 'A two-headed king', 'A bird in flames'], 0, 'The endless cycle.'],
        ['Which element did an alchemist discover in 1669?', ['Phosphorus', 'Oxygen', 'Gold', 'Hydrogen'], 0, 'Hennig Brand, from urine.']
      ] },

    { id: 'gnosis', tab: 'Gnosticism & metaphysics', level: 'Advanced',
      h: 'Gnosticism and <span>metaphysics</span>',
      intro: ['Two very different things that often share a shelf. Gnosticism is a family of ancient religions with a striking story about a flawed world. Metaphysics is the branch of philosophy that asks what is real.'],
      facts: ['Gnosis = knowledge', 'Nag Hammadi library found in 1945', 'Metaphysics: named after Aristotle\'s books'],
      b: [
        '## Gnosticism: the core story',
        'Gnostic groups flourished in the 1st to 3rd centuries around the eastern Mediterranean. They differed a great deal, but most told a version of this:',
        ['ol', 'The true God is utterly beyond the world, dwelling in the <b>Pleroma</b>, the "fullness".', 'From God flow pairs of divine beings called <b>aeons</b>.', 'The last aeon, <b>Sophia</b> (Wisdom), acts alone and falls.', 'Her error produces the <b>Demiurge</b>, a lesser, ignorant creator, often named Yaldabaoth. He makes the material world and believes he is the only god.', 'His servants, the <b>archons</b>, rule the planets and keep souls imprisoned.', 'Each human carries a <b>divine spark</b> trapped in matter.', 'A messenger of light brings <b>gnosis</b>: the knowledge of who you are and where you come from. That knowledge is salvation.'],
        ['tb', ['Mainstream Christianity', 'Gnostic teaching'], ['The creator is the one good God', 'The creator is a lesser, flawed being'], ['The world is good, though fallen', 'The world is a mistake or a prison'], ['Salvation by faith and grace', 'Salvation by inner knowledge'], ['The serpent in Eden is a deceiver', 'In some texts the serpent brings knowledge']],
        '## Sources and signs',
        ['ul', 'For centuries Gnostics were known mostly through their opponents, such as Irenaeus (about 180 AD).', 'In 1945, near <b>Nag Hammadi</b> in Egypt, a jar was found holding 13 leather-bound books with over 50 texts, including the <i>Gospel of Thomas</i> and the <i>Secret Book of John</i>.', '<b>Abraxas</b>: a figure with a rooster\'s head and serpent legs on ancient gem amulets. The Greek letters of the name add up to 365.', 'Recurring images: light trapped in darkness, the sleeper who must wake, the pearl, the stranger far from home.', 'Related movements: Manichaeism (3rd century), the Cathars of medieval France, and the Mandaeans, who survive today.', 'Modern stories with a Gnostic shape: a false world, hidden rulers, and a hero who wakes up. <i>The Matrix</i> is the usual example.'],
        ['note', 'Hermeticism', 'A cousin of Gnosticism: Greek texts from Roman Egypt credited to Hermes Trismegistus. They teach that the divine is reflected in the world ("as above, so below") and fed straight into alchemy and Renaissance magic.'],
        '## Metaphysics: the real questions',
        'The word comes from the books of Aristotle that an ancient editor placed "after the Physics" (<i>meta ta physika</i>). It came to mean the study of what lies beyond or beneath physical things.',
        ['tb', ['Question', 'Topic', 'Classic puzzle'], ['What exists?', 'Ontology', 'Do numbers exist? Do possibilities?'], ['What makes a thing the same thing over time?', 'Identity', 'The ship of Theseus: every plank replaced. Same ship?'], ['Are general kinds real?', 'Universals', 'Is "redness" something beyond red things?'], ['Is the mind separate from the body?', 'Mind and body', 'Descartes: two substances. Materialists: one.'], ['Could I have done otherwise?', 'Free will', 'Does cause and effect leave room for choice?'], ['What is time?', 'Time', 'Is the future already real?']],
        ['kv', ['Plato', 'The things we see are imperfect copies of eternal <b>Forms</b>.'], ['Aristotle', 'Every thing has four causes: what it is made of, its form, what made it, and what it is for.'], ['Kant', 'We know things only as they appear to us, not as they are in themselves. Metaphysics has limits.']],
        ['warn', 'Two meanings', 'In a university, "metaphysics" means the philosophy above. In a bookshop, the "metaphysical" section means crystals, auras and spiritual energy. They share a word and little else.']
      ],
      quiz: [
        ['"Gnosis" means:', ['Knowledge', 'Faith', 'Law', 'Sacrifice'], 0, 'Direct, saving insight.'],
        ['In Gnostic myth, the Demiurge is:', ['A lesser creator of the material world', 'The highest God', 'A human prophet', 'The first human'], 0, 'Ignorant of the true God above him.'],
        ['The Nag Hammadi texts were found in:', ['Egypt in 1945', 'Israel in 1947', 'Greece in 1900', 'Rome in 1600'], 0, 'Thirteen books in a sealed jar.'],
        ['Sophia is:', ['The aeon whose fall leads to the material world', 'The first archon', 'A Roman emperor', 'A Gnostic city'], 0, 'Her name means Wisdom.'],
        ['The ship of Theseus is a puzzle about:', ['Identity over time', 'Free will', 'The existence of God', 'Causation'], 0, 'If every part is replaced, is it the same ship?'],
        ['The word "metaphysics" comes from:', ['The placing of Aristotle\'s books after his Physics', 'A Gnostic sect', 'The Greek for "magic"', 'A medieval university'], 0, 'Meta ta physika.']
      ] },

    { id: 'masonry', tab: 'Freemasonry', level: 'Advanced',
      h: 'Freemasonry: <span>the craft and its symbols</span>',
      intro: ['Freemasonry is the world\'s largest fraternal society. It teaches moral lessons through ritual plays built on the tools of medieval stonemasons. Its symbols are public and easy to learn. Its reputation is mostly the work of other people\'s imagination.'],
      facts: ['First Grand Lodge: London, 1717', 'Three degrees', 'Describes itself as a society with secrets, not a secret society'],
      b: [
        '## Where it came from',
        ['tl', ['Middle Ages', 'Stonemasons who built cathedrals form guilds with passwords to prove their skill as they travel.'], ['1600s', 'Lodges in Scotland and England begin admitting gentlemen who are not working masons: "speculative" masons.'], ['1717', 'Four London lodges form the first Grand Lodge, on 24 June.'], ['1723', 'James Anderson\'s Constitutions set out the rules.'], ['1700s', 'The craft spreads across Europe and the Americas. Members include Franklin, Washington, Voltaire and Mozart.'], ['1813', 'Rival English bodies merge into the United Grand Lodge of England.']],
        '## How it works',
        ['ul', 'Members meet in a <b>lodge</b>, led by an elected Worshipful Master.', 'A candidate passes through three <b>degrees</b>: Entered Apprentice, Fellow Craft and Master Mason. Each is a ritual drama with a moral lesson.', 'Mainstream ("regular") lodges require belief in a Supreme Being, called the Great Architect of the Universe, and admit men only. Other branches admit women or drop the religious test.', 'Discussion of religion and politics is forbidden in lodge.', 'The well-known secrets are the handshakes, passwords and ritual wording. All have been in print for centuries.', 'Extra bodies such as the Scottish Rite (with its 33 degrees) and the York Rite add further ceremonies. They do not outrank the third degree.'],
        '## The symbols',
        ['fig', '<svg viewBox="0 0 520 190"><g fill="none" stroke-linecap="round" stroke-width="5"><path d="M190 150 L260 105 L330 150" stroke="#f5a623"/><path d="M260 30 L205 160 M260 30 L315 160" stroke="#00ffa3"/></g><circle cx="260" cy="30" r="7" fill="#00ffa3"/><text x="250" y="112" style="font-size:26px;fill:#fff;font-weight:700">G</text><text x="345" y="60" fill="#00ffa3">Compasses: draw a circle</text><text x="345" y="78" fill="#00ffa3">round your desires</text><text x="345" y="140" fill="#f5a623">Square: act squarely,</text><text x="345" y="158" fill="#f5a623">with honesty</text><text x="30" y="100">G: Geometry, and God</text></svg>', 'The square and compasses, the badge of Freemasonry. The letter G appears mainly in English-speaking countries.'],
        ['tb', ['Symbol', 'Lesson'], ['Square', 'Morality: "square your actions"'], ['Compasses', 'Keep your passions within bounds'], ['Level', 'All people are equal'], ['Plumb rule', 'Uprightness'], ['Rough and smooth ashlar', 'A rough stone and a finished one: the self before and after work'], ['Two pillars, Jachin and Boaz', 'The entrance to Solomon\'s Temple (1 Kings 7:21)'], ['Chequered floor', 'Light and dark, the mixed nature of life'], ['All-Seeing Eye', 'Conduct is always observed by God'], ['Apron', 'The badge of a mason; honest labour'], ['Trowel', 'Spreading the cement of brotherly love'], ['Acacia sprig', 'Immortality of the soul'], ['Beehive', 'Industry']],
        '## Myths and facts',
        ['tb', ['Claim', 'What the record shows'], ['The eye and pyramid on the US dollar is a Masonic sign', 'The Eye of Providence was a common Christian emblem. It was put on the Great Seal in 1782 by a committee, and Masonic use of the eye is documented only later.'], ['Masons and the Illuminati are the same', 'The Bavarian Illuminati were a separate society founded in 1776 by Adam Weishaupt. They recruited in lodges and were banned in 1785.'], ['Masons worship a secret god', 'The claim was spread by Léo Taxil in the 1890s. In 1897 he admitted in public that he had invented it.'], ['It is a religion', 'It requires belief but has no doctrine of salvation, no sacraments and no clergy.'], ['It has always been tolerated', 'The Catholic Church has forbidden membership since 1738. The Nazis and several other regimes banned it and persecuted members.']],
        '## How to check a "hidden symbol" claim',
        ['ol', '<b>Is the shape common?</b> Triangles, eyes, stars and grids appear everywhere because they are simple.', '<b>Who made it, and when?</b> A symbol means what its maker and audience took it to mean, at that time.', '<b>Is there a document?</b> Designers leave sketches, letters and minutes. Look for them.', '<b>Would you have noticed the misses?</b> Counting only the matches is how every false pattern is built.', '<b>Does the claim need a secret that thousands kept perfectly?</b> Large secrets leak.'],
        ['tip', 'Apophenia', 'The mind is built to find patterns, and it finds them in noise too. Learning real symbol systems is the best defence, because you can tell a documented meaning from a guess.']
      ],
      quiz: [
        ['The first Grand Lodge was founded in:', ['London in 1717', 'Paris in 1789', 'Rome in 1500', 'Boston in 1776'], 0, 'By four London lodges on 24 June.'],
        ['The three degrees end with:', ['Master Mason', 'Grand Master', 'Fellow Craft', 'Knight Templar'], 0, 'Entered Apprentice, Fellow Craft, Master Mason.'],
        ['The compasses teach a mason to:', ['Keep his passions within bounds', 'Measure buildings', 'Travel widely', 'Keep secrets'], 0, 'The square teaches morality.'],
        ['Jachin and Boaz are:', ['The two pillars of Solomon\'s Temple', 'Two founders of the craft', 'Two secret passwords', 'Two officers of a lodge'], 0, 'From the First Book of Kings.'],
        ['The Bavarian Illuminati were:', ['A separate society, founded 1776 and banned 1785', 'The ruling council of Freemasonry', 'A medieval guild', 'Invented in the 1960s'], 0, 'Founded by Adam Weishaupt.'],
        ['The best first question about a "hidden symbol" is:', ['Who made it, and what did it mean to them?', 'How many triangles can I find?', 'Does it look mysterious?', 'Is it on money?'], 0, 'Meaning comes from the maker and the time.']
      ] }
  ],
  sources: [
    ['Encyclopaedia Britannica: Number symbolism', 'https://www.britannica.com/topic/number-symbolism', 'Pythagoreans, sacred numbers, numerology'],
    ['Jewish Encyclopedia: Gematria', 'https://www.jewishencyclopedia.com/articles/6571-gematria', 'letter values and methods'],
    ['Wolfram MathWorld: Golden Ratio; Platonic Solid; Vesica Piscis', 'https://mathworld.wolfram.com/GoldenRatio.html', 'the mathematics'],
    ['Science History Institute: alchemy collections and essays', 'https://www.sciencehistory.org/', 'history, apparatus, the road to chemistry'],
    ['Encyclopaedia Britannica: Alchemy', 'https://www.britannica.com/topic/alchemy', 'origins, symbols, the Great Work'],
    ['Encyclopaedia Britannica: Gnosticism', 'https://www.britannica.com/topic/gnosticism', 'the myth, the schools, Nag Hammadi'],
    ['Stanford Encyclopedia of Philosophy: Metaphysics', 'https://plato.stanford.edu/entries/metaphysics/', 'what the subject covers'],
    ['United Grand Lodge of England: Discover Freemasonry', 'https://www.ugle.org.uk/discover-freemasonry', 'history, degrees, what members do'],
    ['Encyclopaedia Britannica: Freemasonry', 'https://www.britannica.com/topic/Freemasonry', 'history and controversies'],
    ['U.S. Department of State: The Great Seal of the United States', 'https://www.state.gov/wp-content/uploads/2019/09/TheGreatSeal.pdf', 'who designed the eye and pyramid']
  ]
};
