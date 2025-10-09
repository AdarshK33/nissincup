import {
  BaseResponse,
  CreateUserPayload,
  CreateUserResponse,
  GetVoteResponse,
  RegisterPayload,
  RegisterResponse,
  VerifyOtpResponse,
} from "../interface/api";
import {
  authorisedEncrytedApiCall,
  decryptData,
  sendEncrytedData,
} from "./encrypt";
import {
  defaultCatch,
  fetchHandler,
  fetchHandlerText,
  responseHelper,
} from "./utils";
import { getCookie } from "../lib/utils";
import { store } from "../store/store";
import { setIpDetails } from "../store/slices/ipInfoSlice";
import { IpLookupData } from "../interface";

const jsonHeaders: { [key: string]: string } = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

class APIS {
  private showLoader: (loaderTitle?: string | undefined) => void = () => {};
  private hideLoader: (loaderTitle?: string | undefined) => void = () => {};
  private static instance: APIS | null = null;
  public instanceId = "TEST";
  // private static activityTimer: NodeJS.Timeout;
  private isOnline = true;

  constructor(instanceId: string) {
    this.instanceId = instanceId;
    // document.addEventListener("click", this.logActivity);
  }

  static getInstance() {
    return APIS.instance || (APIS.instance = new APIS("TEST NEW 1"));
  }

  setIsOnline(val: boolean) {
    this.isOnline = val;
  }
  getIsOnline() {
    return this.isOnline;
  }

  initialize(
    showLoader: (loaderTitle?: string | undefined) => void,
    hideLoader: () => void,
  ) {
    this.showLoader = showLoader;
    this.hideLoader = hideLoader;
  }

  async createUser(): Promise<CreateUserResponse> {
    const payload: CreateUserPayload = {};
    const state = store.getState();
    const { accessToken } = state.auth;
    const masterKey = getCookie("thumsup_and_sprite-id");
    if (masterKey) {
      payload.masterKey = masterKey;
    }
    const headers = jsonHeaders;
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("utm_source")) {
      payload.utm_source = urlParams.get("utm_source");
    }
    if (urlParams.get("utm_medium")) {
      payload.utm_medium = urlParams.get("utm_medium");
    }
    if (urlParams.get("utm_campaign")) {
      payload.utm_campaign = urlParams.get("utm_campaign");
    }
    if (urlParams.get("utm_content")) {
      payload.utm_content = urlParams.get("utm_content");
    }
    if (urlParams.get("utm_term")) {
      payload.utm_term = urlParams.get("utm_term");
    }

    try {
      const ipInfo = await this.ipLookup();
      if (ipInfo) {
        payload.ipInfo = ipInfo;
        store.dispatch(setIpDetails(ipInfo));
      }
    } catch (error) {
      console.log(error);
    }
    this.showLoader("Starting session...");
    return fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users
`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      },
    )
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }
  private ipLookup(): Promise<IpLookupData> {
    this.showLoader("Setting up...");
    return fetch("https://pro.ip-api.com/json?key=W3uwTeHN4EN2hAd")
      .then(fetchHandler)
      .then((response) => response.data)
      .finally(this.hideLoader);
  }

  

castVote(): Promise<BaseResponse> {
    this.showLoader("Cast vote...");
    return sendEncrytedData("/users/castVote/",)
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }


    getVote(): Promise<GetVoteResponse > {
    this.showLoader("...");
    return sendEncrytedData("/users/getVotes/")
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  addVote(vote: string): Promise<BaseResponse> {
    this.showLoader("Sending vote...");
    return sendEncrytedData("/users/addVote/", { vote })
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  climeClick(): Promise<BaseResponse> {
    this.showLoader("Claim your cashback...");
    return sendEncrytedData("/users/climeClick/")
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }


  getState(): Promise<BaseResponse> {
    this.showLoader("State...");
    return sendEncrytedData("/users/getState/")
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  fetchCity(state: string): Promise<BaseResponse> {
    this.showLoader("City...");
    return sendEncrytedData("/users/getCities/", { state })
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  sendOTP(mobile: string): Promise<BaseResponse> {
    this.showLoader("Sending OTP...");
    return sendEncrytedData("users/getOTP/", { mobile })
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }
  verifyOTP(otp: string): Promise<VerifyOtpResponse> {
    this.showLoader("Verifying OTP...");
    return sendEncrytedData("/users/verifyOtp/", { otp })
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  resendOTP(): Promise<BaseResponse> {
    this.showLoader("Resend OTP...");
    return sendEncrytedData("/users/resendOtp/", {})
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  register(payload: RegisterPayload): Promise<RegisterResponse> {
    // console.log(payload);
    this.showLoader("Saving Registration details...");
    return sendEncrytedData("/users/register/", payload)
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  authorisedApi(url: any, payload: any): Promise<BaseResponse> {
    // console.log(payload);
    this.showLoader();
    return authorisedEncrytedApiCall(url, payload)
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  async addUpi(payload: any): Promise<BaseResponse> {
    this.showLoader("Submitting UPI...");
    return authorisedEncrytedApiCall("/users/addUpi/", payload)
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }

  async addAmazon(): Promise<BaseResponse> {
    this.showLoader("Submitting Amazon...");
    return authorisedEncrytedApiCall("/users/addAmazon/")
      .then(fetchHandlerText)
      .then(decryptData)
      .then(responseHelper)
      .catch(defaultCatch)
      .finally(this.hideLoader);
  }
}
const API = APIS.getInstance();

export default API;
