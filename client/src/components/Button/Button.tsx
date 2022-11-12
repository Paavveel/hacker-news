import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from './Button.module.css';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'primary' | 'ghost';
  loading?: boolean;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  children,
  appearance,
  loading = false,
  className,
  ...props
}) => (
  <button
    disabled={loading}
    className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
      [styles.disabled]: loading,
    })}
    {...props}
  >
    {loading && <div className={styles.loading} />}
    {children}
  </button>
);
