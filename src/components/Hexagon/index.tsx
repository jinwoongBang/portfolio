import * as React from 'react';
import { useMemo } from 'react';

import styles from 'src/components/Hexagon/styles.module.css';
import { calculateHexagonSize, PolygonSize } from './PointUtils';

interface ColorChipType {
  [key: string | JWComponent.PolygonSizeProps]: any;
}

function Hexagon({
  size = 'md',
  label,
  color = 'primary',
}: JWComponent.HexagonProps) {
  const { width, height, points }: PolygonSize = useMemo(() => {
    return calculateHexagonSize[size]();
  }, [size]);

  const fill = useMemo(() => {
    const colorChip: ColorChipType = {
      primary: '#5571FD',
      secondary: '#C2306C',
      gray: '#848484',
    };

    return colorChip[color as JWComponent.PolygonSizeProps];
  }, [color]);

  return (
    <svg width={width} height={height} className={styles.root}>
      <polygon
        points={points.valueOfString()}
        stroke="#ffffff"
        fill={fill}
        strokeWidth="1"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className={styles.text}
      >
        {label}
      </text>
    </svg>
  );
}

export default Hexagon;
