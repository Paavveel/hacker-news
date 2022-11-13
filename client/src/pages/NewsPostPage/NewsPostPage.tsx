import cn from 'classnames';
import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button,
  Comment,
  NewsPost,
  Spinner,
  Title,
  Typography,
} from '../../components';
import { useGetPostWithCommentsQuery } from '../../services/newsApi';
import { IQuery } from '../../types';

import styles from './NewsPostPage.module.css';

export const NewsPostPage: FC = () => {
  const history = useHistory();
  const { id } = useParams<IQuery>();

  const { data, isLoading, isFetching, isError, refetch } =
    useGetPostWithCommentsQuery(parseInt(id));

  if (!data) {
    return <Spinner />;
  }
  if (isError) {
    return <Title>Error! Something went wrong 😔</Title>;
  }

  const { kids = [], descendants = 0 } = data;

  return (
    <>
      <div className={cn(styles.container)}>
        <Button appearance='ghost' onClick={() => history.goBack()}>
          <IoIosArrowBack />
          <Typography
            color='special'
            size='l'
            weight='bold'
            className={styles.label}
          >
            Back to the news
          </Typography>
        </Button>

        <Button loading={isFetching} appearance='primary' onClick={refetch}>
          <span>Update</span>
        </Button>
      </div>
      <NewsPost {...data} />
      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <div className={styles.comments}>
          <Typography size='l' weight='bold' color='secondary'>
            {descendants} Comments
          </Typography>
          {kids.map((item: any) => (
            <Comment key={item.id} {...item} root />
          ))}
        </div>
      )}
    </>
  );
};
