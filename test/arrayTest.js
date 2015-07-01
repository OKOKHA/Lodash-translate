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
        it('根据参数切割数组', function () {
            var list = [1, 2, 3, 4, 5, 6, 7]
            var result = _.first(list)
            console.log(result);
            expect(result.length).to.equal()
        })
    })
    describe.only('flatten',function(){
        it('',function(){
            var list = [1,2,[3,[4,5]]]
            var result = _.flatten(list,true)
            console.log(result);
            expect(result.length).to.equal(5)
        })
    })



})