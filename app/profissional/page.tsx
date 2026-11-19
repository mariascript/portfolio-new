import { PageTitle } from "@/components/page-title";
import { Typed } from "@/components/typed";
import { jobs } from "@/lib/data";

export const metadata = { title: "Experiência Profissional | Maria Pereira" };

export default function Profissional() {
  return (
    <div>
      <PageTitle>
        <Typed text="Experiência profissional" cursor={false} />
      </PageTitle>
      <ol className="relative space-y-12 border-l border-border pl-8">
        {jobs.map((job) => (
          <li key={job.company} className="relative space-y-2">
            <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
            <h2 className="text-xl font-semibold">{job.company}</h2>
            <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
            <p className="text-lilac">{job.role}</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
