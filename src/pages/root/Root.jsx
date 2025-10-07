import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import ThemeContextProvider from "../../contexts/theme/ThemeContextProvider";
import LocalStorageContextProvider from "../../contexts/localStorage/LocalStorageContextProvider";
import useTheme from "../../contexts/theme/useTheme";

function ThemedToaster() {
  const { theme } = useTheme();

  return <ToastContainer theme={theme} />;
}

export default function Root() {
  return (
    <div className="mx-auto container min-h-screen flex flex-col justify-between gap-6">
      <ThemeContextProvider>
        <LocalStorageContextProvider>
          <Navbar />

          <Outlet />
        </LocalStorageContextProvider>

        <ThemedToaster />

        <Footer />
      </ThemeContextProvider>
    </div>
  );
}
