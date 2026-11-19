import { Award } from "lucide-react";
import { PageTitle } from "@/components/page-title";
import { Typed } from "@/components/typed";
import { Card } from "@/components/ui/card";
import { appTech, certificates, education, profile, stacks } from "@/lib/data";

export const metadata = { title: "Sobre | Maria Pereira" };

export default function Sobre() {
  return (
    <div className="space-y-20">
      <section>
        <PageTitle>
          <Typed text="Sobre" cursor={false} />
        </PageTitle>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Minhas stacks</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {stacks.map((stack) => (
            <Card key={stack.group} className="space-y-3">
              <h3 className="font-semibold text-lilac">{stack.group}</h3>
              <p className="text-sm text-muted-foreground">{stack.items.join(", ")}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Formação e certificados</h2>
        <Card className="space-y-2">
          <span className="font-mono text-xs text-lilac">{education.period}</span>
          <h3 className="text-xl font-semibold">{education.course}</h3>
          <p className="text-muted-foreground">{education.school}</p>
        </Card>
        <div className="grid gap-5 md:grid-cols-2">
          {certificates.map((cert) => (
            <Card key={cert.title} className="flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Award size={20} />
              </span>
              <div>
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="font-mono text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Tecnologias deste site</h2>
          <p className="text-muted-foreground">Tudo o que foi usado para desenvolver este portfólio.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {appTech.map((tech) => (
            <Card key={tech.name} className="space-y-1">
              <h3 className="font-mono text-sm text-lilac">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.use}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
