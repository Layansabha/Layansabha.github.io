export type GameMilestoneEvidence = {
  title: string;
  detail: string;
  href?: string;
};

export type GameMilestone = {
  id: number;
  number: string;
  title: string;
  shortLabel: string;
  type: "Education" | "Experience" | "Certification" | "Project" | "Goal";
  date: string;
  organization: string;
  x: number;
  y: number;
  description: string;
  skills: string[];
  status?: string;
  demoUrl?: string;
  link?: string;
  presentation?: string;
  evidence?: GameMilestoneEvidence[];
};

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const gameMilestones: GameMilestone[] = [
  {
    id: 1,
    number: "01",
    title: "Bachelor of Cyber Security",
    shortLabel: "Education",
    type: "Education",
    date: "2021–2025",
    organization: "Hashemite University",
    x: 380,
    y: 430,
    description:
      "Built a foundation across cybersecurity, networking, operating systems, application security, databases, and secure development.",
    skills: ["Cybersecurity", "Networking", "Linux", "Application security"],
  },
  {
    id: 2,
    number: "02",
    title: "CCNA Trainee",
    shortLabel: "CCNA Training",
    type: "Experience",
    date: "Aug 2022–Nov 2022",
    organization: "Consultation and Training Center - PSUT",
    x: 900,
    y: 350,
    description:
      "Completed instructor-led CCNA training delivered by Cisco-certified trainers, designing and troubleshooting Packet Tracer topologies with IPv4/IPv6, VLANs, trunking, STP, OSPF, and RIP.",
    skills: [
      "Cisco Packet Tracer",
      "Routing",
      "Switching",
      "Network troubleshooting",
    ],
    evidence: [
      {
        title: "Introduction to Networks",
        detail: "Cisco Networking Academy | Completed 26 Nov 2022",
        href: publicAsset("assets/game/certs/1.pdf"),
      },
      {
        title: "Enterprise Networking, Security & Automation",
        detail: "Cisco Networking Academy | Completed 12 Dec 2022",
        href: publicAsset("assets/game/certs/2.pdf"),
      },
      {
        title: "Switching, Routing & Wireless Essentials",
        detail: "Cisco Networking Academy | Completed 12 Dec 2022",
        href: publicAsset("assets/game/certs/3.pdf"),
      },
      {
        title: "Introduction to Networks",
        detail: "Cisco Networking Academy | Training certificate record",
        href: publicAsset("assets/game/certs/4.pdf"),
      },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "CompTIA Security+",
    shortLabel: "Security+",
    type: "Certification",
    date: "2023",
    organization: "CompTIA",
    x: 1450,
    y: 430,
    description:
      "Strengthened core knowledge of threats, defensive controls, risk management, identity, secure architecture, and incident response concepts.",
    skills: ["Security controls", "Risk", "Threats", "Incident response"],
  },
  {
    id: 4,
    number: "04",
    title: "Cyber Security Intern",
    shortLabel: "Security Internship",
    type: "Experience",
    date: "Jul 2024–Sep 2024",
    organization: "Estarta Solutions",
    x: 1960,
    y: 320,
    description:
      "Performed authorized web application security testing using manual and automated techniques, then produced evidence-based reports with CVSS severity ratings, proof-of-concept steps, impact analysis, and remediation recommendations.",
    skills: [
      "Penetration testing",
      "Vulnerability assessment",
      "Burp Suite",
      "CVSS",
      "ISO 27001",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Amanak",
    shortLabel: "Amanak",
    type: "Project",
    date: "2024",
    organization: "Hashemite University Project",
    x: 2500,
    y: 430,
    description:
      "Designed an end-to-end digital reporting platform with a Java Android client, Spring Boot REST API, MySQL database, identity verification against mock records, evidence uploads, case tracking, and an administrative dashboard.",
    skills: [
      "REST APIs",
      "System integration",
      "MySQL",
      "Spring Boot",
      "Application security",
    ],
    demoUrl: "https://layansabha.github.io/amanak-fullstack/",
    link: "https://github.com/Layansabha/amanak-fullstack",
  },
  {
    id: 6,
    number: "06",
    title: "DevOps Trainee",
    shortLabel: "DevOps Training",
    type: "Experience",
    date: "Mar 2025–Apr 2025",
    organization: "Digitinary",
    x: 3100,
    y: 350,
    description:
      "Containerized microservices, built a Jenkins CI/CD pipeline with build, test, Trivy scan, and deployment stages, configured Kubernetes across Ubuntu virtual machines, and automated operational tasks with Bash.",
    skills: ["Jenkins", "CI/CD", "Docker", "Kubernetes", "Bash"],
    evidence: [
      {
        title: "DevOps Training",
        detail: "Official training completion certificate",
        href: publicAsset("assets/game/certs/ليان صبحا-شهادة تدريب.pdf"),
      },
    ],
  },
  {
    id: 7,
    number: "07",
    title: "Cisco Certified Network Associate",
    shortLabel: "CCNA",
    type: "Certification",
    date: "Aug 2025–Aug 2028",
    organization: "Cisco",
    x: 3650,
    y: 430,
    description:
      "Validated routing, switching, subnetting, network services, security fundamentals, and structured network troubleshooting knowledge.",
    skills: ["Routing", "Switching", "Subnetting", "Network troubleshooting"],
    evidence: [
      {
        title: "Cisco Certified Network Associate",
        detail: "Issued 30 Aug 2025 | Valid through 30 Aug 2028",
        href: publicAsset(
          "assets/game/certs/Cisco Certified Network Associate certificate.pdf",
        ),
      },
    ],
  },
  {
    id: 8,
    number: "08",
    title: "TRIO – AI-Based DOM XSS Detection",
    shortLabel: "TRIO",
    type: "Project",
    date: "2025",
    organization: "Hashemite University Project",
    x: 4200,
    y: 320,
    description:
      "Built a functional DOM-based XSS detection workflow using structural DOM features, six machine-learning models, and script-based validation. Random Forest reached up to 96.19% accuracy and 99.87% precision.",
    skills: [
      "Web application security",
      "Python",
      "Machine learning",
      "Automation",
    ],
    link: "https://github.com/Layansabha/Dom-xss-ML",
    presentation:
      "https://1drv.ms/p/c/96dce14123ced02e/IQBX9nfeSpMaSLrUsLL3BSQtAUqRZswKKZp3o1fUSYqLJfI?e=b7Vgid",
  },
  {
    id: 9,
    number: "09",
    title: "Application Engineer & Deployment Support",
    shortLabel: "App Support",
    type: "Experience",
    date: "Jan 2026–Apr 2026",
    organization: "Abdali Hospital - Family Medicine Clinic",
    x: 4850,
    y: 430,
    description:
      "Designed and deployed a bilingual clinical documentation application for a family medicine department of approximately 10 doctors, with AI-assisted transcription, REST APIs, structured JSON validation, audit logging, deployment automation, and end-to-end troubleshooting.",
    skills: [
      "Application support",
      "Deployment",
      "REST APIs",
      "Troubleshooting",
      "GitHub",
    ],
  },
  {
    id: 10,
    number: "10",
    title: "DevOps & Application Support Path",
    shortLabel: "Next Step",
    type: "Goal",
    date: "Present",
    organization: "Career Direction",
    x: 5500,
    y: 350,
    description:
      "Focused on junior DevOps, application support, IT operations, infrastructure support, platform support, production support, and DevSecOps opportunities.",
    skills: [
      "DevOps",
      "Application support",
      "IT operations",
      "Linux",
      "Troubleshooting",
    ],
  },
];
