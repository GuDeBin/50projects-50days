# 第十九个项目

## 点击水纹

点击后有水纹展开

## 实现思路

1. 通过点击事件获取当前点击位置,在用 offsetTop 与 offsetLeft 获取上层元素的定位，相减得到点击位置相对于上层元素的位置。
2. 创建一个 span 元素，将相对位置赋值，再把在 css 写好动画类加入
3. 这个动画类利用比例放大，再设置透明度，最后利用 ease-in 设置渐进效果。
