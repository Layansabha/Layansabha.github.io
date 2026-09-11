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
    title: "Bachelor of Science in Cybersecurity",
    shortLabel: "Education",
    type: "Education",
    date: "2021–2025",
    organization: "The Hashemite University",
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
    title: "CompTIA Security+ Coursework",
    shortLabel: "Security+ Course",
    type: "Education",
    date: "2022",
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
      "OWASP ZAP / Nmap / Nessus",
      "SQLMap / Wireshark",
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
    date: "Mar 2025–May 2025",
    organization: "Digitinary",
    x: 3100,
    y: 350,
    description:
      "Built a Jenkins pipeline with build, test, SonarQube quality gates, and Trivy scans. Wrote multi-stage Dockerfiles and Docker Compose configurations with networking and persistent storage. Deployed Kubernetes workloads and packaged Helm releases using Deployments, Services, Ingress, ConfigMaps, Secrets, Namespaces, and persistent volumes.",
    skills: ["Jenkins", "SonarQube", "Trivy", "Docker Compose", "Kubernetes", "Helm"],
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
    title: "DOM-XSS Detection & DevSecOps Platform",
    shortLabel: "DOM-XSS",
    type: "Project",
    date: "2024–2026",
    organization: "Graduation & Portfolio Project",
    x: 4200,
    y: 320,
    description:
      "Built a Python/FastAPI scanning pipeline with Redis/RQ workers, Chromium collection, AST features, LightGBM triage, and optional OWASP ZAP verification; achieved 96.19% accuracy and 99.87% precision. Added nine GitHub Actions checks, Trivy scans, GHCR images with SBOM and provenance, and Terraform provisioning of a firewall-protected Hetzner VPS with cloud-init.",
    skills: [
      "Web application security",
      "Python",
      "Machine learning",
      "Automation",
    ],
    link: "https://github.com/Layansabha/DOM-XSS",
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
    id: 10, number: "10", title: "Infrastructure Engineer", shortLabel: "Azm Digital",
    type: "Experience", date: "Jul 2026–Present", organization: "Azm Digital | Amman, Jordan",
    x: 5500, y: 350,
    description: "Configured Windows Server, Active Directory, Group Policy, DNS, DHCP, domain joining, file permissions, IIS, backups, and TLS certificates. Troubleshot routing, firewall, DNS, DHCP, and VPN scenarios. Published an HTTPS IIS website through the company router using NAT/port forwarding, and delivered a technical presentation on website certificates and HTTPS trust.",
    skills: ["Windows Server", "Active Directory", "Group Policy", "IIS / HTTPS", "DNS / DHCP", "NAT / VPN"],
  },
  {
    id: 11, number: "11", title: "Data Center Environmental Monitoring & Observability System", shortLabel: "Monitoring",
    type: "Project", date: "2026", organization: "Portfolio Project",
    x: 6100, y: 430,
    description: "Programmed an ESP32 in Arduino C++ to read AHT20/BMP280 temperature and humidity data and expose device health and sensor readings at an HTTP /metrics endpoint in Prometheus format. Containerized Prometheus, Grafana, and Alertmanager with Docker Compose, built live and historical dashboards, and routed temperature, humidity, and device-unavailable alerts to mobile notifications. Added LCD, RGB LED, and buzzer warnings.",
    skills: ["ESP32", "Arduino C++", "Prometheus", "Grafana", "Alertmanager", "Docker Compose"],
  },
  {
    id: 12, number: "12", title: "CompTIA A+ Coursework", shortLabel: "A+ Course",
    type: "Education", date: "Completed Sep 2026", organization: "CompTIA Coursework",
    x: 6700, y: 350,
    description: "Completed CompTIA A+ coursework in September 2026, complementing hands-on infrastructure and troubleshooting work. Coursework completion, separate from exam certification.",
    skills: ["IT fundamentals", "Systems", "Troubleshooting"],
  },
  {
    id: 13, number: "13", title: "DevOps Engineering", shortLabel: "Next Step",
    type: "Goal", date: "Present", organization: "Career Direction",
    x: 7300, y: 430,
    description: "Building on infrastructure work at Azm Digital, DevOps training at Digitinary, and projects in secure delivery and observability. Focused on junior DevOps and infrastructure opportunities.",
    skills: ["CI/CD", "Containers", "Infrastructure", "Observability", "Security"],
  },
];
