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
    describe('first', function () {
        it('', function () {
            var list = [1, 2, 3, 4, 5, 6, 7]
            var result = _.first(list)
            console.log(result);
            expect(result.length).to.equal()
        })
    })
    describe('flatten',function(){
        it('',function(){
            var list = [1,2,[3,[4,5]]]
            var result = _.flatten(list,true)
            console.log(result);
            expect(result.length).to.equal(5)
        })
    })
    describe('flattenDeep',function(){
        it('',function(){
            var list= [1,2,[3,[4,5]]]
            var result= _.flattenDeep(list)
            console.log(result);
            expect(result.length).to.equals(5)
        })
    })
    describe('intersection',function(){
        it('',function(){
            var list1=[1,2,3]
            var list2=[1,2,4]
            var list3=[1,3,5]
            var result= _.intersection(list1,list2,list3)
            console.log(result);
            expect(result.length).to.equals(1)
        })
    })
    describe('last',function(){
        it('',function(){
            var list= [1,2,3,4,5]
            var result= _.last(list)
            console.log(result);
            //expect(result.length).to.equals(1)
        })
    })
    describe('pullAt',function(){
        it('',function(){
           // var list= [1,2,3,3,2,1]
            //var result= _.pullAt(list,0,3)
           var result1 = _.dropWhile([1,2,3,4,5,6],function(n){
                return n % 2 == 0;
           })
            console.log(result1);
            var result1 = _.dropRightWhile([1,2,3,4,5,6],function(n){
                return n>5;
            })
            console.log(result1);
            //expect(result.length).to.equals(2)
        })
    })
    describe('ew',function(){
        it('',function(){
            var result1 = _.remove([1,2,3,4,5,6],function(n){
                return n % 2 == 0;
            })
            console.log(result1);
            //expect(result.length).to.equals(2)
        })
    })
    describe('rest',function(){
        it('',function(){
            var result1 = _.rest([1,2,3,4,5,6])
            console.log(result1);
            //expect(result.length).to.equals(2)
        })
    })
    describe('slice',function(){
        it('',function(){
            var result = _.slice([1,2,3,4,5,6],1,4)
            console.log(result);
            expect(result.length).to.equals(3)
        })
    })
    describe('sort',function(){
        it('',function(){
            var result1 = _.takeRightWhile([1,2,3,4,5,6],function(n){
                return n > 3;
                })
            console.log(result1);
            var result2 = _.takeWhile([1, 2, 2, 4, 5, 6], function (n) {
                return n < 3;
            })
            console.log(result2);
            //expect(result.length).to.equals(2)
        })
    });
    describe('zip',function(){
        it('',function(){
           var result = _.zip([1,2,3,1,3],[1,2,3],[1,2,3,4])
           console.log(result);
            //console.log(_.unzipWith(result, _.add));
            //expect(result.length).to.equals(5)
        })
    })
    describe('zipWith',function(){
        it('',function(){
            var result = _.zipWith([1,2,3,4],[5,6,7,8,],[1,3],_.add)
            console.log(result);
            //console.log(_.unzipWith(result, _.add));
            //expect(result.length).to.equals(5)
        })
    })
    describe('collection',function() {
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
    describe('collection',function() {
        it('', function () {
            var users = [
                { 'user': 'aa',  'active': 3 },
                { 'user': 'fred',    'active': false },
                { 'user': false, 'active': 1}
            ];

// using the `_.matches` callback shorthand

            console.log( _.dropWhile(users, 'user'));
        })
    })
    describe.only('uniq',function() {
        it('', function () {
            //var aas = [{'aa':1},{'aa': 2},{'aa': 2},{'aa':3},{'aa':4}];
            //console.log(_.uniq([1,2,2,2,2,2],true));
            var aas = [{'aa':1},{'aa': 2},{'aa':2},{'aa':4}];
            console.log(_.uniq(aas,'aa',3));
        })
    })
    //describe.only('sorted',function() {
    //    it('', function () {
    //        //var aas = [{'aa':1},{'aa': 2},{'aa':3},{'aa':4}];
    //        console.log(_.sortedIndex([{ 'x': 30 }, { 'x': 50 }],  'x'));
    //    })
    //})

    //describe.only('find',function() {
    //    it('', function () {
    //        var users = [
    //            { 'user': 'barney',  'active': false },
    //            { 'user': 'fred',    'active': false },
    //            { 'user': 'pebbles', 'active': true }
    //        ];
    //        console.log( _.findIndex(users, 'active'));
    //    })
    //})



})