import { screens } from '../data/screens.js';
import ScreenCard from '../components/ScreenCard.jsx';

export default function EdgeCases({ rail }) {
  return (
    <section id="edge" className="sec sheet-bottom" aria-labelledby="edge-title" style={{ background: '#F5F4FA' }}>
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">05 · Edge cases</p>
          <h2 id="edge-title" className="h2">
            Not understood, or nothing found. Never a dead end.
          </h2>
          <p className="lead">
            The brief’s two edge cases, as they really happen. Like a helpful friend, Memoirs says what happened, keeps
            what it understood, shows the closest photos and always says what to tap next.
          </p>
          <p className="chipset">
            <span>
              <span className="c-solid">Mishti ✕</span>used
            </span>
            <span>
              <span className="c-dash">beach</span>not used yet
            </span>
          </p>
        </div>
        <h3 className="subh">
          When Memoirs doesn’t understand<span>{screens.edgeA.length} screens</span>
        </h3>
        <div className="rail-bar">
          <p className="rail-hint">Asks once, with picture answers</p>
          <div className="rail-btns">
            <button
              type="button"
              className="rail-btn"
              aria-label="Previous not-understood screens"
              onClick={rail.edgeA.prev}
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
            <button
              type="button"
              className="rail-btn"
              aria-label="Next not-understood screens"
              onClick={rail.edgeA.next}
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
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="rail-edgeA"
          className="rail"
          role="list"
          aria-label="Screens for when Memoirs doesn’t understand"
          tabIndex="0"
        >
          {screens.edgeA.map((screen) => (
            <ScreenCard key={screen.title} {...screen} />
          ))}
        </div>
        <h3 className="subh">
          When there are no results<span>{screens.edgeB.length} screens</span>
        </h3>
        <div className="rail-bar">
          <p className="rail-hint">Keeps what matched, shows the closest photos</p>
          <div className="rail-btns">
            <button
              type="button"
              className="rail-btn"
              aria-label="Previous no-results screens"
              onClick={rail.edgeB.prev}
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
            <button type="button" className="rail-btn" aria-label="Next no-results screens" onClick={rail.edgeB.next}>
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
        <div
          id="rail-edgeB"
          className="rail"
          role="list"
          aria-label="Screens for when there are no results"
          tabIndex="0"
        >
          {screens.edgeB.map((screen) => (
            <ScreenCard key={screen.title} {...screen} />
          ))}
        </div>
      </div>
    </section>
  );
}
