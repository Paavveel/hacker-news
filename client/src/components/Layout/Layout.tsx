import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { Header, Main, ScrollUp } from '..';

interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <ScrollUp />
    </>
  );
};
