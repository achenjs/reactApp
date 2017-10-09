const Koa = require('koa')
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const koaBody = require('koa-body')();

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function (ctx, next) {
  console.log(ctx)
  ctx.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function (ctx, next) {
  // 参数
  const params = ctx.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)

  ctx.body = homeListData
});

router.post('/api/post', koaBody, function (ctx, next) {
  ctx.body = this.request.body
});

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(7890, () => {
  console.log('mock服务启动！')
});