import cn from 'classnames';
import { Button, NewsCardList, Spinner, Title } from '../../components';
import { useGetPostsListQuery } from '../../services/newsApi';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const {
    data: posts = [],
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetPostsListQuery(void null, {
    pollingInterval: 1000 * 60,
  });

  if (!posts) {
    return <Title>No news found 😔</Title>;
  }
  if (isError) {
    return <Title>Error! Something went wrong 😔</Title>;
  }

  return (
    <>
      <div className={cn(styles.container)}>
        <Button loading={isFetching} appearance='primary' onClick={refetch}>
          <span>Update</span>
        </Button>
      </div>
      {isLoading || isFetching ? <Spinner /> : <NewsCardList posts={posts} />}
    </>
  );
};
