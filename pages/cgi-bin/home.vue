<template>
  <div class="container">
    <div class="mp-head">
      <div class="weui-desktop-head">
        <div class="weui-desktop-head__inner">
          <div class="weui-desktop-layout">
            <div class="weui-desktop-layout__side">
              <div class="weui-desktop-logo">
                <a href="/" class="weui-desktop-logo__inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '公众号'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: #f6f7f8;
}
.weui-desktop-head {
  background-color: #ffffff;
}
.weui-desktop-head__inner {
  height: 56px;
  padding: 0 40px;
}
.weui-desktop-layout__side {
  float: left;
}
.weui-desktop-logo {
  padding-top: 12px;
}
.weui-desktop-logo__inner {
  display: block;
  width: 195px;
  height: 32px;
  background-image: url(https://res.wx.qq.com/mpres/zh_CN/htmledition/weui-desktopSkin-common/svg/buildless/new_bg_logo_primary538ca4.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0;
}
</style>
