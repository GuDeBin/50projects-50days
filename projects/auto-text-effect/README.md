# 文字弹出信息

## 总结

1. 这个网页的点在于利用 setTimeout 来反复执行一个函数，也就是先设置一个 idx，在 writeText 函数中按照 count 分割字符串并赋值 textEl 元素上，然后 idx 递增，并设置一个延期执行函数 setTimeout，延期再次执行，同时设置一个条件，一旦递增大于字符串的长度，将 count 初始化为一

2. 这个让我深入的理解力 setTimeout 这个函数，其实如果不想反复，可以再 idx 大于 text.length 后使用 clearTimeout 清除延迟文件，但是需要将 setTimeout 赋予一个变量，然后传入 clearTimeout 中。

3. 在思考下如何采用 React 实现，首先这个就是一个组件，也就是文字的反复实现，几乎可以把这个功能函数复制到子组件内。

4. 过程驱动与数据驱动的不同，React 是根据数据变化更新 UI
