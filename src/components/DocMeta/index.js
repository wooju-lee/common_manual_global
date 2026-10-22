import React from 'react';
import styles from './styles.module.css';

// "2026-10-03" → "26-10-03"
const shortDate = (date) => String(date).replace(/^\d{2}(\d{2}-\d{2}-\d{2})$/, '$1');

// Shows the last revision date (`updated`), falling back to `created`
export default function DocMeta({author, created, updated}) {
  const date = updated || created;
  if (!author && !date) return null;

  return (
    <div className={styles.docMeta}>
      <span>
        Update.{date && ` ${shortDate(date)}`}
        {author && ` ${author}`}
      </span>
    </div>
  );
}
