"use client";

import { useActionState } from "react";
import Container from "@/app/components/Container";
import Image from "next/image";
import { sendMessage, type FormState } from "@/app/actions/sendMessage";

const initialState: FormState = { success: false, error: null };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendMessage, initialState);

  return (
    <footer className="bg-terracotta py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">

          {/* Left column */}
          <div className="flex flex-col">
            <h2
              className="text-4xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
            >
              Let&apos;s <em>build something</em> impactful together
            </h2>

            <p
              className="mt-8 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
            >
              Get in touch to explore how we could partner on your next website
              or project. I am looking for interesting work opportunities.
            </p>

            {/* Portrait photo */}
            <div className="relative mt-10 h-55 w-55 overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="Lesley Burdock"
                fill
                className="object-cover object-top scale-[1]"
              />
            </div>
          </div>

          {/* Right column — form */}
          <form action={formAction} className="flex flex-col">

            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="mt-3 bg-transparent pb-3 text-sm text-white placeholder:text-white/50 outline-none border-b border-white/60 focus:border-white transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              />
            </div>

            {/* Email */}
            <div className="mt-8 flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="mt-3 bg-transparent pb-3 text-sm text-white placeholder:text-white/50 outline-none border-b border-white/60 focus:border-white transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              />
            </div>

            {/* Message */}
            <div className="mt-8 flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-inter)", color: "#FFFFFF" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="mt-3 bg-transparent pb-3 text-sm text-white placeholder:text-white/50 outline-none border-b border-white/60 focus:border-white transition-colors resize-none"
                style={{ fontFamily: "var(--font-inter)" }}
              />
            </div>

            {/* Error message */}
            <div aria-live="polite" aria-atomic="true">
              {state.error && (
                <p
                  className="mt-6 text-sm text-white/80"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {state.error}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="mt-10">
              {state.success ? (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Message sent — I&apos;ll be in touch soon.
                </p>
              ) : (
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-medium uppercase tracking-widest text-white disabled:opacity-50 transition-opacity"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {isPending ? "Sending…" : "Send Message"}
                  {!isPending && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 2H12M12 2V12M12 2L2 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              )}
            </div>

          </form>
        </div>
      </Container>
    </footer>
  );
}
