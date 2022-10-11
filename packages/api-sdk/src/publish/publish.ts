import type { Api } from "../types";
interface PublishResult {
  info: string;
}
interface PublishParams {
  title: string;
  content: string;
  brief_intro: string;
  tags: string[];
}
export const PublishCode: Api<PublishResult, PublishParams> = async (param) => {
  return {
    status: "ok",
    data: {
      info: "success",
    },
  };
};
