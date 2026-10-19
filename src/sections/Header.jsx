export default function Header({ cur, go, tone }) {
  return (
    <header id="cs-header" className="hdr" data-tone={tone}>
      <div className="hdr-in">
        <a href="#overview" className="brand" aria-label="Memoirs case study, back to top" onClick={go.overview}>
          <img className="logo" src="/images/memoirs-logo.png" alt="Memoirs" width="165" height="32" />
          <span className="case">Case study</span>
        </a>{' '}
        <nav id="cs-nav" className="navs" aria-label="Case study chapters">
          <div className="track">
            <a id="nav-overview" href="#overview" className="nav-a" aria-current={cur.overview} onClick={go.overview}>
              Overview
            </a>{' '}
            <a id="nav-problem" href="#problem" className="nav-a" aria-current={cur.problem} onClick={go.problem}>
              Problem
            </a>{' '}
            <a id="nav-research" href="#benchmark" className="nav-a" aria-current={cur.research} onClick={go.benchmark}>
              Research
            </a>{' '}
            <a id="nav-users" href="#personas" className="nav-a" aria-current={cur.users} onClick={go.personas}>
              Users
            </a>{' '}
            <a id="nav-design" href="#ask" className="nav-a" aria-current={cur.design} onClick={go.ask}>
              Design
            </a>{' '}
            <a id="nav-edge" href="#edge" className="nav-a" aria-current={cur.edge} onClick={go.edge}>
              Edge cases
            </a>{' '}
            <a
              id="nav-tradeoffs"
              href="#tradeoffs"
              className="nav-a"
              aria-current={cur.tradeoffs}
              onClick={go.tradeoffs}
            >
              Trade-offs
            </a>{' '}
            <a id="nav-ai" href="#ai" className="nav-a" aria-current={cur.ai} onClick={go.ai}>
              AI
            </a>
          </div>
        </nav>
        <p className="who">Shreyasi Ghosh · Product designer</p>
      </div>
    </header>
  );
}
