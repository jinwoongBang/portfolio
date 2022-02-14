namespace JWComponent {
  type PolygonSizeProps = 'xs' | 'sm' | 'md' | 'lg';
  type PolygonColorProps = 'primary' | 'secondary' | 'gray';
  type HexagonProps = {
    size?: PolygonSizeProps;
    labels?: string[];
    color?: PolygonColorProps;
  };
}
