// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../store/hooks";
// import { setUserDetails } from "../../store/slices/userSlice";
// import { ROUTES } from "../../lib/consts";

import Footer from "../Footer/footer";
import Header from "../Header/header";
import MyMenu from "../Menu/menu";

function Home() {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  return (
    <>
    <Header />
    <MyMenu />
    <Footer />
    </>
  );
}

export default Home;
