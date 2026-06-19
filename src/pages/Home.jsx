import { Link } from "react-router-dom";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const latestProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero - Minimal Profile */}
      <section className="relative overflow-hidden px-6 py-12 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.08),_transparent_18%)]" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Lowie Hojas
              </h1>
              <p className="mt-1 text-lg font-medium text-cyan-600">
                Electronics Engineer & Creative Builder
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Contact Me
              </Link>
              <Link
                to="/about"
                className="rounded-2xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="relative px-6 pb-16 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Latest Projects</h2>
            <Link
              to="/projects"
              className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
