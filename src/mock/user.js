import { mock, Random } from 'mockjs' // 导出随机函数

export const user = (req) => {
  let testArr = []
  for(let i = 0; i < 5; i++) {
    let xing = Random.cfirst()
    let ming = Random.clast()
    let name = xing + ming
    testArr.push({
      xing, ming, name
    })
  }
  return {
    code: 200,
    data: {
      testArr,
      list: mock({'list|3': [{
        'testId|+1': 1,
        '姓': '@cfirst',
        '名': '@clast',
      }]}),
      token: Random.guid(),
      message: '登录成功'
    }
  }
}
