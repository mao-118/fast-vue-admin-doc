# Mock
开发阶段所用到的数据都来自 [Mockjs](http://mockjs.com/)

需要在 [vite.config.js](https://github.com/mao-118/fast-vue-admin/blob/main/vite.config.js) 中引入 `vite-plugin-mock` 插件以支持mock数据

## network
所有的 `mock` 数据请求都放在项目的 [mock](https://github.com/mao-118/fast-vue-admin/tree/main/mock) 文件夹下,通过 `index` 文件一键导入所有的 `api` 请求。如需新增请求，只需在 `mock` 文件夹下面新建文件即可
