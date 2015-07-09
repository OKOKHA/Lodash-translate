var _ = require('lodash');
var expect = require('chai').expect;


describe('function  Mode', function () {
    describe('curry', function () {
        it('', function () {
            var abc = function(a, b, c) {
                return [a, b, c];
            };
            var re= _.curry(abc);
            console.log(re(1,2,3));
        })
    })
    describe('ary', function () {
        it('', function () {
            var re = _.map(['6', '8', '6'], _.ary(parseInt, 1));
            console.log(re);
        })
    })
    describe('bind', function () {
        it('', function () {
            var greet = function(greeting, punctuation) {
                return greeting + ' ' + this.user + punctuation;
            };
            var object = { 'user': 'fred' };
            var bound = _.bind(greet, object);
            var re = bound( 'hi','!');
            console.log(re);
        })
    })
    describe('bindAll', function () {
        it('', function () {
            var view = {
                'user': 'senina',
                'age':18
                }
            _.bindAll(view);
            console.log(_.bindAll(view));
        })
    })
    describe('bindKey', function () {
        it('', function () {
            var object = {
                'user': 'fred',
                'greet': function(greeting, punctuation) {
                    return greeting + ' ' + this.user + punctuation;
                }
            };
            var bound = _.bindKey(object, 'greet');
            var re = bound( 'hi','!');
            console.log(re);
        })
    })
    describe('defer', function () {
        it('', function () {
            _.defer(function(text) {
                console.log(text);
            }, 'asdfg');
        })
    })
    describe('delay', function () {
        it('', function () {
            _.delay(function(text) {
                console.log(text);
            }, 1000, 'assd');
        })
    })
    describe('flow', function () {
        it('', function () {
            function times(n){
                return n*3;
            }
            function square(n){
                return n*n;
            }
            var re = _.flow(times,square);
            var re1 = re(2);
            console.log(re1);
            expect(re1).to.equal(36);
        })
    })
    describe('flowRight', function () {
        it('', function () {
            function times(n){
                return n*3;
            }
            function square(n){
                return n*n;
            }
            var re = _.flowRight(times,square);
            var re1 = re(2);
            console.log(re1);
            expect(re1).to.equal(12);
        })
    })
    describe('memoize', function () {
        it('', function () {
            function times(n){
                return n*3;
            }
            function square(n){
                return n*n;
            }
            var re = _.memoize(times);
            var re1 = re(4);
            console.log(re1);
            expect(re1).to.equal(12);
        })
    })
    describe('modArgs', function () {
        it('', function () {
            function times(n){
                return n*3;
            }
            function square(n){
                return n*n;
            }
            var re = _.modArgs(function (x,y){
                return [x,y]
            },times,square);
            var re1 = re(1,2);
            console.log(re1);
            expect(re1.length).to.equal(2);
        })
    })
    describe('negate', function () {
        it('', function () {
            function times(n){
                return n%3==0;
            }
            var list=[1,2,3,4,5,6];
            var re1 = _.filter(list, _.negate(times));
            console.log(re1);
            expect(re1.length).to.equal(4);
        })
    })
    describe('once', function () {
        it('', function () {
            function times(n){
                return n*3;
            }
            var initialize = _.once(times);
            console.log(initialize(1));
            console.log(initialize(2));
        })
    })
    describe.only('rearg', function () {
        it('', function () {
            var rearged = _.rearg(function(a, b, c) {
                return [a, b, c];
            }, 2, 0, 1);
            console.log(rearged('a', 'c', 'b'));
        })
    })
})