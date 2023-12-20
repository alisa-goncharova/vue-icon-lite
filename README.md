# Vue 3 Icon Component

# Installation

Install NPM

```
npm install vue3-icon-lite
```

Install via yarn

```
yarn add vue-icon-lite
```

# Global Vue Usage

```js
import { createApp } from "vue";
import Icon from "vue-icon-lite";

const app = createApp();
app.component("Icon", Icon);

app.mount("#app");
```

# Local Usage (Options API)

```js
<script>
import Icon from "vue-icon-lite";
export default {
    components: { Icon }
}    
</script>
```

# Local Usage (Composition API)

```js
<script>
import Icon from "vue-icon-lite";
export degault {
    setup() {
        return { Icon }
    }
}
</script>
```

## Example

```js
<template>
    <Icon name="photo" size="36"/>
</template>
```

# Props

| Name      | Type   | Default | Description                                                                 |
|-----------|--------|---------|-----------------------------------------------------------------------------|
| name      | String | null    | Icon name. The icon in the public/icons folder should be named the same way |
| size      | Number | 24      | Icon size                                                                   |
| className | String | null    | Class for the block in which the icon is located                            |

# About the package
Icon uses the icons located in **/public/icons**

To move icons from the library to your project, use **in your project in package.json**

```json
 "scripts": {
  "postinstall": "mkdir -p ./public/icons && cp -R ./node_modules/vue-icon-lite/icons/* ./public/icons"
},
```