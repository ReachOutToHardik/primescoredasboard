
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-improve-credit-score-30-days',
    title: 'How to Improve Your Credit Score in 30 Days: A Practical Guide',
    excerpt: 'Boost your credit score quickly with these proven strategies for error correction and balance management.',
    category: 'Credit Improvement',
    date: 'May 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'Aditya Sharma',
      role: 'Credit Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
    },
    content: `
      <h2>Understand Your Current Stand</h2>
      <p>The first step to improving your credit score is knowing exactly where you stand. Download your reports from all major bureaus like CIBIL, Experian, and Equifax.</p>
      
      <h2>1. Dispute Inaccuracies Immediately</h2>
      <p>Check for incorrect personal details, accounts that aren't yours, or settled accounts still showing as 'Default'. Disputing these can give you an instant boost.</p>
      
      <h2>2. Reduce Your Credit Utilization</h2>
      <p>Try to keep your credit card balances below 30% of your total limit. If possible, pay off small balances entirely to reduce the number of accounts with balances.</p>
      
      <h2>3. Don't Close Old Accounts</h2>
      <p>The length of your credit history matters. Keeping old credit cards active (even if you don't use them) helps maintain a higher average account age.</p>
    `
  },
  {
    id: '2',
    slug: 'understanding-cibil-vs-experian',
    title: 'Understanding CIBIL vs Experian: Which Score Matters More in India?',
    excerpt: 'Learn the differences between the major credit bureaus in India and why lenders check multiple reports.',
    category: 'Guides',
    date: 'May 8, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'Priya Verma',
      role: 'Financial Analyst',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
    },
    content: `
      <h2>The Major Players</h2>
      <p>In India, CIBIL is the oldest and most widely recognized bureau, but Experian and Equifax are catching up fast.</p>
      
      <h2>Why the Scores Differ</h2>
      <p>Each bureau uses its own proprietary algorithm. While the underlying data (your repayment history) is the same, the weightage given to factors like 'Credit Mix' or 'Enquiries' varies.</p>
      
      <h2>Which one do lenders prefer?</h2>
      <p>Most public sector banks still prioritize CIBIL, while many private lenders and Fintechs use a combination of CIBIL and Experian to get a 360-degree view of your creditworthiness.</p>
    `
  },
  {
    id: '3',
    slug: 'impact-of-loan-settlement-on-score',
    title: 'The Hidden Impact of Loan Settlement on Your Credit Score',
    excerpt: 'Settling a loan might seem like a relief, but it can haunt your credit report for years. Here is how to handle it.',
    category: 'Debt Management',
    date: 'May 5, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    author: {
      name: 'Rahul Khanna',
      role: 'Legal Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    },
    content: `
      <h2>Closed vs. Settled</h2>
      <p>When you pay off a loan in full, it shows as 'Closed'. When you negotiate a lower amount to close the debt, the bank marks it as 'Settled'.</p>
      
      <h2>Why 'Settled' is a Red Flag</h2>
      <p>A 'Settled' status indicates that you were unable to pay the full amount as per the contract. Lenders view this as a sign of high risk, often rejecting future applications instantly.</p>
      
      <h2>How to Fix a 'Settled' Status</h2>
      <p>The only way to fix this is to reach out to the lender, pay the remaining balance (the 'haircut' amount), and ask them to update the status to 'Closed' or 'Full Paid'.</p>
    `
  }
];
