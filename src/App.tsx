import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalLoaderContext } from "./helpers/GlobalLoader";
import API from "./api";
import { ROUTES } from "./lib/consts";
import Home from "./pages/Home";
import Counter from "./pages/Counter";

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
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.COUNTER} element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
