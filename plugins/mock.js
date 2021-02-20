import Mock from 'mockjs'
import JSEncrypt from 'jsencrypt'

const PUBLIC_KEK = '-----BEGIN PUBLIC KEY-----' +
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN' +
  'FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76' +
  'xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4' +
  'gwQco1KRMDSmXSMkDwIDAQAB' +
  '-----END PUBLIC KEY-----'

const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----' +
  'MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ' +
  'WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR' +
  'aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB' +
  'AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv' +
  'xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH' +
  'm7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd' +
  '8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF' +
  'z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5' +
  'rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM' +
  'V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe' +
  'aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil' +
  'psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz' +
  'uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876' +
  '-----END PRIVATE KEY-----'

Mock.mock('/api/get_public_key', options => {
  const res = {
    errcode: 0,
    errmsg: 'ok',
    data: PUBLIC_KEK
  }
  return res
})

Mock.mock('/api/login', 'post', options => {
  const body = options.body
  const { account, password } = JSON.parse(body)
  const decrypt = new JSEncrypt()
  decrypt.setPrivateKey(PRIVATE_KEY)
  const decryptedPassword = decrypt.decrypt(password)
  let res
  if (account === 'admin' && decryptedPassword === 'a123456') {
    res = {
      errcode: 0,
      errmsg: 'ok'
    }
  } else {
    res = {
      errcode: -1,
      errmsg: '账号或密码错误'
    }
  }
  return res
})

