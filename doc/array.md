##"Array" methods
### _.chunk(array, [size=1])
创建一个数组，将元素分割成size长度的几个数组。如果元素不可以平均分配，剩下的元素就是一个数组。

#### 参数
*array(Array)：数组处理

*size：每个数组的长度
#### 返回
返回新数组，放在原来的数组中

#### 举例：
```js
_.chunk(['a','s','d','f','g','h','j'],3)
// =>[ [ 'a', 's', 'd' ], [ 'f', 'g', 'h' ], [ 'j' ] ]
```


### _.compact(array)
创建一个数组,把数组里面所有错的值都移除。false,null,0,"",undefined,NaN这些都是错的

#### 参数
*array(Array)：紧凑的数组

#### 返回
返回弃掉错值的新数组

#### 举例
```js
_.compact([0,null,'a',1,'']
// =>'[ 'a', 1 ]
```

### _.difference(array, [values])
新建一个数组，使得这个数组里的值没有另外提供的数组里面的值。

#### 参数
*array(Array)：检查数组

*[value]：另外提供的数组的值
### 返回
返回弃掉另外数值新数组

#### 举例
```js
_.difference([1,3,5,7,9],[3,6,8])
// =>[ 1, 5, 7, 9 ]
```

### _.drop(array, [n=1])
创建一个长度为n的数组，从数组第一个开始drop

#### 参数
*array(Array)：查询数组

*[n=1]：要丢弃的数的个数

#### 返回
返回新数组

#### 举例
```js
_.drop(['a','s','d','f','g','h','j','k','l'],8)
// =>[ 'l' ]
```

### _.dropRight(array, [n=1])
创建一个数组，从数组的末尾开始丢弃元素

#### 参数
*array(Array)：查询数组

*[n=1]：要丢弃的数的个数

#### 返回
返回新数组

#### 举例
```js
_.dropRight([1,2,3,4,5,6,7,8,9],5)'
// =>[ 1, 2, 3, 4 ]
```

### _.dropRightWhile(array, [predicate=_.identity], [thisArg])
创建一个数组，从数组末尾开始丢弃元素,直到predicate返回错值。predicate与thisArg一定有关并且调用三个参数:(value,,index,array)

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

#### 参数
*array(Array)：查询数组

*'[predicate=_.identity]'(function/object/string):对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg](*):predicate中的值

#### 返回
返回新的数组

#### 举例
```js
var result1 = _.dropRightWhile([1,2,3,4,5,6],function(n){
    return n>5;
})
// =>[ 1, 2, 3, 4, 5 ]
```


### _.dropWhile(array, [predicate=_.identity], [thisArg])
创建一个数组，从数组的第一个元素开始舍弃，直到predicate返回错值。predicate与thisArg一定有关，并且调用三个参数:(value,,index,array)

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

#### 参数
*array(Array)：查询数组

*'[predicate=_.identity]'(function/object/string):对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg](*):predicate中的值

#### 返回
返回新的数组

#### 举例
```js
var result1 = _.dropWhile([1,2,3,4,5,6],function(n){
    return n<3;
})
// =>[ 3, 4, 5, 6 ]
```


### _.fill(array, value, [start=0], [end=array.length])
填充数组的元素，从开始到结束，但是不包含开始的位置

#### note
这种方法可以变异数组

#### 参数
*array (Array): 要填充的数组

*value (): 用来填充数组的数值

*[start=0] (number): 开始的位置

*[end=array.length] (number): 结束的位置

#### 返回
(Array)返回数组

#### 举例
```js
_.fill([1,2,3,4,5,6],'2',1,4)
// =>[ 1, '2', '2', '2', 5, 6 ]
_.fill(['a','s','d','f'],2)
// =>[ 2, 2, 2, 2 ]
```

### _.findIndex(array, [predicate=_.identity], [thisArg])

这个方法就像_.find，但是期望返回的是第一个元素的索引而不是元素的值。

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

#### 参数
*array (Array): 要查找的数组.

