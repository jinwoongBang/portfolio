import * as React from 'react';
import { useMemo } from 'react';

import styles from 'src/components/Hexagon/styles.module.css';

type Point = `${number} ${number}`;
type PolygonSize = {
  width: number;
  height: number;
  points: Array<Point>;
};

interface CalcSizeType {
  [key: string | JWComponent.PolygonSizeProps]: () => PolygonSize;
}

const calcSize: CalcSizeType = {
  md: (): PolygonSize => {
    return {
      width: 90,
      height: 100,
      points: ['45 0', '90 25', '90 75', '45 100', '0 75', '0 25'],
    };
  },
};

function Hexagon({ size = 'md' }: JWComponent.HexagonProps) {
  const { width, height, points }: PolygonSize = useMemo(() => {
    return calcSize[size]();
  }, [size]);

  return (
    <svg
      width={width}
      height={height}
      className={styles.root}
      //   style={{ transform: 'scale(0.4)' }}
    >
      <polygon
        points={points.join(', ')}
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
