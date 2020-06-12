# vue-autosize-input-directive

![Support Vue 2](https://img.shields.io/badge/support-Vue%202-yellowgreen.svg)
[![Version](https://img.shields.io/npm/v/vue-autosize-input-directive.svg)](https://www.npmjs.com/package/vue-autosize-input-directive)
[![License](https://img.shields.io/github/license/fixpoint/vue-autosize-input-directive.svg)](LICENSE)

Yet another Vue directive to change `<input>` width automatically by content length.
It works well on IME by using [autosize-input](https://github.com/yuanqing/autosize-input) internally.

## Install

```
npm i vue-autosize-input-directive
```

## Usage

```javascript
import Vue from 'vue';
import VueAutosizeInputDirective from 'vue-autosize-input-directive';

Vue.use(VueAutosizeInputDirective);
```

Then use that accessor to access the namespaced module like

```html
<input type="text" v-autosize-input />
```

See [./example/src/App.vue](./example/src/App.vue) for more detail.

## Comparison

| Name                                                                   | Reason                                     |
| ---------------------------------------------------------------------- | ------------------------------------------ |
| [vue-autosize](https://github.com/mage3k/vue-autosize)                 | Works well on IME but seems not maintained |
| [vue-input-autowidth](https://github.com/syropian/vue-input-autowidth) | Does not work on IME                       |
