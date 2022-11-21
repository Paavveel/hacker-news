import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, useMemo } from 'react';
import styles from './Score.module.css';

interface IScoreProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  score: number;
  size?: 's' | 'l';
}

export const Score: FC<IScoreProps> = ({
  score,
  size = 'l',
  className,
  ...props
}) => {
  const formattedScore = useMemo(() => {
    if (score > 0) {
      return `+${score}`;
    } else if (score < 0) {
      return `-${score}`;
    } else {
      return `${score}`;
    }
  }, [score]);

  return (
    <p
      className={cn(styles.score, className, {
        [styles.positive]: score > 0,
        [styles.neutral]: score === 0,
        [styles.negative]: score < 0,
        [styles.l]: size === 'l',
        [styles.s]: size === 's',
      })}
      {...props}
    >
      {formattedScore}
    </p>
  );
};
