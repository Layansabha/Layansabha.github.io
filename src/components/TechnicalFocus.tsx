import { motion } from "framer-motion";

const focusAreas = [
  {
    number: "01",
    title: "DevOps & Containers",
    accent: "text-[#e2484d]",
    skills: [
      "Linux / Ubuntu / Oracle Linux",
      "Jenkins CI/CD",
      "Docker & Docker Compose",
      "Kubernetes resources",
      "Bash & YAML",
      "Git / GitHub / GitLab",
    ],
  },
  {
    number: "02",
    title: "Application & IT Operations",
    accent: "text-[#2457e6]",
    skills: [
      "Application deployment & support",
      "Apache Tomcat & JDK 8/11",
      "NGINX reverse proxy & load balancing",
      "Oracle Database 19c / CDB / PDB",
      "REST APIs / Postman / JSON",
      "Log analysis & root-cause troubleshooting",
    ],
  },
  {
    number: "03",
    title: "Security & Networking",
    accent: "text-[#17765d]",
    skills: [
      "Trivy & SonarQube",
      "Vulnerability assessment & CVSS",
      "Burp Suite / ZAP / Nmap / Nessus",
      "TCP/IP / DNS / HTTP(S)",
      "VLANs / OSPF / RIP",
      "CCNA networking fundamentals",
    ],
  },
];

export default function TechnicalFocus() {
  return (
    <section
      id="technical-focus"
      className="scroll-mt-24 bg-[#dfe8f2] px-4 py-14 text-[#11131a] sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 grid gap-4 lg:grid-cols-[1fr_0.72fr] lg:items-end"
        >
          <div>
            <h2 className="mt-3 text-4xl font-black leading-none sm:text-5xl">
              Technical Focus
            </h2>
          </div>
        </motion.div>

        <div className="grid border-y border-black/12 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.07 }}
              className={`py-7 md:px-7 ${index < focusAreas.length - 1 ? "border-b border-black/12 md:border-b-0 md:border-r" : ""}`}
            >
              <p
                className={`font-mono text-xs font-black tracking-[0.18em] ${area.accent}`}
              >
                {area.number}
              </p>
              <h3 className="mt-3 text-2xl font-black">{area.title}</h3>
              <ul className="mt-5 space-y-3">
                {area.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm font-bold text-black/68"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${area.accent}`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
