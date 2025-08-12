export type WithChildren<T = {}> = T & { children?: React.ReactNode };

export type IconSvgProps = {
  width?: string;
  height?: string;
  viewBox?: string;
};
