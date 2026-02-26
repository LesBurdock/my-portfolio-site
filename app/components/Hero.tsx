import Image from "next/image";
import Container from "@/app/components/Container";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen"
      style={{ backgroundColor: "#F5F5F0" }}
    >
     <div
  className="absolute inset-0 opacity-40"
  style={{
    backgroundImage: "url('/images/vecteezy_grid-ornament-background_23370543.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "100px 100px" // adjust this to control tile size
  }}
/>

      {/* Ellipse blur — bleeds into next section */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-[-150px] h-[500px] w-[700px] rounded-full blur-[90px] opacity-75"
        style={{ backgroundColor: "#D0CECE" }}
      />

      {/* City skyline — smaller and very faded on mobile, full size on md+ */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[50%] opacity-20 md:w-[65%] md:h-full md:opacity-100">
        <Image
          src="/images/vecteezy_city-landscape_36629467.svg"
          alt=""
          fill
          className="object-contain object-bottom-right brightness-0 invert opacity-80"
          priority
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen items-center">
        <div className="w-full md:max-w-[70%]">
          <h1
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#000000",
            }}
          >
            Building <em>Websites</em> for People, Places, and Ideas.
          </h1>

          <p
            className="mb-10 text-base leading-relaxed md:max-w-[50%]"
            style={{ color: "#9D9D9D" }}
          >
            I&apos;m a front-end developer blending design, urban insight,
            and creativity to build impactful, responsive websites.
          </p>

          <a
            href="#work"
            className="inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D88C5A" }}
          >
            See my Work
          </a>
        </div>
      </Container>
    </section>
  );
}
