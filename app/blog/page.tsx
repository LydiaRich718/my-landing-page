import Link from "next/link";
import { getAllPosts } from "@/sanity/queries";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllPosts();

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

      {/* Header */}
      <section style={{ paddingTop: 140, paddingBottom: 40, paddingLeft: 32, paddingRight: 32, position: "relative" }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500, background: "rgba(124,58,237,0.1)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#a78bfa", fontWeight: 600, marginBottom: 16 }}>
            Blog
          </p>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            <span style={{ background: "linear-gradient(to bottom right, white, rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Thoughts &amp; Insights
            </span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 600 }}>
            Marketing, technology, insurance, and everything in between.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: "40px 32px 96px", maxWidth: 800, margin: "0 auto" }}>
        {posts.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,0.45)", textAlign: "center", padding: 64 }}>
            No posts yet. Check back soon!
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
                style={{
                  display: "block",
                  padding: 32,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  textDecoration: "none",
                }}
              >
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 8, lineHeight: 1.3 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 12 }}>
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 9999, background: "rgba(167,139,250,0.1)", color: "#a78bfa", fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
