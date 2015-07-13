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
    describe('findKey', function () {
        it('', function () {
            var aas= {'aa':'bb','ss':'asd'};
            //console.log(_.findKey(aas));
            expect(_.findKey(aas)).equal("aa")

        })
    })
    describe('findLastKey', function () {
        it('', function () {
            var list = {'asd':{'a':'asd'},'asdf':{'a':'sdf'},'asdfg':{'a':'dfg'}};
            var re1=_.findLastKey(list);
            console.log(re1);
            expect(re1.length).to.equal(5);
            var re2= _.findLastKey(list,{'a':'asd'});
            console.log(re2);
            expect(re2.length).to.equal(3);
            var re3= _.findLastKey(list,'a');
            console.log(re3);
            expect(re3.length).to.equal(5);
        })
    })
    describe('forIn', function () {
        it('', function () {
            function Foo() {
                this.a = 1;
                this.b = 2;
            }
            console.log(_.forIn(new Foo ));
            var re= _.forIn(new Foo);
            console.log(re.key);
            //expect(re.length).to.equal(2);
        })
    })
    describe('forInRight', function () {
        it('', function () {
            function Foo() {
                this.a = 1;
                this.b = 2;
            }

            Foo.prototype.c = 3;

            _.forInRight(new Foo, function(value, key) {
                console.log(key);
            });
        })
    })
    describe('forown',function(){
        it('',function(){
            function Foo(){
                this.a=1;
                this.b=2;
                this.c=3;
            }
            _.forOwn(new Foo,function(value,key){
                console.log(key);
                //expect(key).to.equal('c');
            });
        })
    })
    describe('forownright',function(){
        it('',function(){
            function Foo(){
                this.a=1;
                this.b=2;
                this.c=3;
            }
            _.forOwnRight(new Foo,function(value,key){
                console.log(value);

                //expect(value).to.equal(3);
            });
        })
    })

    describe('functions',function(){
        it('',function(){
            //console.log(_.functions(_));
            function a(){
                this.aa=1;
                this.ss=2;
            }
            _.functions(new a,function(value,key){
                console.log(key);
            });
        })
    })

    describe('get',function(){
        it('',function(){
            var re = _.get({'a':1},'a');
            console.log(re);
            expect(re).to.equal(1);
        })
    })
    describe('has',function(){
        it('',function(){
            var re = _.has({'a':1},'a');
            console.log(re);
            expect(re).to.equal(true);
        })
    })
    describe('invert',function(){
        it('',function(){
            var re = _.invert({'a':1,'s':2,'d':3,'f':1},true);
            console.log(re);
            //expect(re.length).to.equal(3);
        })
    })
    describe('keys',function(){
        it('',function(){
            var re = _.keys({'a':1,'s':2,'d':3,'f':1});
            console.log(re);
            expect(re.length).to.equal(4);
        })
    })
    describe('keysIn',function(){
        it('',function(){
            function aa(){
                this.a=1;
                this.b=2;
                this.c=2
            }
            aa.prototype.d = 3;
            var re = _.keysIn(new aa);
            console.log(re);
            expect(re.length).to.equal(4);
        })
    })
    describe('mapKeys',function(){
        it('',function(){
            var list={'a':1,'s':2,'d':3,'f':1}
            var re = _.mapKeys(list,function(value,key){
                return key + value;
            });
            console.log(re);
            var key,i=0;
            for(key in list){
                i++;
            }
            expect(i).to.equal(4);
        })
    })
    describe('mapValues',function(){
        it('',function(){
            var users = {
                'fred':    { 'user': 'fred',    'age': 40 },
                'pebbles': { 'user': 'pebbles', 'age': 1 }
            };
            var re = _.mapValues(users,{ 'user': 'fred',    'age': 40 });
            console.log(re);
            var re1=_.mapValues(users,'age');
            console.log(re1);
            var re2= _.mapValues(users,'age',40);
            console.log(re2);
            var key,i=0;
            for(key in users){
                i++;
            }
            expect(i).to.equal(2);
        })
    })
    describe('merge',function(){
        it('',function(){
            var aas = [{'aa':'asd'}, {'aa':'sdf'}];
            var sss = [{'ss': 'qwe'},{'ss': 'wer'}];
            var re = _.merge(aas,sss);
            console.log(re);
            var key,i=0;
            for(key in re){
                i++;
            }
            expect(i).to.equal(2);
        })
    })
    describe('omit',function(){
        it('',function(){
            var aas = {'aa':'asd', 'ss':'sdf'};
            var re = _.omit(aas,'aa');
            console.log(re);
            var key,i=0;
            for(key in re){
                i++;
            }
            expect(i).to.equal(1);
        })
    })
    describe('pick',function(){
        it('',function(){
            var aas = {'aa':'asd', 'ss':'sdf'};
            var re = _.pick(aas,'aa');
            console.log(re);
            var key,i=0;
            for(key in re){
                i++;
            }
            expect(i).to.equal(1);
        })
    })
    describe('pairs',function(){
        it('',function(){
            var aas = {'aa':'asd', 'ss':'sdf'};
            var re = _.pairs(aas,'aa');
            console.log(re);
            expect(re.length).to.equal(2);
        })
    })
    describe('set',function(){
        it('',function(){
            var object = { 'a': [{ 'b': { 'c': 3 } }] };

            _.set(object, 'a[0].b.c', 4);

            expect(object.a[0].b.c).to.equal(4);
        })
    })
    describe('values',function(){
        it('',function(){
            var list = {'a':'asd' ,'s':'dfg'};
            console.log(_.values(list)) ;
            expect(_.values(list).length).to.equal(2);
        })
    })
    describe('valuesIn',function(){
        it('',function(){
            function s(){
                this.a=1;
                this.b=2;
            }
            s.prototype.c=3;
            console.log(_.valuesIn(new s)) ;
            expect(_.valuesIn(new s).length).to.equal(3);
        })
    })
    describe('result',function(){
        it('',function(){
            var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
            var re = _.result(object, 'a[0].b.c1');expect(re).to.equal(3);
            var re1 = _.result(object, 'a[0].b.c2');expect(re1).to.equal(4);
            var re2 = _.result(object, 'a.b.c', 'default');expect(re2).to.equal('default');
        })
    })
    describe('transform',function(){
        it('', function(){
            var re = _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
                result[key] = n * 3;
            });
            console.log(re);
            var key,i=0;
            for(key in re){
                i++;
            }
            expect(i).to.equal(2);
        })
    })


})