export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// ===== IMAGE SIZE CONFIGURATION =====
// Управление размерами 5 фото в BusinessModel
// Значение - ширина в пикселях (пропорции сохраняются автоматически)
export const IMAGE_SIZES = {
  // /images/00.png - "Unlock for More" (центральный телефон)
  unlockForMore: 320,
  
  // /images/8.png - "Your eyesight is very valuable" (левая карточка)
  eyesight: 256,
  
  // /images/0.png - "Earnings Detail" (правая верхняя карточка)
  earningsDetail: 256,
  
  // /11.png - "REWARDS" (правая нижняя карточка)
  rewards: 256,
  
  // /10.png - "Total Tipped" (левая нижняя карточка)
  totalTipped: 256,
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
