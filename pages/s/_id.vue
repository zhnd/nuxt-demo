<template>
  <div class="container">
    <div v-if="article" class="rich_media">
      <div class="rich_media_inner">
        <div class="rich_media_area_primary">
          <div class="rich_media_area_primary_inner">
            <div class="rich_media_wrp">
              <h2 class="rich_media_title">{{ article.title }}</h2>
              <div class="rich_media_meta_list">
                <span class="rich_media_meta icon_appmsg_tag">
                  {{ article.tag }}
                </span>
                <span class="rich_media_meta rich_media_meta_text">
                  {{ article.text }}
                </span>
                <span class="rich_media_meta rich_media_meta_nickname">
                  <a href="javascript:void(0);">
                    {{ article.author }}
                  </a>
                </span>
                <span class="rich_media_meta rich_media_meta_text">
                  {{ article.date }}
                </span>
              </div>
              <div
                id="js_content"
                class="rich_media_content"
                v-html="article.content"
              />
            </div>
          </div>
        </div>
        <div class="rich_media_area_extra">
          <div class="rich_media_area_extra_inner">
            <div class="related_container">
              <div class="relate_mod_transition function_mod">
                <div class="function_mod_index">
                  <div class="function_hd">喜欢此内容的人还喜欢</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="qr_code_pc_outer">
          <div class="qr_code_pc_inner">
            <div class="qr_code_pc">
              <img class="qr_code_pc_img" src="@/assets/images/qrcode.png" />
              <p>微信扫一扫<br />关注该公众号</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="weui-msg">
      <div class="weui-msg__extra-area">
        <img class="weui-icon_msg" src="@/assets/images/warning.png" />
      </div>
      <div class="weui-msg__text-area">
        <div class="weui-msg__title">参数错误</div>
      </div>
      <div class="weui-msg__extra-area">
        <div class="weui-footer">
          <p class="weui-footer__links">
            <a
              class="weui-footer__link"
              href="https://mp.weixin.qq.com/mp/opshowpage?action=main#wechat_redirect"
            >
              微信公众平台运营中心
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    if (this.article) {
      return {
        title: this.article.title,
        meta: [
          { hid: 'description', name: 'description', content: this.article.description },
          { hid: 'keywords', name: 'keywords', content: this.article.keywords }
        ]
      }
    } else {
      return {
        title: '参数错误'
      }
    }
  },
  async asyncData({ $api, params, error }) {
    const [article] = await Promise.all([
      $api.getArticle({
        id: params.id
      }).then(res => {
        if (res.errcode === 0) {
          return res.data
        }
      }).catch(err => {

      })
    ])
    return {
      article
    }
  },
  data() {
    return {
      article: null
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
.rich_media {
  color: #333333;
  background-color: #f2f2f2;
  letter-spacing: 0.034em;
  min-height: 100%;
}
.rich_media_area_primary {
  background-color: #ffffff;
  padding: 32px 16px 27px 16px;
}
.rich_media_area_primary_inner {
  max-width: 677px;
  margin: 0 auto;
}
.rich_media_wrp {
  zoom: 1;
}
.rich_media_title {
  font-size: 22px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 14px;
}
.rich_media_meta_list {
  line-height: 20px;
  margin-bottom: 32px;
}
.rich_media_meta {
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  margin-right: 10px;
}
.icon_appmsg_tag {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  padding: 0 4px;
}
.rich_media_meta_text {
  color: rgba(0, 0, 0, 0.3);
}
.rich_media_content {
  overflow: hidden;
  font-size: 17px;
  text-align: justify;
}
.rich_media_area_extra {
  padding-bottom: 40px;
}
.rich_media_area_extra_inner {
  max-width: 677px;
  margin: 0 auto;
}
.related_container {
  padding-left: 8px;
  padding-right: 8px;
}
.relate_mod_transition {
  zoom: 1;
}
.function_mod {
  background: #ffffff;
  border-radius: 8px;
  margin: 12px 0;
}
.function_hd {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.3);
  line-height: 1.35;
  padding: 16px 24px 0 24px;
}
.qr_code_pc_outer {
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  color: #717375;
  text-align: center;
}
.qr_code_pc_inner {
  position: relative;
  width: 740px;
  margin: 0 auto;
}
.qr_code_pc {
  position: absolute;
  top: 0;
  right: -140px;
  width: 140px;
  padding: 16px 0;
  background-color: #ffffff;
  border: 1px solid #d9dadc;
  p {
    font-size: 14px;
    line-height: 20px;
  }
}
.qr_code_pc_img {
  width: 102px;
  height: 102px;
}
.weui-msg {
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  text-align: center;
  line-height: 1.4;
  min-height: 100%;
  padding-top: 48px;
}
.weui-msg__extra-area {
  margin-bottom: 32px;
}
.weui-icon_msg {
  width: 64px;
  height: 64px;
}
.weui-msg__text-area {
  line-height: 1.6;
  flex: 1;
  margin-bottom: 32px;
}
.weui-msg__title {
  font-size: 22px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
}
.weui-msg__extra-area {
  margin-bottom: 24px;
}
.weui-footer {
  font-size: 14px;
}
</style>
