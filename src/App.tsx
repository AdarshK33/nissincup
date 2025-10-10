import "./App.scss";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";
 import PrivateRoute from "./helpers/PrivateRoute";

// Normal imports
import Home from "./pages/Home";
import Vote from "./pages/SelectVote";
import CYC from "./pages/Cyc/CYC";
import ThankYou from "./pages/ThanyouVote/Thankyou";
// import Registration from "./pages/Registration/Registration";
// import OtpVerification from "./pages/VerificationOtp/VerificationOtp";
import CashBack from "./pages/CashBackMethod/cashBack";
import ThankYouParticipation from "./pages/ThankYouParticipation/ThankYouParticipation";
import { logoutUser } from "./lib/utils";
import { setUserKey } from "./store/slices/authSlice";
import { store } from "./store/store";

import { useNavigate } from "react-router-dom";
import UserRegister from "./pages/UserReg";

function App() {
  const location = useLocation();
    const navigate = useNavigate();
  const { showLoader, hideLoader } = useGlobalLoaderContext();




  useEffect(() => {
  const initializeApp = async () => {
    try {
      API.initialize(showLoader, hideLoader);

      // 1️⃣ Create User
          await  logoutUser();
      const userResponse = await API.createUser();

     await store.dispatch(setUserKey(userResponse));

     // navigate(ROUTES.HOME + window.location.search);
    } catch (err) {
      console.log("error", err);
    }
  };

  initializeApp();

  // 4️⃣ Add network event listeners
  const handleOnline = () => API.setIsOnline(true);
  const handleOffline = () => API.setIsOnline(false);

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

}, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.VOTE} element={<Vote />} />
        <Route path={ROUTES.CYC} element={<CYC />} />
        <Route path={ROUTES.ThankYou} element={<ThankYou />} />
        <Route path={ROUTES.REGISTRATION} element={<UserRegister/>} />
        {/* <Route path={ROUTES.VERIFYOTP} element={<OtpVerification />} /> */}
        <Route
          path={ROUTES.CASHBACK}
          element={
            // <PrivateRoute>
              <CashBack />
            //  </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.ThankYouParticipation}
          element={
           <PrivateRoute>
              <ThankYouParticipation />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