*[predicate=_.identity] (Function|Object|string):对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg] ():predicate中的值

#### 返回
返回找到元素的索引，否则返回-1

#### 举例



### _.findLastIndex(array, [predicate=_.identity], [thisArg])

这种是像_.findIndex一样，期待返回的是从后面开始查找到的元素的索引。

如果创建的predicate是一个属性名，并且是_.property类型，那么返回的是被给定的元素的属性值。

如果thisArg也有值，则会对比predicate中的属性名的thisArg的值，drop。

如果predicate是一个object,array中的某一项的属性和object中的属性一致，drop array中的这个object。

#### 参数
*array (Array): 要查找的数组.

*[predicate=_.identity] (Function|Object|string): 对数组的每个函数进行调用，可以是function/object/string值类型

*[thisArg] (): predicate中的值

#### 返回
返回找到元素的索引，否则返回-1

#### 举例
```js
var users = [
    { 'user': 'a ',  'active': false },
    { 'user': 's ',    'active': true },
    { 'user': 'd ', 'active': false }
];

_.findLastIndex(users, 'active');
// =>1
```

### _.fist(array)

得到数组的第一个元素。

#### 别名
_.head

#### 参数
*array(Array):要查询的数组

#### 返回
返回数组的第一个元素。

#### 举例
```js
_.first([1, 2, 3, 4, 5, 6, 7])
// =>1
```

### _.flatten(array, [isDeep])

抹平嵌套的数组。如果isDeep为true，则递归地抹平嵌套数组。否则，即isDeep为空或者false时，只抹平第一层。

#### 参数
*array(Array):要抹平的数组

#### 返回
返回抹平后的数组

#### 举例
```js
_.flatten([1,2,[3,[4,5]]],true)
// =>[ 1, 2, 3, 4, 5 ]
_.flatten([1,2,[3,[4,5]]])
// =>[ 1, 2, 3, [ 4, 5 ] ]
```

### _.flattenDeep(array)

递归的抹平嵌套的数组

#### 参数
*array (Array)：要抹平的数组

#### 返回
返回新的数组

#### 举例
```js
_.flattenDeep([1,2,[3,[4,5]]]);
// =>[ 1, 2, 3, 4, 5 ]
```

### _.indexOf(array, value, [fromIndex=0])

在数组里根据数值查找一个元素，返回第一次出现这个元素的值的索引。如果fromIndex是负值，则返回-1；如果fromindex是true，那么把这个位置开始查找。

#### 参数
*array (Array): 查找的数组

*value (*): 要查找的元素的值

*[fromIndex=0] (boolean|number): 从数组中开始查找的位置，值为true或者一个数值

#### 举例
```js
_.indexOf([1,2,3,3,2,1],2,2);
// =>4
_.indexOf([1,2,3,3,2,1],2,-1);
// =>-1
```

### _.initial(array)

移除最后一个元素

#### 参数
*array (Array): 要查询的数组.

#### 返回
返回新的数组

#### 举例
```js
_.initial([ 1, 2, 3, 3, 2 , 1 ])
// =>[ 1, 2, 3, 3, 2 ]
```

### _.intersection([arrays])

从提供的数组中得到数组中相同的元素的值，根据数值创建一个新数组

#### 参数
*[arrays] (…Array): n个数组

#### 返回
返回所有数组中都有的值构件的新数组

#### 举例
```js
_.intersection([1,2,3],[1,2,4],[1,3,5]);
// =>[ 1 ]
```

### _.last(array)

得到数组的最后一个元素

#### 参数
*array (Array):待处理的数组

#### 返回
返回数组的最后一个元素

#### 举例
```js
_.last([1,2,3,4,5]);
// =>5
```

### _.lastIndexOf(array, value, [fromIndex=array.length-1])

这种方法和_.indexOf一样，期望从数组的右边开始遍历

#### 参数
*array (Array): 要查找的数组

*value (*): 要查找的元素

