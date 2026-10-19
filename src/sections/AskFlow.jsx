import { screens } from '../data/screens.js';
import ScreenCard from '../components/ScreenCard.jsx';

export default function AskFlow({ rail }) {
  return (
    <section id="ask" className="sec sheet-top" aria-labelledby="ask-title" style={{ background: '#F5F4FA' }}>
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">04 · Design · Ask flow</p>
          <h2 id="ask-title" className="h2">
            Ask like you’d ask a friend. Get the photo, not a paragraph.
          </h2>
          <p className="lead">
            The brief’s own request, from home to results. Memoirs replies in a line, asks one thing when it needs to,
            and keeps the photos on screen. There is no chat thread; only the current exchange is shown.
          </p>
          <div className="princ">
            <span>A conversation, not a chat thread</span>
            <span>Says what it understood</span>
            <span>Vague → moments, specific → photos</span>
          </div>
        </div>
        <div className="rail-bar">
          <p className="rail-hint">{screens.ask.length} screens · scroll sideways</p>
          <div className="rail-btns">
            <button type="button" className="rail-btn" aria-label="Previous Ask flow screens" onClick={rail.ask.prev}>
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
            <button type="button" className="rail-btn" aria-label="Next Ask flow screens" onClick={rail.ask.next}>
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
        <div id="rail-ask" className="rail" role="list" aria-label="Ask flow screens" tabIndex="0">
          {screens.ask.map((screen) => (
            <ScreenCard key={screen.title} {...screen} />
          ))}
        </div>
      </div>
    </section>
  );
}
