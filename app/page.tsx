import { Navbar } from "@/components"
import { Hero, Stats, About } from "@/containers"

export default function Home() {
  return (
    <main>
      <Navbar background="transparent" text="white" />
      <Hero />
      <Stats />
      <About />
    </main>
  )
}
