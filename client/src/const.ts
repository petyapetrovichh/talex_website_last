export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// ===== IMAGE CONFIGURATION =====
// Независимое управление позицией и размером каждой картинки
// width: ширина в пикселях (пропорции сохраняются автоматически)
// top/left/right/bottom: позиция в пикселях (для абсолютного позиционирования)
// offsetX: горизонтальное смещение (положительное = вправо, отрицательное = влево)
// offsetY: вертикальное смещение (положительное = вниз, отрицательное = вверх)
export const IMAGE_CONFIG = {
  // /images/00.png - "Unlock for More" (центральный телефон)
  unlockForMore: {
    width: 450,
    height: "auto",
    top: "auto",
    left: "50%",
    right: "auto",
    bottom: "0",
    transform: "translateX(-50%)",
    marginTop: "0",
    marginBottom: "-43px",
    offsetX: 0,
    offsetY: 0,
  },
  
  // /images/8.png - "Your eyesight is very valuable" (левая карточка)
  eyesight: {
    width: 300,
    height: "auto",
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    transform: "none",
    marginTop: "75px",
    offsetX: 0,
    offsetY: 0,
  },
  
  // /images/0.png - "Earnings Detail" (правая верхняя карточка)
  earningsDetail: {
    width: 300,
    height: "auto",
    top: "80px",
    left: "auto",
    right: "0",
    bottom: "auto",
    transform: "none",
    marginTop: "388px",
    marginLeft: "-123px",
    offsetX: 0,
    offsetY: 0,
  },
  
  // /11.png - "REWARDS" (правая нижняя карточка)
  rewards: {
    width: 350,
    height: "auto",
    top: "auto",
    left: "auto",
    right: "40px",
    bottom: "0",
    transform: "none",
    marginTop: "0",
    marginLeft: "-100px",
    marginBottom: "150px",
    offsetX: 0,
    offsetY: 0,
  },
  
  // /10.png - "Total Tipped" (левая нижняя карточка)
  totalTipped: {
    width: 350,
    height: "auto",
    top: "auto",
    left: "0",
    right: "auto",
    bottom: "0",
    transform: "none",
    marginTop: "0",
    marginLeft: "150px",
    offsetX: 0,
    offsetY: 0,
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
