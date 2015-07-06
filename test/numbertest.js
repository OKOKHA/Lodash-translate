var _=require('lodash');
var expect=require('chai').expect;

describe('number mode',function(){
    describe('inrange',function(){
        it('',function(){
            console.log(_.inRange(2,1,4));
            console.log(_.inRange(4,4));
        })
    })
    describe('random',function(){
        it('',function(){
            console.log(_.random(24));
            console.log(_.random(2.1,24.2));
            console.log(_.random(0,24,true));
        })
    })
})