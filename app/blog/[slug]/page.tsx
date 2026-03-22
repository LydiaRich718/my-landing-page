import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const builder = imageUrlBuilder(client);

const portableTextComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) return null;
      const url = builder.image(value).width(1200).auto("format").url();
      return (
        <img
          src={url}
          alt={value.alt || ""}
          style={{ borderRadius: 12, maxWidth: "100%", margin: "1.5em 0" }}
        />
      );
    },
  },
};

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} — Lydia Rich`, description: post.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <Link href="/" className="text-xl font-bold" style={{ background: "linear-gradient(to right, #a78bfa, #f472b6, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textDecoration: "none" }}>
          Lydia Rich
        </Link>
        <div className="flex gap-4 md:gap-8 text-xs md:text-sm">
          <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
          <Link href="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
        </div>
      </nav>

      {/* Post */}
      <article style={{ paddingTop: 140, paddingBottom: 96, paddingLeft: 32, paddingRight: 32, position: "relative" }}>
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500, background: "rgba(124,58,237,0.08)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          <Link href="/blog" style={{ fontSize: 14, color: "#a78bfa", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
            &larr; Back to Blog
          </Link>

          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            <span style={{ background: "linear-gradient(to bottom right, white, rgba(255,255,255,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {post.title}
            </span>
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 9999, background: "rgba(167,139,250,0.1)", color: "#a78bfa", fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="blog-prose">
            {post.body ? <PortableText value={post.body} components={portableTextComponents} /> : null}
          </div>
        </div>
      </article>
    </main>
  );
}
