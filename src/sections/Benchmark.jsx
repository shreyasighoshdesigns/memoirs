import { theme } from '../theme.js';

export default function Benchmark() {
  return (
    <section
      id="benchmark"
      className="sec"
      aria-labelledby="bench-title"
      style={{ background: '#F5F4FA', overflow: 'hidden' }}
    >
      <div
        aria-hidden="true"
        className="glow"
        style={{ right: '-14%', top: '16%', width: '780px', height: '780px', background: 'var(--glow-l)' }}
      />
      <div
        aria-hidden="true"
        className="glow"
        style={{
          left: '-16%',
          bottom: '-10%',
          width: '640px',
          height: '640px',
          background: 'var(--glow-l)',
          animationDelay: '-8s',
        }}
      />
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">02 · Research · Competitive benchmarking</p>
          <h2 id="bench-title" className="h2">
            Everyone understands sentences. No one shows what they understood.
          </h2>
          <p className="lead">12 products reviewed. The 7 closest to Memoirs are below.</p>
        </div>
        <div className="bm glass-l" role="table" aria-label="How photo apps handle a natural-language search">
          <div className="bm-row bm-head" role="row">
            <span role="columnheader">Product</span> <span role="columnheader">Understands sentences</span>{' '}
            <span role="columnheader">Shows what it understood</span> <span role="columnheader">Runs on device</span>{' '}
            <span role="columnheader">The catch</span>
          </div>
          <div className="bm-row" role="row">
            <div className="bm-prod" role="rowheader">
              Google Ask Photos
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke={theme.accent} strokeWidth="2" />
                  <path d="M12 2a10 10 0 0 1 0 20z" fill={theme.accent} />
                </svg>
                <span>
                  <span className="sr">Partly: </span>In prose
                </span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10.25" fill="none" stroke="#9997AB" strokeWidth="1.5" />
                  <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="#55546A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>
                  <span className="sr">No: </span>Cloud
                </span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>Paused in 2025 over speed and quality
            </div>
          </div>
          <div className="bm-row" role="row">
            <div className="bm-prod" role="rowheader">
              Gemini
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke={theme.accent} strokeWidth="2" />
                  <path d="M12 2a10 10 0 0 1 0 20z" fill={theme.accent} />
                </svg>
                <span>
                  <span className="sr">Partly: </span>In prose
                </span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10.25" fill="none" stroke="#9997AB" strokeWidth="1.5" />
                  <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="#55546A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>
                  <span className="sr">No: </span>Cloud
                </span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>Shares text; can’t build albums
            </div>
          </div>
          <div className="bm-row" role="row">
            <div className="bm-prod" role="rowheader">
              Apple Photos
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke={theme.accent} strokeWidth="2" />
                  <path d="M12 2a10 10 0 0 1 0 20z" fill={theme.accent} />
                </svg>
                <span>
                  <span className="sr">Partly: </span>Hints as you type
                </span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>Needs iPhone 15 Pro or later
            </div>
          </div>
          <div className="bm-row" role="row">
            <div className="bm-prod" role="rowheader">
              Samsung Gallery
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10.25" fill="none" stroke="#9997AB" strokeWidth="1.5" />
                  <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="#55546A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="sr">No or not documented</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>Galaxy S25 or later
            </div>
          </div>
          <div className="bm-row" role="row">
            <div className="bm-prod" role="rowheader">
              Ente Photos
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke={theme.accent} strokeWidth="2" />
                  <path d="M12 2a10 10 0 0 1 0 20z" fill={theme.accent} />
                </svg>
                <span>
                  <span className="sr">Partly: </span>Manual filters
                </span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>Smart search is off by default
            </div>
          </div>
          <div className="bm-row" role="row">
            <div className="bm-prod" role="rowheader">
              Queryable
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10.25" fill="none" stroke="#9997AB" strokeWidth="1.5" />
                  <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="#55546A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="sr">No or not documented</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>No people search
            </div>
          </div>
          <div className="bm-row" role="row">
            <div className="bm-prod" role="rowheader">
              Memorable
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10.25" fill="none" stroke="#9997AB" strokeWidth="1.5" />
                  <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="#55546A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="sr">No or not documented</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill={theme.accent} />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>Free tier covers the newest 500 photos
            </div>
          </div>
          <div className="bm-row bm-me" role="row">
            <div className="bm-prod" role="rowheader">
              Memoirs
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Understands sentences</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke={theme.accent}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Shows what it understood</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke={theme.accent}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <span className="sr">Yes: </span>Says it back, asks when unsure
                </span>
              </span>
            </div>
            <div className="bm-cell" role="cell">
              <span className="bm-lbl">Runs on device</span>
              <span className="bm-val">
                <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
                  <path
                    d="M7.5 12.4l3 3 6-6.4"
                    fill="none"
                    stroke={theme.accent}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr">Yes</span>
              </span>
            </div>
            <div className="bm-catch" role="cell">
              <span className="bm-lbl">The catch</span>Has to earn full photo access
            </div>
          </div>
        </div>
        <p className="legend">
          <span>
            <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill={theme.accent} />
              <path
                d="M7.5 12.4l3 3 6-6.4"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Yes
          </span>{' '}
          <span>
            <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke={theme.accent} strokeWidth="2" />
              <path d="M12 2a10 10 0 0 1 0 20z" fill={theme.accent} />
            </svg>
            Partly
          </span>{' '}
          <span>
            <svg className="mk" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10.25" fill="none" stroke="#9997AB" strokeWidth="1.5" />
              <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke="#55546A" strokeWidth="2" strokeLinecap="round" />
            </svg>
            No, or not documented
          </span>{' '}
          <span>As of October 2026</span>
        </p>
        <div className="duo">
          <div className="co" style={{ background: 'var(--accent, #4A3FA2)', color: '#FFFFFF' }}>
            <p className="k" style={{ color: '#E3E1F4' }}>
              The gap
            </p>
            <p className="co-t">
              Assistants talk, but bury the photos in paragraphs. Galleries show photos, but say little. Memoirs talks
              like a friend: one line on what it understood, one question when it’s unsure, and the photos right there.
            </p>
          </div>
          <div className="co" style={{ background: '#0B0A10', color: '#FFFFFF' }}>
            <p className="k" style={{ color: 'var(--accent-light, #A59FD1)' }}>
              Cautionary tale
            </p>
            <p className="co-t">
              Google paused Ask Photos in June 2025 over “latency, quality and ux”, then shipped a switch back to
              classic search.
            </p>
            <p className="co-l">Lesson: be instant first, smart second.</p>
            <div className="srcs">
              <a
                className="src src-d"
                href="https://www.androidauthority.com/google-photos-ask-photos-pause-3563859"
                target="_blank"
                rel="noopener noreferrer"
              >
                Android Authority, Jun 2025
              </a>{' '}
              <a
                className="src src-d"
                href="https://techcrunch.com/2026/03/10/google-gives-in-to-users-complaints-over-ai-powered-ask-photos-search-feature/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechCrunch, Mar 2026
              </a>{' '}
              <a
                className="src src-d"
                href="https://9to5google.com/2026/07/20/google-photos-classic-search-toggle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                9to5Google, Jul 2026
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
