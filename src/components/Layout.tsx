import Header from 'components/Header';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props): JSX.Element => (
  <div className="max-w-2xl font-body text-sm">
    <header>
      <title>** GRATIS OPTREDENS, VERNISSAGES, TRYOUTS, LEZINGEN, FESTIVALS IN GENT **</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </header>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
