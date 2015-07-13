//exports functions and MyArray constructor for testing
exports.MyArray = MyArray;
exports.frequency = frequency;
exports.unique = unique;

//this constructer is creates and object that stores an array. This allows me to create prototypes without messing up the Array Object.
function MyArray(arr) {
  this.arr = arr;
};

MyArray.prototype.push = function() {
  for(var i = 0; i < arguments.length; i++){
    this.arr[this.arr.length] = arguments[i];;
  }
}

MyArray.prototype.pop = function() {
  var poppedValue = this.arr[this.arr.length - 1];

  delete this.arr[this.arr.length -1];
  this.arr.length--;

  return poppedValue;
}

MyArray.prototype.shift = function() {
  var shiftedValue = this.arr[0];

  for(var i = 0; i < this.arr.length; i++) {
    var next = i + 1;
    this.arr[i] = this.arr[next];
  }

  delete this.arr[this.arr.length -1];
  this.arr.length--;

  return shiftedValue;
}

MyArray.prototype.unshift = function () {
  var newArrLength = arguments.length + this.arr.length;
  var currentArrLength = this.arr.length;
  var count = 0;

  for(var i = newArrLength -1; i >= 0 ; i--) {
    if(count < currentArrLength) {
      this.arr[i] = this.arr[i - arguments.length];
      count++;
    }else{
      this.arr[i] = arguments[i];
    }
  }
}

//this function
function unique(arr) {
  var uniqueArray = [];
  var stringHash = {};
  var numberHash = {};

  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string') {
      if(stringHash[arr[i]] === null) {
        stringHash[arr[i]] = null;
      }else {
        uniqueArray.push(arr[i]);
        stringHash[arr[i]] = null;
      }

    }else if(typeof arr[i] === 'number') {
      if(numberHash[arr[i]] === null) {
        numberHash[arr[i]] = null;
      }else {
        uniqueArray.push(arr[i]);
        numberHash[arr[i]] = null;
      }
    }
  }

  return uniqueArray;
}

function frequency(arr) {
  var highest = {letter:"", count:0};
  var hash = {};
  var joinedString = arr.join('');

  for(var i = 0; i < joinedString.length; i++) {
    var letter = joinedString.charAt(i);
    hash[letter] = hash[letter] ? hash[letter] += 1 : 1;
    if(hash[letter] > highest.count) {
      highest.letter = letter;
      highest.count = hash[letter];
    }
  }

  return highest.letter;
}
