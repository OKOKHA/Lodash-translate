/**
 * Created by waitfish on 15/7/1.
 */
var _ = require('lodash');
var expect = require('chai').expect;

describe('collection  Mode', function () {
    describe('dropWhile',function() {
        it('', function () {
            var aas = [{'aa': 'asd'},
                {'aa': 'dfg'},
                {'aa': false},
                {'aa': 'asd'}]
            //console.log(_.dropRightWhile(aas, 'aa','asd'));
            //console.log(_.dropRightWhile(aas, {'aa':'dfg'}));
            console.log(_.dropWhile(aas,'aa','asd'));
        })
    })

    describe('uniq',function() {
        it('', function () {
            //var aas = [{'aa':1},{'aa': 2},{'aa': 2},{'aa':3},{'aa':4}];
            //console.log(_.uniq([1,2,2,2,2,2],true));
            var aas = [{'aa':1},{'aa': 2},{'aa':2},{'aa':4}];
            console.log(_.uniq(aas,'aa',3));
        })
    })

    describe('every',function() {
        it('', function () {
            var aas = [{'aa':1},{'aa': 1},{'aa':1},{'aa':1}];
            console.log(_.every(aas,'aa',1));
        })
    })

    describe('sortByAll',function(){
        it('',function(){
            console.log(_.sortByAll([1, 3, 4], function(n) {
                return Math.sin(n);
            }));
            var users = [
                { 'user': 'fred',   'age': 48 },
                { 'user': 'barney', 'age': 34 },
                { 'user': 'fred',   'age': 42 },
                { 'user': 'barney', 'age': 36 }
            ];
            console.log(_.sortByOrder(users, [ 'age'], ['desc']));

            var aas=[
                { 'aa': 'aa', 'age': 15 },
                { 'aa': 'ss', 'age': 25 },
                { 'aa': 'aa', 'age': 17 },
                { 'aa': 'ss', 'age': 27 }
            ];
            console.log(_.sortByOrder(aas, ['aa','age'],['desc','desc']));
            _.defer(function(stamp) {
                console.log(_.now() - stamp);
            }, _.now());
            console.log(_.now());
        })
    })

    describe('map',function() {
        it('', function () {
            var aas = { 'a':1, 'b': 1 };
            console.log(_.size(aas));
            console.log(_.map({ 'a':1, 'b': 1 },function(n,key){
                return key;
            } ));

            console.log(_.size('asdfg'));
        })
    })

})