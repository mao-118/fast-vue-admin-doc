# keep-alvie
`<KeepAlive>` 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例。

当我们使用`<KeepAlive>`去缓存二级菜单时，轻而易举便可以实现该功能，只需将标签包裹在需要缓存的组件路由上即可。

可是当需要缓存三级或以上层级的菜单时，你会发现该功能并不好使。

## 原因
通过排查可以发现，这是因为router层级过多无法被keep-alive 执行生效。
## 思路
除第一级和最后一级路由外，中间层级的路由全部剔除
```js
//matched中包含当前所有路由层级信息
handleKeepAlive(to){
    if (to.matched && to.matched.length > 2) {
        for (let i = 0; i < to.matched.length; i++) {
            const element = to.matched[i];
            //剔除中间 Emptyout 层级
            if (element.components.default.name === 'Emptyout') {
                to.matched.splice(i, 1);
                handleKeepAlive(to);
            }
            // 如果没有按需加载完成则等待加载
            if (typeof element.components.default === 'function') {
                element.components.default();
                handleKeepAlive(to);
            }
        }
  }
}

```
## 问题
当我们改变了`路由`中的`matched`属性时，的确时解决了`keep-alive`无法缓存多级的问题，但这个时候，我们需要完成面包屑导航功能，你会发现`matched`已经不是我们所希望的那样。

## 面包屑
在解决`KeepAlive`问题之前，我们需要将`面包屑`信息重新组装至路由元信息`meta`中
```js
const newMatched = to.matched.map(item => {
    return {
      title: item.meta?.title || '',
      link: item.path
    };
  });
to.meta.matched = newMatched;
handleKeepAlive(to);
```