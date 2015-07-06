var _=require('lodash');
var expect = require('chai').expect;

describe('Chain Mode',function(){
    describe('chain',function(){
        it('',function(){
            var users = [
                { 'user': 'barney',  'age': 36 },
                { 'user': 'fred',    'age': 40 },
                { 'user': 'pebbles', 'age': 18 }
            ];
            var aa = _.chain(users)
                .min(function(users){
                    return users.age;
                })
                .value();
            console.log(aa);
        })
    })
    describe('tap',function(){
        it('',function(){
            var re=_([1, 2, 3])
                .tap(function(array) {
                    return array.pop();
                })
                .reverse()
                .value();
            console.log(re);

        })
    })
    describe('thru',function(){
        it('',function(){
            var re=_([1, 2, 3])
                .thru(function(array) {
                    return array.pop();
                })
               .value();
            console.log(re);

        })
    })
    describe('prototype.chain',function(){
        it('',function(){
            var users = [
                { 'user': 'barney',  'age': 36 },
                { 'user': 'fred',    'age': 40 },
                { 'user': 'pebbles', 'age': 18 }
            ];
            var rea=_(users).first();
            console.log(rea);
            var re=_(users).chain()
                .last()
                .pick('age')
                .value();
            console.log(re);
        })
    })
    describe('prototype.commit',function(){
        it('',function(){
            var users = [
                { 'user': 'barney',  'age': 36 },
                { 'user': 'fred',    'age': 40 },
                { 'user': 'pebbles', 'age': 18 }
            ];

            var re=_(users).commit()
                .last()
                //.pick('age')
                //.value();
            console.log(re);
        })
    })
    describe('prototype.concat',function(){
        it('',function(){
            var list = [1,2,3];
            var re=_(list).concat(1,[2,3],[[3,4]])
                .value();
            console.log(re);
        })
    })
    describe('prototype.plant',function(){
        it('',function(){
            var array = [1, 2];
            var other = [3, 4, 5];
            var re = _(array).plant(other);
            console.log(re.value());

            var array1 = [1, 2];
            var wrapped = _(array1).map(function(value) {
                return Math.pow(value, 3);
            });
            console.log(wrapped.value());
            var other1 = [3, 4];
            var otherWrapped = wrapped.plant(other1);
            console.log(otherWrapped.value());
        })
    })
    describe('prototype.reverse',function(){
        it('',function(){
            console.log(_([1,2,3]).reverse().value());
        })
    })
    describe('prototype.tostring',function(){
        it('',function(){
            console.log(_([1, 2, 3]).toString());
        })
    })
    describe.only('prototype.value',function(){
        it('',function(){
            console.log(_([1, 2, 3]).value());
        })
    })


})