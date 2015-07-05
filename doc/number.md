#'Number' merhods

##inRange
```_.inRange(n, [start=0], end)```

检查n这个数值是否在start和end（不包括end）之间，前闭后开区间。如果end
这个值没有被指定，就把end设为start的值，star设为0.

####Arguments
* n (number): 要检查的数.

* [start=0] (number): 区间的开始值.

* end (number): 区间的结束值.

####Returns
(boolean): n如果在区间中，返回true，否则返回false.

####Example
```js
console.log(_.inRange(2,1,4));
//=>true
console.log(_.inRange(4,4));
//=>false  4不在[0,4)之间
```

##random
```_.random([min=0], [max=1], [floating])```

产生一个[min,max]的随机数. 如果min和max只有一个值给定，那么返回0到这个值之间的一个随机数。如果floating是true，或者min和max都是floats，那么返回的是一个浮点数而不是一个整数。

####Arguments
* [min=0] (number): 可能产生的最小值.

* [max=1] (number): 可能产生的最大值.

* [floating] (boolean): 是一个布尔值，返回一个浮点数.

####Returns
(number): 返回一个随机数.

####Example
```js
console.log(_.random(24));
//产生一个0到24的整数
console.log(_.random(2.1,24.2));
//产生一个2.1到24.2的浮点数
console.log(_.random(0,24,true));
//产生一个0到24的浮点数
```
