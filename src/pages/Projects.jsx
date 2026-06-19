import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const categories = ["All", "Electronics", "Automotive", "Programming"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) =>
        Array.isArray(p.category) ? p.category.includes(active) : p.category === active
      );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-black text-slate-900">Projects</h1>
      <p className="mt-3 text-lg text-slate-600">Things I&apos;ve built with circuits, code, and curiosity.</p>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active === cat
                ? "bg-slate-900 text-white"
                : "border border-slate-300 text-slate-600 hover:border-slate-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
