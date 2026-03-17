"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <span className="text-xl font-bold" style={{ background: "linear-gradient(to right, #a78bfa, #f472b6, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Lydia
        </span>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
          {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >{item}</a>
          ))}
        </div>
        <a
          href="/resume.pdf"
          download
          style={{ background: "linear-gradient(to right, #7c3aed, #ec4899)", padding: "8px 20px", borderRadius: "9999px", fontSize: "14px", fontWeight: 600, color: "white", textDecoration: "none" }}
        >
          Download Resume
        </a>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "96px 32px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, background: "rgba(124,58,237,0.15)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "35%", left: "20%", width: 400, height: 400, background: "rgba(236,72,153,0.1)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", width: "100%" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#a78bfa", fontWeight: 600, marginBottom: 24 }}>
            Professional Portfolio
          </p>
          <h1 style={{ fontSize: "clamp(64px, 12vw, 128px)", fontWeight: 900, lineHeight: 1, marginBottom: 32 }}>
            <span style={{ background: "linear-gradient(to bottom right, white, rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Hi, I&apos;m
            </span>
            <br />
            <span style={{ background: "linear-gradient(to right, #a78bfa, #f472b6, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Lydia.
            </span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(255,255,255,0.55)", maxWidth: 680, lineHeight: 1.7, marginBottom: 40 }}>
            Marketing strategist, social media manager, licensed insurance professional, and emerging web developer — I bring creative energy and business savvy to everything I do.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a
              href="/resume.pdf"
              download
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: "9999px", fontWeight: 600, background: "linear-gradient(to right, #7c3aed, #ec4899, #f97316)", color: "white", textDecoration: "none", fontSize: 15 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Resume
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
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f472b6", fontWeight: 600, marginBottom: 16 }}>About Me</p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
              Multi-skilled{" "}
              <span style={{ background: "linear-gradient(to right, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>professional</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
              I&apos;ve built experience across marketing, client services, business ownership, and healthcare — and now I&apos;m adding technology to the mix. I&apos;m passionate about combining creativity with strategy to solve real problems.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: 15 }}>
              With an Associate&apos;s Degree in Hospitality Management, a Health Insurance License, and hands-on experience running my own business, I understand what it takes to deliver results from the ground up.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { number: "5+", label: "Years in Marketing" },
              { number: "1", label: "Business Founded" },
              { number: "Licensed", label: "Insurance Professional" },
              { number: "A.A.S.", label: "Hospitality Mgmt" },
            ].map((stat) => (
              <div key={stat.label} style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: 24 }}>
                <div style={{ fontSize: 22, fontWeight: 900, background: "linear-gradient(to right, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 4 }}>{stat.number}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#fb923c", fontWeight: 600, marginBottom: 16 }}>Work History</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, marginBottom: 48 }}>Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                role: "Marketing & Social Media Manager",
                company: "Freelance / Professional",
                period: "Ongoing",
                description: "Manage brand presence, content calendars, and audience engagement across platforms including Instagram, Facebook, and TikTok. Drive growth through targeted campaigns, analytics, and community management.",
                tags: ["Social Media", "Content Strategy", "Brand Management", "Analytics"],
                accent: "#a78bfa",
              },
              {
                role: "Owner & Operator",
                company: "Professional Cleaning Business",
                period: "Previous",
                description: "Founded and operated a professional cleaning business — handling everything from client acquisition and scheduling to staff management and quality control. Developed strong operations, sales, and customer service skills.",
                tags: ["Business Ownership", "Operations", "Sales", "Client Relations"],
                accent: "#f472b6",
              },
              {
                role: "Licensed Health Insurance Professional",
                company: "Insurance Industry",
                period: "Licensed",
                description: "Hold a state health insurance license. Knowledgeable in policy offerings, client needs assessment, compliance, and insurance products.",
                tags: ["Health Insurance", "Compliance", "Client Consulting", "Licensed"],
                accent: "#fb923c",
              },
              {
                role: "Hospitality & Service Management",
                company: "Hospitality Industry",
                period: "A.A.S. Degree",
                description: "Completed an Associate of Applied Science in Hospitality Management. Background in guest services, event coordination, and team leadership in fast-paced service environments.",
                tags: ["Hospitality", "Guest Services", "Team Leadership", "Event Coordination"],
                accent: "#facc15",
              },
              {
                role: "Entry-Level Web Developer",
                company: "Personal Projects",
                period: "Emerging",
                description: "Building web applications using Next.js, React, Tailwind CSS, and AI-assisted development. Growing technical skills through hands-on project work — including this portfolio.",
                tags: ["Next.js", "React", "Tailwind CSS", "AI-Assisted Dev"],
                accent: "#34d399",
              },
            ].map((exp) => (
              <div key={exp.role} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: 32 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "baseline", marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: exp.accent, marginRight: 8 }}>{exp.period}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", margin: 0 }}>{exp.role}</h3>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginLeft: 4 }}>— {exp.company}</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 20, fontSize: 14 }}>{exp.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={{ padding: "4px 12px", fontSize: 12, fontWeight: 500, borderRadius: 9999, background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#a78bfa", fontWeight: 600, marginBottom: 16 }}>What I Bring</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, marginBottom: 48 }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {[
              {
                category: "Marketing & Social",
                accent: "#a78bfa",
                skills: ["Social Media Strategy", "Content Creation", "Brand Management", "Audience Growth", "Campaign Analytics", "Community Management"],
              },
              {
                category: "Business & Operations",
                accent: "#f472b6",
                skills: ["Business Ownership", "Client Relations", "Team Management", "Scheduling & Operations", "Sales", "Customer Service"],
              },
              {
                category: "Insurance & Compliance",
                accent: "#fb923c",
                skills: ["Health Insurance (Licensed)", "Policy Analysis", "Client Needs Assessment", "Regulatory Compliance"],
              },
              {
                category: "Hospitality",
                accent: "#facc15",
                skills: ["Guest Services", "Event Coordination", "Hospitality Management", "Team Leadership", "Problem-Solving"],
              },
              {
                category: "Technology",
                accent: "#34d399",
                skills: ["Next.js / React", "Tailwind CSS", "HTML & CSS", "AI-Assisted Dev (Claude)", "Microsoft Office", "Google Suite"],
              },
              {
                category: "Soft Skills",
                accent: "#67e8f9",
                skills: ["Communication", "Adaptability", "Creative Thinking", "Time Management", "Entrepreneurial Mindset", "Attention to Detail"],
              },
            ].map((group) => (
              <div key={group.category} style={{ borderRadius: 20, border: `1px solid ${group.accent}30`, background: "rgba(255,255,255,0.03)", padding: 24 }}>
                <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: group.accent, marginBottom: 16 }}>{group.category}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {group.skills.map((skill) => (
                    <li key={skill} style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 8 }}>
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

      {/* Projects */}
      <section id="projects" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f472b6", fontWeight: 600, marginBottom: 16 }}>Work Samples</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, marginBottom: 16 }}>Projects</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 48, maxWidth: 480, fontSize: 15 }}>A selection of projects and initiatives — from marketing campaigns to web development work.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {[
              {
                title: "This Portfolio",
                description: "Designed and built a full professional portfolio using Next.js, React, and Tailwind CSS with AI-assisted development.",
                tags: ["Next.js", "React", "Web Dev"],
                gradientFrom: "rgba(124,58,237,0.2)",
                gradientTo: "rgba(236,72,153,0.15)",
              },
              {
                title: "Social Media Campaigns",
                description: "Managed and grew brand accounts across Instagram, Facebook, and TikTok — increasing engagement through strategic content and analytics.",
                tags: ["Instagram", "TikTok", "Content", "Analytics"],
                gradientFrom: "rgba(236,72,153,0.2)",
                gradientTo: "rgba(249,115,22,0.15)",
              },
              {
                title: "Cleaning Business Launch",
                description: "Founded and scaled a professional cleaning business — including branding, client acquisition, operations, and team management.",
                tags: ["Entrepreneurship", "Operations", "Branding"],
                gradientFrom: "rgba(249,115,22,0.2)",
                gradientTo: "rgba(250,204,21,0.1)",
              },
              {
                title: "More Coming Soon",
                description: "Additional projects and work samples are being added. Reach out to learn more about what I&apos;ve worked on.",
                tags: ["In Progress"],
                gradientFrom: "rgba(124,58,237,0.08)",
                gradientTo: "rgba(103,232,249,0.08)",
              },
            ].map((project) => (
              <div key={project.title} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`, padding: 28 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: "white" }}>{project.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20, fontSize: 14 }}>{project.description}</p>
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

      {/* Contact */}
      <section id="contact" style={{ padding: "96px 32px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 32, border: "1px solid rgba(255,255,255,0.1)", background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.15), rgba(249,115,22,0.1))", padding: "clamp(48px, 8vw, 80px)", textAlign: "center" }}>
            <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f472b6", fontWeight: 600, marginBottom: 16 }}>Let&apos;s Work Together</p>
            <h2 style={{ fontSize: "clamp(32px, 6vw, 60px)", fontWeight: 900, marginBottom: 20 }}>Get In Touch</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.75, fontSize: 15 }}>
              Open to marketing roles, social media contracts, insurance opportunities, and web development projects. Let&apos;s connect.
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
              <a
                href="/resume.pdf"
                download
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: "9999px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", color: "white", textDecoration: "none", fontSize: 14 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "28px 32px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
        © {new Date().getFullYear()} Lydia · Built with Next.js
      </footer>
    </main>
  );
}
