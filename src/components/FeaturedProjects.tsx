import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  detailContent,
  projects,
  type DetailKey,
} from "../data/portfolioContent";

export default function FeaturedProjects() {
  const [activeDetail, setActiveDetail] = useState<DetailKey | null>(null);

  useEffect(() => {
    if (!activeDetail) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDetail(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDetail]);

  const detail = activeDetail ? detailContent[activeDetail] : null;

  return (
    <section id="projects" className="scroll-mt-20 bg-[var(--paper)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-10 grid gap-4 border-b border-black/12 pb-7 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <p className="text-xs font-semibold text-[var(--red)]">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.035em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
              Featured Projects
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex min-h-[430px] flex-col rounded-[10px] border border-[#d8d4cc] bg-[#fbfaf6] p-6 text-[var(--ink)] shadow-[0_8px_24px_rgba(24,24,24,0.035)]"
            >
              <div className="flex items-start justify-between gap-3">
                <p
                  className="max-w-[80%] text-xs font-semibold leading-5 text-[var(--red)]"
                >
                  {project.category}
                </p>
                {project.status ? (
                  <span className="shrink-0 rounded border border-[var(--red)]/25 bg-[var(--red)]/[0.06] px-2.5 py-1 text-[9px] font-semibold text-[var(--red)]">
                    {project.status}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-7 text-3xl font-bold leading-[1.12] tracking-[-0.025em]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-[5px] border border-black/10 bg-[#f3f0e9] px-2.5 py-1.5 text-[10px] font-semibold text-black/58"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-black/10 pt-6">
                {project.actions.map((action) => {
                  const className = action.primary
                    ? "rounded-md border border-[var(--red)] bg-[var(--red)] px-3.5 py-2.5 text-[11px] font-semibold text-white transition-colors duration-200 hover:border-[#9f3030] hover:bg-[#9f3030]"
                    : "rounded-md border border-black/15 bg-transparent px-3.5 py-2.5 text-[11px] font-semibold text-black/72 transition-colors duration-200 hover:border-black/35 hover:text-black";

                  return action.href ? (
                    <a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {action.label}
                    </a>
                  ) : (
                    <button
                      key={action.label}
                      type="button"
                      onClick={() =>
                        action.detail && setActiveDetail(action.detail)
                      }
                      className={className}
                    >
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {detail ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] grid place-items-center bg-black/72 p-4"
            onPointerDown={(event) => {
              if (event.target === event.currentTarget) setActiveDetail(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="featured-detail-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[10px] border border-white/12 bg-[var(--paper-soft)] text-[var(--ink)] shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-[#181818] px-5 py-5 text-[var(--paper-soft)] sm:px-7">
                <div>
                  <p className="text-[11px] font-semibold text-[#d66b6b]">
                    {detail.eyebrow}
                  </p>
                  <h3
                    id="featured-detail-title"
                    className="mt-2 text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl"
                  >
                    {detail.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveDetail(null)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/16 bg-transparent text-sm font-semibold transition-colors duration-200 hover:bg-white/[0.08]"
                  aria-label="Close project details"
                >
                  X
                </button>
              </div>

              <div className="p-5 sm:p-7">
                <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {detail.intro}
                </p>
                <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  {detail.sections.map((section) => (
                    <div
                      key={section.title}
                      className="grid gap-2 py-5 sm:grid-cols-[150px_1fr] sm:gap-5"
                    >
                      <h4 className="text-sm font-semibold">{section.title}</h4>
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
