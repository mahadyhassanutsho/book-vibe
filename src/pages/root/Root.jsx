import { Outlet } from "react-router";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

export default function Root() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
