import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Title.module.css';

interface ITitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ children, className, ...props }) => (
  <h2 className={cn(styles.title, className)} {...props}>
    {children}
  </h2>
);
