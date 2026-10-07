"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { contactInterests } from "@/lib/content";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialInterest = useMemo(() => {
    const value = searchParams.get("interest") || "RipplePoint";
    return (contactInterests as readonly string[]).includes(value) ? value : "Other";
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState(initialInterest);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-teal/30 bg-teal/10 p-8">
        <h2 className="font-display text-2xl text-off-white">Thank you.</h2>
        <p className="mt-3 text-muted">
          Your message has been captured locally for this preview. Wire this form to your preferred
          enquiry channel before production launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Organisation" name="organisation" />
        <Field label="Role" name="role" />
        <Field label="Email" name="email" type="email" required />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-muted">What are you interested in?</span>
        <select
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-sm border border-[rgba(232,236,244,0.16)] bg-navy-elevated px-4 py-3 text-mist outline-none focus:border-teal"
        >
          {contactInterests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-sm border border-[rgba(232,236,244,0.16)] bg-navy-elevated px-4 py-3 text-mist outline-none focus:border-teal"
          placeholder="Tell us what you are trying to understand."
        />
      </label>

      <Button type="submit">Start the Conversation</Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-[rgba(232,236,244,0.16)] bg-navy-elevated px-4 py-3 text-mist outline-none focus:border-teal"
      />
    </label>
  );
}
