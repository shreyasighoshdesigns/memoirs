export default function Hero({ go }) {
  return (
    <section id="overview" className="sec hero dark" aria-labelledby="hero-title">
      <div
        aria-hidden="true"
        className="glow"
        style={{ right: '-12%', top: '-8%', width: '820px', height: '820px', background: 'var(--glow-a)' }}
      />
      <div
        aria-hidden="true"
        className="glow"
        style={{
          left: '-20%',
          bottom: '-30%',
          width: '760px',
          height: '760px',
          background: 'var(--glow-b)',
          animationDelay: '-9s',
        }}
      />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="pill glass-d">AI photo memory assistant · iOS</p>
            <h1 id="hero-title" className="h1">
              Find a photo the way you <span style={{ color: 'var(--accent-light, #A59FD1)' }}>remember</span> it.
            </h1>
            <p className="sub">
              Memoirs is like a friend who remembers with you. Describe the moment in your own words: it says what it
              understood, asks when it’s unsure, and finds the photo.
            </p>
            <div className="goals">
              <p className="k">Success targets</p>
              <div className="goal-grid">
                <div className="goal glass-d">
                  <span className="goal-n">{'>70%'}</span>
                  <span className="goal-l">of searches end in a find</span>
                </div>
                <div className="goal glass-d">
                  <span className="goal-n">{'<10 s'}</span>
                  <span className="goal-l">to find the photo</span>
                </div>
                <div className="goal glass-d">
                  <span className="goal-n">{'<1 s'}</span>
                  <span className="goal-l">to first results</span>
                </div>
              </div>
              <p className="cap">North star: successful finds per user, per week</p>
            </div>
            <dl className="meta">
              <div>
                <dt>Role</dt>
                <dd>Product designer: research, UX, UI</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>3-day take-home</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>iOS, mobile-first</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Figma, FigJam, Claude</dd>
              </div>
            </dl>
          </div>
          <div className="hero-phone">
            <div aria-hidden="true" className="phone-glow" style={{ background: 'var(--glow-a)' }} />{' '}
            <img
              className="hero-mock"
              src="/images/hero-phones.webp"
              alt="Memoirs home screen and splash screen on two iPhones"
              width="1042"
              height="1023"
            />
          </div>
        </div>
        <div className="values">
          <p className="k">What Memoirs does</p>
          <div className="val-grid">
            <a href="#ask" className="val glass-d" onClick={go.ask}>
              <span className="val-n">01</span>
              <span className="val-t">Ask like you’d ask a friend</span>
              <span className="val-d">In your own words, by voice, or with a photo.</span>
            </a>{' '}
            <a href="#ask" className="val glass-d" onClick={go.ask}>
              <span className="val-n">02</span>
              <span className="val-t">Talks back in plain words</span>
              <span className="val-d">Says what it understood, and asks one question when it’s unsure.</span>
            </a>{' '}
            <a href="#ask" className="val glass-d" onClick={go.ask}>
              <span className="val-n">03</span>
              <span className="val-t">Photos, not paragraphs</span>
              <span className="val-d">Moments for a vague question, the photos themselves for a specific one.</span>
            </a>{' '}
            <a href="#edge" className="val glass-d" onClick={go.edge}>
              <span className="val-n">04</span>
              <span className="val-t">Never a dead end</span>
              <span className="val-d">
                When it’s stuck, it says so, keeps what it understood and shows the closest photos.
              </span>
            </a>{' '}
            <a href="#share" className="val glass-d" onClick={go.share}>
              <span className="val-n">05</span>
              <span className="val-t">Found to sent in a tap</span>
              <span className="val-d">Straight to the iOS share sheet. Memoirs uploads nothing.</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
