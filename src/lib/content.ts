import rawProjects from '../data/projects.json';
import rawSkills from '../data/skills.json';
import rawWorkEducation from '../data/workEducation.json';

type Duration = {
  from: string;
  to: string;
};

type RawProject = {
  name: string;
  detailed_description: string[];
  keywords: string[];
  skills: string[];
  associated_with: string;
};

type RawWorkExperience = {
  position: string;
  company: string;
  duration: Duration;
  description: string[];
  skills: string[];
};

type RawEducation = {
  degree: string;
  field: string;
  school: string;
  courseworks: string[];
  gpa: number | null;
  duration: Duration;
};

type RawSkills = {
  skills: {
    programming_languages: string[];
    frontend: {
      core: string[];
      frameworks_libraries: string[];
      styling: string[];
      tools: string[];
    };
    backend: {
      languages_frameworks: string[];
      api: string[];
      auth_security: string[];
    };
    databases: {
      relational: string[];
      nosql: string[];
      orm: string[];
      caching: string[];
    };
    cloud_devops: {
      cloud_platforms: string[];
      containerization: string[];
      ci_cd: string[];
      infra: string[];
      monitoring: string[];
    };
    ai_ml: {
      genai: string[];
      ml_cv: string[];
    };
    data_engineering: string[];
    system_design: string[];
    tools_frameworks: string[];
    product_ux: string[];
    embedded_iot: string[];
  };
};

type WorkEducationSource = {
  work_experience: RawWorkExperience[];
  education: RawEducation[];
};

type ProjectsSource = {
  projects: RawProject[];
};

const projectSource = rawProjects as ProjectsSource;
const skillsSource = rawSkills as RawSkills;
const workEducationSource = rawWorkEducation as WorkEducationSource;

const monthMap: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

const disciplineRules = [
  {
    label: 'AI Systems',
    tokens: ['openai', 'llm', 'rag', 'embeddings', 'vector', 'prompt', 'machine learning', 'computer vision', 'tensorflow', 'ai'],
  },
  {
    label: 'Product Engineering',
    tokens: ['react', 'angular', 'full stack', 'web application', 'saas', 'product', 'frontend', 'webflow', 'cms', 'ux', 'portfolio'],
  },
  {
    label: 'Cloud & Platform',
    tokens: [
      'aws',
      'gcp',
      'cloud',
      'serverless',
      'deployment',
      'monitoring',
      'load balancer',
      'airflow',
      'mlflow',
      'prometheus',
      'grafana',
      'docker',
      'kubernetes',
      'terraform',
      'devops',
      'ci/cd',
      'github actions',
      'azure devops',
      'ec2',
      's3',
      'iam',
      'vpc',
      'observability',
      'mcp',
    ],
  },
  {
    label: 'Data & Analytics',
    tokens: ['postgresql', 'sqlalchemy', 'data', 'signal processing', 'fft', 'time series', 'quant finance', 'trading', 'analytics'],
  },
  {
    label: 'Embedded & Robotics',
    tokens: ['arduino', 'rfid', 'embedded', 'robotics', 'drone', 'accelerometer', 'imu', 'sensor', 'motor control'],
  },
];

export type Project = {
  id: number;
  slug: string;
  title: string;
  brief: string;
  overview: string[];
  keywords: string[];
  skills: string[];
  associatedWith: string;
  disciplines: string[];
};

export type WorkExperience = {
  id: string;
  position: string;
  company: string;
  duration: Duration;
  durationLabel: string;
  description: string[];
  skills: string[];
  summary: string;
  sortOrder: number;
};

export type EducationRecord = {
  id: string;
  degree: string;
  field: string;
  school: string;
  courseworks: string[];
  gpa: number | null;
  duration: Duration;
  durationLabel: string;
  summary: string;
  sortOrder: number;
};

export type JourneyItem = {
  id: string;
  type: 'Work' | 'Education';
  title: string;
  subtitle: string;
  durationLabel: string;
  summary: string;
  details: string[];
  tags: string[];
  sortOrder: number;
};

