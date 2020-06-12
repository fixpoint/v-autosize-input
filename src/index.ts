import Vue from 'vue';
import autosizeInput from 'autosize-input';

export interface Options {
  directiveName?: string;
}

const directiveName = 'autosize-input';

const directive = {
  bind(el: HTMLElement) {
    if (el.tagName !== 'INPUT') {
      throw new Error(
        `${directiveName} directive only support <input> element`,
      );
    }
    Vue.nextTick().then(() => {
      autosizeInput(el);
    });
  },

  componentUpdated(el: HTMLElement) {
    Vue.nextTick().then(() => {
      autosizeInput(el);
    });
  },
};

export default {
  ...directive,
  install(vue: typeof Vue, options: Options = {}): void {
    vue.directive(options.directiveName || directiveName, directive);
  },
};
