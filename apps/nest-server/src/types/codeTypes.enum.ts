export enum Codes {
  /**
   * 登录信息错误，如密码账号等
   */
  LOGIN_INFO_ERROR = 4001,

  /**
   * 密码与确认密码不一致
   */
  CONFIRM_PWD_ERROR,

  /**
   * 账号已经存在
   */
  ACCOUNT_EXISTED_ERROR,

  /**
   * 手机号已经存在
   */
  PHONENUM_EXISTED_ERROR,

  /**
   * 邮箱已经存在
   */
  EMAIL_EXISTED_ERROR,
}
