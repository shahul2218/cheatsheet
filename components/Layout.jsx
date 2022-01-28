import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-3 sm:px-0">{children}</main>
      <Footer />
    </>
  );
}
