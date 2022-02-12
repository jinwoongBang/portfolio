namespace JWComponent {
  type PolygonSizeProps = 'xs' | 'sm' | 'md' | 'lg';
  type PolygonColorProps = 'primary' | 'secondary' | 'gray';
  type HexagonProps = {
    size?: PolygonSizeProps;
    label?: string;
    color?: PolygonColorProps;
  };
}
