export interface Experience {
  period: string;
  title: string;
  company: string;
  location?: string;
  locationId?: string;
  highlights: string[];
  isCurrent: boolean;
  hasRotations?: boolean;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Education {
  year: string;
  degree: string;
  school: string;
  location?: string;
  locationId?: string;
  detail: string;
}

export interface ImpactStat {
  metric: string;
  label: string;
  sublabel?: string;
}

export interface Project {
  title: string;
  context: string;
  description: string;
}

export interface CitySketch {
  id: string;
  name: string;
  label: string;
  chapter: string;
  stat: string;
  detail: string;
  sketchNote: string;
  isResumeLocation: boolean;
}

export const profile = {
  name: 'Siddartha Posam',
  title: 'AI Product Engineer',
  label: 'AI Product Engineer',
  location: 'Austin, TX',
  email: 'siddartha18@gmail.com',
  phone: '(901) 827-7823',
  linkedin: 'https://linkedin.com/in/sposam',
  github: 'https://github.com/zerolatent',
  resumePath: '/SiddarthaPosam-Resume.docx',
  summary:
    'I have spent 10+ years at PayPal moving between engineering, product, GTM, and customer insight work. These days I am focused on AI products: using LLMs, retrieval, agents, and automation to make complex workflows easier for teams and customers to act on.',
  contactPrompt:
    'I am interested in roles where AI, product judgment, and hands-on engineering come together to solve messy business workflows.'
};

export const experiences: Experience[] = [
  {
    period: 'Jan 2025 - Present',
    title: 'AI Product Engineer',
    company: 'PayPal',
    location: 'Austin, TX',
    locationId: 'austin',
    highlights: [
      'Helping BNPL product teams make releases easier to reason about, with clearer quality goals, release-readiness signals, and less last-minute ambiguity.',
      'Built an LLM-powered workflow assistant that turns PRDs into planning and testing artifacts, giving 8 product teams a faster starting point for delivery conversations.',
      'Led practical GenAI enablement for product and engineering peers, focused on prompts, context, tools, and the day-to-day use cases that actually save time.'
    ],
    isCurrent: true
  },
  {
    period: 'Jan 2023 - Jan 2025',
    title: 'Product Manager, Technology Leadership Program',
    company: 'PayPal',
    location: 'Global · London, UK',
    locationId: 'london',
    highlights: [
      'Rotated through business development, enterprise sales, product marketing, and customer insights, which gave me a broader view of how products actually win in market.',
      'Used AI-assisted analysis and automation to speed up merchant research, identify recurring payment issues, and shorten campaign setup work.',
      'Partnered across sales, product, marketing, and integration teams on enterprise merchant work including Michael Kors, Honey, Venmo, and PayPal products.'
    ],
    isCurrent: false,
    hasRotations: true
  },
  {
    period: 'Jul 2020 - Dec 2022',
    title: 'Product Manager',
    company: 'PayPal',
    location: 'Austin, TX',
    locationId: 'austin',
    highlights: [
      'Owned credit product roadmap work tied to engagement and revenue, including launches that helped drive a 15% lift in product performance.',
      'Partnered with engineering to ship a high-availability API gateway for PayPal Credit in 6 months, giving the platform a cleaner single entry point.',
      'Balanced product goals with platform reliability, early failure detection, and the realities of shipping financial products at scale.'
    ],
    isCurrent: false
  },
  {
    period: 'May 2014 - Jun 2020',
    title: 'Software Engineer',
    company: 'PayPal',
    location: 'Baltimore, MD',
    locationId: 'baltimore',
    highlights: [
      'Built backend systems and automation for PayPal Credit, with a focus on release confidence in high-volume financial workflows.',
      'Created reusable test frameworks that improved coverage by more than 20% and cut manual QA effort by over 50%.',
      'Mentored engineers through architecture reviews, code reviews, test plans, and shared engineering practices.'
    ],
    isCurrent: false
  }
];

export const impactStats: ImpactStat[] = [
  { metric: '~40%', label: 'Planning time saved', sublabel: 'LLM workflow assistant' },
  { metric: '90%', label: 'Research time cut', sublabel: 'Sales enablement tooling' },
  { metric: '99.99%', label: 'Platform availability', sublabel: 'Credit API gateway' },
  { metric: '2 days', label: 'Merchant mapping', sublabel: 'Down from 3 months' }
];

export const skillGroups: SkillGroup[] = [
  {
    name: 'AI Product',
    skills: ['LLM apps', 'RAG', 'Agentic workflows', 'Prompt design', 'Context engineering', 'Evals']
  },
  {
    name: 'Product Strategy',
    skills: ['Roadmaps', 'Customer discovery', 'GTM', 'Experimentation', 'Stakeholder alignment']
  },
  {
    name: 'Engineering',
    skills: ['Python', 'Java', 'TypeScript', 'Node.js', 'REST APIs', 'SQL']
  },
  {
    name: 'Systems',
    skills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Microservices', 'Observability']
  },
  {
    name: 'Leadership',
    skills: ['Executive communication', 'Mentorship', 'Change management', 'AI adoption']
  }
];

export const projects: Project[] = [
  {
    title: 'Real Estate Vision Editor',
    context: '2nd Place · NVIDIA DGX Spark Frontier Hackathon',
    description:
      'Fine-tuned a vision model for real estate imagery and pushed the result into a mobile editing flow for fast edge inference.'
  },
  {
    title: 'Ghostwriter',
    context: '1st Place · AkashML AI Agent Build Night',
    description:
      'Built an autonomous coding agent that triages GitHub issues, writes fixes, runs tests, opens pull requests, and scores confidence.'
  },
  {
    title: 'WhatsApp Trading Workflow',
    context: '2nd Place · Decentralized Endgame Hackathon',
    description:
      'Prototyped a WhatsApp-based trading assistant that combined MCP, social signals, and live market context for real-time analysis.'
  },
  {
    title: 'Recommendation System',
    context: 'Applied ML',
    description:
      'Built a collaborative-filtering book recommender to explore personalization, ranking, and preference patterns.'
  },
  {
    title: 'HTM Image Classification',
    context: 'Research',
    description:
      'Implemented a Hierarchical Temporal Memory model on MNIST while exploring biologically inspired approaches to pattern recognition.'
  }
];

export const education: Education[] = [
  {
    year: '2017',
    degree: 'HBX CORe',
    school: 'Harvard Business School Online',
    detail: 'Passed with honors · Business Analytics, Economics, Financial Accounting'
  },
  {
    year: '2011 - 2013',
    degree: 'MS Computer Engineering',
    school: 'University of Memphis',
    location: 'Memphis, TN',
    locationId: 'memphis',
    detail: 'Computer Intelligence Lab · Machine Learning minor · AI, Neural Networks, Pattern Recognition'
  },
  {
    year: '2007 - 2011',
    degree: 'BTech Electronics & Computer Engineering',
    school: 'JNTU Hyderabad',
    location: 'Hyderabad, India',
    locationId: 'hyderabad',
    detail: 'In-plant training certificate from Hindustan Aeronautics Limited'
  }
];

export const citySketches: CitySketch[] = [
  {
    id: 'austin',
    name: 'Austin',
    label: 'Austin, TX',
    chapter: 'Current base',
    stat: '2020 - Present',
    detail: 'AI product engineering, BNPL quality strategy, and practical LLM workflows at PayPal.',
    sketchNote: 'Skyline, river, bridge arches, and a Capitol-inspired dome',
    isResumeLocation: true
  },
  {
    id: 'baltimore',
    name: 'Baltimore',
    label: 'Baltimore, MD',
    chapter: 'Backend engineering',
    stat: '2014 - 2020',
    detail: 'Early PayPal Credit years building backend systems, automation, and release confidence.',
    sketchNote: 'Harbor waterline, rowhouses, downtown blocks, and cranes',
    isResumeLocation: true
  },
  {
    id: 'memphis',
    name: 'Memphis',
    label: 'Memphis, TN',
    chapter: 'Graduate work',
    stat: '2011 - 2013',
    detail: 'MS Computer Engineering, AI coursework, pattern recognition, and Computer Intelligence Lab research.',
    sketchNote: 'River bridge, pyramid, bluff skyline, and water movement',
    isResumeLocation: true
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    label: 'Hyderabad, India',
    chapter: 'Engineering roots',
    stat: '2007 - 2011',
    detail: 'Undergrad foundation in electronics and computer engineering before moving into AI and fintech work.',
    sketchNote: 'Charminar-inspired arches, minarets, domes, and facade hatching',
    isResumeLocation: true
  },
  {
    id: 'london',
    name: 'London',
    label: 'London, UK',
    chapter: 'Concept sketch',
    stat: 'Prototype',
    detail:
      'A non-resume concept sketch using the Thames, Tower Bridge, a clock tower, and layered skyline to test how the city interaction scales.',
    sketchNote: 'Thames, Tower Bridge, clock tower, and skyline study',
    isResumeLocation: false
  }
];
