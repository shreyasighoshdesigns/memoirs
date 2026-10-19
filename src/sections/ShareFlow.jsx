import { screens } from '../data/screens.js';
import ScreenCard from '../components/ScreenCard.jsx';

export default function ShareFlow({ rail }) {
  return (
    <section id="share" className="sec alt" aria-labelledby="share-title" style={{ background: '#FFFFFF' }}>
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">04 · Design · Share flow</p>
          <h2 id="share-title" className="h2">
            From found to sent, in a tap.
          </h2>
          <p className="lead">
            Share goes straight to the iOS share sheet: no links, and nothing uploaded by Memoirs. One photo or a
            selection, the same sheet.
          </p>
          <div className="princ">
            <span>One tap to the iOS sheet</span>
            <span>Sharing is the strongest signal</span>
            <span>No thumbs on results</span>
          </div>
        </div>
        <div className="rail-bar">
          <p className="rail-hint">{screens.share.length} screens · scroll sideways</p>
          <div className="rail-btns">
            <button
              type="button"
              className="rail-btn"
              aria-label="Previous Share flow screens"
              onClick={rail.share.prev}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>{' '}
            <button type="button" className="rail-btn" aria-label="Next Share flow screens" onClick={rail.share.next}>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div id="rail-share" className="rail" role="list" aria-label="Share flow screens" tabIndex="0">
          {screens.share.map((screen) => (
            <ScreenCard key={screen.title} {...screen} />
          ))}
        </div>
        <div className="learn">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p className="k">Behind the photo view and sharing</p>
            <h3 className="learn-t">How Memoirs learns what was right, without thumbs</h3>
          </div>
          <div className="learn-grid">
            <div>
              <h4>Right</h4>
              <p>
                Opening a photo and staying, sharing it (the strongest signal), favouriting, saving the search, “Yes,
                that’s it”.
              </p>
            </div>
            <div>
              <h4>Wrong</h4>
              <p>
                A quick back, “None of these?”, many refinements in a row, scrolling far past the top photos, giving up.
              </p>
            </div>
            <div>
              <h4>Corrections teach</h4>
              <p>
                Changing the date chip teaches what your “summer” means. Removing a chip, “Not quite” or “That’s not
                Mishti” fixes a guess.
              </p>
            </div>
            <div>
              <h4>Stays on the phone</h4>
              <p>Only anonymous counts leave, and only if you opt in. Reset any time in Settings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
