import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

const categoryColor = {
  Electronics: "bg-cyan-100 text-cyan-700",
  Automotive: "bg-violet-100 text-violet-700",
  Programming: "bg-emerald-100 text-emerald-700",
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-block text-cyan-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/projects" className="text-sm text-cyan-600 hover:underline">← All Projects</Link>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur">
        {/* Header */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
            <span key={cat} className={`rounded-full px-3 py-0.5 text-xs font-semibold ${categoryColor[cat] || ""}`}>
              {cat}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Features</h2>
          <ul className="mt-3 space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={project.github} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            GitHub
          </a>
          <a href={project.demo} className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
