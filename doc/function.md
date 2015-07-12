#'Function' methods



##after

**_.after(n, func)**

是_.before的相反，这种方法返回一个函数，func在后面的函数调用n或者多次之后再调用。

####Arguments

* n (number): 在函数被调用之前调用的次数.

* func (Function): 要限制的函数.

####Returns

(Function): 返回新限制的函数.

####Example
```js
var saves = ['profile', 'settings'];
var done = _.after(saves.length, function() {
  console.log('done saving!');
});
_.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
//=>在两个异步保存完成之后再调用function
```

##ary

**_.ary(func, [n=func.length])**

返回一个最多可以有n个参数而忽略其他参数的函数。

####Arguments

* func (Function): 限制参数的函数.

* [n=func.length] (number): 参数数量上限.

####Returns

(Function): 返回一个新的函数.

####Example
```js
_.map(['6', '8', '10'], _.ary(parseInt, 1));
// → [6, 8, 10]  //_.ary中parseInt字符变成字符串
```
##before

**_.before(n, func)**

返回了一个函数调用func，与它绑定的和创建的函数的参数，而它被调用小于n次。后续调用创建的函数返回最后func调用的结果。

####Arguments

* n (number): 参数调用次数上限.

* func (Function): 要限制的函数.

####Returns

(Function): 返回一个新的被限制了的函数.

####Example
```js
jQuery('#add').on('click', _.before(5, addContactToList));
//在click之前可以4次addContactToList。
```

##bind

**_.bind(func, thisArg, [partials])**

创建一个函数调用func与此绑定thisArg的，并预置任何其他_.bind参数给那些提供给绑定的功能。

该_.bind.placeholder值，默认为_在整体构建，可以用作部分应用的参数的一个占位符。

Note: Unlike native Function#bind this method does not set the "length" property of bound functions.

####Arguments
* func (Function): 要绑定的功能.

* thisArg (*): 与函数绑定的值.

* [partials] (…*): 部分应用的参数.

####Returns

(Function): 返回新的绑定函数.

####Example
```js
var greet = function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
};
var object = { 'user': 'fred' };
var bound = _.bind(greet, object);
var re = bound( 'hi','!'); //'hi'为greeting,'!'为punctuation
//=>hi fred!
```

##bindAll
**_.bindAll(object, [methodNames])**

结合一个对象本身的方法到一个对象中，覆盖现有的方法。方法名可以为单独的参数或者方法名的数组。如果没有给定方法名，返回所有可枚举功能特性，拥有和继承的对象。

Note: 这个方法不设置'length'属性。

####Arguments
* object (Object): 对象绑定和分配方法.

