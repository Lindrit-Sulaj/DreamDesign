"use client"
import React from "react";
import { Navbar } from "@/components";
import { Cta } from "@/containers";
import Content from './Content.mdx'
import Link from "next/link";

export default function AboutPage(): React.JSX.Element {
  return (
    <main className="aboutus">
      <section className="hero flex flex-col gap-2 justify-center h-[250px] md:h-[300px] lg:h-[400px] items-center">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-3 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">About Us</h1>
      </section>
      <div className="mdx max-w-screen-lg mx-auto py-4 md:py-8 px-6 md:px-8">
        <Content />
      </div>
      <Cta />
    </main>
  )
}