import type { ImageMetadata } from "astro";
import ayakPreview from "../assets/projects/ayak-preview.png";
import cursusPreview from "../assets/projects/cursus.png";

export interface Project {
  name: string;
  summary: string;
  /** Short status tag. Omit when there is nothing confirmed to say. */
  status?: string;
  /** Omit for projects with no public page; the title is then plain text. */
  href?: string;
  host?: string;
  /** Hover preview. Projects without a screenshot get no preview card. */
  preview?: {
    image: ImageMetadata;
    blurb: string;
    stack: string[];
  };
}

export const projects: Project[] = [
  {
    name: "Cursus",
    summary: "Attendance and timetable tracker for COMSATS students.",
    status: "Launched",
    href: "https://getcursus.cc",
    host: "getcursus.cc",
    preview: {
      image: cursusPreview,
      blurb:
        "Keep your academic life in order. Timetable sync, attendance and grade tracking.",
      stack: ["TanStack Start", "React", "Workers", "D1"],
    },
  },
  {
    name: "Ayak",
    summary: "Ecommerce platform for a handmade jewelry brand.",
    status: "Client work",
    href: "https://ayak.abdulkareemakn.workers.dev",
    host: "workers.dev",
    preview: {
      image: ayakPreview,
      blurb:
        "Edge-native ecommerce for handmade jewelry. Storefront, checkout and order workflows.",
      stack: ["Workers", "D1", "R2"],
    },
  },
  {
    name: "Triage",
    summary:
      "AI that turns meeting notes, feedback and Sentry errors into Jira and GitHub tickets.",
  },
  {
    name: "MERN starter kit",
    summary: "A starter kit for the MERN stack.",
    status: "Shipped",
  },
];
