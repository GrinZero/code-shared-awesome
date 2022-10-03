import { Codes } from "src/types/codeTypes.enum";

/**
 * 统一结果生成，success代表成功，fail失败
 */
export class Result {
  code: number;

  msg: string;

  data: any;

  constructor(code: number, msg: string, data: any = []) {
    this.code = code;
    this.data = data;
    this.msg = msg;
  }

  static success(data: any = [], msg = "请求成功"): Result {
    return new Result(200, msg, data);
  }

  static fail(code: Codes, msg = "请求错误"): Result {
    return new Result(code, msg);
  }
}
