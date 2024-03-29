# 介绍
[![vue](/images/vue-version.svg)](https://github.com/vuejs/vue)
[![OSCS Status](https://www.oscs1024.com/platform/badge/mao-118/fast-vue-admin.svg?size=small)](https://www.oscs1024.com/project/mao-118/fast-vue-admin?ref=badge_small)
<br />
本项目基于 [vue3](https://staging-cn.vuejs.org/guide/introduction.html) 和 [vite2](https://vitejs.cn/) 搭建,自2022年开始 [vue3](https://staging-cn.vuejs.org/guide/introduction.html) 已经开始作为默认版本。不在建议使用 [vue2](https://cn.vuejs.org/) 的框架， [webpack](https://www.webpackjs.com/) 构建工具也替换为 [vite](https://vitejs.cn/) ，同时该项目全局状态共享从之前的 [Vuex](https://vuex.vuejs.org/) 替换为 [pinia](https://pinia.vuejs.org/introduction.html)
## 前序准备
- 你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。
- 希望你具备 [vue2](https://cn.vuejs.org/) 的常用知识，这样可以直接过渡到 [vue3](https://staging-cn.vuejs.org/guide/introduction.html) 。如果没有也无关紧要，可以直接从 [vue3](https://staging-cn.vuejs.org/guide/introduction.html) 开始学习，毕竟 [vue3](https://staging-cn.vuejs.org/guide/introduction.html) 已经开始成为主流版本。
- 掌握 [ES2015+](https://es6.ruanyifeng.com/)、[vue3](https://staging-cn.vuejs.org/guide/introduction.html)、[pinia](https://pinia.vuejs.org/introduction.html)、[vue-router](https://router.vuejs.org/) 、[vite2](https://vitejs.cn/) 、[axios](http://www.axios-js.com/zh-cn/docs/) 和 [element-plus](https://element-plus.gitee.io/zh-CN/guide/design.html) 等技术。
- 所有的请求数据都使用 [Mock.js](http://mockjs.com/) 进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 功能

```
- 登录 / 注销

- 多环境发布
  - dev prod

- 全局功能
  - 主题切换
  - 菜单模式
  - 快捷导航
  - logo显示
  - 导航头固定

- 编辑器
  - 富文本
  - Markdown

- 错误页面
  - 401
  - 404

- 組件
  - 高德地图
  - swiper

- 综合实例
  - Dashboard
  - ECharts 图表
  - Clipboard(剪贴复制)
  - 多级缓存
  - 国际化
```

<br/>



## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 图片 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .env.xxx                   # 环境变量配置
├── .eslintignore              # eslint忽略配置文件
├── .eslintrc.js               # eslint 配置项
├── index.html                 # html模板
├── vite.config.js             # vite 配置
├── postcss.config.js          # postcss 配置
├── tailwind.config.js         # tailwind 配置 
└── package.json               # package.json
```

## 安装

```bash
# 克隆项目
git clone https://github.com/mao-118/fast-vue-admin

# 进入项目目录
cd fast-vue-admin

# 安装依赖
npm install

# 通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev
```

<br/>

::: tip
有问题可联系QQ：[383397258]()
:::

<br/>

启动完成后会自动打开浏览器访问 [http://localhost:9999](http://localhost:9999)， 你看到下面的页面就代表操作成功了。

![图片](/images/login.png)

接下来你可以修改代码进行业务开发了，你可以继续阅读和探索左侧的其它文档。

<br/>



## 其它

可以加入 QQ群（491864545）分享一些技术相关的东西。

## Vue 生态圈

**首先了解这些 vue 生态圈的东西，会对你上手本项目有很大的帮助。**

1. [Vue Router](https://router.vuejs.org/) 是 vue 官方的路由。它能快速的帮助你构建一个单页面或者多页面的项目。

2. [pinia](https://pinia.vuejs.org/introduction.html) 最初是在 2019 年 11 月左右重新设计使用Composition API的 Vue Store 外观的实验。从那时起，最初的原则仍然相同，但 Pinia 适用于 Vue 2 和 Vue 3 ，并且不需要你使用组合 API。除了安装和SSR之外，两者的 API 都是相同的，并且这些文档针对 Vue 3 ，并在必要时提供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读！

3. [Vue Dev-Tools](https://github.com/vuejs/vue-devtools) Vue 在浏览器下的调试工具。写 vue 必备的一个浏览器插件，能大大的提高你调试的效率。

4. [vite](https://vitejs.cn/) 是一个轻量级的、速度极快的构建工具，对 Vue SFC 提供第一优先级支持。作者是尤雨溪，同时也是 Vue 的作者！

5. [Volar](https://github.com/johnsoncodehk/volar) 与vetur相同，volar是一个针对vue的vscode插件，不过与vetur不同的是，volar提供了更为强大的功能。

