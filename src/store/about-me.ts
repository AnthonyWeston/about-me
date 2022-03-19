import { ContentLink } from '@/components/code/content-link';
import { HoverSpec } from '@/components/content/hover-spec';
import { TabSpec } from '@/components/content/tab-spec';

export const yearsOfExperience = (): number => {
  const start = new Date(2018, 4);
  const today = new Date();
  const months = (today.getFullYear() - start.getFullYear()) * 12 + today.getMonth() - start.getMonth();

  return Math.round(months / 3) * 0.25;
};

export const details = {
  name: 'Anthony Weston',
  pronouns: new ContentLink(['He', 'Him', 'His'], new HoverSpec('pronouns.md', 'VPronouns')),
  occupation: 'Full-stack web developer',
  currentPosition: 'Senior Developer - State of Ohio',
  goals: ['Tech lead'],
  technologies: {
    languages: new ContentLink(['Java', 'TypeScript', 'Bash', 'Python', 'Ruby', 'C#'], new TabSpec('chart.js', 'VDonutChart')),
    backend: ['Spring Boot MVC', 'Node.js', 'Django'],
    frontend: ['Vue 2 / Vue 3', 'Vuetify', 'Angular', 'Material Design'],
    buildTools: ['Babel/Webpack', 'Maven', 'Docker'],
    devOps: ['GitLab CI', 'GitHub CI', 'Jenkins', 'SonarQube'],
    codeQuality: ['SonarQube', 'ESLint', 'Checkstyle'],
    testing: ['JUnit 5', 'Jest', 'Cucumber', 'Selenium'],
    database: ['PostgresQL', 'SQL Server', 'Oracle'],
    misc: ['git', 'NginX', 'Linux', 'Jackson', 'Ionic', 'ProseMirror', 'AWS'],
  },
  featuredProjects: ['404 Keybinding Not Found (VSCode)'],
  learning: {
    current: ['Vue 3', 'Java 17', 'Test automation'],
    interests: [
      'Code quality',
      'Cross-platform development',
      'CI/CD',
      'Test automation',
    ],
  },

  architecture: ['Vertical slice', 'Microservices', 'Domain-driven design', 'Event-driven design'],
  otherInterests: ['Coffee', 'Board Games', 'Tabletop RPGs'],
};

export default new TabSpec('about-me.ts', 'TSCode', { value: details });