*[fromIndex=array.length-1] (boolean|number):从数组中开始查找的位置，值为true或者一个数值

#### 返回
返回查找的数值的索引，否则返回-1

#### 举例


### _.pull(array, [values])

根据数值从数组中移除给定的数值。

#### Note
和 _.without不一样, 这种方法改变了数组

#### 参数
*array (Array): 要处理的数组

*[values] (…*): 要移除的数值

#### 返回
返回新的数组

#### 举例
```js
var list= [1,2,3,3,2,1]
_.pull(list,1,2);
// => [ 3, 3 ]
```

### _.pullAt(array, [indexes])

给定一个索引，从数组中移除这个索引的值构成一个新数组，返回新数组。索引可以是单独的索引或者指定数组的索引。

#### Note
和 _.at不一样, 这种方法会改变数组

#### 数组

array (Array): 要简化的数组
[indexes] (…(number|number[]): 要移除元素的索引, 可以是单独的索引或者指定数组的索引

#### 返回
(Array): 返回新数组

#### 举例
```js
_.pullAt([1,2,3,3,2,1],0,3);
// =>[ 1, 3 ]
```

### _.remove(array, [predicate=_.identity], [thisArg])

当predicate返回true时，移除所有的元素，返回由移除元素构成的数组。predicate与thisArg一定有关，并且可以调用三个参数：(value, index, array)。

如果predicate是一个属性名，那么返回给定元素的属性值。

如果thisArg也有值的话，根据对应元素的属性值返回true，否则返回false。

如果predicate是一个object，根据元素与给定object的属性返回true，否则返回false。

#### Note
不像_.filter, 这种方法会改变数组.

#### 参数
*array (Array): 要简化的数组.
*[predicate=_.identity] (Function|Object|string): 对数组的每个函数进行调用，可以是function/object/string值类型.
*[thisArg] (*): predicate中的值.

#### 返回
返回一个由移除元素构成的新数组。

#### 举例
```js
var result1 = _.remove([1,2,3,4,5,6],function(n){
    return n % 2 == 0;
})
// =>[ 2, 4, 6 ]
```

### _.rest(array)

得到除了第一个元素的其他所有元素构成的新数组。

#### 别名
_.tail

#### 参数
*array (Array): 要处理的数组.

#### 返回
返回新数组

#### 举例
```js
_.rest([1,2,3,4,5,6])
// =>[ 2, 3, 4, 5, 6 ]
```

### _.slice(array, [start=0], [end=array.length])

创建一个数组，从开始的位置（但是不包括开始）到结束的位置，中间的取值构成一个新的数组。

#### Note
This method is used instead of Array#slice to support node lists in IE < 9 and to ensure dense arrays are returned.

#### 参数
*array (Array): 要处理的数组.

*[start=0] (number): 开始的位置.

*[end=array.length] (number): 结束的位置.

#### 返回
返回新数组

#### 举例
```js
_.slice([1,2,3,4,5,6],1,4);
// =>[ 2, 3, 4 ]
```

### _.sortedIndex(array, value, [iteratee=_.identity], [thisArg])

在数组中插入一个数，返回新数组中这个数的第一个值的索引。
Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order. If an iteratee function is provided it is invoked for value and each element of array to compute their sort ranking. The iteratee is bound to thisArg and invoked with one argument; (value).

如果predicate是一个属性名，那么返回给定元素的属性值。

如果thisArg也有值的话，根据对应元素的属性值返回true，否则返回false。

如果predicate是一个object，根据元素与给定object的属性返回true，否则返回false。

#### 参数
*array (Array): 排序数组检查.

*value (*): 要插入的数值.

*[iteratee=_.identity] (Function|Object|string): 对数组的每个函数进行调用.

*[thisArg] (*): iteratee中的值.

#### 返回
返回被插入数组的的值在新数组中的索引

#### 举例
```js
_.sortedIndex([1,2,3,4,5,6],2);
// =>1
```

### _.sortedLastIndex(array, value, [iteratee=_.identity], [thisArg])

这种方法类似g_.sortedIndex，期望返回这个数值在新排序数组中的最后一个数的索引。

#### 参数
*array (Array): 排序数组检查.

*value (*): 要插入的数值.

*[iteratee=_.identity] (Function|Object|string): 对数组的每个函数进行调用.

*[thisArg] (*): iteratee中的值.

#### 返回
返回插入数在新数组中的索引

#### 举例
```js
_.sortedLastIndex([1,2,2,4,5,6],2);
// =>3
```

### _.take(array, [n=1])

从数组左边开始，取数组里前面的n个元素构成一个新数组。

#### 参数
*array (Array): 要查询的数组.

*[n=1] (number): 要从数组中取的元素的个数.

#### 返回
返回新数组。

### 举例
```js
_.take([1,2,3,4,5,6],4);
// =>[ 1, 2, 3, 4 ]
```

### _.takeRight(array, [n=1])

从数组的右边开始取数组里的元素，取n个构成一个新数组

#### 参数
*array (Array): 要查询的数组.

*[n=1] (number): 要从数组中取的元素的个数.

#### 返回
返回新数组.

#### 举例
```js
_.takeRight([1,2,3,4,5,6],4);
// =>[ 3, 4, 5, 6 ]
```

### _.takeRightWhile(array, [predicate=_.identity], [thisArg])

从数组右边开始取元素，知道predicate出现错误，这些元素构成一个新数组。predicate与thisArg一定有关并且可以调用三个参数：(value, index, array).

如果predicate是一个属性名，那么返回给定元素的属性值。

如果thisArg也有值的话，根据对应元素的属性值返回true，否则返回false。

如果predicate是一个object，根据元素与给定object的属性返回true，否则返回false。

#### 参数
*array (Array): 排序数组检查.

*[iteratee=_.identity] (Function|Object|string): 对数组的每个函数进行调用.

*[thisArg] (*): predicate中的值.

#### 返回
返回新数组

#### 举例
```js
_.takeRightWhile([1,2,3,4,5,6],function(n){
    return n > 3;
});
// =>[ 4, 5, 6 ]
```

### _.takeWhile(array, [predicate=_.identity], [thisArg])

从数组左边开始取元素，直到predicate返回错误，取出的元素构成一个新数组。predicate与thisArg一定有关并且可以调用三个参数：(value, index, array).

如果predicate是一个属性名，那么返回给定元素的属性值。

如果thisArg也有值的话，根据对应元素的属性值返回true，否则返回false。

如果predicate是一个object，根据元素与给定object的属性返回true，否则返回false。

#### 参数
*array (Array): 排序数组检查.

*[iteratee=_.identity] (Function|Object|string): 对数组的每个函数进行调用.

*[thisArg] (*): predicate中的值.

#### 返回
返回新数组

#### 举例
```js
_.takeWhile([1, 2, 2, 4, 5, 6], function (n) {
    return n < 3;
});
// =>[ 1, 2, 2 ]
```

### _.union([arrays])

根据数值来比较几个数组中的值，将这些数值从小到大排序，构成一个新的数组。

#### 参数
*[arrays] (…Array): 要检查的数组.

#### 返回
返回新数组

#### 举例
```js
_.union([1,2,3],[1,2,4],[1,3,5]);
// =>[ 1, 2, 3, 4, 5 ]
```

### _.uniq(array, [isSorted], [iteratee], [thisArg])

Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurence of each element is kept. Providing true for isSorted performs a faster search algorithm for sorted arrays. If an iteratee function is provided it is invoked for each element in the array to generate the criterion by which uniqueness is computed. The iteratee is bound to thisArg and invoked with three arguments: (value, index, array).

如果iteratee是一个属性名，那么返回给定元素的属性值。

如果thisArg也有值的话，根据对应元素的属性值返回true，否则返回false。

如果iteratee是一个object，根据元素与给定object的属性返回true，否则返回false。

#### 别名
_.unique

#### 参数
*array (Array): 要检查的数组.

*[isSorted] (boolean): 指定数组排序.

*[iteratee] (Function|Object|string): 每个函数都调用.

*[thisArg] (*): iteratee中的值.

#### 返回
返回新的数组.

### _.unzip(array)

这种方法类似 _.zip，zip是将数组重组，每个数组的第一个数构成一个数组，第二个数构成一个数组，以此类推。unzip就是zip的逆过程。

#### 参数
*array (Array): 待重组的数组.

#### 返回
返回元素重重组后的新数组.

#### 举例
```js
var result = _.zip([1,2,3],[1,2,4],[1,3,5])
console.log(result);
// =>[ [ 1, 1, 1 ], [ 2, 2, 3 ], [ 3, 4, 5 ] ]
console.log(_.unzip(result));
// =>[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 5 ] ]
```

### _.unzipWith(array, [iteratee], [thisArg])

这种方法与_.unzip类似，除了它可以用iteratee来确定重组的数值怎么结合。iteratee一定与thisArg有关并且可以调用三个参数: (accumulator, value, index, group).

#### 参数
*array (Array): 待重组的数组.

*[iteratee] (Function): 与重组数值结合的function.

*[thisArg] (*):iteratee中的值.

#### 返回
(Array): 返回重组数值之后的新数组.

#### 举例
```js
var result = _.zip([1,2,3],[1,2,4],[1,3,5])
console.log(result);
// =>[ [ 1, 1, 1 ], [ 2, 2, 3 ], [ 3, 4, 5 ] ]
console.log(_.unzipWith(result, _.add));
// =>[ 6, 7, 9 ]
```

### _.without(array, [values])

根据数值将数组中的与values相等的值过滤，剩下的值构成一个新数组。

#### 参数
*array (Array): 待过滤的数组.

*[values] (…*): 要过滤掉的数.

#### 返回
返回过滤之后的新数组.

#### 举例
```js
_.without([1,2,3,1,3],1,2);
// =>[ 3, 3 ]
```

### _.xor([arrays])

将数组中互不相同的几个数取出来构成一个新数组

#### 参数
*[arrays] (…Array): 待检查的数组.

#### 返回
返回新数组.

#### 举例
```js
_.xor([1,2,3,1,3],[1,2]);
// =>[ 3 ]
```

### _.zip([arrays])

把每个数组的第一个数值按照数组的顺序构成一个数组，第二个数值类似的构成一个数组，以此类推，构成一个新的数组。

#### 参数
[arrays] (…Array): 带处理的数组.

#### 返回
返回元素重组之后的数组.

#### 举例
```js
_.zip([1,2,3,1,3],[1,2,3],[1,2,3,4]);
// =>[ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ], [ 1, undefined, 4 ], [ 3, undefined, undefined ] ]
```

### _.zipObject(props, [values=[]])

是_.pairs的逆向;这个方法返回由数组的属性名和属性值构成的object。提供一个二维数组,例如[[key1,value1],[key2,value2]]或两个数组,一个属性名和一个相应的属性值。

#### 别名
_.object

#### 参数
*props (Array): 属性名.

*[values=[]] (Array): 属性值.

#### 返回
(Object): 返回新的object.

#### 举例
```js
_.zipObject([['a',1],['s',2],['d',3]]);
// =>{ a: 1, s: 2, d: 3 }
```

### _.zipWith([arrays], [iteratee], [thisArg])

这种方法类似 _.zip，但是这个可以决定数值是怎么结合的。iteratee一定与thisArg有关并且可以调用三个参数：(accumulator, value, index, group).

#### 参数
*[arrays] (…Array): 带处理的数组.

*[iteratee] (Function): 结合数值的function.

*[thisArg] (*): iteratee中的数值.

#### 返回
返回重组后的数组.

#### 举例
```js
_.zipWith([1,2,3,4],[5,6,7,8,],[1,3],_.add);
// =>[ 7, 11, 10, 12 ]
```
