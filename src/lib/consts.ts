export enum LANGUAGE {
  DEFAULT = "default",
  ENGLISH = "en",
  KANNADA = "ka",
  HINDI = "hi",
  MARATHI = "ma",
  BENGALI = "be",
  // HINDI = "hi",
  // MARATHI = "mr",
  // TAMIL = "ta",
  TELUGU = "ta",
  // BENGALI = "bn",
  // KANNADA = "kn",
  // MALAYALAM = "ml",
}

// List used for drop down
export const LANGUAGES: Record<LANGUAGE, string> = {
  [LANGUAGE.DEFAULT]: "Select language",
  [LANGUAGE.ENGLISH]: "EN",
  [LANGUAGE.KANNADA]: "ಕನ್ನಡ",
  [LANGUAGE.HINDI]: "हिंदी",
  [LANGUAGE.MARATHI]: "मराठी",
  [LANGUAGE.BENGALI]: "বাঙ্গালি",
  // [LANGUAGE.HINDI]: "हिन्दी",
  // [LANGUAGE.MARATHI]: "मराठी",
  // [LANGUAGE.KANNADA]: "ಕನ್ನಡ",
  [LANGUAGE.TELUGU]: "తెలుగు",
  // [LANGUAGE.TELUGU]: "TE",
  // [LANGUAGE.TAMIL]: "தமிழ்",
  // [LANGUAGE.BENGALI]: "বাংলা",
};

export const ROUTES = {
  HOME: "/",
  VOTE: "/vote",
  CYC: "/cyc",
  THANK_YOU: "/thank-you",
  REGISTRATION: "/registration-form",
  VERIFY_OTP: "/Otp",
  CASHBACK: "/cashback",
  THANK_YOU_PARTICIPATION: "/thank-you-participation",
};

export const STATE = [{ value: "Kerala", label: "Kerala" }];

export const DISTRICTS: Record<string, { value: string; label: string }[]> = {
  Kerala: [
    { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
    { value: "Kollam", label: "Kollam" },
    { value: "Pathanamthitta", label: "Pathanamthitta" },
    { value: "Alappuzha", label: "Alappuzha" },
    { value: "Kottayam", label: "Kottayam" },
    { value: "Idukki", label: "Idukki" },
    { value: "Ernakulam", label: "Ernakulam" },
    { value: "Thrissur", label: "Thrissur" },
    { value: "Palakkad", label: "Palakkad" },
    { value: "Malappuram", label: "Malappuram" },
    { value: "Kozhikode", label: "Kozhikode" },
    { value: "Wayanad", label: "Wayanad" },
    { value: "Kannur", label: "Kannur" },
    { value: "Kasaragod", label: "Kasaragod" },
  ],
};
