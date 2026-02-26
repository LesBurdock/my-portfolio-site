"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/app/components/Container";

const projects = [
  {
    title:
      "Responsive landing page built with Tailwind CSS, clean layout and modern utility-first styling",
    description:
      "Focused on clean layout, adaptive design, and modern utility-first styling. Implemented responsive breakpoints and reusable utility patterns to ensure scalability and performance.",
    techStack: ["HTML", "CSS", "Tailwind CSS", "Responsive Design Principles"],
    image: "/images/space_screenshot.png",
    imageAlt: "Space travel landing page screenshot",
    href: "#",
  },
  {
    title: "Frontend UI implementation using Next.js and React",
    description:
      "Implemented a Frontend Mentor design with a focus on responsive layout, component structure, and precise CSS styling.",
    techStack: ["Next.js", "React", "CSS", "Responsive Design"],
    image: "/images/loop_screenshots.png",
    imageAlt: "Loop Studios website screenshot",
    href: "#",
  },
  {
    title:
      "Full-stack blog application with authentication, CRUD features, and PostgreSQL database integration.",
    description:
      "Developed a full-stack blog application featuring user authentication, CRUD functionality, and database integration.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Devise", "MVC"],
    image: "/images/blog_screenshot.png",
    imageAlt: "Blogr application screenshot",
    href: "#",
  },
];

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const bgColors = ["#F5F5F0", "#FFFFFF", "#F5F5F0"];

export default function Landmarks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
    setCurrent(index);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setCurrent(index);
  };

  const ProjectCard = ({ project, i }: { project: typeof projects[0]; i: number }) => (
    <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-28">
      {/* Screenshot */}
      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl aspect-video md:w-[38%]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-fill object-top"
        />
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col justify-between">
        <h3
          className="text-base md:text-2xl font-medium leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-inter)", color: "#000000" }}
        >
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed" style={{ color: "#9D9D9D" }}>
          {project.description}
        </p>

        <p className="mt-4 text-sm" style={{ color: "#9D9D9D" }}>
          Tech Stack: {project.techStack.join(" · ")}
        </p>

        <a
          href={project.href}
          className="mt-6 inline-block text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "#D88C5A" }}
        >
          View Project →
        </a>
      </div>
    </div>
  );

  return (
    <section id="work">
      {/* Section heading */}
      <div style={{ backgroundColor: "#F5F5F0" }}>
        <Container className="pt-20 pb-12 md:pt-24 md:pb-16">
          <h2
            className="text-2xl font-bold leading-snug md:text-3xl"
            style={{ fontFamily: "var(--font-playfair)", color: "#000000" }}
          >
            <em>Landmarks</em> that have defined my path from city planning to{" "}
            <em>web development.</em>
          </h2>
        </Container>
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden" style={{ backgroundColor: bgColors[current] }}>
        {/* Scrollable strip */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
          onScroll={handleScroll}
        >
          {projects.map((project, i) => (
            <div key={project.title} className="w-full shrink-0 snap-start">
              <Container className="py-16">
                <ProjectCard project={project} i={i} />
              </Container>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 py-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? "32px" : "10px",
                backgroundColor: i === current ? "#D88C5A" : "#C4C4C4",
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop stacked rows */}
      <div className="hidden md:block">
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{ backgroundColor: i % 2 === 0 ? "#F5F5F0" : "#FFFFFF" }}
          >
            <Container className="py-20">
              <ProjectCard project={project} i={i} />
            </Container>
          </div>
        ))}
      </div>
    </section>
  );
}
