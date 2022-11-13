import cn from 'classnames';
import { FC, useState } from 'react';
import { Avatar, Button, Skeleton, Time, Typography, Username } from '..';
import { useGetItemQuery } from '../../services/newsApi';
import styles from './Comment.module.css';

export const Comment: FC<any> = ({ id, kids, count, root = false }) => {
  const [showChildren, setShowChildren] = useState(!root);

  const { data, isLoading } = useGetItemQuery(id);

  const toggleShowChildren = () => {
    setShowChildren((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className={cn(styles.comment)}>
        <div className={cn(styles.body)}>
          <div className={cn(styles.comment_head, styles.skeleton_header)}>
            <Skeleton />
          </div>
          <div className={cn(styles.skeleton_body)}>
            <Skeleton className={styles.skeleton_row_a} />
            <Skeleton className={styles.skeleton_row_a} />
            <Skeleton className={styles.skeleton_row_b} />
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return <></>;
  }

  const { by, time, text } = data;

  return (
    <div className={cn(styles.comment)}>
      <div
        className={cn(styles.body, {
          [styles.deleted]: !text,
        })}
      >
        <div className={cn(styles.comment_head)}>
          <Avatar name={by} />
          <Username>{by}</Username>
          <Time time={time} />
        </div>
        {text ? (
          <Typography dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          <Typography color='secondary'>The comment was deleted...</Typography>
        )}
      </div>

      {count > 0 && !showChildren && (
        <Button
          appearance='ghost'
          className={cn(styles.toggle_children, {
            [styles.toggled]: showChildren || count === 0,
          })}
          onClick={toggleShowChildren}
        >{`Show ${count} replies`}</Button>
      )}

      <div className={cn(styles.comment_children)}>
        {showChildren &&
          kids?.map((item: any) => <Comment key={item.id} {...item} />)}
        {count > 0 && showChildren && (
          <div
            className={cn(styles.collapsing_area)}
            onClick={toggleShowChildren}
          >
            <div className={cn(styles.line)} />
          </div>
        )}
      </div>
    </div>
  );
};
