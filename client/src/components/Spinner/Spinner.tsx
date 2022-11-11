import cn from 'classnames';
import { FC } from 'react';
import styles from './Spinner.module.css';

export const Spinner: FC = () => <div className={cn(styles.spinner)} />;
