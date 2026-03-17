"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <span className="text-xl font-bold" style={{ background: "linear-gradient(to right, #a78bfa, #f472b6, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Lydia Rich
        </span>
        <div className="hidden md:flex gap-8 text-sm">
          {["About", "Work", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >{item}</a>
          ))}
        </div>
        <a
          href="#contact"
          style={{ background: "linear-gradient(to right, #7c3aed, #ec4899)", padding: "8px 20px", borderRadius: "9999px", fontSize: "14px", fontWeight: 600, color: "white", textDecoration: "none" }}
        >
          Let&apos;s Connect
        </a>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "96px 32px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, background: "rgba(124,58,237,0.15)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "35%", left: "20%", width: 400, height: 400, background: "rgba(236,72,153,0.1)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", width: "100%" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#a78bfa", fontWeight: 600, marginBottom: 24 }}>
            Entrepreneur · Creative Operator · Licensed Insurance Professional · AI-Assisted Web Builder
          </p>
          <h1 style={{ fontSize: "clamp(56px, 10vw, 112px)", fontWeight: 900, lineHeight: 1, marginBottom: 32 }}>
            <span style={{ background: "linear-gradient(to bottom right, white, rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Hi, I&apos;m
            </span>
            <br />
            <span style={{ background: "linear-gradient(to right, #a78bfa, #f472b6, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Lydia.
            </span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,0.55)", maxWidth: 620, lineHeight: 1.8, marginBottom: 40 }}>
            I build businesses, creative projects, and websites using modern tools and a lot of figuring-it-out-as-I-go energy. From running a cleaning company on the Gulf Coast to building AI-assisted landing pages — I make things happen.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a
              href="#projects"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: "9999px", fontWeight: 600, background: "linear-gradient(to right, #7c3aed, #ec4899, #f97316)", color: "white", textDecoration: "none", fontSize: 15 }}
            >
              See My Work
            </a>
            <a
              href="#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: "9999px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", color: "white", textDecoration: "none", fontSize: 15 }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f472b6", fontWeight: 600, marginBottom: 16 }}>About Me</p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
              Professional{" "}
              <span style={{ background: "linear-gradient(to right, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Background</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 18, fontSize: 15 }}>
              My career began in hospitality. I earned an Associate&apos;s degree in Restaurant and Hospitality Management, which gave me a strong foundation in customer service, team leadership, and operations. I went on to hold management roles at Starbucks and worked in reservations at The Ritz-Carlton.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 18, fontSize: 15 }}>
              From there I began building independently. I launched an Etsy shop where I designed and sold merchandise, created custom apparel for community fundraising events, and founded Gulf Coast Polished Pros — a cleaning business I launched and operated on my own, managing everything from client acquisition and scheduling to pricing and day-to-day operations.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 18, fontSize: 15 }}>
              More recently, I earned my health insurance broker license, supported startup marketing and operations through Zuyzo, and began building websites using modern AI-assisted development tools and platforms.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontSize: 15 }}>
              I am based in the Lehigh Valley, Pennsylvania, where I continue building digital projects and working with entrepreneurs and small businesses.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { number: "2", label: "Businesses Founded" },
              { number: "A.A.S.", label: "Hospitality Management" },
              { number: "Licensed", label: "Insurance Broker" },
              { number: "Web &", label: "Digital Projects" },
            ].map((stat) => (
              <div key={stat.label} style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: 24 }}>
                <div style={{ fontSize: 22, fontWeight: 900, background: "linear-gradient(to right, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>{stat.number}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Work On */}
      <section id="work" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#fb923c", fontWeight: 600, marginBottom: 16 }}>Areas</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, marginBottom: 16 }}>What I Work On</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 56, maxWidth: 520, fontSize: 15, lineHeight: 1.75 }}>
            I don&apos;t fit neatly into one box — and I&apos;ve stopped trying to. Here&apos;s where I spend my time.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              {
                icon: "🚀",
                title: "Entrepreneurship",
                accent: "#a78bfa",
                body: "Running and launching businesses from the ground up. I&apos;ve done the pricing spreadsheets, the client calls, the hiring, the branding — all of it. I know what it takes to get something off the ground and keep it going.",
              },
              {
                icon: "🎨",
                title: "Creative Work",
                accent: "#f472b6",
                body: "Branding, merchandise design, social media content, and digital graphics. I&apos;ve designed shirts and hats for community fundraisers, an independent book launch, and my own businesses.",
              },
              {
                icon: "💻",
                title: "Technology",
                accent: "#34d399",
                body: "Building websites and digital projects using AI tools and modern development platforms like Next.js, VS Code, and Vercel. I pair tools like Claude with real coding workflows to create things that actually ship.",
              },
              {
                icon: "🏥",
                title: "Insurance",
                accent: "#fb923c",
                body: "Licensed health insurance broker. I help clients understand their coverage options and navigate a system that&apos;s genuinely confusing. Clear explanations, no pressure.",
              },
            ].map((area) => (
              <div key={area.title} style={{ borderRadius: 20, border: `1px solid ${area.accent}25`, background: "rgba(255,255,255,0.03)", padding: 32 }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{area.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: area.accent }}>{area.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: 14 }}
                  dangerouslySetInnerHTML={{ __html: area.body.replace(/&apos;/g, "'") }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f472b6", fontWeight: 600, marginBottom: 16 }}>Featured Work</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, marginBottom: 16 }}>Projects</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 56, maxWidth: 520, fontSize: 15, lineHeight: 1.75 }}>
            Things I&apos;ve built, launched, or shipped — across business, design, and tech.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                title: "LydiaRich.com",
                label: "Web Development",
                description: "This portfolio site. Designed and built by me using Next.js, React, and AI-assisted development tools. It&apos;s a working example of the kind of websites I can build for clients — modern, fast, and deployed on professional infrastructure.",
                tags: ["Next.js", "React", "Vercel", "AI-Assisted"],
                gradientFrom: "rgba(124,58,237,0.2)",
                gradientTo: "rgba(236,72,153,0.15)",
                accent: "#a78bfa",
              },
              {
                title: "SnapPLC Landing Page",
                label: "Startup Marketing",
                description: "A futuristic AI product landing page built as part of a startup marketing experiment. Designed to look and feel like a real industrial AI platform — complete with animated diagnostics, fake module detection, and engineer humor hidden in plain sight.",
                tags: ["Next.js", "Product Design", "Marketing", "Humor"],
                gradientFrom: "rgba(27,111,228,0.2)",
                gradientTo: "rgba(13,79,168,0.15)",
                accent: "#60a5fa",
              },
              {
                title: "Gulf Coast Polished Pros",
                label: "Entrepreneurship",
                description: "Founded and ran a professional cleaning business on the Gulf Coast. Built from zero — I handled the branding, pricing, client acquisition, scheduling, hiring, and day-to-day operations. Real business, real clients, real lessons.",
                tags: ["Business Launch", "Operations", "Branding", "Sales"],
                gradientFrom: "rgba(249,115,22,0.2)",
                gradientTo: "rgba(250,204,21,0.1)",
                accent: "#fb923c",
              },
              {
                title: "Custom Merchandise Design",
                label: "Creative Work",
                description: "Designed shirts, hats, and branded merchandise for community fundraisers and an independent book launch. From concept to print-ready files — handling artwork, layout, and vendor coordination.",
                tags: ["Canva", "Merchandise", "Fundraising", "Branding"],
                gradientFrom: "rgba(236,72,153,0.2)",
                gradientTo: "rgba(167,139,250,0.1)",
                accent: "#f472b6",
              },
            ].map((project) => (
              <div key={project.title} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`, padding: 28, display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: project.accent }}>{project.label}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "white" }}>{project.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 24, fontSize: 14, flex: 1 }}
                  dangerouslySetInnerHTML={{ __html: project.description.replace(/&apos;/g, "'") }}
                />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ padding: "4px 12px", fontSize: 12, fontWeight: 500, borderRadius: 9999, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#a78bfa", fontWeight: 600, marginBottom: 16 }}>Tools & Strengths</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, marginBottom: 56 }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {[
              {
                category: "Creative",
                accent: "#f472b6",
                skills: ["Canva", "Merchandise & Apparel Design", "Branding", "Social Media Content", "Graphic Layout", "Print-Ready File Prep"],
              },
              {
                category: "Technology",
                accent: "#34d399",
                skills: ["AI Tools (Claude, ChatGPT)", "VS Code", "Next.js & React", "Website Development", "Domain & Hosting Setup", "Git & GitHub", "Vercel Deployment"],
              },
              {
                category: "Business Operations",
                accent: "#fb923c",
                skills: ["Client Communication", "Entrepreneurship", "Invoicing & Billing", "Zoho Books", "Scheduling & Operations", "Google Drive & Docs", "Excel & Spreadsheets"],
              },
            ].map((group) => (
              <div key={group.category} style={{ borderRadius: 20, border: `1px solid ${group.accent}30`, background: "rgba(255,255,255,0.03)", padding: 24 }}>
                <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: group.accent, marginBottom: 20 }}>{group.category}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {group.skills.map((skill) => (
                    <li key={skill} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: group.accent, opacity: 0.7, flexShrink: 0 }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 32, border: "1px solid rgba(255,255,255,0.1)", background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.15), rgba(249,115,22,0.1))", padding: "clamp(48px, 8vw, 80px)", textAlign: "center" }}>
            <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f472b6", fontWeight: 600, marginBottom: 16 }}>Let&apos;s Work Together</p>
            <h2 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 900, marginBottom: 20 }}>Got a project?<br />Let&apos;s talk.</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.85, fontSize: 15 }}>
              Whether you need a website built, a brand put together, help with insurance, or just want to collaborate on something — I&apos;m open to it. Reach out and let&apos;s figure out what we can make.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <a
                href="mailto:liddy1076@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: "9999px", fontWeight: 600, background: "linear-gradient(to right, #7c3aed, #ec4899, #f97316)", color: "white", textDecoration: "none", fontSize: 14 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Send an Email
              </a>
              <a
                href="http://linkedin.com/in/lydia-nicole-rich-66767057"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: "9999px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", color: "white", textDecoration: "none", fontSize: 14 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "28px 32px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
        © {new Date().getFullYear()} Lydia Rich · Built with Next.js + AI tools
      </footer>
    </main>
  );
}
