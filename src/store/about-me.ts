import { ContentLink } from '@/components/code/content-link';
import { HoverSpec } from '@/components/content/hover-spec';
import { TabSpec } from '@/components/content/tab-spec';

export const yearsOfExperience = (): number => {
  const start = new Date(2018, 4);
  const today = new Date();
  const months = (today.getFullYear() - start.getFullYear()) * 12 + today.getMonth() - start.getMonth();

  return Math.round(months / 3) * 0.25;
};

const languageExperience = {
  Java: 6,
  'JavaScript/TypeScript': 6,
  Bash: 4,
  Python: 2.8,
  Ruby: 2.33,
  'C#': 1.67,
};

const frameworkExperience = {
  'Spring Boot MVC': 6,
  Vue: 5,
  Vuetify: 3,
  Angular: 2,
  Django: 1,
  '.NET': 1,
};

export const details = {
  name: 'Anthony Weston',
  pronouns: new ContentLink(['He', 'Him', 'His'], new HoverSpec('pronouns.md', 'VPronouns')),
  occupation: 'Full-stack web developer',
  currentPosition: 'IT Applications Developer Specialist - Nationwide',
  stories: [
    new ContentLink('Vue/Java version upgrades', new TabSpec('upgrades.md', 'VUpgradeStory', {})),
  ],
  goals: ['Tech lead'],
  technologies: {
    languages: new ContentLink(
      ['Java', 'TypeScript', 'Bash', 'Python', 'Ruby', 'C#'],
      new TabSpec('languages.js', 'VDonutChart', { title: 'Programming/Scripting Languages', data: languageExperience }),
    ),
    frameworks: new ContentLink(
      ['Spring Boot MVC', 'Vue 2 / Vue 3', 'Vuetify', 'Django', 'Angular', '.NET'],
      new TabSpec('frameworks.js', 'VDonutChart', { title: 'Frameworks and Libraries', data: frameworkExperience }),
    ),
    devOps: ['GitLab CI', 'Jenkins', 'SonarQube'],
    buildTools: ['Babel/Webpack', 'Maven', 'Docker'],
    codeQuality: ['SonarQube', 'ESLint', 'Checkstyle'],
    testing: ['JUnit 5', 'Jest', 'Cucumber', 'Selenium'],
    database: ['PostgresQL', 'SQL Server', 'Oracle'],
    misc: ['git', 'NginX', 'Linux', 'Jackson', 'Ionic', 'ProseMirror', 'AWS'],
  },
  featuredProjects: ['About Me (this website)', '404 Keybinding Not Found (VSCode)'],
  learning: {
    current: ['Event-driven architecture', 'Domain-driven design'],
    interests: ['Code quality', 'Cross-platform development', 'Test automation'],
  },
  otherInterests: ['Coffee', 'Board Games', 'Tabletop RPGs'],
};

export default new TabSpec('about-me.ts', 'TSCode', { value: details });
