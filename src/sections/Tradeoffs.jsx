export default function Tradeoffs() {
  return (
    <section
      id="tradeoffs"
      className="sec dark"
      aria-labelledby="to-title"
      style={{ background: '#0B0A10', overflow: 'hidden' }}
    >
      <div
        aria-hidden="true"
        className="glow"
        style={{ right: '-14%', top: '-16%', width: '780px', height: '780px', background: 'var(--glow-b)' }}
      />
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">06 · Trade-offs</p>
          <h2 id="to-title" className="h2">
            What Memoirs gave up, on purpose.
          </h2>
          <p className="lead">Six calls that shaped the design, and what each one cost.</p>
        </div>
        <div className="tos">
          <article className="toc glass-d">
            <h3>A conversation without a chat thread</h3>
            <dl>
              <div>
                <dt>Gave up</dt>
                <dd>A scrolling chat history, and long answers.</dd>
              </div>
              <div>
                <dt>Because</dt>
                <dd>
                  Google paused Ask Photos over latency. People want the photos on screen, with only the current
                  exchange in view.
                </dd>
              </div>
            </dl>
          </article>
          <article className="toc glass-d">
            <h3>Moments first for vague questions</h3>
            <dl>
              <div>
                <dt>Gave up</dt>
                <dd>Showing all 1,248 photos at once.</dd>
              </div>
              <div>
                <dt>Because</dt>
                <dd>
                  Recognising a moment is easier than describing it, and “Browse all” keeps everything one tap away.
                </dd>
              </div>
            </dl>
          </article>
          <article className="toc glass-d">
            <h3>Ask once instead of guessing</h3>
            <dl>
              <div>
                <dt>Gave up</dt>
                <dd>A fast best guess for names, places and days.</dd>
              </div>
              <div>
                <dt>Because</dt>
                <dd>A wrong person, place or painful day costs more trust than one question.</dd>
              </div>
            </dl>
          </article>
          <article className="toc glass-d">
            <h3>No share links</h3>
            <dl>
              <div>
                <dt>Gave up</dt>
                <dd>A family web gallery, and a growth loop.</dd>
              </div>
              <div>
                <dt>Because</dt>
                <dd>A link needs a copy online, which breaks “nothing leaves your phone”.</dd>
              </div>
            </dl>
          </article>
          <article className="toc glass-d">
            <h3>Learn from behaviour, not thumbs</h3>
            <dl>
              <div>
                <dt>Gave up</dt>
                <dd>Explicit ratings on every result.</dd>
              </div>
              <div>
                <dt>Because</dt>
                <dd>Sharing, saving and corrections say more, and cost people nothing extra.</dd>
              </div>
            </dl>
          </article>
          <article className="toc glass-d">
            <h3>Everything on the phone</h3>
            <dl>
              <div>
                <dt>Gave up</dt>
                <dd>Cloud speed when reading a big library on day one.</dd>
              </div>
              <div>
                <dt>Because</dt>
                <dd>Privacy is the promise. Memoirs shows honest progress and asks for more access in context.</dd>
              </div>
            </dl>
          </article>
        </div>
        <p className="next">
          <strong>Next:</strong> put the prototype in front of the same friends and family, then people I don’t know,
          and measure it against the targets.
        </p>
      </div>
    </section>
  );
}
