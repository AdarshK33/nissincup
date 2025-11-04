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
import CYC from "./pages/Cyc";
// import ThankYou from "./pages/ThanyouVote";
import CashBack from "./pages/CashBackMethod";
import ThankYouParticipation from "./pages/ThankYouParticipation";
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

        // 1️ Create User API
        await logoutUser();
        const userResponse = await API.createUser();

        await store.dispatch(setUserKey(userResponse));

        navigate(ROUTES.HOME + window.location.search);
      } catch (err) {
        console.log("error", err);
      }
    };

    initializeApp();

    // Add network event listeners
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
      <Routes key={location.pathname}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.VOTE} element={<Vote />} />
        <Route path={ROUTES.CYC} element={<CYC />} />
        {/* <Route path={ROUTES.THANK_YOU} element={<ThankYou />} /> */}
        <Route path={ROUTES.REGISTRATION} element={<UserRegister />} />
        <Route
          path={ROUTES.CASHBACK}
          element={
            <PrivateRoute>
              <CashBack />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.THANK_YOU_PARTICIPATION}
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
