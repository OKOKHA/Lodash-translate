_=require 'lodash'
expect=require('chai').expect
describe 'array' , () ->
  describe 'chunk' , ()->
    it '根据参数切割数组',()->
      list = [1, 2, 3, 4, 5, 6, 7]
      result = _.chunk(list,2)
      console.log result
      expect(result.length).to.equal(4)