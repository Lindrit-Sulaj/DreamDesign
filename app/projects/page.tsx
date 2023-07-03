import { Metadata } from "next"
import Link from "next/link";

import { Navbar } from "@/components";
import { getAllProjects } from "@/sanity/utils"
import type { Project } from "@/sanity/utils";

export const metadata: Metadata = {
  title: 'Projects | Dream Design',
  description: 'View our amazing architectural projects'
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="projects">
      <section className="hero flex flex-col gap-2 justify-center h-[250px] md:h-[300px] lg:h-[350px] items-center">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-3 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">Projects</h1>
        <p className="md:text-lg text-neutral-300 mt-2 max-w-lg mx-auto text-center">Discover our amazing projects</p>
      </section>
      {
        projects.map(project => (
          <Project key={project.title} {...project} />
        ))
      }
    </main>
  )
}

function Project({ title, location, images, squareMeters, categories, investor }: Project) {
  return (
    <div>
      {title}
    </div>
  )
}