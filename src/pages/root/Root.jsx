import { Outlet } from "react-router";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

export default function Root() {
  return (
    <div className="mx-auto container min-h-screen flex flex-col justify-between gap-6">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
