require('coffe-script');
_=require 'lodash ';
expect=require('chai').expect;
require './stringtest.js';
describe 'string mode',()->
  describe 'camelCase',()->
    it '',()->
      string='asd';
      _.camelCase(string);
      expect(string.length).to.equal();

