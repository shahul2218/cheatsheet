import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="md:w-9/12 sm:w-10/12 w-full px-3 sm:px-0 mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
