import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './Footer.module.css';

type IFooterProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Footer: FC<IFooterProps> = () => {
  return (
    <footer className={cn(styles.footer)}>
      by
      <a
        href='https://github.com/Paavveel'
        target='_blank'
        rel='noopener noreferrer'
      >
        Paavveel
      </a>
    </footer>
  );
};
