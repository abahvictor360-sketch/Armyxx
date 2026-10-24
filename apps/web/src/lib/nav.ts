/** Primary navigation + mega-menu structure (used by header, footer and sitemap). */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
}
export interface NavItem {
  label: string;
  href: string;
  groups?: { title: string; links: NavLink[] }[];
  feature?: { title: string; text: string; href: string; image: string; cta: string };
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    groups: [
      {
        title: 'Who we are',
        links: [
          { label: 'History', href: '/about/history', description: 'Founded in Lagos in 1863' },
          { label: 'Vision, Mission & Values', href: '/about#mission', description: 'What we do and what we stand for' },
          { label: 'Chief of Army Staff', href: '/about/leadership', description: 'Head of the Nigerian Army' },
        ],
      },
      {
        title: 'Structure',
        links: [
          { label: 'Organisation Chart', href: '/about/organisation', description: 'How the Army and 81 Division are organised' },
          { label: 'Ranks & Insignia', href: '/about/ranks', description: 'From Private to General' },
        ],
      },
    ],
    feature: { title: 'Where it all began', text: 'The Nigerian Army was born in Lagos in 1863. Read our story.', href: '/about/history', image: '/images/officers-walking.jpg', cta: 'Read our history' },
  },
  {
    label: 'Join the Army',
    href: '/join',
    groups: [
      {
        title: 'Recruitment',
        links: [
          { label: 'Eligibility Requirements', href: '/join/eligibility', description: 'Check you qualify' },
          { label: 'How to Apply', href: '/join/how-to-apply', description: 'Seven simple steps' },
          { label: 'Recruitment Portal', href: '/portal', description: 'Sign in, or apply when recruitment is open' },
        ],
      },
      {
        title: 'Training & help',
        links: [
          { label: 'Training Institutions', href: '/join/institutions', description: 'Where soldiers and officers train' },
          { label: 'Frequently Asked Questions', href: '/join/faqs', description: 'Quick answers to common questions' },
          { label: 'Verify a Slip', href: '/verify', description: 'Check a slip is genuine' },
        ],
      },
    ],
    feature: { title: 'Applying is FREE', text: 'Never pay anyone for forms or slots. Apply only on this website.', href: '/join/how-to-apply', image: '/images/recruits-helmets.jpg', cta: 'Start your journey' },
  },
  {
    label: 'Operations & News',
    href: '/news',
    groups: [
      {
        title: 'Newsroom',
        links: [
          { label: 'Press Releases', href: '/news', description: 'Official statements from Lagos' },
          { label: 'Photo & Video Gallery', href: '/news/gallery', description: 'Our troops at work' },
          { label: 'Events Calendar', href: '/news/events', description: 'What’s coming up in Lagos' },
        ],
      },
    ],
    feature: { title: 'Army Day in Lagos', text: 'Parades, prayers, sports and community projects.', href: '/news/gallery', image: '/images/armoured-vehicle.jpg', cta: 'View gallery' },
  },
  {
    label: 'Welfare & Services',
    href: '/welfare',
    groups: [
      {
        title: 'Support for',
        links: [
          { label: 'Serving Personnel', href: '/welfare/serving-personnel', description: 'Healthcare, housing and insurance' },
          { label: 'Veterans', href: '/welfare/veterans', description: 'Pensions, healthcare and resettlement' },
          { label: 'Families', href: '/welfare/families', description: 'Schools, healthcare and support' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    groups: [
      {
        title: 'Documents',
        links: [
          { label: 'Downloads Library', href: '/resources', description: 'Forms, reports and publications' },
          { label: 'Tenders & Procurement', href: '/resources/tenders', description: 'Open bids and results' },
          { label: 'Policies', href: '/resources/policies', description: 'Privacy, FOI and human rights' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