export type SkillCategory = {
  id: string;
  title: string;
  summary: string;
  sections: Array<{
    title: string;
    items: string[];
  }>;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseDateLabel(label: string) {
  const cleaned = label.replace(/\(Expected\)/gi, '').trim();

  if (/present/i.test(cleaned)) {
    return new Date();
  }

  const tokens = cleaned.replace(/,/g, '').split(/\s+/);
  const year = Number(tokens[tokens.length - 1]);

  if (!Number.isFinite(year)) {
    return new Date(0);
  }

  const month = tokens.length > 1 ? monthMap[tokens[0].toLowerCase()] ?? 0 : 0;
  return new Date(year, month, 1);
}

function identifyDisciplines(keywords: string[]) {
  const joinedKeywords = keywords.join(' ').toLowerCase();
  const matches = disciplineRules
    .filter((rule) => rule.tokens.some((token) => joinedKeywords.includes(token)))
    .map((rule) => rule.label);

  return matches.length > 0 ? matches : ['Software Systems'];
}

export const projects: Project[] = projectSource.projects.map((project, index) => ({
  id: index + 1,
  slug: slugify(project.name),
  title: project.name,
  brief: project.detailed_description[0],
  overview: project.detailed_description,
  keywords: project.keywords,
  skills: project.skills,
  associatedWith: project.associated_with,
  disciplines: identifyDisciplines(project.keywords),
}));

const featuredProjectSlugs = [
  'athlete-management-platform',
  'aws-devops-and-api-development-project-set',
  'churnops',
  'george-soros-rag-chatbot',
  'fitgenie-ai-fitness-and-nutrition-assistant',
];

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export const projectDisciplines = Array.from(new Set(projects.flatMap((project) => project.disciplines))).sort((left, right) =>
  left.localeCompare(right),
);

const keywordFrequency = projects.reduce<Map<string, number>>((accumulator, project) => {
  project.keywords.forEach((keyword) => {
    accumulator.set(keyword, (accumulator.get(keyword) ?? 0) + 1);
  });
  return accumulator;
}, new Map());

export const topProjectKeywords = [...keywordFrequency.entries()]
  .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
  .slice(0, 10)
  .map(([keyword]) => keyword);

export function findProject(projectId: string) {
  return projects.find((project) => project.slug === projectId || String(project.id) === projectId) ?? null;
}

export const workExperience: WorkExperience[] = workEducationSource.work_experience
  .map((entry, index) => ({
    id: `work-${index + 1}`,
    position: entry.position,
    company: entry.company,
    duration: entry.duration,
    durationLabel: `${entry.duration.from} – ${entry.duration.to}`,
    description: entry.description,
    skills: entry.skills,
    summary: entry.description[0],
    sortOrder: parseDateLabel(entry.duration.from).getTime(),
  }))
  .sort((left, right) => right.sortOrder - left.sortOrder);

export const education: EducationRecord[] = workEducationSource.education
  .map((entry, index) => ({
    id: `education-${index + 1}`,
    degree: entry.degree,
    field: entry.field,
    school: entry.school,
    courseworks: entry.courseworks,
    gpa: entry.gpa,
    duration: entry.duration,
    durationLabel: `${entry.duration.from} – ${entry.duration.to}`,
    summary: entry.courseworks.slice(0, 3).join(' · '),
    sortOrder: parseDateLabel(entry.duration.from).getTime(),
  }))
  .sort((left, right) => right.sortOrder - left.sortOrder);

export const journeyItems: JourneyItem[] = [
  ...workExperience.map((entry) => ({
    id: entry.id,
    type: 'Work' as const,
    title: entry.position,
    subtitle: entry.company,
    durationLabel: entry.durationLabel,
    summary: entry.summary,
    details: entry.description,
    tags: entry.skills.slice(0, 5),
    sortOrder: entry.sortOrder,
  })),
  ...education.map((entry) => ({
    id: entry.id,
    type: 'Education' as const,
    title: `${entry.degree} in ${entry.field}`,
    subtitle: entry.school,
    durationLabel: entry.durationLabel,
    summary: entry.summary,
    details: entry.courseworks,
    tags: entry.courseworks.slice(0, 5),
    sortOrder: entry.sortOrder,
  })),
].sort((left, right) => right.sortOrder - left.sortOrder);

const skills = skillsSource.skills;

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Systems',
    summary: 'Interface architecture, responsive layout systems, and production-ready UI implementation.',
    sections: [
      { title: 'Frameworks', items: skills.frontend.frameworks_libraries },
      { title: 'Core', items: skills.frontend.core },
      { title: 'Styling & tooling', items: [...skills.frontend.styling, ...skills.frontend.tools] },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    summary: 'Application services, integration layers, and secure backend foundations.',
    sections: [
      { title: 'Frameworks', items: skills.backend.languages_frameworks },
      { title: 'API work', items: skills.backend.api },
      { title: 'Auth & security', items: skills.backend.auth_security },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Platform',
    summary: 'Deployment, infrastructure basics, and operational tooling for production systems.',
    sections: [
      { title: 'Platforms', items: skills.cloud_devops.cloud_platforms },
      { title: 'Delivery', items: [...skills.cloud_devops.ci_cd, ...skills.cloud_devops.containerization, ...skills.cloud_devops.infra] },
      { title: 'Monitoring', items: skills.cloud_devops.monitoring },
    ],
  },
  {
    id: 'ai',
    title: 'AI Applications',
    summary: 'Generative AI features, retrieval systems, and pragmatic ML implementations.',
    sections: [
      { title: 'GenAI', items: skills.ai_ml.genai },
      { title: 'ML & CV', items: skills.ai_ml.ml_cv },
    ],
  },
  {
    id: 'data',
    title: 'Data Foundations',
    summary: 'Relational modeling, NoSQL usage, and structured data workflow thinking.',
    sections: [
      { title: 'Databases', items: [...skills.databases.relational, ...skills.databases.nosql, ...skills.databases.orm, ...skills.databases.caching] },
      { title: 'Data engineering', items: skills.data_engineering },
      { title: 'Systems', items: skills.system_design },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    summary: 'Comfortable moving across application, scripting, and systems-oriented languages.',
    sections: [
      { title: 'Languages', items: skills.programming_languages },
    ],
  },
  {
    id: 'product',
    title: 'Product & UX',
    summary: 'Research-informed product thinking with practical workflow and feature design.',
    sections: [
      { title: 'Product craft', items: skills.product_ux },
      { title: 'Tools', items: skills.tools_frameworks },
    ],
  },
  {
    id: 'embedded',
    title: 'Embedded & Robotics',
    summary: 'Hands-on experience with sensors, controllers, and applied robotics projects.',
    sections: [
      { title: 'Systems', items: skills.embedded_iot },
    ],
  },
];

export const primarySkillCategories = ['frontend', 'backend', 'cloud', 'ai']
  .map((id) => skillCategories.find((category) => category.id === id))
  .filter((category): category is SkillCategory => Boolean(category));

export const platformProjects = projects.filter((project) => project.disciplines.includes('Cloud & Platform')).slice(0, 4);

const earliestWorkStart = workExperience.reduce((earliest, entry) => Math.min(earliest, entry.sortOrder), Date.now());
const experienceYears = Math.max(1, Math.floor((Date.now() - earliestWorkStart) / (365.25 * 24 * 60 * 60 * 1000)));

export const siteMetrics = [
  { value: `${experienceYears}+`, label: 'years building software' },
  { value: String(projects.length), label: 'projects across product and platform' },
  { value: String(workExperience.length), label: 'professional roles' },
  { value: String(skillCategories.length), label: 'core capability areas' },
];
