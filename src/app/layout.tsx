import '@/styles/globals.scss';
import { Seo, Navbar, Main, Footer } from '@/components/common';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <Seo />
      </head>
      <body>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
