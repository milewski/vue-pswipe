# vue-pswipe
a Vue plugin for photoswipe without set image size

## example online
[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/619x48656r)

## install
```
npm install vue-pswipe
```

## usage

```js
// main.js
import Photoswipe from 'vue-pswipe'

Vue.use(Photoswipe, options)
```
[complete options](http://photoswipe.com/documentation/options.html)

you should set `v-pswp` to prefetch image size
```vue
<Photoswipe>
    <img 
        :src="imageSrc"
        v-pswp="imageSrc"
    />
</Photoswipe>
```

or you can use background-image instead of img tag
```vue
<Photoswipe>
    <div 
        v-pswp="imageSrc"
        :style="getBgImgStyle(imageSrc)"
    >
</Photoswipe>
```

or you can set auto props, then vue-pswipe will collect all img tag
```vue
<Photoswipe auto>
    <img :src="imageSrc" />
</Photoswipe>
```

if you dont want collect all img under auto mode, you can use beforeOpen hook
```vue
<Photoswipe auto @beforeOpen="({ target }, next) => next(target.parentNode.tagName !== 'A')">
    <img :src="imageSrc" />
</Photoswipe>
```

The above example filters the all img in a tags

if you need image caption, you can set `v-pswp` as object with title property
```vue
<Photoswipe>
    <img 
        :src="imageSrc"
        v-pswp="{ src: imageSrc, title: imageTitle }"
    />
</Photoswipe>
```

## props
Photoswipe 

| property | type | explain |
| --- | --- | --- |
| options | object | original photoswipe options |
| auto | boolean | auto initial without data-pswp-src |
| bubble | boolean | allow click event bubbling, default is false |
| ❗️ ️filter | function | a filter function that accept img as argument, only work in auto mode. you should use beforeOpen instead. (deprecated) |

[complete options](http://photoswipe.com/documentation/options.html)

## event

### beforeOpen
emit after click thumbnail, beforeOpen function receives two arguments:
- `event`:
    - `index`: current image index
    - `target`: target that triggers effective click event
- `next`: this function must be called to resolve the hook. `next(false)` will abort open photoswipe

### beforeClose
gallery starts closing

### closed
after gallery is closed and closing animation finished. Clean up your stuff here.

## example
```
npm run dev
```