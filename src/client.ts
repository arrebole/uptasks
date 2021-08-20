import axios, { AxiosInstance } from 'axios';
import { API } from './descriptor';
import { UptaskConfig } from './config';

export interface Params {
  accountName?: string;
  accountId?: number;
}

export class Uptask {
  constructor(options: UptaskConfig) {
    if (!options || !options.url) {
      throw new Error('MUST has constructor url');
    }

    this.httpService = axios.create({
      baseURL: options.url,
      timeout: options.timeout || 3000,
      headers: {
        'x-token': options.token || '',
      },
    });
  }

  private readonly httpService: AxiosInstance;

  /**
   * 任务: 通过实名认证（绑定手机)
   */
  @API()
  verified(params: Params = {}) {
    return this.httpService.post('/tasks', {
      event_id: 'Verified',
      ...params,
    });
  }

  /**
   * 任务: 创建任意一个服务
   */
  @API()
  createService(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'CreateService',
      ...params,
    });
  }

  /**
   * 任务: 账单结算金额＞1元 or 消费 1 元
   */
  @API()
  expendOne(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ExpendOne',
      ...params,
    });
  }

  /**
   * 任务: 关注微信公众号
   */
  @API()
  followWeChat(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'FollowWeChat',
      ...params,
    });
  }

  /**
   * 任务: 关注微博官方号
   */
  @API()
  followWeibo(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'FollowWeibo',
      ...params,
    });
  }

  /**
   * 任务: 申请一张 SSL 证书
   */
  @API()
  applySSL(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ApplySSL',
      ...params,
    });
  }

  /**
   * 任务: 创建一个操作员（并授权服务）
   */
  @API()
  createOperator(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'CreateOperator',
      ...params,
    });
  }

  /**
   * 任务: 购买任意资源包（短信/一键登录/视频转码包）
   */
  @API()
  buyResource(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'BuyResource',
      ...params,
    });
  }

  /**
   * 任务: 加又小拍微信好友
   */
  @API()
  addUpyunWechat(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'AddUpyunWechat',
      ...params,
    });
  }

  /**
   * 任务: 关注又拍云知乎号
   */
  @API()
  followZhihu(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'FollowZhihu',
      ...params,
    });
  }

  /**
   * 任务: 单次充值大于 100 元
   */
  @API()
  singleBigRecharge(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'SingleBigRecharge',
      ...params,
    });
  }

  /**
   * 任务: 邀请新用户一名
   */
  @API()
  inviteNewUsers(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'InviteNewUsers',
      ...params,
    });
  }

  /**
   * 任务: 充值10元及以上（周任务）
   */
  @API()
  recharge(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'Recharge',
      ...params,
    });
  }

  /**
   * 任务: 邀请好友助力（周任务）
   */
  @API()
  friendsHelp(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'FriendsHelp',
      ...params,
    });
  }

  /**
   * 任务: 体验 WebP 功能一次
   */
  @API()
  useWebP(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'UseWebP',
      ...params,
    });
  }

  /**
   * 任务: 进行一次网站 HTTPS 检测
   */
  @API()
  checkSSL(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'CheckSSL',
      ...params,
    });
  }

  /**
   * 任务: 查看站内信
   */
  @API()
  viewStationMessag(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewStationMessag',
      ...params,
    });
  }

  /**
   * 任务: 查看产品文档
   */
  @API()
  viewProductDoc(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewProductDoc',
      ...params,
    });
  }

  /**
   * 任务: 浏览 SSL 证书页面（15s)
   */
  @API()
  viewSSLCertificat(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewSSLCertificat',
      ...params,
    });
  }

  /**
   * 任务: 浏览移动 App 解决方案页面15s
   */
  @API()
  viewAppSolution(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewAppSolution',
      ...params,
    });
  }

  /**
   * 任务: 浏览小拍日志 15 秒
   */
  @API()
  viewUpyunLog(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewUpyunLog',
      ...params,
    });
  }

  /**
   * 任务: 浏览OpenTalk 15 秒
   */
  @API()
  viewOpenTalk(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewOpenTalk',
      ...params,
    });
  }

  /**
   * 任务: 查看体验又拍云工具
   */
  @API()
  viewSdkTools(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewSdkTools',
      ...params,
    });
  }

  /**
   * 任务: 了解ftp与外链说明
   */
  @API()
  viewKnowledgeBase(params: Params) {
    return this.httpService.post('/tasks', {
      event_id: 'ViewKnowledgeBase',
      ...params,
    });
  }
}
