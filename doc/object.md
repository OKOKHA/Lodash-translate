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

如果predict是一个对象，调用predict返回true时，返回对应的属性名。

如果predict是一个属性值，返回对应属性值的属性名。

####Arguments
* object (Object): 要查找的对象.

* [predicate=_.identity] (Function|Object|string): 对每个元素调用函数.

* [thisArg] (*): predicate绑定的值.

####Returns
(string|undefined): 返回相应的元素的属性名，否则返回undefined。

####Example
```js
var aas= {'aa':'bb','ss':'asd'};
console.log(_.findKey(aas));
//=>aa


```

##findLastKey

```_.findLastKey(object, [predicate=_.identity], [thisArg])```

这种方法和_.findkey，除了它是从反方向遍历集合中的元素，返回的是最后一个元素的属性名。

如果predict是一个对象，调用predict返回true时，返回对应的属性名。

如果predict是一个属性值，返回对应属性值的属性名。

####Arguments
* object (Object): 要查找的对象.

* [predicate=_.identity] (Function|Object|string): 对每个元素调用函数.

* [thisArg] (*): predicate绑定的值.

####Returns
(string|undefined): 返回相应的元素的属性名，否则返回undefined。

####Example
```js
var list = {'asd':{'a':'asd'},'asdf':{'a':'sdf'},'asdfg':{'a':'dfg'}};
var re1=_.findLastKey(list);
//=>asdfg
var re2= _.findLastKey(list,{'a':'asd'});
//=>asd
var re3= _.findLastKey(list,'a');
//=>asdfg
```

##forIn

```_.forIn(object, [iteratee=_.identity], [thisArg])```

调用iteratee中的每个属性，遍历和继承枚举对象中的属性。iteratee与thisArg绑定，并且可以调用三种参数: (value, key, object). iteratee可能提早退出调用并且明确返回false。

####Arguments
* object (Object): 要遍历的对象.

* [iteratee=_.identity] (Function): 对每个元素调用的函数.

* [thisArg] (*): iteratee绑定的值.

####Returns
(Object): 返回对象.

####Example
```js
function Foo() {
    this.a = 1;
    this.b = 2;
}
//=>{ a: 1, b: 2 }

```

##forInRight
```_.forInRight(object, [iteratee=_.identity], [thisArg])```

这种方法和_.forIn一样，除了它是从对象的反方向来遍历的。

####Arguments
* object (Object): 要遍历的对象.

* [iteratee=_.identity] (Function): 对每个元素进行调用的函数.

* [thisArg] (*): iteratee绑定的值.

####Returns
返回一个对象。

####example
```JS
function Foo() {
    this.a = 1;
    this.b = 2;
}
_.forInRight(new Foo)

//
```

##forOwn
```_.forOwn(object, [iteratee=_.identity], [thisArg])```

对每个属性调用iteratee，遍历对象的枚举特性。iteratee与thisArg绑定，并且可以调用三种参数: (value, key, object). iteratee可能会提早退出调用并且明确范湖false.

####Arguments
* object (Object): 要遍历的对象.

* [iteratee=_.identity] (Function): 对每个元素调用iteratee.

* [thisArg] (*): 与iteratee的值.

####Returns
(Object): 返回一个对象.

####Example
```js
function Foo(){
                this.a=1;
                this.b=2;
                this.c=3;
            }
            _.forOwn(new Foo,function(value,key){
                console.log(key);
                expect(key).to.equal('c');
                //这里很奇怪，不用expect正常返回'a' 'b' 'c' ，用了expect语句之后会产生覆盖现象
            });

```

##forOwnRight
```_.forOwnRight(object, [iteratee=_.identity], [thisArg])```

这个方法和_.forOwn一样，除了它是从反方向开始遍历对象中的属性的。

####Arguments
* object (Object): 要遍历的对象.

* [iteratee=_.identity] (Function): 对每个元素都调用的函数.

* [thisArg] (*): 与iteratee绑定的值.

####Returns
(Object): 返回对象.

####Example
```js
function Foo(){
    this.a=1;
    this.b=2;
    this.c=3;
}
_.forOwnRight(new Foo,function(value,key){
    console.log(value);

    //expect(value).to.equal(3);
    //这里很奇怪，不用expect语句返回的是 3 2 1 ，用了之后返回的是 3 2 ，没有1了
});

```

##functions

**_.functions(object)**

发挥一个由属性名构成的数组，属性名是从对象的枚举属性或者继承来的。

####Aliases
_.methods

####Arguments
* object (Object): 要检查的对象.

####Returns
(Array): 返回一个由属性名构成的数组.

####Example
```js
_.functions(_);
// → ['after', 'ary', 'assign', …] 返回的是function中所有的函数
```


##get
```_.get(object, path, [defaultValue])```

返回对象中属性值所在的路径。如果值是没有没有定义的，就用defaultValue取代。

####Arguments
* object (Object): 要查询的对象.

* path (Array|string): 得到的属性的路径.

* [defaultValue] (*): 如果分解出来的值是未下定义的，返回的值.

####Returns
(*): 返回分解出来的值.

