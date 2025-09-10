import "./App.scss";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy, useLayoutEffect } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";
import GlobalSuspenseLoader from "./helpers/UiLoader";

const Home = lazy(() => import("./pages/Menu/menu"));
const CYC = lazy(() => import("./pages/Cyc/CYC"));
const ThankYou = lazy(() => import("./pages/ThanyouVote/Thankyou"));
const Registration = lazy(() => import("./pages/regis/Registration"));
const OtpVerification = lazy(
  () => import("./pages/verificationOtp/VerificationOtp"),
);
const CashBack = lazy(() => import("./pages/cashBackMethod/cashBack"));
const ThankYouParticipation = lazy(
  () => import("./pages/ThankYouParticipation/ThankYouParticipation"),
);

function App() {
  const { showLoader, hideLoader } = useGlobalLoaderContext();

  useEffect(() => {
    API.initialize(showLoader, hideLoader);

    window.addEventListener("online", () => {
      API.setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      API.setIsOnline(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    console.log("scroll to top on route change:");
  }, [location.pathname]);

  return (
    <div className="App">
      <Suspense fallback={<GlobalSuspenseLoader />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CYC} element={<CYC />} />
          <Route path={ROUTES.ThankYou} element={<ThankYou />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.VERIFYOTP} element={<OtpVerification />} />
          <Route path={ROUTES.CASHBACK} element={<CashBack />} />
          <Route
            path={ROUTES.ThankYouParticipation}
            element={<ThankYouParticipation />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
