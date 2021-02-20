import Vue from 'vue'
import {
  Message
} from 'element-ui'
import '~/assets/styles/element-variables.scss'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.prototype.$message = Message
