export function PageTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-12 space-y-3">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        {children}
        <span aria-hidden="true" className="animate-pulse text-primary">_</span>
      </h1>
      {subtitle && <p className="max-w-xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
