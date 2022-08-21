# 组合式api自动导入
正常情况下，要使用`vue3`提供的组合式`api`则必须要导入`vue`的包。

在该项目中可以告别繁琐的`form 'vue'`

## Before
```vue
<script setup>
import {ref,watch} from 'vue';
const num = ref(0)
watch(num,(newNum)=>{
    console.log(newNum)
})
</script>
```
## Now
```vue
<script setup>
const num = ref(0)
watch(num,(newNum)=>{
    console.log(newNum)
})
</script>
```