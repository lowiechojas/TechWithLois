import { useState } from "react";

const emptyProject = {
  id: "",
  title: "",
  description: "",
  category: [],
  techStack: "",
  features: "",
  github: "#",
  demo: "#",
  image: null,
};

const categories = ["Electronics", "Automotive", "Programming"];

export default function Admin() {
  const [form, setForm] = useState(emptyProject);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCategory(cat) {
    setForm((prev) => {
      const cats = prev.category.includes(cat)
        ? prev.category.filter((c) => c !== cat)
        : [...prev.category, cat];
      return { ...prev, category: cats };
    });
  }

  function generateId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function handleGenerate(e) {
    e.preventDefault();
    const project = {
      id: generateId(form.title),
      title: form.title,
      description: form.description,
      category: form.category,
      techStack: form.techStack.split(",").map((s) => s.trim()).filter(Boolean),
      features: form.features.split("\n").map((s) => s.trim()).filter(Boolean),
      github: form.github || "#",
      demo: form.demo || "#",
      image: null,
    };
    const json = JSON.stringify(project, null, 2);
    setOutput(json);
    setCopied(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleReset() {
    setForm(emptyProject);
    setOutput("");
  }

  return (
    <section className="relative px-6 py-16 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Add New Project</h1>
        <p className="text-slate-600 mb-8">Fill in the details below, then copy the generated JSON into <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">src/data/projects.js</code></p>

        <form onSubmit={handleGenerate} className="space-y-5 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Project Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="e.g. Church Slide Controller"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Brief description of the project..."
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                    form.category.includes(cat)
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Tech Stack</label>
            <input
              name="techStack"
              value={form.techStack}
              onChange={handleChange}
              placeholder="Comma-separated: ESP32, React, Python"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Features</label>
            <textarea
              name="features"
              value={form.features}
              onChange={handleChange}
              rows={4}
              placeholder="One feature per line:&#10;Wi-Fi based control&#10;Web UI&#10;Battery powered"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">GitHub URL</label>
              <input
                name="github"
                value={form.github}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Live Demo URL</label>
              <input
                name="demo"
                value={form.demo}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Generate JSON
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Reset
            </button>
          </div>
        </form>

        {output && (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-700">Generated Project Entry</h3>
              <button
                onClick={handleCopy}
                className="rounded-xl bg-cyan-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-cyan-700"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-green-300 whitespace-pre-wrap">
              {output}
            </pre>
            <p className="mt-4 text-xs text-slate-500">
              Paste this into <code className="bg-slate-100 px-1.5 py-0.5 rounded">src/data/projects.js</code> inside the array, then rebuild.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
