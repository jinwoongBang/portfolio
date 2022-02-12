import * as React from 'react';

import styles from 'src/components/Hexagon/styles.module.css';

function Hexagon() {
  return (
    <svg width="90" height="100" className="">
      <polygon
        points="45 0, 90 25, 90 75, 45 100, 0 75, 0 25"
        stroke="#ffffff"
        fill="#5571FD"
        strokeWidth="1"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className={styles.text}
      >
        cat
      </text>
    </svg>
  );
}

export default Hexagon;
