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
