import { ContactForm } from "@/components/contact-form";
import { Typed } from "@/components/typed";
import { profile } from "@/lib/data";

export const metadata = { title: "Contato | Maria Pereira" };

export default function Contato() {
  return (
    <div className="max-w-3xl space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          <Typed text="Tem um desafio interessante? Vamos tirar essa ideia do papel?" cursor={false} />
          <span aria-hidden="true" className="animate-pulse text-primary">_</span>
        </h1>
        <p className="text-xl text-lilac">Vamos conversar.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href={`mailto:${profile.email}`} className="hover:text-lilac">
            {profile.email}
          </a>
          <a href={profile.socials.github} className="hover:text-lilac">
            GitHub
          </a>
          <a href={profile.socials.linkedin} className="hover:text-lilac">
            LinkedIn
          </a>
          <a href={profile.socials.cv} className="hover:text-lilac">
            Currículo (PDF)
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
