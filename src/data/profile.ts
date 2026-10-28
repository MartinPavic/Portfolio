// TODO: replace every placeholder value below with real details.
export const profile = {
  name: 'Martin Pavić',
  role: 'Senior Software Engineer',
  headline: 'I build dependable backends, data systems and web apps.',
  intro:
    'Senior software engineer with deep experience in Python, Scala, TypeScript and PostgreSQL. I care about clean architecture, performance you can measure, and software that is pleasant to operate.',
  about: [
    'I design and ship production systems end to end: from data modelling and APIs to the interfaces people actually use.',
    'I enjoy untangling complex domains, mentoring teammates, and turning vague requirements into simple, maintainable solutions.',
  ],
  email: 'hello@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-username',
  // Drop a file at public/cv.pdf and set this to '/cv.pdf' to show the download button.
  cv: undefined as string | undefined,
} as const;

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'Scala', 'TypeScript', 'SQL'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Query tuning', 'Schema design', 'Migrations'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'REST APIs', 'Async services', 'Testing'],
  },
  {
    title: 'Web & Tooling',
    items: ['Astro', 'React', 'Tailwind CSS', 'Docker', 'CI/CD'],
  },
] as const;

// TODO: adjust to the tools and practices you actually use.
export const ai = {
  intro:
    'I use AI agents as a daily engineering tool, not a novelty. They speed up the work I would do anyway, while design decisions, review and accountability stay with me.',
  tools: ['Claude', 'Claude Code', 'ChatGPT', 'GitHub Copilot', 'MCP'],
  practices: [
    {
      title: 'Agentic coding workflows',
      description:
        'Plan, implement and verify loops with Claude Code and Copilot agent mode, steered by project instructions, reusable skills and custom agents.',
    },
    {
      title: 'Spec and test driven prompting',
      description:
        'I write the spec and failing tests first, then let agents implement against them, so correctness is checked by code rather than by trust.',
    },
    {
      title: 'MCP and tool integration',
      description:
        'Connecting agents to databases, docs, browsers and CI through the Model Context Protocol so they work with real context instead of guesses.',
    },
    {
      title: 'Parallel sub-agents',
      description:
        'Delegating research, exploration and independent review to focused sub-agents, then merging and verifying the results myself.',
    },
    {
      title: 'LLM-powered features',
      description:
        'Building product features on LLMs: structured output, retrieval over PostgreSQL, and evaluation suites that catch regressions.',
    },
    {
      title: 'Human-in-the-loop guardrails',
      description:
        'Every diff is reviewed, secrets stay out of prompts, and nothing ships without tests, type checks and a security pass.',
    },
  ],
} as const;
