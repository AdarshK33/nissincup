// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../store/hooks";
// import { setUserDetails } from "../../store/slices/userSlice";
// import { ROUTES } from "../../lib/consts";

import Header from "../Header/header";
import MyMenu from "../Menu/menu";
import ProgressBar from "../ProgressBar/progressBar";

function Home() {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  return (
    <>
    <Header />
    <MyMenu />
 <ProgressBar/>
    </>
  );
}

export default Home;
