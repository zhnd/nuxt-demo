<template>
  <div class="container">
    <div class="mp-head">
      <div class="weui-desktop-head">
        <div class="weui-desktop-head__inner">
          <div class="weui-desktop-layout">
            <div class="weui-desktop-layout__side">
              <h1 class="weui-desktop-logo">
                <a href="/" />
              </h1>
            </div>
            <div class="weui-desktop-layout__extra">
              <div class="weui-desktop-head-helper"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="banner__inner">
          <div class="login_frame input_login">
            <div>
              <a
                href="javascript:;"
                class="login__type__container__select-type__scan"
              />
              <div class="weui-desktop-global-mod">
                <div class="weui-desktop-global__info">
                  <h4>登录</h4>
                </div>
              </div>
              <form class="login_form">
                <div class="login_input_panel">
                  <div class="login_input">
                    <div class="weui-desktop-form__input-area">
                      <span class="weui-desktop-form__input-wrp">
                        <input
                          v-model.trim="account"
                          type="text"
                          name="account"
                          placeholder="邮箱/微信号/QQ号"
                          autocomplete="on"
                          @input="onAccountInput"
                          @keyup.enter="login"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="login_err">
                    <span v-if="accountTipVisible" class="err_tips">
                      你还没有输入账号！
                    </span>
                  </div>
                  <div class="login_input">
                    <div class="weui-desktop-form__input-area">
                      <span class="weui-desktop-form__input-wrp">
                        <input
                          v-model="password"
                          type="password"
                          name="password"
                          placeholder="密码"
                          autocomplete="on"
                          @input="onPasswordInput"
                          @keyup.enter="login"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="login_err">
                    <span v-if="passwordTipVisible" class="err_tips">
                      你还没有输入密码！
                    </span>
                  </div>
                </div>
                <div class="login_help_panel">
                  <label class="frm_checkbox_label selected">
                    <i class="icon_checkbox" />
                    <input type="checkbox" class="frm_checkbox" value="false" />
                    记住帐号
                  </label>
                  <a href="javascript:;" class="login_forget_pwd">
                    找回帐号或密码
                  </a>
                </div>
                <div class="login_btn_panel">
                  <a href="javascript:;" class="btn_login" @click="login">
                    登录
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mp-body">
      <div class="page_login_inner">
        <div class="mp_kind_mod">
          <div class="mp_kind_mod_hd">
            <h3>账号分类</h3>
          </div>
          <div class="mp_kind_mod_bd">
            <div class="mp_kind_wrp"></div>
            <div class="mp_kind_wrp"></div>
            <div class="mp_kind_wrp"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSEncrypt from 'jsencrypt'

export default {
  head() {
    return {
      title: '微信公众平台',
      meta: [
        { hid: 'description', name: 'description', content: '微信公众平台，给个人、企业和组织提供业务服务与用户管理能力的全新服务平台。' },
        { hid: 'keywords', name: 'keywords', content: '微信公众平台,微信公众平台官方网站,公众号注册,微信公众号注册,微信订阅号注册,微信公众号申请,微信服务号申请,微信订阅号申请,微信企业号申请,微信服务号注册,微信企业号注册,订阅号注册,公众号申请,服务号申请,订阅号申请,企业号申请,服务号注册,企业号注册,微信' }
      ]
    }
  },
  data() {
    return {
      account: '',
      password: '',
      accountTipVisible: false,
      passwordTipVisible: false
    }
  },
  methods: {
    onAccountInput(e) {
      if (e.target.value.trim()) {
        this.accountTipVisible = false
      }
    },
    onPasswordInput(e) {
      if (e.target.value) {
        this.passwordTipVisible = false
      }
    },
    login() {
      if (!this.account) {
        this.accountTipVisible = true
        return
      }
      if (!this.password) {
        this.passwordTipVisible = true
        return
      }
      this.$api.getPublicKey().then(res => {
        if (res.errcode === 0) {
          const encrypt = new JSEncrypt()
          encrypt.setPublicKey(res.data)
          const encryptedPassword = encrypt.encrypt(this.password)
          return this.$api.login({
            account: this.account,
            password: encryptedPassword
          })
        }
      }).then(res => {
        if (res.errcode === 0) {
          this.$router.replace({ path: '/cgi-bin/home' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-width: 1260px;
  color: #353535;
  font-size: 14px;
  line-height: 1.6;
}
.weui-desktop-head__inner {
  width: 960px;
  height: 80px;
  margin: 0 auto;
}
.weui-desktop-logo {
  padding-top: 20px;
  a {
    display: block;
    width: 240px;
    height: 40px;
    background-image: url(https://res.wx.qq.com/mpres/zh_CN/htmledition/weui-desktopSkin-common/svg/buildless/bg_logo_primary538ca4.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.banner {
  background-image: url(https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/login/loginpage/images/bg_banner49d02a.png);
  background-position: 50% 0;
}
.banner__inner {
  width: 960px;
  height: auto;
  min-height: 375px;
  padding: 21px 0;
  margin: 0 auto;
}
.login_frame {
  position: relative;
  width: 380px;
  float: right;
  background-color: #ffffff;
  border-radius: 2px;
  padding: 16px 20px;
}
.login__type__container__select-type__scan {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: url(https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/login/loginpage/images/qr4b3e56.svg)
    no-repeat 100% 0;
  background-size: 100%;
}
.weui-desktop-global-mod {
  margin-bottom: 28px;
}
.weui-desktop-global__info {
  h4 {
    font-weight: 400;
  }
}
.login_input {
  border: 1px solid #e7e7eb;
  padding: 1px 0;
  input {
    width: 100%;
    height: 3em;
    border: 0;
    padding-left: 30px;
    box-shadow: inset 0 0 0 1000px #ffffff !important;
  }
}
.login_err {
  height: 24px;
  color: #fa5151;
  font-size: 13px;
}
.frm_checkbox_label {
  color: #7e8081;
  cursor: pointer;
}
.icon_checkbox {
  width: 16px;
  height: 16px;
  background: url(https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/style/page/page_login_z49d030.png)
    0 -44px no-repeat;
  vertical-align: middle;
  display: inline-block;
  margin-right: 3px;
  margin-top: -2px;
}
.selected .icon_checkbox {
  background: url(https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/style/page/page_login_z49d030.png)
    0 -64px no-repeat;
}
.frm_checkbox {
  position: absolute;
  left: -999em;
}
.login_forget_pwd {
  float: right;
}
.login_btn_panel {
  margin-top: 22px;
  margin-bottom: 24px;
}
.btn_login {
  display: inline-block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  color: #ffffff;
  background-color: #07c160;
  border-radius: 3px;
  text-align: center;
}
.page_login_inner {
  width: 960px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 50px;
}
.mp_kind_mod_hd {
  padding-top: 10px;
  padding-bottom: 15px;
  h3 {
    font-size: 20px;
    font-weight: 400;
  }
}
.mp_kind_mod_bd {
  font-size: 0;
}
.mp_kind_wrp {
  position: relative;
  width: 310px;
  height: 310px;
  display: inline-block;
  font-size: 14px;
  border: 1px solid #e7e7eb;
  margin-right: 15px;
}
.mp_kind_wrp:last-child {
  margin-right: 0;
}
.weui-desktop-foot {
  width: 960px;
  margin: 0 auto;
}
</style>
