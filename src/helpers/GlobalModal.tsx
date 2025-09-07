/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext, useContext } from "react";
import TermsConditionsPopup from "../pages/term&condition/T&C";
import ContactUs from "../pages/contact/contactUs";


export const MODAL_TYPES = {
    TERMS_CONDITIONS: "TERMS_CONDITIONS",
     PRIVACY_POLICY : "PRIVACY_POLICY",
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.TERMS_CONDITIONS]: TermsConditionsPopup,
  [MODAL_TYPES.PRIVACY_POLICY]: ContactUs,

  
};

type ContextType = {
  showModal: (
    modalType: string,
    modalProps?: any,
    onClose?: () => void
  ) => void;
  hideModal: (blockOnClose?: boolean) => void;
  store: any;
};

const initalState: ContextType = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

interface GlobalModalStore {
  modalType: string;
  modalProps: any; //TODO: add conditional props for each modal
  onClose: () => void;
}
export const GlobalModal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [store, setStore] = useState<GlobalModalStore>({
    modalType: "",
    modalProps: {},
    onClose: () => {},
  });
  const { modalType, modalProps } = store || {};

  const showModal = (
    modalType: string,
    modalProps: any = {},
    onClose: () => void = () => {}
  ) => {
    setStore({
      ...store,
      modalType,
      modalProps,
      onClose,
    });
  };

  const hideModal = (blockOnClose?: boolean) => {
    setStore({
      ...store,
      modalType: "",
      modalProps: {},
      onClose: () => {},
    });
    if (blockOnClose !== true) {
      store.onClose();
    }
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    // console.log(modalProps)
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)", // dark backdrop
        // display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        zIndex: 9,
      }}
    >
      <div  style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "12px",
          maxWidth: "600px",
          // width: "90%",
          // boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        }}>

       
      <ModalComponent id="global-modal" hideModal={hideModal} {...modalProps} />
       </div>
       </div>
    );
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
