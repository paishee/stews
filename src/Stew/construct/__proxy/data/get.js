const prox = require('../index.js');
const Stew = require('../../../index.js');


prox.get = (target, prop) => {
    try {
        if (Object.getOwnPropertyNames(Stew.prototype).includes(prop) || target[prop]) { // if it's a function or main thing
            return target[prop];
        }
        else if (Number(prop)+1 && Number(prop) <= target.length-1) { // if it's a number
            return target.values[Number(prop)];
        }
        else if (typeof prop == "string") { // if it's string
            return target.get(prop);
        }
        else {
            return false;
        }
    } catch(e) {
        return target[prop];
    }
};
