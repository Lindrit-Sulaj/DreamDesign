import { Navbar } from "@/components"
import { Hero, Stats } from "@/containers"

export default function Home() {
  return (
    <main>
      <Navbar background="transparent" text="white" />
      <Hero />
      <Stats />
    </main>
  )
}
