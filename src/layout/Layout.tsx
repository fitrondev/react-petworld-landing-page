import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

type layoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
