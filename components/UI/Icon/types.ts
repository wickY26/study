import iconPaths from "./constants";

export interface IconProps {
  color: string;
  name: keyof typeof iconPaths;
  style?: string;
  w?: number;
  h?: number;
}