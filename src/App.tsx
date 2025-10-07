import "./App.scss";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, Suspense, lazy, useLayoutEffect } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";
import PrivateRoute from "./helpers/PrivateRoute";
const GlobalSuspenseLoader = lazy(() => import("./helpers/UiLoader"));

// import PrivateRoute from "./helpers/PrivateRoute";

const Home = lazy(() => import("./pages/Home"));

const Vote = lazy(() => import("./pages/Menu/menu"));
const CYC = lazy(() => import("./pages/Cyc/CYC"));
const ThankYou = lazy(() => import("./pages/ThanyouVote/Thankyou"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const OtpVerification = lazy(
  () => import("./pages/VerificationOtp/VerificationOtp"),
);
const CashBack = lazy(() => import("./pages/CashBackMethod/cashBack"));
const ThankYouParticipation = lazy(
  () => import("./pages/ThankYouParticipation/ThankYouParticipation"),
);

function App() {
  const location = useLocation();
   const navigate = useNavigate();
  const { showLoader, hideLoader } = useGlobalLoaderContext();

  useEffect(() => {
    API.initialize(showLoader, hideLoader);

    window.addEventListener("online", () => {
      API.setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      API.setIsOnline(false);
    });

  navigate("/", { replace: true });


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    // console.log("scroll to top on route change:");
  }, [location.pathname]);

  return (
    <div className="App">
      <Suspense fallback={<GlobalSuspenseLoader />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />

          <Route path={ROUTES.VOTE} element={<Vote />} />
          <Route path={ROUTES.CYC} element={<CYC />} />
          <Route path={ROUTES.ThankYou} element={<ThankYou />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.VERIFYOTP} element={<OtpVerification />} />
          <Route path={ROUTES.CASHBACK} element={
             <PrivateRoute>
   <CashBack />
             </PrivateRoute>
         
            } />
          <Route
            path={ROUTES.ThankYouParticipation}
            element={
            <PrivateRoute>
   <ThankYouParticipation />
            </PrivateRoute>

          
         
             
            
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
