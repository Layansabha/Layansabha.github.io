import { gameMilestones } from "./PortfolioRouteGame/milestones";

const experience = [10, 6, 4].map((id) => gameMilestones.find((item) => item.id === id)!);
const education = [1, 7, 12, 3].map((id) => gameMilestones.find((item) => item.id === id)!);

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-[var(--paper)] px-4 py-20 text-[var(--ink)] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold text-[var(--red)]">Professional experience</p>
        <h2 className="mt-3 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">Infrastructure, delivery, and security.</h2>
        <div className="mt-10 divide-y divide-black/12 border-y border-black/12">
          {experience.map((item) => (
            <article key={item.id} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <div>
                <p className="text-xs font-semibold text-[var(--red)]">{item.date}</p>
                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.organization}</p>
              </div>
              <div>
                <p className="text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{item.skills.map((skill) => <span key={skill} className="rounded border border-black/10 px-2 py-1 text-xs">{skill}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <h3 className="mt-12 text-2xl font-bold">Education, certification & coursework</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {education.map((item) => <div key={item.id} className="rounded-lg border border-black/12 p-5"><p className="text-xs font-semibold text-[var(--red)]">{item.date}</p><h4 className="mt-2 font-semibold">{item.title}</h4><p className="mt-2 text-sm text-[var(--muted)]">{item.organization}</p></div>)}
        </div>
        <p className="mt-6 text-sm text-[var(--muted)]">Amman, Jordan · Arabic (Native) · English (Professional Working Proficiency)</p>
      </div>
    </section>
  );
}
