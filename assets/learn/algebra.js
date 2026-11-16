/* Learn · Advanced Algebra. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'algebra', title: 'Advanced Algebra',
  lessons: [
    { id: 'functions', tab: 'Functions', level: 'Introductory',
      h: 'Functions: <span>machines that turn x into y</span>',
      intro: ['Algebra is the study of rules. A function is a rule that takes a number in and gives exactly one number out. Almost everything later in maths and science is built from a few standard functions.'],
      facts: ['One input, one output', 'Graph = picture of the rule'],
      b: [
        '## The idea',
        'Write <code>f(x) = 2x + 3</code> and read it "f of x". Put in 4 and you get 11. The set of allowed inputs is the <b>domain</b>. The set of possible outputs is the <b>range</b>.',
        ['eq', 'f(x) = 2x + 3\nf(4) = 2(4) + 3 = 11\nf(-1) = 2(-1) + 3 = 1'],
        '## Straight lines',
        ['eq', 'y = mx + b        m = slope (rise / run)      b = where it crosses the y-axis\n\nslope between two points = (y2 - y1) / (x2 - x1)'],
        ['fig', '<svg viewBox="0 0 520 200"><g stroke="#333"><line x1="60" y1="170" x2="480" y2="170"/><line x1="100" y1="20" x2="100" y2="190"/></g><line x1="60" y1="160" x2="440" y2="30" stroke="#00ffa3" stroke-width="2"/><g stroke="#f5a623" stroke-dasharray="4 3"><line x1="180" y1="119" x2="320" y2="119"/><line x1="320" y1="119" x2="320" y2="71"/></g><circle cx="100" cy="146" r="4" fill="#00ffa3"/><text x="108" y="160">b (y-intercept)</text><text x="235" y="134" fill="#f5a623">run</text><text x="326" y="100" fill="#f5a623">rise</text><text x="350" y="50" fill="#00ffa3">y = mx + b</text></svg>', 'Slope is rise divided by run. A bigger m is a steeper line. A negative m slopes down.'],
        '## Combining functions',
        ['tb', ['Operation', 'Meaning', 'Example with f(x) = x + 1, g(x) = x²'], ['Composition f(g(x))', 'Do g first, then f', '(x²) + 1'], ['Composition g(f(x))', 'Do f first, then g', '(x + 1)²'], ['Inverse f⁻¹(x)', 'Undoes f', 'x - 1']],
        ['note', 'Finding an inverse', 'Swap x and y, then solve for y. From y = 2x + 3: x = 2y + 3, so y = (x - 3) / 2.'],
        '## Shifting and stretching graphs',
        ['tb', ['Change', 'Effect on the graph'], ['f(x) + k', 'Moves up by k'], ['f(x - h)', 'Moves right by h'], ['a · f(x)', 'Stretches vertically by a; flips if a is negative'], ['f(-x)', 'Mirrors left to right']],
        '## Systems of equations',
        'Two unknowns need two equations. Solve one for a letter and substitute, or add the equations so a letter cancels.',
        ['eq', '2x + y = 7\n x - y = 2      add them:  3x = 9   so x = 3,  y = 1']
      ],
      quiz: [
        ['If f(x) = 3x - 2, what is f(4)?', ['10', '12', '14', '5'], 0, '3(4) - 2 = 10.'],
        ['The slope of the line through (1, 2) and (3, 8) is:', ['3', '2', '6', '1/3'], 0, '(8 - 2) / (3 - 1) = 3.'],
        ['The graph of f(x - 2) is the graph of f(x) moved:', ['2 right', '2 left', '2 up', '2 down'], 0, 'Subtracting inside the brackets shifts right.'],
        ['The inverse of f(x) = 2x + 6 is:', ['(x - 6) / 2', '2x - 6', 'x / 2 + 6', '1 / (2x + 6)'], 0, 'Swap and solve: x = 2y + 6.'],
        ['If f(x) = x + 1 and g(x) = x², then f(g(3)) is:', ['10', '16', '7', '12'], 0, 'g(3) = 9, then f(9) = 10.']
      ] },

    { id: 'polynomials', tab: 'Quadratics & polynomials', level: 'Beginner',
      h: 'Quadratics and <span>polynomials</span>',
      intro: ['A polynomial is a sum of powers of x. Degree 2 is a quadratic, and its graph is a parabola. Solving polynomials means finding where the graph crosses zero.'],
      facts: ['Degree n has at most n real roots', 'Quadratic formula solves every quadratic'],
      b: [
        '## Three ways to solve a quadratic',
        ['kv', ['Factor', 'x² - 5x + 6 = (x - 2)(x - 3), so x = 2 or 3. Fast when the numbers are kind.'], ['Complete the square', 'Rewrite as (x - h)² = k. Shows the turning point (h, k).'], ['Quadratic formula', 'Always works. Use it when factoring is not obvious.']],
        ['eq', 'ax² + bx + c = 0\n\nx = ( -b ± √(b² - 4ac) ) / 2a'],
        '## The discriminant',
        'The part under the root, <code>b² - 4ac</code>, tells you how many real answers there are before you do any work.',
        ['tb', ['b² - 4ac', 'Real roots', 'Graph'], ['Positive', 'Two', 'Crosses the x-axis twice'], ['Zero', 'One (repeated)', 'Just touches the axis'], ['Negative', 'None (two complex)', 'Never reaches the axis']],
        '## Shape of a parabola',
        ['eq', 'Vertex form:  y = a(x - h)² + k      vertex at (h, k)\nAxis of symmetry:  x = -b / 2a\na > 0 opens up,  a < 0 opens down'],
        '## Higher polynomials',
        ['ul', '<b>Factor theorem:</b> if f(c) = 0 then (x - c) is a factor.', '<b>Remainder theorem:</b> dividing f(x) by (x - c) leaves remainder f(c).', '<b>Rational root test:</b> any fraction root p/q has p dividing the constant term and q dividing the leading coefficient.', '<b>End behaviour:</b> for large x the highest power wins. Even degree: both ends go the same way. Odd degree: opposite ways.'],
        '## Patterns worth memorising',
        ['eq', 'a² - b² = (a - b)(a + b)\n(a + b)² = a² + 2ab + b²\na³ - b³ = (a - b)(a² + ab + b²)\na³ + b³ = (a + b)(a² - ab + b²)'],
        '## Inequalities',
        'Solve as an equation to find the boundary points, then test a value in each region. Multiplying or dividing by a negative number flips the sign.'
      ],
      quiz: [
        ['Solve x² - 5x + 6 = 0.', ['x = 2 or 3', 'x = -2 or -3', 'x = 1 or 6', 'x = 5 or 6'], 0, '(x - 2)(x - 3) = 0.'],
        ['The discriminant of x² + 2x + 5 is -16. The equation has:', ['No real roots', 'Two real roots', 'One real root', 'Three roots'], 0, 'A negative discriminant means the parabola misses the axis.'],
        ['The vertex of y = (x - 3)² + 4 is:', ['(3, 4)', '(-3, 4)', '(3, -4)', '(4, 3)'], 0, 'Vertex form reads off (h, k).'],
        ['a² - b² factors as:', ['(a - b)(a + b)', '(a - b)²', '(a + b)²', 'It cannot be factored'], 0, 'Difference of two squares.'],
        ['If f(2) = 0 for a polynomial f, then:', ['(x - 2) is a factor', '(x + 2) is a factor', '2 is the degree', 'f has no roots'], 0, 'The factor theorem.']
      ] },

    { id: 'exponentials', tab: 'Exponentials & logs', level: 'Intermediate',
      h: 'Exponentials and <span>logarithms</span>',
      intro: ['Linear growth adds the same amount each step. Exponential growth multiplies by the same amount each step. Logarithms are the tool that undoes exponents, and they turn multiplication into addition.'],
      facts: ['log is the inverse of exponent', 'e ≈ 2.71828'],
      b: [
        '## Laws of exponents',
        ['eq', 'a^m · a^n = a^(m+n)        (a^m)^n = a^(mn)\na^m / a^n = a^(m-n)        a^0 = 1\na^(-n) = 1 / a^n           a^(1/n) = n-th root of a'],
        '## What a logarithm is',
        'A log answers "what power?". <code>log₂ 8 = 3</code> because 2³ = 8.',
        ['eq', 'log_b(x) = y   means   b^y = x\n\nlog(xy)  = log x + log y\nlog(x/y) = log x - log y\nlog(x^n) = n · log x\nlog_b(x) = ln x / ln b      (change of base)'],
        ['note', 'Three common bases', '<b>log</b> usually means base 10. <b>ln</b> is base e. <b>log₂</b> is used in computing.'],
        '## Growth and decay',
        ['eq', 'A = P(1 + r/n)^(nt)      compound interest, n times a year\nA = P · e^(rt)           continuous growth (r negative for decay)\nN = N0 · (1/2)^(t / half-life)'],
        ['fig', '<svg viewBox="0 0 520 190"><g stroke="#333"><line x1="40" y1="165" x2="500" y2="165"/><line x1="40" y1="15" x2="40" y2="165"/></g><path d="M40 155 C200 150 320 120 400 20" fill="none" stroke="#00ffa3" stroke-width="2"/><line x1="40" y1="155" x2="480" y2="95" stroke="#888" stroke-width="2"/><path d="M40 25 C80 110 200 150 480 160" fill="none" stroke="#f472b6" stroke-width="2"/><text x="405" y="30" fill="#00ffa3">exponential growth</text><text x="400" y="90">linear</text><text x="150" y="130" fill="#f472b6">exponential decay</text></svg>', 'Exponential growth starts slowly, then overtakes any straight line. Decay falls fast, then levels off towards zero.'],
        '## Solving exponential equations',
        'Take logs of both sides to bring the unknown down from the exponent.',
        ['eq', '3^x = 20\nx · ln 3 = ln 20\nx = ln 20 / ln 3 ≈ 2.727'],
        ['tip', 'Rule of 72', 'Money growing at r% a year doubles in about 72 ÷ r years. At 6% that is about 12 years.']
      ],
      quiz: [
        ['log₂ 32 equals:', ['5', '16', '6', '4'], 0, '2⁵ = 32.'],
        ['log(xy) equals:', ['log x + log y', 'log x · log y', 'log x - log y', 'x log y'], 0, 'Logs turn multiplication into addition.'],
        ['Simplify a³ · a⁴.', ['a⁷', 'a¹²', 'a¹', '2a⁷'], 0, 'Add the exponents.'],
        ['A sample has a half-life of 10 days. After 30 days, what fraction is left?', ['1/8', '1/3', '1/6', '1/30'], 0, 'Three half-lives: ½ × ½ × ½.'],
        ['At 8% a year, money doubles in about:', ['9 years', '8 years', '12 years', '4 years'], 0, '72 ÷ 8 = 9.'],
        ['What is 5⁰?', ['1', '0', '5', 'Undefined'], 0, 'Any non-zero number to the power 0 is 1.']
      ] },

    { id: 'advanced', tab: 'Complex numbers & matrices', level: 'Advanced',
      h: 'Complex numbers, sequences and <span>matrices</span>',
      intro: ['Three tools that open the door to university maths: numbers that include √-1, sums of patterns, and grids of numbers that act on vectors.'],
      facts: ['i² = -1', 'Matrix multiplication is not commutative'],
      b: [
        '## Complex numbers',
        'Define <code>i</code> so that i² = -1. A complex number is <code>a + bi</code>: a real part and an imaginary part. With them, every polynomial of degree n has exactly n roots (the fundamental theorem of algebra).',
        ['eq', '(a + bi) + (c + di) = (a + c) + (b + d)i\n(a + bi)(c + di) = (ac - bd) + (ad + bc)i\nconjugate of a + bi is a - bi\n|a + bi| = √(a² + b²)'],
        ['fig', '<svg viewBox="0 0 520 190"><g stroke="#333"><line x1="60" y1="150" x2="460" y2="150"/><line x1="200" y1="15" x2="200" y2="180"/></g><line x1="200" y1="150" x2="350" y2="60" stroke="#00ffa3" stroke-width="2"/><circle cx="350" cy="60" r="4" fill="#00ffa3"/><g stroke="#666" stroke-dasharray="3 3"><line x1="350" y1="60" x2="350" y2="150"/><line x1="200" y1="60" x2="350" y2="60"/></g><text x="358" y="56" fill="#00ffa3">3 + 2i</text><text x="440" y="168">real</text><text x="206" y="26">imaginary</text><text x="250" y="96">length = √13</text></svg>', 'A complex number is a point on a plane. Its size is its distance from the origin.'],
        ['eq', "Euler's formula:   e^(iθ) = cos θ + i sin θ"],
        '## Sequences and series',
        ['tb', ['Type', 'Rule', 'n-th term', 'Sum of first n terms'], ['Arithmetic', 'Add d each time', 'a + (n - 1)d', 'n(first + last) / 2'], ['Geometric', 'Multiply by r each time', 'a · r^(n-1)', 'a(1 - r^n) / (1 - r)']],
        ['note', 'Infinite geometric series', 'If |r| < 1 the sum settles at a / (1 - r). So 1 + ½ + ¼ + ⅛ + … = 2.'],
        '## Binomial theorem',
        ['eq', '(a + b)^n = Σ C(n, k) · a^(n-k) · b^k       C(n, k) = n! / (k!(n - k)!)\n\n(a + b)^3 = a³ + 3a²b + 3ab² + b³'],
        '## Matrices',
        'A matrix is a grid of numbers. Multiply row by column. Order matters: AB is usually not BA.',
        ['eq', '[a b] [x]   [ax + by]            det [a b] = ad - bc\n[c d] [y] = [cx + dy]                [c d]\n\ninverse of [a b] = 1/(ad - bc) · [ d -b]\n           [c d]                 [-c  a]'],
        ['ul', 'A system of equations is one matrix equation: <code>Ax = b</code>, solved by <code>x = A⁻¹b</code>.', 'If the determinant is 0 the matrix has no inverse: the equations are either contradictory or repeats of each other.', 'An <b>eigenvector</b> of A is a direction that A only stretches: <code>Av = λv</code>. The stretch factor λ is the <b>eigenvalue</b>.']
      ],
      quiz: [
        ['(2 + 3i) + (1 - 5i) equals:', ['3 - 2i', '3 + 8i', '1 - 2i', '2 - 15i'], 0, 'Add real parts and imaginary parts separately.'],
        ['The size |3 + 4i| is:', ['5', '7', '25', '1'], 0, '√(9 + 16) = 5.'],
        ['The sum 1 + ½ + ¼ + ⅛ + … equals:', ['2', '1', 'Infinity', '1.5'], 0, 'a / (1 - r) = 1 / (1 - ½).'],
        ['The determinant of [[2, 1], [4, 3]] is:', ['2', '10', '-2', '5'], 0, '2·3 - 1·4 = 2.'],
        ['If det(A) = 0, then A:', ['Has no inverse', 'Is the identity', 'Has all zero entries', 'Equals its inverse'], 0, 'You would have to divide by zero.'],
        ['i⁴ equals:', ['1', '-1', 'i', '-i'], 0, 'i² = -1, so i⁴ = (-1)² = 1.']
      ] }
  ],
  sources: [
    ['OpenStax: College Algebra 2e', 'https://openstax.org/details/books/college-algebra-2e', 'free peer-reviewed textbook; functions, polynomials, logs, matrices'],
    ['OpenStax: Algebra and Trigonometry 2e', 'https://openstax.org/details/books/algebra-and-trigonometry-2e', 'complex numbers, sequences, binomial theorem'],
    ['Khan Academy: Algebra 2', 'https://www.khanacademy.org/math/algebra2', 'worked practice for every topic here'],
    ['MIT OpenCourseWare 18.06: Linear Algebra', 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', 'matrices, determinants, eigenvalues']
  ]
};
