# 密码随机生成

## 总结

1. true 在程序中是当作 1 来处理的。

2. Object 的 values 与 key 的用法，利用 filter 与 values 来判定这个选项是否被选中，再用 keys 获取对象内的属性名，用 randomFunc 来调用相应随机字符函数。

3. 没有什么感觉，如果用 React 来做的话，从数据角度思考，几个密码生成的选项的 checked 的状态要能传递生成密码的函数内，并在函数内改变密码生成框的内容，然后由 react 生成对应的 UI 并更新到 DOM 中。