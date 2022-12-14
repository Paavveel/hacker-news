import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Username.module.css';

interface IUsernameProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}

export const Username: FC<IUsernameProps> = ({
  children,
  className,
  ...props
}) => (
  <p className={cn(styles.username, className)} {...props}>
    {children}
  </p>
);
