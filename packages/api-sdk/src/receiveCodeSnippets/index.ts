import type { Api } from "../types";

export interface SnippetsResult {
  id: string;
}

export const receiveCodeSnippets: Api<SnippetsResult> = async () => {
  return {
    status: "ok",
    data: {
      id: "xxx",
    },
  };
};
