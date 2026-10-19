export default function Footer({ go }) {
  return (
    <footer className="foot">
      <div className="foot-in">
        <p className="foot-brand">
          <img className="logo" src="/images/memoirs-logo.png" alt="Memoirs" width="165" height="32" />
          <span>A case study by Shreyasi Ghosh, October 2026</span>
        </p>{' '}
        <a href="#overview" className="top-link" onClick={go.overview}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
