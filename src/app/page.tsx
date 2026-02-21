import Hero from "@/components/Hero";
import MovingTools from "@/components/stacks/MovingTools";
import Navbar from "@/components/Navbar";
import WorkExperience from "@/components/work/WorkExperience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovingTools />
      <WorkExperience />
    </>
  );
}
