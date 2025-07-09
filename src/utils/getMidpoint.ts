export interface Coordinate {
  lat: number;
  lng: number;
}

export function getMidpoint(
  coord1: Coordinate,
  coord2: Coordinate
): Coordinate {
  return {
    lat: (coord1.lat + coord2.lat) / 2,
    lng: (coord1.lng + coord2.lng) / 2,
  };
}
