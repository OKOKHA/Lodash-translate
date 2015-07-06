# object methods



##assign

**_.assign(object, [sources], [customizer], [thisArg])**

将源对象中的可列举的属性分配到目标对象中。将可列举的源重新写入之前的对象的属性中，如果有相同的属性名就覆盖掉。如果指定了customizer，调用它来产生分配的值。customizer与thisArg绑定，并且可以调用五种参数：(objectValue, sourceValue, key, object, source).

####Note:

这种方法基于Object.assign改变了对象。

####Aliases

_.extend

####Arguments

* object (Object): 目标对象.

* [sources] (…Object): 一个或多个源对象.

* [customizer] (Function): 自定义分配值的函数.

* [thisArg] (*): customizer绑定的值.

####Returns

(Object): 返回一个对象.

####Example
```js
console.log(_.assign({'aa':'asd'},{'ss':'sdf'},{'dd':'dfg'}));
//=>{ aa: 'asd', ss: 'sdf', dd: 'dfg' }
console.log(_.assign({'aa':'asd'},{'ss':'sdf'},{'aa':'dfg'}));
//=>{ aa: 'dfg', ss: 'sdf' }
```

##create
**_.create(prototype, [properties])**

返回一个对象，它是从给定的对象原型链中继承来的。如果对象的属性是给定的，可列举的的属性就被分配到返回的对象中。

####Arguments
* prototype (Object): 要从对象继承的对象.

* [properties] (Object): 要分配给对象的属性.

####Returns
(Object): 返回新的对象.

####Example
```js
console.log(_.create({'aa':'asd','ss':'sdf'}, {'aa':'bb'}));
//=>{ aa: 'bb' }
```

##defaults
**_.defaults(object, [sources])**


分配源对象的枚举属性到目标对象的所有属性都是未定义。一旦属性被确定，其它一样的属性将被忽略。

####Note
这个方法改变对象.

####Arguments
* object (Object): 目标对象.

* [sources] (…Object): 源对象.

####Returns
(Object): 返回一个对象.

####Example
```js
console.log(_.defaults({'aa':'asd','ss':'sdf'}, {'aa':'bb'}));
//=>{ aa: 'asd', ss: 'sdf' }
//因为前面'aa'的属性已经被确定了，所以后面的{'aa':'bb'}被忽略了。
```

##defaultsDeep
**_.defaultsDeep(object, [sources])**

这个方法和_.defaults一样，除了它是递归地分配默认的属性。

####Note:
这个方法改变了对象.

####Arguments
* object (Object): 目标对象.

* [sources] (…Object): 源对象.

####Returns
(Object): 返回一个对象.

####Example
```js
 console.log(_.defaultsDeep({'aa':'bb'},{'aa':'asd','ss':'sdf'} ));
//=>{ aa: 'bb', ss: 'sdf' }
```

##findKey
```_.findKey(object, [predicate=_.identity], [thisArg])```

这种方法和_.find一样，除了调用predicate返回true后，它返回的是object的第一个元素的属性名而不是第一个元素。

如果predicate是一个对象，
If a property name is provided for predicate the created _.property style callback returns the property value of the given element.

If a value is also provided for thisArg the created _.matchesProperty style callback returns true for elements that have a matching property value, else false.

If an object is provided for predicate the created _.matches style callback returns true for elements that have the properties of the given object, else false.

Arguments
object (Object): The object to search.
[predicate=_.identity] (Function|Object|string): The function invoked per iteration.
[thisArg] (*): The this binding of predicate.
Returns
(string|undefined): Returns the key of the matched element, else undefined.

Example
```js
var aas= {'aa':'bb','ss':'asd'};
console.log(_.findKey(aas));
//=>aa


```






