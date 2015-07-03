## "Collection" methods

### at

**_.at(collection, [props])**

给定一个数组，查找这个数组中的props，props可以是一个属性值或者index。返回查找到的数值构成的新数组。

#### Arguments

* collection (Array|Object|string): 要遍历的集合.

* [props] (…(number|number[]|string|string[]): 被单独指定或者在数组中，要选择的元素的属性值或者索引.

#### Returns

(Array): 返回选择元素之后的新数组.

#### Example
```js
_.at(['a','s','d'],1,2);
// =>[ 's', 'd' ]
```

### countBy

```_.countBy(collection, [iteratee=_.identity], [thisArg])```

统计iteratee在collection中出现的个数，即在collection中遍历iteratee，所产生的结果组成这个新对象。对象中的属性名是iteratee得来的，属性值即是统计之后得到的值。该iteratee与thisArg一定有关并且可以调用三种参数：(value, index|key, collection).

如果iteratee是一个对象，在collection中调用iteratee，根据返回的true和false进行统计。

如果iteratee是一个属性名，在collection中调用iteratee，根据返回的属性值进行统计。

如果iteratee是一个属性名，并且thisArg也有值，在collection中调用iteratee和thisArg，根据返回的true和 false进行统计。
#### Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function|Object|string):
对每个函数进行调用.

* [thisArg] ():iteratee中的值.

#### Returns
(Object): 返回组成的对象.
#### Example
```js
_.countBy(['aa','sss','ddss'],'length');
// =>{ '2': 1, '3': 1, '4': 1 }
var aas = [{'aa': 1}, {'aa': 1}, {'aa': false}, {'aa': true}];
console.log(_.countBy(aas,{'aa':1}));
//={ true: 2, false: 2 }
console.log(_.countBy(aas,'aa'));
//=>{ '1': 2, false: 1, true: 1 }
console.log(_.countBy(aas,'aa',1));
//=>{ true: 2, false: 2 }
```
### every
```_.every(collection, [predicate=_.identity], [thisArg])```

集合的所有元素是否能通过predict的检查。predict与thisArg绑定，并且可以调用三个参数(value, index|key, collection)。

如果predict是个对象，将这个对象与array中的对象相比较，如果全部为true，那么返回true，如果出现false，那么返回false。

如果predict是个属性名，比较array中属性名的属性值，如果全部为true，那么返回true，如果出现false，那么返回false。

如果predict是个属性名，并且thisArg也有值，将thisArg与array的属性值相比较，如果全部为true，那么返回true，如果出现false，那么返回false。
####Aliases
_.all
####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [predicate=_.identity] (Function|Object|string): 每个函数都要调用.

* [thisArg] (): 与predict绑定的值.

####Returns
如果array中所有值都通过predict检查，那么返回true，否则返回false。

####Example
```js
var aas = [{'aa':1},{'aa': false},{'aa':3},{'aa':4}];
console.log(_.every(aas,{'aa':false}));
// => false
var aas = [{'aa':1},{'aa': 2},{'aa':3},{'aa':4}];
console.log(_.every(aas,'aa'));
// => true
var aas = [{'aa':1},{'aa': 1},{'aa':1},{'aa':1}];
console.log(_.every(aas,'aa',1));
// =>true
```

### filter
```_.filter(collection, [predicate=_.identity], [thisArg])```

遍历集合的元素，返回一个满足predict的所有元素构成的新数组。predict与thisArg绑定，并且可以调用三种参数: (value, index|key, collection).

如果predict是一个对象，与array中的对象比较，当为true时，滤掉这个对象，返回由滤掉的对象构成的array。

如果predict是一个属性名，当array中对应属性名的属性值为true时，滤掉对应的对象，返回由滤掉的对象构成的新数组。

如果predict是一个属性名，并且thisArg也有值时，比较array中对应属性名的属性值，如果与thisArg相等，那么滤掉这个对应的对象，返回由滤掉的对象构成的新数组。
####Aliases
_.select

####Arguments

* collection (Array|Object|string): 要遍历的集合.

* [predicate=_.identity] (Function|Object|string): 每个函数都要调用.

* [thisArg] (*): 与predicate绑定.

####Returns
(Array): 返回一个新的数组.

####Example
```js
var aas = [{'aa': 1}, {'aa': 1}, {'aa': false}, {'aa': true}];
console.log(_.filter(aas,{'aa':1}));
// =>[ { aa: 1 }, { aa: 1 } ]
console.log(_.filter(aas,'aa'));
// =>[ { aa: 1 }, { aa: 1 }, { aa: true } ]
console.log(_.filter(aas,'aa',1));
// =>[ { aa: 1 }, { aa: 1 } ]
```

###find
```_.find(collection, [predicate=_.identity], [thisArg])```

遍历集合中的元素，返回满足predict的第一个的元素。predict与thisArg绑定，并且可以调用三种参数: (value, index|key, collection).

如果predict是一个对象时，与array中的对象相比较，如果为true并且是第一次为true，那么返回相应的这个对象。

如果predict是一个属性名时，array中的对应的属性名的属性值为true并且是第一次时，返回这个对应的对象。

如果predict是一个属性名，并且thisArg也有值时，比较array中的对应属性名的属性值，如果相等并且是第一次相等，那么返回对应的对象。
####Aliases
_.detect

####Arguments
* collection (Array|Object|string): 要查找的集合.

* [predicate=_.identity] (Function|Object|string): 每个函数都要调用.

* [thisArg] (*): 与predicate绑定的值.

####Returns
(*): 返回查找到的对应的元素，否则返回undefined.

#### Example
```js
var aas = [{'aa': false}, {'aa': true}, {'aa': 1}, {'aa': 1}];
console.log(_.find(aas,{'aa':1}));
// => { aa: 1 }
console.log(_.find(aas,'aa'));
// => { aa: true }
console.log(_.find(aas,'aa',1));
// => { aa: 1 }
```

###findLast
```_.findLast(collection, [predicate=_.identity], [thisArg])```

这个方法除了是从集合右边开始查找之外和_.find是一样的。

####Arguments
* collection (Array|Object|string): 要查找的集合.

* [predicate=_.identity] (Function|Object|string): 每个函数都要调用.

* [ thisArg] (*): predicate绑定的值.

####Returns
(*): 返回对应的元素，否则返回 undefined.

####Example
```js
var aas = [{'aa': false}, {'aa': true}, {'aa': 1}, {'aa': 1}];
console.log(_.findLast(aas,'aa'));
// =>{ aa: 1 }
```

### findWhere

```_.findWhere(collection, source)```

对源对象和集合中的每一个元素进行一个深的比较，返回属性值相等的第一个元素。

####Note:

这种方法支持比较数组、布尔表达式、时间对象、数值、对象的对象、正则表达式和字符串。对象和自己比较，不能够继承，枚举属性值。要比较一个自己的或者继承的属性值见_.matchesProperty.

####Arguments

* collection (Array|Object|string): 要查找的集合.

* source (Object): 对应对象的属性值.

####Returns
(*): 返回对应的元素，否则返回undefined.

####Example

```js
var aas = [{'aa': true , 'ss':1}, {'aa': false,'ss':3}, {'aa': 1,'ss':2}, {'aa': 1,'ss':4}];
console.log(_.findWhere(aas,{'aa': 1}));
// => { aa: 1, ss: 2 }
```

###forEach
```_.forEach(collection, [iteratee=_.identity], [thisArg])```

循环集合中的元素，并对每个元素调用iteratee。iteratee与thisArg绑定，并且可以调用三种参数：(value, index|key, collection). 返回false时iteratee会提前停止调用。

####Note:
跟其他的集合方法相比，有长度属性的对象可以向数组那样遍历。一般用情况，```_.forIn ```和 ```_.forOwn```可能用于对象遍历。

####Aliases
_.each

####Arguments

* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function): 是函数类型。每个函数都要调用.

