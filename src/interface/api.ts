import { IpLookupData } from ".";

export interface BaseResponse {
  statusCode: number;
  message: string;
}

export interface CreateUserPayload {
  masterKey?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  ipInfo?: IpLookupData;
}

export interface CreateUserResponse extends BaseResponse {
  dataKey: string;
  userKey: string;
  isLoggedIn: number;
  brand: string;
  votes:any;
  language: string;
}

export interface RegisterPayload {
  mobile: string;
  city: string;
  uniqueCode:string;
 state:string
}

export interface VerifyOtpResponse extends BaseResponse {
  accessToken: string;
}

export interface RegisterResponse extends BaseResponse {
  accessToken: string;
}
