# 路由和侧边栏

路由和侧边栏是组织起一个后台应用的关键骨架。

本项目侧边栏和路由是绑定在一起的，所以你只有在 @/router/index.js 下面配置对应的路由，侧边栏就能动态的生成了。大大减轻了手动重复编辑侧边栏的工作量。当然这样就需要在配置路由的时候遵循一些约定的规则。

## 配置项
```js
// 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
hidden: true; // (默认 false)

// 当子路由只有一个时，且设置了该属性，则当前路由信息将隐藏
hasOnleOneChildren: true;
// 外层父路由设置，默认为1，值越大，渲染菜单越靠后
sort: 1,
name: "router-name"; // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现问题
meta: {
  title: "title"; // 设置该路由在侧边栏展示的名字
  icon: "icon-name"; // 设置该路由的图标，支持 element-plus 的 icon
}
```
## 自动导入
本项目采用自动导入的方式，只需要在 [@/router/modules](https://github.com/mao-118/fast-vue-admin/tree/main/src/router/modules) 下创建路由文件即可全部导入。
通过设置 `sort` 属性来控制菜单渲染时的顺序问题，值越大的越靠后。如果需要动态加载路由的话，请自行修改代码中路由导入逻辑即可。
## 模式
菜单栏分为水平和垂直两种模式。

水平模式：当切换为水平模式，侧边栏展示的是当前父路由下的子级路由列表，这个时候第一级的 `hasOnleOneChildren` 属性始终为 `false`,其他规则同`垂直模式`。

垂直模式：基于 `element-plus` 的 `el-menu` 改造,支持多级路由嵌套。