* [thisArg] (*): iteratee绑定的值.

####Returns
(Array|Object|string): 返回集合.

####Example
```js
var aas = [{'aa':1},{'aa': 1},{'aa':1},{'aa':1}];
_.forEach(aas,function(n,key){
    console.log(key,n);
})
// => 0 { aa: 1 }
      1 { aa: 1 }
      2 { aa: 1 }
      3 { aa: 1 }

_.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
    console.log(key, n);
});
// => a 1
      b 2
_.forEach(([1, 2]),function(n) {
    console.log(n);
});
// => 1  2
```
###forEachRight
```_.forEachRight(collection, [iteratee=_.identity], [thisArg])``

这种方法和_.forEach一样，除了它是从右到左遍历集合的。

####Aliases
_.eachRight

####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function): 只能是函数类型。每个函数都要调用.

* [thisArg] (*): 与iteratee绑定的值.

####Returns
(Array|Object|string): 返回collection.

####Example
```js
var aas = [{'aa':1},{'aa': 1},{'aa':1},{'aa':1}];
_.forEachRight(aas,function(n,key){
    console.log(n);
})
//=>{ aa: 1 } 3
    { aa: 1 } 2
    { aa: 1 } 1
    { aa: 1 } 0

_.forEachRight({ 'a': 1, 'b': 2 }, function(n, key) {
    console.log(n,key);
    });
