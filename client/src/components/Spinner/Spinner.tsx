import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './Spinner.module.css';

type ISpinnerProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Spinner: FC<ISpinnerProps> = ({ className, ...props }) => (
  <div className={cn(styles.spinner, className)} {...props} />
);
