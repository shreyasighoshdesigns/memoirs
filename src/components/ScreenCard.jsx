// One phone screen in a Design / Edge-case rail: title and goal on top,
// the screen (sized to fit the viewport height), decisions below.
export default function ScreenCard({ title, level = 3, goal, image, alt, decisions, bullets }) {
  const Heading = `h${level}`;
  return (
    <article className="sc" role="listitem">
      <div className="sc-top">
        <Heading className="sc-h">{title}</Heading>
        {goal && (
          <p className="sc-goal">
            <span>Goal</span>
            {goal}
          </p>
        )}
      </div>
      <div className="shot">
        <img src={image} alt={alt} width="393" height="852" loading="lazy" />
      </div>
      <div className="sc-b">
        {decisions && (
          <ol className="dx">
            {decisions.map((d) => (
              <li key={d.title}>
                <p className="dx-h">{d.title}</p>
                <p className="dx-w">{d.text}</p>
              </li>
            ))}
          </ol>
        )}
        {bullets && (
          <>
            <p className="k">Decisions</p>
            <ul className="dl">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
