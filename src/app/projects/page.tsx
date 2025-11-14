import React from "react";
import data from "@/data/projects.json";

type Project = {
  id: number;
  title: string;
  isFeatured?: boolean;
  link?: string;
  technology?: string[];
  description?: string;
};

export default function ProjectsPage() {
  const projects: Project[] = (data as any).projects ?? [];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="container mx-auto max-w-5xl mt-15">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are the complete project details — including their
            technologies and descriptions.
          </p>
        </header>

        {/* Project List */}
        <section className="space-y-10">
          {projects.length === 0 ? (
            <p className="text-gray-400 text-center">No projects found.</p>
          ) : (
            projects.map((project) => (
              <article
                key={project.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >
                {/* Title & Featured Tag */}
                <div className="flex items-center justify-between flex-wrap mb-4">
                  <h2 className="text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  {project.isFeatured && (
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/30">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technology && project.technology.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technology.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-100 capitalize"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-900 font-semibold shadow hover:scale-[1.02] transition"
                  >
                    View Project
                  </a>
                )}
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
