import * as React from 'react';
import { useMemo } from 'react';

import styles from 'src/components/Hexagon/styles.module.css';
import { calculateHexagonSize, PolygonSize } from './PointUtils';

function Hexagon({ size = 'md' }: JWComponent.HexagonProps) {
  const { width, height, points }: PolygonSize = useMemo(() => {
    return calculateHexagonSize[size]();
  }, [size]);

  return (
    <svg width={width} height={height} className={styles.root}>
      <polygon
        points={points.valueOfString()}
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
