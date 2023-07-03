import client from "./config";
import { groq } from 'next-sanity'

export interface Project {
  location: string;
  investor: string;
  categories: string[];
  images: string[];
  title: string;
  squareMeters: number;
}

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      squareMeters,
      title,
      investor,
      categories,
      location,
      "images": images[].asset->url
    }`
  )
}