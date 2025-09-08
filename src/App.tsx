import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";

// ✅ Lazy imports
const Home = lazy(() => import("./pages/Home/Home"));
const CYC = lazy(() => import("./pages/Cyc/CYC"));
const ThankYou = lazy(() => import("./pages/ThanyouVote/Thankyou"));
const Registration = lazy(() => import("./pages/regis/Registration"));
const OtpVerification = lazy(() => import("./pages/verificationOtp/VerificationOtp"));
const CashBack = lazy(() => import("./pages/cashBackMethod/cashBack"));
const ThankYouParticipation = lazy(() => import("./pages/ThankYouParticipation/ThankYouParticipation"));


function GlobalSuspenseLoader() {
  const { showLoader, hideLoader } = useGlobalLoaderContext();

  useEffect(() => {
    showLoader();
    return () => hideLoader();
  }, [showLoader, hideLoader]);

  return <div className="loading">Loading...</div>; // optional text (won’t show if your loader is overlayed globally)
}
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

  return (
    <div className="App">
      {/* ✅ Wrap all routes with Suspense */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
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
