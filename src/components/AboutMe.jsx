"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-gray-950 py-20 overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-gray-700/10 to-transparent blur-3xl opacity-60"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24 flex flex-col items-center text-center">
        {/* Text Content */}
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            I’m a <span className="font-semibold text-gray-100">BCA student</span> with a strong foundation in 
            <span className="text-gray-100"> full-stack web development</span> and computer science fundamentals. 
            My passion lies in building dynamic, scalable, and user-focused digital solutions that combine 
            technical precision with creative design.
          </p>

          <p className="text-gray-400 mb-6">
            Recently, I developed a <span className="text-gray-100 font-medium">URL Shortener</span> using 
            Node.js, Express, MongoDB, and EJS. It featured secure user authentication via cookies for session 
            handling, a dashboard to monitor click counts, and even a guest mode that offered limited credits 
            for users to shorten URLs without logging in.
          </p>

          <p className="text-gray-400 mb-6">
            I also built a <span className="text-gray-100 font-medium">Full-Stack Blog Application</span> using 
            React and Appwrite, integrating authentication, CRUD operations, and a rich text editor (TinyMCE). 
            The app leverages Redux Toolkit for state management, React Hook Form for validation, and React 
            Router for smooth navigation — ensuring a clean and responsive user experience.
          </p>

          <p className="text-gray-400 mb-6">
            My core technical expertise includes <span className="text-gray-100 font-medium">Python, Java, 
            SQL, JavaScript, HTML, and CSS</span>. On the web development side, I’m proficient in the 
            <span className="text-gray-100 font-medium"> MERN stack</span> (MongoDB, Express.js, React, Node.js) 
            and have experience using EJS for server-side rendering. I’m also comfortable working with tools 
            like <span className="text-gray-100 font-medium">Git, GitHub, MongoDB, Postman, and VS Code</span>.
          </p>

          <p className="text-gray-400 mb-10">
            Apart from my technical skills, I bring strong <span className="text-gray-100 font-medium">problem-solving abilities</span>, 
            clear <span className="text-gray-100 font-medium">communication</span>, and a collaborative mindset. 
            I thrive in environments that encourage creativity, innovation, and continuous learning — always aiming 
            to create seamless, meaningful user experiences through code.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:from-gray-200 hover:to-gray-400 text-gray-900 font-semibold tracking-wide shadow-lg transition"
          >
          <a href={`mailto:${"dhruvpaun28@gmail.com"}?subject=Work inquiry`}>
            Let’s Work Together
            </a>
          </motion.button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Box */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-white rounded-2xl shadow-2xl max-w-lg w-full p-8">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-xl"
                >
                  ✕
                </button>

                <h3 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Contact Me
                </h3>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-800/80 text-white px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-800/80 text-white px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-gray-400 outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-gray-800/80 text-white px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-gray-400 outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 hover:from-gray-100 hover:to-gray-300 text-gray-900 py-3 rounded-lg font-semibold shadow-md transition"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutSection;
