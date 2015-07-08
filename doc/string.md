#“String” Methods



#camelCase

**_.camelCase([string=''])**

使字符串变成骆驼拼写法'fooBar'。

####Arguments

* [string=''] (string): 要改变的字符串.

####Returns

(string): 返回骆驼版拼写的字符串.

####Example
```js
_.camelCase('zhi zheng')
//=>zhiZheng
```

##capitalize

**_.capitalize([string=''])**

使字符串的首字母大写。

####Arguments

* [string=''] (string): 要让首字母大写的字符串.

####Returns

(string): 返回首字母大写的字符串.

####Example
```js
_.capitalize('zhi zheng')
//=>Zhi zheng
```

##deburr

**_.deburr([string=''])**

清理字符串，将latin - 1 补充字母转变为基本的拉丁字符，去除那些变音符号。

####Arguments

* [string=''] (string): 要清理的字符串.

####Returns

(string): 返回清理过的字符串.

####Example

```js


```

##endsWith

**_.endsWith([string=''], [target], [position=string.length])**

检查字符串是否是以给定的目标字符串结尾。

####Arguments
* [string=''] (string): 要查找的字符串.

* [target] (string): 要查找的字符串.

* [position=string.length] (number): 查找的位置.

####Returns

(boolean): 如果是以目标字符结尾返回true，否则返回false.

####Example
```js
_.endsWith('zhizheng','zheng')
//=>true
```

##escape

**_.escape([string=''])**

把字符串中的"&", "<", ">", '"', "'", and "`"，转变为它们相对应的HTML实体。

注意: 没有其它字符转义。转变其它的字符要用到第三方库 he。

虽然字符">"是对称转义，但是像">" and "/"这些字符在HTML中没有特殊的含义不需要转义除非他们一个标签或非上市属性值的一部分。在Mathias Bynens’s article见更多。

Backticks 被转移因为ie小于9，它们可以摆脱属性值或者HTML注释。

使用HTML时你应该引用属性值以减少XSS向量。

####Arguments
* [string=''] (string): 要转义的字符串.

####Returns
(string): 返回转义之后的字符串.

####Example
```js
_.escape('zhi,&zheng');
//=>zhi,&amp;zheng
```

##escapeRegExp

**_.escapeRegExp([string=''])**

转义字符串中的正则表达式特殊字符："\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "[", "]", "{" and "}"

####Arguments

* [string=''] (string): 要转义的字符串.

####Returns

(string): 返回转义之后的字符串.

####Example
```js
_.escapeRegExp('[zhi]/[zheng]');
//=>\[zhi\]\/\[zheng\]
```

##kebabCase

**_.kebabCase([string=''])**

将字符串转变为kebab case形式'foo-bar'。

####Arguments

* [string=''] (string): 要转变的字符串.

####Returns

(string): 返回kebab cased字符串.

####Example
```js
_.kebabCase('zhi zheng');
zhi-zheng
```


##pad

**_.pad([string=''], [length=0], [chars=' '])**

如果字符串长度比length小，在字符串的左边和右边填充字符串（填充的字符串左右均分或者右边比左边多一个）。如果字符串超过长度就将字符串截断。

####Arguments

* [string=''] (string): 要填充的字符串.

* [length=0] (number): 填充之后的长度.

* [chars=' '] (string): 用来填充的字符串.

####Returns

(string): 返回填充之后的字符串.

####Example
```js
_.pad('zhi zheng',18);
//=>    zhi zheng     |
```

##padLeft

**_.padLeft([string=''], [length=0], [chars=' '])**

如果字符串长度比length小，在字符串左边填充字符串。如果字符串超过长度就将字符串截断。

####Arguments

* [string=''] (string): 要填充的字符串.

* [length=0] (number): 填充之后的长度.

* [chars=' '] (string): 用来填充的字符串.

####Returns

(string): 返回填充之后的字符串.

####Example
```js
_.padLeft('zhi zheng',18);
//=>         zhi zheng
```

##padRight

**_.padRight([string=''], [length=0], [chars=' '])**

如果字符串长度比length小，在字符串右边填充字符串。如果字符串超过长度就将字符串截断。

####Arguments
* [string=''] (string): 要填充的字符串.

* [length=0] (number): 填充之后的长度.

* [chars=' '] (string): 用来填充的字符串.

####Returns

(string): 返回填充之后的字符串.

####Example
```js
_.padRight('zhi zheng',18);
//=zhi zheng         |
```

##parseInt

**_.parseInt(string, [radix])**

将字符串变成一个指定基数的整数。如果未定义或0基数,使用基数10除非值为十六进制,在这种情况下使用基数16。

注意: 该方法符合ES5 parseInt的实现。

####Arguments

* string (string): 要改变的字符串.

* [radix] (number): 数值的基数.

####Returns

(number): 返回转变的整数.

####Example

```js
_.parseInt('18');
//=>18
```

##repeat

**_.repeat([string=''], [n=0])**

将给定的字符串重复n遍.

####Arguments

* [string=''] (string): 要重复的字符串.

* [n=0] (number): 重复字符串的次数.

####Returns

(string): 返回重复的字符串.

####Example
```js
_.repeat('18',2);
//=>1818
```

##snakeCase

