/* Learn · Biology. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'biology', title: 'Biology',
  lessons: [
    { id: 'cells', tab: 'Cells', level: 'Introductory',
      h: 'The cell: <span>the unit of life</span>',
      intro: ['Every living thing is made of cells, and every cell comes from another cell. A bacterium is one cell. You are tens of trillions, all descended from a single fertilised egg.'],
      facts: ['Cell theory, 1839', 'Two kinds: with and without a nucleus', 'Most cells are 1 to 100 micrometres wide'],
      b: [
        '## What makes something alive',
        ['ul', 'Made of one or more cells', 'Uses energy (metabolism)', 'Keeps its inside steady (homeostasis)', 'Grows and develops', 'Responds to its surroundings', 'Reproduces, passing on DNA', 'Evolves over generations'],
        '## Two kinds of cell',
        ['tb', ['', 'Prokaryote', 'Eukaryote'], ['Nucleus', 'None; DNA floats free', 'DNA inside a nucleus'], ['Size', 'About 1 to 5 µm', 'About 10 to 100 µm'], ['Inner compartments', 'None', 'Many organelles'], ['Examples', 'Bacteria, archaea', 'Animals, plants, fungi, protists']],
        '## Inside a eukaryotic cell',
        ['tb', ['Part', 'Job', 'Think of it as'], ['Cell membrane', 'Controls what enters and leaves', 'The border'], ['Nucleus', 'Holds the DNA', 'The library'], ['Ribosomes', 'Build proteins', 'The workbenches'], ['Endoplasmic reticulum', 'Folds proteins (rough ER); makes lipids (smooth ER)', 'The factory floor'], ['Golgi apparatus', 'Packages and ships proteins', 'The post room'], ['Mitochondria', 'Release energy from food as ATP', 'The power stations'], ['Lysosomes', 'Break down waste', 'The recycling centre'], ['Cytoskeleton', 'Gives shape, moves cargo', 'The scaffolding and rails']],
        'Plant cells add a rigid <b>cell wall</b>, <b>chloroplasts</b> for photosynthesis and a large water-filled <b>vacuole</b>.',
        '## The membrane',
        'The cell membrane is a double layer of fat molecules (phospholipids) with proteins floating in it. Small, uncharged molecules such as oxygen slip straight through. Everything else needs a protein channel or pump.',
        ['tb', ['Transport', 'Energy needed?', 'Direction'], ['Diffusion', 'No', 'High concentration to low'], ['Osmosis', 'No', 'Water moves towards the saltier side'], ['Active transport', 'Yes (ATP)', 'Low to high, against the gradient']],
        '## How cells divide',
        ['tb', ['', 'Mitosis', 'Meiosis'], ['Purpose', 'Growth and repair', 'Making eggs and sperm'], ['Divisions', 'One', 'Two'], ['Result', '2 identical cells', '4 different cells'], ['Chromosomes in each', 'Full set (46 in humans)', 'Half set (23)']],
        ['note', 'Where mitochondria came from', 'Mitochondria and chloroplasts have their own DNA and divide on their own. The evidence is strong that they began as free-living bacteria that were swallowed by a larger cell over a billion years ago and stayed.']
      ],
      quiz: [
        ['Which cells have no nucleus?', ['Prokaryotes', 'Eukaryotes', 'Plant cells', 'Nerve cells'], 0, 'Bacteria and archaea.'],
        ['Which organelle releases most of the cell\'s usable energy?', ['Mitochondrion', 'Ribosome', 'Golgi apparatus', 'Lysosome'], 0, 'It makes ATP.'],
        ['Proteins are built by:', ['Ribosomes', 'Lysosomes', 'The cell wall', 'Vacuoles'], 0, 'Following instructions copied from DNA.'],
        ['Osmosis is the movement of:', ['Water across a membrane', 'Salt across a membrane', 'Proteins out of a cell', 'DNA into the nucleus'], 0, 'Towards the more concentrated side.'],
        ['Meiosis produces cells with:', ['Half the usual number of chromosomes', 'Double the number', 'The same number', 'No chromosomes'], 0, 'So egg plus sperm restores the full set.'],
        ['Which is found in plant cells but not animal cells?', ['Chloroplasts', 'Mitochondria', 'Ribosomes', 'A nucleus'], 0, 'Along with a cell wall.']
      ] },

    { id: 'dna', tab: 'DNA & proteins', level: 'Beginner',
      h: 'From <span>DNA to protein</span>',
      intro: ['DNA is a set of instructions written in a four-letter alphabet. Cells read those instructions to build proteins, and proteins do nearly all the work of life.'],
      facts: ['4 bases: A, T, C, G', 'About 3 billion base pairs in the human genome', 'About 20,000 protein-coding genes'],
      b: [
        '## The structure of DNA',
        ['ul', 'Two strands twisted into a <b>double helix</b>, described by Watson and Crick in 1953 using X-ray data from Rosalind Franklin.', 'Each strand is a chain of units called nucleotides. Each carries one of four bases.', 'The bases pair across the two strands by fixed rules: <b>A with T</b>, <b>C with G</b>.', 'Because of the pairing, each strand is a template for the other. That is how DNA is copied.'],
        ['fig', '<svg viewBox="0 0 520 130"><path d="M20 30 H500 M20 100 H500" stroke="#666" stroke-width="4" fill="none"/><g font-size="14" style="font-weight:700"><g fill="#00ffa3"><text x="48" y="52">A</text><text x="168" y="52">G</text><text x="288" y="52">T</text><text x="408" y="52">C</text></g><g fill="#f472b6"><text x="48" y="92">T</text><text x="168" y="92">C</text><text x="288" y="92">A</text><text x="408" y="92">G</text></g></g><g stroke="#444" stroke-dasharray="2 3"><line x1="53" y1="56" x2="53" y2="78"/><line x1="173" y1="56" x2="173" y2="78"/><line x1="293" y1="56" x2="293" y2="78"/><line x1="413" y1="56" x2="413" y2="78"/></g><text x="20" y="20">one strand</text><text x="20" y="122">its partner</text></svg>', 'Base pairing. If you know one strand, you know the other.'],
        '## The central dogma',
        ['eq', 'DNA  --transcription-->  RNA  --translation-->  protein'],
        ['ol', '<b>Transcription.</b> In the nucleus, an enzyme copies one gene into a strand of messenger RNA (mRNA). RNA uses U in place of T.', '<b>Translation.</b> A ribosome reads the mRNA three bases at a time. Each triplet, a <b>codon</b>, means one amino acid.', 'Transfer RNAs bring the matching amino acids, and the ribosome links them into a chain.', 'The chain folds into a three-dimensional shape. The shape decides what the protein does.'],
        '## The genetic code',
        ['ul', '64 possible codons code for 20 amino acids, so most amino acids have several codons.', '<b>AUG</b> means "start" (and the amino acid methionine). Three codons mean "stop".', 'The code is nearly the same in every living thing: strong evidence of common ancestry, and the reason a human gene can work in a bacterium.'],
        '## Genes, chromosomes, genome',
        ['kv', ['Gene', 'A stretch of DNA that codes for a protein or a working RNA.'], ['Chromosome', 'One very long DNA molecule wound round proteins. Humans have 23 pairs.'], ['Genome', 'All the DNA of an organism.'], ['Allele', 'One version of a gene. You carry two alleles of most genes, one from each parent.']],
        '## Mutations',
        'A mutation is a change in the DNA sequence. Most do nothing. A few are harmful, and a few are useful.',
        ['tb', ['Type', 'What changes', 'Example'], ['Substitution', 'One base swapped', 'Sickle cell disease: one A changed to T in the haemoglobin gene'], ['Insertion / deletion', 'Bases added or lost', 'Can shift the whole reading frame'], ['Chromosomal', 'Large pieces moved, lost or duplicated', 'An extra chromosome 21 causes Down syndrome']],
        '## Switching genes on and off',
        'Every cell in your body has the same DNA. A liver cell differs from a neuron because different genes are switched on. Chemical tags on DNA and its packaging proteins help control this without changing the sequence. The study of those tags is <b>epigenetics</b>.',
        ['note', 'Reading and writing DNA', 'PCR copies a chosen stretch of DNA millions of times. Sequencing reads the order of bases. CRISPR-Cas9, adapted from a bacterial defence system and described as an editing tool in 2012, lets scientists cut DNA at a chosen site.']
      ],
      quiz: [
        ['In DNA, A pairs with:', ['T', 'G', 'C', 'U'], 0, 'And C pairs with G.'],
        ['Copying a gene into mRNA is called:', ['Transcription', 'Translation', 'Replication', 'Mutation'], 0, 'Translation is the next step.'],
        ['A codon is:', ['Three bases that code for one amino acid', 'A type of protein', 'A whole chromosome', 'A cell organelle'], 0, 'The ribosome reads them in order.'],
        ['Humans have how many pairs of chromosomes?', ['23', '46', '21', '64'], 0, '46 in total.'],
        ['Different cell types in one body differ because:', ['Different genes are switched on', 'They have different DNA', 'They have no DNA', 'They come from different parents'], 0, 'Same genome, different expression.'],
        ['RNA uses which base in place of T?', ['U', 'A', 'G', 'C'], 0, 'Uracil.']
      ] },

    { id: 'energy', tab: 'Energy in living things', level: 'Intermediate',
      h: 'Energy: <span>photosynthesis and respiration</span>',
      intro: ['Life runs on a flow of energy that starts in the Sun. Plants capture it in sugar. Almost everything alive, plants included, then burns that sugar slowly to power its cells.'],
      facts: ['ATP is the cell\'s energy currency', 'About 30 ATP per glucose with oxygen', 'The two equations are mirror images'],
      b: [
        '## ATP',
        'Cells do not use sugar directly. They transfer its energy to a small molecule, <b>ATP</b> (adenosine triphosphate). Breaking off its third phosphate releases a packet of energy just the right size for cell work. Your body recycles roughly its own weight in ATP every day.',
        '## Photosynthesis',
        ['eq', '6 CO2 + 6 H2O + light  ->  C6H12O6 + 6 O2\ncarbon dioxide + water + light  ->  glucose + oxygen'],
        ['tb', ['Stage', 'Where', 'What happens'], ['Light reactions', 'Inner membranes of the chloroplast', 'Light splits water, releasing oxygen, and makes ATP and NADPH'], ['Calvin cycle', 'Fluid of the chloroplast', 'ATP and NADPH are used to build sugar from CO₂']],
        'Chlorophyll absorbs red and blue light and reflects green, which is why leaves look green. The oxygen you breathe is a by-product of water being split.',
        '## Cellular respiration',
        ['eq', 'C6H12O6 + 6 O2  ->  6 CO2 + 6 H2O + energy (ATP)'],
        ['tb', ['Stage', 'Where', 'Yield'], ['Glycolysis', 'Cytoplasm', '2 ATP; glucose split into two pyruvate'], ['Krebs (citric acid) cycle', 'Inside the mitochondrion', '2 ATP; carbon leaves as CO₂; electrons loaded onto carriers'], ['Electron transport chain', 'Inner mitochondrial membrane', 'About 26 to 28 ATP; oxygen accepts the electrons and forms water']],
        ['note', 'Why you need oxygen', 'Oxygen is the final acceptor of electrons at the end of the chain. Without it the chain backs up and the cell is left with only the 2 ATP from glycolysis.'],
        '## Without oxygen',
        ['tb', ['Process', 'In', 'Product'], ['Lactic acid fermentation', 'Hard-working muscle, some bacteria', 'Lactate (yoghurt, sauerkraut)'], ['Alcoholic fermentation', 'Yeast', 'Ethanol and CO₂ (beer, bread)']],
        '## Enzymes',
        ['ul', 'Enzymes are proteins that speed up reactions, often by a factor of millions, without being used up.', 'Each has an <b>active site</b> shaped to fit particular molecules, its substrates.', 'They work best at a particular temperature and pH. Too hot and the shape unravels (denaturing).', 'Many medicines work by blocking one enzyme.'],
        '## The big cycle',
        'Photosynthesis takes in CO₂ and water and gives out sugar and oxygen. Respiration takes in sugar and oxygen and gives out CO₂ and water. Carbon cycles between them. Energy does not cycle: it arrives as light and leaves as heat.'
      ],
      quiz: [
        ['The cell\'s energy currency is:', ['ATP', 'DNA', 'Glucose', 'Oxygen'], 0, 'Energy from food is transferred to ATP.'],
        ['Photosynthesis produces glucose and:', ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'ATP only'], 0, 'From splitting water.'],
        ['Most ATP in respiration is made by:', ['The electron transport chain', 'Glycolysis', 'The Krebs cycle', 'Fermentation'], 0, 'On the inner mitochondrial membrane.'],
        ['Glycolysis takes place in the:', ['Cytoplasm', 'Nucleus', 'Chloroplast', 'Golgi apparatus'], 0, 'It needs no oxygen.'],
        ['In respiration, oxygen:', ['Accepts electrons at the end of the chain', 'Is turned into glucose', 'Splits glucose', 'Makes chlorophyll'], 0, 'And forms water.'],
        ['An enzyme is:', ['A protein that speeds up a reaction', 'A sugar', 'A kind of DNA', 'A cell membrane'], 0, 'It is not used up.']
      ] },

    { id: 'evolution', tab: 'Genetics & evolution', level: 'Advanced',
      h: 'Inheritance and <span>evolution</span>',
      intro: ['Two ideas explain why offspring resemble their parents and why species change. Gregor Mendel worked out the rules of inheritance with pea plants in the 1860s. Charles Darwin and Alfred Russel Wallace explained how populations adapt.'],
      facts: ['Mendel published in 1866', 'On the Origin of Species, 1859', 'Life on Earth: at least 3.5 billion years'],
      b: [
        '## Mendel\'s rules',
        ['kv', ['Two copies', 'You carry two alleles of each gene, one from each parent.'], ['Dominant and recessive', 'A dominant allele shows with one copy. A recessive allele shows only with two.'], ['Genotype and phenotype', 'Genotype is the alleles you carry. Phenotype is what you can observe.'], ['Segregation', 'Each egg or sperm gets just one of the two alleles, at random.']],
        ['eq', 'Two carriers, Aa × Aa\n\n        A     a\n   A    AA    Aa\n   a    Aa    aa\n\n1 AA : 2 Aa : 1 aa    ->    3 show the dominant trait, 1 shows the recessive'],
        '## Beyond Mendel',
        ['ul', 'Most traits, such as height, depend on many genes plus the environment.', 'Some alleles blend (incomplete dominance) or both show (codominance, as in AB blood type).', 'Genes on the X chromosome show sex-linked patterns: red-green colour blindness is far more common in men.', 'Genes close together on a chromosome tend to be inherited together.'],
        '## Natural selection',
        ['ol', '<b>Variation.</b> Individuals in a population differ.', '<b>Inheritance.</b> Some of those differences are passed on.', '<b>Overproduction.</b> More offspring are born than can survive.', '<b>Differential survival.</b> Those with traits that suit the environment leave more offspring.', 'Over generations, the helpful traits become more common. The population adapts.'],
        ['note', 'Two common mistakes', 'Individuals do not evolve; populations do. And evolution has no goal: it favours whatever works now, not what would be best in the long run.'],
        '## Other forces',
        ['tb', ['Mechanism', 'What it does'], ['Mutation', 'Creates new alleles; the raw material'], ['Genetic drift', 'Random change, strongest in small populations'], ['Gene flow', 'Alleles move between populations through migration'], ['Sexual selection', 'Traits that win mates spread, even at a cost to survival']],
        '## The evidence',
        ['tb', ['Line of evidence', 'Example'], ['Fossils', 'Tiktaalik, a fish with limb bones; feathered dinosaurs'], ['Comparative anatomy', 'The same arm bones in a human, bat, whale and cat'], ['DNA', 'Humans and chimpanzees share about 98 to 99% of their aligned DNA sequence'], ['Observed evolution', 'Bacteria evolving antibiotic resistance; finch beaks changing in drought years'], ['Biogeography', 'Island species resemble those of the nearest mainland']],
        '## Classifying life',
        'All known life falls into three domains: <b>Bacteria</b>, <b>Archaea</b> and <b>Eukarya</b>. Species are named in two parts, genus then species: <i>Homo sapiens</i>. A species is usually defined as a group that can breed together and produce fertile offspring.'
      ],
      quiz: [
        ['Two carriers (Aa × Aa) have a child. The chance it shows the recessive trait is:', ['1 in 4', '1 in 2', '3 in 4', 'Zero'], 0, 'Only aa shows it.'],
        ['Phenotype means:', ['The traits you can observe', 'The alleles carried', 'The number of chromosomes', 'A type of mutation'], 0, 'Genotype is the alleles.'],
        ['Natural selection acts on:', ['Inherited variation in a population', 'Traits acquired in a lifetime', 'A single individual\'s wishes', 'Only harmful mutations'], 0, 'Populations evolve, not individuals.'],
        ['Random change in allele frequency, strongest in small populations, is:', ['Genetic drift', 'Gene flow', 'Natural selection', 'Mitosis'], 0, 'Chance, not fitness.'],
        ['The same arm bones in humans, bats and whales are evidence of:', ['Common ancestry', 'Identical lifestyles', 'Recent mutation', 'Convergent habitats'], 0, 'Homologous structures.'],
        ['Antibiotic resistance in bacteria is an example of:', ['Evolution observed in real time', 'Genetic drift only', 'Photosynthesis', 'Mendel\'s first law'], 0, 'Resistant cells survive and multiply.']
      ] },

    { id: 'medicines', tab: 'How medicines work', level: 'Advanced',
      h: 'Pharmacology fundamentals: <span>how a medicine acts</span>',
      intro: ['Pharmacology is biology applied: how a chemical changes what the body does, and what the body does to the chemical. A few principles explain nearly every medicine.', 'This is education about how drugs work in general. It is not guidance on taking any medicine. For that, ask a doctor or pharmacist.'],
      facts: ['Most drugs act on proteins', 'Dose makes the poison', 'Every drug has side effects'],
      b: [
        '## Two halves of the subject',
        ['kv', ['Pharmacodynamics', 'What the drug does to the body: which target it hits and what follows.'], ['Pharmacokinetics', 'What the body does to the drug: how it gets in, where it goes, how it is removed.']],
        '## Drug targets',
        'Most medicines work by binding to a protein and changing its activity.',
        ['tb', ['Target', 'What the drug does', 'Example'], ['Receptor', 'Switches a cell signal on or off', 'Salbutamol opens airways; antihistamines block histamine'], ['Enzyme', 'Blocks a reaction', 'Ibuprofen blocks the enzymes that make prostaglandins'], ['Ion channel', 'Opens or blocks a pore', 'Local anaesthetics block sodium channels in nerves'], ['Transporter', 'Stops a molecule being carried', 'SSRIs block the reuptake of serotonin'], ['Something in a microbe', 'Hits a target humans lack', 'Penicillin blocks bacterial cell-wall building']],
        '## Agonists and antagonists',
        ['tb', ['Type', 'Action', 'Picture'], ['Agonist', 'Binds a receptor and activates it', 'A key that turns the lock'], ['Antagonist', 'Binds and blocks without activating', 'A key that fits but will not turn, and keeps other keys out'], ['Partial agonist', 'Activates, but less than fully', 'A key that turns halfway']],
        '## Dose and response',
        ['fig', '<svg viewBox="0 0 520 190"><g stroke="#333"><line x1="50" y1="165" x2="490" y2="165"/><line x1="50" y1="15" x2="50" y2="165"/></g><path d="M50 160 C180 158 220 130 260 92 C300 50 340 28 480 25" fill="none" stroke="#00ffa3" stroke-width="2"/><g stroke="#666" stroke-dasharray="3 3"><line x1="260" y1="92" x2="260" y2="165"/><line x1="50" y1="92" x2="260" y2="92"/><line x1="50" y1="25" x2="480" y2="25"/></g><text x="56" y="20">maximum effect</text><text x="56" y="88">half of maximum</text><text x="245" y="182">EC50</text><text x="400" y="182">dose (log scale)</text><text x="14" y="100" transform="rotate(-90 14 100)">effect</text></svg>', 'A dose-response curve. Raising the dose raises the effect up to a ceiling. The dose that gives half the maximum effect is a measure of potency.'],
        ['ul', '<b>Potency</b> is how little drug you need. <b>Efficacy</b> is the largest effect it can produce. A more potent drug is not a better one.', 'The <b>therapeutic index</b> compares the dose that harms with the dose that helps. A wide gap is a safe drug; a narrow one needs careful monitoring.', 'Paracelsus, 500 years ago: all things are poison, and only the dose makes a thing not a poison.'],
        '## The journey of a drug: ADME',
        ['tb', ['Step', 'Question', 'Key fact'], ['<b>A</b>bsorption', 'How does it get into the blood?', 'A swallowed drug passes through the gut wall and liver first'], ['<b>D</b>istribution', 'Where does it go?', 'Fat-soluble drugs spread into tissues; the brain is guarded by a barrier'], ['<b>M</b>etabolism', 'How is it changed?', 'Mostly by liver enzymes, which make it easier to excrete'], ['<b>E</b>xcretion', 'How does it leave?', 'Mostly by the kidneys into urine']],
        'The <b>half-life</b> is the time for the blood level to fall by half. It decides how often a drug must be taken.',
        '## Why side effects happen',
        ['ul', 'The target exists in more than one place. An antihistamine that reaches the brain makes you drowsy.', 'The drug also binds other, unintended targets.', 'The intended effect goes too far: a blood-pressure drug causes dizziness.', 'People differ in genes, age, liver and kidney function and other medicines taken.'],
        ['note', 'Go deeper', 'The course <a href="learn-pharmacology.html">Advanced Pharmacology</a> covers the mathematics of half-life and dosing, receptors in detail and drug interactions.']
      ],
      quiz: [
        ['Pharmacokinetics is the study of:', ['What the body does to the drug', 'What the drug does to the body', 'How drugs are sold', 'Drug names'], 0, 'Absorption, distribution, metabolism, excretion.'],
        ['An antagonist:', ['Blocks a receptor without activating it', 'Activates a receptor fully', 'Destroys the receptor', 'Is always a poison'], 0, 'It keeps the natural signal out.'],
        ['A drug that works at a very low dose is said to be:', ['Potent', 'Efficacious', 'Safe', 'Selective'], 0, 'Potency is about dose, not maximum effect.'],
        ['The main organ that chemically changes drugs is the:', ['Liver', 'Heart', 'Lung', 'Skin'], 0, 'Using families of enzymes.'],
        ['Half-life is the time for:', ['The blood level to fall by half', 'Half the tablet to dissolve', 'The effect to start', 'Half the patients to respond'], 0, 'It sets the dosing interval.'],
        ['Penicillin harms bacteria and not people because:', ['It hits a target human cells do not have', 'It is a very weak drug', 'People are immune to it', 'It never enters the body'], 0, 'Human cells have no cell wall.']
      ] }
  ],
  sources: [
    ['OpenStax: Biology 2e', 'https://openstax.org/details/books/biology-2e', 'free peer-reviewed textbook; cells, DNA, energy, genetics, evolution'],
    ['National Human Genome Research Institute: Talking Glossary and fact sheets', 'https://www.genome.gov/about-genomics/fact-sheets', 'genome size, gene count, CRISPR'],
    ['NIH National Institute of General Medical Sciences: Pharmacology', 'https://www.nigms.nih.gov/education/fact-sheets/Pages/pharmacology.aspx', 'how medicines act and move through the body'],
    ['Merck Manual: Overview of Pharmacodynamics', 'https://www.merckmanuals.com/professional/clinical-pharmacology/pharmacodynamics/overview-of-pharmacodynamics', 'receptors, agonists, dose-response'],
    ['University of California Museum of Paleontology: Understanding Evolution', 'https://evolution.berkeley.edu/', 'natural selection and the evidence'],
    ['The Nobel Prize in Chemistry 2020', 'https://www.nobelprize.org/prizes/chemistry/2020/press-release/', 'CRISPR-Cas9 genome editing']
  ]
};
