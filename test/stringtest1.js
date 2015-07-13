var _ = require('lodash');
var expect = require('chai').expect;


describe('string  Mode', function () {
    describe('camelcase', function () {
        it('', function () {
            var re = _.camelCase('zhi zheng');
            console.log(re);
            expect(re.length).to.equal(8);
        })
    })
    describe('capitalize', function () {
        it('', function () {
            var re = _.capitalize('zhi zheng');
            console.log(re);
            expect(re.length).to.equal(9);
        })
    })
    describe('endsWith', function () {
        it('', function () {
            var re =_.endsWith('zhizheng','zheng');
            console.log(re);
            expect(re).to.equal(true);
        })
    })
    describe('startsWith', function () {
        it('', function () {
            var re =_.startsWith('zhizheng','zhi');
            console.log(re);
            expect(re).to.equal(true);
        })
    })
    describe('escape', function () {
        it('', function () {
            var re =_.escape('zhi,&zheng');
            console.log(re);
            expect(re.length).to.equal(14);
        })
    })
    describe('escapeRegExp', function () {
        it('', function () {
            var re =_.escapeRegExp('[zhi]/[zheng]');
            console.log(re);
            expect(re.length).to.equal(18);
        })
    })
    describe('kebabCase', function () {
        it('', function () {
            var re = _.kebabCase('zhi zheng');
            console.log(re);
            expect(re.length).to.equal(9);
        })
    })
    describe('snakeCase', function () {
        it('', function () {
            var re = _.snakeCase('zhi zheng');
            console.log(re);
            expect(re.length).to.equal(9);
        })
    })
    describe('startCase', function () {
        it('', function () {
            var re = _.startCase('zhi zheng');
            console.log(re);
            expect(re.length).to.equal(9);
        })
    })
    describe('pad', function () {
        it('', function () {
            var re = _.pad('zhi zheng',18);
            console.log(re);
            expect(re.length).to.equal(18);
        })
    })
    describe('padLeft', function () {
        it('', function () {
            var re = _.padLeft('zhi zheng',18);
            console.log(re);
            expect(re.length).to.equal(18);
        })
    })
    describe('padRight', function () {
        it('', function () {
            var re = _.padRight('zhi zheng',18);
            console.log(re);
            expect(re.length).to.equal(18);
        })
    })
    describe('parseInt', function () {
        it('', function () {
            var re = _.parseInt('18');
            console.log(re);
            expect(re).to.equal(18);
        })
    })
    describe('repeat', function () {
        it('', function () {
            var re = _.repeat('18',2);
            console.log(re);
            expect(re).to.equal('1818');
        })
    })
    describe('trim', function () {
        it('', function () {
            var re = _.trim('    zhizheng   ');
            console.log(re);
            expect(re.length).to.equal(8);
        })
    })
    describe('trimLeft', function () {
        it('', function () {
            var re = _.trimLeft('    zhizheng   ');
            console.log(re);
            expect(re.length).to.equal(11);
        })
    })
    describe('trimRight', function () {
        it('', function () {
            var re = _.trimRight('    zhizheng   ');
            console.log(re);
            expect(re.length).to.equal(12);
        })
    })
    describe('trunc', function () {
        it('', function () {
            var re = _.trunc('hello ! zhi zheng , I love you . ',{
                'length':26,
                'omission':'[...]',
                'separator':/,/
            });
            console.log(re);
            expect(re.length).to.equal(23);

        })
    })
    describe('unescape', function () {
        it('', function () {
            var re =_.unescape('zhi,&amp;zheng');
            console.log(re);
            expect(re.length).to.equal(10);
        })
    })
    describe('words', function () {
        it('', function () {
            var re =_.words('zhi,&, ,%,zheng');
            console.log(re);
            expect(re.length).to.equal(2);
        })
    })
})
