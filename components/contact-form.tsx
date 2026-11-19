"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));
    const subject = encodeURIComponent(`Contato pelo portfólio: ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" placeholder="Nome" required aria-label="Nome" />
      <Input name="email" type="email" placeholder="E-mail" required aria-label="E-mail" />
      <Textarea name="message" placeholder="Mensagem" required aria-label="Mensagem" />
      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" className="rounded-full">
          &gt; Enviar mensagem
        </Button>
        {sent && (
          <p role="status" className="font-mono text-xs text-lilac">
            Abrindo seu aplicativo de e-mail para enviar.
          </p>
        )}
      </div>
    </form>
  );
}
