import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Avatar, Score, Time, Title, Typography, Username } from '..';
import styles from './NewsPost.module.css';

interface INewsPostProps
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
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam aspernatur totam ex nesciunt porro officiis quos debitis soluta repudiandae!',
};

export const NewsPost: FC<INewsPostProps> = ({ newsId, className }) => {
  return (
    <div className={cn(styles.post, className)}>
      <div className={cn(styles.post_header)}>
        <Avatar name={newsStub.by} />
        <Username>{newsStub.by}</Username>
        <Time time={newsStub.time} />
        <a
          className={cn(styles.link)}
          href={newsStub.url}
          target='_blank'
          rel='noreferrer'
        >
          source link
        </a>
      </div>
      <div className={cn(styles.post_body)}>
        <Score score={newsStub.score} />
        <Title className={styles.title}>{newsStub.title}</Title>
        {newsStub.text && (
          <Typography
            className={cn(styles.text)}
            dangerouslySetInnerHTML={{ __html: newsStub.text }}
          />
        )}
      </div>
    </div>
  );
};
