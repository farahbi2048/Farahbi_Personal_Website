import { Project, TimelineItem, SkillCategory, Award, Stats } from '../types';

export const PERSONAL_INFO = {
  name: 'Md Farahbi Ishrak Famous',
  shortName: 'Md Farahbi Ishrak',
  title: 'Software Developer & AI Student',
  degree: 'Bachelor of ICT (Major in Artificial Intelligence)',
  university: 'University of Tasmania',
  location: 'Hobart, Tasmania, Australia',
  email: 'farahbiishrak.fif@gmail.com',
  phone: '+61 415 185 672',
  linkedin: 'https://www.linkedin.com/in/md-farahbi-ishrak-0149461ba/',
  github: 'https://github.com/farahbi2048',
  gpa: '6.67 / 7.0',
  tagline: 'Aspiring ICT student with a passion for Artificial Intelligence, data pipelines, ML-based systems, and full-stack software development.',
  summary: `Aspiring ICT student with a growing passion for Artificial Intelligence and data pipelines and a strong academic background in programming, databases and applied machine learning. Proficient in Python, SQL, Java, React 19, and cloud tools including AWS, with hands-on experience building ML-based systems and full-stack prototypes. Aiming to build reliable data systems and drive meaningful innovation in AI and technology.`,
  terminalCode: `# Python, ML Pipelines & Full-Stack Cloud Architectures
def current_focus():
    return {
        "degree": "Bachelor of ICT (Major in AI)",
        "location": "Hobart, Tasmania",
        "current_build": "AuraWatch AI Air Quality Anomaly Detector",
        "cloud_stack": ["AWS Bedrock", "DynamoDB", "FastAPI", "React 19"]
    }`
};

export const PORTFOLIO_STATS: Stats = {
  gpa: '6.67 / 7.0',
  projectsCount: '3+',
  awardsCount: '6+',
  leadershipCount: '5+',
};

