export const profile = {
  name: 'Martin Pavić',
  role: 'Senior Software Engineer',
  headline: 'I build dependable backends, data systems and web apps.',
  intro:
    'Senior software engineer with 7+ years of experience in Python, Scala, TypeScript and PostgreSQL, based in Zagreb. I care about clean architecture, performance you can measure, and software that is pleasant to operate.',
  about: [
    'I own features end to end: schema design, APIs, testing, CI/CD and AWS deployment. My background spans REST services, asynchronous processing and robotics fleet management, and I now work full stack with React.',
    'I mentor engineers, interview candidates, and turn vague requirements into simple, maintainable solutions.',
  ],
  email: 'martin.pavic97@gmail.com',
  github: 'https://github.com/MartinPavic',
  linkedin: 'https://www.linkedin.com/in/martin-pavic',
  cv: '/cv.pdf' as string | undefined,
} as const;

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'Scala', 'TypeScript', 'SQL', 'Java', 'JavaScript', 'Dart'],
  },
  {
    title: 'Backend',
    items: [
      'FastAPI',
      'Flask',
      'Play Framework',
      'http4s',
      'Cats Effect',
      'Celery',
      'asyncio',
      'Node.js',
    ],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Slick', 'Doobie'],
  },
  {
    title: 'Frontend & mobile',
    items: ['React', 'Angular', 'NgRx', 'Ionic', 'Flutter'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'GitLab CI/CD', 'Nginx', 'Linux'],
  },
  {
    title: 'Practices',
    items: ['Clean architecture', 'Test automation', 'Code review', 'Mentoring'],
  },
] as const;

export const ai = {
  intro:
    "I use AI coding agents a lot, and I've tried most of the popular ones while building my own projects. They're great at the slow parts: boilerplate, refactors, test scaffolding, finding my way around unfamiliar code. I still make the design calls and read everything before it ships.",
  tools: ['Claude', 'Claude Code', 'ChatGPT', 'GitHub Copilot', 'and a few others'],
  practices: [
    {
      title: 'Built with agents',
      description:
        "Doer, ShipLog, Abracadabra and this site were all built with an agent in the loop. I describe what I want, let it draft, then review the diff like a teammate's pull request.",
    },
    {
      title: 'Plan first',
      description:
        'For anything bigger than a small fix, I have the agent write a plan before any code. A few of my repos keep an implementation plan file for exactly that.',
    },
    {
      title: 'Tests catch the confident mistakes',
      description:
        "Agents sound sure even when they are wrong, so I lean on type checks, linters and tests. If I can't verify it, I don't trust it.",
    },
    {
      title: 'Right tool for the job',
      description:
        'Some agents are better at big refactors, others at quick questions. I switch between them instead of settling on one.',
    },
    {
      title: 'Building with LLMs',
      description:
        'ShipLog calls OpenAI and Anthropic models to write reports from GitHub activity, and Abracadabra runs a coding agent and a reviewer agent on real issues.',
    },
    {
      title: 'Still my call',
      description:
        'Architecture, security and what actually gets merged stay with me. Secrets never go into a prompt.',
    },
  ],
} as const;
