import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Score, Skeleton, Time, Title, Username } from '..';
import styles from './NewsCard.module.css';

interface INewsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  newsId: number;
}

const newsStub = {
  by: 'dhouston',
  descendants: 71,
  id: 8863,
  kids: [8952, 8876],
  score: 11,
  time: 1175714200,
  title: 'Prism. The perfect OAS (Swagger) companion.',
  type: 'story',
  url: 'http://stoplight.io/prism/',
};

export const NewsCard: FC<INewsCardProps> = ({ newsId, className }) => {
  if (false) {
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
  return (
    <li className={cn(styles.card, className)}>
      <Link to={{ pathname: `/news/${newsId}` }} className={cn(styles.link)}>
        <div className={cn(styles.card_header)}>
          <Avatar name={newsStub.by} />
          <Username>{newsStub.by}</Username>
          <Time time={newsStub.time} />
        </div>
        <div className={cn(styles.card_body)}>
          <Score score={newsStub.score} />
          <Title className={styles.title}>{newsStub.title}</Title>
        </div>
      </Link>
    </li>
  );
};
