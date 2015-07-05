#Math

##add

```_.add(augend, addend)```

将两个数相加.

####Arguments

* augend (number): 要相加的第一个数.

* addend (number): 要相加的第二个数.

####Returns

(number): 返回和.

####Example

```js
console.log(_.add(1,2));
//=> 3
```

#ceil

```_.ceil(n, [precision=0])```

将数n上舍入到指定的精度precision。


####Arguments
* n (number): 要上舍入的数.

* [precision=0] (number): 要上舍入的精度.

####Returns

(number): 返回上舍入后的值.

####Example

```js
console.log(_.ceil(4.123456,3));
//=>4.124
console.log(_.ceil(123456,-2));
//=>123500
```

#floor

```_.floor(n, [precision=0])```

将数n下舍人到指定的精度precision.

####Arguments

* n (number): 要下舍入的数.

* [precision=0] (number): 要下舍人的精度.

####Returns
(number): 返回下舍入之后的数.

####Example

```js
console.log(_.floor(4.123456,3));
//=>4.123
console.log(_.floor(123456,-2));
//=>123400
```


#max

```_.max(collection, [iteratee], [thisArg])```

返回集合中最大的数。如果集合是空或者错值，返回-Infinity。如果给定了iteratee，对集合中的每一个值都调用iteratee，返回的集合根据集合中数值来排序。iteratee与thisArg绑定并且可以调用三个参数: (value, index, collection).

如果iteratee是一个对象，如果这个对象能在collection中找到，那么返回这个对象，如果这个对象在collection中找不到，那么返回collection中的第一个对象。

如果iteratee是一个属性名，取集合中相应属性名的属性值最大的对象，返回这个对象.

如果iteratee是一个属性名，并且thisArg也有值，情况和iteratee是一个对象的情况是一样的。

####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee] (Function|Object|string): 对每个元素都要调用的函数.

* [thisArg] (*): 与iteratee绑定的值.

####Returns
(*): 返回最大值.

####Example
```js
var aas=[{aa:'a','age':12},{aa:'s','age':23},{aa:'d','age':45}];
console.log(_.max(aas,{aa:'s','age':24}));
//=>{aa:'a','age':12}
console.log(_.max(aas,'age'));
//=>{ aa: 'd', age: 45 }
console.log(_.max(aas,'age',13));
//=>{ aa: 'a', age: 12 }
```

##min
```_.min(collection, [iteratee], [thisArg])```

返回集合中的最小值.如果iteratee是一个函数，对collection中的每个值调用iteratee，返回true时，在根据数值的排序来返回值. iteratee与thisArg绑定并且可以调用三种参数: (value, index, collection).

如果iteratee是一个对象，如果这个对象能在collection中找到，那么返回这个对象，如果这个对象在collection中找不到，那么返回collection中的第一个对象。

如果iteratee是一个属性名，取集合中相应属性名的属性值最小的对象，返回这个对象.

如果iteratee是一个属性名，并且thisArg也有值，情况和iteratee是一个对象的情况是一样的。

####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee] (Function|Object|string): 对每个元素调用.

* [thisArg] (*): 与iteratee绑定的值.

####Returns
(*): 返回最小值.

###Example
```js
var aas=[{aa:'a','age':23},{aa:'s','age':12},{aa:'d','age':45}];
console.log(_.min(aas,{aa:'s','age':24}));
//=>{ aa: 'a', age: 23 }
console.log(_.min(aas,'age'));
//=>{ aa: 's', age: 12 }
console.log(_.min(aas,'age',13));
//=>{ aa: 'a', age: 23 }
```

##round
```_.round(n, [precision=0])```

对数n进行四舍五入到指定的精度precision.

####Arguments
n (number): 要四舍五入的数.
[precision=0] (number): 要四舍五入到的精度.

####Returns
(number): 返回四舍五入后的数.

####Example
```js
console.log(_.round(4.32,1));
//=>4.3
console.log(_.round(4.35,1));
//=>4.4
```

##sum
```_.sum(collection, [iteratee], [thisArg])```

返回collection中数值的和。

####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee] (Function|Object|string): 对每个元素都进行调用.

* [thisArg] (*): 与iteratee绑定的值.

####Returns
(number): 返回和.

####Example
```js
console.log(_.sum([1,2]));
//=>3
console.log(_.sum([{'a':1},{'a':2},{'a':3}],'a'));
//=>6
```


