import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import redbullCan from "../assets/redbull.png";

const fortunes = [
  "Ship it, and leave a rollback path.",
  "Logs first. Assumptions later.",
  "Automate the repeatable. Document the critical.",
  "A reliable pipeline needs clear boundaries.",
];

const upgrades = [
  { name: "+focus", cost: 150 },
  { name: "+debug luck", cost: 250 },
  { name: "+deploy speed", cost: 350 },
  { name: "+no meeting shield", cost: 500 },
];

export default function StudioBoard() {
  const [cans, setCans] = useState(100);
  const [fortuneIndex, setFortuneIndex] = useState(0);
  const filled = Math.ceil(cans / 50);
  const complete = cans >= 500;

  const machineLine = useMemo(() => {
    if (complete)
      return "The machine is fully fueled and ready for the next build.";
    if (cans >= 350)
      return "Momentum is building. The system is starting to feel reliable.";
    if (cans >= 200) return "The pipeline is shaping up and responding well.";
    return "Feed the machine and let the workflow take shape.";
  }, [cans, complete]);

  const feed = () => {
    setCans((current) => (current >= 500 ? 50 : current + 50));
    setFortuneIndex((index) => (index + 1) % fortunes.length);
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[var(--paper)] px-4 py-20 text-[var(--ink)] sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
          className="mb-10 border-b border-black/12 pb-7"
        >
          <p className="text-xs font-semibold text-[var(--red)]">How I Work</p>
          <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Operations, with personality.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-0">
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="lg:border-r lg:border-black/12 lg:pr-12"
          >
            <p className="font-mono text-[11px] font-semibold text-[var(--red)]">
              practical operations
            </p>
            <h3 className="mt-5 max-w-lg text-4xl font-bold leading-[1.08] tracking-[-0.035em]">
              Practical systems work, with a rollback path.
            </h3>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--muted)]">
              I am a cybersecurity graduate currently training with Azm Digital&apos;s
              Infrastructure team in Amman since July 2026. During my training, I
              configure Windows Server, Active Directory, DNS, DHCP, and IIS, and
              troubleshoot network connectivity. My projects bring together CI/CD,
              containers, security checks, infrastructure automation, and
              observability.
            </p>
            <p className="mt-5 max-w-lg border-l-2 border-[var(--red)] pl-4 text-sm font-semibold leading-7 text-black/68">
              {machineLine}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.04 }}
            className="rounded-[12px] border border-black/12 bg-[#ebe7de] p-5 sm:p-7 lg:ml-12"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/12 pb-5">
              <div>
                <p className="text-xs font-semibold text-[var(--red)]">
                  Personal easter egg
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em]">
                  Red Bull build machine
                </h3>
              </div>
              <div className="font-mono text-sm font-semibold text-black/62">
                {cans}/500
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] font-semibold text-black/42">
                chamber
              </span>
              <span className="text-xs font-semibold text-[var(--red)]">
                {filled}/10
              </span>
            </div>

            <div className="mt-3 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }, (_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    opacity: index < filled ? 1 : 0.18,
                    y: index === filled - 1 ? [0, -5, 0] : 0,
                    rotate: index === filled - 1 ? [0, -2, 2, 0] : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="grid h-20 place-items-center rounded-md border border-black/10 bg-[var(--paper-soft)]"
                >
                  <img
                    src={redbullCan}
                    alt=""
                    className="h-14 w-9 object-contain"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              key={fortuneIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24 }}
              className="mt-4 rounded-md border border-white/10 bg-[#181818] p-4 text-[var(--paper-soft)]"
            >
              <p className="font-mono text-[10px] text-white/38">receipt</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/76">
                {fortunes[fortuneIndex]}
              </p>
            </motion.div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {upgrades.map((upgrade) => {
                const unlocked = cans >= upgrade.cost;

                return (
                  <motion.div
                    key={upgrade.name}
                    animate={{ opacity: unlocked ? 1 : 0.38 }}
                    transition={{ duration: 0.22 }}
                    className={`rounded-md border px-3 py-2 text-xs font-semibold ${
                      unlocked
                        ? "border-[var(--red)] bg-[var(--red)] text-white"
                        : "border-black/10 bg-[var(--paper-soft)] text-black/45"
                    }`}
                  >
                    {upgrade.name}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-black/12 pt-5">
              <button
                type="button"
                onClick={feed}
                className="rounded-md bg-[var(--red)] px-5 py-3 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#9f3030]"
              >
                {complete ? "reset machine" : "insert +50"}
              </button>
              <p className="text-xs leading-5 text-black/45">
                Fuel the workflow. Unlock the upgrades.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
