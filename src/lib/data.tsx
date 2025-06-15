import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/traderadar.png',
    title: 'Traderadars',
    description:
      'Know the market, trade smarter.',
    technologies: ['Node.js', ' Vue.js', 'MongoDB','.NETCore','Stripe' ],
    links: {
      preview: 'https://www.traderadars.com/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
  {
    image: '/projects/xtocks.jpg',
    title: 'Xtocks',
    description: 'Build strategies, backtest, manage portfolios, all in one no-code trading platform.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      '.NETCore',
      'Stripe'
    ],
    links: {
      preview: 'https://xtocks.io',
      github: 'https://github.com/abdul-rehman67',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    image: '/projects/fine.png',
    title: 'Fine HH Digital',
    description: 'Manage your business with ease.',
    technologies: [
      'React',
      'Material UI',
      'Node.js',
      ,
      'SQL',
    ],
    links: {
      preview: 'https://www.finehhdigital.com/',
      github: 'https://github.com/Skolaczk/Audiophile',
      githubApi: 'https://api.github.com/repos/Skolaczk/Audiophile',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Engineer',
    company: 'Kaispe LLC',
    location: 'Karchi, Pakistan',
    description:
      'At my current role, I’ve contributed to the development and maintenance of scalable SaaS solutions, including vendor management systems, auto-recruitment platforms, proof of delivery workflows, and customer-facing portals. I work closely with clients to gather requirements, design customized solutions, and ensure smooth deployment and delivery. My responsibilities also include optimizing React, Node.js, and .NET Core applications for performance, scalability, and seamless third-party integrations. In addition to hands-on development, I serve as a technical liaison, managing client communication, documentation, and driving successful end-to-end project execution.',
    date: 'Nov 2024 - Present'
  },
  {
    title: 'Software Product Engineer',
    company: 'FOLIO3 Pvt Ltd',
    location: 'Karchi, Pakistan',
    description:
      'In this role, I proactively maintained and optimized a JavaScript-based codebase to ensure high performance and reliability across applications. I implemented custom workflows tailored to client specifications, significantly improving operational efficiency. I was responsible for delivering timely bug fixes in live production environments, minimizing downtime and maintaining service continuity. Additionally, I provided technical support to international clients through JIRA and direct communication, ensuring prompt and effective resolution of issues and maintaining strong client relationships.',
    date: 'Oct 2023 - Oct 2024
  },
  {
    title: 'Software Engineer',
    company: 'Dimensional Sys LLC',
    location: 'Karachi, Pakistan',
    description:
      'I collaborated closely with the team lead to plan and contribute ideas across various projects, including internal tools, chat applications, and customer success portals. My responsibilities included developing RESTful APIs using Express.js and .NET Core, as well as integrating third-party services such as Stripe for seamless payment processing. I engineered a custom job engine to efficiently ingest and process large volumes of historical data. In addition to development, I managed the production environment, handled CI/CD pipelines, provided live product support, and regularly interfaced with clients to ensure smooth delivery and post-launch success',
    date: 'Oct 2021   - Sep 2023',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
