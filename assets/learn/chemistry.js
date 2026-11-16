/* Learn · Chemistry. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'chemistry', title: 'Chemistry',
  lessons: [
    { id: 'atoms', tab: 'Atoms & the periodic table', level: 'Introductory',
      h: 'Atoms and <span>the periodic table</span>',
      intro: ['Everything you can touch is made of atoms. There are 118 known kinds, called elements. Chemistry is the study of how they join, split and rearrange.'],
      facts: ['118 elements', 'Protons decide the element', 'Electrons decide the chemistry'],
      b: [
        '## Inside an atom',
        ['tb', ['Particle', 'Charge', 'Where', 'What it decides'], ['Proton', '+1', 'Nucleus', 'Which element it is (the atomic number)'], ['Neutron', '0', 'Nucleus', 'Which isotope it is'], ['Electron', '-1', 'Shells around the nucleus', 'How the atom bonds and reacts']],
        ['fig', '<svg viewBox="0 0 520 190"><circle cx="150" cy="95" r="78" fill="none" stroke="#333"/><circle cx="150" cy="95" r="46" fill="none" stroke="#333"/><circle cx="150" cy="95" r="14" fill="#f5a623"/><g fill="#00ffa3"><circle cx="150" cy="49" r="5"/><circle cx="150" cy="141" r="5"/><circle cx="228" cy="95" r="5"/><circle cx="72" cy="95" r="5"/><circle cx="205" cy="40" r="5"/><circle cx="95" cy="150" r="5"/></g><text x="280" y="60">nucleus: 6 protons, 6 neutrons</text><text x="280" y="90">inner shell: 2 electrons</text><text x="280" y="120">outer shell: 4 electrons</text><text x="280" y="160" fill="#00ffa3">Carbon, atomic number 6</text></svg>', 'A simple shell picture of carbon. The four outer electrons are why carbon forms four bonds.'],
        ['kv', ['Atomic number', 'The number of protons. Carbon is always 6. Change it and you have a different element.'], ['Mass number', 'Protons plus neutrons. Carbon-12 has 6 + 6. Carbon-14 has 6 + 8.'], ['Isotopes', 'Atoms of one element with different numbers of neutrons. Same chemistry, different mass.'], ['Ions', 'Atoms that have gained or lost electrons and so carry a charge: Na⁺, Cl⁻.']],
        '## Reading the periodic table',
        ['ul', '<b>Rows (periods)</b> go left to right by atomic number. Each new row starts a new electron shell.', '<b>Columns (groups)</b> hold elements with the same number of outer electrons, so they behave alike.', '<b>Metals</b> sit on the left and centre: shiny, conduct electricity, lose electrons. <b>Non-metals</b> sit on the right: gain or share electrons.'],
        ['tb', ['Group', 'Name', 'Outer electrons', 'Behaviour'], ['1', 'Alkali metals (Li, Na, K)', '1', 'Very reactive; lose one electron'], ['2', 'Alkaline earth metals (Mg, Ca)', '2', 'Reactive; lose two'], ['17', 'Halogens (F, Cl, Br, I)', '7', 'Very reactive; gain one'], ['18', 'Noble gases (He, Ne, Ar)', 'Full shell', 'Almost never react']],
        '## Trends across the table',
        ['ul', 'Atoms get <b>smaller</b> left to right (more protons pull the same shell tighter) and <b>bigger</b> going down (more shells).', '<b>Electronegativity</b>, the pull on shared electrons, rises to the right and up. Fluorine is the strongest.', 'Atoms react so as to reach a full outer shell, usually eight electrons (the octet rule).']
      ],
      quiz: [
        ['What decides which element an atom is?', ['The number of protons', 'The number of neutrons', 'The number of electrons', 'Its mass'], 0, 'The atomic number is the proton count.'],
        ['Carbon-12 and carbon-14 differ in their number of:', ['Neutrons', 'Protons', 'Electrons', 'Shells'], 0, 'They are isotopes.'],
        ['Elements in the same column have the same:', ['Number of outer electrons', 'Mass', 'Number of neutrons', 'Size'], 0, 'That is why they react alike.'],
        ['Which group almost never reacts?', ['Noble gases', 'Halogens', 'Alkali metals', 'Transition metals'], 0, 'Their outer shell is already full.'],
        ['The most electronegative element is:', ['Fluorine', 'Caesium', 'Hydrogen', 'Gold'], 0, 'Top right of the table, excluding noble gases.']
      ] },

    { id: 'bonding', tab: 'Bonds & molecules', level: 'Beginner',
      h: 'Chemical bonds and <span>the shapes of molecules</span>',
      intro: ['Atoms bond because the result has lower energy. There are three main ways to do it, and the kind of bond explains whether a substance is a salt, a gas or a metal.'],
      facts: ['Ionic · covalent · metallic', 'Water is bent, which is why it is special'],
      b: [
        '## Three kinds of bond',
        ['tb', ['Bond', 'What happens', 'Between', 'Typical result'], ['Ionic', 'One atom gives electrons to another; opposite charges attract', 'Metal + non-metal', 'Hard, brittle crystals with high melting points (table salt, NaCl)'], ['Covalent', 'Atoms share pairs of electrons', 'Non-metal + non-metal', 'Molecules: gases, liquids, soft solids (H₂O, CO₂, sugar)'], ['Metallic', 'Outer electrons roam freely among all the atoms', 'Metal + metal', 'Conducts electricity, bends without breaking']],
        '## Polar or not',
        'In a covalent bond, the more electronegative atom pulls the shared electrons closer. That end becomes slightly negative. The bond is <b>polar</b>.',
        ['fig', '<svg viewBox="0 0 520 170"><line x1="180" y1="70" x2="120" y2="130" stroke="#888" stroke-width="3"/><line x1="180" y1="70" x2="240" y2="130" stroke="#888" stroke-width="3"/><circle cx="180" cy="70" r="28" fill="#f87171"/><circle cx="120" cy="130" r="18" fill="#e6e6e6"/><circle cx="240" cy="130" r="18" fill="#e6e6e6"/><text x="173" y="75" style="fill:#000;font-weight:700">O</text><text x="115" y="135" style="fill:#000">H</text><text x="235" y="135" style="fill:#000">H</text><text x="170" y="30" fill="#f87171">δ− (slightly negative)</text><text x="60" y="162">δ+</text><text x="250" y="162">δ+</text><text x="320" y="80">Angle: about 104.5°</text><text x="320" y="105">Bent shape = polar molecule</text></svg>', 'Water. Oxygen pulls electrons harder than hydrogen, and the bent shape means the charges do not cancel.'],
        '## Forces between molecules',
        ['tb', ['Force', 'Strength', 'Example'], ['London dispersion', 'Weakest; present in everything', 'Why even helium can be liquefied'], ['Dipole-dipole', 'Medium', 'Between polar molecules'], ['Hydrogen bond', 'Strongest of the three', 'H attached to N, O or F: water, DNA base pairs']],
        'Hydrogen bonds are why water is liquid at room temperature, why ice floats and why DNA zips together.',
        ['note', 'Like dissolves like', 'Polar substances dissolve in polar solvents (salt in water). Non-polar dissolve in non-polar (oil in petrol). Oil and water do not mix.'],
        '## States of matter',
        ['tb', ['State', 'Particles', 'Shape and volume'], ['Solid', 'Fixed in place, vibrating', 'Fixed shape, fixed volume'], ['Liquid', 'Close but sliding past each other', 'Takes the shape of its container'], ['Gas', 'Far apart, moving fast', 'Fills any container']]
      ],
      quiz: [
        ['Table salt (NaCl) is held together by:', ['Ionic bonds', 'Covalent bonds', 'Metallic bonds', 'Hydrogen bonds'], 0, 'Sodium gives an electron to chlorine.'],
        ['A covalent bond is:', ['A shared pair of electrons', 'A transfer of protons', 'An attraction between ions', 'A sea of free electrons'], 0, 'Sharing, not giving.'],
        ['Water is a polar molecule because:', ['It is bent and oxygen pulls electrons harder', 'It is linear', 'Hydrogen is a metal', 'It has ionic bonds'], 0, 'Shape plus unequal sharing.'],
        ['Why do metals conduct electricity?', ['Their outer electrons move freely', 'They contain ions in water', 'They have no electrons', 'They are polar'], 0, 'The "sea" of electrons carries current.'],
        ['Oil does not dissolve in water because:', ['Oil is non-polar and water is polar', 'Oil is heavier', 'Water is non-polar', 'Oil is ionic'], 0, 'Like dissolves like.']
      ] },

    { id: 'reactions', tab: 'Reactions & the mole', level: 'Intermediate',
      h: 'Reactions, equations and <span>the mole</span>',
      intro: ['A chemical reaction rearranges atoms. None are created and none are destroyed. That one fact lets you calculate exactly how much product you will get.'],
      facts: ['1 mole = 6.022 × 10²³ particles', 'Atoms in = atoms out'],
      b: [
        '## Balancing an equation',
        'Count each kind of atom on both sides. Change only the big numbers in front (coefficients), never the small ones inside a formula.',
        ['eq', 'Unbalanced:   H2 + O2  ->  H2O\nBalanced:   2 H2 + O2  ->  2 H2O        (4 H and 2 O on each side)'],
        '## The mole',
        'Atoms are too small to count, so chemists count in moles. One mole is 6.022 × 10²³ particles (Avogadro\'s number). The mass of one mole in grams equals the atomic or molecular mass on the periodic table.',
        ['eq', 'moles = mass (g) / molar mass (g/mol)\n\nWater H2O:  2(1.008) + 16.00 = 18.02 g/mol\n36 g of water = 36 / 18.02 ≈ 2 moles'],
        ['eq', 'How much water from 4 g of hydrogen?\n4 g H2 / 2.016 g/mol ≈ 2 mol H2\n2 H2 -> 2 H2O, so 2 mol H2 gives 2 mol H2O\n2 mol × 18.02 g/mol ≈ 36 g of water'],
        '## Types of reaction',
        ['tb', ['Type', 'Pattern', 'Example'], ['Synthesis', 'A + B → AB', '2 Mg + O₂ → 2 MgO'], ['Decomposition', 'AB → A + B', '2 H₂O₂ → 2 H₂O + O₂'], ['Combustion', 'fuel + O₂ → CO₂ + H₂O', 'CH₄ + 2 O₂ → CO₂ + 2 H₂O'], ['Single displacement', 'A + BC → AC + B', 'Zn + CuSO₄ → ZnSO₄ + Cu'], ['Redox', 'electrons move from one substance to another', 'rusting, batteries, respiration']],
        ['note', 'OIL RIG', '<b>O</b>xidation <b>I</b>s <b>L</b>oss of electrons. <b>R</b>eduction <b>I</b>s <b>G</b>ain.'],
        '## Energy and speed',
        ['kv', ['Exothermic', 'Gives out heat. Burning, hand warmers.'], ['Endothermic', 'Takes in heat. Cold packs, photosynthesis.'], ['Activation energy', 'The push needed to start a reaction, even one that releases energy overall.'], ['Catalyst', 'Lowers the activation energy so the reaction runs faster. It is not used up. Enzymes are biological catalysts.']],
        'Reactions go faster with higher temperature, higher concentration, more surface area or a catalyst, because particles collide more often or with more energy.',
        '## Equilibrium',
        'Many reactions run both ways. At equilibrium the forward and backward rates are equal, so amounts stop changing. <b>Le Chatelier\'s principle:</b> disturb an equilibrium and it shifts to partly undo the change.'
      ],
      quiz: [
        ['Which is correctly balanced?', ['2 H₂ + O₂ → 2 H₂O', 'H₂ + O₂ → H₂O', 'H₂ + O₂ → 2 H₂O', '2 H₂ + 2 O₂ → 2 H₂O'], 0, 'Four H and two O on each side.'],
        ['How many moles are in 36 g of water (18 g/mol)?', ['2', '0.5', '18', '648'], 0, '36 ÷ 18 = 2.'],
        ['A catalyst:', ['Lowers the activation energy', 'Is used up in the reaction', 'Changes the products', 'Raises the temperature'], 0, 'It speeds things up and is recovered unchanged.'],
        ['Oxidation is:', ['Loss of electrons', 'Gain of electrons', 'Gain of protons', 'Loss of neutrons'], 0, 'OIL RIG.'],
        ['An exothermic reaction:', ['Releases heat', 'Absorbs heat', 'Needs a catalyst', 'Cannot start by itself'], 0, 'Exo = out.'],
        ['One mole contains about:', ['6.022 × 10²³ particles', '1,000 particles', '6.022 × 10⁻²³ particles', '12 particles'], 0, "Avogadro's number."]
      ] },

    { id: 'acids', tab: 'Acids & organic chemistry', level: 'Advanced',
      h: 'Acids, bases and <span>carbon chemistry</span>',
      intro: ['Two topics that connect chemistry to daily life: what makes something an acid, and how carbon builds the molecules of living things.'],
      facts: ['pH 7 is neutral', 'Each pH step is ×10', 'Carbon forms four bonds'],
      b: [
        '## Acids and bases',
        'An <b>acid</b> gives away hydrogen ions (H⁺). A <b>base</b> accepts them. This is the Brønsted-Lowry definition.',
        ['eq', 'pH = -log10 [H+]\n\npH 0 ---- 7 ---- 14\n acid   neutral   base'],
        ['tb', ['Substance', 'Approximate pH'], ['Stomach acid', '1 to 2'], ['Lemon juice', '2'], ['Coffee', '5'], ['Pure water', '7'], ['Blood', '7.4'], ['Baking soda solution', '8 to 9'], ['Bleach', '12 to 13']],
        ['ul', 'The scale is logarithmic. pH 3 is ten times more acidic than pH 4 and a hundred times more than pH 5.', '<b>Strong</b> acids (HCl, H₂SO₄) split up completely in water. <b>Weak</b> acids (vinegar, citric acid) only partly.', 'Acid + base → salt + water. This is <b>neutralisation</b>.', 'A <b>buffer</b> is a mix of a weak acid and its partner base. It resists pH change. Your blood is buffered by bicarbonate.'],
        '## Why carbon',
        'Carbon has four outer electrons, so it makes four bonds. It bonds strongly to itself in chains, branches and rings. That gives millions of stable compounds, and they are the subject of organic chemistry.',
        ['tb', ['Family', 'Feature', 'Example'], ['Alkanes', 'Only single C-C bonds', 'Methane CH₄, propane C₃H₈'], ['Alkenes', 'A C=C double bond', 'Ethene C₂H₄ (makes polythene)'], ['Alkynes', 'A C≡C triple bond', 'Ethyne (acetylene)'], ['Aromatics', 'A ring with shared electrons', 'Benzene C₆H₆']],
        '## Functional groups',
        'A small cluster of atoms that gives a molecule its behaviour, whatever the rest looks like.',
        ['tb', ['Group', 'Structure', 'Found in'], ['Alcohol', '-OH', 'Ethanol, sugars'], ['Carboxylic acid', '-COOH', 'Vinegar, fatty acids, amino acids'], ['Amine', '-NH₂', 'Amino acids, many medicines'], ['Ester', '-COO-', 'Fats, fruit smells'], ['Carbonyl (aldehyde, ketone)', 'C=O', 'Sugars, acetone'], ['Amide', '-CONH-', 'The links in proteins']],
        '## Molecules of life',
        ['kv', ['Carbohydrates', 'Sugars and chains of sugars. Quick energy and structure (cellulose).'], ['Lipids', 'Fats and oils. Long hydrocarbon chains: energy storage and cell membranes.'], ['Proteins', 'Chains of amino acids joined by amide (peptide) bonds, folded into working shapes.'], ['Nucleic acids', 'DNA and RNA: chains of nucleotides that store information.']],
        ['note', 'Mirror molecules', 'Many organic molecules come in left-handed and right-handed forms (chirality). The body often uses only one. The two forms of a drug can act very differently.']
      ],
      quiz: [
        ['A solution with pH 3 compared with pH 5 is:', ['100 times more acidic', 'Twice as acidic', '2 times less acidic', '20 times more acidic'], 0, 'Two steps on a log scale: 10 × 10.'],
        ['An acid is a substance that:', ['Donates H⁺ ions', 'Accepts H⁺ ions', 'Donates electrons only', 'Has pH above 7'], 0, 'Brønsted-Lowry definition.'],
        ['Acid + base gives:', ['Salt + water', 'Two acids', 'Hydrogen gas only', 'A metal'], 0, 'Neutralisation.'],
        ['Carbon forms how many bonds?', ['4', '2', '6', '1'], 0, 'Four outer electrons, four bonds.'],
        ['The -OH group marks an:', ['Alcohol', 'Amine', 'Ester', 'Alkane'], 0, 'As in ethanol.'],
        ['Proteins are chains of:', ['Amino acids', 'Sugars', 'Fatty acids', 'Nucleotides'], 0, 'Joined by peptide bonds.']
      ] }
  ],
  sources: [
    ['OpenStax: Chemistry 2e', 'https://openstax.org/details/books/chemistry-2e', 'free peer-reviewed textbook; every topic in this course'],
    ['IUPAC: Periodic Table of Elements', 'https://iupac.org/what-we-do/periodic-table-of-elements/', 'the official table and atomic masses'],
    ['NIST: Avogadro constant', 'https://physics.nist.gov/cgi-bin/cuu/Value?na', 'the exact value of one mole'],
    ['OpenStax: Organic Chemistry', 'https://openstax.org/details/books/organic-chemistry', 'functional groups and carbon compounds'],
    ['Royal Society of Chemistry: Periodic Table', 'https://www.rsc.org/periodic-table', 'properties and uses of each element']
  ]
};
