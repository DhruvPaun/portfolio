"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
/* react-icons imports */
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiPython, SiGit } from "react-icons/si";

/* ---------- Constants ---------- */
const NAME = "Dhruv Paun";
const EMAIL = "dhruvpaun28@gmail.com";
const GITHUB = "https://github.com/DhruvPaun";
const LINKEDIN = "https://www.linkedin.com/in/dhruv-paun/";

/* Skills data using react-icons */
const skills = [
  { id: "react", label: "React", Icon: SiReact },
  { id: "node", label: "Node.js", Icon: SiNodedotjs },
  { id: "mongodb", label: "MongoDB", Icon: SiMongodb },
  { id: "express", label: "Express", Icon: SiExpress },
  { id: "js", label: "JavaScript", Icon: SiJavascript },
  { id: "html", label: "HTML", Icon: SiHtml5 },
  { id: "css", label: "CSS", Icon: SiCss3 },
  { id: "python", label: "Python", Icon: SiPython },
  { id: "git", label: "Git", Icon: SiGit },
];

const projects = [
  {
    id: 1,
    title: "URL Shortener",
    subtitle: "Node.js • Express • MongoDB • EJS",
    short: "Session-based authentication, click analytics, guest credits, and a dashboard to manage links.",
    link: "https://github.com/DhruvPaun/URL-Shortner",
  },
  {
    id: 2,
    title: "React Blog",
    subtitle: "React • Appwrite • TinyMCE",
    short: "A blog app with TinyMCE editor, authentication, and CRUD using Appwrite & Redux Toolkit.",
    link: "https://your-demo-link.vercel.app",
  },
];

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: "easeOut" },
  }),
};

/* ---------- MAIN COMPONENT ---------- */
export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-black text-white py-16 px-6">
      <div className="max-w-6xl mt-15 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left */}
        <motion.div className="lg:col-span-8" initial="hidden" whileInView="show" viewport={{ once: true }}>
          {/* Hero */}
          <motion.div variants={fade} custom={1} className="mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-400">
                {NAME}
              </span>
              — I build scalable web apps and polished user experiences.
            </h1>

            <p className="mt-4 text-gray-300 max-w-3xl">
              I’m a full-stack developer and BCA student passionate about building fast,
              reliable, and elegant web solutions. I focus on the MERN stack and modern React ecosystems —
              delivering user-focused products that help businesses grow and attract customers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-900 font-semibold shadow"
              >
                Email
              </a>

              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/6 hover:bg-white/8 transition text-sm"
              >
                Quick Contact
              </button>

              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white/8 hover:bg-white/10">
                GitHub
              </a>

              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white/8 hover:bg-white/10">
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Value cards */}
          <motion.div variants={fade} custom={2} className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-gray-900/60 border border-white/6 rounded-lg">
              <div className="text-sm text-gray-300">What I deliver</div>
              <div className="font-semibold mt-1">Production-ready solutions</div>
            </div>
            <div className="p-4 bg-gray-900/60 border border-white/6 rounded-lg">
              <div className="text-sm text-gray-300">Focus</div>
              <div className="font-semibold mt-1">Fast performance & UX</div>
            </div>
            <div className="p-4 bg-gray-900/60 border border-white/6 rounded-lg">
              <div className="text-sm text-gray-300">Collaboration</div>
              <div className="font-semibold mt-1">Clear communication</div>
            </div>
          </motion.div>

          {/* Skills (react-icons) */}
          <motion.div variants={fade} custom={3} className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((s, i) => {
                const Icon = s.Icon;
                return (
                  <motion.div
                    key={s.id}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0, transition: { delay: i * 0.04 } },
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 border border-white/6"
                  >
                    <div className="w-8 h-8 flex items-center justify-center text-white text-opacity-90">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-medium">{s.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Projects compact */}
          <motion.div variants={fade} custom={4} className="mt-8">
            <h3 className="text-xl font-semibold mb-4"> Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((p, idx) => (
                <motion.article
                  key={p.id}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0, transition: { delay: idx * 0.06 } },
                  }}
                  className="p-4 rounded-lg bg-gray-900/60 border border-white/6"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{p.title}</h4>
                      <div className="text-xs text-gray-400 mt-1">{p.subtitle}</div>
                      <p className="text-sm text-gray-300 mt-2">{p.short}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 rounded-md text-xs bg-white/8 hover:bg-white/10"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right sticky side card */}
        <motion.aside className="lg:col-span-4 sticky top-24 self-start" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-5 rounded-xl bg-gradient-to-br from-gray-900/70 to-gray-800/60 border border-white/6">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white/6 w-12 h-12 flex items-center justify-center text-black font-bold">DP</div>
              <div>
                <div className="font-semibold text-lg">{NAME}</div>
                <div className="text-sm text-gray-400">Full-Stack Developer • BCA</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-300">
              <div>
                <span className="text-xs text-gray-400">Email</span>
                <div className="font-medium mt-1">{EMAIL}</div>
              </div>
              <div className="mt-3">
                <span className="text-xs text-gray-400">Availability</span>
                <div className="font-medium mt-1">Open for freelance & full-time</div>
              </div>
              <div className="mt-3">
                <span className="text-xs text-gray-400">Rate</span>
                <div className="font-medium mt-1">Depends on project scope — contact for quote</div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <a href={`mailto:${EMAIL}?subject=Work inquiry`} className="w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-900 font-semibold">
                Contact for Work
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="w-full text-center px-4 py-2 rounded-md border border-white/8 bg-white/6">
                View Code
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="w-full text-center px-4 py-2 rounded-md border border-white/8 bg-white/6">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gray-900/50 border border-white/6">
            <div className="text-xs text-gray-400">Why hire me</div>
            <div className="mt-2 text-sm text-gray-300">I transform ideas into polished, scalable digital products with clear communication and dependable delivery.</div>
          </div>
        </motion.aside>
      </div>

      {/* Contact modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 bg-black/70 z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
              <div className="w-full max-w-md p-6 rounded-xl bg-gray-900 border border-white/6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Quick Contact</h4>
                  <button onClick={() => setOpen(false)} className="text-gray-400">✕</button>
                </div>
                <p className="mt-3 text-gray-300">Email me at <a href={`mailto:${EMAIL}`} className="text-white underline">{EMAIL}</a> with your project details, and I’ll get back with a quote.</p>

                <div className="mt-4">
                  <a href={`mailto:${EMAIL}?subject=Freelance%20Inquiry&body=Hi%20Dhruv,%0A%0AI%20have%20a%20project%20about...`} className="inline-block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-900 font-semibold">
                    Email with project details
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
