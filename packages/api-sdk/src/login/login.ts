import { Api } from "../types";

export interface LoginResult {
  account: string;
  token: string;
}

export const login: Api<LoginResult> = async () => {
  return {
    status: "ok",
    data: {
      account: "12345678",
      token: "hancjkdsnkjafdjksfnakjdvbkjdabvkdsbvdsakljvbsdklbsdaf",
    },
  };
};
