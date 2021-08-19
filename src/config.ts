export interface UptaskConfig {
  /**
   * 服务url
   */
  url: string;

  /**
   * 权限认证Token
   */
  token: string;

  /**
   * 超时时间, 默认3秒
   */
  timeout: number;
}
