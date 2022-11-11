import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

type THeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Header: FC<THeaderProps> = ({}) => (
  <header className={cn(styles.header)}>
    <Link to='/' className={cn(styles.logo)}>
      Hacker News
    </Link>
  </header>
);