####Example
```js
_.get({'a':1},'a');
//=>1  对象只有一层，并且'a'在第一层，返回1
```




##has

**_.has(object, path)**

检查属性是否在对象的路径中。

####Arguments

* object (Object): 要查询的对象.

* path (Array|string): 要检查的路径.

####Returns
(boolean): 返回true或者false。

####Example

```js
_.has({'a':1},'a')
//=>true
```

##invert

**_.invert(object, [multiValue])**

将对象中的value和key颠倒组成一个新对象，返回这个对象。如果对象中包含有重复的值，取从右开始遍历的遇到的第一个key，除非multivalue是true，就可以由多个key组成新的value。

####Arguments

* object (Object): 要颠倒的对象.

* [multiValue] (boolean): 允许一个key有多个value.

####Returns

(Object): 返回新的颠倒的对象.

####Example

```js
_.invert({'a':1,'s':2,'d':3,'f':1},true)
//=>{ '1': [ 'a', 'f' ], '2': [ 's' ], '3': [ 'd' ] }
```

##keys

**_.keys(object)**

返回一个对象的枚举属性名构成的数值组（不继承）。

####Note:

非值对象也是对象。详情看ES spec。

####Arguments

* object (Object): 要查询的对象.

####Returns

(Array): 返回由属性名构成的数组.

####Example
```js
_.keys({'a':1,'s':2,'d':3,'f':1})
//=>[ 'a', 's', 'd', 'f' ]
```

##keysIn

**_.keysIn(object)**

返回一个由对象的枚举属性名和继承属性名构成的数组。

####Note:

非值对象也是对象.

####Arguments

* object (Object): 要查询的对象.

####Returns

(Array): 返回一个由属性名构成的数组.

####Example
```js
            function aa(){
                this.a=1;
                this.b=2;
                this.c=2
            }
            aa.prototype.d = 3;
            _.keysIn(new aa);
//=>[ 'a', 'b', 'c', 'd' ]
```

##mapKeys

```_.mapKeys(object, [iteratee=_.identity], [thisArg])```

与_.mapValues相反，这个方法返回一个对象，对象中的value不变，key由iteratee调用对象中的每个属性产生的。

####Arguments

* object (Object): 遍历对象中的元素.

* [iteratee=_.identity] (Function|Object|string): 对每个元素都调用的函数.

* [thisArg] (*): 与iteratee绑定的值.

####Returns

(Object): 返回新的数值.

####Example
```js
            var list={'a':1,'s':2,'d':3,'f':1}
            _.mapKeys(list,function(value,key){
                return key + value;
            });
//=>{ a1: 1, s2: 2, d3: 3, f1: 1 }
```

##mapValues

```_.mapValues(object, [iteratee=_.identity], [thisArg])```

通过对对象中的每个值调用iteratee，返回的value和原来一样的key构成了一个新对象，返回这个对象。iteratee与thisArg绑定，并且可以调用三个参数：(value, key, object).

如果iteratee是一个对象，与原来对象中的值比较，如果值相同返回true，否则返回false，key是不变的。

如果iteratee是一个属性名，与原来对象中的属性值相比较，如果属性值相等即返回true时返回相应属性的属性值，否则返回false，同样key不变。

如果iteratee是一个属性名并且thisArg也有值，情况和iteratee是一个对象是一样的。

####Arguments
* object (Object): The object to iterate over.

* [iteratee=_.identity] (Function|Object|string): The function invoked per iteration.

* [thisArg] (*): The this binding of iteratee.

####Returns
(Object): 返回新的对象.
####Example
```js
            var users = {
                'fred':    { 'user': 'fred',    'age': 40 },
                'pebbles': { 'user': 'pebbles', 'age': 1 }
            };
            _.mapValues(users,{ 'user': 'fred',    'age': 40 });
//=>{ fred: true, pebbles: false }
            _.mapValues(users,'age');
//=>{ fred: 40, pebbles: 1 }
            _.mapValues(users,'age',40);
//=>{ fred: true, pebbles: false }
```

#merge
_.merge(object, [sources], [customizer], [thisArg])

将源对象和目标对象的枚举属性递归的进行合并，返回新的对象。对应的后面的出现的属性的属性值覆盖掉前面出现的属性的属性值。如果给定了customizer，对目标对象和源对象的属性值进行调用。customizer与thisArg绑定并且可以调用三个函数：(objectValue, sourceValue, key, object, source).

####Arguments
* object (Object): 目标对象.

* [sources] (…Object): 源对象.

* [customizer] (Function): 自定义的分配值的函数.

* [thisArg] (*): 与customizer绑定的值.

####Returns
(Object): Returns object.

####Example
```js
            var des = {'aa':['asd'], 'ss':['sdf']};
            var sou = {'aa': ['qwe'], 'ss': ['wer']};
            var re = _.merge(des,sou);
            //=>{ aa: [ 'qwe' ], ss: [ 'wer' ] }
            //覆盖现象
            var aas = [{'aa':'asd'}, {'aa':'sdf'}];
            var sss = [{'ss': 'qwe'},{'ss': 'wer'}];
            var re = _.merge(aas,sss);
            //=>[ { aa: 'asd', ss: 'qwe' }, { aa: 'sdf', ss: 'wer' } ] 合并
```

