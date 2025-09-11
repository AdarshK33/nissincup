import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { GlobalLoader } from "./helpers/GlobalLoader.tsx";
import { GlobalModal } from "./helpers/GlobalModal.tsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./i18n/config";
import API from "./api/index.ts";
import { setUserKey } from "./store/slices/authSlice.ts";


  API.createUser()
      .then((response) => {
        // console.log("createUser", response);
        store.dispatch(setUserKey(response));
        // logoutUser();

      })
      .catch((err) => {
        console.log("error", err);
      });


ReactDOM.createRoot(document.getElementById("root")!).render(
<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <GlobalLoader>
          <GlobalModal>
            <App />
            <ToastContainer position="bottom-center" hideProgressBar={true} />
          </GlobalModal>
        </GlobalLoader>
      </BrowserRouter>
    </Provider>
    </React.StrictMode>

);
//  <React.StrictMode></React.StrictMode>