import "./App.scss";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";
import PrivateRoute from "./helpers/PrivateRoute";

// Normal imports
import Home from "./pages/Home";
import Vote from "./pages/Menu/menu";
import CYC from "./pages/Cyc/CYC";
import ThankYou from "./pages/ThanyouVote/Thankyou";
import Registration from "./pages/Registration/Registration";
import OtpVerification from "./pages/VerificationOtp/VerificationOtp";
import CashBack from "./pages/CashBackMethod/cashBack";
import ThankYouParticipation from "./pages/ThankYouParticipation/ThankYouParticipation";

function App() {
  const location = useLocation();
  const { showLoader, hideLoader } = useGlobalLoaderContext();

  useEffect(() => {
    API.initialize(showLoader, hideLoader);

    window.addEventListener("online", () => {
      API.setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      API.setIsOnline(false);
    });
  }, [showLoader, hideLoader]);

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
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={ROUTES.VERIFYOTP} element={<OtpVerification />} />
        <Route
          path={ROUTES.CASHBACK}
          element={
          
              <CashBack />
        
          }
        />
        <Route
          path={ROUTES.ThankYouParticipation}
          element={
           
              <ThankYouParticipation />
         
          }
        />
      </Routes>
    </div>
  );
}

export default App;
