import { theme } from '../theme.js';

export default function Journey({ go }) {
  return (
    <section
      id="journey"
      className="sec dark jsec"
      aria-labelledby="jr-title"
      style={{ background: '#0B0A10', overflow: 'hidden' }}
    >
      <div
        aria-hidden="true"
        className="glow"
        style={{ left: '-14%', top: '-12%', width: '760px', height: '760px', background: 'var(--glow-b)' }}
      />
      <div
        aria-hidden="true"
        className="glow"
        style={{
          right: '-16%',
          bottom: '-18%',
          width: '820px',
          height: '820px',
          background: 'var(--glow-b)',
          animationDelay: '-8s',
        }}
      />
      <div className="wrap stack">
        <div className="head">
          <p className="eyebrow">03 · Users · Journey map</p>
          <h2 id="jr-title" className="h2">
            One search, from a fuzzy memory to a sent photo.
          </h2>
          <p className="lead">
            The proposed flow for “help me find that photo from last summer”, and how each step should feel.
          </p>
        </div>
        <ol className="sr">
          <li>Ask: Taps the bar, a face or the mic. Feels hopeful. Memoirs: One bar for words, voice or a photo.</li>
          <li>
            Describe: Types “that photo from last summer”. Feels understood. Memoirs: Shows its reading live: Apr–Jun
            2026.
          </li>
          <li>Wait: Sends; waits under a second. Feels calm. Memoirs: Replies at once; skeletons only if slow.</li>
          <li>
            Recognise: Sees three moments from last summer. Feels unsure. Memoirs: One question, with pictures, and a
            way out.
          </li>
          <li>Narrow: Taps “with Mishti”. Feels relieved. Memoirs: Her best photos first, out of 112.</li>
          <li>Confirm: Opens the photo. Feels sure. Memoirs: An optional “Is this the one?”.</li>
          <li>Share: Sends it to the family. Feels delighted. Memoirs: Straight to the iOS share sheet.</li>
        </ol>
        <div className="jr glass-d" aria-hidden="true">
          <div className="jr-row jr-top">
            <div className="jr-cell">
              <p className="jr-name">
                <span className="jr-n">1</span>Ask
              </p>
              <p className="jr-do">Taps the bar, a face or the mic</p>
            </div>
            <div className="jr-cell">
              <p className="jr-name">
                <span className="jr-n">2</span>Describe
              </p>
              <p className="jr-do">Types “that photo from last summer”</p>
            </div>
            <div className="jr-cell">
              <p className="jr-name">
                <span className="jr-n">3</span>Wait
              </p>
              <p className="jr-do">Sends; waits under a second</p>
            </div>
            <div className="jr-cell">
              <p className="jr-name">
                <span className="jr-n">4</span>Recognise
              </p>
              <p className="jr-do">Sees three moments from last summer</p>
            </div>
            <div className="jr-cell">
              <p className="jr-name">
                <span className="jr-n">5</span>Narrow
              </p>
              <p className="jr-do">Taps “with Mishti”</p>
            </div>
            <div className="jr-cell">
              <p className="jr-name">
                <span className="jr-n">6</span>Confirm
              </p>
              <p className="jr-do">Opens the photo</p>
            </div>
            <div className="jr-cell">
              <p className="jr-name">
                <span className="jr-n">7</span>Share
              </p>
              <p className="jr-do">Sends it to the family</p>
            </div>
          </div>
          <div className="jr-plot">
            <svg
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                left: '0',
                top: '22px',
                width: '100%',
                height: '110px',
                overflow: 'visible',
              }}
            >
              <path
                d="M 0 100 L 1000 100"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="1"
                strokeDasharray="4 6"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 71.4 100 C 95.2 94.7 166.7 71.3 214.3 68 C 261.9 64.7 309.5 71.3 357.1 80 C 404.8 88.7 452.4 124 500 120 C 547.6 116 595.2 70.7 642.9 56 C 690.5 41.3 738.1 39.3 785.7 32 C 833.3 24.7 904.8 15.3 928.6 12 L 928.6 200 L 71.4 200 Z"
                fill={theme.accent}
                fillOpacity="0.34"
                stroke="none"
              />
              <path
                d="M 71.4 100 C 95.2 94.7 166.7 71.3 214.3 68 C 261.9 64.7 309.5 71.3 357.1 80 C 404.8 88.7 452.4 124 500 120 C 547.6 116 595.2 70.7 642.9 56 C 690.5 41.3 738.1 39.3 785.7 32 C 833.3 24.7 904.8 15.3 928.6 12"
                fill="none"
                stroke={theme.accentLight}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>{' '}
            <span
              className="jd"
              style={{
                left: '7.14%',
                top: '77.0px',
                width: '11px',
                height: '11px',
                margin: '-5.5px 0 0 -5.5px',
                background: theme.accentLight,
                boxShadow: '0 0 0 3px #1B1A22',
              }}
            />{' '}
            <span
              className="jd"
              style={{
                left: '21.43%',
                top: '59.4px',
                width: '11px',
                height: '11px',
                margin: '-5.5px 0 0 -5.5px',
                background: theme.accentLight,
                boxShadow: '0 0 0 3px #1B1A22',
              }}
            />{' '}
            <span
              className="jd"
              style={{
                left: '35.71%',
                top: '66.0px',
                width: '11px',
                height: '11px',
                margin: '-5.5px 0 0 -5.5px',
                background: theme.accentLight,
                boxShadow: '0 0 0 3px #1B1A22',
              }}
            />{' '}
            <span
              className="jd"
              style={{
                left: '50.00%',
                top: '88.0px',
                width: '13px',
                height: '13px',
                margin: '-6.5px 0 0 -6.5px',
                background: '#FFFFFF',
                boxShadow: `0 0 0 3px ${theme.accentLight}, 0 0 0 8px rgba(165, 159, 209, 0.22)`,
              }}
            />{' '}
            <span
              className="jd"
              style={{
                left: '64.29%',
                top: '52.8px',
                width: '11px',
                height: '11px',
                margin: '-5.5px 0 0 -5.5px',
                background: theme.accentLight,
                boxShadow: '0 0 0 3px #1B1A22',
              }}
            />{' '}
            <span
              className="jd"
              style={{
                left: '78.57%',
                top: '39.6px',
                width: '11px',
                height: '11px',
                margin: '-5.5px 0 0 -5.5px',
                background: theme.accentLight,
                boxShadow: '0 0 0 3px #1B1A22',
              }}
            />{' '}
            <span
              className="jd"
              style={{
                left: '92.86%',
                top: '28.6px',
                width: '13px',
                height: '13px',
                margin: '-6.5px 0 0 -6.5px',
                background: '#FFFFFF',
                boxShadow: `0 0 0 3px ${theme.accentLight}, 0 0 0 8px rgba(165, 159, 209, 0.22)`,
              }}
            />{' '}
            <span className="jl" style={{ left: '7.14%', top: '52px' }}>
              Hopeful
            </span>{' '}
            <span className="jl" style={{ left: '21.43%', top: '34px' }}>
              Understood
            </span>{' '}
            <span className="jl" style={{ left: '35.71%', top: '41px' }}>
              Calm
            </span>{' '}
            <span className="jl" style={{ left: '50.00%', top: '99px', color: theme.accentLight, fontWeight: '600' }}>
              Unsure
            </span>{' '}
            <span className="jl" style={{ left: '64.29%', top: '28px' }}>
              Relieved
            </span>{' '}
            <span className="jl" style={{ left: '78.57%', top: '15px' }}>
              Sure
            </span>{' '}
            <span className="jl" style={{ left: '92.86%', top: '4px', color: theme.accentLight, fontWeight: '600' }}>
              Delighted
            </span>
          </div>
          <div className="jr-row jr-bot">
            <div className="jr-cell">
              <p className="jr-m">One bar for words, voice or a photo</p>
            </div>
            <div className="jr-cell">
              <p className="jr-m">Shows its reading live: Apr–Jun 2026</p>
            </div>
            <div className="jr-cell">
              <p className="jr-m">Replies at once; skeletons only if slow</p>
            </div>
            <div className="jr-cell">
              <p className="jr-m">One question, with pictures, and a way out</p>
            </div>
            <div className="jr-cell">
              <p className="jr-m">Her best photos first, out of 112</p>
            </div>
            <div className="jr-cell">
              <p className="jr-m">An optional “Is this the one?”</p>
            </div>
            <div className="jr-cell">
              <p className="jr-m">Straight to the iOS share sheet</p>
            </div>
          </div>
        </div>
        <ol className="jr-list" aria-hidden="true">
          <li className="glass-d">
            <div className="jl-h">
              <span className="jr-n">1</span>
              <span className="jl-name">Ask</span>
              <span className="jl-feel">Hopeful</span>
            </div>
            <span className="jl-bar">
              <span style={{ width: '50%' }} />
            </span>
            <p className="jl-do">Taps the bar, a face or the mic</p>
            <p className="jl-m">One bar for words, voice or a photo</p>
          </li>
          <li className="glass-d">
            <div className="jl-h">
              <span className="jr-n">2</span>
              <span className="jl-name">Describe</span>
              <span className="jl-feel">Understood</span>
            </div>
            <span className="jl-bar">
              <span style={{ width: '66%' }} />
            </span>
            <p className="jl-do">Types “that photo from last summer”</p>
            <p className="jl-m">Shows its reading live: Apr–Jun 2026</p>
          </li>
          <li className="glass-d">
            <div className="jl-h">
              <span className="jr-n">3</span>
              <span className="jl-name">Wait</span>
              <span className="jl-feel">Calm</span>
            </div>
            <span className="jl-bar">
              <span style={{ width: '60%' }} />
            </span>
            <p className="jl-do">Sends; waits under a second</p>
            <p className="jl-m">Replies at once; skeletons only if slow</p>
          </li>
          <li className="glass-d jl-dip">
            <div className="jl-h">
              <span className="jr-n">4</span>
              <span className="jl-name">Recognise</span>
              <span className="jl-feel">Unsure</span>
            </div>
            <span className="jl-bar">
              <span style={{ width: '40%' }} />
            </span>
            <p className="jl-do">Sees three moments from last summer</p>
            <p className="jl-m">One question, with pictures, and a way out</p>
          </li>
          <li className="glass-d">
            <div className="jl-h">
              <span className="jr-n">5</span>
              <span className="jl-name">Narrow</span>
              <span className="jl-feel">Relieved</span>
            </div>
            <span className="jl-bar">
              <span style={{ width: '72%' }} />
            </span>
            <p className="jl-do">Taps “with Mishti”</p>
            <p className="jl-m">Her best photos first, out of 112</p>
          </li>
          <li className="glass-d">
            <div className="jl-h">
              <span className="jr-n">6</span>
              <span className="jl-name">Confirm</span>
              <span className="jl-feel">Sure</span>
            </div>
            <span className="jl-bar">
              <span style={{ width: '84%' }} />
            </span>
            <p className="jl-do">Opens the photo</p>
            <p className="jl-m">An optional “Is this the one?”</p>
          </li>
          <li className="glass-d">
            <div className="jl-h">
              <span className="jr-n">7</span>
              <span className="jl-name">Share</span>
              <span className="jl-feel">Delighted</span>
            </div>
            <span className="jl-bar">
              <span style={{ width: '94%' }} />
            </span>
            <p className="jl-do">Sends it to the family</p>
            <p className="jl-m">Straight to the iOS share sheet</p>
          </li>
        </ol>
        <p className="jkeys">
          <span>
            <b>The dip:</b> a vague question gets one question back, with pictures.
          </span>
          <span>
            <b>The peak:</b> found and sent in seconds.
          </span>
          <a href="#edge" onClick={go.edge}>
            <b>If it goes wrong:</b> never a dead end →
          </a>
        </p>
      </div>
    </section>
  );
}
