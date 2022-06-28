# 国际化
`element-plus` 组件 默认 使用英语，如果需要使用中文只需在引入的地方配置语言包即可

```js
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

app.use(ElementPlus, {
  locale: zhCn,
})
```

# 实现国际化
Element Plus 还提供了一个 Vue 组件 ConfigProvider 用于全局配置国际化的设置。

```vue
<template>
  <el-config-provider :locale="locale">
    <app />
  </el-config-provider>
</template>
<script setup>
import {ref} from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = ref(zhCn)
</script>
```
::: tip
具体的国际化使用可以参考项目中的 [国际化设置](https://github.com/mao-118/fast-vue-admin/blob/main/src/views/localeConfig/index.vue) 页面
:::