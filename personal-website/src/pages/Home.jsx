export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-6 py-12">
      {/* Profile Image */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src="src/assets/profile (2).JPG"
          alt="Profile"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mburugu Destiny Gakenga
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Junior Full-Stack Developer | React & Flask Enthusiast
        </p>
        <a
          href="/portfolio"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-medium"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
