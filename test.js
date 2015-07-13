var expect = require('chai').expect;

var arrayMethods = require('./array-methods');
var MyArray = arrayMethods.MyArray;
var unique = arrayMethods.unique;
var frequency = arrayMethods.frequency;

describe('MyArray.prototype.push', function() {

  var myArray = new MyArray([1,2,3]);
  myArray.push(4, '5');

  it('should append items to the end of the array', function() {
    expect(myArray.arr).to.eql([1,2,3,4,'5']);
  });
  it('should add to the length of the array', function() {
    expect(myArray.arr.length).to.eql(5);
  });
});

describe('MyArray.prototype.pop', function() {

  var myArray = new MyArray([1,2,3]);
  var popped = myArray.pop();

  it('should return element from end of array', function() {
    expect(popped).to.eql(3);
  });
  it('should delete the last element from array', function() {
    expect(myArray.arr).to.eql([1,2]);
  });
  it('should shorten the array length', function() {
    expect(myArray.arr.length).to.eql(2);
  });
});

describe('MyArray.prototype.shift', function() {

  var myArray = new MyArray([1,2,3]);
  var unshifted = myArray.shift();

  it('should return element from end of array', function() {
    expect(unshifted).to.eql(1);
  });
  it('should delete the last element from array', function() {
    expect(myArray.arr).to.eql([2,3]);
  });
  it('should shorten the array length', function() {
    expect(myArray.arr.length).to.eql(2);
  });
});


describe('MyArray.prototype.unshift', function() {

  var myArray = new MyArray([1,2,3]);
  myArray.unshift(-1, 0);

  it('should append items to the beginning of the array', function() {
    expect(myArray.arr).to.eql([-1,0,1,2,3]);
  });
  it('should add to the length of the array', function() {
    expect(myArray.arr.length).to.eql(5);
  });
});

describe('unique', function() {
  it('should return an array with no duplicates', function() {
    expect(unique(['bob', 'bob', 1, 1, '1','steve', 2])).to.eql(['bob', 1, '1', 'steve', 2]);
  });
});

describe('frequency', function() {
  it('should return the most common letter', function() {
    expect(frequency(['snow', 'stark', 'greyjoy', 'sansa'])).to.eql('s');
  });
});
