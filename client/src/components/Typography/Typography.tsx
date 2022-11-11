import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Typography.module.css';

interface ITypographyProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'special';
  weight?: 'regular' | 'bold' | 'black';
  children?: ReactNode;
}

export const Typography: FC<ITypographyProps> = ({
  size = 'm',
  color = 'primary',
  weight = 'regular',
  children,
  className,
  ...props
}) => {
  const typographyClassName = cn(styles.typography, className, {
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.special]: color === 'special',
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.l]: size === 'l',
    [styles.regular]: weight === 'regular',
    [styles.bold]: weight === 'bold',
    [styles.black]: weight === 'black',
  });

  return (
    <p className={typographyClassName} {...props}>
      {children}
    </p>
  );
};
