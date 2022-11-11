import cn from 'classnames';
import { formatDistanceToNow } from 'date-fns';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './Time.module.css';

interface ITimeProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  time: number;
}

export const Time: FC<ITimeProps> = ({ time, className, ...props }) => {
  return (
    <p className={cn(styles.time, className)} {...props}>
      {formatDistanceToNow(new Date(time * 1000))} ago
    </p>
  );
};
