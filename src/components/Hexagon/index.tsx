import clsx from 'clsx';
import * as React from 'react';
import { useMemo } from 'react';

import styles from 'src/components/Hexagon/styles.module.css';
import { calculateHexagonSize, PolygonSize } from './PointUtils';

interface ColorChipType {
  [key: string | JWComponent.PolygonSizeProps]: any;
}

function Hexagon({
  size = 'md',
  labels,
  color = 'primary',
  className = '',
}: JWComponent.HexagonProps) {
  const { width, height, points }: PolygonSize = useMemo(() => {
    return calculateHexagonSize[size]();
  }, [size]);

  const fill = useMemo(() => {
    const colorChip: ColorChipType = {
      primary: '#5571FD',
      secondary: '#C2306C',
      gray: '#848484',
      gradient: 'url(#grad1)',
    };

    return colorChip[color as JWComponent.PolygonSizeProps];
  }, [color]);

  const startPosition = useMemo(() => {
    const lineCount = labels?.length || 0;

    const isEven = lineCount % 2 === 0;

    let start = 50;

    /**
     * 1 > 50
     * 2 > 40 60
     * 3 > 30 50 70
     * 4 > 20 40 60 80
     * 5 > 10 30 50 70 90
     * 6 > 0 20 40 60 80 100
     */
    if (isEven) {
      start = 40 - ((lineCount - 2) / 2) * 20;
    } else {
      start = (5 - (lineCount - 1)) * 10;
    }

    return start;
  }, [labels]);

  return (
    <svg width={width} height={height} className={clsx(styles.root, className)}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#5571FD', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#C2306C', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <polygon points={points.valueOfString()} fill={fill} />

      {labels?.map((label: string, index) => {
        const y = startPosition + index * 20;
        return (
          <text
            key={label}
            x="50%"
            y={`${y}%`}
            textAnchor="middle"
            dominantBaseline="middle"
            className={styles.text}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export default Hexagon;
