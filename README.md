## 又拍云官网活动SDK


### 使用
```bash
npm install uptasks
```

```javascript
const { Uptask } = require('../dist/cjs');

const uptask = new Uptask({
    url: 'http://127.0.0.1:7002'.
    token: 'xxxx'，
})

// 用户完成认证任务
uptask.verified({ accountName: 'xxxx' });

```