import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitFork, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typed } from "@/components/typed";
import { jobs, profile, stacks } from "@/lib/data";
import { getGithubProfile } from "@/lib/github";

export default async function Home() {
  const gh = await getGithubProfile();

  return (
    <div className="space-y-28">
      <section className="space-y-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end">
          <div className="relative shrink-0">
            <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-primary/40 blur-3xl" />
            <Image
              src="/avatar.png"
              alt={profile.name}
              width={240}
              height={240}
              priority
              className="h-60 w-60 rounded-full border border-primary/50 object-cover"
            />
            <p className="absolute -top-2 left-full ml-2 hidden whitespace-nowrap font-mono text-sm md:block">
              Olá! Eu sou {profile.name}
            </p>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Construo interfaces
              <br />
              do design ao{" "}
              <span className="text-primary">código</span>
            </h1>
            <p className="text-sm text-muted-foreground">Uma boa interface começa pelo cuidado.</p>
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-3xl font-bold tracking-tight md:text-4xl">
            <Typed text={` ${profile.role}.`} />
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/projetos">Ver projetos</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.socials.cv}>Baixar currículo</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Experiência</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {jobs.map((job) => (
            <Link key={job.company} href="/profissional">
              <Card className="flex h-full flex-col gap-3 bg-gradient-to-br from-primary/20 to-card">
                <span className="font-mono text-xs text-lilac">{job.period}</span>
                <h3 className="font-semibold">{job.company}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{job.role}</p>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-primary">
                  Saiba mais <ArrowUpRight size={14} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">
          Minhas <span className="text-primary">skills</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {Array.from(new Set(stacks.flatMap((s) => s.items))).map((item) => (
            <span key={item} className="rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-lilac">
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
