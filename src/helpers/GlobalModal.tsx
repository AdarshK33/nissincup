/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext, useContext } from "react";
import TermsConditions from "../pages/term&condition/T&C";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import CustomerSupport from "../pages/customerSupport/customerSupport";

export const MODAL_TYPES = {
  TERMS_CONDITIONS: "TERMS_CONDITIONS",
  PRIVACY_POLICY: "PRIVACY_POLICY",
  CUSTOMER_SUPPORT: "CUSTOMER_SUPPORT",
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.TERMS_CONDITIONS]: TermsConditions,
  [MODAL_TYPES.PRIVACY_POLICY]: PrivacyPolicy,
  [MODAL_TYPES.CUSTOMER_SUPPORT]: CustomerSupport,
};

type ContextType = {
  showModal: (
    modalType: string,
    modalProps?: any,
    onClose?: () => void,
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
    onClose: () => void = () => {},
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
      <div id="global-modal">
        <ModalComponent hideModal={hideModal} {...modalProps} />
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
