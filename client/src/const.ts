export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// ===== IMAGE CONFIGURATION =====
// Независимое управление позицией и размером каждой картинки
// width: ширина в пикселях (пропорции сохраняются автоматически)
// top/left/right/bottom: позиция в пикселях (для абсолютного позиционирования)
export const IMAGE_CONFIG = {
  // /images/00.png - "Unlock for More" (центральный телефон)
  unlockForMore: {
    width: 450,
    height: "auto",
    top: "auto",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translateX(-50%)",
    marginTop: "-50px",
    marginBottom: "10px",
  },
  
  // /images/8.png - "Your eyesight is very valuable" (левая карточка)
  eyesight: {
    width: 400,
    height: "auto",
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    transform: "none",
  },
  
  // /images/0.png - "Earnings Detail" (правая верхняя карточка)
  earningsDetail: {
    width: 256,
    height: "auto",
    top: "80px",
    left: "auto",
    right: "0",
    bottom: "auto",
    transform: "none",
    marginTop: "-96px",
  },
  
  // /11.png - "REWARDS" (правая нижняя карточка)
  rewards: {
    width: 256,
    height: "auto",
    top: "auto",
    left: "auto",
    right: "40px",
    bottom: "0",
    transform: "none",
    marginTop: "-2px",
    marginBottom: "81px",
    marginLeft: "44px",
  },
  
  // /10.png - "Total Tipped" (левая нижняя карточка)
  totalTipped: {
    width: 256,
    height: "auto",
    top: "auto",
    left: "0",
    right: "auto",
    bottom: "80px",
    transform: "none",
  },
};

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
