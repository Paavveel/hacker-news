import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { NewsCard, Title } from '..';
import styles from './NewsCardList.module.css';

interface INewsCardListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  posts: number[];
}

export const NewsCardList: FC<INewsCardListProps> = ({ posts }) => {
  if (!posts) {
    return <Title>No news found 😔</Title>;
  }

  return (
    <ul className={styles.list}>
      {posts.map((id) => (
        <NewsCard key={id} newsId={id} />
      ))}
    </ul>
  );
};
