export const setCookie = (
  name = "",
  value = "",
  minutes = 1,
  sessionCookieFlag = false
) => {
  let expires = "";
  if (minutes && !sessionCookieFlag) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value}${expires}; path=/`;
};

/**
 * Get a cookie from the document.cookie string.
 * @param {string} name - The name of cookie needs to be retrieved.
 */
export const getCookie = (name = "") => {
  const nameEQ = name + "=";
  const ca = document?.cookie?.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const eraseCookie = (name = "") => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
};
