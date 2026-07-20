export type DetailKey =
  | "amanak-case-study"
  | "amanak-architecture"
  | "trio-methodology"
  | "clinical-case-study";

export type ProjectAction = {
  label: string;
  href?: string;
  detail?: DetailKey;
  primary?: boolean;
};

export type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  status?: string;
  stack: string[];
  surface: string;
  muted: string;
  actions: ProjectAction[];
};

export const projects: FeaturedProject[] = [
  {
    title: "Amanak – Digital Government Platform",
    category: "System integration & application security",
    description:
      "An end-to-end reporting platform with an Android client, Spring Boot REST API, MySQL persistence, and an administrative dashboard.",
    stack: [
      "REST APIs",
      "Spring Boot",
      "MySQL",
      "System Integration",
      "Application Security",
      "Android",
    ],
    surface: "border-black/10 bg-[#fff7ea] text-[#11131a]",
    muted: "text-black/55",
    actions: [
      { label: "View Case Study", detail: "amanak-case-study", primary: true },
      {
        label: "GitHub Repo",
        href: "https://github.com/Layansabha/amanak-fullstack",
      },
      {
        label: "Live Demo / API",
        href: "https://layansabha.github.io/amanak-fullstack/",
      },
      { label: "Architecture", detail: "amanak-architecture" },
    ],
  },
  {
    title: "TRIO – AI-Based DOM XSS Detection",
    category: "Web security & machine learning",
    description:
      "A functional detection workflow combining structural DOM analysis, six machine-learning models, and script-based validation.",
    stack: [
      "Web App Security",
      "Python",
      "Machine Learning",
      "Automation",
      "DOM XSS",
    ],
    surface: "border-[#9fb7d3]/35 bg-[#dfe8f2] text-[#11131a]",
    muted: "text-black/55",
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/Layansabha/Dom-xss-ML",
        primary: true,
      },
      {
        label: "Presentation",
        href: "https://1drv.ms/p/c/96dce14123ced02e/IQBX9nfeSpMaSLrUsLL3BSQtAUqRZswKKZp3o1fUSYqLJfI?e=b7Vgid",
      },
      { label: "Methodology", detail: "trio-methodology" },
    ],
  },
  {
    title: "Clinical Documentation Application",
    category: "Application engineering & deployment support",
    description:
      "A production-ready bilingual clinical documentation application designed for a family medicine department of approximately 10 doctors.",
    stack: [
      "Application Support",
      "Deployment",
      "REST APIs",
      "JSON",
      "GitHub",
      "Troubleshooting",
    ],
    surface: "border-[#73e0c1]/20 bg-[#14231f] text-[#fff8ee]",
    muted: "text-white/58",
    actions: [
      {
        label: "View Case Study",
        detail: "clinical-case-study",
        primary: true,
      },
    ],
  },
];

export const detailContent: Record<
  DetailKey,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: { title: string; body: string }[];
  }
> = {
  "amanak-case-study": {
    eyebrow: "Amanak case study",
    title: "A digital reporting workflow designed around trust and traceability.",
    intro:
      "Amanak is an end-to-end platform built across a Java Android application, Spring Boot REST API, MySQL database, and administrative web dashboard.",
    sections: [
      {
        title: "Citizen workflow",
        body: "Users can verify identity against mock records, register, submit reports and digital evidence, receive tracking numbers, and follow case status through the Android application.",
      },
      {
        title: "System integration",
        body: "The Android client communicates with a layered Spring Boot backend using Retrofit, Gson, and OkHttp. Spring Data JPA and Hibernate manage persistent domain data in MySQL.",
      },
      {
        title: "Administration",
        body: "The administrative dashboard supports report and evidence review, status updates, user and bilingual content management, operational statistics, and responses to user messages.",
      },
    ],
  },
  "amanak-architecture": {
    eyebrow: "Amanak architecture",
    title: "Android client, REST services, persistent data, and administrative operations.",
    intro:
      "The architecture separates the user application, service layer, data persistence, and administrative workflows so each part can be operated and troubleshot independently.",
    sections: [
      {
        title: "Client",
        body: "Java and Android provide identity verification, reporting, evidence upload, case tracking, awareness content, and support workflows.",
      },
      {
        title: "Service layer",
        body: "Spring Boot exposes REST endpoints and handles validation, authentication, reporting workflows, status changes, and application logic.",
      },
      {
        title: "Data & security",
        body: "MySQL stores application data through Spring Data JPA and Hibernate. Spring Security and BCrypt protect credentials, while the demonstration validates identities against realistic mock records.",
      },
    ],
  },
  "trio-methodology": {
    eyebrow: "TRIO methodology",
    title: "Detecting DOM-based XSS through structural signals and validation.",
    intro:
      "TRIO accepts a URL, parses the webpage DOM, transforms structural patterns into machine-learning features, and validates suspected findings through a second-stage checking workflow.",
    sections: [
      {
        title: "Prepare",
        body: "The dataset was cleaned and normalized, then converted through a filtered 500-token vocabulary and numerical vectorization pipeline.",
      },
      {
        title: "Compare",
        body: "LightGBM, XGBoost, AdaBoost, Decision Tree, Random Forest, and MLP models were trained and evaluated. Random Forest reached up to 96.19% accuracy and 99.87% precision, while MLP produced the strongest recall.",
      },
      {
        title: "Validate",
        body: "A two-stage workflow combines ML classification with script-based checks to verify suspected findings and reduce false positives.",
      },
    ],
  },
  "clinical-case-study": {
    eyebrow: "Clinical application case study",
    title: "Bilingual documentation with deployment and support in mind.",
    intro:
      "The application was independently designed for a family medicine department of approximately 10 doctors to streamline consultation capture and structured report preparation.",
    sections: [
      {
        title: "Workflow",
        body: "AI-powered speech transcription and structured extraction support mixed Arabic-English consultations and organized clinical documentation.",
      },
      {
        title: "Application design",
        body: "The system produces print-ready Arabic and English reports and uses asynchronous processing, REST APIs, structured JSON validation, local data persistence, and audit logging.",
      },
      {
        title: "Operations",
        body: "The work included Git and GitHub workflows, deployment automation, environment configuration, and end-to-end application and server troubleshooting.",
      },
    ],
  },
};