##omit
```_.omit(object, [predicate], [thisArg])```

和_.pick相反，这种方法返回一个由不省略的拥有和继承枚举对象的属性的元素构成的对象

####Arguments
* object (Object): 源对象.

* [predicate] (Function|…(string|string[]): 对对象的每个元素调用iteratee或者省略属性名，指定为个人属性名或者属性名数组。

* [thisArg] (*): predicate绑定的值.

####Returns
(Object): 返回新的对象.

####Example
```js
            var aas = {'aa':'asd', 'ss':'sdf'};
            var re = _.omit(aas,'aa');
            //=>{ ss: 'sdf' }
```



##pair

**_.pairs(object)**

返回一个由名值对对象构成的一维数组，例如：[[key1, value1], [key2, value2]].

####Arguments
* object (Object): 要查询的对象.

####Returns
(Array): 返回一个由名值队构成的新数组.

####Example
```js
            var aas = {'aa':'asd', 'ss':'sdf'};
            var re = _.pairs(aas,'aa');
            //=>[ [ 'aa', 'asd' ], [ 'ss', 'sdf' ] ]
```



##pick
**_.pick(object, [predicate], [thisArg])**

返回一个由挑选出来的对象属性构成的对象。属性名可以指定为单个参数或者属性名的数组。如果predicate为每个属性提供了调用它的对象选择属性的predicate返回true。predicate与thisArg绑定并且可以调用三个参数：(value, key, object)。


####Arguments

* object (Object): 源对象.

* [predicate] (Function|…(string|string[]): 对对象的每个元素调用iteratee或者挑选属性名，指定为个人属性名或者属性名数组。

* [thisArg] (*): predicate绑定的值.

####Returns

(Object): 返回新的对象。

####Example
```js
            var aas = {'aa':'asd', 'ss':'sdf'};
            var re = _.pick(aas,'aa');
            //=>{ aa: 'asd' }
```

#result
**_.result(object, path, [defaultValue])**

这个方法和_.get一样，除了如果解决值是一个函数调用的这个绑定父对象并返回它的结果。

####Arguments
* object (Object): 要查询的对象.

* path (Array|string): 要解决的属性的路径.

* [defaultValue] (*): 如果解决值没有被定义，返回的值.

####Returns
(*): 返回解决的值.

####Example
```js
    var object = { 'a': [{ 'b': { 'c1': 3, 'c2':_.constant(4) } }] };
    var re = _.result(object,'a[0].b.c1');expect(re).to.equal(3);
    var re1 = _.result(object,'a[0].b.c2');expect(re1).to.equal(4);
    var re2 = _.result(object,'a.b.c','default');expect(re2).to.equal('default');
//c是没有被定义的
```

##set
**_.set(object, path, value)**

设置对象中属性值的路径。如果路径的一部分不存在，就创建。

####Arguments
* object (Object): 要增加的对象.

* path (Array|string): 设置属性的路径.

* value (*):要设置的数.

####Returns
(Object): 返回新对象.

####Example
```js
            var object = { 'a': [{ 'b': { 'c': 3 } }] };
            _.set(object, 'a[0].b.c', 4);
            //object.a[0].b.c=>4
```



##transform
```_.transform(object, [iteratee=_.identity], [accumulator], [thisArg])```

是_.reduce的另一种表达。通过对对象的枚举属性调用iteratee得到的结果构成的对象转变成一个新的累加对象，返回这个对象，每次调用潜在变异累加器对象。iteratee与thisArg绑定，并且可以绑定四个参数: (accumulator, value, key, object). iteratee可能提早退出调用，并且明确返回false。

####Arguments
* object (Array|Object):要遍历的对象.

* [iteratee=_.identity] (Function): 对每个元素都调用的函数.

* [accumulator] (*): 累加的值.

* [thisArg] (*): Iiteratee绑定的值.

####Returns
(*): 返回累加的值.

Example
```js
var re = _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
    result[key] = n * 3;
});
//=>{ a: 3, b: 6 }
```


##values
**_.values(object)**

返回一个由对象中的枚举属性值构成的数组。(不继承）

####Note:
非值对象也是对象.

####Arguments
* object (Object): 要查询的对象.

####Returns
(Array): 返回数组的属性值.

####Example
```js
            var list = {'a':'asd' ,'s':'dfg'};
            console.log(_.values(list)) ;
            //=>[ 'asd', 'dfg' ]
```

##valuesIn
**_.valuesIn(object)**

返回一个由枚举属性和继承属性的属性值构成的数组。

####Note
非值对象也是对象。

####Arguments
object (Object): 要查询的对象.

####Returns
(Array): 返回由属性值构成的数组.

####Example
```js
            function s(){
                this.a=1;
                this.b=2;
            }
            s.prototype.c=3;
            console.log(_.valuesIn(new s)) ;
            //=>[ 1, 2, 3 ]
```

