/* Learn · Morse Code. Content blocks are rendered by assets/learn.js. */
(function () {
  var CODE = { A:'.-', B:'-...', C:'-.-.', D:'-..', E:'.', F:'..-.', G:'--.', H:'....', I:'..', J:'.---', K:'-.-', L:'.-..', M:'--',
    N:'-.', O:'---', P:'.--.', Q:'--.-', R:'.-.', S:'...', T:'-', U:'..-', V:'...-', W:'.--', X:'-..-', Y:'-.--', Z:'--..',
    1:'.----', 2:'..---', 3:'...--', 4:'....-', 5:'.....', 6:'-....', 7:'--...', 8:'---..', 9:'----.', 0:'-----' };
  function pretty(c) { return c.replace(/\./g, '·').replace(/-/g, '–'); }
  function spoken(c) {
    return c.split('').map(function (s, i, a) { return s === '.' ? (i === a.length - 1 ? 'dit' : 'di') : 'dah'; }).join('-');
  }
  function rows(keys) {
    return keys.split('').map(function (k) { return ['<b>' + k + '</b>', '<code>' + pretty(CODE[k]) + '</code>', spoken(CODE[k])]; });
  }
  function quizFor(keys) {
    var all = keys.split('');
    return all.map(function (k) {
      var opts = [k];
      all.slice().sort(function () { return Math.random() - .5; }).forEach(function (o) { if (opts.length < 4 && o !== k) opts.push(o); });
      return ['Which character is <code style="font-size:20px">' + pretty(CODE[k]) + '</code> ?', opts, 0, k + ' is ' + spoken(CODE[k]) + '.'];
    });
  }

  window.LEARN = {
    kind: 'course', id: 'morse', title: 'Morse Code', morse: CODE,
    lessons: [
      { id: 'basics', tab: 'How it works', level: 'Introductory',
        h: 'Two sounds, <span>every letter</span>',
        intro: ['Morse code spells out text using only a short signal and a long one. It works over anything you can switch on and off: a radio tone, a torch, a tap on a wall.',
          'You do not read Morse, you hear it. From the first minute, say and listen to the sounds. Do not memorise dots and dashes on paper.'],
        facts: ['2 signals', '26 letters · 10 digits', 'Standard: ITU-R M.1677-1'],
        b: [
          '## The two signals',
          ['kv', ['Dit ( · )', 'The short signal. One unit long. Said "dit" at the end of a letter and "di" inside one.'],
                 ['Dah ( – )', 'The long signal. Three units long. Always said "dah".'],
                 ['The unit', 'Everything is measured in dits. Speed up the dit and the whole message speeds up with it.']],
          '## Timing is the whole code | The silences carry as much meaning as the sounds.',
          ['tb', ['Element', 'Length'], ['Dit', '1 unit'], ['Dah', '3 units'], ['Gap inside a letter', '1 unit'], ['Gap between letters', '3 units'], ['Gap between words', '7 units']],
          ['fig', '<svg viewBox="0 0 520 70"><g fill="#00ffa3"><rect x="10" y="20" width="14" height="14" rx="3"/><rect x="38" y="20" width="42" height="14" rx="3"/><rect x="122" y="20" width="42" height="14" rx="3"/><rect x="178" y="20" width="14" height="14" rx="3"/><rect x="290" y="20" width="14" height="14" rx="3"/><rect x="318" y="20" width="14" height="14" rx="3"/></g><text x="10" y="56">A = ·–</text><text x="122" y="56">N = –·</text><text x="290" y="56">I = ··</text><text x="84" y="14" fill="#666">3 units</text><text x="205" y="14" fill="#666">7 units (new word)</text></svg>',
            'The message "AN I". One unit of silence inside a letter, three between letters, seven between words.'],
          '## Try it',
          'Type anything and press play. Listen for the rhythm of each letter as one shape, not as a count of dots.',
          ['morse'],
          '## Where it came from',
          ['tl', ['1830s', 'Samuel Morse and Alfred Vail build an electric telegraph and a code for it.'],
                 ['1844', 'First public message, Washington to Baltimore: "What hath God wrought".'],
                 ['1865', 'International Morse, a cleaned-up European version, becomes the world standard.'],
                 ['1908', 'SOS takes effect as the international distress signal.'],
                 ['1999', 'Ships switch to satellite distress systems. Morse lives on with radio amateurs.']]
        ],
        quiz: [
          ['How long is a dah?', ['3 units', '1 unit', '2 units', '7 units'], 0, 'A dah is three dits long.'],
          ['How long is the gap between two words?', ['7 units', '3 units', '1 unit', '5 units'], 0, 'Seven units of silence separates words.'],
          ['What is the gap between two letters of the same word?', ['3 units', '1 unit', '7 units', 'No gap'], 0, 'Three units. One unit is the gap inside a letter.'],
          ['What is the best way to learn Morse?', ['By sound', 'By sight, from a chart', 'By counting dots', 'By writing dashes'], 0, 'Morse is a sound language. Charts slow you down later.']
        ] },

      { id: 'letters', tab: 'The letters', level: 'Beginner',
        h: 'The alphabet, <span>by ear</span>',
        intro: ['The most common English letters got the shortest codes. E is one dit. T is one dah.',
          'Learn the letters in small groups. Say each one out loud as a sound: "di-dah", not "dot dash".'],
        facts: ['26 letters', 'E and T are the shortest'],
        b: [
          '## Group 1: the short ones',
          ['tb', ['Letter', 'Code', 'Say it'].concat()].concat(rows('ETIANM')),
          '## Group 2',
          ['tb', ['Letter', 'Code', 'Say it']].concat(rows('SURWDKGO')),
          '## Group 3',
          ['tb', ['Letter', 'Code', 'Say it']].concat(rows('HVFLPJBXCYZQ')),
          '## Opposites help',
          'Many letters are mirror images. Learn one and you get the other cheaply.',
          ['tb', ['Pair', 'Codes'], ['A and N', '·– and –·'], ['D and U', '–·· and ··–'], ['B and V', '–··· and ···–'], ['G and W', '––· and ·––'], ['F and L', '··–· and ·–··'], ['Q and Y', '––·– and –·––']],
          '## Practice',
          ['morse']
        ],
        quiz: quizFor('ETIANMSURWDKGOHVFLPJBXCYZQ') },

      { id: 'numbers', tab: 'Numbers & signals', level: 'Intermediate',
        h: 'Digits, punctuation and <span>procedure signals</span>',
        intro: ['Every digit is five signals long, and they follow one pattern. Punctuation is longer and rarer. Procedure signals ("prosigns") run two letters together with no gap.'],
        facts: ['Digits are always 5 signals', 'SOS is sent as one unbroken character'],
        b: [
          '## The digits',
          '1 to 5 start with dits and fill up with dahs. 6 to 0 start with dahs and fill up with dits.',
          ['tb', ['Digit', 'Code', 'Say it']].concat(rows('1234567890')),
          '## Punctuation you will meet',
          ['tb', ['Mark', 'Code'], ['Full stop .', '·–·–·–'], ['Comma ,', '––··––'], ['Question mark ?', '··––··'], ['Slash /', '–··–·'], ['Equals = (also a pause)', '–···–'], ['At sign @', '·––·–·']],
          '## Procedure signals',
          ['tb', ['Signal', 'Code', 'Meaning'],
            ['SOS', '···–––···', 'Distress. Sent as one run, no letter gaps.'],
            ['AR', '·–·–·', 'End of message.'],
            ['SK', '···–·–', 'End of contact.'],
            ['BT', '–···–', 'Break, new paragraph.'],
            ['AS', '·–···', 'Wait.'],
            ['K', '–·–', 'Go ahead, over.'],
            ['R', '·–·', 'Received.']],
          ['note', 'Why SOS', 'SOS does not stand for anything. It was picked because three dits, three dahs, three dits is easy to send and hard to mistake.']
        ],
        quiz: quizFor('1234567890').concat([
          ['What does the prosign AR mean?', ['End of message', 'Wait', 'Distress', 'Received'], 0, 'AR closes a message. SK closes the whole contact.'],
          ['How is SOS sent?', ['As one character with no gaps', 'As three separate letters', 'Twice, very slowly', 'Only by voice'], 0, 'It is one unbroken pattern.']]) },

      { id: 'fluency', tab: 'Speed & real use', level: 'Advanced',
        h: 'From knowing it to <span>using it</span>',
        intro: ['Knowing the chart gets you to about 5 words per minute. Getting past that means hearing whole letters, then whole words, without translating.'],
        facts: ['PARIS = 50 units = one standard word', 'dit length in seconds = 1.2 ÷ WPM'],
        b: [
          '## Measuring speed',
          'Speed is counted in words per minute (WPM). The reference word is PARIS, which is exactly 50 units long with its word gap.',
          ['eq', 'dit length (seconds) = 1.2 / WPM\n\n 5 WPM  -> dit = 0.24 s\n20 WPM  -> dit = 0.06 s'],
          '## Two methods that work',
          ['kv', ['Koch method', 'Start with just two letters at full speed (about 20 WPM). When you copy them 90% right, add one more letter. You never learn a slow version you must unlearn.'],
                 ['Farnsworth timing', 'Send each letter fast, but stretch the gaps between letters. You learn the true sound of each letter and still get time to think.'],
                 ['Head copy', 'Stop writing every letter. Listen for whole words. Common ones such as THE, AND, CQ become single sounds.']],
          ['warn', 'The plateau', 'Most learners stall near 10 WPM because they still count dits. The fix is faster letters, not slower ones.'],
          '## Radio shorthand',
          ['tb', ['Code', 'Meaning'], ['CQ', 'Calling any station'], ['DE', 'From (this is)'], ['73', 'Best regards'], ['QTH', 'My location is'], ['QSL', 'I confirm receipt'], ['QRS', 'Send more slowly'], ['QRM', 'Interference from other stations'], ['QRZ?', 'Who is calling me?']],
          '## A real exchange',
          ['eq', 'CQ CQ CQ DE K1ABC K1ABC K\nK1ABC DE G4XYZ G4XYZ K\nG4XYZ DE K1ABC TNX FER CALL = UR RST 579 = QTH BOSTON = HW? AR G4XYZ DE K1ABC K'],
          'RST is a signal report: Readability 1 to 5, Strength 1 to 9, Tone 1 to 9. "579" means perfectly readable, good strength, clean tone.',
          ['morse']
        ],
        quiz: [
          ['Which word is the standard for measuring Morse speed?', ['PARIS', 'MORSE', 'RADIO', 'HELLO'], 0, 'PARIS is exactly 50 units long.'],
          ['At 20 WPM, how long is one dit?', ['0.06 seconds', '0.24 seconds', '0.6 seconds', '1.2 seconds'], 0, '1.2 ÷ 20 = 0.06 s.'],
          ['What does the Koch method start with?', ['Two letters at full speed', 'All letters, very slowly', 'A printed chart', 'Numbers only'], 0, 'Full speed from day one, a couple of letters at a time.'],
          ['What does CQ mean?', ['Calling any station', 'End of contact', 'Send slower', 'Best regards'], 0, 'CQ is a general call.'],
          ['What does QRS ask for?', ['Slower sending', 'Faster sending', 'Your location', 'A signal report'], 0, 'QRS: please send more slowly.']
        ] }
    ],
    sources: [
      ['ITU-R Recommendation M.1677-1: International Morse code', 'https://www.itu.int/rec/R-REC-M.1677-1-200910-I/', 'the official code and timing'],
      ['ARRL: Learning Morse Code', 'https://www.arrl.org/learning-morse-code', 'methods and practice files'],
      ['Encyclopaedia Britannica: Morse Code', 'https://www.britannica.com/topic/Morse-Code', 'history'],
      ['Library of Congress: First telegraphic message, 24 May 1844', 'https://www.loc.gov/item/mmorse000107/', 'the original paper tape']
    ]
  };
})();
