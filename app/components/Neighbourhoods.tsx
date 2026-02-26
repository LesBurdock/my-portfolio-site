import Container from "@/app/components/Container";

const cards = [
  {
    title: "Design District",
    body: "Responsive web development focused on performance, accessibility, and component design. ",
  },
  {
    title: "Innovation Hub",
    body: "Storytelling and creativity: presenting ideas in engaging and visually compelling ways.",
  },
  {
    title: "Green Park",
    body: "Urban & Urban and environmental insight informing design decisions with context and clarity.",
  },
];

function ChevronDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6L8 11L13 6"
        stroke="#D88C5A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Neighbourhoods() {
  return (
    <section className="bg-white pt-24 pb-16 md:py-24">
      <Container>
        {/* Heading */}
        <h2
          className="text-2xl font-bold leading-snug w-full md:text-3xl md:w-[75%]"
          style={{ fontFamily: "var(--font-playfair)", color: "#000000" }}
        >
          <em>My Neighbourhoods</em> explores the disciplines that shape my
          work — from urban planning and GIS to thoughtful, responsive web
          development
        </h2>

        {/* Pull quote */}
        <p
          className="mt-16 text-base md:text-right md:mt-20"
          style={{ color: "#D88C5A" }}
        >
          Think of my work as a small city, and like any good city, built from
          a few essential neighbourhoods.
        </p>

        {/* Cards */}
        <div className="mt-16 flex flex-col gap-6 md:mt-24 md:flex-row md:justify-between">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-8 w-full max-w-[400px] mx-auto md:flex-1 md:mx-0"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E8E8",
              }}
            >
              {/* Icon circle */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: "#E8E8E8" }}
              >
                <ChevronDown />
              </div>

              {/* Title */}
              <h3
                className="mt-10 text-lg font-bold"
                style={{ color: "#000000" }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#9D9D9D" }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
