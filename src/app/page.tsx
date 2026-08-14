import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { TechStack } from "@/components/sections/tech-stack";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Capabilities />
      <TechStack />
      <CurrentlyBuilding />
      <Contact />
    </>
  );
}
