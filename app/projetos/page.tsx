import { ArrowUpRight, Github } from "lucide-react";
import { PageTitle } from "@/components/page-title";
import { Typed } from "@/components/typed";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";

export const metadata = { title: "Projetos | Maria Pereira" };

export default function Projetos() {
  return (
    <div className="space-y-20">
      <section>
        <PageTitle>
          <Typed text="Projetos desenvolvidos" cursor={false} />
        </PageTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 border-t border-border pt-4 text-sm">
                {project.repo && (
                  <a href={project.repo} className="inline-flex items-center gap-1 hover:text-lilac">
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="inline-flex items-center gap-1 hover:text-lilac">
                    <ArrowUpRight size={16} /> Ver demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
