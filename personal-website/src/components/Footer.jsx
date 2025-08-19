export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-4 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-6xl mx-auto">
        <span>© {new Date().getFullYear()} Mburugu Destiny Gakenga</span>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mburugu-gakenga-b5ab692b6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/DestinyG-beep"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
