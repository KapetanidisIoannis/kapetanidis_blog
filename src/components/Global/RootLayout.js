import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
