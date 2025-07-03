import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";

function SharedComponents() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedComponents;
