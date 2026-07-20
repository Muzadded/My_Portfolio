// ─── Personal ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name:     'Md Muzadded Chowdhury',
  title:    'AI & Automation Engineer',
  email:    'muzaddedchowdhury@gmail.com',
  phone:    '+880 1931 117218',
  location: 'Dhaka, Bangladesh',
  github:   'https://github.com',
  linkedin: 'https://linkedin.com',
  bio: 'AI & Automation Engineer with 1+ years of experience developing scalable AI systems using LLMs, RAG, and agentic workflows. Skilled in building multilingual chatbots, AI-driven tools, and document intelligence platforms. Proficient in FastAPI, vector databases, and GCP. Experienced in Docker-based deployment, improving efficiency by up to 70%. Authored 5 research papers on blockchain, federated learning, and cybersecurity.',
  typedPhrases: [
    'AI Engineer',
    'LLM Developer',
    'RAG Specialist',
    'Automation Expert',
    'ML Researcher',
  ],
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { label: 'Years Experience',  value: 1,  suffix: '+' },
  { label: 'Research Papers',   value: 5,  suffix: '+' },
  { label: 'AI Projects Built', value: 4,  suffix: '+' },
  { label: 'Efficiency Boost',  value: 70, suffix: '%' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    icon: 'code',
    skills: ['Python', 'SQL', 'JavaScript', 'C/C++', 'PHP'],
  },
  {
    category: 'AI / ML',
    icon: 'cpu',
    skills: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Feature Engineering', 'Model Training'],
  },
  {
    category: 'Generative AI & LLMs',
    icon: 'brain',
    skills: [
      'RAG Systems', 'LLM Fine-Tuning', 'LangChain', 'Prompt Engineering',
      'Hugging Face', 'Agentic Workflows', 'Function Calling', 'Semantic Search',
      'Embedding Models', 'Context Management',
    ],
  },
  {
    category: 'AI System Design',
    icon: 'layers',
    skills: [
      'Multi-Agent Systems', 'AI Automation Pipelines',
      'Document Intelligence', 'Conversational AI', 'Workflow Orchestration',
    ],
  },
  {
    category: 'Vector Databases',
    icon: 'database',
    skills: ['FAISS', 'ChromaDB', 'Pinecone', 'Firestore', 'Similarity Search', 'Index Optimization'],
  },
  {
    category: 'Frameworks & APIs',
    icon: 'server',
    skills: ['FastAPI', 'Flask', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'Microservices'],
  },
  {
    category: 'MLOps & Cloud',
    icon: 'cloud',
    skills: ['Docker', 'GCP', 'MLflow', 'Git', 'CI/CD Pipelines', 'Model Versioning'],
  },
  {
    category: 'Databases',
    icon: 'hard-drive',
    skills: ['PostgreSQL', 'MySQL', 'NoSQL'],
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export interface Experience {
  company:   string
  role:      string
  type:      string
  period:    string
  location:  string
  bullets:   string[]
  tech:      string[]
}

export const EXPERIENCES: Experience[] = [
  {
    company:  'Care Guide',
    role:     'AI & Automation Engineer',
    type:     'Full-time',
    period:   'Sep 2025 – Present',
    location: 'Dhaka, Bangladesh',
    bullets: [
      'Designed HIPAA-compliant Healthcare AI systems for sensitive patient and medical datasets',
      'Developed RAG-based conversational AI systems & enterprise chatbots improving info access by 60%+',
      'Built AI automation pipelines and agentic workflows, reducing repetitive workload by ~50%',
      'Implemented AI-driven payroll analysis automation reducing processing time by 70%',
      'Developed Employee CRM using React.js, Node.js, Express.js, and PostgreSQL',
      'Built multi-channel chatbots integrated with Facebook, WhatsApp, Instagram & Web',
      'Created AI-powered CV processing system for automated resume parsing & candidate scoring',
      'Deployed scalable AI services on Google Cloud Platform (GCP)',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'Vector DBs', 'React.js', 'Node.js', 'PostgreSQL', 'GCP'],
  },
  {
    company:  'Code24 PTY LTD',
    role:     'AI & Automation Engineer',
    type:     'Full-time',
    period:   'Jan 2025 – Sep 2025',
    location: 'Remote',
    bullets: [
      'Developed AI automation systems for NDIS platforms to streamline HR onboarding & workforce rostering',
      'Built multilingual conversational AI chatbots using IBM Watsonx Assistant',
      'Designed a Voice AI assistant platform integrating n8n, Retell AI, and GoHighLevel CRM',
      'Collaborated with a 4-member engineering team on enterprise AI applications in IBM TechZone',
    ],
    tech: ['Python', 'IBM Watsonx', 'Watsonx Assistant', 'n8n', 'Retell AI', 'GoHighLevel'],
  },
  {
    company:  'United International University',
    role:     'Undergraduate Teaching Assistant',
    type:     'Part-time',
    period:   'Oct 2022 – Oct 2024',
    location: 'Dhaka, Bangladesh',
    bullets: [
      'Assisted faculty in lab sessions for AI, Data Structures & Algorithms I & II, Structured Programming',
      'Mentored 150+ undergraduate students in algorithm implementation and ML fundamentals',
      'Guided students in debugging code, algorithm analysis, and programming assignments',
    ],
    tech: ['Python', 'C/C++', 'Data Structures', 'Machine Learning'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  title:       string
  type:        'Group Project' | 'Self Project'
  description: string
  tech:        string[]
  features:    string[]
  icon:        string
}

export const PROJECTS: Project[] = [
  {
    title:       'SME Business Guardian',
    type:        'Group Project',
    description: 'AI Business Consultation Platform for contract analysis, legal document review, and business strategy support with a secure LLM-based conversational interface.',
    tech:        ['FastAPI', 'ReactJS', 'PostgreSQL', 'IBM Granite-3.3-8b', 'LangGraph'],
    features:    [
      'Contract & Legal Document Analysis',
      'JWT Authentication + 4000-token Context',
      'LangGraph Workflow Orchestration',
    ],
    icon: 'building-2',
  },
  {
    title:       'Bangla RAG System with ChromaDB',
    type:        'Self Project',
    description: 'Multilingual RAG pipeline supporting Bengali and English e-commerce queries with hybrid semantic retrieval, intent classification, and real-time translation.',
    tech:        ['Python', 'ChromaDB', 'Sentence Transformers', 'LangChain', 'Groq', 'PyTorch'],
    features:    [
      'Bengali & English Multilingual Support',
      'Hybrid Semantic Retrieval + Intent Classification',
      'Persistent Vector Storage (12+ categories)',
    ],
    icon: 'languages',
  },
  {
    title:       'AI-Powered SQL Assistant',
    type:        'Self Project',
    description: 'Natural language to SQL assistant using MCP architecture for querying relational databases with LLaMA-3.1-8b, syntax-highlighted output, and real-time execution.',
    tech:        ['Python', 'Streamlit', 'Node.js', 'MySQL', 'Groq API', 'LLaMA-3.1-8b'],
    features:    [
      'Natural Language → SQL Conversion',
      'MCP-based Backend Architecture',
      'Real-time Query Execution & Highlighting',
    ],
    icon: 'database',
  },
  {
    title:       'CSV Data Analyzer (NL Interface)',
    type:        'Self Project',
    description: 'AI-driven tool converting natural language instructions into CSV data workflows with automated analysis, visualization generation, and chat-based analytics.',
    tech:        ['Python', 'Streamlit', 'Gemini 1.5 Flash', 'LangChain', 'Pandas'],
    features:    [
      'Natural Language Instructions Interface',
      'Auto Visualization Generation',
      'Real-time Chat Analytics + Report Charts',
    ],
    icon: 'chart-bar',
  },
]

// ─── Publications ─────────────────────────────────────────────────────────────
export interface Publication {
  number:  string
  venue:   string
  type:    'journal' | 'ieee'
  title:   string
  summary: string
  metric?: string
  link:    string
}

export const PUBLICATIONS: Publication[] = [
  {
    number:  '01',
    venue:   'IET Blockchain',
    type:    'journal',
    title:   'Decentralized Medical Image Sharing using Blockchain',
    summary: 'Privacy-preserving blockchain-based framework integrating SSH hashing and IPFS storage across multiple healthcare imaging datasets.',
    metric:  '98% data integrity accuracy',
    link:    '#',
  },
  {
    number:  '02',
    venue:   'Biomedical Signal Processing and Control',
    type:    'journal',
    title:   'FVCM-Net: Privacy-Preserved Lung Cancer Detection from CT Images',
    summary: 'Federated learning-based ensemble deep learning model with explainable HiRes-CAM and SHAP attribution for decentralized lung cancer detection.',
    metric:  '98.26% accuracy',
    link:    '#',
  },
  {
    number:  '03',
    venue:   'IEEE',
    type:    'ieee',
    title:   'Deep Learning for Identification of Arsenic-Induced Skin Diseases',
    summary: 'Attention-based CNN (ARS-CNNSA) for arsenic-induced skin condition classification, outperforming VGG16 and InceptionV3.',
    metric:  '91% accuracy · 90% F1-score',
    link:    '#',
  },
  {
    number:  '04',
    venue:   'IEEE',
    type:    'ieee',
    title:   'Clustering as a Catalyst for Big Data Classification (CC-BC)',
    summary: 'Clustering-driven classification framework leveraging unsupervised instance similarity to reduce labeling dependency and enhance ensemble classifiers.',
    link:    '#',
  },
  {
    number:  '05',
    venue:   'IEEE',
    type:    'ieee',
    title:   'Phishing Link Detection using Ensemble Learning',
    summary: 'Ensemble-based phishing detection combining Random Forest, Logistic Regression, and Gradient Boosting for improved cybersecurity generalization.',
    link:    '#',
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = {
  degree:      'Bachelor of Computer Science & Engineering',
  institution: 'United International University',
  location:    'Dhaka, Bangladesh',
  period:      'Jan 2020 – Oct 2024',
  gpa:         '3.67 / 4.00',
  highlights: [
    'Academic Excellence Scholarship recipient',
    'Research focus: AI, Federated Learning, Blockchain, Cybersecurity',
    'Authored 5 research papers (2 journal + 3 conference)',
    'Lab sessions: AI, Data Structures & Algorithms, Structured Programming',
  ],
}

// ─── Achievements ─────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    title:  'Academic Excellence Scholarship',
    org:    'United International University',
    icon:   'trophy',
    color:  'from-amber-500 to-orange-500',
  },
  {
    title:  'AI & Automation Unpacked Hackathon',
    org:    'IBM',
    icon:   'zap',
    color:  'from-blue-500 to-indigo-600',
  },
  {
    title:  'Problem Solving (Intermediate)',
    org:    'HackerRank',
    icon:   'code-2',
    color:  'from-green-500 to-emerald-600',
  },
]
