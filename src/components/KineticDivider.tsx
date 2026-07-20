export default function KineticDivider() {
  return (
    <div className="border-y border-black/10 bg-[#ebe7de] px-4 py-4 text-[var(--ink)] sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 font-mono text-[11px] font-semibold text-black/55">
        {["deploy", "automate", "support", "monitor", "troubleshoot", "secure"].map(
          (item) => (
            <span key={item} className="flex items-center gap-3">
              <span className="h-1 w-1 bg-[var(--red)]" />
              {item}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
