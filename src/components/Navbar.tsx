import { motion } from "framer-motion";
import { publicAsset } from "../utils/publicAsset";
import logo from "../assets/logoo.png";

const links = [
  { label: "Journey", href: "#route-game" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#technical-focus" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-6 lg:px-10"
    >
      <nav className="mx-auto flex max-w-[1380px] items-center justify-between gap-4 rounded-[10px] border border-white/10 bg-[#171717] px-3 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.18)] sm:px-4">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-md bg-[var(--paper)]">
            <img
              src={logo}
              alt="Layan logo"
              className="h-full w-full object-contain p-1"
            />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-bold tracking-[0.04em]">
              LAYAN
            </span>
            <span className="mt-1 block text-[9px] text-white/45">
              DevOps &amp; IT Operations
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-[13px] font-medium text-white/62 xl:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-sm py-2 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={publicAsset("Layan-Sabha-CV.pdf")}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/16 px-3 py-2 text-xs font-semibold text-white/82 transition-colors duration-200 hover:border-white/35 hover:text-white sm:px-4"
          >
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
          </a>
          <a
            href="#contact-info"
            className="rounded-md border border-[var(--red)] bg-[var(--red)] px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:border-[#9f3030] hover:bg-[#9f3030] sm:px-4"
          >
            Connect
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
