# app-main
内容主体区域，即`@/views`下的页面将被渲染至该处。提供了全局样式类名`app-container`,当然你也可以根据需求替换成你想要的样式。该处默认使用了`keep-alvie` 包裹，即路由`name`属性出现在`tags-view`中将会被缓存。

## Emptyout
当我们需要渲染三级或者更多级的菜单时，可以使用`Emptyout`来做中转路由，这样我们可以保证`layout`和`子孙`页面之间是干净的。