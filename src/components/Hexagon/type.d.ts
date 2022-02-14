namespace JWComponent {
  type PolygonSizeProps = 'xs' | 'sm' | 'md' | 'lg';
  type PolygonColorProps = 'primary' | 'secondary' | 'gray' | 'gradient';
  type HexagonProps = {
    size?: PolygonSizeProps;
    labels?: string[];
    color?: PolygonColorProps;
    // color: string[];
    className?: string;
  };
}
