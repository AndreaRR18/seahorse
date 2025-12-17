declare module 'react-scroll' {
  import { ComponentType, CSSProperties } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number | string;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    saveHashHistory?: boolean;
    spyThrottle?: number;
    activeClass?: string;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export interface ElementProps {
    name: string;
    id?: string;
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<ElementProps>;
  export const scroller: any;
  export const scrollSpy: any;
}
