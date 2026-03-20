import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Lydia Rich",
  description: "Thoughts on marketing, technology, insurance, and entrepreneurship.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
