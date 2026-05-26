export const PROJECTS = [
  {
    name: 'Real-Time Road Safety Risk Scoring Pipeline',
    dateRange: 'April – May 2026',
    description:
      'Built a dual-pipeline system to predict accident-prone NH-44 segments using Apache Kafka and Spark Structured Streaming for real-time risk scoring stored in PostgreSQL. Developed an Azure medallion architecture pipeline using Azure Data Factory, ADLS Gen2, and Databricks. Integrated OpenWeatherMap, Ola Maps, and TomTom APIs for live weather, traffic, and incident data; visualized real-time risk trends in Power BI.',
    stack: ['Python', 'Apache Kafka', 'Apache Spark', 'Azure', 'Databricks', 'PostgreSQL', 'Power BI'],
    githubUrl: 'https://github.com/dharsinikannan/RoadSafetyProject',
    demoUrl: null,
  },
  {
    name: 'Monthly Report Intelligence System',
    dateRange: 'December 2025 – March 2026',
    description:
      'Designed and engineered an automated report generation system, eliminating manual diagnostics for monthly analysis. Constructed a Python-based email ingestion pipeline to extract logs and metrics; processed unstructured data and stored results in MSSQL. Deployed GPT-based anomaly detection and root cause analysis, reducing manual effort by 80%.',
    stack: ['React', 'Python', 'MSSQL', 'GPT-4o-mini'],
    githubUrl: null,
    demoUrl: null,
  },
  {
    name: 'FileFuse – Secure File Sharing System',
    dateRange: 'April – June 2024',
    description:
      'Architected a secure file-sharing system with time-bound access links, password protection, and download limits. Integrated AWS S3 for scalable storage and automated cleanup using lifecycle policies. Implemented Redis-based session management to handle concurrent access and improve response performance.',
    stack: ['React', 'Express.js', 'AWS S3', 'Redis'],
    githubUrl: null,
    demoUrl: 'https://filefusee.vercel.app/',
  },
  {
    name: 'FreshFleet – Grocery Platform',
    dateRange: 'October – December 2024',
    description:
      'Built a full-stack grocery platform connecting users with local organic farmers using the MERN stack. Engineered vendor rating, nutrient-based filtering, and recipe-based cart functionality. Designed RESTful APIs with Node.js and Express.js to handle product listings, orders, and user authentication.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: null,
    demoUrl: 'https://freshfleet.vercel.app/',
  },
]
