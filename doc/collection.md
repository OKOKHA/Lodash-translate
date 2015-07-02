## "Collection" methods

### at

**_.at(collection, [props])**

创建一个对应于给定keys、index的集合的元素的数组。keys
可以被指定为单独的参数或者作为keys的数组。

#### Arguments

*collection (Array|Object|string): 要遍历的集.

*[props] (…(number|number[]|string|string[]): 被单独指定或者在数组中，选择元素的属性值或者索引.

#### Returns

(Array): 返回选择元素之后的新数组.

#### Example
```js
_.at(['a','s','d'],1,2);
// =>[ 's', 'd' ]
```
### _.countBy(collection, [iteratee=_.identity], [thisArg])

创建一个对象，带着给定的iteratee的条件去遍历集合的每个元素，所产生的结果组成这个新对象。每个key对应的值是iteratee返回的数字的次数。该iteratee与thisArg一定有关并且可以调用三个参数：(value, index|key, collection).

如果iteratee是一个属性名，那么返回给定元素的属性值。

如果thisArg也有值的话，那么根据对应属性值的元素来返回

如果iteratee是一个对象，那么根据对应属性值的元素返回


#### Arguments
*collection (Array|Object|string): 要遍历的集.

*[iteratee=_.identity] (Function|Object|string):
对每个函数进行调用.

*[thisArg] ():iteratee中的值.
#### Returns
(Object): 返回组成的对象.

#### Example
```js
_.countBy(['aa','sss','ddss'],'length');
// =>{ '2': 1, '3': 1, '4': 1 }
```
### _.every(collection, [predicate=_.identity], [thisArg])

Checks if predicate returns truthy for all elements of collection. The predicate is bound to thisArg and invoked with three arguments:
(value, index|key, collection).

If a property name is provided for predicate the created _.property style callback returns the property value of the given element.

If a value is also provided for thisArg the created _.matchesProperty style callback returns true for elements that have a matching property value, else false.

If an object is provided for predicate the created _.matches style callback returns true for elements that have the properties of the given object, else false.

####Aliases
_.all

####Arguments
*collection (Array|Object|string): The collection to iterate over.

*[predicate=_.identity] (Function|Object|string): The function invoked per iteration.
[thisArg] (): The this binding of predicate.
####Returns
(boolean): Returns true if all elements pass the predicate check, else false.

####Example









