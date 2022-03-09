import { ContentLink } from '@/components/code/content-link';
import { HoverSpec } from '@/components/content/hover-spec';
import { TabSpec } from '@/components/content/tab-spec';

const yearsOfExperience = (): number => {
  const start = new Date(2018, 4);
  const today = new Date();
  const months = (today.getFullYear() - start.getFullYear()) * 12 + today.getMonth() - start.getMonth();

  return Math.round(months / 3) * 0.25;
};

export const details = {
  hello: null,
  x: 1,
  name: 'Anthony Weston',
  pronouns: new ContentLink(['He', 'Him', 'His'], new HoverSpec('pronouns.md', 'VPronouns')),
  occupation: 'Full-stack web developer',
  currentPosition: 'Senior Developer - State of Ohio',
  // askMeAbout: [],
  featuredProjects: ['404 Keybinding Not Found (VSCode)', 'Ionic Budget App'],
  goals: ['Tech lead'],
  learning: {
    current: ['Vue 3', 'Java 17', 'Test automation'],
    interests: [
      'Code quality',
      'Cross-platform development',
      'CI/CD',
      'Test automation',
    ],
  },
  technologies: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'Bash', 'Python'],
    backend: ['Spring Boot MVC', 'Django'],
    frontend: ['Vue', 'Angular'],
    mobile: ['Ionic'],
    testing: ['JUnit 5', 'Jest'],
    tools: ['Babel/Webpack', 'Maven'],
    database: ['PostgresQL', 'SQL Server', 'Oracle'],
    cloud: ['AWS'],
    devOps: ['GitLab CI', 'GitHub CI', 'Jenkins', 'SonarQube'],
    misc: ['git', 'Docker', 'NginX', 'Linux', 'ProseMirror', 'Jackson'],
  },
  architecture: ['Vertical slice', 'Microservices', 'Domain-driven design', 'Event-driven design'],
  otherInterests: ['Coffee', 'Board Games', 'Tabletop RPGs'],
};

export default new TabSpec('about-me.ts', 'TSCode', { value: details });
