import { motion } from "framer-motion";
import { publicAsset } from "../utils/publicAsset";
import redbullCan from "../assets/redbull.png";

const channels = ["DevOps", "Application Support", "IT Operations"];
const contacts = [
  {
    label: "Email",
    value: "layan.h.sabha@gmail.com",
    href: "mailto:layan.h.sabha@gmail.com",
  },
  { label: "Phone", value: "+962 79 869 1559", href: "tel:+962798691559" },
  {
    label: "GitHub",
    value: "github.com/Layansabha",
    href: "https://github.com/Layansabha",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/layan-sabha",
    href: "https://www.linkedin.com/in/layan-sabha/",
  },
];

export default function ContactPanel() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/10 bg-[#151515] px-4 py-20 text-[var(--paper-soft)] sm:px-6 lg:px-10 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.42 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold text-[#d66b6b]">Contact</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Let&apos;s build and support reliable systems.
            </h2>

            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm text-white/46">
              {channels.map((channel, index) => (
                <span key={channel} className="flex items-center gap-3">
                  {index > 0 ? <span className="text-[var(--red)]">/</span> : null}
                  {channel}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-end gap-5 border-t border-white/12 pt-6">
              <img
                src={redbullCan}
                alt="Red Bull can"
                className="h-20 w-10 object-contain"
              />
              <div>
                <p className="font-mono text-[10px] text-white/34">status</p>
                <p className="mt-2 max-w-md text-lg font-semibold leading-7 text-white/82">
                  Open to junior DevOps, application support, and IT operations roles.
                </p>
              </div>
            </div>
          </div>

          <div id="contact-info" className="scroll-mt-28 lg:border-l lg:border-white/12 lg:pl-10">
            <div className="border-t border-white/14">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group grid gap-2 border-b border-white/14 py-5 sm:grid-cols-[92px_1fr_auto] sm:items-center"
                >
                  <span className="font-mono text-[10px] text-white/34">
                    {contact.label}
                  </span>
                  <span className="break-all text-sm font-semibold text-white/82 transition-colors duration-200 group-hover:text-white">
                    {contact.value}
                  </span>
                  <span className="hidden text-[var(--red)] transition-transform duration-200 group-hover:translate-x-1 sm:block">
                    →
                  </span>
                </a>
              ))}
            </div>

            <a
              href={publicAsset("Layan-Sabha-CV.pdf")}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-md bg-[var(--red)] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#9f3030]"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
