export type TokenType = string | null;

/**
 * 存储token
 * @param token
 */
export function setToken(token: string) {
  window.localStorage.setItem("code_token", token);
  window.localStorage.setItem("code_login_status", "1");
  console.log(token);
}

/**
 * 获取token
 * @returns token
 */
export function getToken(): TokenType {
  const token: TokenType = window.localStorage.getItem("code_token");
  return token;
}

export function getLoginStatus(): boolean {
  const isLogin = window.localStorage.getItem("code_login_status");
  return isLogin === "1" ? true : false;
}

export function clearLoginStatus(): void {
  console.log(1);

  window.localStorage.clear();
}
