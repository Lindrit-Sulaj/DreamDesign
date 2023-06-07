import { Navbar } from "@/components"
import { Hero, Stats, About, Services, Benefits, Projects, Faq } from "@/containers"

export default function Home() {
  return (
    <main>
      <Navbar background="transparent" text="white" />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Benefits />
      <Projects />
      <Faq />
    </main>
  )
}
