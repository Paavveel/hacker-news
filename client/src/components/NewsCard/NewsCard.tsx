import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Score, Skeleton, Time, Title, Username } from '..';
import { useGetItemQuery } from '../../services/newsApi';
import styles from './NewsCard.module.css';

interface INewsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  newsId: number;
}

export const NewsCard: FC<INewsCardProps> = ({ newsId, className }) => {
  const { data, isLoading } = useGetItemQuery(newsId);

  if (isLoading) {
    return (
      <li className={cn(styles.card, styles.skeleton, className)}>
        <div className={cn(styles.skeleton_header)}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        <div className={cn(styles.skeleton_body)}>
          <Skeleton className={cn(styles.skeleton_score)} />
          <Skeleton className={cn(styles.skeleton_title)} />
        </div>
      </li>
    );
  }

  if (!data) {
    return <></>;
  }

  const { by, time, score, title, id } = data;

  return (
    <li className={cn(styles.card, className)}>
      <Link to={{ pathname: `/news/${id}` }} className={cn(styles.link)}>
        <div className={cn(styles.card_header)}>
          <Avatar name={by} />
          <Username>{by}</Username>
          <Time time={time} />
        </div>
        <div className={cn(styles.card_body)}>
          <Score score={score} />
          <Title className={styles.title}>{title}</Title>
        </div>
      </Link>
    </li>
  );
};