**_.snakeCase([string=''])**

将字符串转变为snake case形式'foo_bar'。

####Arguments

* [string=''] (string): 要转变的字符串.

####Returns

(string): 返回snake case形式的字符串.

####Example
```js
_.snakeCase('zhi zheng');
//=>zhi_zheng
```


##startCase

**_.startCase([string=''])**

将字符串转变为startcase形式'Foo Bar'。

####Arguments

* [string=''] (string): 要转变的字符串.

####Returns

(string): 返回startcase形式的字符串.

####Example
```js
_.startCase('zhi zheng');
//=>Zhi Zheng
```


##startsWith

**_.startsWith([string=''], [target], [position=0])**

检查字符串是否以给定目标字符串开始。

####Arguments

* [string=''] (string): 要查找的字符串.

* [target] (string): 要查找的字符串.

* [position=string.length] (number): 查找的位置.

####Returns

(boolean): 如果是以目标字符开始返回true，否则返回false.

####Example
```js
_.startsWith('zhizheng','zhi');
//=>true
```
##template

**_.template([string=''], [options])**

返回一个编译模板功能,可以插入数据属性插入分隔符,HTML-escape窜改数据属性“转义”分隔符,并执行JavaScript在“评估”分隔符。数据属性可能访问模板上的自由变量。如果提供了设置对象优先于_。templateSettings值。

Note: 在创建_.template时，利用sourceURLs更容易调试。

编译的更多信息见lodash’s custom builds documentation .

有关Chrome扩展沙箱的更多信息见Chrome’s extensions documentation.

####Arguments
* [string=''] (string): 模板字符串.

* [options] (Object): 选择对象.

* [options.escape] (RegExp): HTML转义分隔符.

* [options.evaluate] (RegExp): 评估分隔符.

* [options.imports] (Object): 一个作为自由变量导入模板的对象。

* _ [options.interpolate] (RegExp): 插入分隔符.

* [options.sourceURL] (string): sourceURL模板编译的源代码。

* [options.variable] (string): 变量名的数据对象。

####Returns
(Function): 返回编译模板功能.

####Example
```js
https://lodash.com/docs/#template
```

##trim

**_.trim([string=''], [chars=whitespace])**

移除字符串前面的和后面的空格或指定字符的字符串。

####Arguments

* [string=''] (string): 要削减的字符串.

* [chars=whitespace] (string): 要在字符串中削减的字符串.

####Returns

(string): 返回削减的字符串.

####Example
```js
 _.trim('    zhizheng   ');
//=>zhizheng
```

##trimLeft

**_.trimLeft([string=''], [chars=whitespace])**

移除字符串中字符串前面的空格或指定的字符.

####Arguments
* [string=''] (string): 要削减的字符串 .

* [chars=whitespace] (string): 要在字符串中削减的字符.

####Returns

(string): 返回削减之后的字符串.

####Example
```js
_.trimLeft('    zhizheng   ');
//=>zhizheng   |
```

##trimRight

**_.trimRight([string=''], [chars=whitespace])**

移除字符串中字符串后面的空格或指定的字符.

####Arguments

* [string=''] (string): 要削减的字符串 .

* [chars=whitespace] (string): 要在字符串中削减的字符.

####Returns

(string): 返回削减之后的字符串.

####Example
```js
_.trimRight('    zhizheng   ')
//=>    zhizheng
```


##trunc

**_.trunc([string=''], [options], [options.length=30], [options.omission='…'], [options.separator])**

如果字符串长度大于给定的最大字符串长度，缩短字符串。缩短之后的字符串的最后一个字符为遗漏的字符，默认为'...'。

####Arguments

* [string=''] (string): 要缩短的字符串.

* [options] (Object|number): 选择对象或最大字符串长度.

* [options.length=30] (number): 字符串的最大长度.

* [options.omission='…'] (string): 显示文本的字符串是省略的.

* [options.separator] (RegExp|string): 分隔符模式截断

####Returns

(string): 返回缩短之后的字符串.

####Example
```js
            _.trunc('hello ! zhi zheng , I love you . ',{
                'length':26, //最多6个字母
                'omission':'[...]',  //给定结尾符为[...]
                'separator':/,/   //从','处分割，','后的都舍弃
            });
//=>hello ! zhi zheng [...]
```

##unescape

**_.unescape([string=''])**

_.escape的相反；这个方法将字符串中的HTML文体 &amp;, &lt;, &gt;, &quot;, &#39;, and &#96; 转变成相对应的字符串。

Note: 没有其它的HTML文体不被转义. 要转义其它的HTML文本要用到第三方库he。

####Arguments

[string=''] (string): 要反转义的字符串.

####Returns

(string): 返回反转义的字符串.

####Example
```js
_.unescape('zhi,&amp;zheng');
//=>zhi,&zheng
```

##words
**_.words([string=''], [pattern])**

将字符串中的字符分裂成一个数组.

####Arguments

* [string=''] (string): 要检查的字符串.

* [pattern] (RegExp|string): 匹配字符的模式T.

####Returns

(Array): 返回一个由字符串中的字符构成的数组.

####Example
```js
_.words('zhi,&, ,%,zheng');
//=>[ 'zhi', 'zheng' ]
```

