/* Learn · Economics & Money. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'economics', title: 'Economics & Money',
  lessons: [
    { id: 'markets', tab: 'Supply & demand', level: 'Introductory',
      h: 'Scarcity, choice and <span>how prices form</span>',
      intro: ['Economics starts from one fact: there is not enough of everything for everyone to have all they want. So people, firms and governments must choose. Prices are how millions of those choices get coordinated without anyone being in charge.'],
      facts: ['Every choice has a cost', 'Price settles where supply meets demand'],
      b: [
        '## Three ideas to carry everywhere',
        ['kv', ['Opportunity cost', 'The true cost of anything is the best alternative you gave up. An hour at the gym costs an hour of something else.'], ['Thinking at the margin', 'Decisions are about one more or one less. Not "should I study?" but "is one more hour worth it?"'], ['Incentives', 'People respond to rewards and penalties. Change the incentive and behaviour changes, sometimes in ways nobody intended.']],
        '## Demand and supply',
        ['ul', '<b>Demand:</b> as price falls, people buy more. The demand curve slopes down.', '<b>Supply:</b> as price rises, sellers offer more. The supply curve slopes up.', 'Where they cross is the <b>equilibrium</b>: the price at which the amount people want equals the amount on offer.'],
        ['fig', '<svg viewBox="0 0 520 200"><g stroke="#444"><line x1="60" y1="170" x2="460" y2="170"/><line x1="60" y1="20" x2="60" y2="170"/></g><line x1="90" y1="40" x2="420" y2="150" stroke="#f472b6" stroke-width="2"/><line x1="90" y1="150" x2="420" y2="40" stroke="#00ffa3" stroke-width="2"/><g stroke="#666" stroke-dasharray="3 3"><line x1="255" y1="95" x2="255" y2="170"/><line x1="60" y1="95" x2="255" y2="95"/></g><circle cx="255" cy="95" r="4" fill="#fff"/><text x="425" y="150" fill="#f472b6">Demand</text><text x="425" y="44" fill="#00ffa3">Supply</text><text x="22" y="99">price</text><text x="235" y="188">quantity</text><text x="265" y="88">equilibrium</text><text x="20" y="30">Price</text><text x="420" y="188">Quantity</text></svg>', 'Above the crossing point there is a surplus and the price drifts down. Below it there is a shortage and the price is bid up.'],
        '## What shifts the curves',
        ['tb', ['Event', 'Which curve', 'Result'], ['Incomes rise', 'Demand shifts right', 'Higher price, more sold'], ['A substitute gets cheaper', 'Demand shifts left', 'Lower price, less sold'], ['Production costs fall', 'Supply shifts right', 'Lower price, more sold'], ['A bad harvest', 'Supply shifts left', 'Higher price, less sold']],
        '## Elasticity',
        'Elasticity measures how strongly quantity reacts to a price change. Demand for insulin or petrol is <b>inelastic</b>: people buy almost the same amount at any price. Demand for restaurant meals is <b>elastic</b>: a small price rise loses many customers.',
        '## When markets fail',
        ['tb', ['Problem', 'What goes wrong', 'Example'], ['Externality', 'A cost or benefit lands on someone outside the deal', 'Pollution; vaccination'], ['Public good', 'Nobody can be excluded, so nobody wants to pay', 'Street lighting, national defence'], ['Monopoly', 'One seller sets a high price and limits supply', 'A drug under patent'], ['Information gap', 'One side knows more than the other', 'Used cars; insurance']]
      ],
      quiz: [
        ['Opportunity cost is:', ['The best alternative you give up', 'The price on the label', 'The total you have spent', 'A tax'], 0, 'Every choice costs you the next best option.'],
        ['If a bad harvest cuts the supply of wheat, the price will tend to:', ['Rise', 'Fall', 'Stay the same', 'Become zero'], 0, 'Supply shifts left.'],
        ['Demand for a life-saving medicine is usually:', ['Inelastic', 'Elastic', 'Zero', 'Infinite'], 0, 'People buy it at almost any price.'],
        ['Pollution is an example of:', ['A negative externality', 'A public good', 'Elastic demand', 'A subsidy'], 0, 'The cost falls on people outside the transaction.'],
        ['At the equilibrium price:', ['Quantity demanded equals quantity supplied', 'Sellers make no profit', 'Demand is zero', 'Supply is unlimited'], 0, 'There is no surplus and no shortage.']
      ] },

    { id: 'macro', tab: 'The whole economy', level: 'Beginner',
      h: 'GDP, inflation and <span>interest rates</span>',
      intro: ['Macroeconomics looks at the economy as a whole: how much is produced, how fast prices rise, how many people have work, and what governments and central banks can do about it.'],
      facts: ['GDP = C + I + G + (X - M)', 'Many central banks target 2% inflation'],
      b: [
        '## The four headline numbers',
        ['tb', ['Number', 'What it measures', 'Watch for'], ['GDP', 'The value of everything produced in a country in a year', 'Growth rate; "real" GDP removes inflation'], ['Inflation', 'How fast the general price level is rising', 'Measured by a basket of goods (CPI)'], ['Unemployment', 'Share of people who want work and cannot find it', 'Does not count those who stopped looking'], ['Interest rates', 'The price of borrowing money', 'Set at the base by the central bank']],
        ['eq', 'GDP = Consumption + Investment + Government spending + (Exports - Imports)'],
        ['note', 'What GDP misses', 'GDP counts paid activity only. It leaves out unpaid care and housework, says nothing about who gets the income, and counts cleaning up a disaster as growth.'],
        '## Inflation',
        ['ul', 'At 2% inflation, prices double in about 36 years. At 7%, in about 10.', '<b>Nominal</b> values are in today\'s money. <b>Real</b> values are adjusted for inflation. A 5% pay rise with 6% inflation is a real pay cut.', 'Inflation helps borrowers (they repay in cheaper money) and hurts savers holding cash.', 'Causes: too much spending chasing too few goods, rising costs such as energy, or people simply expecting prices to rise.'],
        ['eq', 'real return ≈ nominal return - inflation\n\nSavings account pays 4%, inflation is 3%  ->  real return ≈ 1%'],
        '## Two sets of tools',
        ['tb', ['', 'Monetary policy', 'Fiscal policy'], ['Who', 'The central bank', 'The government'], ['Tool', 'Interest rates; buying or selling bonds', 'Taxes and spending'], ['To cool inflation', 'Raise rates: borrowing costs more, spending slows', 'Raise taxes or cut spending'], ['To fight recession', 'Cut rates', 'Cut taxes or raise spending']],
        '## The business cycle',
        'Economies grow in waves: expansion, peak, recession, trough, recovery. A common rule of thumb calls two quarters of falling real GDP in a row a recession.',
        '## Trade',
        '<b>Comparative advantage:</b> even if one country is better at making everything, both gain when each makes what it gives up least to produce, and they trade. Trade raises total output, but the gains and losses fall on different people.'
      ],
      quiz: [
        ['GDP measures:', ['The value of goods and services produced', 'The stock market level', 'Government debt', 'Average wages'], 0, 'Usually per year or per quarter.'],
        ['Your pay rises 3% and inflation is 5%. Your real pay has:', ['Fallen about 2%', 'Risen 3%', 'Risen 8%', 'Stayed the same'], 0, 'Real change ≈ nominal minus inflation.'],
        ['To slow inflation, a central bank usually:', ['Raises interest rates', 'Cuts interest rates', 'Prints more money', 'Cuts taxes'], 0, 'Dearer borrowing slows spending.'],
        ['Fiscal policy is decided by:', ['The government', 'The central bank', 'Commercial banks', 'The stock exchange'], 0, 'Taxes and spending.'],
        ['Inflation tends to help:', ['Borrowers', 'People holding cash', 'People on fixed incomes', 'Savers'], 0, 'Debts are repaid in money worth less.']
      ] },

    { id: 'personal', tab: 'Your money', level: 'Intermediate',
      h: 'Compounding, debt and <span>the basics of personal finance</span>',
      intro: ['Most of personal finance is arithmetic plus patience. One formula explains why starting early matters and why high-interest debt is so damaging.', 'This is general education, not financial advice for your situation.'],
      facts: ['Rule of 72', 'Compounding works for you or against you'],
      b: [
        '## Compound interest',
        'Interest earns interest. Growth is slow at first and then steep.',
        ['eq', 'FV = PV × (1 + r)^n\n\nFV = future value, PV = amount today, r = rate per year, n = years\n\n£1,000 at 7% for 10 years = 1,000 × 1.07^10 ≈ £1,967\n£1,000 at 7% for 40 years = 1,000 × 1.07^40 ≈ £14,974'],
        ['tip', 'Rule of 72', 'Years to double ≈ 72 ÷ interest rate. At 6%, money doubles in about 12 years. A credit card at 24% doubles what you owe in about 3.'],
        ['fig', '<svg viewBox="0 0 520 190"><g stroke="#333"><line x1="50" y1="165" x2="490" y2="165"/><line x1="50" y1="15" x2="50" y2="165"/></g><path d="M50 155 C200 148 340 120 470 22" fill="none" stroke="#00ffa3" stroke-width="2"/><line x1="50" y1="155" x2="470" y2="112" stroke="#888" stroke-width="2"/><text x="330" y="60" fill="#00ffa3">compound: 7% a year</text><text x="330" y="140">simple: 7% of the start each year</text><text x="50" y="182">0</text><text x="455" y="182">40 years</text></svg>', 'The same rate, with and without compounding. The gap is all interest earned on earlier interest.'],
        '## Debt',
        ['tb', ['Term', 'Meaning'], ['Principal', 'The amount borrowed'], ['APR', 'Annual percentage rate: the yearly cost of the loan including fees'], ['Amortisation', 'Paying off a loan in equal instalments. Early payments are mostly interest'], ['Secured loan', 'Backed by an asset the lender can take (a mortgage)'], ['Credit score', 'A number lenders use to guess how likely you are to repay']],
        '## A sensible order of operations',
        ['ol', 'Spend less than you earn. Nothing else works without this.', 'Build an emergency fund, commonly three to six months of essential costs.', 'Pay off high-interest debt. Clearing a 20% card is a guaranteed 20% return.', 'Take any employer pension match. It is part of your pay.', 'Invest for the long term, regularly, in something diversified and low-cost.'],
        '## Tax-sheltered accounts',
        'Most countries offer accounts where investments grow with reduced or no tax, for retirement or general saving. The names differ (ISA and pension in the UK, 401(k) and IRA in the US). The rules and limits change, so check the current ones where you live.'
      ],
      quiz: [
        ['At 9% a year, money doubles in about:', ['8 years', '9 years', '18 years', '4 years'], 0, '72 ÷ 9 = 8.'],
        ['Compound interest means:', ['Interest is earned on earlier interest', 'Interest is paid once', 'The rate rises each year', 'There is no risk'], 0, 'That is what makes the curve bend upward.'],
        ['In an amortised loan, the early payments are mostly:', ['Interest', 'Principal', 'Fees', 'Tax'], 0, 'The balance is largest at the start.'],
        ['Paying off a credit card charging 22% is like earning:', ['A guaranteed 22% return', 'Nothing', 'A 2% return', 'A risky 22% return'], 0, 'Interest avoided is interest earned.'],
        ['APR tells you:', ['The yearly cost of borrowing, including fees', 'Your credit score', 'The loan length', 'The tax rate'], 0, 'Use it to compare loans.']
      ] },

    { id: 'investing', tab: 'How investing works', level: 'Advanced',
      h: 'Stocks, bonds, risk and <span>diversification</span>',
      intro: ['Investing means giving up money now in exchange for a claim on more later. The return is payment for waiting and for bearing risk.', 'This is general education, not a recommendation to buy or sell anything.'],
      facts: ['Higher expected return comes with higher risk', 'Costs compound too'],
      b: [
        '## The main asset types',
        ['tb', ['Asset', 'What you own', 'Return comes from', 'Risk'], ['Cash', 'A bank deposit', 'Interest', 'Low; loses to inflation'], ['Bond', 'A loan to a government or company', 'Fixed interest, then your money back', 'Lower; default and interest-rate risk'], ['Stock (share)', 'A slice of a company', 'Dividends and a rising share price', 'Higher; can fall sharply'], ['Property', 'Land or buildings', 'Rent and price growth', 'Hard to sell quickly'], ['Fund / ETF', 'A basket of many stocks or bonds', 'Whatever is inside', 'Spread across many holdings']],
        '## Risk and return',
        ['ul', 'Assets that can fall a lot in the short run have, over long periods, paid more on average. That extra is the <b>risk premium</b>.', '<b>Volatility</b> is how much the price swings. It matters most if you may need the money soon.', 'Bond prices move opposite to interest rates: when rates rise, existing bonds fall in price.', 'Past returns do not guarantee future returns.'],
        '## Diversification',
        'Owning many different assets removes the risk that any single one fails, without lowering the expected return. It is the nearest thing to a free lunch in finance. It does not remove the risk of the whole market falling.',
        '## Index funds and costs',
        ['ul', 'An <b>index fund</b> buys every stock in an index (such as the S&P 500) and charges very little.', 'An <b>actively managed fund</b> pays people to pick winners and charges more.', 'After fees, most active funds have done worse than their index over long periods. The S&P SPIVA reports track this each year.'],
        ['eq', '£10,000 for 30 years at 7% a year:\n  with a 0.1% annual fee   ->  about £74,000\n  with a 1.5% annual fee   ->  about £49,800'],
        '## The mistakes that cost the most',
        ['kv', ['Timing the market', 'Selling after a fall and buying after a rise locks in losses. Missing a handful of the best days badly dents long-term returns.'], ['Chasing performance', 'Last year\'s best fund is rarely next year\'s.'], ['Concentration', 'Putting most of your money in one stock, including your employer\'s.'], ['Ignoring fees and tax', 'Small yearly percentages become large sums over decades.'], ['Anything guaranteed and high', 'A high return with "no risk" is the standard shape of a scam.']],
        '## Valuing a company, briefly',
        ['tb', ['Measure', 'Meaning'], ['Market capitalisation', 'Share price × number of shares'], ['P/E ratio', 'Price ÷ earnings per share: what you pay for each unit of yearly profit'], ['Dividend yield', 'Yearly dividend ÷ share price'], ['Present value', 'Future cash is worth less than cash today: PV = FV ÷ (1 + r)^n']]
      ],
      quiz: [
        ['A bond is:', ['A loan to a government or company', 'A share of ownership', 'A bank account', 'A type of tax'], 0, 'You receive interest and get the principal back.'],
        ['When interest rates rise, existing bond prices usually:', ['Fall', 'Rise', 'Stay the same', 'Double'], 0, 'New bonds pay more, so old ones are worth less.'],
        ['Diversification reduces:', ['The risk from any single holding', 'All risk', 'Fees', 'Taxes'], 0, 'Market-wide risk remains.'],
        ['An index fund:', ['Holds everything in an index at low cost', 'Tries to pick winning stocks', 'Guarantees a return', 'Holds only bonds'], 0, 'It matches the market instead of trying to beat it.'],
        ['A P/E ratio of 20 means the share price is:', ['20 times yearly earnings per share', '20% of earnings', '20 times the dividend', '£20'], 0, 'Price divided by earnings.'],
        ['An offer of a high return with no risk is most likely:', ['A scam', 'A bond', 'An index fund', 'A pension'], 0, 'Return and risk travel together.']
      ] }
  ],
  sources: [
    ['OpenStax: Principles of Economics 3e', 'https://openstax.org/details/books/principles-economics-3e', 'free peer-reviewed textbook; supply and demand, GDP, inflation, policy, trade'],
    ['Bank of England: Explainers', 'https://www.bankofengland.co.uk/explainers', 'inflation, interest rates, the 2% target'],
    ['U.S. SEC Investor.gov: Compound interest calculator and introduction to investing', 'https://www.investor.gov/introduction-investing', 'asset types, risk, diversification, fees'],
    ['S&P Dow Jones Indices: SPIVA reports', 'https://www.spglobal.com/spdji/en/research-insights/spiva/', 'active funds against their index'],
    ['IMF: Gross Domestic Product, An Economy\'s All', 'https://www.imf.org/en/Publications/fandd/issues/Series/Back-to-Basics/gross-domestic-product-GDP', 'what GDP counts and omits'],
    ['FCA ScamSmart', 'https://www.fca.org.uk/scamsmart', 'spotting investment scams']
  ]
};
