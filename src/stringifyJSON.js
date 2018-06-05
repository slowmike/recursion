// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var arr = [];
  var objs = [];

  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return ''+obj;
  }

  if(typeof obj === 'string') {
    return '"'+obj+'"';
  }

  if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return '[]';
    }
    for(var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '['+arr+']';
  }

  if(obj instanceof Object) {
    var keys = Object.keys(obj);
    if(obj.length === 0) {
      return '{}'
    }
    for(var i = 0; i < keys.length; i++) {
      var keyStr = '"'+keys[i]+'":';
      if(obj[keys[i]] instanceof Function || obj[keys[i]] === undefined) {
        return '{}';
      } else {
        objs.push(keyStr+stringifyJSON(obj[keys[i]]));
      }
    }
    return "{"+objs+"}";
  }

};
