export type Service = {
  id: string
  title: string
  short: string
  description: string
  priceRange: string
  timeline: { title: string; detail: string; eta: string }[]
}

export const services: Service[] = [
  {
    id: 'rectification',
    title: 'CIBIL Score Rectification',
    short: 'Dispute inaccuracies, fix wrong entries, and rebuild trust with bureaus.',
    description:
      'We audit your report line-by-line, identify disputable inaccuracies, and file legally-backed disputes with clear evidence. You get a real-time dashboard of what was filed, when, and why — with transparent outcomes.',
    priceRange: '₹999 – ₹4,999',
    timeline: [
      { title: 'Report Audit', detail: 'We review accounts, inquiries, and payment history for disputable errors.', eta: '24–48 hrs' },
      { title: 'Evidence Pack', detail: 'We prepare documents, letters, and bureau-ready dispute drafts.', eta: '2–3 days' },
      { title: 'Dispute Filing', detail: 'We submit disputes and track acknowledgements and reference IDs.', eta: 'Same day' },
      { title: 'Follow-ups', detail: 'We push for resolution with structured escalations when needed.', eta: '30–60 days' },
    ],
  },
  {
    id: 'settlement',
    title: 'Loan Settlement Negotiation',
    short: 'Negotiate smart, protect future creditworthiness, and close safely.',
    description:
      'If you’re considering settlement, we help you avoid common mistakes that permanently damage your profile. Our team structures negotiation, documentation, and closure verification to minimize long-term score impact.',
    priceRange: '₹2,499 – ₹9,999',
    timeline: [
      { title: 'Case Review', detail: 'We understand the loan history, overdue status, and lender stance.', eta: '1–2 days' },
      { title: 'Negotiation Plan', detail: 'We craft a settlement strategy and acceptable terms checklist.', eta: '2–4 days' },
      { title: 'Closure & Proof', detail: 'We ensure written confirmation and closure proof is collected.', eta: '1–2 weeks' },
      { title: 'Report Update', detail: 'We monitor bureau updates and dispute wrong settlement markers.', eta: '30–60 days' },
    ],
  },
  {
    id: 'card-disputes',
    title: 'Credit Card Dispute Filing',
    short: 'Chargebacks, wrong late fees, and disputed dues — handled end-to-end.',
    description:
      'We handle disputes for incorrect charges, unfair fees, wrong delinquency tags, and account status issues. Every dispute is backed with narrative, proof, and a trackable escalation sequence.',
    priceRange: '₹999 – ₹3,999',
    timeline: [
      { title: 'Transaction Trace', detail: 'We map statements, dues, and communications into a clear timeline.', eta: '24–48 hrs' },
      { title: 'Dispute Draft', detail: 'We draft the dispute with precise references for fast acceptance.', eta: '2–3 days' },
      { title: 'Submission & Tracking', detail: 'We submit to issuer and bureaus, then monitor updates.', eta: 'Same day' },
      { title: 'Resolution Push', detail: 'We follow up until you get a written resolution or correction.', eta: '2–6 weeks' },
    ],
  },
  {
    id: 'monitoring',
    title: 'Credit Report Monitoring',
    short: 'Get alerts, stay clean, and catch errors before they become problems.',
    description:
      'We monitor key signals like new inquiries, account status changes, and adverse flags. You get proactive guidance to protect your score while your disputes are in flight.',
    priceRange: '₹399/mo – ₹999/mo',
    timeline: [
      { title: 'Setup', detail: 'We configure monitoring and create your baseline score snapshot.', eta: 'Same day' },
      { title: 'Alerts', detail: 'You get timely alerts when meaningful credit events occur.', eta: 'Ongoing' },
      { title: 'Monthly Review', detail: 'We share a monthly score health summary and next actions.', eta: 'Monthly' },
      { title: 'Rapid Disputes', detail: 'We fast-track disputes for new inaccuracies discovered.', eta: '48 hrs' },
    ],
  },
  {
    id: 'coaching',
    title: 'Personal Finance Coaching',
    short: 'Build habits that keep your credit clean — not just a one-time fix.',
    description:
      'Our experts help you design a 90-day plan for utilization, due-date discipline, and safe credit building. Simple, practical steps — built for Indian incomes and real EMI life.',
    priceRange: '₹1,999 – ₹4,999',
    timeline: [
      { title: 'Discovery Call', detail: 'We assess current debt, income, and cashflow patterns.', eta: '60 mins' },
      { title: '90-Day Plan', detail: 'We create a step-by-step plan aligned to your credit goals.', eta: '2–3 days' },
      { title: 'Check-ins', detail: 'We keep you accountable with progress reviews and tweaks.', eta: 'Weekly' },
      { title: 'Score Hygiene', detail: 'We teach what to do (and avoid) to protect your bureau profile.', eta: 'Ongoing' },
    ],
  },
  {
    id: 'emi',
    title: 'EMI Restructuring',
    short: 'Restructure responsibly and prevent late tags from destroying trust.',
    description:
      'When EMIs are tight, the right restructure saves you from long-term credit damage. We help you document your case, negotiate revised terms, and ensure bureau reporting stays accurate.',
    priceRange: '₹2,499 – ₹7,999',
    timeline: [
      { title: 'Affordability Review', detail: 'We calculate safe EMI bands and realistic revised terms.', eta: '1–2 days' },
      { title: 'Lender Proposal', detail: 'We prepare documents and a clean proposal to submit.', eta: '3–5 days' },
      { title: 'Restructure Track', detail: 'We follow up for approvals and written confirmation.', eta: '1–3 weeks' },
      { title: 'Bureau Correctness', detail: 'We verify reporting and dispute wrong delinquency flags.', eta: '30–60 days' },
    ],
  },
]

