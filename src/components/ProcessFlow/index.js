import React from 'react';
import styles from './styles.module.css';

// Step cards laid out left to right, wrapping every `perRow` steps,
// with an optional fork below the last step (e.g. Confirm / Reject).
// steps / branches: [{no, title, sub, desc, statuses: [{k, v}], tone}]
// desc can be an array to show one line per item; a status v array shows a transition (a → b).
// tone ('ok' | 'ng') colors a card; focus (text) highlights a card with a callout at the bottom.
function Card({no, title, sub, desc, statuses = [], tone, focus}) {
  return (
    <div className={`${styles.card} ${tone ? styles[tone] : ''} ${focus ? styles.focus : ''}`}>
      <div className={styles.head}>
        <span className={styles.no}>{no}</span>
        <span className={styles.title}>{title}</span>
      </div>
      {sub && <div className={styles.sub}>{sub}</div>}
      {desc && (
        <div className={styles.desc}>
          {Array.isArray(desc) ? desc.map((d, i) => <div key={i}>{d}</div>) : desc}
        </div>
      )}
      {statuses.length > 0 && (
        <ul className={styles.statuses}>
          {statuses.map((s, i) => (
            <li key={i}>
              <span className={styles.k}>{s.k}</span>
              {Array.isArray(s.v) ? (
                <span className={styles.vs}>
                  {s.v.map((v, j) => (
                    <React.Fragment key={j}>
                      {j > 0 && <span className={styles.to}>→</span>}
                      <code className={styles.v}>{v}</code>
                    </React.Fragment>
                  ))}
                </span>
              ) : (
                <code className={styles.v}>{s.v}</code>
              )}
            </li>
          ))}
        </ul>
      )}
      {focus && <div className={styles.focusNote}>{focus}</div>}
    </div>
  );
}

function Arrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M4 12h14m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// Horizontal center of grid column `c` (0-based), as a CSS length
const colCenter = (c) => `calc(${c} * (var(--w) + var(--arrow)) + var(--w) / 2)`;
const BRANCH_LEFT = 'calc((100% - var(--arrow)) / 4)';
const BRANCH_RIGHT = 'calc(100% - (100% - var(--arrow)) / 4)';

// Elbow line: down from `from`, across, then down into each of `to`
function Connector({from, to}) {
  const xs = [from, ...to].join(', ');
  return (
    <div className={styles.connector} aria-hidden="true">
      <span className={styles.stem} style={{left: from}} />
      <span className={styles.bar} style={{left: `min(${xs})`, width: `calc(max(${xs}) - min(${xs}))`}} />
      {to.map((x, i) => (
        <span key={i} className={styles.drop} style={{left: x}} />
      ))}
      <span className={styles.arrowDown}>
        <Arrow />
      </span>
    </div>
  );
}

export default function ProcessFlow({steps = [], branches = [], perRow}) {
  const cols = perRow || steps.length;
  const rows = [];
  for (let i = 0; i < steps.length; i += cols) rows.push(steps.slice(i, i + cols));
  const lastCol = (steps.length - 1) % cols;

  return (
    <div className={styles.wrap} style={{'--cols': cols}}>
      {rows.map((row, r) => (
        <React.Fragment key={r}>
          {r > 0 && <Connector from={colCenter(cols - 1)} to={[colCenter(0)]} />}
          <div className={styles.flow}>
            {row.map((s, i) => (
              <div key={s.no} className={styles.cell}>
                <Card {...s} />
                {i < row.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
      {branches.length > 0 && (
        <>
          <Connector from={colCenter(lastCol)} to={[BRANCH_LEFT, BRANCH_RIGHT]} />
          <div className={styles.fork}>
            {branches.map((b) => (
              <Card key={b.no} {...b} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
