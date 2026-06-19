export default function About() {
  const skills = [
    { name: "Electronics", items: ["PCB Design", "Embedded C/C++", "ESP32 / STM32", "Circuit Analysis", "3D Printing"] },
    { name: "Automotive", items: ["CAN / LIN Protocols", "OBD-II Diagnostics", "AUTOSAR Basics", "Vehicle Networking", "ECU Development"] },
    { name: "Programming", items: ["Python", "JavaScript / React", "MicroPython", "FreeRTOS", "REST APIs"] },
  ];

  const timeline = [
    { year: "2024", title: "Freelance Electronics Engineer", desc: "Building custom embedded solutions and IoT products." },
    { year: "2022", title: "Automotive Electronics Role", desc: "Worked on vehicle communication systems and diagnostics tools." },
    { year: "2020", title: "Started Embedded Projects", desc: "First ESP32 and Raspberry Pi projects for home automation." },
    { year: "2019", title: "Engineering Degree", desc: "Graduated with a focus on electronics and embedded systems." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-black text-slate-900">About Me</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        I&apos;m Lowie Hojas — an electronics engineer who loves building things that live at the intersection of hardware and software. From automotive diagnostics to smart home gadgets, I enjoy turning complex problems into elegant, working solutions.
      </p>

      {/* Skills */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur">
              <h3 className="text-lg font-bold text-slate-900">{s.name}</h3>
              <ul className="mt-3 space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
        <div className="mt-6 space-y-6 border-l-2 border-slate-200 pl-6">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border-2 border-cyan-500 bg-white" />
              <span className="text-xs font-semibold text-cyan-600">{t.year}</span>
              <h3 className="text-base font-bold text-slate-900">{t.title}</h3>
              <p className="text-sm text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
