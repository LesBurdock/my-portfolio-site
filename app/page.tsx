import Hero from "@/app/components/Hero";
import Neighbourhoods from "@/app/components/Neighbourhoods";
import Landmarks from "@/app/components/Landmarks";
import Toolkit from "@/app/components/Toolkit";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Neighbourhoods />
      <Landmarks />
      <Toolkit />
      <Contact />
    </main>
  );
}
