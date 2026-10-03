import React from 'react';
import styles from './styles.module.css';

// "2026-10-03" → "26-10-03"
const shortDate = (date) => String(date).replace(/^\d{2}(\d{2}-\d{2}-\d{2})$/, '$1');

export default function DocMeta({author, created}) {
  if (!author && !created) return null;

  return (
    <div className={styles.docMeta}>
      <span>
        Update.{created && ` ${shortDate(created)}`}
        {author && ` ${author}`}
      </span>
    </div>
  );
}
