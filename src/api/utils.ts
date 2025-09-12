/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-plusplus */
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { logoutUser } from "../lib/utils";
import API from ".";

export const fetchHandler = (response: any): Promise<any> => {
  const defaultResp = {
    status: response.status,
    statusText: response.statusText,
    ok: response.ok,
  };
  if (response.ok) {
    return response
      .json()
      .then((data: any) => {
        // the status was ok and there is a json body
        return Promise.resolve({ data, rawResp: response, ...defaultResp });
      })
      .catch((err: any) => {
        // the status was ok but there is no json body
        return Promise.resolve({
          data: err,
          rawResp: response,
          ...defaultResp,
        });
      });
  } else {
    return response
      .json()
      .catch((err: any) => {
        // the status was not ok and there is no json body
        return Promise.resolve({
          rawResp: response,
          data: err,
          ...defaultResp,
        });
      })
      .then((json: any) => {
        // the status was not ok but there is a json body
        return Promise.resolve({
          rawResp: response,
          data: json,
          ...defaultResp,
        });
      });
  }
};

export const fetchHandlerText = (response: any): Promise<any> => {
  const defaultResp = {
    status: response.status,
    statusText: response.statusText,
    ok: response.ok,
  };
  if (response.ok) {
    return response
      .text()
      .then((data: any) => {
        // the status was ok and there is a data
        return Promise.resolve({ data, rawResp: response, ...defaultResp });
      })
      .catch((err: any) => {
        // the status was ok but there is no data
        return Promise.resolve({
          data: err,
          rawResp: response,
          ...defaultResp,
        });
      });
  } else {
    return response
      .text()
      .catch((err: any) => {
        // the status was not ok and there is no data
        return Promise.resolve({
          rawResp: response,
          data: err,
          ...defaultResp,
        });
      })
      .then((text: any) => {
        // the status was not ok but there is a data
        return Promise.resolve({
          rawResp: response,
          data: text,
          ...defaultResp,
        });
      });
  }
};

export const responseHelper = (response: any): Promise<any> => {
  const { statusCode } = response.data;
  if (statusCode >= 200 && statusCode < 300) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response.data);
  }
};

export enum ERROR_IDS {
  INVALID_MOBILE = "mobile",
  INVALID_DISTRICT = "district",
  INVALID_NAME = "name",
  INVALID_EMAIL = "email",
  INVALID_STATE = "state",
  INVALID_CODE = "code",
  INVALID_UNIQUE_CODE = "",
  INVALID_OUTLET = "outlet",
  INVALID_INVOICE_NUMBER = "invoiceNumber",
  INVALID_INVOICE_ONE = "invoice1",
  INVALID_INVOICE_TWO = "invoice2",
  INVALID_OTP = "otp",
  INVALID_UPI = "upiId",
  DEFAULT_ERROR = "error",
  INVALID_ADDRESS1 = "address1",
  INVALID_ADDRESS2 = "address2",
  INVALID_CITY = "city",
  INVALID_PAN = "pan",
  INVALID_PAN_NUMBER = "panNumber",
  INVALID_PINCODE = "pincode",
}

// Default catch function when API fails
export const defaultCatch = (err: any): Promise<any> => {
  const ignoreMessageKeys = [...Object.values(ERROR_IDS)];
  // console.log("ignoreMessageKeys", ignoreMessageKeys);
  const { statusCode, message, messageId = "" } = err;
  const isOnline = API.getIsOnline();
  if (typeof err === "string") {
    toast.error(
      isOnline
        ? "Something went wrong, try again after some time"
        : "You are offline",
    );
  } else if (!ignoreMessageKeys.includes(messageId)) {
    if (message === "Failed to fetch") {
      toast.error(
        isOnline
          ? "Please check your network and try again"
          : "You are offline",
      );
    } else if (statusCode === 401) {
      logoutUser();
      toast.info("Your session has been expired");
    } else {
      toast.error(message || "Something went wrong, try again after some time");
    }
  }
  return Promise.reject(err);
};

export const noerrCatch = (err: any): Promise<any> => {
  const ignoreMessageKeys = [...Object.values(ERROR_IDS)];
  // console.log("ignoreMessageKeys", ignoreMessageKeys);
  const { statusCode, message, messageId = "" } = err;
  const isOnline = API.getIsOnline();
  if (typeof err === "string") {
    toast.error(
      isOnline
        ? "Something went wrong, try again after some time"
        : "You are offline",
    );
  } else if (!ignoreMessageKeys.includes(messageId)) {
    if (message === "Failed to fetch") {
      toast.error(
        isOnline
          ? "Please check your network and try again"
          : "You are offline",
      );
    } else if (statusCode === 401) {
      logoutUser();
      toast.info("Your session has been expired");
    } else {
      console.log(err);
    }
  }
  return Promise.reject(err);
};