//=>2 'b'
    1 'a'
_.forEachRight(([1, 2]),function(n) {
    console.log(n);
});
//=>2  1
```
###groupBy
```_.groupBy(collection, [iteratee=_.identity], [thisArg])```

通过调用iteratee遍历集合的每一个元素，返回一个由新的键值组成的对象。生成的键值对的属性名由iteratee得来，生成的键值对的值由数组中的元素得来。iteratee与thisArg绑定，并且可以调用三种参数：(value, index|key, collection).

如果iteratee是一个属性名，调用iteratee遍历collection，如果返回true，执行_.groupBy.

如果iteratee是一个属性名，并且thisArg也有值，调用iteratee和thisArg遍历collection，如果返回true，执行_.groupBy。

如果iteratee是一个对象，调用iteratee遍历collection，如果返回true，执行_.groupBy。
####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function|Object|string): iteratee可以是一个function、object或者string。对每个元素进行调用

* [thisArg] (*): 与iteratee绑定.

####Returns
(Object): 返回新构成的对象.

####Example
```js
var aas = [{'aa':1},{'aa': false},{'aa':true},{'aa':1}];
console.log(_.groupBy(aas,'aa'));
//=>{ '1': [ { aa: 1 }, { aa: 1 } ] , false: [ { aa: false } ] , true: [ { aa: true } ] }
console.log(_.groupBy(([1,1,2,3]),function(n){
return n;}));
//=>{ '1': [ 1, 1 ], '2': [ 2 ], '3': [ 3 ] }
```

###includes

```_.includes(collection, target, [fromIndex=0])```

根据数值相等检查一个数值（target）是否在collection中,在返回true，不在返回false。如果fromindex是负值，从collection的末尾开始作为偏移量。

####Aliases
```_.contains, _.include```

####Arguments

* collection (Array|Object|string): 要查找的集合.

* target (*): 要查找的数值.

* [fromIndex=0] (number): 开始查找处的索引.

####Returns
(boolean): 如果找到对应元素那么返回true，否则返回false.

####Example
```js
console.log(_.includes([1, 2, 3], 2, 1));
//=>true
console.log(_.includes({ 'a':1, 'b': 1 },1 ));
//=>true
//fronIndex是负值是，作为偏移量
console.log(_.includes([1, 2, 3], 2, -1));
//=>fase   (从末尾偏移-1，相当于从index=2开始查找）
console.log(_.includes([1, 2, 3], 3, -1));
//=>true
```
###indexBy

```_.indexBy(collection, [iteratee=_.identity], [thisArg])```

通过对collection的元素调用iteratee，得到的元素即键值对构成一个新对象，返回这个新对象。**??????????** iteratee与thisArg绑定，并且可以调用三种函数:(value, index|key, collection).

If a property name is provided for iteratee the created _.property style callback returns the property value of the given element.

If a value is also provided for thisArg the created _.matchesProperty style callback returns true for elements that have a matching property value, else false.

If an object is provided for iteratee the created _.matches style callback returns true for elements that have the properties of the given object, else false.
####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function|Object|string):可以是function、object、string。 对每个元素调用.

* [thisArg] (*): iteratee绑定的值.

####Returns
(Object): 返回重组后的新数组
####Example
```js
var aas = [{'aa':1},{'aa': false},{'aa':true},{'aa':1}];
console.log(_.indexBy(aas,'aa'));
//=>{ '1': { aa: 1 }, false: { aa: false }, true: { aa: true } }
```
### invoke
```_.invoke(collection, path, [args])```

通过对collection的每个元素调用path，返回调用path之后生成的新数组。任何额外的参数都可以提供给每个调用的方法。如果方法名是function，它必然调用集合中的每个元素。

####Arguments
* collection (Array|Object|string): 要遍历的集合.

* path (Array|Function|string): 对每个元素进行调用的.

* [args] (…*):调用方法的参数.

####Returns

(Array): 返回新数组.

####Example
```js
var aas = [[2,1,3],[3,5,1]];
console.log(_.invoke( aas , 'sort'));
//=>[ [ 1, 2, 3 ], [ 1, 3, 5 ] ]
```

### map

```_.map(collection, [iteratee=_.identity], [thisArg])```

在collection中寻找iteratee，即对集合中的每个元素调用iteratee，返回由得到的结果构成的新数组。iteratee与thisArg绑定，并且可以调用三种参数: (value, index|key, collection).

如果iteratee是一个对象，在collection中查找这个对象，即在collection中调用iteratee，由返回的true和false构成最后返回的新数组。

如果iteratee是一个属性名，在collection中查找这个属性名，即在collection对每个元素中调用iteratee，由返回的属性值构成最后返回的新数组。

如果iteratee是一个属性名，并且thisArg也有值，在collection中查找iteratee和thisArg，即在collection中调用iteratee和thisArg，由返回的true和false构成最后返回的新数组。

许多lodash methods需要谨慎用来作为iteratee调用(在用_.every, _.filter, _.map, _.mapValues, _.reject, and _.some）。

要谨慎用的方法有：
ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max, min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range, sample, some, sum, uniq, and words

####Aliases
_.collect
####Arguments
* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function|Object|string): iteratee可以是一个function、object、string。对collection中的每个元素调用iteratee.

* [thisArg] (*): iteratee绑定的值.

####Returns
(Array): 返回新的array.
####Example
```js
console.log(_.map({ 'a':1, 'b': 1 },function(n,key){
    return key;
} ));
//=>[ 'a', 'b' ]

