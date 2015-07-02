## "Collection" methods

### at

**_.at(collection, [props])**

给定一个对应于给定keys、index的线性表的元素的数组。keys
可以被指定为单独的参数或者作为keys的数组。

#### Arguments

* collection (Array|Object|string): 要遍历的线性表.

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

创建一个对象，带着给定的iteratee的条件去遍历线性表的每个元素，所产生的结果组成这个新对象。每个key对应的值是iteratee返回的数字的次数。该iteratee与thisArg一定有关并且可以调用三个参数：(value, index|key, collection).

如果iteratee是一个对象，




#### Arguments
* collection (Array|Object|string): 要遍历的线性表.

* [iteratee=_.identity] (Function|Object|string):
对每个函数进行调用.

* [thisArg] ():iteratee中的值.

#### Returns
(Object): 返回组成的对象.

#### Example
```js
_.countBy(['aa','sss','ddss'],'length');
// =>{ '2': 1, '3': 1, '4': 1 }
```

### every
```_.every(collection, [predicate=_.identity], [thisArg])```

线性表的所有元素是否能通过predict的检查。predict与thisArg绑定，并且可以调用三个参数(value, index|key, collection)。

如果predict是个对象，将这个对象与array中的对象相比较，如果为true，那么返回true，如果出现false，那么返回false。

如果predict是个属性名，比较array中属性名的属性值，如果为true，那么返回true，如果出现false，那么返回false。

如果predict是个属性名，并且thisArg也有值，将thisArg与array的属性值相比较，如果为true，那么返回true，如果出现false，那么返回false。

####Aliases
_.all

####Arguments

* collection (Array|Object|string): 要遍历的线性表.

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

遍历线性表的元素，返回一个满足predict的所有元素构成的新数组。predict与thisArg绑定，并且可以调用三种参数: (value, index|key, collection).

如果predict是一个对象，与array中的对象比较，当为true时，滤掉这个对象，返回由滤掉的对象构成的array。

如果predict是一个属性名，当array中对应属性名的属性值为true时，滤掉对应的对象，返回由滤掉的对象构成的新数组。

如果predict是一个属性名，并且thisArg也有值时，比较array中对应属性名的属性值，如果与thisArg相等，那么滤掉这个对应的对象，返回由滤掉的对象构成的新数组。

####Aliases
_.select

####Arguments
* collection (Array|Object|string): 要遍历的线性表.

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

遍历线性表中的元素，返回满足predict的第一个的元素。predict与thisArg绑定，并且可以调用三种参数: (value, index|key, collection).

如果predict是一个对象时，与array中的对象相比较，如果为true并且是第一次为true，那么返回相应的这个对象。

如果predict是一个属性名时，array中的对应的属性名的属性值为true并且是第一次时，返回这个对应的对象。

如果predict是一个属性名，并且thisArg也有值时，比较array中的对应属性名的属性值，如果相等并且是第一次相等，那么返回对应的对象。

####Aliases
_.detect

####Arguments
* collection (Array|Object|string): 要查找的线性表.

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

这个方法除了是从线性表右边开始查找之外和_.find是一样的。

####Arguments
* collection (Array|Object|string): 要查找的线性表.

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

对源对象和线性表中的每一个元素进行一个深的比较，返回属性值相等的第一个元素。

####Note:

这种方法支持比较数组、布尔表达式、时间对象、数值、对象的对象、正则表达式和字符串。对象和自己比较，不能够继承，枚举属性值。要比较一个自己的或者继承的属性值见_.matchesProperty.

####Arguments

* collection (Array|Object|string): 要查找的线性表.

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

遍历线性表中的元素，并对每个元素调用iteratee。iteratee与thisArg绑定，并且可以调用三种参数：(value, index|key, collection). 返回false时iteratee会提前停止调用。

####Note:
跟其他的线性表方法相比，有长度属性的对象可以向数组那样遍历。一般用```_.forIn ```和 ```_.forOwn```可能用于对象遍历。

####Aliases
_.each

####Arguments
* collection (Array|Object|string): 要遍历的线性表.

* [iteratee=_.identity] (Function): 每个函数都要调用.

* [thisArg] (*): iteratee绑定的值.

####Returns
(Array|Object|string): 返回线性表.

####Example



###forEachRight
```_.forEachRight(collection, [iteratee=_.identity], [thisArg])``


This method is like _.forEach except that it iterates over elements of collection from right to left.

####Aliases
_.eachRight

####Arguments
* collection (Array|Object|string): The collection to iterate over.

* [iteratee=_.identity] (Function): The function invoked per iteration.

* [thisArg] (*): The this binding of iteratee.

####Returns
(Array|Object|string): Returns collection.

####Example


####groupBy
```_.groupBy(collection, [iteratee=_.identity], [thisArg])```



Creates an object composed of keys generated from the results of running each element of collection through iteratee. The corresponding value of each key is an array of the elements responsible for generating the key. The iteratee is bound to thisArg and invoked with three arguments:
(value, index|key, collection).

If a property name is provided for iteratee the created _.property style callback returns the property value of the given element.

If a value is also provided for thisArg the created _.matchesProperty style callback returns true for elements that have a matching property value, else false.

If an object is provided for iteratee the created _.matches style callback returns true for elements that have the properties of the given object, else false.

Arguments
collection (Array|Object|string): The collection to iterate over.
[iteratee=_.identity] (Function|Object|string): The function invoked per iteration.
[thisArg] (*): The this binding of iteratee.
Returns
(Object): Returns the composed aggregate object.

Example






