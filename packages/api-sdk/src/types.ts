export type ApiResultStatus = "ok" | "error" | "empty";

export type ApiResult<T> = Promise<{
  data: T;
  status: ApiResultStatus;
  error?: string;
}>;

export type Api<T, P = void> = (params?: P) => ApiResult<T>;
