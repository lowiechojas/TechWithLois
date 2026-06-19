import { Link } from "react-router-dom";

const categoryColor = {
  Electronics: "bg-cyan-100 text-cyan-700",
  Automotive: "bg-violet-100 text-violet-700",
  Programming: "bg-emerald-100 text-emerald-700",
};

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group rounded-2xl border border-slate-200 bg-white/70 shadow-xl shadow-slate-200/60 backdrop-blur transition hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Image placeholder */}
      <div className="h-44 rounded-t-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <span className="text-4xl text-slate-300">⚡</span>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
            <span
              key={cat}
              className={`rounded-full px-3 py-0.5 text-xs font-semibold ${categoryColor[cat] || "bg-slate-100 text-slate-600"}`}
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{project.description}</p>
      </div>
    </Link>
  );
}
