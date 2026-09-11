import { useState } from "react";
import { motion } from "framer-motion";
import { publicAsset } from "../utils/publicAsset";

const commands = [
  "deploy --pipeline jenkins",
  "operate --linux --reliable",
  "troubleshoot --apps --infra",
  "open --projects",
];

const panels = [
  ["DevOps", "CI/CD pipelines, containers, Kubernetes, and delivery automation."],
  [
    "Application Support",
    "Deployment, logs, APIs, environment configuration, and end-to-end troubleshooting.",
  ],
  [
    "IT Operations",
    "Windows Server, Active Directory, IIS, Linux, networking, and HTTPS.",
  ],
];

export default function Hero() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [mood, setMood] = useState("calm");
  const command = commands[commandIndex];

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#151515] px-4 pb-12 pt-28 text-[var(--paper-soft)] sm:px-6 sm:pt-32 lg:px-10 lg:pb-16"
    >
      <div className="mx-auto grid min-h-[760px] max-w-[1380px] gap-x-12 gap-y-10 lg:grid-cols-[1.08fr_0.72fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="pt-4 lg:pt-0"
        >
          <div className="mb-8 flex items-center gap-3 text-xs text-white/42">
            <span className="h-px w-8 bg-[var(--red)]" />
            <span>DevOps Engineer · Infrastructure · Observability</span>
          </div>

          <h1 className="max-w-4xl text-[clamp(2.9rem,6.3vw,6.5rem)] font-bold leading-[0.97] tracking-[-0.055em] text-[var(--paper-soft)]">
            Layan builds, deploys, and troubleshoots reliable systems.
          </h1>

          <div className="mt-8 grid gap-6 border-t border-white/12 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              Cybersecurity graduate and Infrastructure Engineer at Azm Digital in
              Amman. Hands-on experience with Windows Server, networking, CI/CD,
              Docker, Kubernetes, and monitoring with Prometheus and Grafana.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={publicAsset("Layan-Sabha-CV.pdf")}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[var(--red)] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#9f3030]"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white/18 px-4 py-3 text-sm font-semibold text-white/82 transition-colors duration-200 hover:border-white/40 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="mt-7 border border-white/12 bg-[#111111] font-mono">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                <span className="text-[10px] text-white/38">command palette</span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setCommandIndex((index) => (index + 1) % commands.length)
                }
                className="rounded px-2 py-1 text-[10px] font-semibold text-white/48 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
              >
                reroll
              </button>
            </div>
            <motion.p
              key={command}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="px-4 py-4 text-sm text-white/76"
            >
              <span className="text-[var(--red)]">~/portfolio</span> ${" "}
              {command}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.06, ease: "easeOut" }}
          className="mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <div className="border border-white/14 bg-[#111111] p-2.5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#202020]">
              <img
                src={publicAsset("assets/layan-photo.jpg")}
                alt="Portrait of Layan"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 border-t border-white/12 bg-[#151515]/92 p-4">
                <div>
                  <p className="font-mono text-[10px] text-white/42">operator</p>
                  <h2 className="mt-1 text-2xl font-bold text-white">Layan</h2>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setMood((value) => (value === "calm" ? "deploy" : "calm"))
                  }
                  className="rounded-md border border-white/16 px-3 py-2 text-left transition-colors duration-200 hover:border-white/35"
                >
                  <span className="block font-mono text-[9px] text-white/38">mode</span>
                  <span className="mt-0.5 block text-xs font-semibold text-white">
                    {mood}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.1 }}
          className="grid border-y border-white/14 sm:grid-cols-3 lg:col-span-2"
        >
          {panels.map(([title, text], index) => (
            <a
              key={title}
              href={
                title === "DevOps"
                  ? "#technical-focus"
                  : title === "Application Support"
                    ? "#about"
                    : "#route-game"
              }
              className={`group py-5 transition-colors duration-200 hover:bg-white/[0.035] sm:px-5 ${
                index < panels.length - 1
                  ? "border-b border-white/14 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-lg font-semibold text-white">{title}</p>
                <span className="text-sm text-[var(--red)] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/48">{text}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
