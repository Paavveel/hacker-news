import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react';
import styles from './Avatar.module.css';

interface IAvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
}

export const Avatar: FC<IAvatarProps> = ({ name, className, ...props }) => {
  const letter = useMemo(
    () => (name ? name.charAt(0).toUpperCase() : ''),
    [name]
  );

  return (
    <div className={cn(styles.avatar, className)} {...props}>
      {letter}
    </div>
  );
};
