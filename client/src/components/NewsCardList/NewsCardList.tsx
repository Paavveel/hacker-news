import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { NewsCard } from '..';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { incrementPage, selectPage } from '../../store/slices/newsSlice';
import styles from './NewsCardList.module.css';

interface INewsCardListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  posts: number[];
}

export const NewsCardList: FC<INewsCardListProps> = ({ posts }) => {
  const listRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);

  const list = posts.slice(0, page * 10);

  useEffect(() => {
    const infinityObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting && page <= 10) {
          observer.unobserve(entry.target);
          dispatch(incrementPage());
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (listRef.current && listRef.current.lastChild) {
      infinityObserver.observe(listRef.current.lastChild);
    }

    return () => {
      if (listRef.current && listRef.current.lastChild) {
        infinityObserver.unobserve(listRef.current.lastChild);
      }
    };
  }, [listRef, page, posts]);

  return (
    <ul ref={listRef} className={styles.list}>
      {list.map((id) => (
        <NewsCard key={id} newsId={id} />
      ))}
    </ul>
  );
};
