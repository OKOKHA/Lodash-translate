/**
 * Created by waitfish on 15/7/1.
 */
var _ = require('lodash');
var expect = require('chai').expect;


describe('Array  Mode', function () {
    describe('chunk', function () {
        it('根据参数切割数组', function () {
            var list = [1, 2, 3, 4, 5, 6, 7]
            var result = _.chunk(list, 2)
            console.log(result);
            expect(result.length).to.equal(4)
        })
    })



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

    //describe.only('uniq',function() {
    //    it('', function () {
    //        //var aas = [{'aa':1},{'aa': 2},{'aa': 2},{'aa':3},{'aa':4}];
    //        //console.log(_.uniq([1,2,2,2,2,2],true));
    //        var aas = [{'aa':1},{'aa': 2},{'aa':2},{'aa':4}];
    //        console.log(_.uniq(aas,'aa',3));
    //    })
    //})

    //describe.only('every',function() {
    //    it('', function () {
    //        var aas = [{'aa':1},{'aa': 1},{'aa':1},{'aa':1}];
    //        console.log(_.every(aas,'aa',1));
    //    })
    //})

    describe('collection',function(){
        it('',function(){
            //console.log(_.sortByAll([1, 3, 4], function(n) {
            //    return Math.sin(n);
            //}));
            //var users = [
            //    { 'user': 'fred',   'age': 48 },
            //    { 'user': 'barney', 'age': 34 },
            //    { 'user': 'fred',   'age': 42 },
            //    { 'user': 'barney', 'age': 36 }
            //];
            //console.log(_.sortByOrder(users, [ 'age'], ['desc']));

            var aas=[
                { 'aa': 'aa', 'age': 15 },
                { 'aa': 'ss', 'age': 25 },
                { 'aa': 'aa', 'age': 17 },
                { 'aa': 'ss', 'age': 27 }
            ];
            console.log(_.sortByOrder(aas, ['aa','age'],['desc','desc']));
            //console.log(_.sortByOrder(users));
            //var aas = [{'aa': 2,'ss':'aa'}, {'aa': 3,'ss':'aa'},  {'aa': false},{'aa':true}];
            //console.log(_.where(aas,{'ss':'aa'}));
        })
    })

    //describe.only('collection',function() {
    //    it('', function () {
    //        var aas = { 'a':1, 'b': 1 };
    //        console.log(_.size(aas));
    //        console.log(_.map({ 'a':1, 'b': 1 },function(n,key){
    //            return key;
    //        } ));
    //
    //        console.log(_.size('asdfg'));
    //    })
    //})

})