var _ = require('lodash');
var expect = require('chai').expect;


describe('math mode',function(){
    describe('add',function() {
        it('', function () {
            console.log(_.add(1,2));
        })
    })
    describe('ceil',function(){
        it('',function(){
            console.log(_.ceil(4.123456,3));
            console.log(_.ceil(123456,-2));
        })
    })
    describe('floor',function(){
        it('',function(){
            console.log(_.floor(4.123456,3));
            console.log(_.floor(123456,-2));
        })
    })
    describe('max',function(){
        it('',function(){
            var aas=[{aa:'a','age':12},{aa:'s','age':23},{aa:'d','age':45}];
            console.log(_.max(aas,{aa:'s','age':24}));
            console.log(_.max(aas,'age'));
            console.log(_.max(aas,'age',13));
        })
    })
    describe('min',function(){
        it('',function(){
            var aas=[{aa:'a','age':23},{aa:'s','age':12},{aa:'d','age':45}];
            console.log(_.min(aas,{aa:'s','age':24}));
            console.log(_.min(aas,'age'));
            console.log(_.min(aas,'age',13));
        })
    })
    describe('round',function(){
        it('',function(){
            console.log(_.round(4.32,1));
            console.log(_.round(4.35,1));
        })
    })
    describe('sum',function(){
        it('',function(){
            console.log(_.sum([1,2]));
            console.log(_.sum([{'a':1},{'a':2},{'a':3}],'a'));
        })
    })
})