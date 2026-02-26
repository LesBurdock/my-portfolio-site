import Container from "@/app/components/Container";

const items = [
  {
    number: "01",
    label: "FRONT END",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Typescript", "Next.js", "Astro"],
  },
  {
    number: "02",
    label: "TOOLS",
    skills: ["Git", "Figma", "headless CMS", "Netlify", "Auth0"],
  },
  {
    number: "03",
    label: "BACKEND",
    skills: ["Ruby on Rails", "PostgreSQL", "SQLite"],
  },
];

function Connector() {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="w-px h-[120px]" style={{ backgroundColor: "#D88C5A" }} />
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="#D88C5A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Heading */}
        <h2
          className="text-2xl font-bold leading-snug md:text-3xl"
          style={{ fontFamily: "var(--font-playfair)", color: "#000000" }}
        >
          The <em>technical toolkit</em> I&apos;ve built from my experiences and projects
        </h2>

        {/* Timeline */}
        <div className="mt-16 flex flex-col items-center md:mt-24">
          {items.map((item, i) => (
            <div key={item.number} className="flex flex-col items-center">
              {/* Outlined circle with number */}
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{ border: "1.5px solid #D88C5A" }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#D88C5A" }}
                >
                  {item.number}
                </span>
              </div>

              {/* Category label */}
              <p
                className="mt-6 text-xs font-medium tracking-widest uppercase"
                style={{ color: "#D88C5A" }}
              >
                {item.label}
              </p>

              {/* Skills */}
              <p
                className="mt-2 max-w-[320px] text-center text-sm"
                style={{ color: "#D88C5A" }}
              >
                {item.skills.join(", ")}
              </p>

              {/* Connector line + arrow — not after last item */}
              {i < items.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
