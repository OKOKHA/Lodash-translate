#"Array" methods
## _.chunk(array, [size=1])
创建一个数组，将元素分割成size长度的几个数组。如果元素不可以平均分配，剩下的元素就是一个数组。

### 参数
*array(Array)：数组处理

*size：每个数组的长度
### 返回
返回新数组，放在原来的数组中

### 举例：
```js
_.chunk(['a','s','d','f','g','h','j'],3)
// =>[ [ 'a', 's', 'd' ], [ 'f', 'g', 'h' ], [ 'j' ] ]
```


## _.compact(array)
创建一个数组,把数组里面所有错的值都移除。false,null,0,"",undefined,NaN这些都是错的

### 参数
*array(Array)：紧凑的数组

### 返回
返回弃掉错值的新数组

### 举例
```js
_.compact([0,null,'a',1,'']
// =>'[ 'a', 1 ]```

## _.difference(array, [values])
新建一个数组，使得这个数组里的值没有另外提供的数组里面的值。

### 参数
*array(Array)：检查数组

*[value]：另外提供的数组的值
### 返回
返回弃掉另外数值新数组

### 举例
```js
_.difference([1,3,5,7,9],[3,6,8])
// =>[ 1, 5, 7, 9 ]```

## _.drop(array, [n=1])
创建一个长度为n的数组，从数组第一个开始drop

### 参数
*array(Array)：查询数组

*[n=1]：要丢弃的数的个数

### 返回
返回新数组

### 举例
```js
_.drop(['a','s','d','f','g','h','j','k','l'],8)
// =>[ 'l' ]```

## _.dropRight(array, [n=1])
创建一个数组，从数组的末尾开始丢弃元素

### 参数
*array(Array)：查询数组

*[n=1]：要丢弃的数的个数

### 返回
返回新数组

### 举例
```js
_.dropRight([1,2,3,4,5,6,7,8,9],5)'
// =>[ 1, 2, 3, 4 ]```

## _.dropRightWhile(array, [predicate=_.identity], [thisArg])
创建一个数组，从数组末尾开始丢弃元素,直到predicate返回错值。predicate与thisArg一定有关并且调用三个参数:(value,,index,array)

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

### 参数
*array(Array)：查询数组

*'[predicate=_.identity]'(function/object/string):对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg](*):predicate中的值

### 返回
返回新的数组

### 举例



## _.dropWhile(array, [predicate=_.identity], [thisArg])
创建一个数组，从数组的第一个元素开始舍弃，直到predicate返回错值。predicate与thisArg一定有关，并且调用三个参数:(value,,index,array)

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

### 参数
*array(Array)：查询数组

*'[predicate=_.identity]'(function/object/string):对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg](*):predicate中的值

### 返回
返回新的数组

### 举例
```js
var users = [
       { 'user': 'barney',  'active': false },
       { 'user': 'fred',    'active': false },
       { 'user': 'pebbles', 'active': true }
   ];
'_.pluck(_.dropWhile(users, 'user','barney'), 'user');'
// =>'[ 'fred', 'pebbles' ]```


## _.fill(array, value, [start=0], [end=array.length])
填充数组的元素，从开始到结束，但是不包含开始的位置

### note
这种方法可以变异数组

### 参数
*array (Array): 要填充的数组

*value (): 用来填充数组的数值

*[start=0] (number): 开始的位置

*[end=array.length] (number): 结束的位置

### 返回
(Array)返回数组

### 举例
```js
_.fill([1,2,3,4,5,6],'2',1,4)
// =>[ 1, '2', '2', '2', 5, 6 ]
_.fill(['a','s','d','f'],2)
// =>[ 2, 2, 2, 2 ]```

## _.findIndex(array, [predicate=_.identity], [thisArg])
这个方法就像_.find，但是期望返回的是第一个元素的索引而不是元素的值。

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

### 参数
*array (Array): 要查找的数组.

*[predicate=_.identity] (Function|Object|string):对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg] ():predicate中的值

### 返回
返回找到元素的索引，否则返回-1

### 举例



## _.findLastIndex(array, [predicate=_.identity], [thisArg])

这种是像_.findIndex一样，期待返回的是从后面开始查找到的元素的索引。

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

### 参数
*array (Array): 要查找的数组.

*[predicate=_.identity] (Function|Object|string): 对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg] (): predicate中的值

### 返回
返回找到元素的索引，否则返回-1

### 举例
```js
var users = [
    { 'user': 'a ',  'active': false },
    { 'user': 's ',    'active': true },
    { 'user': 'd ', 'active': false }
];

_.findLastIndex(users, 'active');
// =>1```

## _.fist(array)
得到数组的第一个元素。

### 别名
_.head

参数
*array(Array):要查询的数组

### 返回
返回数组的第一个元素。

### 举例
```js
_.first([1, 2, 3, 4, 5, 6, 7])
// =>1```

## _.flatten(array, [isDeep])
抹平嵌套的数组。如果isDeep为true，则递归地抹平嵌套数组。否则，即isDeep为空或者false时，只抹平第一层。

### 参数
*array(Array):要抹平的数组

### 返回
返回抹平后的数组

###举例
```js
_.flatten([1,2,[3,[4,5]]],true)
// =>[ 1, 2, 3, 4, 5 ]
_.flatten([1,2,[3,[4,5]]])
// =>[ 1, 2, 3, [ 4, 5 ] ]```



