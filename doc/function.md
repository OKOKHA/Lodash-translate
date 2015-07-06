#'Function' methods

##after

```_.after(n, func)```

是_.before的相反，这种方法返回一个函数，在当func和n相等时，调用一次，否则调用多次。

####Arguments

* n (number): 在函数被调用之前调用n.

* func (Function): 要限制的函数.

####Returns

(Function): 返回新限制的函数.

####Example
```js

```

##ary

```_.ary(func, [n=func.length])```

返回一个函数，使得这个函数最多有n个参数而没有其他的参数。
####Arguments

* func (Function): 限制参数的函数.

* [n=func.length] (number): 参数数量的上限.

####Returns
(Function): 返回一个新的函数.

####Example




##before
```_.before(n, func)```

返回一个函数，调用.

####Arguments
* n (number): func不再被调用时The number of calls at which func is no longer invoked.

* func (Function): 要限制的函数.

####Returns
(Function): 返回一个新的被限制了的函数.

####Example


_.bind(func, thisArg, [partials])
# Ⓢ Ⓝ

Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind arguments to those provided to the bound function.

The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.

Note: Unlike native Function#bind this method does not set the "length" property of bound functions.

Arguments
func (Function): The function to bind.
thisArg (*): The this binding of func.
[partials] (…*): The arguments to be partially applied.
Returns
(Function): Returns the new bound function.

Example
