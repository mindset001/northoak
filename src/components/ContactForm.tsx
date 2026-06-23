"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/content";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${company.emails[0]}?subject=${encodeURIComponent(
      subject || "Website enquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-ink-200">
          Name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-50 outline-none transition-colors focus:border-azure-400"
            placeholder="Your full name"
          />
        </label>
        <label className="text-sm text-ink-200">
          Email
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-50 outline-none transition-colors focus:border-azure-400"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="text-sm text-ink-200">
        Subject
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-50 outline-none transition-colors focus:border-azure-400"
          placeholder="What's this about?"
        />
      </label>
      <label className="text-sm text-ink-200">
        Message
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-50 outline-none transition-colors focus:border-azure-400"
          placeholder="Tell us about your project..."
        />
      </label>
      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-azure-500 to-azure-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-900/40 ring-1 ring-white/10 transition-transform hover:scale-[1.02]"
      >
        Send Message
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
