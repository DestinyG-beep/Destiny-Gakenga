export default function ElevatorPitch() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Elevator Pitch</h2>

        {/* Video Embed with graceful loading */}
        <div className="relative w-full aspect-video mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://youtube.com/shorts/XCTEOcfEOBg"
            title="Elevator Pitch Video"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm <span className="font-semibold">Destiny Gakenga</span>, a junior full-stack web developer with
          hands-on experience building end-to-end applications using React,
          Flask, and SQLite3. I help teams and businesses build digital tools
          that streamline operations and reduce friction.
        </p>
      </div>
    </section>
  );
}
