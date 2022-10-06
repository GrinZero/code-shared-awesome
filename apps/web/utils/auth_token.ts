export type TokenType = string | null;

/**
 * 存储token
 * @param token
 */
export function setToken(token: string) {
  window.localStorage.setItem("code_token", token);
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
