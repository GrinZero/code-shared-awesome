import type { Api } from "../types";

export interface RegisterResult {
  id: string;
}

export const register: Api<RegisterResult> = async () => {
  return {
    status: "ok",
    data: {
      id: "xxx",
    },
  };
};
