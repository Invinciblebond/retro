/* Learn · Computer Science. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'cs', title: 'Computer Science',
  lessons: [
    { id: 'binary', tab: 'Bits & logic', level: 'Introductory',
      h: 'Bits, binary and <span>logic</span>',
      intro: ['A computer is billions of tiny switches. Each is on or off. Everything a computer does, from text to video to this page, is patterns of on and off.'],
      facts: ['1 byte = 8 bits', '8 bits = 256 values', 'Three gates build everything'],
      b: [
        '## Counting in binary',
        'We count in tens because we have ten fingers. A switch has two states, so computers count in twos. Each place is worth double the one to its right.',
        ['eq', 'place value:   8   4   2   1\nbinary:        1   0   1   1     =  8 + 0 + 2 + 1  =  11'],
        ['tb', ['Decimal', 'Binary', 'Hex'], ['0', '0000', '0'], ['5', '0101', '5'], ['9', '1001', '9'], ['10', '1010', 'A'], ['15', '1111', 'F'], ['255', '1111 1111', 'FF']],
        '<b>Hexadecimal</b> (base 16) is shorthand for binary: one hex digit is exactly four bits. That is why colours are written like <code>#00FFA3</code>.',
        '## Sizes',
        ['tb', ['Unit', 'Size', 'Roughly'], ['Bit', '0 or 1', 'One switch'], ['Byte', '8 bits', 'One letter of plain English text'], ['Kilobyte (KB)', 'About 1,000 bytes', 'A short email'], ['Megabyte (MB)', 'About 1 million bytes', 'A photo'], ['Gigabyte (GB)', 'About 1 billion bytes', 'A film']],
        '## Everything is numbers',
        ['kv', ['Text', 'Each character has a number. In Unicode, "A" is 65 and "é" is 233. UTF-8 stores these as one to four bytes.'], ['Images', 'A grid of pixels. Each pixel is three numbers: red, green and blue, 0 to 255.'], ['Sound', 'The air pressure measured thousands of times a second, each measurement a number.'], ['Programs', 'Instructions are numbers too. The processor reads them one after another.']],
        '## Logic gates',
        ['tb', ['Gate', 'Output is 1 when', '0,0', '0,1', '1,0', '1,1'], ['AND', 'both inputs are 1', '0', '0', '0', '1'], ['OR', 'at least one input is 1', '0', '1', '1', '1'], ['NOT', 'the single input is 0', '1', '', '', '0'], ['XOR', 'the inputs differ', '0', '1', '1', '0']],
        'Wire gates together and you can add numbers, compare them and store them. A processor is these few gates, repeated billions of times.',
        '## Inside a computer',
        ['tb', ['Part', 'Job'], ['CPU', 'Carries out instructions: fetch, decode, execute, billions of times a second'], ['RAM', 'Fast working memory. Empties when the power goes off'], ['Storage (SSD)', 'Slower, permanent memory'], ['Operating system', 'Shares the hardware between programs and manages files']]
      ],
      quiz: [
        ['What is binary 1010 in decimal?', ['10', '5', '12', '8'], 0, '8 + 0 + 2 + 0.'],
        ['How many different values can one byte hold?', ['256', '8', '16', '1,024'], 0, '2⁸ = 256.'],
        ['One hexadecimal digit stands for how many bits?', ['4', '2', '8', '16'], 0, 'Sixteen values need four bits.'],
        ['An AND gate outputs 1 when:', ['Both inputs are 1', 'Either input is 1', 'The inputs differ', 'Both inputs are 0'], 0, 'Both must be on.'],
        ['Which loses its contents when the power is cut?', ['RAM', 'SSD', 'Hard disk', 'USB stick'], 0, 'RAM is working memory.']
      ] },

    { id: 'algorithms', tab: 'Algorithms & Big O', level: 'Beginner',
      h: 'Algorithms and <span>how to measure them</span>',
      intro: ['An algorithm is a recipe: a finite list of exact steps that solves a problem. Two algorithms can both be correct while one takes a second and the other takes a century.'],
      facts: ['Big O counts steps as input grows', 'Binary search: 1 million items in 20 steps'],
      b: [
        '## Two ways to search',
        ['kv', ['Linear search', 'Check every item in turn. For n items, up to n checks.'], ['Binary search', 'In a <b>sorted</b> list, look at the middle. Too high? Throw away the top half. Repeat. Each step halves what is left.']],
        ['code', 'def binary_search(items, target):\n    low, high = 0, len(items) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if items[mid] == target:\n            return mid\n        if items[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1'],
        '## Big O notation',
        'Big O describes how the number of steps grows as the input size n grows. It ignores constants and keeps only the dominant term.',
        ['tb', ['Big O', 'Name', 'Steps for n = 1,000', 'Example'], ['O(1)', 'Constant', '1', 'Look up an array item by position'], ['O(log n)', 'Logarithmic', 'About 10', 'Binary search'], ['O(n)', 'Linear', '1,000', 'Find the largest item'], ['O(n log n)', 'Linearithmic', 'About 10,000', 'Merge sort, the best general sorting'], ['O(n²)', 'Quadratic', '1,000,000', 'Compare every pair; bubble sort'], ['O(2ⁿ)', 'Exponential', 'More than atoms in the universe', 'Try every subset']],
        ['fig', '<svg viewBox="0 0 520 190"><g stroke="#333"><line x1="40" y1="165" x2="500" y2="165"/><line x1="40" y1="15" x2="40" y2="165"/></g><path d="M40 160 H500" stroke="#888" fill="none" stroke-width="1.5"/><path d="M40 160 C120 140 300 130 500 124" stroke="#38bdf8" fill="none" stroke-width="1.5"/><path d="M40 160 L500 70" stroke="#00ffa3" fill="none" stroke-width="1.5"/><path d="M40 160 Q250 150 330 15" stroke="#f472b6" fill="none" stroke-width="1.5"/><text x="440" y="155">O(1)</text><text x="440" y="118" fill="#38bdf8">O(log n)</text><text x="455" y="70" fill="#00ffa3">O(n)</text><text x="340" y="28" fill="#f472b6">O(n²)</text><text x="230" y="184">input size n</text></svg>', 'Steps against input size. Quadratic growth looks fine on small inputs and collapses on large ones.'],
        '## Sorting',
        ['tb', ['Algorithm', 'Idea', 'Time'], ['Bubble sort', 'Swap neighbours that are out of order; repeat', 'O(n²)'], ['Insertion sort', 'Slot each item into the sorted part', 'O(n²), fast on nearly sorted data'], ['Merge sort', 'Split in half, sort each half, merge', 'O(n log n)'], ['Quicksort', 'Pick a pivot, split into smaller and larger, repeat', 'O(n log n) on average']],
        '## Recursion',
        'A function that solves a problem by calling itself on a smaller version. It needs a <b>base case</b> that stops it.',
        ['code', 'def factorial(n):\n    if n <= 1:          # base case\n        return 1\n    return n * factorial(n - 1)'],
        ['note', 'Divide and conquer', 'Binary search, merge sort and quicksort share one strategy: split the problem, solve the pieces, combine the answers.']
      ],
      quiz: [
        ['Binary search needs the list to be:', ['Sorted', 'Short', 'Made of numbers', 'Reversed'], 0, 'Otherwise discarding half makes no sense.'],
        ['The time complexity of binary search is:', ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], 0, 'Each step halves the problem.'],
        ['Comparing every item with every other item is:', ['O(n²)', 'O(n)', 'O(log n)', 'O(1)'], 0, 'n × n comparisons.'],
        ['Merge sort runs in:', ['O(n log n)', 'O(n²)', 'O(n)', 'O(2ⁿ)'], 0, 'The best a comparison sort can do in general.'],
        ['Every recursive function needs a:', ['Base case', 'Loop', 'Global variable', 'Sorted list'], 0, 'Without one it never stops.'],
        ['Big O describes:', ['How steps grow with input size', 'The exact running time in seconds', 'How much the code costs', 'The number of lines of code'], 0, 'It is about growth, not stopwatch time.']
      ] },

    { id: 'structures', tab: 'Data structures', level: 'Intermediate',
      h: 'Data structures: <span>how to organise information</span>',
      intro: ['A data structure is a way of arranging data so the operations you need are fast. Pick the right one and a hard problem becomes easy.'],
      facts: ['Arrays · lists · hash tables · trees · graphs', 'Every choice is a trade-off'],
      b: [
        '## The basic structures',
        ['tb', ['Structure', 'Picture', 'Good at', 'Bad at'], ['Array', 'Numbered boxes in a row', 'Reading item number i: O(1)', 'Inserting in the middle: O(n)'], ['Linked list', 'A chain; each item points to the next', 'Inserting or removing at a known spot: O(1)', 'Finding item number i: O(n)'], ['Stack', 'A pile of plates', 'Last in, first out: undo, the call stack', 'Reaching the bottom'], ['Queue', 'A line of people', 'First in, first out: print jobs, messages', 'Jumping the line'], ['Hash table', 'Labelled drawers', 'Find by key in O(1) on average', 'Keeping things in order'], ['Tree', 'Branches from a root', 'Sorted data, hierarchies', 'Costs more memory'], ['Graph', 'Dots joined by lines', 'Networks, maps, relationships', 'Many problems on graphs are slow']],
        '## Hash tables',
        'A <b>hash function</b> turns a key such as a name into a number, and that number picks a slot. To look something up you compute the slot directly, so there is no searching. Two keys landing in the same slot is a collision, which the table handles with a small list or by probing nearby slots.',
        ['code', 'ages = {"Ada": 36, "Alan": 41}     # a hash table (Python dict)\nages["Grace"] = 85                 # insert:  O(1) on average\nprint(ages["Alan"])                # look up: O(1) on average'],
        '## Trees',
        ['fig', '<svg viewBox="0 0 520 170"><g stroke="#666"><line x1="260" y1="30" x2="170" y2="80"/><line x1="260" y1="30" x2="350" y2="80"/><line x1="170" y1="80" x2="120" y2="130"/><line x1="170" y1="80" x2="220" y2="130"/><line x1="350" y1="80" x2="300" y2="130"/><line x1="350" y1="80" x2="400" y2="130"/></g><g fill="#0d0d0d" stroke="#00ffa3"><circle cx="260" cy="30" r="17"/><circle cx="170" cy="80" r="17"/><circle cx="350" cy="80" r="17"/><circle cx="120" cy="130" r="17"/><circle cx="220" cy="130" r="17"/><circle cx="300" cy="130" r="17"/><circle cx="400" cy="130" r="17"/></g><g style="fill:#fff"><text x="253" y="34">50</text><text x="163" y="84">30</text><text x="343" y="84">70</text><text x="113" y="134">20</text><text x="213" y="134">40</text><text x="293" y="134">60</text><text x="393" y="134">80</text></g></svg>', 'A binary search tree. Everything to the left of a node is smaller, everything to the right is larger. Finding a value takes one step per level.'],
        'A balanced tree of a million items is only about 20 levels deep, so search, insert and delete are all O(log n). Databases and file systems are built on trees.',
        '## Graphs',
        ['ul', 'A graph is <b>nodes</b> joined by <b>edges</b>. A road map, a social network and the web are all graphs.', '<b>Breadth-first search</b> explores level by level and finds the path with the fewest steps.', '<b>Depth-first search</b> follows one path to its end, then backs up.', '<b>Dijkstra\'s algorithm</b> finds the shortest path when edges have lengths. It is behind route planners.']
      ],
      quiz: [
        ['Which structure is last in, first out?', ['Stack', 'Queue', 'Array', 'Graph'], 0, 'Like a pile of plates.'],
        ['Looking up a key in a hash table takes on average:', ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], 0, 'The hash gives the slot directly.'],
        ['In a binary search tree, values to the left of a node are:', ['Smaller', 'Larger', 'Equal', 'Random'], 0, 'That ordering makes search fast.'],
        ['Which is slow in an array?', ['Inserting in the middle', 'Reading item 5', 'Reading the last item', 'Getting the length'], 0, 'Everything after it must shift.'],
        ['A road map is best modelled as a:', ['Graph', 'Stack', 'Queue', 'Hash table'], 0, 'Places are nodes, roads are edges.'],
        ['Which search finds the path with the fewest steps?', ['Breadth-first', 'Depth-first', 'Linear', 'Binary'], 0, 'It explores level by level.']
      ] },

    { id: 'networks', tab: 'Networks & theory', level: 'Advanced',
      h: 'The internet, and <span>what computers cannot do</span>',
      intro: ['Two big ideas to finish: how billions of machines talk to each other, and where the limits of computing lie.'],
      facts: ['The internet is layers of agreements', 'P versus NP is still unsolved'],
      b: [
        '## How data crosses the internet',
        ['ol', 'Data is cut into small <b>packets</b>, each labelled with the address it is going to.', 'Packets hop from router to router. Each router only decides the next hop.', 'Packets may take different routes and arrive out of order. The receiver puts them back together.', 'Lost packets are sent again.'],
        ['tb', ['Layer', 'Protocol', 'Job'], ['Application', 'HTTP, DNS, email', 'What the programs say to each other'], ['Transport', 'TCP, UDP', 'TCP: reliable, in order. UDP: fast, no guarantees'], ['Internet', 'IP', 'Addressing and routing between networks'], ['Link', 'Wi-Fi, Ethernet', 'Moving bits to the next device']],
        '## What happens when you open a web page',
        ['ol', '<b>DNS</b> turns the name (utopoly.com) into an IP address.', 'Your browser opens a <b>TCP</b> connection to that address.', '<b>TLS</b> sets up encryption. This is the "s" in https.', 'The browser sends an <b>HTTP</b> request: "GET /index.html".', 'The server answers with a status code (200 OK, 404 Not Found) and the page.', 'The browser reads the HTML, fetches the styles, scripts and images it mentions, and draws the page.'],
        ['note', 'Why some pages are slow', 'Each extra file is another request. Large files, many files and scripts that must run before anything is drawn all delay the first paint.'],
        '## What can be computed',
        ['kv', ['Turing machine', 'A simple imaginary machine with a tape and a few rules. Alan Turing showed in 1936 that it can compute anything any computer can.'], ['The halting problem', 'No program can look at any other program and always say correctly whether it will finish or run forever. Some questions have no algorithm at all.'], ['P', 'Problems that can be <b>solved</b> quickly (in polynomial time): sorting, shortest path.'], ['NP', 'Problems whose answers can be <b>checked</b> quickly: a finished Sudoku, a proposed route under 500 km through every city.']],
        '## P versus NP',
        'Is every problem that is quick to check also quick to solve? Nobody knows. Most computer scientists think not. It is one of the seven Millennium Prize Problems, with a million-dollar reward. Modern encryption depends on some problems being easy one way and hard to reverse.',
        '## Machine learning in one paragraph',
        'Ordinary programs follow rules a person wrote. A machine-learning program is shown many examples and adjusts millions of internal numbers until its outputs match them. It finds the rules itself. A neural network is layers of simple units, each adding up its inputs and passing the result on. Large language models are neural networks trained to predict the next piece of text.'
      ],
      quiz: [
        ['What does DNS do?', ['Turns names into IP addresses', 'Encrypts web traffic', 'Stores web pages', 'Speeds up Wi-Fi'], 0, 'It is the phone book of the internet.'],
        ['Which protocol guarantees data arrives complete and in order?', ['TCP', 'UDP', 'IP', 'DNS'], 0, 'TCP resends lost packets.'],
        ['HTTP status 404 means:', ['Not found', 'OK', 'Server error', 'Redirect'], 0, 'The server has no such page.'],
        ['The halting problem shows that:', ['Some problems have no algorithm', 'Computers are slow', 'All programs finish', 'Sorting is impossible'], 0, 'Turing proved it in 1936.'],
        ['A problem is in NP if a proposed answer can be:', ['Checked quickly', 'Solved quickly', 'Never checked', 'Solved only by quantum computers'], 0, 'Checking, not solving.'],
        ['The "s" in https means the connection uses:', ['TLS encryption', 'A faster server', 'Satellite links', 'A secure password'], 0, 'TLS encrypts data in transit.']
      ] }
  ],
  sources: [
    ['MIT OpenCourseWare 6.006: Introduction to Algorithms', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/', 'searching, sorting, Big O, trees, graphs'],
    ['Harvard CS50: Introduction to Computer Science', 'https://cs50.harvard.edu/x/', 'binary, memory, data structures'],
    ['The Unicode Standard', 'https://www.unicode.org/standard/standard.html', 'how text is numbered'],
    ['IETF RFC 9110: HTTP Semantics', 'https://www.rfc-editor.org/rfc/rfc9110', 'requests and status codes'],
    ['Clay Mathematics Institute: P vs NP', 'https://www.claymath.org/millennium/p-vs-np/', 'the Millennium Prize problem'],
    ['Stanford Encyclopedia of Philosophy: Turing Machines', 'https://plato.stanford.edu/entries/turing-machine/', 'computability and the halting problem']
  ]
};
