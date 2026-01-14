
export type InterventionType = 'operation' | 'coup';

export interface Intervention {
  id: string;
  country: string;
  years: number[];
  type: InterventionType;
  description: string;
  expandedDescription?: string;
  coordinates: [number, number]; // [lat, lng]
}

export interface MapMarkerProps {
  intervention: Intervention;
  isFocused: boolean;
  onClick: (id: string) => void;
}
