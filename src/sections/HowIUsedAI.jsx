export default function HowIUsedAI() {
  return (
    <section id="ai" className="sec sheet-both" aria-labelledby="ai-title" style={{ background: '#F5F4FA' }}>
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">07 · How I used AI</p>
          <h2 id="ai-title" className="h2">
            AI did the legwork. I made the calls.
          </h2>
          <p className="lead">
            Claude worked as my researcher, sparring partner and production hand, from the brief to this page. Every
            decision, and every claim, stayed with me.
          </p>
        </div>
        <div className="ai-stats">
          <div className="ai-stat">
            <span className="ai-n">3 days</span>
            <span className="ai-l">from brief to case study</span>
          </div>
          <div className="ai-stat">
            <span className="ai-n">12</span>
            <span className="ai-l">products researched, every claim sourced</span>
          </div>
          <div className="ai-stat">
            <span className="ai-n">20</span>
            <span className="ai-l">hi-fi screens across three flows</span>
          </div>
          <div className="ai-stat">
            <span className="ai-n">1</span>
            <span className="ai-l">living project brief every AI chat read first</span>
          </div>
        </div>
        <ol className="ai-flow">
          <li className="ai-step">
            <h3 className="ai-h">
              <span className="jr-n ai-num">1</span>Research
            </h3>
            <div className="ai-row">
              <span className="ai-tag ai-ai">AI</span>
              <p>Mapped 12 competitors and the memory science, with sources.</p>
            </div>
            <div className="ai-row">
              <span className="ai-tag ai-me">Me</span>
              <p>Checked the sources; kept what changed the design.</p>
            </div>
          </li>
          <li className="ai-step">
            <h3 className="ai-h">
              <span className="jr-n ai-num">2</span>Frame
            </h3>
            <div className="ai-row">
              <span className="ai-tag ai-ai">AI</span>
              <p>Stress-tested the problem, the assumptions and the edge cases.</p>
            </div>
            <div className="ai-row">
              <span className="ai-tag ai-me">Me</span>
              <p>Chose the direction: a standalone app that talks, without a chat thread.</p>
            </div>
          </li>
          <li className="ai-step">
            <h3 className="ai-h">
              <span className="jr-n ai-num">3</span>Design
            </h3>
            <div className="ai-row">
              <span className="ai-tag ai-ai">AI</span>
              <p>Worked inside my Figma file: palette swaps, colour variables, screens built from my components.</p>
            </div>
            <div className="ai-row">
              <span className="ai-tag ai-me">Me</span>
              <p>Set the system and the direction; reviewed and edited every frame.</p>
            </div>
          </li>
          <li className="ai-step">
            <h3 className="ai-h">
              <span className="jr-n ai-num">4</span>Write
            </h3>
            <div className="ai-row">
              <span className="ai-tag ai-ai">AI</span>
              <p>Drafted the copy against my voice guide.</p>
            </div>
            <div className="ai-row">
              <span className="ai-tag ai-me">Me</span>
              <p>Pushed it from terse to warm and guiding.</p>
            </div>
          </li>
          <li className="ai-step">
            <h3 className="ai-h">
              <span className="jr-n ai-num">5</span>Present
            </h3>
            <div className="ai-row">
              <span className="ai-tag ai-ai">AI</span>
              <p>Built this page from my content.</p>
            </div>
            <div className="ai-row">
              <span className="ai-tag ai-me">Me</span>
              <p>Shaped the story and cut it to what matters.</p>
            </div>
          </li>
        </ol>
        <div className="calls">
          <p className="k">Calls that were mine, not the AI’s</p>
          <ul className="calls-list">
            <li>Search with a photo, right in the bar</li>
            <li>No share links, so nothing leaves the phone</li>
            <li>“Add a face” for relatives who rarely appear</li>
            <li>Purple to act, orange only for links</li>
            <li>Sharing that feels exactly like iOS</li>
            <li>A friend, not a feature list</li>
          </ul>
        </div>
        <p className="guard">
          <span>No invented research data</span>
          <span>Every number links to its source</span>
          <span>Every decision logged with its reason</span>
        </p>
      </div>
    </section>
  );
}
