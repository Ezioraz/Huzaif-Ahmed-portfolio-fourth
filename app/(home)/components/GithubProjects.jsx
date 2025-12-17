"use client";

import React from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { FaGithub, FaSpinner, FaStar, FaCodeBranch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

const GITHUB_API_URL = `https://api.github.com/users/${config.social.github}/repos`;

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("GitHub API Error");
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function GithubProjects() {
  const { data, error, isLoading } = useSWR(GITHUB_API_URL, fetcher, {
    refreshInterval: 5 * 60 * 1000, // 5 mins
    revalidateOnFocus: false,
  });

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load GitHub projects (Rate limit or network issue)
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <FaSpinner className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  const projects = data
    .filter((repo) => !repo.fork && !repo.private)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 5); // limit 5 projects

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Title row */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">My GitHub Projects</h2>

          <Button asChild>
            <a
              href={`https://github.com/${config.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Github
            </a>
          </Button>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-white/10 rounded-xl p-5 hover:border-white/30 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>

              <p className="text-sm text-white/70 line-clamp-2">
                {project.description || "No description"}
              </p>

              <div className="flex items-center justify-between mt-4 text-white/60 text-sm">
                <span className="flex items-center gap-1">
                  <FaStar /> {project.stargazers_count}
                </span>

                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {project.forks_count}
                </span>

                {project.language && (
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-full">
                    {project.language}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