var aas = [{'aa': 1}, {'aa': 1}, {'aa': false}, {'aa': true}];

console.log(_.map(aas,{'aa': 1}));
//=>[ true, true, false, false ]
console.log(_.map(aas,'aa',1));
//=>[ true, true, false, false ]
console.log(_.map(aas,'aa'));
//=>[ 1, 1, false, true ]
```
###partition
```_.partition(collection, [predicate=_.identity], [thisArg])```

将一个数组的元素分割成两个数组，第一个数组的元素是满足predict的元素构成的，第二个数组的元素是剩下的元素构成的。predict与thisArg绑定，并且可以调用三种参数: (value, index|key, collection).

如果predict是一个对象，
If a property name is provided for predicate the created _.property style callback returns the property value of the given element.

If a value is also provided for thisArg the created _.matchesProperty style callback returns true for elements that have a matching property value, else false.

If an object is provided for predicate the created _.matches style callback returns true for elements that have the properties of the given object, else false.
####Arguments
* collection (Array|Object|string): The collection to iterate over.

* [predicate=_.identity] (Function|Object|string): The function invoked per iteration.

* [thisArg] (*): The this binding of predicate.

####Returns
(Array): Returns the array of grouped elements.
####Example
```js
var aas = [{'aa': 1}, {'aa': false},{'aa': 2},  {'aa': true}];
console.log(_.partition(aas,{'aa': 1}));
//=>[ [ { aa: 1 } ], [ { aa: false }, { aa: 2 }, { aa: true } ] ]
console.log(_.partition(aas,'aa'));
//=>[ [ { aa: 1 }, { aa: 2 }, { aa: true } ], [ { aa: false } ] ]
console.log(_.partition(aas,'aa',1));
//=>[ [ { aa: 1 } ], [ { aa: false }, { aa: 2 }, { aa: true } ] ]
```
###pluck
```_.pluck(collection, path)```

返回集合中所有元素的path的属性值。

####Arguments
* collection (Array|Object|string): 要遍历的数组.

* path (Array|string): The path of the property to pluck.

####Returns
(Array): 返回属性值.
####Example
```js
var aas = [{'aa': 1}, {'aa': false},{'aa': 2},  {'aa': true}];
console.log(_.pluck(aas,'aa'));
//=>[ 1, false, 2, true ]
```
###reduce
```_.reduce(collection, [iteratee=_.identity], [accumulator], [thisArg])```

将集合变成一个值，通过对collection中的每一个元素调用iteratee，将得到的结果计算，每个连续的调用都由前面的返回值提供。如果accumulator没有值，那collection的第一个值就作为accumulator的初始值。iteratee与thisArg绑定，并且可以调用四种参数:(accumulator, value, index|key, collection).

许多lodash方法要谨慎作为iteratee来用（在用这些方法_.reduce, _.reduceRight, and _.transform时）.

The guarded methods are:
assign, defaults, defaultsDeep, includes, merge, sortByAll, and sortByOrder
####Aliases
```_.foldl, _.inject```

* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function): 只能是个function。对每个元素进行调用.

* [accumulator] (*): 初始值.
* [thisArg] (*): iteratee的绑定.

####Returns
(*): 返回累积的值.
####Example
```js
console.log(_.reduce(aas,function(total,n){
    return total+n*3;
}));
//=>16  (1+2*3+3*3)
```

###reduceRight
```_.reduceRight(collection, [iteratee=_.identity],[accumulator], [thisArg])```

这种方法和_.reduce一样，除了集合的元素是从右到左遍历的。

####Aliases
_.foldr

####Arguments

* collection (Array|Object|string): 要遍历的集合.

* [iteratee=_.identity] (Function): 只能是function类型，对每个元素都进行调用。

* [accumulator] (*): 初始值.

* [thisArg] (*): iteratee绑定的值.

####Returns

(*): 返回累积后的值.

####Example
```js
console.log(_.reduce(aas,function(total,n){
    return total+n*3;
}));
//=>12  (3+2*3+1*3)
```

####reject
```_.reject(collection, [predicate=_.identity], [thisArg])```

与_.filter相反，这种方法返回的是对集合中所有元素调用predict时返回的不是true的元素。

####Arguments
* collection (Array|Object|string): 要遍历的的集合.

* [predicate=_.identity] (Function|Object|string): 可以是一个function、object或者string.对collection中的每个函数进行调用

* [thisArg] (*): predicate绑定的值.

####Returns
(Array): 返回经过过滤的新数组.
####Example
```js
var aas = [1, 2, 3];
console.log(_.reject(aas,function(n){
return n>1;}));
//=>[ 1 ]
```

###sample

```_.sample(collection, [n])```

从集合中随机获取一个或n个元素。

####Arguments

* collection (Array|Object|string): 要取样的集合.

* [n] (number): 要取样的个数.

####Returns
(*): 返回随机取出的样值.

####Example

```js
var aas = [1, 2, 3];
console.log(_.sample(aas,2));
//=>[ 3, 2 ]
```

###shuffle

**_.shuffle(collection)**

将collection中的元素随机排序，返回一个新的collection。using a version of the Fisher-Yates shuffle.

####Arguments
* collection (Array|Object|string): 要随机排序的集合.

####Returns
(Array): 返回随机排序之后的新数组.

####Example

```js
_.shuffle([1, 2, 3])
//=>[ 2, 3, 1 ]
```

###size

**_.size(collection)**

返回集合中数组或者字符串的长度或者对象的属性名的个数。

####Arguments
* collection (Array|Object|string): The collection to inspect.

####Returns

(number): 返回集合的size.

####Example

```js
_.size({ 'a':1, 'b': 1 });
//=> 2
console.log(_.size('asdfg'));
//=> 5
```

###some
```_.some(collection, [predicate=_.identity], [thisArg])```

检查对集合的所有元素调用predict是否返回true。当函数找到一个对应值时直接返回true，不需要遍历玩整个集合。predict与thisArg绑定并且可以调用三种参数：(value, index|key, collection).

如果predict是一个对象，对集合调用predict，在集合中找到这个对象时，直接返回true，找不到就返回false。

如果predict是一个属性值，对集合调用predict，如果集合中对应属性名的值为true时，直接返回true，找不到就返回false。

如果predict是一个属性名，并且thisArg也有值时，对集合调用predict和thisArg，如果找到对应属性名和属性值立即返回true，找不到就返回false。

####Aliases
_.any

###Arguments
* collection (Array|Object|string): 要遍历的集合.

* [predicate=_.identity] (Function|Object|string): 可以是一个function、object或者string.对collection中的每个元素进行调用。

* [thisArg] (*): predicate绑定的值.

####Returns
(boolean): 如果数组中的元素通过了predict的检查就返回true，否则返回false。

####Example
```js
var aas = [{'aa': 1}, {'aa': 1}, {'aa': false}, {'aa': true}];
console.log(_.some(aas,{'aa': 1}));
//=> true
console.log(_.some(aas,'aa'));
//=> true
console.log(_.some(aas,'aa',2));
//=>false
```
###sort
```_.sortBy(collection, [iteratee=_.identity], [thisArg])```

将collection中的元素进行升序排序。对collection中的每一个元素调用iteratee，将返回的结果进行升序排序，得到一个新数组，返回这个数组。这个方法执行一种稳定的排序顺序,就是它保留了原始相等元素。iteratee与thisArg绑定，并且可以调用三种参数:(value, index|key, collection).

如果iteratee是一个对象，对collection中的每一个元素进行调用iteratee，如果返回true，就将collection中的元素除去iteratee这个对象剩下的对象按照原来的顺序排序，再将iterateet这个对象排在数组的最后面。返回这个新数组。

如果iteratee是一个属性名，对collection调用piteratee，将属性名为predict的对象按照属性值升序排序，布尔值在数值前面，false在true前面，返回新数组。

如果iteratee是一个属性名，并且thisArg也有值，和iteratee的情况是一样的。

####Arguments
* collection (Array|Object|string): The collection to iterate over.

* [iteratee=_.identity] (Function|Object|string): The function invoked per iteration.

* [thisArg] (*): The this binding of iteratee.

####Returns
(Array): Returns the new sorted array.
####Example
```js
console.log(_.sortBy([1, 3, 4], function(n) {
    return Math.sin(n);
}));
//=>[ 4, 3, 1 ]  (将sin(n)升序排序）
var aas = [{'aa': 2}, {'aa': 3},  {'aa': false},{'aa':true}];
console.log(_.sortBy(aas,{'aa': 3}));
//=>[ { aa: 2 }, { aa: false }, { aa: true }, { aa: 3 } ]
console.log(_.sortBy(aas,'aa'));
//=>[ { aa: false }, { aa: true }, { aa: 2 }, { aa: 3 } ]
console.log(_.sortBy(aas,'aa',2));
//=>[ { aa: 3 }, { aa: false }, { aa: true }, { aa: 2 } ]
```
###sortByAll
```_.sortByAll(collection, iteratees)```

这种方法和_.sortBy一样，唯一不一样的是它可以通过多个迭代或多个属性名称来排序。

如果iteratee是一个对象，对collection中的每一个元素进行调用iteratee，如果返回true，就将collection中的元素除去iteratee这个对象剩下的对象按照原来的顺序排序，再将iterateet这个对象排在数组的最后面。返回这个新数组。

如果iteratee是一个属性名，将collection中的相应属性名的属性值按照升序排序。返回按照升序排序的新数组。
####Arguments
* collection (Array|Object|string): 要遍历的集合.

* iteratees (…(Function|Function[]|Object|Object[]|string|string[]): 要排序的iteratees，它可以是数组的值也可以是自己的值。如果有多个iteratees时，两个都要升序排序，但是优先前面的属性。

###Returns
(Array): 返回新排序的数组.
###Example
```js
var aas = [
{ 'aa': 'a', 'age': 15 },
{ 'aa': 's', 'age': 25 },
{ 'aa': 'd', 'age': 17 },
{ 'aa': 'f', 'age': 27 }]
console.log(_.sortByAll(aas, ['age','aa']));
//=>[ { aa: 'a', age: 15 },{ aa: 'd', age: 17 },{ aa: 's', age: 25 },{ aa: 'f', age: 27 } ]
console.log(_.sortByAll(aas, ['aa','age']));
//=>[ { aa: 'a', age: 15 },{ aa: 'd', age: 17 },{ aa: 'f', age: 27 },{ aa: 's', age: 25 } ]
```

###sortByOrder
```_.sortByOrder(collection, iteratees, [orders])```

这种方法和_.sortByAll一样不同的是它允许指定排序。如果没有指定排序，就按照升序排序。另外，如果order是"asc"，就按照升序排序，如果order是"desc"，就按照降序排序。

如果iteratee是一个对象，
If a property name is provided for an iteratee the created _.property style callback returns the property value of the given element.

如果iteratee是一个属性名或者多个属性名，按照order将属性名的属性值进行排序，优先前面一个属性的排序，返回新数组。

####Arguments
* collection (Array|Object|string): 要遍历的集合.

* iteratees (Function[]|Object[]|string[]): 要排序的属性名等.

* [orders] (boolean[]): 排序的命令.

###Returns
(Array): 返回新排序的数组.

####Example
```js
var aas=[{ 'aa': 'aa', 'age': 15 },{ 'aa': 'ss', 'age': 25 },{ 'aa': 'aa', 'age': 17 },{ 'aa': 'ss', 'age': 27 }];
console.log(_.sortByOrder(aas,['aa','age'],['desc','desc']));
//=>[ { aa: 'ss', age: 27 },{ aa: 'ss', age: 25 },{ aa: 'aa', age: 17 }, { aa: 'aa', age: 15 } ]  'aa'按升序排序，'age'按降序排序
```
###where
```_.where(collection, source)``

对collection中的每一个元素和源对象进行一个比较深的比较，即对collection的元素调用source，返回true时的元素构成一个新数组，返回这个数组。

Note: 这种方法支持比较数组，布尔值，时间对象，正则表达式，数值，对象的对象和字符串。对象是比较它们自己的属性，而不是继承。

####Arguments
* collection (Array|Object|string): 查找的集合.

* source (Object): 属性值相匹配的对象.

####Returns
(Array): 返回滤过后的新数组.

####Example
```js
var aas = [{'aa': 2,'ss':'aa'}, {'aa': 3,'ss':'aa'},  {'aa': false},{'aa':true}];
console.log(_.where(aas,{'aa': 2}));
//=>[ { aa: 2, ss: 'aa' } ]
console.log(_.where(aas,{'ss':'aa'}));
[ { aa: 2, ss: 'aa' }, { aa: 3, ss: 'aa' } ]
```
