import React from "react"
import { Cta } from "@/containers"

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      { children }
      <Cta />
    </>
  )
}