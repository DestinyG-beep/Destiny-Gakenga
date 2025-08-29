// Portfolio.jsx
const projects = [
  {
    title: "Wazigov",
    description:
      "A mobile app that empowers citizens to report corruption incidents anonymously. It features a user-friendly interface, secure data handling, and real-time updates on reported cases.",
    links: [
      {
        label: "Slide deck",
        url: "https://docs.google.com/presentation/d/1atnZ7MTAq5WRFlaATSM1LYvjCx2f00e1-fi77gsLbPI/edit?usp=drive_link",
      },
      { label: "Youtube", url: "https://youtu.be/oRm2Vf3bZz8" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto p-8 my-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Portfolio
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition transform"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium underline transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
