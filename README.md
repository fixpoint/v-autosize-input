# v-autosize-input

![Support Vue 2](https://img.shields.io/badge/support-Vue%202-yellowgreen.svg)
[![Version](https://img.shields.io/npm/v/v-autosize-input.svg)](https://www.npmjs.com/package/v-autosize-input)
[![License](https://img.shields.io/github/license/fixpoint/v-autosize-input.svg)](LICENSE)

Yet another Vue directive to change `<input>` width automatically by content length.
It works well on IME by using [autosize-input](https://github.com/yuanqing/autosize-input) internally.

[![Edit v-autosize-input demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-autosize-input-directive-demo-fzcmq?fontsize=14&hidenavigation=1&theme=dark)

The most of implementation has copied and translated to TypeScript from [vue-autosize][].
See [LICENSE.orig](./LICENSE.orig) for the original license.

[vue-autosize]: https://github.com/mage3k/vue-autosize

## Install

```
npm i v-autosize-input
```

## Usage

```javascript
import Vue from 'vue';
import VAutosizeInput from 'v-autosize-input';

Vue.use(VAutosizeInput);
```

Then use `autosize-input` directive on `<input>` element like:

```html
<input type="text" v-autosize-input />
```

See [./example/src/App.vue](./example/src/App.vue) for more detail.

## Comparison

| Name                                                                   | Reason                                     |
| ---------------------------------------------------------------------- | ------------------------------------------ |
| [vue-autosize](https://github.com/mage3k/vue-autosize)                 | Works well on IME but seems not maintained |
| [vue-input-autowidth](https://github.com/syropian/vue-input-autowidth) | Does not work on IME                       |

## See also

If you need autosize feature on `textarea`, [v-autosize][], which has forked from [vue-autosize][], seems good choice.

[v-autosize]: https://github.com/shrpne/v-autosize
