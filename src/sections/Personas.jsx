export default function Personas() {
  return (
    <section id="personas" className="sec sheet-bottom" aria-labelledby="per-title" style={{ background: '#F5F4FA' }}>
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">03 · Users · Personas</p>
          <h2 id="per-title" className="h2">
            Two people, two moods.
          </h2>
          <p className="lead">One is in a hurry. The other is taking her time.</p>
        </div>
        <div className="spec card">
          <p className="sr">
            Ananya leans to urgent retrieval and is confident with tech. Ratna leans to wandering reminiscence and is
            hesitant with tech.
          </p>
          <div className="spec-row" aria-hidden="true">
            <span>Urgent retrieval</span>{' '}
            <div className="spec-track">
              <img
                className="spec-dot"
                style={{ left: '14%' }}
                src="/images/avatars/ananya.svg"
                alt=""
                width="38"
                height="38"
              />
              <img
                className="spec-dot"
                style={{ left: '84%' }}
                src="/images/avatars/ratna.svg"
                alt=""
                width="38"
                height="38"
              />
            </div>{' '}
            <span>Wandering reminiscence</span>
          </div>
          <div className="spec-row" aria-hidden="true">
            <span>Confident with tech</span>{' '}
            <div className="spec-track">
              <img
                className="spec-dot"
                style={{ left: '10%' }}
                src="/images/avatars/ananya.svg"
                alt=""
                width="38"
                height="38"
              />
              <img
                className="spec-dot"
                style={{ left: '78%' }}
                src="/images/avatars/ratna.svg"
                alt=""
                width="38"
                height="38"
              />
            </div>{' '}
            <span>Hesitant with tech</span>
          </div>
        </div>
        <div className="pp">
          <article className="pc card">
            <div className="pc-top">
              <img className="av" src="/images/avatars/ananya.svg" alt="" width="64" height="64" />{' '}
              <div className="pc-id">
                <h3 className="pc-name">Ananya, 29</h3>
                <p className="pc-meta">Product marketer · ~18,000 photos</p>
              </div>{' '}
              <span className="mode">Urgent retrieval</span>
            </div>
            <p className="arch">The impatient expert</p>
            <div className="pc-grid">
              <div className="pc-f">
                <p className="k">Needs</p>
                <p>The right photo in under 10 seconds, often mid-call.</p>
              </div>
              <div className="pc-f">
                <p className="k">Pain</p>
                <p>Search works for “beach”, then fails on specifics.</p>
              </div>
            </div>
            <div className="listen">
              <p className="k">Listen for</p>
              <p>“I know it’s there, I just can’t get to it.”</p>
            </div>
          </article>
          <article className="pc card">
            <div className="pc-top">
              <img className="av" src="/images/avatars/ratna.svg" alt="" width="64" height="64" />{' '}
              <div className="pc-id">
                <h3 className="pc-name">Ratna, 58</h3>
                <p className="pc-meta">Retired teacher · ~9,000 photos</p>
              </div>{' '}
              <span className="mode">Wandering reminiscence</span>
            </div>
            <p className="arch">The hesitant reminiscer</p>
            <div className="pc-grid">
              <div className="pc-f">
                <p className="k">Needs</p>
                <p>To find and send her grandchildren’s photos on her own.</p>
              </div>
              <div className="pc-f">
                <p className="k">Pain</p>
                <p>Scrolls from the top, then asks her son.</p>
              </div>
            </div>
            <div className="listen">
              <p className="k">Listen for</p>
              <p>“Can you find it for me? You know how this works.”</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