export function mock(config) {
  const url = config.url
  const params = config.params
  let res
  switch (url) {
    case '/api/get_article': {
      const { id } = params
      if (id === 'YdnahSombc9oqyr3xcbdcE') {
        res = {
          errcode: 0,
          errmsg: 'ok',
          data: {
            title: '蒹葭',
            description: '《秦风·蒹葭》是中国古代现实主义诗集《诗经》中的一首诗。此诗曾被认为是用来讥刺秦襄公不能用周礼来巩固他的国家，或惋惜招引隐居的贤士而不可得。现在一般认为这是一首情歌，写追求所爱而不及的惆怅与苦闷。全诗三章，重章叠唱，后两章只是对首章文字略加改动而成，形成各章内部韵律协和而各章之间韵律参差的效果，也造成了语义的往复推进。...',
            keywords: '秦风·蒹葭 国风·秦风·蒹葭 诗经·蒹葭 诗·秦风·蒹葭 诗经·秦风·蒹葭 蒹葭 秦风·蒹葭作品原文 秦风·蒹葭注释译文 秦风·蒹葭创作背景 秦风·蒹葭作品鉴赏 秦风·蒹葭后世影响',
            tag: '原创',
            text: '诗经',
            author: '无名氏',
            date: '春秋',
            content:
              '<section style="font-size: 16px; color: #3e3e3e; line-height: 1.75; letter-spacing: 1px; margin-left: 0.5em; margin-right: 0.5em;">' +
              '<p>蒹葭苍苍，白露为霜。</p>' +
              '<p>所谓伊人，在水一方。</p>' +
              '<p>溯洄从之，道阻且长。</p>' +
              '<p>溯游从之，宛在水中央。</p>' +
              '<p>蒹葭萋萋，白露未晞。</p>' +
              '<p>所谓伊人，在水之湄。</p>' +
              '<p>溯洄从之，道阻且跻。</p>' +
              '<p>溯游从之，宛在水中坻。</p>' +
              '<p>蒹葭采采，白露未已。</p>' +
              '<p>所谓伊人，在水之涘。</p>' +
              '<p>溯洄从之，道阻且右。</p>' +
              '<p>溯游从之，宛在水中沚。</p>' +
              '<h3 style="margin-top: 1.5em; margin-bottom: 1em;">其他作品</h3>' +
              '<ul style="padding-left: 2.2em;">' +
              '<li><p><a href="/s/NVidyr5almckNqoien8LyA" style="color: #1e6bb8;">无衣</a></p></li>' +
              '<li><p><a href="/s/Mvo7utKetvzgnxC2skeqpL" style="color: #1e6bb8;">桃夭</a></p></li>' +
              '</ul>' +
              '</section>'
          }
        }
      } else if (id === 'NVidyr5almckNqoien8LyA') {
        res = {
          errcode: 0,
          errmsg: 'ok',
          data: {
            title: '无衣',
            description: '《秦风·无衣》是中国古代第一部诗歌总集《诗经》中的一首诗。这是一首激昂慷慨、同仇敌忾的战歌，表现了秦国军民团结互助、共御外侮的高昂士气和乐观精神。全诗风格矫健爽朗，采用了重章叠唱的形式，抒写将士们在大敌当前、兵临城下之际，以大局为重，与周王室保持一致，一听“王于兴师”，磨刀擦枪，舞戈挥戟，奔赴前线共同杀敌的英雄主义气概和爱国主义精神。...',
            keywords: '秦风·无衣 国风·秦风·无衣 秦风无衣 诗·秦风·无衣 诗经·秦风·无衣 无衣 秦风·无衣作品原文 秦风·无衣注释译文 秦风·无衣创作背景 秦风·无衣作品鉴赏 秦风·无衣后世影响',
            tag: '原创',
            text: '诗经',
            author: '无名氏',
            date: '春秋',
            content:
              '<section style="font-size: 16px; color: #3e3e3e; line-height: 1.75; letter-spacing: 1px; margin-left: 0.5em; margin-right: 0.5em;">' +
              '<p>岂曰无衣？与子同袍。</p>' +
              '<p>王于兴师，修我戈矛，与子同仇！</p>' +
              '<p>岂曰无衣？与子同泽。</p>' +
              '<p>王于兴师，修我矛戟，与子偕作！</p>' +
              '<p>岂曰无衣？与子同裳。</p>' +
              '<p>王于兴师，修我甲兵，与子偕行！</p>' +
              '<h3 style="margin-top: 1.5em; margin-bottom: 1em;">其他作品</h3>' +
              '<ul style="padding-left: 2.2em;">' +
              '<li><p><a href="/s/YdnahSombc9oqyr3xcbdcE" style="color: #1e6bb8;">蒹葭</a></p></li>' +
              '<li><p><a href="/s/Mvo7utKetvzgnxC2skeqpL" style="color: #1e6bb8;">桃夭</a></p></li>' +
              '</ul>' +
              '</section>'
          }
        }
      } else if (id === 'Mvo7utKetvzgnxC2skeqpL') {
        res = {
          errcode: 0,
          errmsg: 'ok',
          data: {
            title: '桃夭',
            description: '《周南·桃夭》是中国古代第一部诗歌总集《诗经》中的一首诗。现代学者一般认为这是一首祝贺年轻姑娘出嫁的诗。全诗三章，每章四句，通篇以桃花起兴，以桃花喻美人，为新娘唱了一首赞歌。全诗语言精练优美，不仅巧妙地将“室家”变化为各种倒文和同义词，而且反复用一“宜”字，揭示了新娘与家人和睦相处的美好品德，也写出了她的美好品德给新建的家庭注入新鲜的血液，带来和谐欢乐的气氛。...',
            keywords: '周南·桃夭 国风·周南·桃夭 诗经·周南·桃夭 诗经·桃夭 桃夭 诗·周南·桃夭 周南·桃夭作品原文 周南·桃夭注释译文 周南·桃夭创作背景 周南·桃夭作品鉴赏 周南·桃夭后世影响',
            tag: '原创',
            text: '诗经',
            author: '无名氏',
            date: '春秋',
            content:
              '<section style="font-size: 16px; color: #3e3e3e; line-height: 1.75; letter-spacing: 1px; margin-left: 0.5em; margin-right: 0.5em;">' +
              '<p>桃之夭夭，灼灼其华。</p>' +
              '<p>之子于归，宜其室家。</p>' +
              '<p>桃之夭夭，有蕡其实。</p>' +
              '<p>之子于归，宜其家室。</p>' +
              '<p>桃之夭夭，其叶蓁蓁。</p>' +
              '<p>之子于归，宜其家人。</p>' +
              '<h3 style="margin-top: 1.5em; margin-bottom: 1em;">其他作品</h3>' +
              '<ul style="padding-left: 2.2em;">' +
              '<li><p><a href="/s/YdnahSombc9oqyr3xcbdcE" style="color: #1e6bb8;">蒹葭</a></p></li>' +
              '<li><p><a href="/s/NVidyr5almckNqoien8LyA" style="color: #1e6bb8;">无衣</a></p></li>' +
              '</ul>' +
              '</section>'
          }
        }
      } else {
        res = {
          errcode: -1,
          errmsg: '参数错误'
        }
      }
      break
    }
    default:
      break
  }
  return res
}
