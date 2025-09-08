
import { lazy } from "react";

const  MyMenu  = lazy(() => import("../Menu/menu"));

function Home() {

  return (
    <>
    {/* <Header /> */}
    <MyMenu />
    {/* <Footer /> */}
    </>
  );
}

export default Home;
