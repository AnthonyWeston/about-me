import { ContentLink } from '@/components/code/content-link';
import { TabSpec } from '@/components/ui/tab-spec';

const yearsOfExperience = (): number => {
  const start = new Date(2018, 4);
  const today = new Date();
  const months = (today.getFullYear() - start.getFullYear()) * 12 + today.getMonth() - start.getMonth();

  return Math.round(months / 3) * 0.25;
};

export const details = {
  name: 'Anthony Weston',
  occupation: 'Full-stack web developer',
  pronouns: new ContentLink(['He', 'Him', 'His'], new TabSpec('pronouns.md', 'VPronouns')),
  dependencies: new ContentLink('Click here!', new TabSpec('architecture.md', 'VArchitecture')),
  askMeAbout: [],
  featuredProjects: ['404 Keybinding Not Found (VSCode)', 'Ionic Budget App'],
  currentProjects: ['About Me'],
  goals: ['Tech lead'],
  learning: {
    current: ['Property-based testing', 'Java 17'],
    interests: [
      'Code Quality',
      'Cross-platform development',
      'Test Automation',
      'Domain Driven Design',
      'Microservices',
      'Event-driven design',
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
  architecture: [],
  otherInterests: ['Coffee', 'Board Games', 'Tabletop RPGs'],
};

export default new TabSpec('about-me.ts', 'TSCode', { value: details });