export const PROJECTS: Project[] = [
  {
    id: 'aurawatch',
    title: 'AuraWatch',
    subtitle: 'AI Air Quality Anomaly Detection System',
    category: 'AI & ML',
    period: '2026 – In Development',
    role: 'Independent Developer & Researcher',
    shortDescription: 'Machine learning pipeline monitoring live air quality data across urban Tasmania to detect unexplained pollution spikes.',
    fullDescription: 'Designing and implementing an end-to-end machine-learning pipeline to ingest, clean, and process real-time air quality sensor metrics across urban Tasmania. Uses anomaly detection algorithms to isolate unusual pollution spikes that deviate from historical traffic, weather, and seasonal patterns.',
    highlights: [
      'Designed ML anomaly detection pipeline analyzing real-time urban air quality data across Tasmania.',
      'Isolated unexplained pollution spikes that deviate from normal traffic and weather baselines.',
      'Applied Python, pandas, NumPy, and time-series clustering for environmental anomaly identification.',
      'Built automated data processing workflows for continuous sensor data streams.'
    ],
    techStack: ['Python', 'pandas', 'NumPy', 'Machine Learning', 'FastAPI', 'SQL', 'Time Series'],
    featured: true,
    demoType: 'aurawatch'
  },
  {
    id: 'tasnetworks',
    title: 'Early Feasibility Screening Prototype',
    subtitle: 'Electricity Grid Integration Workflow (TasNetworks Hackathon)',
    category: 'Web & Cloud',
    period: '2026',
    role: 'Backend & Cloud Architect (Hackathon)',
    shortDescription: 'Rapid screening workflow and AI-driven risk triage for residential solar, battery, and EV connection requests.',
    fullDescription: 'Developed during the TasNetworks Open Innovation Hackathon to streamline grid connection requests. Features a human-in-the-loop AWS architecture with map-based risk triage, automated design brief generation using Amazon Bedrock, and cost optimization.',
    highlights: [
      'Collaborated on grid challenge for residential solar, battery, and EV-charging connection requests.',
      'Architected human-in-the-loop serverless system using AWS API Gateway, Amazon Bedrock, and DynamoDB.',
      'Implemented map-based risk triage with automated technical design brief generation.',
      'Achieved extreme cost efficiency, reducing system hosting cost to ~$10/month.'
    ],
    techStack: ['AWS API Gateway', 'Amazon Bedrock', 'DynamoDB', 'Python', 'Map Box GIS', 'Serverless'],
    featured: true,
    demoType: 'tasnetworks'
  },
  {
    id: 'prescription-writer',
    title: 'Prescription Writer BD',
    subtitle: 'Clinical Record & Prescription Management Web App',
    category: 'Full Stack',
    period: '2026',
    role: 'Lead Full Stack Developer',
    shortDescription: 'Digital prescription drafting system with patient record management, medicine lookup, and medical calculation modules.',
    fullDescription: 'A strongly typed React 19 and TypeScript web application built for digital prescription drafting, patient management, medicine lookup, appointment tracking, and payment logging. Includes real-time clinical modules for BMI, insulin dosing, BMR, and pediatric growth screening.',
    highlights: [
      'Built React 19 & TypeScript application for digital prescription drafting and patient record management.',
      'Implemented strongly typed clinical models with real-time calculation modules (BMI, insulin dosing, BMR, EDD).',
      'Designed print-ready prescription pad layout optimized for medical workflows.',
      'Configured browser-based persistence using Vite, Tailwind CSS, and automated GitHub Actions CI/CD.'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Actions', 'Clinical Algorithms'],
    featured: true,
    demoType: 'prescription'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'utas-degree',
    title: 'Bachelor of ICT (Major in Artificial Intelligence)',
    organization: 'University of Tasmania',
    location: 'Hobart, Tasmania',
    period: 'July 2025 – Present',
    type: 'education',
    shortSummary: 'Maintaining a 6.67 / 7.0 GPA focusing on AI, data engineering, software development, and database systems.',
    bulletPoints: [
      'High Academic Standing with GPA 6.67 / 7.0 in ICT & Artificial Intelligence.',
      'Core coursework: Machine Learning Fundamentals, Database Systems, Software Engineering, Web Development.',
      'Active student contributor and UTAS Student Representative for ICT feedback.'
    ],
    skills: ['AI & ML', 'Python', 'Java', 'SQL', 'TypeScript', 'Database Design']
  },
  {
    id: 'city-of-hobart',
    title: 'International Student Ambassador',
    organization: 'City of Hobart',
    location: 'Hobart, Tasmania',
    period: '2026 – Present',
    type: 'leadership',
    shortSummary: 'Representing international students in civic activities and advocating for cultural diversity in Tasmania.',
    bulletPoints: [
      'Represent international students in civic activities and advocate for cultural diversity issues.',
      'Delivered official citizenship-ceremony speeches representing the international student community.',
      'Leading a youth engagement initiative involving creative essay writing competitions.'
    ],
    skills: ['Public Speaking', 'Civic Engagement', 'Leadership', 'Cross-Cultural Advocacy']
  },
  {
    id: 'library-assistant',
    title: 'Library Assistant',
    organization: 'University of Tasmania',
    location: 'Hobart, Tasmania',
    period: 'May 2026 – Present',
    type: 'employment',
    shortSummary: 'Managing library circulation, inventory control, RFID systems, and student support.',
    bulletPoints: [
      'Staff the circulation desk and support students with borrowing, returns, and academic enquiries.',
      'Manage shelving, stock accuracy, and operate RFID and barcode inventory control systems.',
      'Maintain reliable customer service in a high-demand academic library environment.'
    ],
    skills: ['RFID & Barcode Systems', 'Inventory Control', 'Customer Service', 'Database Lookup']
  },
  {
    id: 'woolworths',
    title: 'Team Member',
    organization: 'Woolworths',
    location: 'Hobart, Tasmania',
    period: 'Aug 2025 – Present',
    type: 'employment',
    shortSummary: 'Delivering customer service and operational compliance while balancing full-time ICT studies.',
    bulletPoints: [
      'Work reliably in a fast-paced customer environment adhering to operational and safety protocols.',
      'Demonstrate strong time management by balancing part-time employment with full-time ICT studies.'
    ],
    skills: ['Time Management', 'Team Collaboration', 'Problem Solving', 'Customer Engagement']
  },
  {
    id: 'utas-student-rep',
    title: 'Student Representative',
    organization: 'University of Tasmania',
    location: 'Hobart, Tasmania',
    period: '2026',
    type: 'leadership',
    shortSummary: 'Communicating student feedback to university staff to enhance the learning environment.',
    bulletPoints: [
      'Communicate student feedback to academic staff to drive constructive discussions on unit delivery.',
      'Represent peer perspectives in faculty review panels and academic feedback forums.'
    ],
    skills: ['Feedback Analysis', 'Academic Advocacy', 'Communication']
  },
  {
    id: 'tusa-foodhub',
    title: 'Volunteer',
    organization: 'TUSA FoodHub',
    location: 'Hobart, Tasmania',
    period: '2025 – Present',
    type: 'leadership',
    shortSummary: 'Supporting student welfare and food distribution at UTAS community food hub.',
    bulletPoints: [
      'Support food distribution, stock organization, and respectful student service in a community setting.',
      'Help address food security for university students through respectful logistics management.'
    ],
    skills: ['Community Logistics', 'Volunteering', 'Student Welfare']
  },
  {
    id: 'robotics-club',
    title: 'Founder & President, Robotics Club',
    organization: 'Pabna Cadet College',
    location: 'Bangladesh',
    period: '2021 – 2023',
    type: 'leadership',
    shortSummary: 'Founded school robotics club, taught Arduino programming, and mentored National Olympiad winners.',
    bulletPoints: [
      "Founded the school's first Robotics Club and introduced students to Arduino-based robotics and C++.",
      'Mentored students to conquer top 20 positions in the National Robotics Olympiad in 2021, 2022, and 2023.'
    ],
    skills: ['Arduino', 'Robotics', 'C++', 'Mentorship', 'STEM Leadership']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming & Logic',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 'Advanced', featured: true, description: 'Pandas, NumPy, ML algorithms, Data processing' },
      { name: 'SQL', level: 'Advanced', featured: true, description: 'MySQL, PostgreSQL, complex queries & schema design' },
      { name: 'TypeScript', level: 'Advanced', featured: true, description: 'Strong typing, React 19, Node.js, interfaces' },
      { name: 'Java', level: 'Intermediate', featured: false, description: 'Object-oriented programming, data structures' }
    ]
  },
  {
    category: 'Web & Frameworks',
    iconName: 'Layout',
    skills: [
      { name: 'React 19', level: 'Advanced', featured: true, description: 'Hooks, state management, Vite, modern UI' },
      { name: 'FastAPI', level: 'Advanced', featured: true, description: 'Async RESTful APIs, Python backend services' },
      { name: 'Tailwind CSS', level: 'Advanced', featured: true, description: 'Utility-first responsive layouts & dark mode' },
      { name: 'Vite', level: 'Advanced', featured: false, description: 'Fast frontend bundling and HMR build tools' }
    ]
  },
  {
    category: 'Data & Machine Learning',
    iconName: 'Brain',
    skills: [
      { name: 'pandas & NumPy', level: 'Advanced', featured: true, description: 'Data wrangling, cleaning & matrix analytics' },
      { name: 'ML Fundamentals', level: 'Advanced', featured: true, description: 'Anomaly detection, regression, clustering' },
      { name: 'MySQL', level: 'Intermediate', featured: false, description: 'Relational database querying and optimization' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS Bedrock', level: 'Proficient', featured: true, description: 'Generative AI API integration & brief synthesis' },
      { name: 'AWS API Gateway & DynamoDB', level: 'Proficient', featured: true, description: 'Serverless REST APIs & NoSQL data stores' },
      { name: 'GitHub Actions', level: 'Proficient', featured: false, description: 'Automated CI/CD workflows and deployment' },
      { name: 'Splunk Enterprise & Git', level: 'Proficient', featured: false, description: 'Log monitoring, version control, git flow' }
    ]
  }
];

export const AWARDS: Award[] = [
  {
    id: 'queen-essay',
    title: 'Silver Medal (2021 & 2023)',
    issuer: "The Queen's Commonwealth Essay Competition",
    year: '2021 & 2023',
    category: 'Global Award',
    description: "Awarded twice in the world's oldest international writing competition for exemplary essay writing.",
    icon: 'Award'
  },
  {
    id: 'asteroid-search',
    title: 'Team Leader & Best Team Award',
    issuer: 'International Asteroid Search Campaign',
    year: '2022',
    category: 'Competition',
    description: 'Led research team analyzing astronomical telemetry datasets to discover preliminary asteroid signatures.',
    icon: 'Sparkles'
  },
  {
    id: 'duke-edinburgh',
    title: 'Gold Award',
    issuer: "Duke of Edinburgh's International Award",
    year: '2022',
    category: 'Global Award',
    description: 'Prestigious global recognition for sustained community service, physical endurance, and environmental sustainability.',
    icon: 'Crown'
  },
  {
    id: 'nmun-delegate',
    title: 'Best Delegate',
    issuer: 'Dhaka University National Model United Nations 2021',
    year: '2021',
    category: 'Leadership',
    description: 'Top recognition for international diplomacy, policy drafting, and strategic speech delivery.',
    icon: 'Trophy'
  },
  {
    id: 'climate-olympiad',
    title: 'Finalist',
    issuer: 'International Climate Science Olympiad 2023',
    year: '2023',
    category: 'Competition',
    description: 'Global finalist for solving data-driven climate change mitigation models and environmental engineering problems.',
    icon: 'Globe'
  },
  {
    id: 'gsg-essay',
    title: 'Winner',
    issuer: 'GSG National Essay Competition 2021',
    year: '2021',
    category: 'Academic',
    description: 'First prize winner in national essay competition focused on technology and youth development.',
    icon: 'Feather'
  }
];
