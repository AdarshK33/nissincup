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
  CYC: "/cyc",
  ThankYou:"/thankYou",
  REGISTRATION:"/registration",
  VERIFYOTP:"/verifyOtp",
  CASHBACK:"/cashBack",




};



export const STATES = ["Kerala"];

export const DISTRICT = ["Kollam"];


