const prox = require('../index.js');


prox.set = (target, prop, value) => {
     if (target[prop]) { // if it's a main thing like insides or type
          target[prop] = value;
      }
      else if (Number(prop)+1 && Number(prop) <= target.length-1) { // if it's a number
          target.set(Number(prop), value);
      }
      else if (typeof prop == "string") { // if it's a string
          target.set(prop, value);
    }
    return true;
};
