export type WithChildren<T = {}> = T & { children?: React.ReactNode; className?: string };

export type IconSvgProps = {
  width?: string;
  height?: string;
  viewBox?: string;
};
