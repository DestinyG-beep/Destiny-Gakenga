function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <ul className="list-disc list-inside space-y-3 text-blue-600">
        <li>
          <a href="https://www.youtube.com/your-phase2-project" target="_blank" rel="noreferrer">
            Phase 2 Project Video (YouTube)
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/your-slide-deck.pdf" target="_blank" rel="noreferrer">
            Phase 2 Project Slide Deck (PDF)
          </a>
        </li>
        <li>
          <a href="https://github.com/DestinyGakenga" target="_blank" rel="noreferrer">
            More Projects on GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
