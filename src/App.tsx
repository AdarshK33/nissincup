import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";
import Home from "./pages/Home/Home";
// import Counter from "./pages/Counter";
// import MyMenu from "./pages/Menu/menu";
import CYC from "./pages/Cyc/CYC";
import ThankYou from "./pages/ThanyouVote/Thankyou";
import Registration from "./pages/regis/Registration";
import OtpVerification from "./pages/verificationOtp/VerificationOtp";
import CashBack from "./pages/cashBackMethod/cashBack";

function App() {
  const { showLoader, hideLoader } = useGlobalLoaderContext();

  useEffect(() => {
    API.initialize(showLoader, hideLoader);
    // if (!isLoggedIn) {
    //   API.createUser().then((response) => {
    //     store.dispatch(setUserKey(response));
    //     if (!response.isLoggedIn && isLoggedIn) {
    //       logoutUser();
    //       navigate(ROUTES.REGISTER);
    //       toast.info("Your session has been expired");
    //     }
    //   });
    // }

    window.addEventListener("online", () => {
      API.setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      API.setIsOnline(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CYC} element={<CYC/>} />
        <Route path={ROUTES.ThankYou} element={<ThankYou/>} />
        <Route path={ROUTES.REGISTRATION} element={<Registration/>} />
        <Route path={ROUTES.VERIFYOTP} element={<OtpVerification/>} />
        <Route path={ROUTES.CASHBACK} element={<CashBack/>} />




      </Routes>
      </div>
    </>

  );
}

export default App;
