import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './Skeleton.module.css';

interface ISkeletonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Skeleton: FC<ISkeletonProps> = ({ className, ...props }) => (
  <div className={cn(className, styles.skeleton)} {...props} />
);
