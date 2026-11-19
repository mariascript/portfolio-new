import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 md:flex-row md:justify-between">
        <div className="space-y-2 font-mono text-sm">
          <p className="text-foreground">{profile.name}</p>
          <p className="text-muted-foreground">{profile.role}</p>
          <a href={`mailto:${profile.email}`} className="block text-muted-foreground hover:text-lilac">
            {profile.email}
          </a>
        </div>
        <div className="space-y-3">
          <p className="font-mono text-sm text-foreground">Redes</p>
          <div className="flex gap-4 text-muted-foreground">
            <a href={profile.socials.github} aria-label="GitHub" className="hover:text-lilac">
              <Github size={20} />
            </a>
            <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-lilac">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-lilac">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <p className="pb-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} · Feito por Maria
      </p>
    </footer>
  );
}
