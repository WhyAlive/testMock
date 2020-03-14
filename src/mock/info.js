import { mock } from 'mockjs'
export const detailInfo = () => {
  return {
    code: '我自己编的',
    message: '你猜响应成功没有',
    data: {
      list: mock({
        'info|5': [{
          'id|+1': 1,
          'date': '@date(yyyy-MM-dd)',
          'time': '@time(A HH:mm:ss)',
          'now': '@now()',
          'hex': '@hex()',
          'rgb': '@rgb()',
          'rgba': '@rgba()',
          'cparagraph': '@cparagraph(1)',
          'cname': '@cname()',
          'url': '@url(http)',
          'email': '@email(qq.com)',
          'county': '@county(true)',
        }]
      })
    }
  }
}
