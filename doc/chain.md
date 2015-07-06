## "Chain" methods


### _.chain(value)
创建一个lodash对象，Creates a lodash object that wraps value with explicit method chaining enabled.获取value中所有的值并进行包装，返回一个lodash对象。。

#### Arguments
* value (): 要包装的值.

#### Returns
(Object): 返回新的lodash包装实例。

#### Example
```js
var users = [
                { 'user': 'barney',  'age': 36 },
                { 'user': 'fred',    'age': 40 },
                { 'user': 'pebbles', 'age': 18 }
            ];
            var aa = _.chain(users)
                .min(function(users){
                    return users.age;
                }) //返回users中的age的最小值
                .value();  //获取chain中的值
            //获取users中age最小的一个对象
            console.log(aa);
//=>{ user: 'pebbles', age: 18 }
```
##tap
```_.tap(value, interceptor, [thisArg])```

这种方法通过调用interceptor返回一个值。interceptor与thisArg绑定，可以调用一个参数：value。这种方法的目的是“挖掘”方法链为了执行操作链内的中间结果。

####Arguments
* value (*): 提供给interceptor的值.

* interceptor (Function): 要调用的函数.

* [thisArg] (*): interceptor绑定的值.

####Returns
(*): 返回拦截器拦截之后的数值.

####Example
```js
var re=_([1, 2, 3])
    .tap(function(array) {
        return array.pop();
    })
    .reverse()
    .value();
console.log(re);
//=>[ 2, 1 ]
```


##thru
```_.thru(value, interceptor, [thisArg])```

这个方法和 _.tap一样除了返回的是拦截器的拦截的值，而不是拦截器拦截之后的值.

####Arguments
* value (*): 提供给拦截器的值.

* interceptor (Function): 要调用的函数.

* [thisArg] (*): interceptor绑定的值.

Returns
(*): 返回拦截器的拦截数值.

####Example
```js
var re=_([1, 2, 3])
                .thru(function(array) {
                    return array.pop();
                })
               .value();
            console.log(re);
//=>3
```

##prototype.chain
**_.prototype.chain()**


使得在包装器对象中有一个明确的方法链接。

####Returns
(Object): 返回新的lodash包装器实例.

####Example
```js
var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 18 }
];
var re=_(users).chain()  //提供了一个确定的链接
    .last()
    .pick('age')
    .value();
console.log(re);
//=>{ age: 18 }
```

#prototype.commit
**_.prototype.commit()**

按顺序执行链接，并返回包装的结果.

####Returns
(Object): 返回新的lodash包装实例.

####Example
```js
var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 18 }
];

var re=_(users).commit()
    .last()
console.log(re);
//=>{ user: 'pebbles', age: 18 }
```

#prototype.concat
**_.prototype.concat([values])**

将数组和[values]串联，返回一个新数组。[values]中的values可以是数或者数组。

####Arguments
* [values] (…*): 要和数组串联的数.

####Returns
(Array): 返回新的串联的数组.

####Example
```js
var list = [1,2,3];
var re=_(list).concat(1,[2,3],[[3,4]])
    .value();
console.log(re);
//=>[ 1, 2, 3, 1, 2, 3, [ 3, 4 ] ]
```
##prototype.plant
**_.prototype.plant()**

将一个数组的值按照原来的链接顺序移植到包装的数组中，返回一个新数组。

Returns
(Object): 返回一个新的lodash包装实例.

####Example
```js
var array = [1, 2];
var other = [3, 4];
var re = _(array).plant(other);
console.log(re.value());
//=>[ 3, 4 ]
var array1 = [1, 2];
var wrapped = _(array1).map(function(value) {
    return Math.pow(value, 3);
});
console.log(wrapped.value()); //=>[ 1, 8 ]
var other1 = [3, 4];
var otherWrapped = wrapped.plant(other1);
console.log(otherWrapped.value());  //=>[ 27, 64 ]
//other1替换了array1
```

##prototype.reverse
**_.prototype.reverse()**

将包装数组中的值颠倒排序，第一个值编程最后一个，最后一个值变成第一个，第二个值编程到户第二个，倒数第二个变成第二个，以此类推。

####Note:
这个方法改变了包装数组.

####Returns
(Object): 返回新的倒序的包装实例.

####Example
```js
console.log(_([1,2,3]).reverse().value());
//=>[ 3, 2, 1 ]
```

##prototype.toString
**_.prototype.toString()**

强制把值转变成字符串，返回这个结果。

####Returns
(string): 返回字符串结果.

####Example
```js
console.log(_([1, 2, 3]).toString());
//=>1,2,3
```

##value
**_.prototype.value()**

按照顺序返回prototype的值.

####Aliases
_.prototype.run, _.prototype.toJSON, _.prototype.valueOf

####Returns
(*): 返回prototype的属性值.

####Example
```js
console.log(_([1, 2, 3]).value());
//=>[ 1, 2, 3 ]
```





