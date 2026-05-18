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
