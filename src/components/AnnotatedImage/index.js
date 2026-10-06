import React from 'react';
import styles from './styles.module.css';

// Screenshot with numbered highlight boxes drawn on top.
// boxes: [{n, x, y, w, h}] in % of the image size, so they scale with the image.
export default function AnnotatedImage({src, alt, boxes = [], maxWidth}) {
  return (
    <div className={styles.frame} style={maxWidth ? {maxWidth} : undefined}>
      <div className={styles.canvas}>
        <img src={src} alt={alt} className={styles.image} />
        {boxes.map((b, i) => (
          <div
            key={i}
            className={styles.box}
            style={{left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`}}>
            {b.n != null && <span className={styles.badge}>{b.n}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
