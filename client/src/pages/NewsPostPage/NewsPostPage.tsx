import cn from 'classnames';
import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { Button, NewsPost, Typography } from '../../components';

import styles from './NewsPostPage.module.css';

export const NewsPostPage: FC = () => {
  const history = useHistory();

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

        <Button appearance='primary'>
          <span>Update</span>
        </Button>
      </div>
      <NewsPost newsId={1} />
      <div className={styles.comments}>
        <Typography size='l' weight='bold' color='secondary'>
          {10} Comments
        </Typography>
      </div>
    </>
  );
};
