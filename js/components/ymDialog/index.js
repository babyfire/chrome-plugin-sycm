import Vue from 'vue';
import YmDialog from './YmDialog.vue';

class MyDialog {
  constructor() {
    this.dialog = null;
    this.init();
  }

  init() {
    const wrapper = document.createElement('div');
    wrapper.id = 'ym-dialog-wrapper';
    document.body.appendChild(wrapper);

    const Dialog = Vue.extend(YmDialog);
    this.dialog = new Dialog().$mount('#ym-dialog-wrapper');
  }

  open() {
    this.dialog.open();
  }

  close() {
    this.dialog.close();
  }

  setState(data) {
    Object.keys(data).forEach((item) => {
      this.dialog[item] = data[item];
    });
  }
}

export default new MyDialog();
