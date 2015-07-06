var _ = require('lodash');
var expect = require('chai').expect;

describe('object  Mode', function () {
    describe('assign', function () {
        it('', function () {
            console.log(_.assign({'aa':'asd'},{'ss':'sdf'},{'dd':'dfg'}));
            console.log(_.assign({'aa':'asd'},{'ss':'sdf'},{'aa':'dfg'}));
        })
    })
    describe.only('create', function () {
        it('', function () {
            console.log(_.create({'aa':'asd','ss':'sdf'}, {'aa':'bb'}));
            //console.log(_.assign({'aa':'asd'},{'ss':'sdf'},{'aa':'dfg'}));
        })
    })
})