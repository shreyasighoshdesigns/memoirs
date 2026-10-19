export default function Problem() {
  return (
    <section id="problem" className="sec sheet-top" aria-labelledby="problem-title" style={{ background: '#FFFFFF' }}>
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">01 · Problem</p>
          <h2 id="problem-title" className="h2">
            People search for moments, not files.
          </h2>
        </div>
        <div className="reframe">
          <div className="rf" style={{ background: '#F5F4FA' }}>
            <p className="k">The brief</p>
            <p className="rf-t" style={{ color: '#2B2A38' }}>
              Search only works if you can name what’s in the photo: “beach”, “dog”.
            </p>
          </div>{' '}
          <span className="arrow" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>{' '}
          <div className="rf" style={{ background: 'var(--accent, #4A3FA2)', color: '#FFFFFF' }}>
            <p className="k" style={{ color: '#E3E1F4' }}>
              The real problem
            </p>
            <p className="rf-t">
              Memory is a fuzzy story: who, roughly when, what happened. Photo apps want an exact keyword.
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <span className="stat-n">61%</span>{' '}
            <p>of attempts to re-find an old photo succeed, at about 3 minutes each.</p>{' '}
            <a
              className="src"
              href="https://eprints.whiterose.ac.uk/10334/1/Clough_10334.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whittaker et al., 2010
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
          <div className="stat">
            <span className="stat-n">1 in 4</span>{' '}
            <p>Google Photos users search in a given month. Most people scroll.</p>{' '}
            <a
              className="src"
              href="https://blog.google/products/photos/google-photos-10-years-tips-tricks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google, May 2025
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
          <div className="stat">
            <span className="stat-n">35% → 79%</span>{' '}
            <p>accuracy at dating a memory, without and then with a landmark like a festival.</p>{' '}
            <a
              className="src"
              href="https://abdn.elsevierpure.com/files/218652359/Neusar_etal_JARMC_When_Did_This_AAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Neusar & Rubínová, 2022'}
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hmw">
          <p className="k">How might we</p>
          <p className="hmw-q">
            …turn a half-remembered moment into the exact photo in seconds, just by describing it the way you’d tell a
            friend?
          </p>
        </div>
      </div>
    </section>
  );
}
