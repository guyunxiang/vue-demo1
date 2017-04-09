// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

router.afterEach((rt) => {
  document.title = rt.meta.title || rt.name
})


// 消息队列
const msgStack = {};

// 校验消息是否已在队列中
const validatorMsgStack = (msg, times = 0, type) => {
  msgStack[type] = msgStack[type] || [];
  const showing = msgStack[type].indexOf(msg) > -1;
  if (showing) { return; }
  msgStack[type].push(msg);
  setTimeout(() => {
    msgStack[type].splice(msgStack[type].indexOf(msg), 1);
  }, parseFloat(times));
  const wait = times || 1500;
  Toast[type](msg, wait / 1000);
};

const _debounceToast = {
  success: (msg, times) => {
    validatorMsgStack(msg, times, 'success');
  },
  error: (msg, times) => {
    validatorMsgStack(msg, times, 'error');
  },
  info: (msg, times) => {
    validatorMsgStack(msg, times, 'info');
  }
};