export type Testimonial = {
  name: string
  city: string
  role: string
  before: number
  after: number
  days: number
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Aditi Sharma',
    city: 'Gurugram',
    role: 'Product Manager',
    before: 482,
    after: 761,
    days: 78,
    rating: 5,
    quote:
      'They found two wrong late payment tags and a duplicate account entry. The dashboard updates made me feel in control the whole time.',
  },
  {
    name: 'Mohammed Irfan',
    city: 'Hyderabad',
    role: 'Small Business Owner',
    before: 512,
    after: 742,
    days: 64,
    rating: 5,
    quote:
      'I was stuck getting rejected for working capital. Primescore handled the dispute filings and follow-ups. My approvals started coming back.',
  },
  {
    name: 'Riya Mehta',
    city: 'Mumbai',
    role: 'Chartered Accountant',
    before: 536,
    after: 784,
    days: 83,
    rating: 5,
    quote:
      'Premium, professional, and transparent. No gimmicks — just a disciplined legal process with clear timelines and real results.',
  },
]

export type FAQ = { q: string; a: string }

export const faqs: FAQ[] = [
  {
    q: 'How fast can my score improve?',
    a: 'Many clients see meaningful movement once bureau corrections reflect. Typical windows are 30–90 days depending on the type of errors and response cycles.',
  },
  {
    q: 'Is credit rectification legal?',
    a: 'Yes — disputing inaccurate information is a lawful right. We focus on legitimate inaccuracies, documentation, and a clean audit trail.',
  },
  {
    q: 'What do you need from me?',
    a: 'Your credit report, supporting documents (if applicable), and a quick onboarding form. After that, we handle drafting, filing, and follow-ups.',
  },
  {
    q: 'Will you share my data with anyone?',
    a: 'No. We treat your information as confidential, use minimal-access workflows, and only use your documents for the disputes you approve.',
  },
  {
    q: 'What if my score doesn’t improve?',
    a: 'If there’s no improvement within 90 days after our filed disputes conclude, we offer a money-back guarantee on eligible plans. See Pricing for details.',
  },
]

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Upload Your Credit Report',
    icon: 'upload',
    eta: '5 mins',
    description:
      'Secure onboarding. We only ask for what’s needed — report, identity verification, and relevant supporting documents.',
  },
  {
    number: '02',
    title: 'Deep Audit & Error Detection',
    icon: 'scan',
    eta: '24–48 hrs',
    description:
      'Our system flags anomalies across accounts, inquiries, status codes, and payment history. A credit expert reviews every finding.',
  },
  {
    number: '03',
    title: 'Evidence Pack & Dispute Drafting',
    icon: 'file',
    eta: '2–3 days',
    description:
      'We prepare bureau-ready disputes with documentary proof and precise references so responses are faster and clearer.',
  },
  {
    number: '04',
    title: 'Filing, Tracking & Escalations',
    icon: 'track',
    eta: '30–60 days',
    description:
      'We file, track reference IDs, follow up on timelines, and escalate when responses are delayed or incomplete.',
  },
  {
    number: '05',
    title: 'Score Recovery + Long-term Hygiene',
    icon: 'rise',
    eta: 'Up to 90 days',
    description:
      'Once corrections reflect, your score typically rebounds. We share practical steps so your improved profile stays strong.',
  },
] as const

export const disputeItems = [
  'Duplicate loan/credit card entries',
  'Wrong overdue/DPD markings',
  'Closed accounts shown as active',
  'Incorrect personal details and address mismatch',
  'Fraudulent or unrecognized inquiries',
  'Incorrect settlement or write-off tags',
]

export const errorTypeStats = [
  { label: 'Duplicate Accounts', rate: 92 },
  { label: 'Wrong Late Payment Tags', rate: 88 },
  { label: 'Incorrect Account Status', rate: 84 },
  { label: 'Unrecognized Inquiries', rate: 79 },
  { label: 'Personal Detail Mismatch', rate: 76 },
] as const
