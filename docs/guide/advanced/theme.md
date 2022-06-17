# 更换主题
本项目支持白垩主题和暗黑主题，支持动态切换且保存状态。

## 全局主题更换
因为项目中引入了 [element-plus](https://element-plus.gitee.io/) 组件，所以当全局主题变化的时候，组件的主题也需要同时改变。

根据 element 官方提供的 [暗黑主题](https://element-plus.gitee.io/zh-CN/guide/dark-mode.html) 进行配置，你会发现实现十分的容易，只需在 html 上添加一个名为 dark 的类。
如果您想动态切换，使用 [ useDark | VueUse ](https://vueuse.org/core/usedark/)。

同时你还可以在自定义主题的scss文件中设置更多你喜欢的色值。


