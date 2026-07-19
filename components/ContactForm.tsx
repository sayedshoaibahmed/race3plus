"use client";

import { useState } from "react";

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function ContactForm() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent]       = useState(false);

  const isValid = name.trim() && email.trim() && message.trim();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    const subject = encodeURIComponent(`Message from ${name} via Race3+ website`);
    const body    = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:race3plus@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Contact Race3+"
    >
      {/* Name */}
      <div className="form-field">
        <label htmlFor="contact-name" className="form-label">
          Your Name <span style={{ color: "var(--color-brand-accent)" }}>*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          className="form-input"
          placeholder="e.g. Arjun Kumar"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email */}
      <div className="form-field">
        <label htmlFor="contact-email" className="form-label">
          Email Address <span style={{ color: "var(--color-brand-accent)" }}>*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          className="form-input"
          placeholder="you@example.com"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Message */}
      <div className="form-field">
        <label htmlFor="contact-message" className="form-label">
          Message <span style={{ color: "var(--color-brand-accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="form-textarea"
          placeholder="Tell us how we can help you…"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit"
        className="btn-send"
        disabled={!isValid}
        aria-label="Send message via email"
      >
        <SendIcon />
        Send Message
      </button>

      {/* Confirmation flash */}
      {sent && (
        <div
          role="alert"
          className="flex items-center gap-2 text-sm px-4 py-3 rounded"
          style={{
            background: "#6DC13515",
            border: "1px solid #6DC13540",
            color: "var(--color-brand-accent)",
          }}
        >
          <CheckCircleIcon />
          <span>
            Your email client should open with a pre-filled message. If it didn&apos;t,
            email us directly at{" "}
            <a
              href="mailto:race3plus@gmail.com"
              className="underline font-semibold"
            >
              race3plus@gmail.com
            </a>
          </span>
        </div>
      )}

      <p className="text-xs" style={{ color: "#6B7280", textAlign: "center" }}>
        * Required fields. Your message opens in your default email app.
      </p>
    </form>
  );
}
