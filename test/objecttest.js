var _ = require('lodash');
var expect = require('chai').expect;


describe('object  Mode', function () {
    describe('assign', function () {
        it('', function () {
            console.log(_.assign({'aa':'asd'},{'ss':'sdf'},{'dd':'dfg'}));
            console.log(_.assign({'aa':'asd'},{'ss':'sdf'},{'aa':'dfg'}));
        })
    })
    describe('create', function () {
        it('', function () {
            console.log(_.create({'aa': 'asd', 'ss': 'sdf'}, {'aa': 'bb'}));

        })
    })
    describe('defaults', function () {
        it('', function () {
            console.log(_.defaults({'aa':'asd','ss':'sdf'}, {'aa':'bb'}));
        })
    })
    describe('defaultsDeep', function () {
        it('', function () {
            console.log(_.defaultsDeep({'aa':'bb'},{'aa':'asd','ss':'sdf'} ));
        })
    })
    describe.only('findKey', function () {
        it('', function () {
            var aas= {'aa':'bb','ss':'asd'};
            //console.log(_.findKey(aas));
            expect(_.findKey(aas)).equal("aa")

        })
    })
})