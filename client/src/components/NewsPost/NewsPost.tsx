import cn from 'classnames';
import { FC } from 'react';
import { Avatar, Score, Time, Title, Typography, Username } from '..';
import { IItem } from '../../types';
import styles from './NewsPost.module.css';

export const NewsPost: FC<IItem> = ({ by, score, time, title, url, text }) => {
  return (
    <div className={cn(styles.post)}>
      <div className={cn(styles.post_header)}>
        <Avatar name={by} />
        <Username>{by}</Username>
        <Time time={time} />
        <a
          className={cn(styles.link)}
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          source link
        </a>
      </div>
      <div className={cn(styles.post_body)}>
        <Score score={score} />
        <Title className={styles.title}>{title}</Title>
        {text && (
          <Typography
            className={cn(styles.text)}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </div>
    </div>
  );
};
