import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};
