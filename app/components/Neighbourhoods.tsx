import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";

const cards = [
  {
    title: "Design District",
    body: "Responsive web development focused on performance, accessibility, and component design. ",
    icon: "/images/customize-computer.svg",
  },
  {
    title: "Innovation Hub",
    body: "Storytelling and creativity: presenting ideas in engaging and visually compelling ways.",
    icon: "/images/puzzle-pieces.svg",
  },
  {
    title: "Green Park",
    body: "Urban and environmental insight informing design decisions with context and clarity.",
    icon: "/images/hand-holding-seeding.svg",
  },
];

export default function Neighbourhoods() {
  return (
    <section className="bg-white pt-24 pb-16 md:py-24">
      <Container>
        {/* Heading + pull quote */}
        <FadeIn>
          <h2
            className="text-2xl font-medium leading-snug w-full md:text-3xl md:w-[75%]"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text-primary)" }}
          >
            <em>My Neighbourhoods</em> explores the disciplines that shape my
            work — from urban planning and GIS to thoughtful, responsive web
            development
          </h2>

          <p className="mt-16 text-base text-center text-terracotta md:text-right md:mt-20">
            Think of my work as a small city, and like any good city, built from
            a few essential neighbourhoods.
          </p>
        </FadeIn>

        {/* Cards — staggered */}
        <div className="mt-16 flex flex-col gap-6 md:mt-24 md:flex-row md:justify-between">
          {cards.map((card, i) => (
            <FadeIn
              key={card.title}
              delay={i * 120}
              className="w-full max-w-[400px] mx-auto md:flex-1 md:mx-0"
            >
              <div
                className="rounded-2xl p-8 h-full"
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
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: "var(--color-terracotta)",
                      maskImage: `url('${card.icon}')`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mt-10 text-lg font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p
                  className="mt-3 text-sm leading-relaxed font-light"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {card.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
