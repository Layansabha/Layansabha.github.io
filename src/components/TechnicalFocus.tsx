import { motion } from "framer-motion";

const focusAreas = [
  {
    number: "01", title: "CI/CD & Containers",
    skills: ["Jenkins / GitHub Actions / GitLab CI/CD", "Git / GitHub / GitLab / YAML", "Docker / Docker Compose / GHCR", "Kubernetes / Helm", "Python / Bash / SQL", "AWS / Terraform / Ansible (familiarity)"],
  },
  {
    number: "02", title: "Infrastructure & Networking",
    skills: ["Windows Server / Active Directory / Group Policy", "IIS / TLS certificates / backups", "Linux / Ubuntu / Oracle Linux / NGINX", "DNS / DHCP / TCP/IP / routing", "Firewalls / VPN / TLS/SSL / SSH / NAT", "VMware / VirtualBox / Hyper-V"],
  },
  {
    number: "03", title: "Observability & Security",
    skills: ["Prometheus / Grafana / Alertmanager", "Trivy / SonarQube / OWASP ZAP", "Burp Suite / Nmap / Nessus", "SQLMap / Wireshark / CVSS", "ESP32 / Arduino C++ / HTTP metrics", "Vulnerability assessment / remediation reports"],
  },
];

export default function TechnicalFocus() {
  return (
    <section
      id="technical-focus"
      className="scroll-mt-20 border-y border-black/10 bg-[#ebe7de] px-4 py-20 text-[var(--ink)] sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-10 grid gap-4 border-b border-black/12 pb-7 lg:grid-cols-[1fr_0.72fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold text-[var(--red)]">
              Capabilities
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Technical Focus
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`py-7 md:px-7 ${index < focusAreas.length - 1 ? "border-b border-black/12 md:border-b-0 md:border-r" : ""} ${index === 0 ? "md:pl-0" : ""}`}
            >
              <p className="font-mono text-xs font-semibold text-[var(--red)]">
                {area.number}
              </p>
              <h3 className="mt-3 min-h-14 text-2xl font-bold leading-tight tracking-[-0.02em]">
                {area.title}
              </h3>
              <ul className="mt-5 border-t border-black/10">
                {area.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 border-b border-black/[0.08] py-3 text-sm font-medium text-black/62"
                  >
                    <span className="h-px w-3 shrink-0 bg-[var(--red)]" />
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