* [methodNames] (…(string|string[]): 绑定对象的方法名，可以是个单独的方法名或者方法名的数组。

####Returns

(Object): 返回一个对象.

####Example
```js
            var view = {
                'user': 'senina',
                'age':18
                }
            _.bindAll(view);

```
//=>{ user: 'senina', age: 18 }

##bindKey

**_.bindKey(object, key, [partials])**

创建一个函数在对象[key]中调用方法，并预置其他_.bindKey参数给那些提供给绑定的函数。

这种方法允许绑定功能，引用可能被重新定义或尚不存在的方法不同于_.bind。See Peter Michaux’s article for more details.

该_.bindKey.placeholder值，默认为_在整体构建，可以作为部分应用的参数中的一个占位符。

#### Arguments
* object (Object): 属于对象的方法。

* key (string): 方法的key.

* [partials] (…*): 部分应用的参数.

#### Returns
(Function): 返回新的绑定的函数。

#### Example
```js
var object = {
    'user': 'fred',
    'greet': function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};
var bound = _.bindKey(object, 'greet'); //greet是object的key
var re = bound( 'hi','!');
//greeta函数中的参数，也是partials部分
console.log(re);
//=>hi fred!
```
#### curry

**_.curry(func, [arity=func.length])**

创建一个函数，函数可以有一个或者多个参数，当调用函数时，返回调用的结果，如果所有的函数参数都被给定，返回一个有一个或者多个函数参数的函数。参数数量可能被指定如果函数的长度不明确的话。curry函数将参数按照结构从左到右排序。先排普通参数再排占位符参数。

函数中占位符默认为_整体构建，可以用占位符来指定参数。

Note: 这个方法不设置curry函数的长度属性。

#### Arguments

* func (Function): 要curry的函数.

* [arity=func.length] (number): 函数参数数量上限.

#### Returns

(Function): 返回新的柯里化函数.

#### Example
```js
var abc = function(a, b, c) {
    return [a, b, c];
};
var curried = _.curry(abc);
curried(1)(_,2)(3);//有占位符排在后面
//=>[ 1, 3, 2 ]
```
#### curryRight

**_.curryRight(func, [arity=func.length])**

这个方法和_.curry一样，除了函数将参数按照结构从右到左排序。先排占位符参数再排普通参数。

函数中占位符默认为_整体构建，可以用占位符来指定参数。

Note: 这个方法不设置curry函数的长度属性。

#### Arguments

* func (Function): 要curry的函数.

* [arity=func.length] (number): 函数参数数量上限.

#### Returns

(Function): 返回新的curry函数.

#### Example
```js
var abc = function(a, b, c) {
    return [a, b, c];
};
var curried = _.curryRight(abc);
curried(1)(2, _)(3);;//有占位符排在前面
//=>[ 2, 3, 1 ]
```
##defer
**_.defer(func, [args])**

延迟调用func直到当前调用桟被清除。当任何额外的参数被调用时都提供给func。

####Arguments
* func (Function): 要延迟的函数.

* [args] (…*): 调用函数的参数.

####Returns
(number): 返回计时器id.

####Example
```js
            _.delay(function(text) {
                console.log(text);
            }, 1000, 'assd');
//=>asdfg
```


## debounce

**_.debounce(func, [wait=0], [options])**

空闲控制。返回一个函数，每当调用func时必须要等待大于或等于wait时才能调用。这个函数有一个取消方法，如果取消调用func就要重新等待time=wait再重新调用func。当等待超时时还有一个对象选项。

Note: 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用。

See David Corbacho’s article for details over the differences between _.debounce and _.throttle.

#### Arguments
* func (Function): 空闲之后要调用的函数.

* [wait=0] (number): 要延时的毫秒数.

* [options] (Object): 对象的选项.

* [options.leading=false] (boolean): 指定调用超时的前界.

* [options.maxWait] (number): 最大允许延时的时间.

* [options.trailing=true] (boolean): 指定调用超时的后界.

#### Returns
(Function): 返回空闲控制的函数.
```js
  _.debounce = function(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
    // 据上一次触发时间间隔
    var last = _.now() - timestamp;

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = _.now();
    var callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};
```
##delay
**_.delay(func, wait, [args])**

等待数毫秒之后再调用函数。任何额外的参数被调用时都提供给函数。

####Arguments
* func (Function): 要延迟的函数.

* wait (number): 要延迟调用的时间毫秒数.

* [args] (…*): 调用函数的参数.

####Returns
(number): 返回计时器id.

####Example
```js
_.delay(function(text) {
  console.log(text);
}, 1000, 'later');
//延时1000ms之后再调用function
```

##flow
**_.flow([funcs])**

创建一个函数返回调用与所创建的功能，其中，每个连续的调用得到的返回值都提供给下一个调用的函数，返回的是最终的结果。

####Arguments
* [funcs] (…Function): 要调用的一个或者多个函数.从左到右调用函数。

####Returns
(Function): 返回新的函数.

####Example
```js
            function times(n){
                return n*3;
            }
            function square(n){
                return n*n;
            }
            var re = _.flow(times,square);
            console.log(re(2));
//=>36  先调用函数times得到2*3=6，在调用函数square得到6*6=36
```

##flowRight
**_.flowRight([funcs])**

这个方法和_.flow一样，除了从给定的函数中，它是从右边的函数开始调用的。

####Aliases
_
.backflow, _.compose

####Arguments

[funcs] (…Function): 要调用的函数.

####Returns

(Function): 返回新的函数.

####Example
```js
            function times(n){
                return n*3;
            }
            function square(n){
                return n*n;
            }
            var re = _.flowRight(times,square);
            console.log(re(2));
//=>12  先调用square 再调用times
```

##memoize
**_.memoize(func, [resolver])**

返回一个记住func的结果的函数。如果解析器提供它确定高速缓存密钥，用于存储结果的基础上提供给memoized函数的参数。默认情况下，提供给memoized函数的第一个参数被强制为字符串，并用作缓存键。该func被调用的函数memoized的这一具有约束力。

注：该缓存暴露在memoized功能缓存属性。它的建立可以通过一个实例的实施得到，已经，并设置地图界面的方法更换_.memoize.Cache构造进行定制。

####Arguments
* func (Function): 要记住它的输出的函数.

* [resolver] (Function): 解决缓存键的函数.

####Returns
(Function): 返回新的记忆函数.

####Example
```js
            function times(n){
                return n*3;
            }
            var re = _.memoize(times);
            console.log(re(4));
//=>12
```

##modArgs

**_.modArgs(func, [transforms])**

通过相应的转换功能调用函数中相应的参数，返回一个新函数。

####Arguments

* func (Function): 要包装的函数.

* [transforms] (…(Function|Function[]): 要转化参数的函数，可以是单独的函数或者函数的数组。

####Returns

(Function): 返回新的函数.

####Example
```js
           function times(n){
                return n*3;
            }
            function square(n){
                return n*n;
            }
            var re = _.modArgs(function (x,y){
                return [x,y]
            },times,square);
            console.log(re(1,2));
//[ 3 , 4 ]   第一个参数对应第一个函数times转化，第二个参数对应第二个函数square转化
```
##negate

**_.negate(predicate)**

调用predicate，返回函数中predicate要求的相反的元素。predicate用来调用函数的绑定值和参数。

####Arguments

* predicate (Function): 用来调用取相反元素的函数.

###Returns

(Function): 返回新的函数.

####Example
```js
            function times(n){
                return n%3==0;
            }
            var list=[1,2,3,4,5,6];
            var re1 = _.filter(list, _.negate(times));
            console.log(re1);
            expect(re1.length).to.equal(4);
//=>[ 1, 2, 4, 5 ]   _.negate取不是被3整除的数，_.filter返回过滤出来的_.negate(times)这部分的元素。
```
##once

**_.once(func)**

返回一个函数，只能调用一次。重复调用返回第一次调用的值。函数和返回的函数的绑定值和参数一起被调用。

####Arguments

* func (Function): 被限制的函数。

####Returns

(Function): 返回新的限制的函数.

####Example
```js
            function times(n){
                return n*3;
            }
            var initialize = _.once(times);
            console.log(initialize(1)); //=>3
            console.log(initialize(2)); //=>3
```

##partial

**_.partial(func, [partials])**

创建一个函数调用函数与前置到那些提供给新的功能的部分参数。这种方法类似于_.bind但它不会改变此绑定。

该_.partial.placeholder值，默认为_在整体构建，可以用作部分应用的参数中的一个占位符。

Note: 这个方法不设置部分应用函数的length属性值.

####Arguments
* func (Function): 部分应用参数的函数。

* [partials] (…*): 部分应用的参数。

####Returns
(Function): 返回新的部分应用的函数.

####Example
```js
var greet = function(greeting, name) {
    return greeting + ' ' + name;
};
var say = _.partialRight(greet, 'fred' ,_);
var re = say('hi');
//=>hi fred
```

## partialRight

**_.partialRight(func, [partials])**

这个和_.patital一样除了部分应用的参数被附加给定到新函数.

该_.partial.placeholder值，默认为_在整体构建，可以用作部分应用的参数中的一个占位符。

Note: 这个方法不设置部分应用函数的length属性值.

####Arguments

* func (Function): 部分应用参数的函数。

* [partials] (…*): 部分应用的参数。

####Returns
(Function): 返回新的部分应用的函数.

#### Example
```js
var greet = function(greeting, name) {
    return greeting + ' ' + name;
};
var say = _.partialRight(greet, 'fred' ,_);
var re = say('hi');
//=>fred hi
```

##rearg
**_.rearg(func, indexes)**

调用func返回一个函数，根据其中第一个索引处的参数值是作为第一个参数指定的索引排列参数，第二个索引处的参数值是作为第二个参数，依此类推。

#### Arguments
* func (Function): 重新排列参数的函数.

* indexes (…(number|number[]): 重新排列参数的索引，可以使单独的索引或者由索引构成的数组。

#### Returns
(Function): 返回新的函数.

#### Example
```js
            var rearged = _.rearg(function(a, b, c) {
                return [a, b, c];
            }, 2, 0, 1);
            console.log(rearged('a', 'c', 'b'));
//[ 'b', 'a', 'c' ] 根据给定索引[2,0,1]，排在索引2处的'b'放在重新排列的第一个，排在索引0处的'a'放在重新排列的第二个，排在索引1处的'a'防在重新排列的第三个。
```

## restParam
**_.restParam(func, [start=func.length-1])**

返回一个函数，调用函数和函数绑定的参数。从开始以及后面提供的一个数组。

Note: 这个方法以后面的参数卫基础。

#### Arguments
* func (Function): 应用剩下参数的函数.

* [start=func.length-1] (number): 剩下参数开始的地方.

#### Returns
(Function): 返回新的函数.

#### Example
```js
var say = _.restParam(function(what, names) {
    return what + ' ' + _.initial(names).join(', ') +
(_.size(names) > 1 ? ', & ' : '') + _.last(names);
});
console.log(say('hello', 'fred', 'barney', 'pebbles'));
//=>hello fred, barney, & pebbles
//这里的start=1
```

##spread
**_.spread(func)**

通过调用函数和函数绑定的参数返回一个函数，把原来的函数的参数传递给返回的函数里.

Note: 这个方法基于传播算子.

####Arguments
* func (Function): 传递参数的函数.

#### Returns

(Function):返回新的函数.

#### Example
```js
var say = _.spread(function(who, what) {
    return who + ' says ' + what;
});
console.log(say(['hello', 'fred']));
//=>hello says fred
```

## throttle
#### _.throttle(func, [wait=0], [options])

返回一个函数，每等待wait毫秒数时调用一次func。这个函数也有一个取消方法，取消延时调用。函数还有一个超时的前界和后界。

Note: 如果前界和后界都是true，等待超时调用函数的后界，仅当在超时时函数被多次调用。

See David Corbacho’s article for details over the differences between _.throttle and _.debounce.

#### Arguments
* func (Function): 要频率控制的函数.

* [wait=0] (number): 调用函数要等待的时间单位毫秒.

* [options] (Object): 对象的选项.

* [options.leading=false] (boolean): 指定调用超时的前界.

* [options.trailing=true] (boolean): 指定调用超时的后界.

#### Returns
(Function): 返回频率控制的函数.
```js
_.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  // 上次执行时间点
  var previous = 0;
  if (!options) options = {};
  // 延迟执行函数
  var later = function() {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = _.now();
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) previous = now;
    // 延迟执行时间间隔
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    //如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
```

## wrap
**_.wrap(value, wrapper)**

创建一个功能，可提供价值的包装函数作为第一个参数。提供给函数的任何额外的参数附加到那些提供给包装函数。该包装被调用的功能创建的这一具有约束力。

#### Arguments

* value (*): 要包装的值.

* wrapper (Function): 用来包装的函数.

#### Returns

(Function): 返回新的函数.



