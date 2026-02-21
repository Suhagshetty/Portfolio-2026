import Hero from "@/components/Hero";
import MovingTools from "@/components/stacks/MovingTools";
import Navbar from "@/components/Navbar";
import WorkExperience from "@/components/work/WorkExperience";
import GitHubGraph from "@/components/GitHubGraph";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="whoami">
        <Hero />
        <MovingTools />
        <WorkExperience />
      </section>

      <section id="shiplog">
        <GitHubGraph />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}
