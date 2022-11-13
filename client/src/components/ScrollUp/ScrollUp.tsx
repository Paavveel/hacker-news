import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import styles from './ScrollUp.module.css';

type IScrollUpProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ScrollUp: FC<IScrollUpProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={cn(styles.container)} onClick={scrollToTop}>
      <BiUpArrowAlt className={cn(styles.icon)} />
    </button>
  );
};
