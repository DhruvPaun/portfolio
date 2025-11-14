"use client";
import React from "react";
import { GlareCard } from "./ui/glare-card";
import data from "@/data/project2.json";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const projects = data.projects;

function Projects() {
  return (
    <div className="py-12 bg-black">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-5xl text-white font-sans tracking-wide font-extrabold">
          Projects
        </h2>
        <p className="mt-4 text-3xl leading-8 tracking-tight text-white sm:text-2xl max-w-3xl mx-auto">
          Here are some of the projects I’ve built to demonstrate my skills in
          web development and problem-solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between items-center text-center"
            >
              {/* Card */}
              <GlareCard className="flex flex-col items-center justify-between w-full max-w-md p-6">
                <div className="flex flex-col items-center text-center flex-grow">
                  <h3 className="text-2xl sm:text-xl text-white mt-4 mb-2 font-semibold font-mono">
                    {project.title}
                  </h3>
                  <p className="text-md text-neutral-400 flex-grow">
                    {project.description}
                  </p>
                </div>
              </GlareCard>

              {/* External Button (Below Card) */}
              <div className="mt-6">
                <Link href={project.link}>
                  <HoverBorderGradient>
                    View Project
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom View All Button */}
      <div className="mt-20 text-center flex justify-center items-center">
        <Link href={"/projects"}>
          <HoverBorderGradient>
            View All Projects
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
