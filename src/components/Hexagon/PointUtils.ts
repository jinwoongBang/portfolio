export type PolygonSize = {
  width: number;
  height: number;
  points: Points;
};

export interface CalculateHexagonSizeType {
  [key: string | JWComponent.PolygonSizeProps]: () => PolygonSize;
}

export class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
}

export class Points {
  private points: Array<Point> = [];

  addPoint(x: number, y: number) {
    this.points.push(new Point(x, y));
    return this;
  }

  valueOfString() {
    return this.points.map((point) => `${point.x} ${point.y}`).join(', ');
  }
}

export const calculateHexagonSize: CalculateHexagonSizeType = {
  xs: (): PolygonSize => {
    const scale = 0.5;
    return {
      width: 90 * scale,
      height: 100 * scale,
      points: new Points()
        .addPoint(45 * scale, 0 * scale)
        .addPoint(90 * scale, 25 * scale)
        .addPoint(90 * scale, 75 * scale)
        .addPoint(45 * scale, 100 * scale)
        .addPoint(0 * scale, 75 * scale)
        .addPoint(0 * scale, 25 * scale),
    };
  },
  sm: (): PolygonSize => {
    const scale = 0.7;
    return {
      width: 90 * scale,
      height: 100 * scale,
      points: new Points()
        .addPoint(45 * scale, 0 * scale)
        .addPoint(90 * scale, 25 * scale)
        .addPoint(90 * scale, 75 * scale)
        .addPoint(45 * scale, 100 * scale)
        .addPoint(0 * scale, 75 * scale)
        .addPoint(0 * scale, 25 * scale),
    };
  },
  md: (): PolygonSize => {
    return {
      width: 90,
      height: 100,
      points: new Points()
        .addPoint(45, 0)
        .addPoint(90, 25)
        .addPoint(90, 75)
        .addPoint(45, 100)
        .addPoint(0, 75)
        .addPoint(0, 25),
    };
  },

  lg: (): PolygonSize => {
    const scale = 1.2;
    return {
      width: 90 * scale,
      height: 100 * scale,
      points: new Points()
        .addPoint(45 * scale, 0 * scale)
        .addPoint(90 * scale, 25 * scale)
        .addPoint(90 * scale, 75 * scale)
        .addPoint(45 * scale, 100 * scale)
        .addPoint(0 * scale, 75 * scale)
        .addPoint(0 * scale, 25 * scale),
    };
  },
};
